/**
 * Affiche les avis Google absents de src/lib/reviews.ts, deja mis en forme.
 *
 * A lancer a la main quand le compteur du site depasse le nombre d'avis
 * affiches : `pnpm avis:check`. Il n'ecrit rien, il propose du texte a coller.
 *
 * Pourquoi l'API et non un scraper : les conditions de Google Maps Platform
 * citent nommement comme scraping interdit le fait de "copy and save business
 * names, addresses, or user reviews". L'API repond a la meme question
 * officiellement, sans navigateur a piloter et sans casser a chaque refonte de
 * l'interface de Maps.
 *
 * Limite assumee : l'API ne renvoie que 5 avis, et c'est elle qui choisit
 * lesquels. Pour reperer des nouveautes c'est suffisant, les avis recents etant
 * les mieux classes. Pour retrouver un avis ancien jamais repris, il faut passer
 * par la fiche.
 *
 * Les avis ne sont ni ecrits ni mis en cache : ils sont affiches, puis oublies.
 */

import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const REVIEWS_PATH = path.join(ROOT, 'src', 'lib', 'reviews.ts');

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const TIMEOUT_MS = 15_000;

/** Longueur de l'empreinte de texte servant a reconnaitre un avis deja repris. */
const EMPREINTE_LONGUEUR = 60;

/**
 * Reduit un texte a ses seules lettres et chiffres, sans accents ni casse.
 *
 * La comparaison ne peut pas etre litterale : les textes du site ont recu des
 * corrections de coquilles, et le fichier contient de la ponctuation, des
 * retours a la ligne et du code autour. Cette normalisation survit a tout cela.
 */
function normalise(texte) {
  return texte
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

/** Debut normalise d'un texte, assez long pour identifier un avis sans ambiguite. */
function empreinte(texte) {
  return normalise(texte).slice(0, EMPREINTE_LONGUEUR);
}

/** Abrege le nom de famille des particuliers, comme le fait reviews.ts. */
function abrege(nom) {
  const morceaux = nom.trim().split(/\s+/);
  if (morceaux.length < 2) return nom.trim();
  return `${morceaux[0]} ${morceaux[morceaux.length - 1].charAt(0).toUpperCase()}.`;
}

function echappe(texte) {
  return texte.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function bloc(avis) {
  const multiligne = avis.texte.includes('\n');
  const texte = multiligne
    ? `\`${echappe(avis.texte)}\``
    : `'${avis.texte.replace(/'/g, "\\'")}'`;

  return `  {
    author: '${abrege(avis.auteur).replace(/'/g, "\\'")}',
    url: '${avis.url}',
    rating: ${avis.note},
    date: '${avis.date}',
    text: ${texte},
  },`;
}

async function main() {
  if (!API_KEY || !PLACE_ID) {
    console.error(
      'GOOGLE_MAPS_API_KEY et GOOGLE_PLACE_ID doivent etre definis.\n' +
        'Exemple : GOOGLE_MAPS_API_KEY=... GOOGLE_PLACE_ID=... pnpm avis:check',
    );
    process.exit(1);
  }

  const dejaEnLigne = await readFile(REVIEWS_PATH, 'utf8');

  const reponse = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(PLACE_ID)}?languageCode=fr`,
    {
      headers: {
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews',
      },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    },
  );

  if (!reponse.ok) {
    console.error(`L'API Places a repondu ${reponse.status} ${reponse.statusText}`);
    console.error(await reponse.text());
    process.exit(1);
  }

  const data = await reponse.json();
  const nom = data.displayName?.text ?? '(sans nom)';

  console.log(`\nFiche : ${nom}`);
  console.log(`Note  : ${data.rating} sur ${data.userRatingCount} avis`);
  console.log(`L'API en renvoie ${data.reviews?.length ?? 0}, son maximum etant 5.\n`);

  const avis = (data.reviews ?? []).map((r) => ({
    auteur: r.authorAttribution?.displayName ?? 'Anonyme',
    note: r.rating,
    // publishTime est une date exacte, la ou l'interface de Google n'affiche
    // que du relatif. Les entrees generees ici sont donc plus justes que
    // celles saisies a la main jusqu'a present.
    date: (r.publishTime ?? '').slice(0, 10),
    texte: (r.originalText?.text ?? r.text?.text ?? '').trim(),
    // Lien vers l'avis sur Maps, fourni par l'API : les conditions Google
    // imposent que le visiteur puisse toujours remonter a la source.
    url: r.googleMapsUri ?? '',
  }));

  // Le fichier n'est normalise qu'une fois : le faire par avis reviendrait a
  // reparcourir plusieurs milliers de caracteres a chaque comparaison.
  const reference = normalise(dejaEnLigne);
  const nouveaux = avis.filter((a) => {
    const cible = empreinte(a.texte);
    return cible.length > 0 && !reference.includes(cible);
  });

  if (nouveaux.length === 0) {
    console.log('Aucun avis nouveau parmi ceux que l\'API renvoie.\n');
    return;
  }

  console.log(`${nouveaux.length} avis absent(s) du site. A coller dans src/lib/reviews.ts :\n`);
  console.log(nouveaux.map(bloc).join('\n'));
  console.log(
    '\nRelire avant de coller : le nom abrege, la date, et les coquilles\n' +
      'eventuelles. Ne jamais reformuler le texte d\'un avis.\n',
  );
}

main();
