export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  cardDescription: string;
  menuDescription: string;
  isTaxCreditEligible: boolean;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  priceRange?: {
    lowPrice: number;
    highPrice: number;
    unit: string;
    label: string;
  };
  process: {
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const services: ServiceData[] = [
  {
    slug: 'paysagisme',
    title: 'Aménagement Paysager et Création de Jardin',
    shortTitle: 'Aménagement paysager',
    icon: '🌳',
    cardDescription: 'Conception et aménagement de jardins sur mesure.',
    menuDescription: 'Conception et création de jardins sur mesure',
    isTaxCreditEligible: false,
    metaTitle: 'Aménagement Paysager et Création de Jardin | Art des Jardins',
    metaDescription:
      'Conception et réalisation de jardins sur mesure : terrasses, massifs, engazonnement, arrosage automatique. Devis gratuit.',
    heroTitle: 'Aménagement Paysager et Création de Jardin',
    heroSubtitle:
      'Conception d\'espaces extérieurs sur mesure par des paysagistes professionnels.',
    description: `
      L'aménagement paysager couvre un large spectre d'interventions : création de jardins complets, restructuration d'espaces existants, plantation de massifs, pose de terrasses et installation de systèmes d'arrosage. Chaque terrain présente ses propres contraintes — exposition, nature du sol, dénivelé, végétation en place — et chaque projet part de leur analyse.

      L'approche combine conception paysagère et expertise technique. Après une étude du terrain et un échange sur les usages souhaités, un plan d'aménagement détaillé est élaboré avec le choix des végétaux, des matériaux et un chiffrage précis. Les plantations sont sélectionnées en fonction du climat ligérien et des conditions locales du sol pour une reprise durable.

      Jardins contemporains aux lignes épurées, espaces champêtres et naturels, compositions méditerranéennes : le style s'adapte au lieu et aux envies. Les travaux incluent aussi bien le terrassement et la maçonnerie paysagère que les finitions végétales et l'éclairage extérieur.
    `,
    features: [
      'Conseils et propositions d\'aménagements personnalisés',
      'Création de terrasses (tout matériaux)',
      'Allée et terrassement divers',
      'Plantation de massifs, arbres et arbustes',
      'Engazonnement et création de pelouses',
      'Installation de systèmes d\'arrosage automatique',
      'Pergola sur mesure',
      'Maçonneries extérieures',

      'Pose de clôtures et bordures',
      'Éclairage de jardin',
    ],
    benefits: [
      'Conception sur plan avec choix des végétaux, matériaux et chiffrage',
      'Plantations sélectionnées pour le climat ligérien et le sol en place',
      'Entretien réduit par une implantation raisonnée des massifs',
      'Terrassement, maçonnerie paysagère et finitions végétales intégrés',
      'Styles variés : contemporain, champêtre, méditerranéen',
    ],
    process: [
      {
        title: 'Visite et analyse',
        description:
          'Déplacement sur site, étude du sol, de l\'exposition et du dénivelé.',
      },
      {
        title: 'Conception du projet',
        description:
          'Plan détaillé avec choix des végétaux, matériaux et chiffrage précis.',
      },
      {
        title: 'Validation et planification',
        description:
          'Ajustements selon les retours, planification des travaux à la période adaptée.',
      },
      {
        title: 'Réalisation',
        description:
          'Travaux selon le planning défini : terrassement, plantations, finitions.',
      },
      {
        title: 'Suivi et conseils',
        description:
          'Compte-rendu de fin de chantier et recommandations d\'entretien.',
      },
    ],
    faq: [
      {
        question: 'Combien coûte un aménagement paysager ?',
        answer:
          'Le coût dépend de la surface, des matériaux choisis et du volume de plantations. Un devis détaillé est établi après visite du terrain.',
      },
      {
        question: 'Quelle est la meilleure période pour aménager un jardin ?',
        answer:
          'L\'automne et l\'hiver sont les périodes les plus favorables à la plantation. Les travaux de terrassement et de maçonnerie paysagère se réalisent toute l\'année.',
      },
      {
        question: 'Proposez-vous un service d\'entretien après l\'aménagement ?',
        answer:
          'Oui — contrats annuels avec passages programmés (tonte, taille, désherbage) ou interventions ponctuelles à la demande.',
      },
    ],
  },
  {
    slug: 'entretien-jardin',
    title: 'Entretien de Jardin',
    shortTitle: 'Entretien',
    icon: '✂️',
    cardDescription: 'Tonte, taille, désherbage et entretien régulier.',
    menuDescription: 'Tonte, taille, désherbage, entretien régulier',
    isTaxCreditEligible: true,
    metaTitle: 'Entretien de Jardin - Tonte, Taille, Désherbage | Art des Jardins',
    metaDescription:
      'Tonte de pelouse, taille de haies, désherbage, nettoyage saisonnier. Contrats annuels ou interventions ponctuelles. Éligible au crédit d\'impôt. Devis gratuit.',
    heroTitle: 'Entretien de Jardin',
    heroSubtitle:
      'Tonte, taille, désherbage et soins saisonniers pour un jardin entretenu toute l\'année.',
    description: `
      Un jardin demande un entretien régulier, adapté aux saisons et à la nature des plantations en place. Le service d'entretien couvre l'ensemble des travaux courants : tonte de pelouse, taille de haies et d'arbustes, désherbage, bêchage des massifs, ramassage des feuilles mortes et traitement phytosanitaire raisonné.

      Les interventions suivent un calendrier calé sur le cycle végétatif : tontes rapprochées au printemps et en été, tailles de formation en fin d'hiver, protections hivernales à l'automne. L'équipement professionnel — tondeuses autoportées, taille-haies thermiques, souffleurs — permet un travail rapide et soigné, même sur de grandes surfaces.

      Les formules sont modulables : contrat annuel avec passages programmés (hebdomadaires, bi-mensuels ou mensuels selon la saison) ou interventions ponctuelles à la demande. L'entretien de jardin est éligible au crédit d'impôt de 50 % dans le cadre des services à la personne.
    `,
    features: [
      'Tonte de pelouse et réfection de gazon',
      'Taille de haies et arbustes',
      'Désherbage manuel et écologique',
      'Ramassage des feuilles mortes',
      'Bêchage et préparation des massifs',
      'Traitement phytosanitaire raisonné',
      'Évacuation des déchets verts',
      'Hivernage et protection des plantes',
    ],
    benefits: [
      'Formules modulables : contrat annuel ou ponctuel',
      'Calendrier calé sur le cycle végétatif (tontes, tailles, protections)',
      'Équipement professionnel : tondeuses autoportées, taille-haies thermiques',
      'Évacuation des déchets verts incluse',
      'Crédit d\'impôt de 50 % sur les prestations éligibles',
    ],
    process: [
      {
        title: 'Évaluation des besoins',
        description:
          'Visite du jardin, relevé des surfaces et des plantations, évaluation de la fréquence nécessaire.',
      },
      {
        title: 'Proposition personnalisée',
        description:
          'Devis détaillé avec planning d\'intervention calé sur les saisons.',
      },
      {
        title: 'Interventions régulières',
        description:
          'Passages selon le calendrier établi, avec ou sans présence du propriétaire.',
      },
      {
        title: 'Suivi qualité',
        description:
          'Ajustement des prestations selon l\'évolution du jardin et les retours.',
      },
    ],
    faq: [
      {
        question: 'À quelle fréquence devez-vous intervenir ?',
        answer:
          'En général, toutes les 2 semaines au printemps/été et une fois par mois en automne/hiver. La fréquence s\'ajuste à la surface et au type de plantations.',
      },
      {
        question: 'Que faites-vous des déchets verts ?',
        answer:
          'Les déchets verts sont évacués vers un centre de compostage agréé. L\'évacuation est incluse dans le tarif.',
      },
      {
        question: 'Intervenez-vous pendant les vacances ?',
        answer:
          'Oui, les interventions se font avec ou sans présence du propriétaire, selon le calendrier convenu.',
      },
      {
        question: 'Quel est le tarif d\'un entretien de jardin ?',
        answer:
          'Le tarif dépend de la surface, de la fréquence et des prestations retenues. Avec le crédit d\'impôt de 50 %, le coût réel est divisé par deux. Un devis est établi après visite.',
      },
    ],
  },
  {
    slug: 'elagage',
    title: 'Élagage et Taille d\'Arbres',
    shortTitle: 'Élagage',
    icon: '🪓',
    cardDescription: 'Taille et élagage de tous types d\'arbres.',
    menuDescription: 'Taille et soins des arbres par élagueurs certifiés',
    isTaxCreditEligible: false,
    metaTitle: 'Élagage et Taille d\'Arbres par Élagueurs Certifiés | Art des Jardins',
    metaDescription:
      'Taille d\'arbres, éclaircissage, taille de sécurisation et diagnostic phytosanitaire. Élagueurs certifiés, intervention sur toutes essences. Devis gratuit.',
    heroTitle: 'Élagage et Taille d\'Arbres',
    heroSubtitle:
      'Taille, éclaircissage et sécurisation de vos arbres par des élagueurs certifiés.',
    description: `
      L'élagage regroupe l'ensemble des interventions de taille sur les arbres de moyenne et grande hauteur : taille d'entretien, éclaircissage de couronne, réduction de volume, taille de sécurisation et taille de formation sur les jeunes sujets. Chaque type de taille répond à un objectif précis — santé de l'arbre, sécurité, luminosité ou esthétique.

      Les techniques employées respectent la physiologie de l'arbre pour limiter le stress et favoriser une cicatrisation correcte. Un diagnostic visuel préalable permet d'évaluer l'état sanitaire, la structure et les risques éventuels avant de définir le plan de taille adapté.

      Les interventions concernent aussi bien les jardins de particuliers que les espaces verts de professionnels. Le matériel utilisé — cordes, harnais de grimpe, nacelle, broyeur — est adapté à chaque configuration de chantier.
    `,
    features: [
      'Taille de formation pour jeunes arbres',
      'Taille d\'entretien et éclaircissage',
      'Taille de réduction de volume',
      'Taille de sécurisation (branches dangereuses)',
      'Diagnostic phytosanitaire',
    ],
    benefits: [
      'Taille raisonnée qui respecte la physiologie de l\'arbre',
      'Diagnostic visuel préalable : état sanitaire, structure, risques',
      'Techniques adaptées à chaque essence et configuration',
      'Matériel de grimpe, nacelle et broyeur selon le chantier',
      'Conformité aux distances et hauteurs réglementaires',
    ],
    process: [
      {
        title: 'Diagnostic sur place',
        description:
          'Examen de l\'arbre : état sanitaire, structure de la couronne, risques identifiés.',
      },
      {
        title: 'Devis détaillé',
        description:
          'Devis précisant le type de taille retenu, les moyens techniques et le planning.',
      },
      {
        title: 'Intervention',
        description:
          'Taille réalisée avec le matériel adapté à la configuration : cordes, nacelle ou broyeur.',
      },
      {
        title: 'Nettoyage complet',
        description:
          'Évacuation des branches et déchets, site laissé propre.',
      },
    ],
    faq: [
      {
        question: 'Quand faut-il élaguer ses arbres ?',
        answer:
          'La période idéale varie selon les espèces. L\'hiver hors gel convient à la plupart des arbres. Certains fruitiers (cerisiers, pruniers) se taillent après la floraison pour limiter les maladies.',
      },
      {
        question: 'Faut-il une autorisation pour élaguer ?',
        answer:
          'En zone protégée ou pour les arbres classés, une autorisation préalable de la mairie peut être exigée. Le diagnostic sur place permet de clarifier les démarches nécessaires.',
      },
      {
        question: 'Quelle est la différence entre élagage et taille ?',
        answer:
          'L\'élagage concerne les grosses branches sur les arbres de moyenne et grande hauteur. La taille s\'applique aux arbustes et haies. Les techniques, le matériel et les périodes d\'intervention diffèrent.',
      },
      {
        question: 'Combien coûte un élagage d\'arbre ?',
        answer:
          'Le prix dépend de l\'essence, de la hauteur, de l\'accessibilité et du type de taille. Un devis est établi après visite sur place.',
      },
    ],
  },
  {
    slug: 'abattage',
    title: 'Abattage d\'Arbres',
    shortTitle: 'Abattage',
    icon: '🌲',
    cardDescription: 'Abattage sécurisé et dessouchage d\'arbres.',
    menuDescription: 'Abattage sécurisé, dessouchage, évacuation',
    isTaxCreditEligible: false,
    metaTitle: 'Abattage d\'Arbres Sécurisé et Dessouchage | Art des Jardins',
    metaDescription:
      'Abattage d\'arbres, démontage technique, dessouchage à la rogneuse et évacuation. Intervention rapide, y compris en urgence après tempête. Devis gratuit.',
    heroTitle: 'Abattage d\'Arbres Sécurisé',
    heroSubtitle:
      'Abattage, démontage technique et dessouchage d\'arbres dangereux, malades ou gênants.',
    description: `
      L'abattage d'un arbre est une opération technique qui nécessite une évaluation préalable des risques : proximité de bâtiments, lignes électriques, accès au chantier, espace de chute disponible. Selon la configuration, l'intervention se fait par abattage direct en terrain dégagé ou par démontage pièce par pièce lorsque l'environnement est contraint.

      Les situations qui appellent un abattage sont variées : arbre mort ou dépérissant, sujet devenu dangereux (inclinaison, racines déchaussées), arbre mal placé gênant une construction ou une clôture, ou dégâts après tempête nécessitant une intervention rapide.

      Le dessouchage à la rogneuse et l'évacuation complète des débris sont proposés en complément de l'abattage. Le terrain est alors prêt pour un nouvel aménagement ou une replantation.
    `,
    features: [
      'Abattage direct en terrain dégagé',
      'Démontage technique en zone contrainte',
      'Abattage d\'arbres près des bâtiments',
      'Intervention sur arbres dangereux (tempête)',
      'Dessouchage à la rogneuse',
      'Évacuation et valorisation du bois',
      'Fendage du bois',
      'Débroussaillage associé',
      'Conseil pour replantation',
    ],
    benefits: [
      'Intervention possible en zone contrainte — bâtiments, lignes, routes',
      'Démontage pièce par pièce quand l\'espace de chute est limité',
      'Dessouchage à la rogneuse et évacuation complète des débris',
      'Intervention rapide sur arbres dangereux après tempête',
      'Terrain prêt pour replantation ou nouvel aménagement',
    ],
    process: [
      {
        title: 'Évaluation du chantier',
        description:
          'Analyse de l\'arbre, de son environnement (bâtiments, lignes, accès) et choix de la méthode.',
      },
      {
        title: 'Préparation du site',
        description:
          'Mise en place de la zone de sécurité, protection des éléments proches si nécessaire.',
      },
      {
        title: 'Abattage ou démontage',
        description:
          'Réalisation de l\'opération avec les techniques et équipements adaptés.',
      },
      {
        title: 'Dessouchage optionnel',
        description:
          'Élimination de la souche à la rogneuse pour libérer totalement l\'espace.',
      },
      {
        title: 'Nettoyage final',
        description:
          'Évacuation complète des débris, remise en état du terrain.',
      },
    ],
    faq: [
      {
        question: 'Faut-il une autorisation pour abattre un arbre ?',
        answer:
          'En zone protégée ou pour les arbres classés, une autorisation municipale est obligatoire. Le diagnostic sur site permet de vérifier les contraintes réglementaires applicables.',
      },
      {
        question: 'Que faites-vous du bois ?',
        answer:
          'Plusieurs options : évacuation complète, débit en bûches pour conservation, ou valorisation. Le choix est défini au moment du devis.',
      },
      {
        question: 'Intervenez-vous en urgence après tempête ?',
        answer:
          'Oui. En cas d\'arbre tombé ou dangereux, une intervention de sécurisation est organisée dans les meilleurs délais.',
      },
      {
        question: 'Quel est le prix d\'un abattage d\'arbre ?',
        answer:
          'Le coût dépend de la hauteur de l\'arbre, de l\'environnement (zone contrainte ou dégagée) et des options retenues (dessouchage, évacuation). Un devis est établi après visite.',
      },
    ],
  },
  {
    slug: 'terrasse',
    title: 'Terrasses et Aménagements Extérieurs',
    shortTitle: 'Terrasses',
    icon: '🏡',
    cardDescription: 'Création de terrasses bois, composite et pierre.',
    menuDescription: 'Bois, composite, pierre — espaces de vie extérieurs',
    isTaxCreditEligible: false,
    metaTitle: 'Création de Terrasses et Aménagements Extérieurs | Art des Jardins',
    metaDescription:
      'Terrasses bois, composite, pierre naturelle et dalles sur plots. Conception sur mesure, pergolas et aménagements complémentaires. Devis gratuit.',
    heroTitle: 'Création de Terrasses et Aménagements Extérieurs',
    heroSubtitle:
      'Terrasses sur mesure en bois, composite ou pierre, avec pergolas et aménagements complémentaires.',
    description: `
      La création d'une terrasse implique plusieurs étapes techniques : étude du terrain et de l'exposition, choix du matériau adapté à l'usage et aux contraintes (portance, drainage, gel), préparation de l'assise et pose du revêtement. Chaque matériau a ses caractéristiques propres en termes de durabilité, d'entretien et de rendu.

      Bois naturel (pin traité, chêne, essences exotiques), lames composite, pierre naturelle, dalles sur plots ou béton décoratif : le choix se fait en fonction de l'esthétique souhaitée, de l'exposition au soleil et aux intempéries, et du niveau d'entretien acceptable. La pose sur plots permet notamment de compenser les irrégularités du terrain sans travaux de maçonnerie lourds.

      Les aménagements complémentaires — pergolas, murets, escaliers extérieurs, éclairage d'ambiance — sont conçus en cohérence avec la terrasse pour former un ensemble fonctionnel et intégré au jardin.
    `,
    features: [
      'Terrasse en bois naturel (pin, chêne, exotique)',
      'Terrasse en composite (sans entretien)',
      'Terrasse en pierre naturelle ou reconstituée',
      'Dalles sur plots (pose sèche)',
      'Béton décoratif et béton désactivé',
      'Pergolas et tonnelles sur mesure',
      'Murets et bordures décoratives',
      'Escaliers et rampes d\'accès',
      'Éclairage extérieur intégré',
      'Drainage et gestion des eaux de pluie',
    ],
    benefits: [
      'Choix du matériau selon l\'usage, l\'exposition et le niveau d\'entretien',
      'Pose sur plots possible pour compenser les irrégularités sans maçonnerie lourde',
      'Bois naturel, composite, pierre naturelle ou béton décoratif',
      'Aménagements complémentaires intégrés : pergola, muret, éclairage',
      'Drainage et gestion des eaux de pluie intégrés à la conception',
    ],
    process: [
      {
        title: 'Visite et prise de mesures',
        description:
          'Relevé du terrain, étude de l\'exposition et des contraintes techniques (portance, drainage).',
      },
      {
        title: 'Proposition et choix des matériaux',
        description:
          'Plan détaillé avec échantillons de matériaux et devis chiffré.',
      },
      {
        title: 'Préparation du terrain',
        description:
          'Terrassement, nivellement et mise en place de la structure porteuse.',
      },
      {
        title: 'Pose et finitions',
        description:
          'Installation du revêtement, des bordures et des aménagements complémentaires.',
      },
      {
        title: 'Réception des travaux',
        description:
          'Vérification finale et remise des consignes d\'entretien adaptées au matériau posé.',
      },
    ],
    faq: [
      {
        question: 'Quel matériau choisir pour ma terrasse ?',
        answer:
          'Le composite demande peu d\'entretien, le bois naturel offre un rendu chaleureux, la pierre est le matériau le plus durable. Le choix dépend du budget, de l\'exposition et du niveau d\'entretien accepté.',
      },
      {
        question: 'Faut-il un permis de construire pour une terrasse ?',
        answer:
          'Une terrasse de plain-pied ne nécessite généralement pas de permis. Au-delà de 60 cm de hauteur ou 20 m² de surface, une déclaration préalable peut être requise.',
      },
      {
        question: 'Combien de temps dure la construction d\'une terrasse ?',
        answer:
          'Comptez 1 à 2 semaines pour une terrasse standard. La durée varie selon la surface, le matériau et la complexité du terrain. Le planning est précisé au devis.',
      },
      {
        question: 'Quel est le prix d\'une terrasse ?',
        answer:
          'Le coût dépend du matériau, de la surface et des aménagements associés (pergola, éclairage, murets). Un devis est établi après visite du terrain.',
      },
    ],
  },
  {
    slug: 'cloture',
    title: 'Clôtures et Délimitations',
    shortTitle: 'Clôtures',
    icon: '🏗️',
    cardDescription: 'Pose de clôtures, portails et délimitations.',
    menuDescription: 'Panneaux, bois, composite, portails sur mesure',
    isTaxCreditEligible: false,
    metaTitle: 'Pose de Clôtures, Portails et Délimitations | Art des Jardins',
    metaDescription:
      'Pose de clôtures : panneaux rigides, bois, composite, aluminium, grillage, gabions. Portails battants et coulissants. Devis gratuit.',
    heroTitle: 'Clôtures, Portails et Délimitations',
    heroSubtitle:
      'Pose de clôtures et portails pour délimiter, sécuriser et structurer votre extérieur.',
    description: `
      La pose de clôture répond à plusieurs besoins : délimitation de propriété, protection de l'intimité, sécurisation du terrain ou simple structuration de l'espace extérieur. Le choix du type de clôture dépend de l'objectif principal, des règles d'urbanisme locales et de l'intégration paysagère souhaitée.

      Les solutions disponibles couvrent un large éventail : panneaux rigides avec ou sans occultant, clôtures en bois naturel ou composite, aluminium sur mesure, grillage souple ou rigide, gabions décoratifs, murets en pierre ou parpaing. Chaque type présente des caractéristiques différentes en termes de durabilité, d'opacité et d'entretien.

      La prestation inclut également la pose de portails (battants ou coulissants), portillons et brise-vue. Les règles de voisinage et d'urbanisme (hauteur maximale, distances, matériaux autorisés) sont vérifiées en amont pour une installation conforme.
    `,
    features: [
      'Clôture en panneaux rigides (avec occultant possible)',
      'Clôture en bois naturel ou composite',
      'Clôture en aluminium sur mesure',
      'Grillage souple et rigide',
      'Gabions décoratifs',
      'Portails battants et coulissants',
      'Portillons et accès piétons',
      'Murets de clôture en pierre ou parpaing',
      'Brise-vue et occultation',
    ],
    benefits: [
      'Panneaux rigides, bois, composite, aluminium, gabions — solution adaptée à chaque usage',
      'Portails battants ou coulissants, portillons et brise-vue',
      'Vérification des règles d\'urbanisme locales avant pose',
      'Hauteurs et distances de voisinage conformes à la réglementation',
      'Fondations et poteaux dimensionnés selon la nature du sol',
    ],
    process: [
      {
        title: 'Visite et métrage',
        description:
          'Relevé du périmètre, identification des contraintes du terrain et des limites de propriété.',
      },
      {
        title: 'Choix de la solution',
        description:
          'Présentation des options adaptées au projet avec devis détaillé.',
      },
      {
        title: 'Préparation du terrain',
        description:
          'Implantation des poteaux, réalisation des fondations si nécessaire.',
      },
      {
        title: 'Pose de la clôture',
        description:
          'Installation de la clôture, du portail et des accessoires avec finitions soignées.',
      },
    ],
    faq: [
      {
        question: 'Quelle clôture choisir pour mon terrain ?',
        answer:
          'Le choix dépend de l\'objectif (intimité, sécurité, esthétique), du budget et des règles d\'urbanisme locales. La visite sur site permet de définir la solution adaptée.',
      },
      {
        question: 'Faut-il une autorisation pour poser une clôture ?',
        answer:
          'Dans la plupart des communes, une déclaration préalable de travaux est nécessaire. Certaines zones imposent des contraintes de hauteur ou de matériau. Les règles locales sont vérifiées en amont.',
      },
      {
        question: 'Quelle est la durée de pose d\'une clôture ?',
        answer:
          'Comptez 2 à 5 jours pour un terrain standard, selon le linéaire et le type de clôture. Le planning est précisé au devis.',
      },
    ],
  },
  {
    slug: 'taille-haies',
    title: 'Taille de Haies',
    shortTitle: 'Taille de haies',
    icon: '🌿',
    cardDescription: 'Taille et entretien de haies de toutes essences.',
    menuDescription: 'Taille, rabattage et entretien de haies',
    isTaxCreditEligible: true,
    metaTitle: 'Taille de Haies - Entretien et Rabattage | Art des Jardins',
    metaDescription:
      'Taille de haies : thuya, laurier, photinia, charme, haies champêtres. Taille de formation, entretien régulier et rabattage. Éligible au crédit d\'impôt. Devis gratuit.',
    heroTitle: 'Taille de Haies',
    heroSubtitle:
      'Taille d\'entretien, de formation et rabattage pour toutes essences de haies.',
    description: `
      La taille régulière des haies est nécessaire pour maintenir leur densité, leur forme et leur rôle de brise-vue ou de clôture végétale. Chaque essence a ses propres exigences : les persistantes (thuya, laurier, photinia) se taillent différemment des caduques (charme, hêtre, troène) et des haies champêtres composées de plusieurs espèces.

      Les interventions couvrent la taille d'entretien courante, la taille de formation sur les jeunes haies pour favoriser une ramification dense, et le rabattage pour réduire la hauteur des sujets devenus trop imposants. La technique de coupe est adaptée à chaque essence pour favoriser une repousse régulière et limiter le stress végétal.

      Les prestations sont possibles en intervention ponctuelle ou en contrat annuel avec tailles saisonnières programmées (généralement deux à trois passages par an selon les espèces). L'évacuation des déchets de taille est incluse. Ce service est éligible au crédit d'impôt de 50 % dans le cadre des services à la personne.
    `,
    features: [
      'Taille de haies persistantes (thuya, laurier, photinia)',
      'Taille de haies caduques (charme, hêtre, troène)',
      'Taille de haies champêtres et bocagères',
      'Taille de formation pour jeunes haies',
      'Rabattage et réduction de haies trop hautes',

      'Ramassage et évacuation des déchets de taille',
      'Traitement phytosanitaire si nécessaire',
    ],
    benefits: [
      'Technique de coupe adaptée à chaque essence (persistantes, caduques, champêtres)',
      'Taille de formation sur jeunes haies pour favoriser la ramification',
      'Rabattage possible pour réduire les haies devenues trop hautes',
      'Évacuation des déchets de taille vers un centre de compostage',
      'Crédit d\'impôt de 50 % sur les prestations éligibles',
    ],
    process: [
      {
        title: 'Évaluation de la haie',
        description:
          'Identification des essences, de l\'état sanitaire et du type de taille adapté.',
      },
      {
        title: 'Devis et planification',
        description:
          'Devis établi en fonction du linéaire, de la hauteur et de la fréquence souhaitée.',
      },
      {
        title: 'Taille professionnelle',
        description:
          'Coupe réalisée au taille-haies thermique ou sur perche selon la hauteur.',
      },
      {
        title: 'Nettoyage et évacuation',
        description:
          'Ramassage des déchets de taille et évacuation vers un centre de compostage.',
      },
    ],
    faq: [
      {
        question: 'Quand tailler sa haie ?',
        answer:
          'La plupart des haies se taillent 2 fois par an : en juin après la première pousse et en septembre avant l\'hiver. Les espèces à croissance rapide (laurier, troène) peuvent nécessiter 3 passages.',
      },
      {
        question: 'Ma haie est trop haute, peut-on la réduire ?',
        answer:
          'Oui, un rabattage permet de réduire significativement la hauteur. L\'opération se fait en fin d\'hiver pour limiter le stress végétal et favoriser la repousse.',
      },
      {
        question: 'Quelle est la réglementation pour les haies en limite de propriété ?',
        answer:
          'Les haies de plus de 2 m de haut doivent être plantées à 2 m minimum de la limite de propriété. En dessous de 2 m, la distance minimale est de 50 cm (Code civil, art. 671).',
      },
      {
        question: 'Combien coûte la taille de haie ?',
        answer:
          'Le prix dépend du linéaire, de la hauteur et de l\'accessibilité. Des tarifs dégressifs existent dans le cadre de contrats annuels. Avec le crédit d\'impôt de 50 %, le coût réel est divisé par deux.',
      },
    ],
  },
  {
    slug: 'debroussaillage',
    title: 'Débroussaillage et Nettoyage de Terrain',
    shortTitle: 'Débroussaillage',
    icon: '🔥',
    cardDescription: 'Nettoyage de terrains et remise en état.',
    menuDescription: 'Défrichage, nettoyage de terrains envahis',
    isTaxCreditEligible: true,
    metaTitle: 'Débroussaillage et Nettoyage de Terrain | Art des Jardins',
    metaDescription:
      'Débroussaillage, défrichage et remise en état de terrains envahis. Jardins abandonnés, parcelles en friche, terrains à bâtir. Devis gratuit.',
    heroTitle: 'Débroussaillage et Nettoyage de Terrain',
    heroSubtitle:
      'Défrichage, broyage et remise en état de terrains envahis par la végétation.',
    description: `
      Un terrain non entretenu est rapidement colonisé par les ronces, broussailles, repousses d'arbres et adventices. Le débroussaillage permet de remettre en état des parcelles devenues impraticables — jardins abandonnés, terrains à bâtir, sous-bois encombrés ou friches à valoriser.

      Le matériel professionnel utilisé — débroussailleuses à lames, broyeurs de végétaux, tronçonneuses, mini-pelle — est dimensionné en fonction de la densité de végétation et de la surface à traiter. Les végétaux coupés sont broyés sur place (le broyat peut servir de paillis) ou évacués vers un centre de compostage.

      Le débroussaillage répond aussi à une obligation légale : dans les zones classées à risque d'incendie, le débroussaillage dans un rayon de 50 m autour des habitations est imposé par la réglementation. Ce service est éligible au crédit d'impôt de 50 % dans le cadre des services à la personne.
    `,
    features: [
      'Débroussaillage de terrains envahis',
      'Défrichage de parcelles en friche',
      'Arrachage de ronces et broussailles',
      'Broyage des végétaux sur place',
      'Remise en état de jardins abandonnés',
      'Nettoyage de sous-bois',
      'Préparation de terrain à bâtir',
      'Évacuation des déchets verts',
      'Débroussaillage préventif (obligation légale)',
    ],
    benefits: [
      'Matériel dimensionné selon la densité : débroussailleuses à lames, broyeur, mini-pelle',
      'Broyat réutilisable en paillis ou évacuation vers centre de compostage',
      'Mise en conformité avec l\'obligation légale de débroussaillage (50 m autour des habitations)',
      'Intervention sur tous types de terrains : friches, sous-bois, parcelles à bâtir',
      'Crédit d\'impôt de 50 % sur les prestations éligibles',
    ],
    process: [
      {
        title: 'Évaluation du terrain',
        description:
          'Visite du terrain, évaluation de la densité de végétation et des contraintes d\'accès.',
      },
      {
        title: 'Devis adapté',
        description:
          'Devis établi en fonction de la surface et du niveau d\'intervention nécessaire.',
      },
      {
        title: 'Débroussaillage et broyage',
        description:
          'Coupe et broyage de la végétation avec le matériel adapté à la densité du terrain.',
      },
      {
        title: 'Évacuation et finitions',
        description:
          'Nettoyage complet du terrain, évacuation des déchets et remise en état.',
      },
    ],
    faq: [
      {
        question: 'Mon terrain est totalement envahi, pouvez-vous intervenir ?',
        answer:
          'Oui — ronces, arbustes sauvages, repousses d\'arbres. Le matériel (débroussailleuses à lames, broyeur, mini-pelle) est dimensionné en fonction de la densité.',
      },
      {
        question: 'Le débroussaillage est-il obligatoire ?',
        answer:
          'Dans les zones classées à risque d\'incendie, le débroussaillage dans un rayon de 50 m autour des habitations est imposé par la réglementation. Le non-respect expose à une amende.',
      },
      {
        question: 'Que devient la végétation coupée ?',
        answer:
          'Les végétaux sont broyés sur place quand c\'est possible (le broyat peut servir de paillis) ou évacués vers un centre de compostage agréé.',
      },
    ],
  },
  {
    slug: 'arrosage-automatique',
    title: 'Arrosage Automatique',
    shortTitle: 'Arrosage automatique',
    icon: '💧',
    cardDescription: 'Installation et entretien de systèmes d\'arrosage.',
    menuDescription: 'Systèmes enterrés, goutte-à-goutte, programmation',
    isTaxCreditEligible: false,
    metaTitle: 'Arrosage Automatique - Installation et Entretien | Art des Jardins',
    metaDescription:
      'Installation de systèmes d\'arrosage automatique : enterré, goutte-à-goutte, programmation intelligente. Maintenance et hivernage. Devis gratuit.',
    heroTitle: 'Installation d\'Arrosage Automatique',
    heroSubtitle:
      'Systèmes enterrés, goutte-à-goutte et programmation adaptée à chaque zone du jardin.',
    description: `
      Un système d'arrosage automatique adapte l'apport en eau aux besoins réels de chaque zone du jardin : tuyères et turbines enterrées pour les pelouses, goutte-à-goutte pour les massifs et les haies, micro-aspersion pour les potagers. Le dimensionnement tient compte du débit disponible, de la surface à couvrir et de la nature des plantations.

      La conception du réseau inclut le zonage (découpage du jardin en secteurs arrosés séquentiellement), le choix des arroseurs, le tracé des canalisations enterrées et la programmation des cycles d'arrosage. Des sondes d'humidité ou un pluviomètre peuvent compléter l'installation pour éviter les arrosages inutiles et réduire la consommation d'eau.

      L'installation se fait par tranchage léger dans la pelouse existante — le gazon se referme en quelques semaines. La maintenance saisonnière (hivernage avec purge du circuit à l'automne, remise en route au printemps) et le dépannage sont également pris en charge.
    `,
    features: [
      'Arrosage enterré (tuyères et turbines)',
      'Goutte-à-goutte pour massifs et haies',
      'Micro-aspersion pour potagers',
      'Programmation automatique intelligente',
      'Sonde d\'humidité et pluviomètre',
      'Raccordement au réseau ou cuve de récupération',
      'Hivernage et purge du circuit',
      'Remise en route au printemps',
      'Maintenance et dépannage',
      'Extension de système existant',
    ],
    benefits: [
      'Réduction de la consommation d\'eau jusqu\'à 40 % par rapport à l\'arrosage manuel',
      'Zonage par secteur : tuyères pour pelouses, goutte-à-goutte pour massifs',
      'Programmation automatique avec sonde d\'humidité ou pluviomètre en option',
      'Installation par tranchage léger — gazon refermé en quelques semaines',
      'Maintenance saisonnière : hivernage à l\'automne, remise en route au printemps',
    ],
    process: [
      {
        title: 'Étude du jardin',
        description:
          'Analyse de la surface, des plantations, du débit d\'eau disponible et de l\'exposition.',
      },
      {
        title: 'Conception du réseau',
        description:
          'Plan du circuit avec positionnement des arroseurs, zonage par secteur et choix des équipements.',
      },
      {
        title: 'Installation',
        description:
          'Tranchage, pose des canalisations, raccordement des arroseurs et du programmateur.',
      },
      {
        title: 'Réglages et mise en service',
        description:
          'Programmation des cycles d\'arrosage, réglage de la portée et test complet du système.',
      },
      {
        title: 'Formation et suivi',
        description:
          'Prise en main du programmateur et suivi saisonnier (hivernage, remise en route).',
      },
    ],
    faq: [
      {
        question: 'L\'arrosage automatique consomme-t-il beaucoup d\'eau ?',
        answer:
          'Un système bien dimensionné économise jusqu\'à 40 % d\'eau par rapport à un arrosage manuel. La programmation par cycles et les sondes d\'humidité évitent les apports inutiles.',
      },
      {
        question: 'Peut-on installer un arrosage automatique sur un jardin existant ?',
        answer:
          'Oui. L\'installation se fait par tranchage léger dans la pelouse existante. Le gazon se referme en quelques semaines.',
      },
      {
        question: 'Que faire de l\'arrosage en hiver ?',
        answer:
          'L\'hivernage comprend la purge complète du circuit, la protection du programmateur et des vannes. La remise en route se fait au printemps avec vérification de l\'ensemble du réseau.',
      },
      {
        question: 'Quel budget pour un arrosage automatique ?',
        answer:
          'Le coût dépend de la surface à arroser, du nombre de zones et des équipements choisis (sondes, pluviomètre). Un devis détaillé est établi après étude du jardin.',
      },
    ],
  },
];

export const TAX_CREDIT_SLUGS = services
  .filter((s) => s.isTaxCreditEligible)
  .map((s) => s.slug);

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
