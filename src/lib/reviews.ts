import googleRating from './google-rating.json';

/**
 * Avis Google affiches sur le site.
 *
 * Repartition volontaire entre automatique et manuel :
 *
 * - La note et le nombre total d'avis viennent de `google-rating.json`, regenere
 *   a chaque build par `scripts/fetch-google-rating.mjs`. Ce sont les seules
 *   donnees qui se periment : elles restent justes sans intervention.
 * - Les textes des avis sont saisis a la main ci-dessous. L'API Places plafonne
 *   a 5 avis renvoyes et choisit lesquels, alors que la fiche en compte plus.
 *   Un avis ne se perime pas : le recopier une fois suffit.
 *
 * Conventions de retranscription :
 * - Le texte est celui de l'avis. Seules les coquilles evidentes sont corrigees
 *   (accent ou apostrophe manquants) ; jamais le fond, jamais la formulation.
 * - Le nom de famille des particuliers est abrege : ces avis sont publics sur
 *   Google, les republier en entier sur un site commercial expose des donnees
 *   personnelles sans motif. Les personnes morales gardent leur raison sociale.
 * - Les dates sont approximatives. Google n'affiche que du relatif ("2 months
 *   ago") et seul le mois est rendu sur le site, donc l'ecart est invisible.
 * - Tous les avis de la fiche ne sont pas repris : ceux reduits a deux ou trois
 *   mots n'apportent rien en vignette. Ils restent comptes dans le total, qui
 *   vient de l'API.
 */

export interface GoogleReview {
  /** Nom tel qu'affiche sur la fiche Google, nom de famille abrege. */
  author: string;
  /**
   * Lien de partage de cet avis precis, obtenu via le menu "..." de l'avis sur
   * Google. Toute la carte pointe dessus : c'est la que le texte integral se lit.
   *
   * Ces `share.google/...` dependent du raccourcisseur de Google. S'il disparait,
   * les liens meurent en silence. A verifier si un doute apparait.
   */
  url: string;
  /** Note de l'avis, 1 a 5. */
  rating: number;
  /** Date de publication approximative, format ISO YYYY-MM-DD. */
  date: string;
  /** Texte de l'avis. Les sauts de ligne separent les paragraphes. */
  text: string;
}

/** Nombre total d'avis sur la fiche Google. Regenere au build. */
export const REVIEWS_TOTAL_COUNT: number = googleRating.userRatingCount;

/** Note moyenne de la fiche Google. Regeneree au build. */
export const REVIEWS_AVERAGE_RATING: number = googleRating.rating;

/**
 * Avis dont le texte est repris sur le site. Vide = la section ne s'affiche pas.
 * Ordre d'affichage : les plus parlants en premier.
 */
export const reviews: GoogleReview[] = [
  {
    author: 'Thibaud R.',
    url: 'https://share.google/jANY0tZqWWF4AMqhD',
    rating: 5,
    date: '2026-07-15',
    text: `J’ai fait appel à Arts des Jardins pour l’arrachage d’une vieille haie et la plantation d’une nouvelle, et je suis absolument ravi du résultat. Dès le premier rendez-vous, l’équipe a fait preuve d’un grand professionnalisme, avec des conseils pertinents et une excellente écoute de mes attentes.

Les travaux ont été réalisés avec soin, dans les délais annoncés et avec un souci du détail remarquable. L’ancienne haie a été retirée proprement et la nouvelle plantation est parfaitement réalisée. Le rendu est superbe et a complètement transformé mon jardin.

C’est un vrai plaisir de faire appel à une entreprise aussi sérieuse, compétente et passionnée par son métier. Je recommande Arts des Jardins sans la moindre hésitation et je n’hésiterai pas à les recontacter pour de futurs projets. Merci à toute l’équipe pour cet excellent travail !`,
  },
  {
    author: 'Net’Anjou Services',
    url: 'https://share.google/CZ75ChlMpsLyE5z6L',
    rating: 5,
    date: '2026-08-04',
    text: 'Je recommande cette entreprise de paysagistes les yeux fermés ! Une équipe sérieuse, professionnelle et à l’écoute de mes besoins. Le travail a été réalisé avec beaucoup de soin, dans les délais annoncés, et le résultat est au-delà de mes attentes.',
  },
  {
    author: 'Stéphanie D.',
    url: 'https://share.google/08cEHhxSrTeIAJl8a',
    rating: 5,
    date: '2026-07-15',
    text: 'Un grand merci à Art des Jardins pour la qualité de leur intervention ! Jocelyn et Louis sont venus effectuer l’entretien du jardin chez ma maman et ont réalisé un travail impeccable. Ils ont été ponctuels, professionnels, efficaces et très agréables. Le jardin est parfaitement entretenu et ma maman est ravie du résultat. Je recommande vivement leurs services !',
  },
  {
    author: 'Marie-Claire V.',
    url: 'https://share.google/AuZqvbvo2dA41cfJ6',
    rating: 5,
    date: '2026-06-15',
    text: 'Équipe très professionnelle, efficace, à l’écoute de nos besoins. J’apprécie tout particulièrement le travail bien fait, avec Art des Jardins, je suis en totale confiance, bonnes idées et réalisations particulièrement soignées ! Je vais leur confier la 3ème phase de mon projet sans hésitation ! Je recommande vivement.',
  },
  {
    // Pseudonyme sur Google : rien a abreger.
    author: 'Raph_lagraf',
    url: 'https://share.google/uUPB56hXFNY80kRgY',
    rating: 5,
    date: '2026-05-15',
    text: 'Un début très prometteur pour ces jeunes paysagistes qui disposent de grandes compétences professionnelles, qui travaillent de manière rapide et sont de très bons conseils. Nous sommes ravis des travaux de rénovation de notre jardin et de la nouvelle haie plantée. Par ailleurs le coût des prestations est très compétitif. Un grand merci à vous !',
  },
  {
    author: 'Tom H.',
    url: 'https://share.google/TuKMoiKRHgpUVORGP',
    rating: 5,
    date: '2026-07-15',
    text: 'Superbe entreprise de paysagiste, Jocelyn et Louis sont intervenus pour faire l’ensemencement de notre gazon. Dynamiques et très professionnelles, ils connaissent leur travail et ça se voit. Je recommande à 100%.',
  },
  {
    author: 'Marie-Lou T.',
    url: 'https://share.google/F61Vquwyx9hPbswgV',
    rating: 5,
    date: '2026-05-15',
    text: 'Jocelyn et Louis sont très professionnels et efficaces. Nous avons toujours eu un bon contact avec eux, et les travaux ont été effectués rapidement et proprement (chantier propre et résultat très satisfaisants). Nous recommandons vivement !',
  },
  {
    author: 'Chantal R.',
    url: 'https://share.google/EyoVWH2IXTJRQ7Zxc',
    rating: 5,
    date: '2026-08-01',
    text: 'Louis et Jocelyn ont implanté une clôture dans notre jardin. Ils nous ont donné entière satisfaction en ce qui concerne le délai et le travail.',
  },
  {
    author: 'François P.',
    url: 'https://share.google/qJUrS1sU7aang78mU',
    rating: 5,
    date: '2026-08-04',
    text: 'Travail rapide et efficace. Paysagiste sympathique.',
  },
];
