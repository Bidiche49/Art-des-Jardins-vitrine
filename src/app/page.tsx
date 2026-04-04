import Link from 'next/link';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { HomeFAQ } from '@/components/HomeFAQ';
// import { Testimonials } from '@/components/Testimonials'; // DESACTIVE — avis fictifs, reactiver avec de vrais avis
import { HeroSection } from '@/components/ui/HeroSection';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { StatsCounter } from '@/components/ui/StatsCounter';
import { PhotoGallery } from '@/components/ui/PhotoGallery';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { BeforeAfterSection } from '@/components/BeforeAfterSection';
import { serviceCardImages, getSrcSet, getDefaultSrc, getImage } from '@/lib/images-manifest';
import { IconRcPro, IconDecennale, IconExperience, IconDevis48h, IconZone30km, IconInstagram, IconEuro } from '@/lib/icons';
import { SITE, getCumulatedExperience } from '@/lib/site-config';
import { services as allServices } from '@/lib/services-data';
import { cities } from '@/lib/cities-data';

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />

      {/* Hero + Trust Band = 100vh on desktop */}
      <div className="lg:flex lg:flex-col lg:min-h-[calc(100vh-4rem)]">
        <HeroSection
          imageSlug="entretien-2"
          title="Votre paysagiste à Angers"
          subtitle="Aménagement de jardins, entretien, élagage et abattage dans tout le Maine-et-Loire."
          fullHeight
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              Demander ma visite gratuite
            </Link>
            <Link href="/services" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10">
              Découvrir nos services
            </Link>
          </div>
        </HeroSection>

        {/* Trust Band */}
        <section className="py-6 lg:py-8 bg-white border-b border-gray-100">
          <div className="container-custom max-w-5xl">
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 md:gap-x-10 md:gap-y-4 lg:gap-x-14 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <IconRcPro className="w-5 h-5 text-primary-600 flex-shrink-0" />
              <span className="font-medium">Assurance RC Pro</span>
            </div>
            <div className="flex items-center gap-2">
              <IconDecennale className="w-5 h-5 text-primary-600 flex-shrink-0" />
              <span className="font-medium">Assurance décennale</span>
            </div>
            <div className="flex items-center gap-2">
              <IconExperience className="w-5 h-5 text-primary-600 flex-shrink-0" />
              <span className="font-medium">{getCumulatedExperience()} ans d&apos;expérience cumulée</span>
            </div>
            <div className="flex items-center gap-2">
              <IconDevis48h className="w-5 h-5 text-primary-600 flex-shrink-0" />
              <span className="font-medium">Réponse sous 48h</span>
            </div>
            <div className="flex items-center gap-2">
              <IconZone30km className="w-5 h-5 text-primary-600 flex-shrink-0" />
              <span className="font-medium">Angers et 30 km</span>
            </div>
            <div className="flex items-center gap-2">
              <IconEuro className="w-5 h-5 text-secondary-500 flex-shrink-0" />
              <span className="font-medium text-secondary-700">Crédit d&#x2019;impôt 50&#xa0;%</span>
            </div>
          </div>
        </div>
        </section>
      </div>

      {/* Services Section */}
      <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 lg:mb-12">Nos services de paysagiste à Angers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 100} className="h-full">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  imageSlug={service.imageSlug}
                  badge={service.badge}
                />
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services/" className="btn-secondary">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials — DESACTIVE : les avis actuels sont fictifs (placeholder).
         Reactiver <Testimonials /> uniquement quand de vrais avis clients seront disponibles.
         Le composant est pret dans @/components/Testimonials.tsx */}

      {/* Gallery Preview */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nos réalisations d&apos;aménagement paysager</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Découvrez quelques-unes de nos réalisations à Angers et dans le Maine-et-Loire.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <PhotoGallery
              maxItems={8}
              showFilters={false}
              excludeSlugs={[
                'entretien-2', // hero
                'creation-9', 'entretien-3', 'elagage-2', 'elagage-1', // service cards
                'entretien-1', 'creation-1', 'creation-2', 'chantier-avant-1', 'chantier-apres-1', // avant/après
                'creation-6', // chantier non fini
                'terrasse-2', // utilisée section zones
              ]}
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link href="/contact/" className="btn-primary">
                Demander un devis gratuit
              </Link>
              <a
                href={SITE.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                <IconInstagram className="w-5 h-5" />
                Plus de réalisations sur Instagram
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Avant / Après */}
      <BeforeAfterSection />

      {/* CTA intermédiaire */}
      <section className="py-12 lg:py-16 bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Votre jardin mérite aussi cette transformation
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Chaque projet commence par une écoute attentive de vos envies.
          </p>
          <Link href="/contact" className="btn-primary">
            Parlons de votre projet
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom max-w-4xl">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Art des Jardins, votre paysagiste de confiance à Angers
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="prose prose-lg text-gray-600 mx-auto text-center">
              <p>
                Fondée par deux associés passionnés cumulant plus de <strong>{getCumulatedExperience()} ans d&apos;expérience</strong>,
                Art des Jardins accompagne particuliers et professionnels dans tous leurs projets
                d&apos;espaces verts à Angers et dans le Maine-et-Loire.
              </p>
              <p>
                <Link href="/a-propos/" className="text-primary-600 hover:text-primary-700 font-medium">
                  Découvrir notre histoire &rarr;
                </Link>
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <HomeFAQ />

      {/* Stats Counter */}
      <AnimateOnScroll>
        <StatsCounter />
      </AnimateOnScroll>

      {/* Zone d'intervention */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Paysagiste à Angers et dans le Maine-et-Loire
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="prose prose-lg text-gray-600">
                <p>
                  Nous intervenons dans un rayon de 30 km autour d&apos;Angers pour tous vos travaux de jardinage
                  et d&apos;aménagement paysager. Notre zone d&apos;intervention couvre notamment :
                </p>
                <p>
                  Intervention possible hors département pour les projets d&apos;envergure.
                </p>
              </div>
              {(() => {
                const zoneImage = getImage('terrasse-2');
                if (!zoneImage) return null;
                return (
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <picture>
                      <source type="image/webp" srcSet={getSrcSet(zoneImage)} sizes="(max-width: 768px) 100vw, 50vw" />
                      <img src={getDefaultSrc(zoneImage, 800)} alt={zoneImage.alt} loading="lazy" className="w-full h-auto" />
                    </picture>
                  </div>
                );
              })()}
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/paysagiste-${city.slug}/`}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:text-primary-600 hover:shadow-md transition-all border border-gray-200"
                >
                  {city.name}
                </Link>
              ))}
            </div>
            <div className="prose prose-lg text-gray-600 mx-auto mt-6">
              <p>
                Quel que soit votre projet — entretien de jardin, création d&apos;espace vert, élagage
                ou abattage — nous nous déplaçons pour comprendre vos besoins et vous proposer
                la solution la plus adaptée.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <img src="/images/realisations/creation-7-1200w.webp" alt="" loading="lazy" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay-strong" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Prêt à transformer votre jardin ?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Intervention rapide dans tout Angers et ses environs.
            Crédit d&#x2019;impôt 50&#xa0;% sur l&#x2019;entretien de jardin.
          </p>
          <Link href="/contact" className="btn-primary-light">
            Demander une visite conseil
          </Link>
        </div>
      </section>
    </>
  );
}

const homepageServiceSlugs = ['paysagisme', 'entretien-jardin', 'elagage', 'terrasse', 'cloture', 'taille-haies'] as const;

const services = homepageServiceSlugs.map((slug) => {
  const s = allServices.find((svc) => svc.slug === slug)!;
  return {
    title: s.shortTitle,
    description: s.cardDescription,
    href: `/services/${s.slug}/`,
    imageSlug: serviceCardImages[s.slug as keyof typeof serviceCardImages],
    badge: s.isTaxCreditEligible ? 'Crédit d\u2019impôt 50\u00a0%' : undefined,
  };
});
