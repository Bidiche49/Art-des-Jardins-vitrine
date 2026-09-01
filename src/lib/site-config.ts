/** Années d'expérience cumulée des 2 associés. Base : 16 ans en 2026, +2/an. */
export function getCumulatedExperience(): number {
  return 16 + (new Date().getFullYear() - 2026) * 2;
}

/**
 * Destination du badge de note de la page d'accueil.
 *
 * Le repli par recherche Maps a ete retire : il deposait le visiteur sur une
 * page de resultats, entre les annuaires et les concurrents, alors qu'il venait
 * verifier une note. `SITE.google.profileUrl` porte desormais un identifiant
 * canonique de fiche, qui n'a aucune raison de devenir invalide.
 */
export function getGoogleReviewsUrl(): string {
  return SITE.google.profileUrl;
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
   * Fiche Google Business Profile. Chaine vide = le lien n'est pas affiche.
   *
   * Identifiants de la fiche, en cas de besoin :
   *   kgmid  /g/11yx_kt1x4
   *   lrd    0x2c35ff5aa4d974cf:0x853b427e055f7407
   *   cid    9600340139693798407
   *
   * Si les liens `share.google` cessent un jour de fonctionner, le repli stable
   * est https://maps.google.com/?cid=9600340139693798407
   */
  google: {
    /**
     * Ouvre la fiche sur Google Maps, directement.
     *
     * Le CID plutot qu'un lien `share.google` : ces derniers resolvent vers une
     * page de resultats de recherche, ou la fiche n'apparait qu'en encart lateral
     * au milieu des concurrents et des annuaires. Le CID est par ailleurs un
     * identifiant canonique et stable, sans raccourcisseur ni parametres de
     * suivi entre le visiteur et la fiche.
     */
    profileUrl: 'https://maps.google.com/?cid=9600340139693798407',
    /**
     * Ouvre directement le formulaire d'avis, sans etape intermediaire.
     *
     * Lien officiel delivre par le tableau de bord du proprietaire :
     * Fiche d'etablissement > Avis > Obtenir plus d'avis > Copier.
     * https://support.google.com/business/answer/16816815?hl=fr
     *
     * C'est aussi ce lien qu'il faut utiliser hors du site, en SMS ou en QR code
     * apres un chantier : c'est de la que viennent les avis, pas de la page
     * d'accueil.
     */
    writeReviewUrl: 'https://g.page/r/CQd0XwV-QjuFEBE/review',
  },
};
