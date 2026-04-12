'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import {
  IconAmenagement,
  IconEntretien,
  IconElagage,
  IconAbattage,
  IconTerrasse,
  IconCloture,
  IconTailleHaies,
  IconDebroussaillage,
  IconChevronDown,
  IconPhone,
  IconMenu,
  IconClose,
} from '@/lib/icons';
import { SITE } from '@/lib/site-config';
import { services } from '@/lib/services-data';

const menuIconMap: Record<string, React.ReactNode> = {
  paysagisme: <IconAmenagement className="w-6 h-6" />,
  'entretien-jardin': <IconEntretien className="w-6 h-6" />,
  elagage: <IconElagage className="w-6 h-6" />,
  abattage: <IconAbattage className="w-6 h-6" />,
  debroussaillage: <IconDebroussaillage className="w-6 h-6" />,
  terrasse: <IconTerrasse className="w-6 h-6" />,
  cloture: <IconCloture className="w-6 h-6" />,
  'taille-haies': <IconTailleHaies className="w-6 h-6" />,
};

const menuServiceSlugs = ['paysagisme', 'entretien-jardin', 'elagage', 'abattage', 'debroussaillage', 'terrasse', 'cloture', 'taille-haies'] as const;

const serviceMenuItems = menuServiceSlugs.map((slug) => {
  const s = services.find((svc) => svc.slug === slug)!;
  return {
    title: s.shortTitle,
    description: s.menuDescription,
    href: `/services/${s.slug}/`,
    icon: menuIconMap[s.slug],
    badge: s.isTaxCreditEligible ? 'Crédit d\u2019impôt' : undefined,
  };
});


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo-leaf.png"
              alt=""
              width={40}
              height={26}
              className="h-7 w-auto"
              priority
            />
            <span className="text-2xl font-bold text-primary-700 font-serif">Art des Jardins</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Accueil
            </Link>

            {/* Services Mega-menu */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                className="flex items-center gap-1 text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Services
                <IconChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                  servicesOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-[540px] max-w-[calc(100vw-2rem)]">
                  <div className="grid grid-cols-2 gap-1">
                    {serviceMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary-50 transition-colors group"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="text-primary-600 mt-0.5 group-hover:text-primary-700">
                          {item.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-medium text-gray-900 group-hover:text-primary-700 text-sm">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="text-xs font-semibold bg-secondary-100 text-secondary-700 px-1.5 py-0.5 rounded-full leading-none whitespace-nowrap">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link
                      href="/services/"
                      className="block text-center text-sm text-primary-600 hover:text-primary-700 font-medium py-1"
                      onClick={() => setServicesOpen(false)}
                    >
                      Voir tous nos services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/realisations"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Réalisations
            </Link>
            <Link
              href="/paysagiste-angers"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Nos zones
            </Link>
            <Link
              href="/conseils"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Conseils
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Contact
            </Link>
            <a
              href={SITE.phone1.link}
              className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <IconPhone className="w-4 h-4" />
              <span className="font-medium">{SITE.phone1.display}</span>
            </a>
            <Link href="/contact" className="btn-primary text-sm py-2">
              Devis gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-3 rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileMenuOpen ? (
              <IconClose className="h-6 w-6" />
            ) : (
              <IconMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Menu principal"
          className={`lg:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${
            mobileMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="py-4 border-t">
              <Link
                href="/"
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary-600 font-medium"
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <IconChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ${
                    mobileServicesOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-4 pb-2 space-y-1">
                      {serviceMenuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-2 py-1.5 text-sm text-gray-600 hover:text-primary-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="text-primary-600">{item.icon}</span>
                          {item.title}
                          {item.badge && (
                            <span className="text-xs font-semibold bg-secondary-100 text-secondary-700 px-1.5 py-0.5 rounded-full leading-none">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                      <Link
                        href="/services/"
                        className="block py-1.5 text-sm text-primary-600 font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Voir tous les services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/realisations"
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Réalisations
              </Link>
              <Link
                href="/paysagiste-angers"
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nos zones
              </Link>
              <Link
                href="/conseils"
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Conseils
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="block mt-4 btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
