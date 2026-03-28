import { MetadataRoute } from 'next';
import { SITE } from '@/lib/site-config';

const SOFT_LAUNCH = false;

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE.url;

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
