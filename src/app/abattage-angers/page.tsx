import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessCitySchema } from '@/components/seo/LocalBusinessCitySchema';
import { cities, serviceTypes, getCitiesByProximity } from '@/lib/cities-data';
import { HeroSection } from '@/components/ui/HeroSection';
import { InlineGallery } from '@/components/ui/InlineGallery';
import { ogImages } from '@/lib/images-manifest';
import { IconCheck } from '@/lib/icons';
import { SITE } from '@/lib/site-config';

const service = serviceTypes.find((s) => s.service === 'abattage')!;
const city = cities.find((c) => c.slug === 'angers')!;

export const metadata: Metadata = {
  title: 'Abattage d\'Arbres Angers - Dessouchage | Art des Jardins',
  description:
    'Abattage d\'arbres à Angers : démontage technique en milieu urbain dense, dessouchage sur sol schisteux ou alluvial, évacuation et valorisation du bois.',
  keywords: [
    'abattage arbre angers',
    'dessouchage angers',
    'abattage 49',
    'coupe arbre angers',
    'abattage urgence angers',
  ],
  alternates: {
    canonical: '/abattage-angers/',
  },
  openGraph: {
    title: 'Abattage Arbres Angers - Art des Jardins',
    description: 'Abattage d\'arbres à Angers : démontage technique, dessouchage, évacuation. Frênes, peupliers, conifères disproportionnés.',
    type: 'website',
    images: [{ url: ogImages.abattage, width: 1200, height: 630 }],
  },
};

export default function AbattageAngersPage() {
  return (
    <>
      <LocalBusinessCitySchema
        city="Angers"
        postalCode="49000"
        service="Abattage d'arbres"
        serviceDescription="Abattage sécurisé d'arbres dangereux ou gênants à Angers."
        url={`${SITE.url}/abattage-angers/`}
      />

      {/* Hero */}
      <HeroSection
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Abattage Angers' },
        ]}
        imageSlug="elagage-3"
        title="Abattage d'Arbres à Angers"
        subtitle="Abattage d'arbres dangereux, malades ou gênants à Angers. Démontage technique en zone contrainte, dessouchage et évacuation."
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
                Quand l'abattage devient nécessaire
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                <p>
                  Frêne atteint par la chalarose et en phase de dépérissement, conifère
                  des années 70-80 devenu disproportionné par rapport à la parcelle, souche
                  gênante après une coupe ancienne, arbre fragilisé ou tombé après une
                  tempête hivernale, projet de construction ou d'aménagement qui impose de
                  dégager l'espace — l'abattage répond à des situations concrètes.
                </p>
                <p>
                  À Angers, la nature des sols, la densité du bâti en centre-ville et les
                  réglementations du secteur sauvegardé ajoutent des contraintes spécifiques
                  à chaque intervention.
                </p>
              </div>

              {/* Section 3 — Expertise locale */}
              <h2 className="text-3xl font-bold mb-6">
                Abattage d'arbres à Angers : essences, contraintes et réglementation
              </h2>

              {/* H3 1 — Arbres concernés */}
              <h3 className="font-serif text-2xl text-gray-800 mt-10 mb-4">
                Essences concernées dans le Maine-et-Loire
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Les frênes touchés par la chalarose (Chalara fraxinea), maladie qui
                  progresse dans tout le Maine-et-Loire, sont aujourd'hui une cause
                  fréquente d'abattage. Les peupliers d'Italie vieillissants le long de
                  la Maine et de la Sarthe présentent des risques de rupture, tout comme
                  les conifères — épicéas, thuyas, cyprès de Leyland — plantés dans les
                  quartiers pavillonnaires des années 70-80 et devenus disproportionnés
                  par rapport aux parcelles.
                </p>
              </div>

              <InlineGallery slugs={['elagage-2', 'elagage-5']} columns={2} />

              <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-lg p-4 my-6">
                <p className="text-primary-800 font-medium text-sm">
                  La chalarose du frêne (Chalara fraxinea) progresse dans tout le Maine-et-Loire.
                  Les frênes atteints nécessitent un diagnostic régulier et, dans de nombreux cas,
                  un abattage sanitaire pour éviter les chutes incontrôlées.
                </p>
              </div>

              {/* H3 2 — Contraintes urbaines */}
              <h3 className="font-serif text-2xl text-gray-800 mt-10 mb-4">
                Milieu urbain dense : démontage technique
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  En centre-ville dense, l'abattage direct est rarement possible.
                  L'absence d'espace de chute impose un démontage technique : descente
                  des branches et tronçons à la corde, pièce par pièce. Dans le secteur
                  sauvegardé d'Angers, toute intervention sur un arbre nécessite une
                  déclaration préalable. Les quartiers de La Doutre, Saint-Serge ou
                  Centre-ville présentent systématiquement ces contraintes d'accès et de
                  réglementation.
                </p>
              </div>

              {/* H3 3 — Réglementation et autorisations */}
              <h3 className="font-serif text-2xl text-gray-800 mt-10 mb-4">
                Réglementation et autorisations à Angers
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Le PLU d'Angers identifie des Espaces Boisés Classés (EBC) dans
                  plusieurs quartiers, où l'abattage exige une autorisation de
                  défrichement. En périmètre ABF (Architectes des Bâtiments de France),
                  la déclaration est également obligatoire. Ces démarches administratives
                  sont un préalable indispensable avant toute intervention.
                </p>
                <p>
                  L'abattage d'un arbre peut nécessiter une autorisation selon la situation :
                </p>
                <ul>
                  <li><strong>Arbre classé ou remarquable</strong> : autorisation obligatoire</li>
                  <li><strong>Zone protégée (ABF, secteur sauvegardé)</strong> : déclaration préalable</li>
                  <li><strong>PLU avec EBC (Espace Boisé Classé)</strong> : autorisation de défrichement</li>
                  <li><strong>Arbre sur terrain privé hors zone protégée</strong> : pas d'autorisation nécessaire</li>
                </ul>
                <p>
                  Les demandes d'autorisation se font auprès de la mairie d'Angers
                  (service urbanisme) ou de la préfecture selon le type de protection.
                  Le délai d'instruction varie de 1 à 3 mois.
                </p>
              </div>

              {/* H3 4 — Dessouchage et valorisation */}
              <h3 className="font-serif text-2xl text-gray-800 mt-10 mb-4">
                Dessouchage et valorisation du bois
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Le dessouchage après abattage dépend de la nature du sol. Sur les
                  hauteurs de Monplaisir ou de Belle-Beille, le sous-sol schisteux ancre
                  les souches dans la roche et nécessite une rogneuse de forte puissance.
                  En fond de vallée, vers le lac de Maine, les sols alluviaux facilitent
                  l'extraction mais la nappe phréatique haute impose des précautions
                  spécifiques. Le bois de chêne et de hêtre issu de l'abattage peut être
                  valorisé en bois de chauffage ; les résineux, moins demandés, sont
                  évacués en filière de recyclage.
                </p>
              </div>

              {/* Section 4 — Nos méthodes d'abattage (PRÉSERVÉ) */}
              <h3 className="text-2xl font-bold mt-12 mb-6">Nos méthodes d'abattage</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Abattage direct</h4>
                  <p className="text-gray-600 text-sm">
                    Pour les arbres en terrain dégagé avec espace de chute suffisant.
                    Applicable en zone périurbaine quand les conditions le permettent.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Démontage technique</h4>
                  <p className="text-gray-600 text-sm">
                    Pour les arbres en zone contrainte (près de bâtiments, lignes...).
                    Abattage pièce par pièce avec retenue des branches.
                  </p>
                </div>
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
                  href="/services/abattage/"
                  className="text-primary-600 hover:text-primary-800 font-medium"
                >
                  Découvrir l'ensemble de nos prestations abattage →
                </Link>
              </p>

              {/* Section 6 — Déroulement */}
              <h3 className="text-2xl font-bold mt-12 mb-6">Comment se déroule un abattage</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    step: 1,
                    title: 'Diagnostic et faisabilité',
                    description:
                      'Évaluation de l\'état de l\'arbre, identification des risques (chalarose, défauts structurels), contraintes d\'accès. À Angers, vérification du statut réglementaire (EBC, périmètre ABF).',
                  },
                  {
                    step: 2,
                    title: 'Démarches administratives',
                    description:
                      'Si l\'arbre est en zone protégée : déclaration préalable ou autorisation de défrichement. Délai d\'instruction de 1 à 3 mois selon le type de protection.',
                  },
                  {
                    step: 3,
                    title: 'Sécurisation du site',
                    description:
                      'Balisage de la zone de chute ou de démontage, protection des structures et plantations voisines.',
                  },
                  {
                    step: 4,
                    title: 'Abattage ou démontage',
                    description:
                      'Abattage direct si l\'espace le permet, démontage technique pièce par pièce en zone contrainte (descente à la corde).',
                  },
                  {
                    step: 5,
                    title: 'Dessouchage et évacuation',
                    description:
                      'Rognage de la souche, évacuation des grumes et rémanents. Le bois de feuillus peut être valorisé en bois de chauffage.',
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
              <h3 className="text-2xl font-bold mt-12 mb-6">Pourquoi faire appel à un professionnel</h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Un arbre de grande taille en milieu urbain représente un risque réel
                  en cas de chute non contrôlée — dommages aux toitures, aux clôtures
                  mitoyennes, à la voirie. La responsabilité du propriétaire est engagée
                  en cas de dégâts causés à un tiers. Dans les quartiers denses d'Angers
                  comme La Doutre ou Saint-Serge, l'absence d'espace de chute impose un
                  démontage pièce par pièce avec du matériel adapté : rogneuse de souche,
                  nacelle, tronçonneuse de forte puissance.
                </p>
                <p>
                  Les démarches administratives — déclaration préalable en secteur
                  sauvegardé, autorisation de défrichement en EBC, dossier ABF — demandent
                  une connaissance des procédures auprès de la mairie d'Angers et de la
                  préfecture. Un professionnel intègre ces contraintes dès le diagnostic
                  pour éviter les blocages en cours d'intervention.
                </p>
              </div>

              {/* Section 8 — Pourquoi choisir Art des Jardins */}
              <h3 className="text-2xl font-bold mt-12 mb-8">Pourquoi choisir Art des Jardins</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Démontage en milieu urbain dense</h4>
                  <p className="text-gray-600 text-sm">
                    Intervention pièce par pièce dans les quartiers contraints d'Angers
                    (La Doutre, Saint-Serge, Centre-ville). Descente à la corde,
                    protection du site.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Dessouchage sols schisteux-alluviaux</h4>
                  <p className="text-gray-600 text-sm">
                    Rogneuse adaptée aux substrats durs de Monplaisir et Belle-Beille.
                    Précautions spécifiques en fond de vallée (nappe haute).
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Démarches administratives</h4>
                  <p className="text-gray-600 text-sm">
                    Connaissance des procédures : EBC, ABF, déclaration préalable.
                    Accompagnement dans les demandes auprès de la mairie d'Angers.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Urgence tempête</h4>
                  <p className="text-gray-600 text-sm">
                    Réactivité après intempéries. Sécurisation des arbres tombés ou
                    fragilisés, intervention rapide.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-bold text-red-800 mb-4">Urgence abattage</h3>
                  <p className="text-red-700 mb-4">
                    Arbre tombé, dangereux après tempête ?
                    Intervention rapide pour sécuriser les lieux.
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
                  <h3 className="text-lg font-bold text-primary-800 mb-4">Inclus dans nos tarifs</h3>
                  <ul className="space-y-2 text-primary-700 text-sm">
                    <li>• Évaluation des risques</li>
                    <li>• Protection du site</li>
                    <li>• Abattage ou démontage</li>
                    <li>• Débit du bois</li>
                    <li>• Évacuation des déchets</li>
                    <li>• Nettoyage du terrain</li>
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
            Abattage d'arbres dans les communes voisines
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {getCitiesByProximity(city).map((c) => (
              <Link
                key={c.slug}
                href={`/abattage-${c.slug}/`}
                className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center"
              >
                <span className="font-medium text-gray-900">Abattage {c.name}</span>
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
        <img src="/images/realisations/elagage-5-1200w.webp" alt="" loading="lazy" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay-strong" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Besoin d'abattre un arbre ?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Évaluation sur place, diagnostic de l'arbre et devis détaillé.
            Intervention possible en urgence après tempête.
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
