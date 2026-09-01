import { IconStarFilled, IconGoogle } from '@/lib/icons';
import { AvisPiste } from '@/components/ui/AvisPiste';
import { SITE, getGoogleReviewsUrl } from '@/lib/site-config';
import {
  reviews,
  REVIEWS_TOTAL_COUNT,
  REVIEWS_AVERAGE_RATING,
  type GoogleReview,
} from '@/lib/reviews';

/**
 * Bandeau d'avis Google, alimente par `@/lib/reviews`. Ne rend rien tant
 * qu'aucun avis n'est renseigne.
 *
 * Deux comportements selon le support, entierement pilotes par le CSS de
 * globals.css : defilement automatique avec pause au survol sur desktop,
 * carrousel scroll-snap parcouru au doigt sur mobile, ou l'absence de survol
 * rendrait un texte en mouvement illisible.
 *
 * Aucun JS : le composant reste rendu cote serveur, donc les avis restent dans
 * le HTML livre. Un carrousel en JS les aurait rendus invisibles aux crawlers.
 *
 * Pas de balisage schema.org Review/AggregateRating ici : Google considere comme
 * "self-serving" les avis qu'une entite publie sur son propre site, ce qui rend
 * la page ineligible aux etoiles dans les resultats de recherche. Les avis
 * restent indexes via la fiche Google Business Profile.
 * https://developers.google.com/search/docs/appearance/structured-data/review-snippet
 */

/** Duree d'un tour complet. Environ 8 s par avis, lisible sans etre lent. */
const DUREE_PAR_AVIS_S = 8;

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

/**
 * Une carte d'avis. Toute la carte pointe vers cet avis precis sur Google :
 * c'est la que le texte integral se lit, et c'est le trafic qu'on veut y
 * envoyer. C'est aussi ce qui rend inutile le scroll interne sur mobile.
 *
 * Volontairement sans attribut `title` : l'infobulle du navigateur se posait
 * par-dessus le texte de l'avis, cachant justement ce qu'on vient lire. Le lien
 * se passe d'explication, son contenu est l'avis lui-meme.
 *
 * `duplicata` marque la seconde copie de la liste, presente uniquement pour que
 * la boucle du defilement soit sans couture. Elle est masquee aux technologies
 * d'assistance et retiree de l'ordre de tabulation, sinon chaque avis serait
 * annonce et tabulable deux fois. Le CSS la retire carrement sur mobile.
 */
function ReviewCard({
  review,
  duplicata = false,
}: {
  review: GoogleReview;
  duplicata?: boolean;
}) {
  const paragraphs = review.text.split('\n\n');

  return (
    <li
      className={`shrink-0 w-[85vw] sm:w-80 ${duplicata ? 'avis-duplicata' : ''}`}
      aria-hidden={duplicata || undefined}
    >
      <a
        href={review.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={duplicata ? -1 : undefined}
        className="flex h-64 flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      >
        <div className="mb-2 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate font-semibold text-gray-900">{review.author}</p>
            <p className="text-sm text-gray-400">{formatReviewDate(review.date)}</p>
          </div>
          <IconGoogle className="mt-0.5 h-5 w-5 shrink-0" />
        </div>

        <StarRating rating={review.rating} className="h-4 w-4" />

        {/* Hauteur fixe pour aligner les cartes : les avis vont d'une ligne a
            trois paragraphes. Le surplus se lit au scroll ou sur Google.
            Le degrade de bas de zone vit sur ce conteneur, qui ne defile pas,
            et non sur le blockquote, ou il suivrait le texte. */}
        {/* min-h-0 est indispensable : sans lui, ce conteneur flex garde
            min-height:auto, s'etire a la hauteur du texte et le blockquote ne
            deborde jamais, donc ne defile jamais. */}
        <div className="avis-texte-zone relative mt-3 min-h-0 flex-1">
          <blockquote className="avis-texte h-full space-y-2 pr-2 text-sm leading-relaxed text-gray-600">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </blockquote>
        </div>
      </a>
    </li>
  );
}

export function Testimonials() {
  if (reviews.length === 0) return null;

  const ficheUrl = getGoogleReviewsUrl();

  // La fiche compte plus d'avis que ceux repris ici : les plus courts ne sont
  // pas affiches mais restent comptes dans le total renvoye par l'API.
  const totalCount = Math.max(REVIEWS_TOTAL_COUNT, reviews.length);
  const averageRating =
    REVIEWS_AVERAGE_RATING > 0
      ? REVIEWS_AVERAGE_RATING
      : reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    // Padding haut volontairement faible : la section Services qui precede a le
    // meme fond gris et son propre pb-24. Deux paddings pleins bout a bout
    // creaient un vide de plus de 200 px entre le bouton et ce titre.
    <section className="bg-gray-50 pt-4 pb-16 lg:pt-6 lg:pb-24">
      <div className="container-custom text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ce que disent nos clients</h2>

        <a
          href={ficheUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full border border-gray-200 bg-white px-6 py-3 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >
          <IconGoogle className="h-6 w-6" />
          <span className="text-2xl font-bold text-gray-900">{formatRating(averageRating)}</span>
          <StarRating rating={averageRating} />
          <span className="text-gray-500">
            {totalCount} avis Google
          </span>
        </a>

        {/* Volontairement discret, et distinct du badge ci-dessus : on clique
            sur une note pour verifier des avis, pas pour en ecrire un. Rediriger
            le badge vers un formulaire romprait cette attente sur la seule
            section dont l'objet est d'installer la confiance.
            L'amorce "Déjà client ?" ecarte d'emblee ceux que ca ne concerne pas. */}
        {SITE.google.writeReviewUrl && (
          <p className="mt-4">
            <a
              href={SITE.google.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 underline-offset-4 hover:text-primary-700 hover:underline"
            >
              <IconGoogle className="h-3.5 w-3.5" />
              Déjà client ? Donnez votre avis
            </a>
          </p>
        )}
      </div>

      {/* Hors container-custom : le bandeau doit filer d'un bord a l'autre. */}
      <AvisPiste dureeS={reviews.length * DUREE_PAR_AVIS_S}>
        {/* Aucun padding sur la piste : il entrerait dans le calcul du -50% du
            keyframe et decalerait la boucle a chaque tour. */}
        <ul className="avis-piste">
          {reviews.map((review, i) => (
            <ReviewCard key={`a-${i}`} review={review} />
          ))}
          {reviews.map((review, i) => (
            <ReviewCard key={`b-${i}`} review={review} duplicata />
          ))}
        </ul>
      </AvisPiste>

      {/* Le devis reste seul en bas de section. Un second bouton lui disputait
          l'attention pour un gain douteux : les avis viennent des liens envoyes
          apres chantier, pas de la page d'accueil. */}
      <div className="container-custom mt-10 text-center">
        <a href="/contact/" className="btn-primary">
          Demander un devis gratuit
        </a>
      </div>
    </section>
  );
}
