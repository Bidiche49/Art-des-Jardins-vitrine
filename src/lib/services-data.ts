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
      'Valorisation de votre propriété',
      'Espace de détente personnalisé',
      'Entretien facilité grâce à une conception réfléchie',
      'Végétaux adaptés au climat local',
      'Projet adapté aux contraintes du terrain',
    ],
    process: [
      {
        title: 'Visite et analyse',
        description:
          'Nous nous déplaçons gratuitement pour étudier votre terrain, comprendre vos besoins et vos envies.',
      },
      {
        title: 'Conception du projet',
        description:
          'Notre équipe élabore un plan détaillé avec choix des végétaux, matériaux et estimation précise.',
      },
      {
        title: 'Validation et planification',
        description:
          'Nous ajustons le projet selon vos retours et planifions les travaux à la période idéale.',
      },
      {
        title: 'Réalisation',
        description:
          'Nos équipes exécutent les travaux avec soin, dans le respect des délais convenus.',
      },
      {
        title: 'Suivi et conseils',
        description:
          'Nous vous accompagnons après les travaux avec des conseils d\'entretien personnalisés.',
      },
    ],
    faq: [
      {
        question: 'Combien coûte un aménagement paysager ?',
        answer:
          'Chaque projet est unique. Le coût dépend de la surface, des matériaux et des plantations choisis. Contactez-nous pour un devis gratuit et personnalisé.',
      },
      {
        question: 'Quelle est la meilleure période pour aménager un jardin ?',
        answer:
          'L\'automne et l\'hiver sont idéaux pour la plantation, cependant nous réalisons les travaux d\'aménagement toute l\'année.',
      },
      {
        question: 'Proposez-vous un service d\'entretien après l\'aménagement ?',
        answer:
          'Oui, nous proposons des contrats d\'entretien annuels pour maintenir votre jardin en parfait état. Tonte, taille, désherbage... nous nous occupons de tout.',
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
      'Gain de temps considérable',
      'Jardin toujours impeccable',
      'Matériels professionnels fournis',
      'Conseils de jardinage inclus',
      'Éligible au crédit d\'impôt de 50 %',
    ],
    process: [
      {
        title: 'Évaluation des besoins',
        description:
          'Nous visitons votre jardin pour évaluer les travaux nécessaires et la fréquence d\'intervention.',
      },
      {
        title: 'Proposition personnalisée',
        description:
          'Nous vous remettons un devis détaillé avec planning d\'intervention adapté aux saisons.',
      },
      {
        title: 'Interventions régulières',
        description:
          'Notre équipe intervient selon le calendrier établi, avec ou sans votre présence.',
      },
      {
        title: 'Suivi qualité',
        description:
          'Nous ajustons nos prestations selon l\'évolution de votre jardin et vos retours.',
      },
    ],
    faq: [
      {
        question: 'À quelle fréquence devez-vous intervenir ?',
        answer:
          'Cela dépend de la surface et du type de jardin. En général, une intervention toutes les 2 semaines au printemps/été et mensuelle en automne/hiver suffit pour un jardin standard.',
      },
      {
        question: 'Que faites-vous des déchets verts ?',
        answer:
          'Nous évacuons systématiquement tous les déchets verts vers un centre de compostage agréé. L\'évacuation est incluse dans nos tarifs.',
      },
      {
        question: 'Intervenez-vous pendant les vacances ?',
        answer:
          'Oui, nous pouvons intervenir en votre absence. C\'est même l\'idéal pour que vous retrouviez un jardin impeccable à votre retour.',
      },
      {
        question: 'Quel est le tarif d\'un entretien de jardin ?',
        answer:
          'Le tarif dépend de la surface, de la fréquence et des prestations souhaitées. Avec le crédit d\'impôt de 50 %, le coût réel est divisé par deux. Demandez votre devis gratuit.',
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
      'Arbres plus sains et vigoureux',
      'Réduction des risques de chute',
      'Meilleure luminosité dans le jardin',
      'Respect de la législation (distances, hauteurs)',
      'Intervention sécurisée et assurée',
    ],
    process: [
      {
        title: 'Diagnostic sur place',
        description:
          'Nous examinons vos arbres pour évaluer leur état sanitaire et les travaux nécessaires.',
      },
      {
        title: 'Devis détaillé',
        description:
          'Nous vous remettons un devis détaillé précisant le type de taille et les moyens utilisés.',
      },
      {
        title: 'Intervention',
        description:
          'Nos élagueurs interviennent avec le matériel adapté : cordes, nacelle, broyeur...',
      },
      {
        title: 'Nettoyage complet',
        description:
          'Nous évacuons tous les déchets et laissons votre jardin propre.',
      },
    ],
    faq: [
      {
        question: 'Quand faut-il élaguer ses arbres ?',
        answer:
          'La période idéale varie selon les espèces. En général, l\'hiver (hors gel) est recommandé pour la plupart des arbres, mais certains comme les cerisiers se taillent après la floraison.',
      },
      {
        question: 'Faut-il une autorisation pour élaguer ?',
        answer:
          'Pour les arbres classés ou en zone protégée, une autorisation peut être nécessaire. Nous pouvons vous accompagner dans ces démarches administratives.',
      },
      {
        question: 'Quelle est la différence entre élagage et taille ?',
        answer:
          'L\'élagage concerne la coupe de grosses branches sur les arbres de grande taille, tandis que la taille s\'applique aux arbustes et haies. Les techniques et le matériel diffèrent.',
      },
      {
        question: 'Combien coûte un élagage d\'arbre ?',
        answer:
          'Le prix varie selon l\'essence, la hauteur et l\'accessibilité de l\'arbre. Nous établissons un devis gratuit après visite sur place.',
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
      'Sécurisation des personnes et des biens',
      'Intervention rapide en urgence',
      'Matériel professionnel adapté',
      'Entreprise assurée',
      'Terrain nettoyé et prêt à l\'emploi',
    ],
    process: [
      {
        title: 'Évaluation du chantier',
        description:
          'Nous analysons l\'arbre à abattre, son environnement et définissons la méthode appropriée.',
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
          'Cela dépend de votre commune et du type d\'arbre. En zone protégée ou pour les arbres classés, une autorisation est obligatoire. Nous vous aidons à faire les démarches.',
      },
      {
        question: 'Que faites-vous du bois ?',
        answer:
          'Nous proposons plusieurs options : évacuation complète, débit en bûches si vous souhaitez le conserver, ou valorisation par nos soins. Le choix vous appartient.',
      },
      {
        question: 'Intervenez-vous en urgence après tempête ?',
        answer:
          'Oui, en cas d\'arbre tombé ou dangereux, appelez-nous directement. Nous faisons notre maximum pour intervenir rapidement et sécuriser les lieux.',
      },
      {
        question: 'Quel est le prix d\'un abattage d\'arbre ?',
        answer:
          'Le coût dépend de la hauteur, de l\'environnement (zone contrainte ou dégagée) et de l\'évacuation. Contactez-nous pour une évaluation gratuite.',
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
      'Espace de vie supplémentaire toute l\'année',
      'Valorisation immédiate de votre propriété',
      'Matériaux durables et résistants aux intempéries',
      'Conception sur mesure adaptée à votre terrain',
      'Finitions soignées et intégration paysagère',
    ],
    process: [
      {
        title: 'Visite et prise de mesures',
        description:
          'Nous analysons votre terrain, l\'exposition et vos envies pour définir le projet idéal.',
      },
      {
        title: 'Proposition et choix des matériaux',
        description:
          'Nous vous présentons un plan détaillé avec échantillons de matériaux et devis précis.',
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
          'Vérification finale avec vous et conseils d\'entretien pour la longévité de votre terrasse.',
      },
    ],
    faq: [
      {
        question: 'Quel matériau choisir pour ma terrasse ?',
        answer:
          'Le choix dépend de votre budget, de l\'entretien souhaité et de l\'esthétique voulue. Le bois composite est le plus simple d\'entretien, le bois naturel le plus chaleureux, et la pierre le plus durable. Nous vous conseillerons lors de la visite.',
      },
      {
        question: 'Faut-il un permis de construire pour une terrasse ?',
        answer:
          'Une terrasse de plain-pied ne nécessite généralement pas de permis. Au-delà de 60 cm de hauteur ou 20 m² de surface, une déclaration préalable peut être requise. Nous vous accompagnons dans les démarches.',
      },
      {
        question: 'Combien de temps dure la construction d\'une terrasse ?',
        answer:
          'Comptez généralement 1 à 2 semaines pour une terrasse standard, selon la surface et la complexité du projet. Nous vous communiquons un planning précis au moment du devis.',
      },
      {
        question: 'Quel est le prix d\'une terrasse ?',
        answer:
          'Le coût varie selon le matériau, la surface et les aménagements associés. Contactez-nous pour un devis gratuit et personnalisé après visite sur place.',
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
      'Sécurisation de votre propriété',
      'Protection de votre intimité',
      'Valorisation esthétique du terrain',
      'Matériaux durables et résistants',
      'Installation conforme aux règles d\'urbanisme',
    ],
    process: [
      {
        title: 'Visite et métrage',
        description:
          'Nous mesurons le périmètre, identifions les contraintes du terrain et définissons vos besoins.',
      },
      {
        title: 'Choix de la solution',
        description:
          'Nous vous présentons les options adaptées à votre projet avec devis détaillé.',
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
          'Le choix dépend de votre objectif (intimité, sécurité, esthétique), de votre budget et des règles d\'urbanisme locales. Nous vous conseillons la solution la plus adaptée lors de la visite gratuite.',
      },
      {
        question: 'Faut-il une autorisation pour poser une clôture ?',
        answer:
          'Dans la plupart des communes, une déclaration préalable de travaux est nécessaire. Certaines zones imposent des contraintes de hauteur ou de matériau. Nous vérifions les règles locales pour vous.',
      },
      {
        question: 'Quelle est la durée de pose d\'une clôture ?',
        answer:
          'Pour un terrain standard, comptez 2 à 5 jours selon le linéaire et le type de clôture. Nous vous communiquons un planning précis dans le devis.',
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
      'Haies denses et uniformes',
      'Respect de la réglementation de voisinage',
      'Matériel professionnel pour une coupe nette',
      'Évacuation des déchets verts incluse',
      'Conseils d\'entretien personnalisés',
    ],
    process: [
      {
        title: 'Évaluation de la haie',
        description:
          'Nous identifions les essences, l\'état sanitaire et le type de taille adapté.',
      },
      {
        title: 'Devis et planification',
        description:
          'Nous établissons un devis en fonction du linéaire, de la hauteur et de la fréquence souhaitée.',
      },
      {
        title: 'Taille professionnelle',
        description:
          'Nos jardiniers interviennent avec le matériel adapté pour une coupe nette et régulière.',
      },
      {
        title: 'Nettoyage et évacuation',
        description:
          'Ramassage de tous les déchets de taille et évacuation vers un centre de compostage.',
      },
    ],
    faq: [
      {
        question: 'Quand tailler sa haie ?',
        answer:
          'La plupart des haies se taillent 2 fois par an : en juin après la première pousse et en septembre avant l\'hiver. Certaines espèces à croissance rapide peuvent nécessiter 3 tailles par an.',
      },
      {
        question: 'Ma haie est trop haute, peut-on la réduire ?',
        answer:
          'Oui, nous réalisons des rabattages pour réduire la hauteur des haies devenues trop imposantes. L\'opération se fait généralement en fin d\'hiver pour limiter le stress sur les végétaux.',
      },
      {
        question: 'Quelle est la réglementation pour les haies en limite de propriété ?',
        answer:
          'Les haies de plus de 2 m de haut doivent être plantées à 2 m minimum de la limite de propriété. En dessous de 2 m, la distance minimale est de 50 cm. Nous veillons au respect de ces règles.',
      },
      {
        question: 'Combien coûte la taille de haie ?',
        answer:
          'Le prix dépend du linéaire, de la hauteur et de l\'accessibilité. Nous proposons des tarifs dégressifs dans le cadre de contrats annuels. Avec le crédit d\'impôt de 50 %, le coût réel est divisé par deux. Demandez votre devis gratuit.',
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
      'Terrain propre et exploitable rapidement',
      'Matériel professionnel puissant',
      'Mise en conformité réglementaire',
      'Intervention rapide sur tout type de terrain',
      'Valorisation foncière de votre parcelle',
    ],
    process: [
      {
        title: 'Évaluation du terrain',
        description:
          'Nous visitons le terrain pour évaluer la densité de végétation et les contraintes d\'accès.',
      },
      {
        title: 'Devis adapté',
        description:
          'Nous établissons un devis précis en fonction de la surface et du niveau d\'intervention nécessaire.',
      },
      {
        title: 'Débroussaillage et broyage',
        description:
          'Notre équipe intervient avec le matériel professionnel adapté pour un résultat impeccable.',
      },
      {
        title: 'Évacuation et finitions',
        description:
          'Nettoyage complet du terrain, évacuation des déchets et remise en état finale.',
      },
    ],
    faq: [
      {
        question: 'Mon terrain est totalement envahi, pouvez-vous intervenir ?',
        answer:
          'Oui, nous intervenons sur tous types de terrains, même les plus envahis. Ronces, arbustes sauvages, repousses d\'arbres : notre matériel professionnel permet de traiter toutes les situations.',
      },
      {
        question: 'Le débroussaillage est-il obligatoire ?',
        answer:
          'Dans certaines zones classées à risque d\'incendie, le débroussaillage est une obligation légale dans un rayon de 50 m autour des habitations. Nous vous renseignons sur vos obligations.',
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
      'Économie d\'eau significative (jusqu\'à 40 %)',
      'Pelouse verte toute l\'année sans effort',
      'Arrosage adapté à chaque type de plante',
      'Gain de temps au quotidien',
      'Système fiable et durable',
    ],
    process: [
      {
        title: 'Étude du jardin',
        description:
          'Nous analysons la surface, les plantations, le débit d\'eau disponible et l\'exposition.',
      },
      {
        title: 'Conception du réseau',
        description:
          'Nous dessinons le plan du circuit avec positionnement des arroseurs et zonage optimal.',
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
          'Nous vous formons à l\'utilisation du programmateur et assurons le suivi saisonnier.',
      },
    ],
    faq: [
      {
        question: 'L\'arrosage automatique consomme-t-il beaucoup d\'eau ?',
        answer:
          'Au contraire, un système bien conçu économise jusqu\'à 40 % d\'eau par rapport à un arrosage manuel. La programmation et les sondes d\'humidité évitent le gaspillage.',
      },
      {
        question: 'Peut-on installer un arrosage automatique sur un jardin existant ?',
        answer:
          'Oui, l\'installation se fait par tranchage léger qui se referme en quelques semaines. Le gazon retrouve un aspect normal rapidement après l\'intervention.',
      },
      {
        question: 'Que faire de l\'arrosage en hiver ?',
        answer:
          'Nous réalisons l\'hivernage de votre système : purge complète du circuit, protection du programmateur et des vannes. La remise en route se fait au printemps.',
      },
      {
        question: 'Quel budget pour un arrosage automatique ?',
        answer:
          'Le coût dépend de la surface à arroser, du nombre de zones et des équipements choisis. Nous établissons un devis détaillé après étude de votre jardin.',
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
