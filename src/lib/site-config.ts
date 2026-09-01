/** Années d'expérience cumulée des 2 associés. Base : 16 ans en 2026, +2/an. */
export function getCumulatedExperience(): number {
  return 16 + (new Date().getFullYear() - 2026) * 2;
}

/**
 * Destination des liens « avis » de la page d'accueil.
 *
 * Renvoie `SITE.google.profileUrl` dès qu'elle est renseignée, ce qui est la
 * seule façon d'atterrir directement sur la liste d'avis de la fiche. À défaut,
 * construit une recherche Maps sur le nom et la ville : le visiteur arrive sur
 * la fiche mais doit ouvrir les avis lui-même. Repli volontairement temporaire.
 */
export function getGoogleReviewsUrl(): string {
  if (SITE.google.profileUrl) return SITE.google.profileUrl;

  const query = encodeURIComponent(`${SITE.name} ${SITE.address.city}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export const SITE = {
  name: 'Art des Jardins',
  legalName: 'SARL Art des Jardins',
  url: 'https://artdesjardins-paysagiste.fr',
  phone1: {
    display: '07 81 16 07 37',
    link: 'tel:+33781160737',
    international: '+33781160737',
  },
  phone2: {
    display: '06 59 68 49 16',
    link: 'tel:+33659684916',
    international: '+33659684916',
  },
  whatsapp: '33781160737',
  email: 'artdesjardins49@gmail.com',
  address: {
    street: '9 bis rue Rouget de l\'Isle',
    city: 'Les Ponts-de-Cé',
    postalCode: '49130',
    region: 'Maine-et-Loire',
    country: 'FR',
    full: '9 bis rue Rouget de l\'Isle, 49130 Les Ponts-de-Cé',
  },
  geo: {
    latitude: 47.4264,
    longitude: -0.5256,
  },
  siren: '999 636 806',
  siret: '999 636 806 00013',
  tva: 'FR36999636806',
  hours: 'Lun-Ven 8h-18h',
  instagram: {
    url: 'https://www.instagram.com/artdesjardins_49',
    handle: '@artdesjardins_49',
  },
  /**
   * Fiche Google Business Profile.
   * `profileUrl` : lien maps.app.goo.gl ou google.com/maps/place de la fiche.
   * `writeReviewUrl` : lien "Rediger un avis" (Google Business Profile > Demander des avis).
   * Chaine vide = le lien correspondant n'est pas affiche.
   */
  google: {
    profileUrl: '',
    writeReviewUrl: '',
  },
};
