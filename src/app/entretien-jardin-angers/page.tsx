import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessCitySchema } from '@/components/seo/LocalBusinessCitySchema';
import { cities, serviceTypes } from '@/lib/cities-data';
import { HeroSection } from '@/components/ui/HeroSection';
import { InlineGallery } from '@/components/ui/InlineGallery';
import { TaxCreditSection } from '@/components/TaxCreditSection';
import { ogImages } from '@/lib/images-manifest';
import { IconCheck } from '@/lib/icons';
import { SITE } from '@/lib/site-config';

const service = serviceTypes.find((s) => s.service === 'entretien-jardin')!;
const city = cities.find((c) => c.slug === 'angers')!;

export const metadata: Metadata = {
  title: 'Entretien de Jardin Angers - 50% Crédit d\'Impôt | Art des Jardins',
  description:
    'Entretien de jardin à Angers : tonte, taille de haies, désherbage adaptés au climat océanique angevin. Agréé services à la personne — 50 % de crédit d\'impôt.',
  keywords: [
    'entretien jardin angers',
    'crédit impôt entretien jardin',
    'crédit impôt jardinage',
    'jardinier angers',
    'tonte pelouse angers',
    'taille haie angers',
    'entretien jardin 49',
    'service à la personne jardinage',
  ],
  alternates: {
    canonical: '/entretien-jardin-angers/',
  },
  openGraph: {
    title: 'Entretien Jardin Angers - 50% Crédit d\'Impôt | Art des Jardins',
    description: 'Entretien de jardin à Angers adapté au climat doux et humide de l\'Anjou. Tonte, taille, désherbage — 50 % de crédit d\'impôt.',
    type: 'website',
    images: [{ url: ogImages.entretien, width: 1200, height: 630 }],
  },
};

export default function EntretienJardinAngersPage() {
  return (
    <>
      <LocalBusinessCitySchema
        city="Angers"
        postalCode="49000"
        service="Entretien de jardin"
        serviceDescription="Service d'entretien de jardin régulier à Angers : tonte, taille, désherbage."
        url={`${SITE.url}/entretien-jardin-angers/`}
      />

      {/* Hero */}
      <HeroSection
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Entretien jardin Angers' },
        ]}
        imageSlug="entretien-3"
        title="Entretien de Jardin à Angers"
        subtitle="Entretien de jardin à Angers — tonte, taille de haies, désherbage au rythme du climat angevin. Agréé services à la personne, 50 % de crédit d'impôt."
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
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Entretenir un jardin sous climat angevin
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  L'<strong>entretien de jardin à Angers</strong> suit un rythme dicté par le climat
                  océanique de la vallée de la Maine. Douceur hivernale, humidité régulière, étés
                  tempérés : les pelouses poussent de mars à octobre sans vraie pause, ce qui
                  représente 25 à 30 tontes par an — près du double d'un jardin en climat continental.
                  Les haies de laurier, de photinia ou de charme prennent 2 à 3 tailles annuelles
                  pour rester contenues.
                </p>
                <p>
                  L'humidité favorise aussi la mousse dans les gazons, les maladies fongiques sur
                  les rosiers et les adventices qui ne gèlent pas en hiver. Le désherbage reste
                  une activité quasi continue d'un bout à l'autre de l'année. En automne, les
                  platanes, tilleuls et marronniers présents dans de nombreuses rues angevines
                  génèrent un volume de feuilles important à évacuer avant que le gazon ne s'étouffe.
                </p>
                <p>
                  Les sols jouent aussi un rôle dans le calendrier d'entretien. Sur les hauteurs de
                  Monplaisir ou en centre-ville, le substrat schisteux se dessèche vite en été :
                  l'arrosage et le paillage deviennent nécessaires dès juin. En fond de vallée, vers
                  le lac de Maine ou les bords de la Maine, les sols alluviaux restent gorgés d'eau
                  en hiver, rendant la tonte délicate et le passage d'engins plus contraignant.
                </p>
                <p>
                  Dans les quartiers pavillonnaires de Belle-Beille, des Hauts de Saint-Aubin ou de
                  la Roseraie, les haies de thuyas et de leylandii plantées dans les années 90
                  arrivent en fin de vie. Leur remplacement ou leur reconversion en haies mixtes
                  fait partie des interventions courantes, au même titre que la tonte régulière
                  et la taille des arbustes.
                </p>
              </div>

              <InlineGallery slugs={['entretien-1', 'entretien-2']} columns={2} />

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
                  href="/services/entretien-jardin/"
                  className="text-primary-600 hover:text-primary-800 font-medium"
                >
                  Découvrir l'ensemble de nos prestations entretien de jardin →
                </Link>
              </p>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-primary-800 mb-4">Avantages contrat</h3>
                  <ul className="space-y-3 text-primary-700">
                    <li className="flex items-start gap-2">
                      <IconCheck className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Tarif préférentiel (-15%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Priorité d'intervention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Planning fixe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Suivi personnalisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold text-green-700">50 % de crédit d'impôt</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-bold mb-2">Devis gratuit</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Étude personnalisée de vos besoins d'entretien.
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

      {/* Credit d'impot - Section mise en avant */}
      <TaxCreditSection />

      {/* Formules d'entretien */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos formules d'entretien</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Contrat annuel</h3>
              <p className="text-gray-600 text-sm mb-4">
                Passages planifiés de mars à novembre, avec un calendrier calé sur le
                rythme de pousse angevin. Priorité d'intervention garantie.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 10 à 15 passages par an (tonte, taille, désherbage)</li>
                <li>• Traitement mousse et scarification du gazon</li>
                <li>• Évacuation des déchets verts</li>
                <li>• Ramassage de feuilles en automne</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Intervention ponctuelle</h3>
              <p className="text-gray-600 text-sm mb-4">
                Pour un rattrapage après absence, un nettoyage saisonnier ou une
                taille spécifique. Sur devis après évaluation du jardin.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Remise en état d'un jardin non entretenu</li>
                <li>• Arrachage de haies en fin de vie (thuyas, leylandii)</li>
                <li>• Nettoyage automnal complet</li>
                <li>• Taille de rattrapage sur haies ou arbustes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <img src="/images/realisations/entretien-1-1200w.webp" alt="" loading="lazy" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay-strong" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Entretien régulier ou ponctuel à Angers</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Tonte, taille, désherbage, ramassage de feuilles — interventions adaptées
            au rythme de votre jardin et au climat angevin.
          </p>
          <Link href="/contact/" className="btn-primary-light">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
