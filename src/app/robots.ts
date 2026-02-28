import { MetadataRoute } from 'next';

// TODO: Passer en production quand le site est valide
// Remettre allow: '/' et la sitemap pour le lancement SEO
const SOFT_LAUNCH = true;

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://artdesjardins-paysagiste.fr';

  if (SOFT_LAUNCH) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
