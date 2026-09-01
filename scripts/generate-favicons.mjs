/**
 * Genere les favicons a partir du logo, avec un fond opaque incruste.
 *
 * Le logo est un motif vert fonce sur fond transparent. Dans un onglet a theme
 * sombre, il disparait purement et simplement. Google ne rencontre pas le
 * probleme parce qu'il compose lui-meme un disque blanc derriere la favicon
 * dans ses resultats de recherche : on reproduit ce disque dans le fichier.
 *
 * Script manuel, volontairement hors du prebuild : le logo ne change jamais, et
 * regenerer des binaires a chaque deploiement polluerait les diffs. A relancer
 * uniquement si le logo evolue.
 *
 *   node scripts/generate-favicons.mjs                        # ecrit dans public/
 *   node scripts/generate-favicons.mjs --out /tmp --apercus   # verifier avant
 *   node scripts/generate-favicons.mjs --logo-entier          # sans recadrage
 */

import sharp from 'sharp';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
/**
 * Source du motif : le logo sans texte, en 512. Ce fichier n'est jamais reecrit
 * par ce script. Ne pas le confondre avec public/images/logo.png, qui porte le
 * texte "Art des Jardins" et sert aux schemas LocalBusiness.
 */
const SOURCE = path.join(ROOT, 'public', 'icon-512.png');

const outFlag = process.argv.indexOf('--out');
const OUT = outFlag === -1 ? path.join(ROOT, 'public') : path.resolve(process.argv[outFlag + 1]);

/** Part du diametre occupee par le motif. Au-dela, le logo touche le bord. */
const MOTIF_RATIO = 0.86;

/**
 * Cadrage sur la feuille seule, en pixels de icon-512.png.
 *
 * Le logo complet mesure 480x275 utiles : les rameaux dores l'etalent en 1,75:1.
 * Inscrit dans un carre, il ne peut occuper que 57% de la hauteur, ce qui le rend
 * illisible en dessous de 32 px. La feuille seule est presque carree et remplit
 * le cadre. Les rameaux sont sacrifies : a 16 px ils ne sont de toute facon que
 * deux taches beiges.
 *
 * Passer --logo-entier pour conserver la composition complete.
 */
const FEUILLE = { left: 100, top: 115, width: 315, height: 290 };

const LOGO_ENTIER = process.argv.includes('--logo-entier');
const PRODUIRE_APERCUS = process.argv.includes('--apercus');

/** Disque blanc opaque, celui que Google dessine dans ses SERP. */
function disc(size) {
  const r = size / 2;
  return Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${r}" cy="${r}" r="${r}" fill="#ffffff"/></svg>`,
  );
}

/** Carre plein : iOS applique ses propres coins arrondis et gere mal l'alpha. */
function square(size) {
  return Buffer.from(
    `<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" fill="#ffffff"/></svg>`,
  );
}

async function motif(size) {
  const target = Math.round(size * MOTIF_RATIO);
  const base = sharp(SOURCE);

  // Le trim ne sert que sur le logo entier : il retire les marges transparentes,
  // sans quoi le motif n'occupe qu'une fraction du carre source. Le cadrage sur
  // la feuille est deja serre.
  const cadre = LOGO_ENTIER ? base.trim() : base.extract(FEUILLE);

  return cadre
    .resize(target, target, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

async function build(size, shape) {
  const layer = await motif(size);
  return sharp(shape(size))
    .composite([{ input: layer, gravity: 'center' }])
    .png()
    .toBuffer();
}

await mkdir(OUT, { recursive: true });

const written = [];

// icon-512.png est la SOURCE : on ne la regenere jamais, sinon un second passage
// recadrerait une image deja recadree. Les autres tailles sont regenerees meme
// quand layout.tsx ne les declare pas, pour ne pas laisser d'anciennes icones
// transparentes servies sur le domaine a cote des nouvelles.
for (const size of [16, 32, 48, 192]) {
  const file = `icon-${size}.png`;
  const dest = path.join(OUT, file);
  if (path.resolve(dest) === path.resolve(SOURCE)) {
    throw new Error(`Refus d'ecraser la source ${SOURCE}`);
  }
  await writeFile(dest, await build(size, disc));
  written.push(file);
}

for (const file of ['icon-180.png', 'apple-touch-icon.png']) {
  await writeFile(path.join(OUT, file), await build(180, square));
  written.push(file);
}

// Le .ico embarque 16 et 32 : les deux tailles reellement utilisees par les
// navigateurs qui le demandent encore.
const ico = await pngToIco([
  await build(16, disc),
  await build(32, disc),
]);
await writeFile(path.join(OUT, 'favicon.ico'), ico);
written.push('favicon.ico');

// Apercus en pixels nets pour juger la lisibilite reelle en petite taille, sur
// fond clair et sur fond sombre. Le fond sombre est le controle qui compte :
// c'est la ou l'ancienne favicon transparente disparaissait.
//
// Sur demande explicite : ecrits dans le meme dossier que les icones, ils
// finiraient publies avec le site.
for (const size of PRODUIRE_APERCUS ? [16, 32] : []) {
  for (const [nom, fond] of [
    ['clair', { r: 255, g: 255, b: 255, alpha: 1 }],
    ['sombre', { r: 32, g: 33, b: 36, alpha: 1 }],
  ]) {
    const file = `apercu-${size}px-${nom}.png`;
    await sharp(await build(size, disc))
      .flatten({ background: fond })
      .resize(size * 12, size * 12, { kernel: 'nearest' })
      .extend({ top: 24, bottom: 24, left: 24, right: 24, background: fond })
      .toFile(path.join(OUT, file));
    written.push(file);
  }
}

console.log(`[favicons] ${written.length} fichiers dans ${OUT}`);
