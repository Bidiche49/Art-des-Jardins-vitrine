import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessCitySchema } from '@/components/seo/LocalBusinessCitySchema';
import { cities, serviceTypes, getCitiesByProximity } from '@/lib/cities-data';
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
        subtitle="Des jardins conçus pour durer, adaptés aux sols angevins et au climat océanique du Maine-et-Loire. Aménagement, plantation et création d'espaces extérieurs."
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

      {/* Content */}
      <section className="pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              {/* Section 2 — Accroche problème */}
              <h2 className="text-3xl font-bold mb-6">
                Un projet d'aménagement paysager à Angers
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                <p>
                  Terrain nu après construction, jardin vieillissant à restructurer, plantations
                  qui ne reprennent pas sur un sol inadapté, envie d'une terrasse ou d'une pergola
                  sans vision d'ensemble, extérieur mal organisé pour les usages quotidiens — les
                  raisons de repenser un jardin sont concrètes.
                </p>
                <p>
                  Chaque terrain à Angers a ses contraintes — nature du sol, exposition, réglementation
                  du PLU. Un aménagement qui dure commence par leur analyse.
                </p>
              </div>

              {/* Section 3 — Expertise locale */}
              <h2 className="text-3xl font-bold mb-6">
                Aménagement paysager à Angers : sols, climat et quartiers
              </h2>

              {/* Sous-section sols */}
              <h3 className="font-serif text-2xl text-gray-800 mt-10 mb-4">
                Schiste, alluvions, argile : un sol différent à chaque quartier
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Les sols angevins varient fortement d'un quartier à l'autre. Sur les hauteurs
                  de Monplaisir et dans le centre, le schiste bien drainé favorise les massifs
                  arbustifs et les rocailles. En fond de vallée, vers le lac de Maine et les bords
                  de la Maine, les sols alluviaux plus lourds demandent un travail de drainage et
                  d'amendement avant toute plantation structurante. Chaque projet d'aménagement
                  commence par l'analyse de cette réalité pédologique.
                </p>
              </div>

              <InlineGallery slugs={['creation-4', 'creation-7']} columns={2} />

              {/* Sous-section climat */}
              <h3 className="font-serif text-2xl text-gray-800 mt-10 mb-4">
                Un climat favorable à une grande diversité végétale
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Le climat océanique d'Angers — hivers rarement rigoureux, étés tempérés — permet
                  une diversité de plantations rare en France métropolitaine. Hortensias, camélias,
                  magnolias et rhododendrons s'épanouissent naturellement dans ce terroir. Le choix
                  des végétaux dépend toutefois de l'exposition réelle de chaque parcelle.
                </p>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-lg p-4 my-6">
                <p className="text-primary-800 font-medium text-sm">
                  Avec plus de 600 hectares d'espaces verts, Angers cultive une tradition
                  horticole héritée du XIX<sup>e</sup> siècle — la ville était déjà reconnue
                  comme un centre majeur de la production végétale en France.
                </p>
              </div>

              {/* Sous-section quartiers */}
              <h3 className="font-serif text-2xl text-gray-800 mt-10 mb-4">
                Des quartiers, des jardins différents
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600">
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

              <InlineGallery slugs={['creation-5', 'creation-8', 'creation-3', 'terrasse-2']} />

              {/* Section 5 — Prestations */}
              <h3 className="text-2xl font-bold mt-12 mb-6">Parmi nos interventions à Angers</h3>
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
                  href="/services/paysagisme/"
                  className="text-primary-600 hover:text-primary-800 font-medium"
                >
                  Découvrir l'ensemble de nos prestations paysagisme →
                </Link>
              </p>

              {/* Section 6 — Déroulement du projet */}
              <h3 className="text-2xl font-bold mt-12 mb-6">Comment se déroule un projet</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    step: 1,
                    title: 'Visite et analyse du terrain',
                    description:
                      'Déplacement gratuit, étude du sol et de l\'exposition. Sur les terrains angevins, l\'analyse distingue les substrats schisteux des sols alluviaux pour adapter les choix de plantation.',
                  },
                  {
                    step: 2,
                    title: 'Échange sur vos besoins',
                    description:
                      'Usages souhaités, style, niveau d\'entretien envisagé, budget. Cette étape définit le cadre du projet.',
                  },
                  {
                    step: 3,
                    title: 'Proposition d\'aménagement',
                    description:
                      'Plan détaillé avec choix des végétaux adaptés au terroir angevin, matériaux et chiffrage précis.',
                  },
                  {
                    step: 4,
                    title: 'Réalisation',
                    description:
                      'Travaux exécutés selon le planning défini, du terrassement aux plantations et finitions.',
                  },
                  {
                    step: 5,
                    title: 'Suivi après plantation',
                    description:
                      'Conseils d\'entretien personnalisés et vérification de la reprise des végétaux.',
                  },
                ].map((item) => (
                  <div key={item.step} className="bg-gray-50 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-bold">
                        {item.step}
                      </span>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Section 7 — Pourquoi faire appel à un paysagiste */}
              <h3 className="text-2xl font-bold mt-12 mb-6">Pourquoi faire appel à un paysagiste</h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Un aménagement pensé dans son ensemble assure la cohérence entre végétaux,
                  terrasse, circulations et usages — ce qu'une approche par ajouts successifs
                  ne permet pas. Le choix des essences en fonction du sol et de l'exposition
                  évite les erreurs de plantation : à Angers, un magnolia planté en fond de
                  vallée sur sol alluvial mal drainé ne se développera pas comme sur les
                  hauteurs schisteuses de Monplaisir.
                </p>
                <p>
                  Un jardin conçu par un paysagiste intègre dès le départ l'évolution des
                  végétaux dans le temps. Les volumes, les ombres portées, l'encombrement à
                  maturité sont anticipés pour que le jardin reste fonctionnel dans 5 ou 10 ans,
                  pas seulement à la livraison. Un extérieur aménagé contribue aussi à la
                  valorisation du bien immobilier.
                </p>
              </div>

              {/* Section 8 — Pourquoi choisir Art des Jardins */}
              <h3 className="text-2xl font-bold mt-12 mb-8">Pourquoi choisir Art des Jardins</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Connaissance des sols angevins</h4>
                  <p className="text-gray-600 text-sm">
                    Analyse terrain systématique avant chaque projet. Substrats schisteux,
                    alluviaux ou argileux : le diagnostic oriente le drainage, les amendements
                    et le choix des végétaux.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Végétaux adaptés au terroir</h4>
                  <p className="text-gray-600 text-sm">
                    Essences acclimatées au climat océanique angevin, sélectionnées pour leur
                    reprise durable selon l'exposition et la nature du sol de chaque parcelle.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Respect du PLU local</h4>
                  <p className="text-gray-600 text-sm">
                    Connaissance des réglementations d'urbanisme d'Angers : Espaces Boisés
                    Classés, périmètre ABF du secteur sauvegardé, règles de prospect et
                    d'emprise au sol.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Suivi après plantation</h4>
                  <p className="text-gray-600 text-sm">
                    Conseils d'entretien adaptés à chaque projet, vérification de la reprise
                    des végétaux. Le jardin doit fonctionner dans la durée.
                  </p>
                </div>
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

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Autres services à Angers</h3>
                  <ul className="space-y-2">
                    {serviceTypes
                      .filter((s) => s.service !== service.service)
                      .map((s) => (
                        <li key={s.service}>
                          <Link
                            href={`/${s.service}-angers/`}
                            className="text-primary-600 hover:text-primary-800 text-sm"
                          >
                            {s.serviceTitle} Angers
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

      {/* Section 9 — Other Cities */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nous intervenons aussi à proximité d'Angers
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {getCitiesByProximity(city).map((c) => (
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

      {/* Section 10 — CTA */}
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
