import { SITE } from '@/lib/site-config';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    description: 'Paysagiste professionnel à Angers et Maine-et-Loire. Création de jardins, aménagement, entretien, élagage, abattage. 16 ans d\'expérience cumulée.',
    url: SITE.url,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/logo.png`,
    foundingDate: '2026',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 2,
    },
    knowsLanguage: 'French',
    paymentAccepted: ['Cash', 'Check', 'Bank Transfer'],
    currenciesAccepted: 'EUR',
    telephone: SITE.phone1.international,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE.phone1.international,
        contactType: 'customer service',
      },
      {
        '@type': 'ContactPoint',
        telephone: SITE.phone2.international,
        contactType: 'customer service',
      },
    ],
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Angers',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Maine-et-Loire',
      },
    ],
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    hasMap: `https://maps.google.com/maps?q=${encodeURIComponent(SITE.address.full)}`,
    identifier: {
      '@type': 'PropertyValue',
      name: 'SIRET',
      value: SITE.siret,
    },
    sameAs: [
      SITE.instagram.url,
      'https://www.societe.com/societe/art-des-jardins-999636806.html',
      // TODO: Ajouter quand les profils seront créés
      // 'https://www.google.com/maps/place/Art+des+Jardins/...',
      // 'https://www.pagesjaunes.fr/pros/...',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services d\'aménagement paysager',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Aménagement de jardin',
            description: 'Conception et réalisation de jardins sur mesure',
          },
          priceRange: 'Sur devis',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Entretien de jardin',
            description: 'Tonte, taille, désherbage et entretien régulier',
          },
          priceRange: 'Sur devis',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Élagage',
            description: 'Taille et élagage de tous types d\'arbres',
          },
          priceRange: 'Sur devis',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Abattage',
            description: 'Abattage sécurisé d\'arbres',
          },
          priceRange: 'Sur devis',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Terrasse',
            description: 'Création de terrasses bois, composite et pierre',
          },
          priceRange: 'Sur devis',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Clôture',
            description: 'Pose de clôtures, portails et délimitations',
          },
          priceRange: 'Sur devis',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Taille de haies',
            description: 'Taille et entretien de haies',
          },
          priceRange: 'Sur devis',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Débroussaillage',
            description: 'Débroussaillage et nettoyage de terrain',
          },
          priceRange: 'Sur devis',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Arrosage automatique',
            description: 'Installation de systèmes d\'arrosage automatique',
          },
          priceRange: 'Sur devis',
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
