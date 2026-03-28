import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessCitySchema } from '@/components/seo/LocalBusinessCitySchema';
import { cities, serviceTypes } from '@/lib/cities-data';
import { HeroSection } from '@/components/ui/HeroSection';
import { InlineGallery } from '@/components/ui/InlineGallery';
import { ogImages } from '@/lib/images-manifest';
import { IconCheck, IconPin } from '@/lib/icons';
import { SITE } from '@/lib/site-config';

const service = serviceTypes.find((s) => s.service === 'paysagiste')!;
const city = cities.find((c) => c.slug === 'angers')!;

export const metadata: Metadata = {
  title: 'Paysagiste Angers - Aménagement Jardin | Art des Jardins',
  description:
    'Paysagiste à Angers : aménagement de jardins, terrasses et plantations adaptés aux sols schisteux et alluviaux du Maine-et-Loire. Intervention sur tous les quartiers.',
  keywords: [
    'paysagiste angers',
    'jardinier angers',
    'aménagement jardin angers',
    'création jardin angers',
    'paysagiste 49',
  ],
  alternates: {
    canonical: '/paysagiste-angers/',
  },
  openGraph: {
    title: 'Paysagiste Angers - Art des Jardins',
    description: 'Aménagement et création de jardins à Angers, adaptés au climat océanique angevin et aux spécificités des sols locaux.',
    type: 'website',
    images: [{ url: ogImages.paysagisme, width: 1200, height: 630 }],
  },
};

export default function PaysagisteAngersPage() {
  return (
    <>
      <LocalBusinessCitySchema
        city="Angers"
        postalCode="49000"
        service="Paysagiste"
        serviceDescription="Aménagement et création de jardins sur mesure à Angers et ses environs."
        url={`${SITE.url}/paysagiste-angers/`}
      />

      {/* Hero */}
      <HeroSection
        imageSlug="creation-9"
        title="Paysagiste à Angers"
        subtitle="Aménagement et création de jardins à Angers et dans le Maine-et-Loire. Des plantations choisies pour le climat océanique angevin et les sols locaux."
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Paysagiste Angers' },
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
            Appeler : {SITE.phone1.display}
          </a>
        </div>
      </HeroSection>

      {/* Introduction */}
      <section className="pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Aménagement paysager à Angers : sols, climat et quartiers
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Avec plus de 600 hectares d'espaces verts, Angers cultive une tradition
                  horticole héritée du XIX<sup>e</sup> siècle. Le travail de <strong>paysagiste à Angers</strong> s'inscrit
                  dans ce contexte particulier : un climat océanique doux, des hivers rarement
                  rigoureux et des étés tempérés qui permettent une grande diversité de plantations
                  — hortensias, camélias, magnolias et rhododendrons s'y épanouissent naturellement.
                </p>
                <p>
                  {city.description}
                </p>
                <p>
                  Les sols angevins varient fortement d'un quartier à l'autre. Sur les hauteurs
                  de Monplaisir et dans le centre, le schiste bien drainé favorise les massifs
                  arbustifs et les rocailles. En fond de vallée, vers le lac de Maine et les bords
                  de la Maine, les sols alluviaux plus lourds demandent un travail de drainage et
                  d'amendement avant toute plantation structurante. Chaque projet d'aménagement
                  commence par l'analyse de cette réalité pédologique.
                </p>
                <p>
                  La Doutre, avec ses parcelles étroites et son patrimoine architectural, appelle
                  des jardins de ville où chaque mètre carré compte. À Saint-Serge et Belle-Beille,
                  les espaces plus généreux se prêtent à des créations paysagères complètes —
                  terrasses, massifs et circulations. Dans les Hauts de Saint-Aubin ou autour du
                  lac de Maine, les terrains de 500 à 1 000 m² ouvrent la possibilité de véritables
                  jardins d'agrément. Art des Jardins intervient dans l'ensemble de ces
                  quartiers : {city.neighborhoods?.join(', ')}.
                </p>
              </div>

              <InlineGallery slugs={['creation-4', 'creation-7', 'creation-5', 'creation-8', 'creation-3', 'terrasse-2']} />

              <h3 className="text-2xl font-bold mt-12 mb-6">Nos services d'aménagement paysager à Angers</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <IconCheck className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-primary-800 mb-4">Zone d'intervention</h3>
                  <p className="text-primary-700 mb-4">
                    Nous intervenons à Angers et dans un rayon de 30 km :
                  </p>
                  <ul className="space-y-2 text-primary-700 text-sm">
                    {cities.slice(0, 8).map((c) => (
                      <li key={c.slug} className="flex items-center gap-2">
                        <IconPin className="w-4 h-4" />
                        {c.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-bold mb-2">Devis gratuit</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Recevez une estimation personnalisée pour votre projet de jardin.
                  </p>
                  <Link href="/contact/" className="btn-primary w-full text-center block">
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir Art des Jardins ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Connaissance des sols angevins',
                description: 'Analyse du terrain avant chaque projet : schiste, alluvions ou argile, le choix des végétaux en dépend.',
              },
              {
                title: 'Végétaux adaptés au terroir',
                description: 'Sélection d\'essences acclimatées au climat océanique doux : camélias, hortensias, magnolias, graminées.',
              },
              {
                title: 'Respect du PLU local',
                description: 'Prise en compte des réglementations d\'urbanisme d\'Angers pour chaque aménagement extérieur.',
              },
              {
                title: 'Suivi après plantation',
                description: 'Conseils d\'entretien saisonnier et vérification de la reprise des végétaux après mise en place.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconCheck className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nous intervenons aussi à proximité d'Angers
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cities.slice(1).map((c) => (
              <Link
                key={c.slug}
                href={`/paysagiste-${c.slug}/`}
                className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center"
              >
                <span className="font-medium text-gray-900">Paysagiste {c.name}</span>
                {c.distance && (
                  <span className="block text-sm text-gray-500 mt-1">à {c.distance}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <img src="/images/realisations/creation-8-1200w.webp" alt="" loading="lazy" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay-strong" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Un projet d'aménagement à Angers ?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Visite sur place et devis personnalisé selon les caractéristiques de votre terrain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-primary-light">
              Demander un devis gratuit
            </Link>
            <a
              href={SITE.phone1.link}
              className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              {SITE.phone1.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
