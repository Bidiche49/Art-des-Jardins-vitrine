import { IconStarFilled, IconGoogle } from '@/lib/icons';
import { SITE } from '@/lib/site-config';
import {
  reviews,
  REVIEWS_TOTAL_COUNT,
  REVIEWS_AVERAGE_RATING,
  type GoogleReview,
} from '@/lib/reviews';

/**
 * Section "avis clients", alimentee par les avis Google recopies dans
 * `@/lib/reviews`. Ne rend rien tant qu'aucun avis n'est renseigne.
 *
 * Pas de balisage schema.org Review/AggregateRating ici : Google considere
 * comme "self-serving" les avis qu'une entite publie sur son propre site, ce
 * qui rend la page ineligible aux etoiles dans les resultats de recherche.
 * Les avis restent indexes via la fiche Google Business Profile.
 * https://developers.google.com/search/docs/appearance/structured-data/review-snippet
 */

function StarRating({ rating, className = 'w-5 h-5' }: { rating: number; className?: string }) {
  const rounded = Math.round(rating);

  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rounded} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <IconStarFilled
          key={star}
          aria-hidden="true"
          className={`${className} ${star <= rounded ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

function formatRating(rating: number): string {
  return rating.toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

function formatReviewDate(date: string): string {
  return new Date(date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const paragraphs = review.text.split('\n\n');

  return (
    <li className="break-inside-avoid mb-6 bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <p className="font-semibold text-gray-900">{review.author}</p>
          <p className="text-sm text-gray-400">{formatReviewDate(review.date)}</p>
        </div>
        <IconGoogle className="w-5 h-5 shrink-0" />
      </div>
      <StarRating rating={review.rating} className="w-4 h-4" />
      <blockquote className="text-gray-600 mt-4 space-y-3">
        {paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </blockquote>
    </li>
  );
}

export function Testimonials() {
  if (reviews.length === 0) return null;

  // La fiche compte plus d'avis que ceux repris ici : les plus courts ne sont
  // pas affiches mais restent comptes dans le total renvoye par l'API.
  const totalCount = Math.max(REVIEWS_TOTAL_COUNT, reviews.length);
  const averageRating =
    REVIEWS_AVERAGE_RATING > 0
      ? REVIEWS_AVERAGE_RATING
      : reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce que disent nos clients</h2>

          <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 bg-white rounded-full border border-gray-200 shadow-sm px-6 py-3">
            <IconGoogle className="w-6 h-6" />
            <span className="text-2xl font-bold text-gray-900">{formatRating(averageRating)}</span>
            <StarRating rating={averageRating} />
            <span className="text-gray-500">{totalCount} avis Google</span>
          </div>

          {SITE.google.profileUrl && (
            <p className="mt-4">
              <a
                href={SITE.google.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-medium hover:underline"
              >
                Voir tous les avis sur Google
              </a>
            </p>
          )}
        </div>

        {/* Colonnes CSS plutot qu'une grille : les avis vont de deux lignes a
            trois paragraphes, une grille alignerait toutes les cartes d'une
            rangee sur la plus haute et creerait de grands vides. */}
        <ul className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={`${review.author}-${i}`} review={review} />
          ))}
        </ul>

        <div className="text-center mt-6">
          <a href="/contact/" className="btn-primary">
            Demander un devis gratuit
          </a>
          {SITE.google.writeReviewUrl && (
            <p className="mt-4 text-sm text-gray-500">
              Vous avez fait appel à nous ?{' '}
              <a
                href={SITE.google.writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                Laissez un avis
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
