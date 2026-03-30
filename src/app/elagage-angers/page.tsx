import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessCitySchema } from '@/components/seo/LocalBusinessCitySchema';
import { cities, serviceTypes, getCitiesByProximity } from '@/lib/cities-data';
import { HeroSection } from '@/components/ui/HeroSection';
import { InlineGallery } from '@/components/ui/InlineGallery';
import { ogImages } from '@/lib/images-manifest';
import { IconCheck } from '@/lib/icons';
import { SITE } from '@/lib/site-config';

const service = serviceTypes.find((s) => s.service === 'elagage')!;
const city = cities.find((c) => c.slug === 'angers')!;

export const metadata: Metadata = {
  title: 'Élagage Angers - Taille d\'Arbres Professionnel | Art des Jardins',
  description:
    'Élagage à Angers : taille et soins des arbres adaptés au patrimoine arboré angevin. Platanes, tilleuls, frênes — secteur sauvegardé et jardins privés.',
  keywords: [
    'élagage angers',
    'élagueur angers',
    'taille arbre angers',
    'élagage 49',
    'élagueur maine-et-loire',
  ],
  alternates: {
    canonical: '/elagage-angers/',
  },
  openGraph: {
    title: 'Élagage Angers - Art des Jardins',
    description: 'Élagage à Angers : soins des arbres adaptés aux sols schisteux et au climat océanique angevin. Secteur sauvegardé, parcs et jardins privés.',
    type: 'website',
    images: [{ url: ogImages.elagage, width: 1200, height: 630 }],
  },
};

export default function ElagageAngersPage() {
  return (
    <>
      <LocalBusinessCitySchema
        city="Angers"
        postalCode="49000"
        service="Élagage"
        serviceDescription="Taille et soins des arbres par des élagueurs certifiés à Angers."
        url={`${SITE.url}/elagage-angers/`}
      />

      {/* Hero */}
      <HeroSection
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Élagage Angers' },
        ]}
        imageSlug="elagage-1"
        title="Élagage à Angers"
        subtitle="Art des Jardins, élagueurs certifiés à Angers. Taille, éclaircissage et sécurisation des arbres en milieu urbain et jardins privés."
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact/" className="btn-primary-light">
            Demander un devis gratuit
          </Link>
          <a
            href={SITE.phone1.link}
            className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10"
          >
            Urgence : {SITE.phone1.display}
          </a>
        </div>
      </HeroSection>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Élagage à Angers : un patrimoine arboré façonné par le climat océanique
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  L'<strong>élagage à Angers</strong> concerne un patrimoine arboré dense
                  et varié, réparti sur plus de 600 hectares d'espaces verts publics et
                  de nombreux jardins privés. Les platanes du jardin du Mail, les tilleuls
                  centenaires du parc de la Garenne, les chênes et hêtres du parc Balzac
                  ou du lac de Maine — chaque quartier présente des essences et des
                  contraintes d'intervention différentes.
                </p>
                <p>
                  Dans les jardins privés angevins, magnolias, camélias et rhododendrons
                  bénéficient du climat océanique doux mais subissent aussi ses effets :
                  la croissance vigoureuse sous humidité constante favorise le
                  développement fongique, et les tempêtes hivernales atlantiques cassent
                  régulièrement des branches. Les frênes, très présents dans le grand Ouest,
                  sont par ailleurs touchés par la chalarose, une maladie qui impose un
                  suivi phytosanitaire attentif et parfois l'abattage des sujets trop atteints.
                </p>
                <p>
                  Le centre historique d'Angers, classé secteur sauvegardé, impose des
                  réglementations spécifiques pour les arbres sous l'autorité des
                  Architectes des Bâtiments de France. Toute intervention sur un arbre
                  classé ou situé en périmètre protégé nécessite une approche conforme
                  à ces exigences réglementaires.
                </p>
                <p>
                  Les sols jouent également un rôle dans le comportement des arbres :
                  schisteux et bien drainés sur les hauteurs de Monplaisir ou de la
                  Roseraie, ils produisent des systèmes racinaires différents des sols
                  alluviaux plus lourds en fond de vallée, vers le lac de Maine ou
                  Belle-Beille. L'approche de taille s'adapte à chaque situation — ancrage
                  racinaire, exposition au vent, proximité des habitations.
                </p>
              </div>

              <InlineGallery slugs={['elagage-2', 'elagage-4', 'elagage-5']} />

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
                  href="/services/elagage/"
                  className="text-primary-600 hover:text-primary-800 font-medium"
                >
                  Découvrir l'ensemble de nos prestations élagage →
                </Link>
              </p>

              <h3 className="text-2xl font-bold mt-12 mb-6">Quand faire élaguer vos arbres ?</h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  La période idéale d'élagage varie selon les espèces. En règle générale :
                </p>
                <ul>
                  <li><strong>Hiver (hors gel)</strong> : période idéale pour la plupart des feuillus</li>
                  <li><strong>Après floraison</strong> : pour les arbres à fleurs (cerisiers, pruniers...)</li>
                  <li><strong>Toute l'année</strong> : pour les urgences et la sécurisation</li>
                </ul>
                <p>
                  À Angers, le climat océanique allonge la période de végétation active.
                  Le choix du calendrier d'intervention dépend de l'espèce, de l'état
                  sanitaire de l'arbre et de l'objectif de la taille.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-bold text-red-800 mb-4">Urgence élagage</h3>
                  <p className="text-red-700 mb-4">
                    Arbre dangereux, branche cassée, dégâts de tempête ?
                    Nous intervenons rapidement pour sécuriser les lieux.
                  </p>
                  <a
                    href={SITE.phone1.link}
                    className="block w-full text-center bg-red-600 text-white font-medium py-3 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Appeler l'urgence
                  </a>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-bold mb-2">Devis gratuit</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Évaluation sur place et devis détaillé sans engagement.
                  </p>
                  <Link href="/contact/" className="btn-primary w-full text-center block">
                    Demander un devis
                  </Link>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-primary-800 mb-4">Zone d'intervention</h3>
                  <ul className="space-y-2 text-primary-700 text-sm">
                    {cities.slice(0, 6).map((c) => (
                      <li key={c.slug}>Élagage {c.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Élagage dans les communes voisines
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {getCitiesByProximity(city).map((c) => (
              <Link
                key={c.slug}
                href={`/elagage-${c.slug}/`}
                className="block p-4 bg-white rounded-lg hover:bg-primary-50 transition-colors text-center shadow-sm"
              >
                <span className="font-medium text-gray-900">Élagage {c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <img src="/images/realisations/elagage-1-1200w.webp" alt="" loading="lazy" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay-strong" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Élagage à Angers et communes voisines</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Intervention sur tous types d'arbres, du jardin privé au patrimoine arboré classé.
          </p>
          <Link href="/contact/" className="btn-primary-light">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
