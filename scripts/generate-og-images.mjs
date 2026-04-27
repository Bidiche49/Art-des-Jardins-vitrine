import sharp from 'sharp';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const FONT_DIR = path.join(__dirname, 'og-fonts');
const REALISATIONS_DIR = path.join(ROOT, 'public/images/realisations');
const OG_DIR = path.join(ROOT, 'public/images');

const WIDTH = 1200;
const HEIGHT = 630;
const SECONDARY = '#b89a58';

const VARIANTS = [
  { out: 'og-image.jpg',     sourceSlug: 'entretien-2', title: 'Art des Jardins',     subtitle: 'Paysagiste à Angers · Maine-et-Loire' },
  { out: 'og-paysagisme.jpg', sourceSlug: 'creation-9',  title: 'Création de jardins', subtitle: 'Art des Jardins · Paysagiste Angers' },
  { out: 'og-elagage.jpg',    sourceSlug: 'elagage-2',   title: "Élagage d'arbres",     subtitle: 'Art des Jardins · Paysagiste Angers' },
  { out: 'og-entretien.jpg',  sourceSlug: 'entretien-3', title: 'Entretien de jardins', subtitle: 'Art des Jardins · Paysagiste Angers' },
  { out: 'og-abattage.jpg',   sourceSlug: 'elagage-1',   title: "Abattage d'arbres",    subtitle: 'Art des Jardins · Paysagiste Angers' },
];

async function loadFontBase64(filename) {
  const buf = await readFile(path.join(FONT_DIR, filename));
  return buf.toString('base64');
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildSvg({ title, subtitle, cormorantB64, interB64 }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style type="text/css">
      @font-face {
        font-family: 'Cormorant Garamond';
        font-weight: 700;
        font-style: normal;
        src: url('data:font/ttf;base64,${cormorantB64}') format('truetype');
      }
      @font-face {
        font-family: 'Inter';
        font-weight: 400;
        font-style: normal;
        src: url('data:font/ttf;base64,${interB64}') format('truetype');
      }
      .title { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700; font-size: 78px; fill: #ffffff; }
      .subtitle { font-family: 'Inter', system-ui, -apple-system, sans-serif; font-weight: 400; font-size: 28px; fill: #ffffff; opacity: 0.9; letter-spacing: 0.5px; }
    </style>
    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#000000" stop-opacity="0" />
      <stop offset="35%" stop-color="#000000" stop-opacity="0" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0.78" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
      <feOffset dx="0" dy="2" result="offset" />
      <feComponentTransfer><feFuncA type="linear" slope="0.55" /></feComponentTransfer>
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grad)" />
  <rect x="80" y="438" width="64" height="3" fill="${SECONDARY}" />
  <text x="80" y="510" class="title" filter="url(#shadow)">${escapeXml(title)}</text>
  <text x="80" y="558" class="subtitle" filter="url(#shadow)">${escapeXml(subtitle)}</text>
</svg>`;
}

async function findSource(slug) {
  for (const w of [1920, 1200, 800]) {
    const p = path.join(REALISATIONS_DIR, `${slug}-${w}w.webp`);
    try {
      await readFile(p);
      return p;
    } catch {}
  }
  throw new Error(`No source variant found for slug '${slug}' in ${REALISATIONS_DIR}`);
}

async function generateOne(variant, fonts) {
  const sourcePath = await findSource(variant.sourceSlug);
  const outPath = path.join(OG_DIR, variant.out);

  const svg = buildSvg({ ...variant, ...fonts });
  const svgBuffer = Buffer.from(svg, 'utf-8');

  await sharp(sourcePath)
    .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'center' })
    .composite([{ input: svgBuffer, top: 0, left: 0 }])
    .jpeg({ quality: 86, mozjpeg: true, progressive: true })
    .toFile(outPath);

  console.log(`✓ ${variant.out}  (source: ${variant.sourceSlug})`);
}

async function main() {
  const cormorantB64 = await loadFontBase64('CormorantGaramond-Bold.ttf');
  const interB64 = await loadFontBase64('Inter-Regular.ttf');
  const fonts = { cormorantB64, interB64 };

  const target = process.argv[2];
  const list = target ? VARIANTS.filter((v) => v.out.includes(target) || v.sourceSlug === target) : VARIANTS;

  if (!list.length) {
    console.error(`No variant matches '${target}'`);
    process.exit(1);
  }

  for (const v of list) {
    await generateOne(v, fonts);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
