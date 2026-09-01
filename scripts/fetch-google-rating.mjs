/**
 * Rafraichit la note et le nombre d'avis de la fiche Google Business Profile.
 *
 * Lance au prebuild : les chiffres affiches sur le site sont donc ceux du
 * dernier deploiement. Un cron hebdomadaire declenche un rebuild pour qu'ils
 * restent a jour sans intervention (cf. .github/workflows/refresh-google-rating.yml).
 *
 * On ne recupere QUE `rating` et `userRatingCount` : deux nombres. Les textes
 * des avis restent saisis a la main dans src/lib/reviews.ts, parce que l'API
 * Places n'en renvoie que 5 au maximum et choisit lesquels.
 * https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places
 *
 * Ce script ne fait JAMAIS echouer le build : cle absente, API en erreur ou
 * reponse incoherente, il conserve simplement les dernieres valeurs connues.
 */

import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.join(__dirname, '..', 'src', 'lib', 'google-rating.json');

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const TIMEOUT_MS = 10_000;

/** Sortie en succes : le fichier existant reste la source de verite. */
function skip(reason) {
  console.log(`[google-rating] Ignore, valeurs actuelles conservees : ${reason}`);
  process.exit(0);
}

async function main() {
  if (!API_KEY || !PLACE_ID) {
    skip('GOOGLE_MAPS_API_KEY ou GOOGLE_PLACE_ID absent de l\'environnement');
  }

  let response;
  try {
    response = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(PLACE_ID)}`, {
      headers: {
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'rating,userRatingCount',
      },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch (error) {
    skip(`appel a l'API Places impossible (${error.message})`);
  }

  if (!response.ok) {
    skip(`l'API Places a repondu ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const rating = data.rating;
  const userRatingCount = data.userRatingCount;

  // Une fiche videe, une reponse partielle ou un champ manquant ne doivent pas
  // ecraser des chiffres corrects par des zeros.
  if (typeof rating !== 'number' || rating <= 0 || rating > 5) {
    skip(`note invalide dans la reponse (${JSON.stringify(rating)})`);
  }
  if (!Number.isInteger(userRatingCount) || userRatingCount <= 0) {
    skip(`nombre d'avis invalide dans la reponse (${JSON.stringify(userRatingCount)})`);
  }

  const payload = {
    rating,
    userRatingCount,
    fetchedAt: new Date().toISOString().slice(0, 10),
  };

  await writeFile(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log(`[google-rating] ${rating}/5 sur ${userRatingCount} avis`);
}

main();
