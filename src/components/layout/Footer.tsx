import Link from 'next/link';
import Image from 'next/image';
import { IconPin, IconPhone, IconEmail, IconInstagram } from '@/lib/icons';
import { SITE } from '@/lib/site-config';
import { cities } from '@/lib/cities-data';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const zoneCities = cities.filter((c) => c.slug !== 'angers');

  return (
    <footer className="bg-gray-900 text-gray-300 pb-[72px] md:pb-0">
      <div className="container-custom py-10 md:py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/logo-leaf.webp"
                alt=""
                width={90}
                height={50}
                className="h-7 w-auto brightness-110"
              />
              <span className="text-xl font-bold text-white font-serif">Art des Jardins</span>
            </div>
            <p className="text-gray-400 mb-4">
              Paysagiste professionnel à Angers et environs. Création de jardins, entretien, élagage et abattage. Approche sur mesure, qualité artisanale.
            </p>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center gap-2">
                <IconPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                {SITE.address.full}
              </p>
              <div className="flex items-start gap-2">
                <IconPhone className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                <div className="flex items-center">
                  <a href={SITE.phone1.link} className="hover:text-white transition-colors">{SITE.phone1.display}</a>
                  <span className="mx-1.5 text-gray-600">|</span>
                  <a href={SITE.phone2.link} className="hover:text-white transition-colors">{SITE.phone2.display}</a>
                </div>
              </div>
              <p className="flex items-center gap-2">
                <IconEmail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a>
              </p>
              <p className="flex items-center gap-2">
                <IconInstagram className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <a
                  href={SITE.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivez-nous sur Instagram"
                  className="hover:text-white transition-colors"
                >
                  {SITE.instagram.handle}
                </a>
              </p>
            </div>
          </div>

          {/* Nav columns: 2 cols on mobile, integrated in 4-col grid on md+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:contents">
            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-3 md:mb-4">Services</h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link href="/paysagiste-angers" className="block py-2 md:py-0 hover:text-white transition-colors">
                    Paysagiste Angers
                  </Link>
                </li>
                <li>
                  <Link href="/entretien-jardin-angers" className="block py-2 md:py-0 hover:text-white transition-colors">
                    Entretien jardin
                  </Link>
                </li>
                <li>
                  <Link href="/elagage-angers" className="block py-2 md:py-0 hover:text-white transition-colors">
                    Élagage Angers
                  </Link>
                </li>
                <li>
                  <Link href="/abattage-angers" className="block py-2 md:py-0 hover:text-white transition-colors">
                    Abattage
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-3 md:mb-4">Informations</h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link href="/a-propos" className="block py-2 md:py-0 hover:text-white transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/realisations" className="block py-2 md:py-0 hover:text-white transition-colors">
                    Réalisations
                  </Link>
                </li>
                <li>
                  <Link href="/mentions-legales" className="block py-2 md:py-0 hover:text-white transition-colors">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link href="/politique-confidentialite" className="block py-2 md:py-0 hover:text-white transition-colors">
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/conseils" className="block py-2 md:py-0 hover:text-white transition-colors">
                    Conseils jardinage
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="block py-2 md:py-0 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block py-2 md:py-0 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Zones d'intervention — maillage SEO local */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h3 className="text-white font-semibold mb-4">Zones d&apos;intervention</h3>
          <nav aria-label="Communes d'intervention">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-sm">
              {zoneCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/paysagiste-${city.slug}/`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Paysagiste {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 space-y-1">
          <p>&copy; {currentYear} SARL Art des Jardins. Tous droits réservés.</p>
          <p className="text-xs text-gray-600">{SITE.legalName} - SIRET {SITE.siret} - TVA {SITE.tva} - RCS Angers</p>
          <p className="text-xs text-gray-700 pt-2">
            Conception &amp; développement{' '}
            <a
              href="https://nicolazic.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              NZTD
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
