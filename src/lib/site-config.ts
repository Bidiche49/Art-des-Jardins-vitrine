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
    profileUrl: 'https://share.google/3sooKN7FXFATAr9Ux',
    /**
     * Ouvre l'onglet avis de la fiche, ou le visiteur doit encore cliquer sur
     * "Rediger un avis". C'est le fragment `#lrd` et son `,3,` qui font la
     * difference : un lien raccourci ne peut pas en porter, d'ou l'URL longue.
     *
     * Volontairement reduite a `kgmid`, `q` et le fragment. L'URL copiee depuis
     * Google embarque en plus un jeton `sxsrf` horodate, les dimensions d'ecran
     * de la personne qui a copie le lien, et des parametres de tracking : rien
     * qui serve au visiteur, et un jeton qui finit par expirer.
     *
     * A REMPLACER par le lien officiel, qui ouvre le formulaire directement
     * sans etape intermediaire. Il ne s'obtient que depuis le tableau de bord
     * du proprietaire : Fiche d'etablissement > Avis > Obtenir plus d'avis >
     * Copier. Il se presente sous la forme https://g.page/r/<code>/review
     * https://support.google.com/business/answer/16816815?hl=fr
     */
    writeReviewUrl:
      'https://www.google.com/search?kgmid=/g/11yx_kt1x4&q=Art+des+jardins#lrd=0x2c35ff5aa4d974cf:0x853b427e055f7407,3,,,,',
  },
};
