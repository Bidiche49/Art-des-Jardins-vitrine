import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LocalBusinessCitySchema } from '@/components/seo/LocalBusinessCitySchema';
import { cities, serviceTypes, getCityBySlug, getServiceBySlugSeo, getCitiesByProximity, ServiceSlug } from '@/lib/cities-data';
import { HeroSection } from '@/components/ui/HeroSection';
import { serviceHeroImages } from '@/lib/images-manifest';
import { IconCheck } from '@/lib/icons';
import { SITE } from '@/lib/site-config';

interface PageProps {
  params: { serviceCity: string };
}

// Parse service-city slug (e.g., "paysagiste-avrille" -> { service: "paysagiste", city: "avrille" })
function parseServiceCitySlug(slug: string): { service: string; city: string } | null {
  // Skip main Angers pages (handled by dedicated pages)
  const mainPages = ['paysagiste-angers', 'elagage-angers', 'entretien-jardin-angers', 'abattage-angers'];
  if (mainPages.includes(slug)) {
    return null;
  }

  for (const serviceType of serviceTypes) {
    const prefix = `${serviceType.service}-`;
    if (slug.startsWith(prefix)) {
      const citySlug = slug.replace(prefix, '');
      if (cities.some((c) => c.slug === citySlug)) {
        return { service: serviceType.service, city: citySlug };
      }
    }
  }
  return null;
}

export async function generateStaticParams() {
  const params: { serviceCity: string }[] = [];

  for (const service of serviceTypes) {
    for (const city of cities) {
      // Skip Angers (handled by dedicated pages)
      if (city.slug === 'angers') continue;
      params.push({ serviceCity: `${service.service}-${city.slug}` });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const parsed = parseServiceCitySlug(params.serviceCity);
  if (!parsed) return {};

  const service = getServiceBySlugSeo(parsed.service);
  const city = getCityBySlug(parsed.city);
  if (!service || !city) return {};

  const title = service.metaTitleTemplate.replace('{city}', city.name);
  const cityServiceContent = city.serviceContent?.[parsed.service as ServiceSlug];
  const description = cityServiceContent?.metaDescription
    ?? service.metaDescriptionTemplate.replace('{city}', city.name);

  return {
    title,
    description,
    alternates: {
      canonical: `/${params.serviceCity}/`,
    },
    openGraph: { title, description, type: 'website' },
  };
}

const accrocheH2: Record<string, (cityName: string) => string> = {
  paysagiste: (cityName) => `Un projet d'aménagement paysager à ${cityName}`,
  elagage: () => 'Des situations concrètes qui appellent un élagueur',
  'entretien-jardin': (cityName) => `Un jardin à entretenir à ${cityName}`,
  abattage: () => 'Quand l\'abattage devient nécessaire',
};

export default function ServiceCityPage({ params }: PageProps) {
  const parsed = parseServiceCitySlug(params.serviceCity);
  if (!parsed) notFound();

  const service = getServiceBySlugSeo(parsed.service);
  const city = getCityBySlug(parsed.city);
  if (!service || !city) notFound();

  const pageTitle = `${service.serviceTitle} à ${city.name}`;
  const mainAngersPage = `/${service.service}-angers/`;
  const cityServiceContent = city.serviceContent?.[parsed.service as ServiceSlug];

  const isUrgencyService = ['elagage', 'abattage'].includes(service.service);

  const processSteps: Record<string, { title: string; description: string }[]> = {
    paysagiste: [
      { title: 'Visite du terrain', description: `Déplacement à ${city.name}, étude du sol et de l'exposition.` },
      { title: 'Échange sur le projet', description: 'Usages souhaités, style, budget.' },
      { title: 'Proposition d\'aménagement', description: 'Plan détaillé, choix des végétaux et chiffrage.' },
      { title: 'Réalisation', description: 'Travaux selon le planning défini.' },
      { title: 'Suivi', description: 'Conseils d\'entretien et vérification de la reprise.' },
    ],
    elagage: [
      { title: 'Diagnostic', description: `Évaluation de l'arbre et des contraintes à ${city.name}.` },
      { title: 'Choix de la technique', description: 'Taille douce, éclaircissage ou démontage.' },
      { title: 'Sécurisation', description: 'Balisage et protection du site.' },
      { title: 'Intervention', description: 'Travail par élagueurs certifiés.' },
      { title: 'Nettoyage', description: 'Broyage et évacuation des rémanents.' },
    ],
    'entretien-jardin': [
      { title: 'Évaluation', description: `État du jardin à ${city.name} — pelouse, haies, massifs.` },
      { title: 'Formule adaptée', description: 'Contrat annuel ou intervention ponctuelle.' },
      { title: 'Planning', description: 'Passages calés sur le cycle végétatif.' },
      { title: 'Interventions', description: 'Tonte, taille, désherbage selon le planning.' },
      { title: 'Ajustements', description: 'Programme évolutif selon les saisons.' },
    ],
    abattage: [
      { title: 'Diagnostic', description: `Faisabilité et contraintes à ${city.name}.` },
      { title: 'Démarches', description: 'Autorisations si zone protégée.' },
      { title: 'Sécurisation', description: 'Balisage de la zone.' },
      { title: 'Abattage', description: 'Direct ou démontage technique selon le contexte.' },
      { title: 'Évacuation', description: 'Dessouchage, broyage, valorisation du bois.' },
    ],
  };

  const steps = processSteps[service.service] || [];
  const servicesPageSlug = service.service === 'paysagiste' ? 'paysagisme' : service.service;

  return (
    <>
      <LocalBusinessCitySchema
        city={city.name}
        postalCode={city.postalCode}
        service={service.serviceTitle}
        serviceDescription={service.serviceDescription}
        url={`${SITE.url}/${params.serviceCity}/`}
      />

      {/* Section 1 — Hero */}
      <HeroSection
        imageSlug={serviceHeroImages[service.service] || 'creation-2'}
        title={pageTitle}
        subtitle={`${service.serviceTitle} à ${city.name}${city.distance ? `, à ${city.distance} d'Angers` : ''} — ${service.serviceDescription}.`}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: `${service.serviceTitle} Angers`, href: mainAngersPage },
          { label: city.name },
        ]}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact/" className="btn-primary-light">
            Demander un devis gratuit
          </Link>
          <a
            href={SITE.phone1.link}
            className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10"
          >
            {isUrgencyService ? `Urgence : ${SITE.phone1.display}` : `Appeler : ${SITE.phone1.display}`}
          </a>
        </div>
      </HeroSection>

      {/* Content */}
      <section className="pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              {/* Section 2 — Accroche (conditionnelle) */}
              {cityServiceContent?.accroche && (
                <>
                  <h2 className="text-3xl font-bold mb-6">
                    {accrocheH2[service.service]?.(city.name) ?? `${service.serviceTitle} à ${city.name}`}
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                    <p>{cityServiceContent.accroche}</p>
                  </div>
                </>
              )}

              {/* Section 3 — Expertise locale */}
              <h2 className="text-3xl font-bold mb-6">
                {service.serviceTitle} à {city.name} : expertise locale
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                {(cityServiceContent?.content ?? city.specificContent)
                  .split('\n\n')
                  .filter((p) => p.trim())
                  .map((paragraph, i) => (
                    <p key={i}>{paragraph.replace(/\s+/g, ' ').trim()}</p>
                  ))}
                {city.neighborhoods && city.neighborhoods.length > 0 && (
                  <p>
                    Nous intervenons dans tous les quartiers de {city.name} : {city.neighborhoods.join(', ')}.
                  </p>
                )}
              </div>

              {/* Section 5 — Prestations */}
              <h3 className="text-2xl font-bold mt-12 mb-6">Parmi nos interventions à {city.name}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <IconCheck className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm">
                <Link
                  href={`/services/${servicesPageSlug}/`}
                  className="text-primary-600 hover:text-primary-800 font-medium"
                >
                  Découvrir l'ensemble de nos prestations {service.serviceTitle.toLowerCase()} →
                </Link>
              </p>

              {/* Section 6 — Déroulement */}
              <h3 className="text-2xl font-bold mt-12 mb-6">Comment se déroule une intervention</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {steps.map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-bold">
                        {i + 1}
                      </span>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Section 7 — Pourquoi un professionnel (conditionnelle) */}
              {cityServiceContent?.whyPro && (
                <>
                  <h3 className="text-2xl font-bold mt-12 mb-6">Pourquoi faire appel à un professionnel</h3>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>{cityServiceContent.whyPro}</p>
                  </div>
                </>
              )}

              {/* Section 8 — Différenciateurs (conditionnelle sur highlights) */}
              {cityServiceContent?.highlights && cityServiceContent.highlights.length > 0 && (
                <>
                  <h3 className="text-2xl font-bold mt-12 mb-8">Pourquoi choisir Art des Jardins</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {cityServiceContent.highlights.slice(0, 4).map((highlight, i) => (
                      <div key={i} className="bg-gray-50 rounded-xl p-6">
                        <p className="text-gray-700 text-sm">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-primary-800 mb-4">Informations {city.name}</h3>
                  <ul className="space-y-3 text-primary-700 text-sm">
                    <li>
                      <strong>Code postal :</strong> {city.postalCode}
                    </li>
                    <li>
                      <strong>Département :</strong> {city.department}
                    </li>
                    {city.population && (
                      <li>
                        <strong>Population :</strong> ~{city.population} hab.
                      </li>
                    )}
                    {city.distance && (
                      <li>
                        <strong>Distance Angers :</strong> {city.distance}
                      </li>
                    )}
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-bold mb-2">Devis gratuit</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Intervention à {city.name} et environs.
                  </p>
                  <Link href="/contact/" className="btn-primary w-full text-center block">
                    Demander un devis
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Autres services</h3>
                  <ul className="space-y-2">
                    {serviceTypes
                      .filter((s) => s.service !== service.service)
                      .map((s) => (
                        <li key={s.service}>
                          <Link
                            href={`/${s.service}-${city.slug}/`}
                            className="text-primary-600 hover:text-primary-800 text-sm"
                          >
                            {s.serviceTitle} {city.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 — Maillage villes */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            {service.serviceTitle} dans les communes voisines
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {getCitiesByProximity(city)
              .slice(0, 10)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/${service.service}-${c.slug}/`}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center"
                >
                  <span className="font-medium text-gray-900">
                    {service.serviceTitle} {c.name}
                  </span>
                  {c.distance && (
                    <span className="block text-sm text-gray-500 mt-1">à {c.distance}</span>
                  )}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Section 10 — CTA */}
      <section className="relative py-16 overflow-hidden">
        <img src={`/images/realisations/${serviceHeroImages[service.service] || 'creation-4'}-1200w.webp`} alt="" loading="lazy" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay-strong" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">
            {service.serviceTitle} à {city.name}
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Intervention dans tous les quartiers de {city.name}{city.distance ? ' et dans un rayon de 30 km autour d\'Angers' : ''}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-primary-light">
              Demander un devis gratuit
            </Link>
            <a
              href={SITE.phone1.link}
              className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              {isUrgencyService ? `Urgence : ${SITE.phone1.display}` : SITE.phone1.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
