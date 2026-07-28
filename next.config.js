/** @type {import('next').NextConfig} */
require('dotenv').config();

const isDocker = process.env.DOCKER_BUILD === 'true';

// Le formulaire de contact a besoin d'au moins un canal d'envoi. Les variables
// NEXT_PUBLIC_* sont inlinees au build : absentes ici, le formulaire est deploye
// mort, sans aucun signal ni cote build ni cote runtime. On echoue donc le build
// sur Cloudflare Pages plutot que de mettre en ligne un formulaire casse.
const hasContactChannel = Boolean(
  process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_WEB3FORMS_KEY
);
if (!hasContactChannel) {
  const message =
    'Formulaire de contact sans canal d\'envoi : definir NEXT_PUBLIC_WEB3FORMS_KEY (ou NEXT_PUBLIC_API_URL).';
  if (process.env.CF_PAGES) {
    throw new Error(message);
  }
  console.warn(`\n[avertissement] ${message}\n`);
}

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig = {
  output: isDocker ? 'standalone' : 'export',
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
  trailingSlash: true,
  images: {
    unoptimized: !isDocker,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_WEB3FORMS_KEY: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  ...(isDocker && {
    async headers() {
      return [
        { source: '/(.*)', headers: securityHeaders },
        // OG images : cache court (1h) car contenu metadata sensible aux modifs.
        // Sans ca, le combo `immutable` + nom de fichier fixe forcerait une purge CDN manuelle a chaque mise a jour des OG.
        { source: '/images/og-:filename.jpg', headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' }] },
        { source: '/images/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
        { source: '/_next/static/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      ];
    },
  }),
};

module.exports = nextConfig;
