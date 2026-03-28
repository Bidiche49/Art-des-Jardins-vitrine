import { MetadataRoute } from 'next';

const SOFT_LAUNCH = false;

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
