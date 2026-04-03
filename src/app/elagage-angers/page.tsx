import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessCitySchema } from '@/components/seo/LocalBusinessCitySchema';
import { cities, serviceTypes, getCitiesByProximity } from '@/lib/cities-data';
import { HeroSection } from '@/components/ui/HeroSection';
import { InlineGallery } from '@/components/ui/InlineGallery';
import { ogImages } from '@/lib/images-manifest';
import { IconCheck, IconPin } from '@/lib/icons';
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
      <section className="pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              {/* Section 2 — Accroche problème */}
              <h2 className="text-3xl font-bold mb-6">
                Des situations concrètes qui appellent un élagueur
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                <p>
                  Branches mortes au-dessus d'une toiture, arbre qui déborde chez le
                  voisin et assombrit une pièce à vivre, sujet jamais taillé depuis dix
                  ans et devenu disproportionné, dégâts après une tempête hivernale —
                  l'élagage répond à des situations concrètes, pas à un calendrier
                  théorique.
                </p>
                <p>
                  À Angers, le patrimoine arboré dense et le climat océanique qui
                  accélère la croissance imposent des interventions régulières, adaptées
                  à chaque espèce et à chaque contexte — sols, réglementation du
                  secteur sauvegardé, proximité des habitations.
                </p>
              </div>

              {/* Section 3 — Expertise locale */}
              <h2 className="text-3xl font-bold mb-6">
                Élagage à Angers : un patrimoine arboré façonné par le climat océanique
              </h2>

              {/* H3 1 — Patrimoine arboré angevin */}
              <h3 className="font-serif text-2xl text-gray-800 mt-10 mb-4">
                Patrimoine arboré angevin
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  L'élagage à Angers concerne un patrimoine arboré dense
                  et varié, réparti sur plus de 600 hectares d'espaces verts publics et
                  de nombreux jardins privés. Les platanes du jardin du Mail, les tilleuls
                  centenaires du parc de la Garenne, les chênes et hêtres du parc Balzac
                  ou du lac de Maine — chaque quartier présente des essences et des
                  contraintes d'intervention différentes.
                </p>
              </div>

              <InlineGallery slugs={['elagage-2', 'elagage-4']} columns={2} />

              <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-lg p-4 my-6">
                <p className="text-primary-800 font-medium text-sm">
                  Les platanes du jardin du Mail, les tilleuls centenaires du parc de la Garenne —
                  le patrimoine arboré d'Angers témoigne d'une tradition paysagère établie sur
                  plus de 600 hectares d'espaces verts.
                </p>
              </div>

              {/* H3 2 — Climat et croissance */}
              <h3 className="font-serif text-2xl text-gray-800 mt-10 mb-4">
                Climat océanique et croissance des arbres
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600">
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
                  Le climat océanique allonge la période de végétation active.
                  Le calendrier d'intervention s'adapte en conséquence :
                </p>
                <ul>
                  <li><strong>Hiver (hors gel)</strong> : période idéale pour la plupart des feuillus</li>
                  <li><strong>Après floraison</strong> : pour les arbres à fleurs (cerisiers, pruniers...)</li>
                  <li><strong>Toute l'année</strong> : pour les urgences et la sécurisation</li>
                </ul>
                <p>
                  Le choix du calendrier d'intervention dépend de l'espèce, de l'état
                  sanitaire de l'arbre et de l'objectif de la taille.
                </p>
              </div>

              {/* H3 3 — Sols et enracinement */}
              <h3 className="font-serif text-2xl text-gray-800 mt-10 mb-4">
                Sols et systèmes racinaires
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Les sols jouent un rôle direct dans le comportement des arbres :
                  schisteux et bien drainés sur les hauteurs de Monplaisir ou de la
                  Roseraie, ils produisent des systèmes racinaires différents des sols
                  alluviaux plus lourds en fond de vallée, vers le lac de Maine ou
                  Belle-Beille. L'approche de taille s'adapte à chaque situation — ancrage
                  racinaire, exposition au vent, proximité des habitations.
                </p>
              </div>

              <InlineGallery slugs={['elagage-5', 'elagage-3']} columns={2} />

              {/* H3 4 — Réglementation (ABF, EBC) */}
              <h3 className="font-serif text-2xl text-gray-800 mt-10 mb-4">
                Secteur sauvegardé et réglementation ABF
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Le centre historique d'Angers, classé secteur sauvegardé, impose des
                  réglementations spécifiques pour les arbres sous l'autorité des
                  Architectes des Bâtiments de France. Toute intervention sur un arbre
                  classé ou situé en périmètre protégé nécessite une approche conforme
                  à ces exigences réglementaires.
                </p>
              </div>

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
                  href="/services/elagage/"
                  className="text-primary-600 hover:text-primary-800 font-medium"
                >
                  Découvrir l'ensemble de nos prestations élagage →
                </Link>
              </p>

              {/* Section 6 — Déroulement */}
              <h3 className="text-2xl font-bold mt-12 mb-6">Comment se déroule une intervention</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    step: 1,
                    title: 'Diagnostic de l\'arbre',
                    description:
                      'Évaluation de l\'état sanitaire, de la structure et des contraintes environnantes (lignes électriques, toitures, voirie). À Angers, le diagnostic identifie aussi les sujets en périmètre ABF.',
                  },
                  {
                    step: 2,
                    title: 'Choix de la technique',
                    description:
                      'Taille douce, éclaircissage, haubanage ou démontage partiel selon l\'objectif et l\'espèce.',
                  },
                  {
                    step: 3,
                    title: 'Sécurisation du site',
                    description:
                      'Balisage, protection des massifs et des structures au sol, mise en place des accès en hauteur.',
                  },
                  {
                    step: 4,
                    title: 'Intervention en canopée',
                    description:
                      'Travail par élagueurs certifiés, respect des règles de taille pour préserver la cicatrisation.',
                  },
                  {
                    step: 5,
                    title: 'Nettoyage et évacuation',
                    description:
                      'Broyage des rémanents, évacuation des grumes, remise en état du site.',
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

              {/* Section 7 — Pourquoi un professionnel */}
              <h3 className="text-2xl font-bold mt-12 mb-6">Pourquoi faire appel à un élagueur professionnel</h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Une taille mal exécutée ne repousse pas : elle crée une blessure
                  permanente, porte d'entrée pour les champignons et les pathogènes.
                  Sur les platanes du Mail ou les tilleuls de la Garenne, une coupe
                  mal placée compromet la cicatrisation et peut condamner une
                  charpentière entière.
                </p>
                <p>
                  Au-delà de la santé de l'arbre, la sécurité impose un savoir-faire
                  spécifique : travail en hauteur à proximité de lignes électriques,
                  risque de chute de branches sur les toitures ou les passages. En
                  secteur sauvegardé, l'intervention sur un arbre classé nécessite le
                  respect des prescriptions ABF — un professionnel connaît ces
                  contraintes et les intègre dès le diagnostic.
                </p>
              </div>

              {/* Section 8 — Pourquoi choisir Art des Jardins */}
              <h3 className="text-2xl font-bold mt-12 mb-8">Pourquoi choisir Art des Jardins</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Patrimoine arboré angevin</h4>
                  <p className="text-gray-600 text-sm">
                    Expérience sur les espèces locales : platanes, tilleuls, frênes,
                    chênes. Diagnostic adapté à chaque essence et à son environnement
                    immédiat.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Élagueurs certifiés</h4>
                  <p className="text-gray-600 text-sm">
                    Interventions en canopée par des grimpeurs formés. Techniques
                    de taille respectueuses de l'arbre — taille douce, éclaircissage,
                    haubanage.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Secteur sauvegardé ABF</h4>
                  <p className="text-gray-600 text-sm">
                    Connaissance des contraintes réglementaires du centre historique
                    d'Angers et des périmètres protégés. Démarches conformes aux
                    exigences des Architectes des Bâtiments de France.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Intervention urgence</h4>
                  <p className="text-gray-600 text-sm">
                    Réactivité après tempête ou incident. Sécurisation rapide des
                    arbres dangereux, branche cassée, arbre déraciné.
                  </p>
                </div>
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
                  <p className="text-primary-700 mb-4">
                    Nous intervenons à Angers et dans un rayon de 30 km :
                  </p>
                  <ul className="space-y-2 text-primary-700 text-sm">
                    {cities.slice(0, 6).map((c) => (
                      <li key={c.slug} className="flex items-center gap-2">
                        <IconPin className="w-4 h-4" />
                        Élagage {c.name}
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
            Élagage dans les communes voisines
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {getCitiesByProximity(city).map((c) => (
              <Link
                key={c.slug}
                href={`/elagage-${c.slug}/`}
                className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center"
              >
                <span className="font-medium text-gray-900">Élagage {c.name}</span>
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
        <img src="/images/realisations/elagage-1-1200w.webp" alt="" loading="lazy" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay-strong" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Élagage à Angers et communes voisines</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Intervention sur tous types d'arbres, du jardin privé au patrimoine arboré classé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </>
  );
}
