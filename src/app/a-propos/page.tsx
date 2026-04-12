import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/ui/HeroSection';
import { StatsCounter } from '@/components/ui/StatsCounter';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { getCumulatedExperience } from '@/lib/site-config';
import { IconQualite, IconEquipe, IconEcologie, IconTransparence } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'À propos - Art des Jardins | Paysagiste Angers',
  description:
    `Découvrez Art des Jardins, entreprise de paysage à Angers. Deux associés passionnés, ${getCumulatedExperience()} ans d'expérience cumulée. Notre histoire, notre équipe, nos valeurs.`,
  alternates: {
    canonical: '/a-propos/',
  },
  openGraph: {
    title: 'À propos - Art des Jardins',
    description: 'Notre histoire, notre équipe de paysagistes à Angers.',
    type: 'website',
  },
};

const values = [
  {
    title: 'Qualité artisanale',
    description:
      'Chaque jardin est un projet unique. Nous apportons le même soin et la même attention aux détails qu\'un artisan apporte à son ouvrage.',
    icon: <IconQualite className="w-8 h-8" />,
  },
  {
    title: 'Proximité & confiance',
    description:
      'Basés aux Ponts-de-Cé, nous sommes vos voisins. Nous construisons une relation de confiance avec chaque client, sur la durée.',
    icon: <IconEquipe className="w-8 h-8" />,
  },
  {
    title: 'Respect de l\'environnement',
    description:
      'Nous privilégions les techniques durables : désherbage écologique, valorisation des déchets verts, choix de végétaux locaux.',
    icon: <IconEcologie className="w-8 h-8" />,
  },
  {
    title: 'Transparence',
    description:
      'Devis détaillés, pas de mauvaise surprise. Nous vous accompagnons à chaque étape et vous tenons informés de l\'avancement.',
    icon: <IconTransparence className="w-8 h-8" />,
  },
];


export default function AProposPage() {
  return (
    <>

      {/* Hero */}
      <HeroSection
        imageSlug="creation-2"
        title="À propos d'Art des Jardins"
        subtitle="Deux passionnés du paysage au service de votre jardin depuis 2026."
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'À propos' },
        ]}
      />

      {/* Histoire */}
      <section className="py-16 lg:py-24">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Notre histoire</h2>
          <div className="prose prose-lg text-gray-600 mx-auto">
            <p>
              <strong>Art des Jardins</strong> est née de la rencontre de deux passionnés du paysage,
              cumulant plus de {getCumulatedExperience()} ans d&apos;expérience dans l&apos;aménagement et l&apos;entretien
              d&apos;espaces verts. Installés aux Ponts-de-Cé, aux portes d&apos;Angers, nous avons
              fondé notre entreprise avec une conviction : offrir un service de qualité artisanale,
              proche de nos clients.
            </p>
            <p>
              Notre force, c&apos;est la complémentarité. Conception paysagère, choix des végétaux
              et relation client d&apos;un côté ; expertise technique, élagage et travaux en hauteur
              de l&apos;autre. Cette double compétence nous permet d&apos;intervenir sur l&apos;ensemble
              de vos projets, de la création de jardin à l&apos;abattage d&apos;arbres.
            </p>
            <p>
              Après des années d&apos;expérience dans des entreprises de paysage du Maine-et-Loire,
              nous avons voulu créer une structure à taille humaine, où la qualité du travail et la
              satisfaction client passent avant tout. Chaque projet est pour nous l&apos;occasion de
              mettre notre savoir-faire au service de votre jardin.
            </p>
            <p>
              Aujourd&apos;hui, Art des Jardins intervient dans toute l&apos;agglomération d&apos;Angers
              et au-delà, dans un rayon de 30 km. De la création de jardin à l&apos;élagage en passant
              par l&apos;entretien régulier, nous sommes votre interlocuteur unique pour tous vos besoins
              en espaces verts.
            </p>
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Notre équipe</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

            {/* Louis Coussière */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src="/images/team/louis-coussiere.webp"
                alt="Louis Coussière, élagueur et paysagiste — Art des Jardins"
                width={1024}
                height={1536}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[2/3] object-cover object-top"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Louis Coussière</h3>
                <div className="text-gray-600 text-sm space-y-3">
                  <p>
                    Passionné par le végétal et le travail en extérieur, je mets mon savoir-faire au
                    service de vos espaces verts. Élagueur et paysagiste de métier, j&apos;interviens
                    avec précision et respect pour la santé et l&apos;esthétique des arbres.
                  </p>
                  <p>
                    Grâce à mes compétences en maçonnerie paysagère, je conçois et réalise également
                    des aménagements durables et harmonieux, adaptés à vos besoins.
                  </p>
                  <p>
                    Polyvalent et rigoureux, j&apos;assure aussi l&apos;entretien complet de vos
                    extérieurs afin de garantir leur beauté au fil des saisons.
                  </p>
                </div>
              </div>
            </div>

            {/* Joselyn Rondeau */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src="/images/team/joselyn-rondeau.webp"
                alt="Joselyn Rondeau, spécialiste bois et arrosage — Art des Jardins"
                width={1024}
                height={1536}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[2/3] object-cover object-top"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Joselyn Rondeau</h3>
                <div className="text-gray-600 text-sm space-y-3">
                  <p>
                    Spécialiste du travail du bois, je conçois et réalise des aménagements sur mesure
                    alliant esthétisme, solidité et intégration naturelle dans votre environnement
                    extérieur.
                  </p>
                  <p>
                    Fort d&apos;une expertise en systèmes d&apos;arrosage automatique et en électricité
                    extérieure, je mets en place des installations fiables et performantes, pensées
                    pour optimiser la gestion de l&apos;eau et valoriser vos espaces grâce à des
                    solutions d&apos;éclairage adaptées.
                  </p>
                  <p>
                    Force de proposition, je vous accompagne dans la création de jardins sur mesure,
                    en apportant des idées innovantes et des solutions personnalisées afin de donner
                    vie à des espaces extérieurs uniques, en parfaite harmonie avec vos envies et
                    votre cadre de vie.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <AnimateOnScroll>
        <StatsCounter />
      </AnimateOnScroll>

      {/* Valeurs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nos valeurs</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ce qui guide notre travail au quotidien.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-primary-600 mb-4">{value.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <img src="/images/realisations/creation-5-1200w.webp" alt="" loading="lazy" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay-strong" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Envie de nous confier votre projet ?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Contactez-nous pour un devis gratuit et sans engagement.
          </p>
          <Link href="/contact/" className="btn-primary-light">
            Parlons de votre projet
          </Link>
        </div>
      </section>
    </>
  );
}
