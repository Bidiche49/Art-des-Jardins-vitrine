import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page introuvable',
  description: "La page demandée n'existe pas ou a été déplacée.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="container-custom py-20 md:py-28 text-center">
      <p className="text-secondary-600 font-medium tracking-[0.2em] uppercase text-sm mb-4">
        Erreur 404
      </p>
      <div className="w-16 h-1 bg-secondary-500 rounded-full mx-auto mb-8" />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
        Cette page s&apos;est égarée
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
        L&apos;adresse que vous cherchez n&apos;existe pas ou a été déplacée.
        Revenez à l&apos;accueil ou explorez nos services.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <Link href="/" className="btn-primary">
          Retour à l&apos;accueil
        </Link>
        <Link href="/contact" className="btn-secondary">
          Nous contacter
        </Link>
      </div>

      <div className="border-t border-gray-200 pt-10 max-w-2xl mx-auto">
        <p className="text-sm text-gray-500 mb-4">Vous cherchiez peut-être&nbsp;:</p>
        <nav aria-label="Suggestions de pages">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 justify-center text-base">
            <li>
              <Link href="/paysagiste-angers" className="text-primary-600 hover:text-primary-800 hover:underline">
                Paysagiste
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">·</li>
            <li>
              <Link href="/entretien-jardin-angers" className="text-primary-600 hover:text-primary-800 hover:underline">
                Entretien jardin
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">·</li>
            <li>
              <Link href="/elagage-angers" className="text-primary-600 hover:text-primary-800 hover:underline">
                Élagage
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">·</li>
            <li>
              <Link href="/abattage-angers" className="text-primary-600 hover:text-primary-800 hover:underline">
                Abattage
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">·</li>
            <li>
              <Link href="/realisations" className="text-primary-600 hover:text-primary-800 hover:underline">
                Réalisations
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
