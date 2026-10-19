/**
 * Rafraichit la note et le nombre d'avis de la fiche Google Business Profile.
 *
 * Lance au prebuild : les chiffres affiches sur le site sont donc ceux du
 * dernier deploiement. Le worker worker-cron declenche un rebuild chaque lundi
 * via un Deploy Hook Pages pour qu'ils restent a jour sans intervention.
 *
 * On ne recupere QUE `rating` et `userRatingCount` : deux nombres. Les textes
 * des avis restent saisis a la main dans src/lib/reviews.ts, parce que l'API
 * Places n'en renvoie que 5 au maximum et choisit lesquels.
 * https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places
 *
 * Ce script ne fait JAMAIS echouer le build. Si Google ne repond pas
 * correctement, il garde la derniere note valide, prise dans cet ordre :
 *   1. celle publiee en production (/google-rating.json), plus recente que le
 *      depot des qu'un rebuild hebdomadaire a reussi ;
 *   2. a defaut, celle versionnee dans src/lib/google-rating.json.
 *
 * Il ecrit deux fichiers :
 *   - src/lib/google-rating.json, importe par le site ;
 *   - public/google-rating.json, publie tel quel. C'est lui que lit le chien de
 *     garde du worker de contact (worker/src/watchdog.ts) pour alerter quand le
 *     rafraichissement est en panne.
 */

import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SRC_PATH = path.join(ROOT, 'src', 'lib', 'google-rating.json');
const PUBLIC_PATH = path.join(ROOT, 'public', 'google-rating.json');
const LIVE_URL = 'https://artdesjardins-paysagiste.fr/google-rating.json';

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const TIMEOUT_MS = 10_000;

/**
 * Note exploitable ou null. Une fiche videe, une reponse partielle ou un champ
 * manquant ne doivent pas ecraser des chiffres corrects par des zeros.
 */
function valide(data) {
  if (!data || typeof data !== 'object') return null;
  const { rating, userRatingCount, fetchedAt } = data;
  if (typeof rating !== 'number' || rating <= 0 || rating > 5) return null;
  if (!Number.isInteger(userRatingCount) || userRatingCount <= 0) return null;
  if (typeof fetchedAt !== 'string' || Number.isNaN(Date.parse(fetchedAt))) return null;
  return { rating, userRatingCount, fetchedAt };
}

/** Appelle l'API Places. Renvoie `{ note }` ou `{ erreur }`, ne leve jamais. */
async function interrogeGoogle() {
  if (!API_KEY || !PLACE_ID) {
    return { erreur: "GOOGLE_MAPS_API_KEY ou GOOGLE_PLACE_ID absent de l'environnement" };
  }
  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(PLACE_ID)}`, {
      headers: {
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'rating,userRatingCount',
      },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!response.ok) {
      // Le corps porte la raison exacte (cle refusee, facturation, quota) : on
      // en garde le debut pour que l'alerte soit actionnable sans fouiller les
      // logs de build.
      const detail = (await response.text().catch(() => '')).replace(/\s+/g, ' ').slice(0, 200);
      return { erreur: `API Places ${response.status} ${response.statusText} ${detail}`.trim() };
    }
    const data = await response.json();
    // Horodatage complet, et non la date seule : la valeur de repli versionnee
    // porte une date nue, si bien qu'un appel reussi le meme jour aurait ete
    // indiscernable d'un appel jamais effectue.
    const note = valide({ ...data, fetchedAt: new Date().toISOString() });
    if (!note) return { erreur: `reponse inexploitable de l'API Places : ${JSON.stringify(data).slice(0, 200)}` };
    return { note };
  } catch (error) {
    return { erreur: `API Places injoignable (${error.message})` };
  }
}

/** Derniere note valide connue : la plus recente entre la production et le depot. */
async function derniereNoteValide() {
  const versionnee = valide(JSON.parse(await readFile(SRC_PATH, 'utf8')));

  let publiee = null;
  try {
    const response = await fetch(LIVE_URL, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (response.ok) publiee = valide(await response.json());
  } catch {
    // Premier deploiement ou site injoignable : le depot fait foi.
  }

  if (publiee && (!versionnee || Date.parse(publiee.fetchedAt) > Date.parse(versionnee.fetchedAt))) {
    return { note: publiee, source: 'production' };
  }
  return { note: versionnee, source: 'depot' };
}

async function main() {
  const { note, erreur } = await interrogeGoogle();

  let resultat;
  if (note) {
    resultat = note;
    console.log(`[google-rating] ${note.rating}/5 sur ${note.userRatingCount} avis`);
  } else {
    const repli = await derniereNoteValide();
    if (!repli.note) {
      console.error(`[google-rating] Aucune note valide disponible, fichiers laisses en l'etat : ${erreur}`);
      return;
    }
    resultat = { ...repli.note, error: erreur };
    console.warn(`[google-rating] ${erreur}. Derniere note valide conservee (${repli.source}, ${repli.note.fetchedAt}).`);
  }

  // Le site n'a besoin que des trois champs de la note : ecrits seuls, un build
  // local sans cle laisse le fichier versionne intact.
  const { rating, userRatingCount, fetchedAt } = resultat;
  await writeFile(SRC_PATH, versJson({ rating, userRatingCount, fetchedAt }), 'utf8');

  // `checkedAt` date ce build, `fetchedAt` le dernier appel reussi : leur ecart
  // dit au chien de garde si c'est Google ou la chaine de build qui est en panne.
  await writeFile(PUBLIC_PATH, versJson({ ...resultat, checkedAt: new Date().toISOString() }), 'utf8');
}

function versJson(data) {
  return `${JSON.stringify(data, null, 2)}\n`;
}

main().catch((error) => {
  // Filet ultime : une erreur imprevue ne doit pas bloquer la mise en ligne.
  console.error(`[google-rating] Erreur inattendue, valeurs actuelles conservees : ${error.message}`);
});
