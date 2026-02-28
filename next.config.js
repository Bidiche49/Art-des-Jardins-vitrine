/** @type {import('next').NextConfig} */
require('dotenv').config();

const isDocker = process.env.DOCKER_BUILD === 'true';

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
        { source: '/images/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
        { source: '/_next/static/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      ];
    },
  }),
};

module.exports = nextConfig;
