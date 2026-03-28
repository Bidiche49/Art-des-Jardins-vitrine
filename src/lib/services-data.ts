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
    metaTitle: 'Paysagiste Angers - Aménagement de Jardin | Art des Jardins',
    metaDescription:
      'Paysagiste professionnel à Angers. Conception et réalisation de jardins sur mesure : terrasses, massifs, engazonnement, arrosage automatique. Devis gratuit.',
    heroTitle: 'Aménagement de Jardin à Angers',
    heroSubtitle:
      'Transformez votre extérieur en un espace de vie unique avec notre équipe de paysagistes professionnels.',
    description: `
      Art des Jardins est votre partenaire de confiance pour tous vos projets d'aménagement paysager dans la région d'Angers.
      Forts de notre expérience et de notre passion pour les espaces verts, nous concevons et réalisons des jardins qui
      reflètent votre personnalité et s'adaptent parfaitement à votre mode de vie.

      Notre approche de l'aménagement paysager combine créativité, expertise technique et respect de l'environnement. Chaque projet
      est unique : nous prenons le temps d'écouter vos envies, d'analyser votre terrain et de vous proposer des solutions
      sur mesure qui valorisent votre propriété.

      Que vous souhaitiez créer un jardin contemporain aux lignes épurées, un espace champêtre et naturel, ou un jardin
      méditerranéen plein de couleurs, notre équipe saura donner vie à vos rêves. Nous travaillons avec des végétaux
      adaptés au climat de la Loire, sélectionnés pour leur robustesse et leur beauté durable.
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
      'Cabane dans les arbres',
      'Pose de clôtures et bordures',
      'Éclairage de jardin',
    ],
    benefits: [
      'Valorisation de votre propriété',
      'Espace de détente personnalisé',
      'Entretien facilité grâce à une conception réfléchie',
      'Végétaux adaptés au climat local',
      'Respect de votre budget',
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
    metaTitle: 'Entretien de Jardin Angers - Tonte, Taille, Désherbage | Art des Jardins',
    metaDescription:
      'Service d\'entretien de jardin à Angers. Tonte de pelouse, taille de haies, désherbage, nettoyage. Contrats annuels ou interventions ponctuelles. Devis gratuit.',
    heroTitle: 'Entretien de Jardin à Angers',
    heroSubtitle:
      'Un jardin impeccable toute l\'année sans effort grâce à notre service d\'entretien professionnel.',
    description: `
      Un beau jardin demande un entretien régulier et adapté à chaque saison. Art des Jardins vous propose un service
      d'entretien complet pour que vous puissiez profiter de votre extérieur sans contrainte.

      Notre équipe de jardiniers professionnels intervient régulièrement selon un calendrier adapté à votre jardin
      et à vos besoins. Nous utilisons des équipements professionnels et des techniques respectueuses de l'environnement
      pour garantir un résultat impeccable.

      Que vous ayez un petit jardin de ville ou un grand parc, nous adaptons nos prestations à vos attentes et à votre
      budget. Nos contrats d'entretien sont flexibles : interventions hebdomadaires, bi-mensuelles ou mensuelles selon
      la saison et vos préférences.
    `,
    features: [
      'Tonte de pelouse et réfection de gazon',
      'Taille de haies, arbustes et topiaires',
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
      'Tarifs dégressifs en contrat annuel',
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
    metaTitle: 'Élagage Angers - Taille d\'Arbres Professionnel | Art des Jardins',
    metaDescription:
      'Service d\'élagage professionnel à Angers. Taille d\'arbres, éclaircissage, taille de sécurisation, diagnostic phytosanitaire. Élagueurs certifiés. Devis gratuit.',
    heroTitle: 'Élagage Professionnel à Angers',
    heroSubtitle:
      'Des arbres sains et esthétiques grâce à l\'expertise de nos élagueurs certifiés.',
    description: `
      L'élagage est un art qui nécessite savoir-faire et précision. Chez Art des Jardins, nos élagueurs certifiés
      interviennent sur tous types d'arbres pour assurer leur bonne santé, leur sécurité et leur esthétique.

      Un élagage bien réalisé permet de contrôler la croissance de l'arbre, d'améliorer sa structure, de prévenir
      les risques de chute de branches et de favoriser la pénétration de la lumière. Nos techniques respectent
      la physiologie de l'arbre pour garantir une cicatrisation optimale.

      Nous intervenons aussi bien chez les particuliers que pour les copropriétés, les entreprises et les collectivités.
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
    metaTitle: 'Abattage d\'Arbres Angers - Dessouchage | Art des Jardins',
    metaDescription:
      'Service d\'abattage d\'arbres sécurisé à Angers. Abattage, démontage, dessouchage, évacuation. Intervention rapide. Devis gratuit.',
    heroTitle: 'Abattage d\'Arbres Sécurisé à Angers',
    heroSubtitle:
      'Élimination sûre et efficace des arbres dangereux, malades ou gênants par des professionnels.',
    description: `
      L'abattage d'un arbre est une opération délicate qui ne s'improvise pas. Qu'il s'agisse d'un arbre malade,
      dangereux, mort ou simplement mal placé, Art des Jardins réalise l'abattage en toute sécurité avec les
      techniques adaptées à chaque situation.

      Nos équipes évaluent systématiquement les risques avant intervention : proximité de bâtiments, lignes
      électriques, accès, espace de chute... Selon le contexte, nous procédons à un abattage direct ou à un
      démontage pièce par pièce pour les situations les plus contraintes.

      Après l'abattage, nous proposons également le dessouchage (rogneuse de souche) et l'évacuation complète
      des débris. Votre terrain est ainsi prêt pour un nouvel aménagement ou une nouvelle plantation.
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
      'Sécurité garantie pour les personnes et biens',
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
          'Oui, nous disposons d\'une ligne d\'urgence pour les arbres tombés ou dangereux. Nous intervenons rapidement pour sécuriser les lieux.',
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
    metaTitle: 'Terrasse Angers - Aménagement Extérieur | Art des Jardins',
    metaDescription:
      'Création de terrasses à Angers : bois, composite, pierre naturelle, dalles. Conception sur mesure, pergolas, espaces de vie extérieurs. Devis gratuit.',
    heroTitle: 'Création de Terrasses à Angers',
    heroSubtitle:
      'Prolongez votre intérieur avec une terrasse sur mesure, conçue pour durer et sublimer votre jardin.',
    description: `
      La terrasse est le prolongement naturel de votre maison vers le jardin. Chez Art des Jardins, nous concevons et
      réalisons des terrasses sur mesure qui s'intègrent harmonieusement à votre extérieur et à votre style de vie.

      Bois naturel, composite, pierre naturelle, dalles sur plots ou béton décoratif : nous maîtrisons tous les
      matériaux pour vous proposer la solution la plus adaptée à vos envies et à votre budget. Chaque projet est
      étudié en tenant compte de l'exposition, du terrain et de l'usage souhaité.

      Au-delà de la terrasse elle-même, nous réalisons l'ensemble des aménagements extérieurs complémentaires :
      pergolas, murets, escaliers, éclairage d'ambiance et plantations pour créer un véritable espace de vie
      en plein air.
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
      'Matériaux durables et garantis',
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
    metaTitle: 'Clôture Angers - Pose de Clôtures | Art des Jardins',
    metaDescription:
      'Pose de clôtures à Angers : panneaux rigides, bois, composite, grillage, portails. Installation professionnelle et sur mesure. Devis gratuit.',
    heroTitle: 'Pose de Clôtures à Angers',
    heroSubtitle:
      'Délimitez et sécurisez votre propriété avec une clôture esthétique posée par des professionnels.',
    description: `
      La clôture est essentielle pour délimiter votre propriété, protéger votre intimité et sécuriser votre
      terrain. Art des Jardins vous propose une large gamme de solutions de clôture adaptées à tous les
      styles et à tous les budgets.

      Panneaux rigides, bois naturel, composite, aluminium, grillage souple ou gabions : nous installons
      tous les types de clôtures avec un soin particulier apporté à la pose et aux finitions. Nos clôtures
      sont conçues pour résister aux intempéries et s'intégrer harmonieusement dans votre environnement.

      Nous réalisons également la pose de portails (battants ou coulissants), de portillons et de systèmes
      de contrôle d'accès pour une solution complète de délimitation de votre propriété.
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
    metaTitle: 'Taille de Haies Angers - Entretien Haies | Art des Jardins',
    metaDescription:
      'Taille de haies professionnelle à Angers. Haies de thuya, laurier, photinia, champêtres. Taille de formation et entretien régulier. Devis gratuit.',
    heroTitle: 'Taille de Haies à Angers',
    heroSubtitle:
      'Des haies parfaitement taillées pour un jardin net et soigné toute l\'année.',
    description: `
      La taille des haies est indispensable pour maintenir leur densité, leur forme et leur bonne santé.
      Art des Jardins intervient pour la taille de tous types de haies : thuya, laurier, photinia, charme,
      hêtre, troène et haies champêtres.

      Une haie bien entretenue assure son rôle de brise-vue, de brise-vent et de clôture végétale tout en
      restant esthétique. Nos jardiniers maîtrisent les techniques de taille adaptées à chaque essence
      pour favoriser une repousse dense et régulière.

      Nous proposons des interventions ponctuelles ou des contrats d'entretien annuels avec tailles
      saisonnières programmées. Notre équipement professionnel (taille-haies thermiques et sur perche)
      nous permet d'intervenir sur des haies de toutes hauteurs.
    `,
    features: [
      'Taille de haies persistantes (thuya, laurier, photinia)',
      'Taille de haies caduques (charme, hêtre, troène)',
      'Taille de haies champêtres et bocagères',
      'Taille de formation pour jeunes haies',
      'Rabattage et réduction de haies trop hautes',
      'Taille en topiaire et formes décoratives',
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
    metaTitle: 'Débroussaillage Angers - Nettoyage Terrain | Art des Jardins',
    metaDescription:
      'Débroussaillage professionnel à Angers. Nettoyage de terrains, défrichage, remise en état de jardins abandonnés. Intervention rapide. Devis gratuit.',
    heroTitle: 'Débroussaillage et Nettoyage de Terrain à Angers',
    heroSubtitle:
      'Redonnez vie à vos terrains envahis par la végétation grâce à notre intervention professionnelle.',
    description: `
      Un terrain laissé à l'abandon se retrouve rapidement envahi par les ronces, les broussailles et les
      mauvaises herbes. Art des Jardins intervient pour remettre en état vos parcelles, jardins ou terrains
      à bâtir grâce à un débroussaillage professionnel.

      Nous disposons du matériel adapté pour venir à bout de toutes les situations : débroussailleuses
      professionnelles, broyeurs de végétaux, tronçonneuses et mini-pelle pour les terrains les plus
      difficiles. Notre équipe intervient rapidement pour transformer un terrain impraticable en un
      espace propre et exploitable.

      Le débroussaillage est aussi une obligation légale dans certaines zones pour la prévention des
      incendies. Nous vous accompagnons dans la mise en conformité de vos terrains.
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
    metaTitle: 'Arrosage Automatique Angers - Installation | Art des Jardins',
    metaDescription:
      'Installation d\'arrosage automatique à Angers. Système enterré, goutte-à-goutte, programmation intelligente. Économies d\'eau garanties. Devis gratuit.',
    heroTitle: 'Arrosage Automatique à Angers',
    heroSubtitle:
      'Un jardin verdoyant sans effort grâce à un système d\'arrosage automatique sur mesure.',
    description: `
      Un système d'arrosage automatique bien conçu garantit un jardin verdoyant tout en optimisant la
      consommation d'eau. Art des Jardins conçoit et installe des systèmes d'arrosage sur mesure,
      parfaitement adaptés à la configuration de votre jardin et aux besoins de vos plantations.

      Arrosage enterré par tuyères et turbines pour les pelouses, goutte-à-goutte pour les massifs et
      les haies, micro-aspersion pour les potagers : nous sélectionnons les équipements les plus adaptés
      à chaque zone de votre jardin. La programmation est optimisée pour arroser au bon moment et en
      quantité juste nécessaire.

      Nos installations sont réalisées avec des composants de qualité professionnelle pour une durabilité
      et une fiabilité maximales. Nous assurons également la maintenance, l'hivernage et la remise en
      route de votre système.
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
