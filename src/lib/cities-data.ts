export type ServiceSlug = 'paysagiste' | 'elagage' | 'entretien-jardin' | 'abattage';

export interface ServiceCityContent {
  content: string;           // 3-5 unique paragraphs about THIS service in THIS city
  metaDescription: string;   // unique meta description, 150-160 chars
  highlights?: string[];     // service-specific highlights for this city
  accroche?: string;         // Section 2 text (80-120 words)
  whyPro?: string;           // Section 7 text (80-120 words)
}

export interface CityData {
  slug: string;
  name: string;
  department: string;
  postalCode: string;
  population?: string;
  distance?: string; // from Angers
  geo: { lat: number; lng: number };
  description: string;
  specificContent: string;
  neighborhoods?: string[];
  serviceContent?: Partial<Record<ServiceSlug, ServiceCityContent>>;
}

export interface ServiceCityData {
  service: ServiceSlug;
  serviceTitle: string;
  serviceTitlePlural: string;
  serviceDescription: string;
  metaTitleTemplate: string;
  metaDescriptionTemplate: string;
  features: string[];
}

export const serviceTypes: ServiceCityData[] = [
  {
    service: 'paysagiste',
    serviceTitle: 'Paysagiste',
    serviceTitlePlural: 'Paysagistes',
    serviceDescription: 'aménagement et création de jardins',
    metaTitleTemplate: 'Paysagiste {city} - Aménagement Jardin | Art des Jardins',
    metaDescriptionTemplate:
      'Paysagiste professionnel à {city}. Aménagement de jardin, terrasse, engazonnement, plantation. Devis gratuit sous 48h.',
    features: [
      'Conseils et propositions d\'aménagements personnalisés',
      'Création de terrasses (tout matériaux)',
      'Allée et terrassement divers',
      'Plantation d\'arbres et arbustes',
      'Pergola sur mesure',
      'Maçonneries extérieures',
    ],
  },
  {
    service: 'elagage',
    serviceTitle: 'Élagage',
    serviceTitlePlural: 'Services d\'élagage',
    serviceDescription: 'taille et soins des arbres',
    metaTitleTemplate: 'Élagage {city} - Taille d\'Arbres | Art des Jardins',
    metaDescriptionTemplate:
      'Élagueur professionnel à {city}. Taille d\'arbres, éclaircissage, taille de sécurisation. Élagueurs certifiés. Devis gratuit.',
    features: [
      'Taille de formation pour jeunes arbres',
      'Taille d\'entretien et éclaircissage',
      'Taille de réduction de volume',
      'Taille de sécurisation',
      'Diagnostic phytosanitaire',
    ],
  },
  {
    service: 'entretien-jardin',
    serviceTitle: 'Entretien de jardin',
    serviceTitlePlural: 'Services d\'entretien',
    serviceDescription: 'entretien régulier de jardins',
    metaTitleTemplate: 'Entretien Jardin {city} - Tonte, Taille | Art des Jardins',
    metaDescriptionTemplate:
      'Entretien de jardin à {city}. Tonte pelouse, taille haies, désherbage. Contrat annuel ou ponctuel. Devis gratuit.',
    features: [
      'Tonte de pelouse',
      'Taille de haies et arbustes',
      'Désherbage écologique',
      'Ramassage des feuilles',
      'Traitement phytosanitaire',
      'Évacuation des déchets verts',
    ],
  },
  {
    service: 'abattage',
    serviceTitle: 'Abattage',
    serviceTitlePlural: 'Services d\'abattage',
    serviceDescription: 'abattage et dessouchage d\'arbres',
    metaTitleTemplate: 'Abattage Arbres {city} - Dessouchage | Art des Jardins',
    metaDescriptionTemplate:
      'Abattage d\'arbres sécurisé à {city}. Démontage technique, dessouchage, évacuation. Intervention urgence. Devis gratuit.',
    features: [
      'Abattage direct',
      'Démontage technique',
      'Dessouchage à la rogneuse',
      'Évacuation du bois',
      'Fendage du bois',
      'Intervention d\'urgence',
      'Sécurisation après tempête',
    ],
  },
];

export const cities: CityData[] = [
  {
    slug: 'angers',
    name: 'Angers',
    department: 'Maine-et-Loire',
    postalCode: '49000',
    population: '155 000',
    geo: { lat: 47.4712, lng: -0.5518 },
    description:
      'Capitale du Maine-et-Loire, Angers est une ville verte aux nombreux parcs et jardins. Connue pour son château et ses ardoises, elle offre un cadre de vie agréable avec un patrimoine végétal exceptionnel.',
    specificContent: `
      Angers, ville d'art et d'histoire, possède un patrimoine végétal remarquable avec plus de 600 hectares d'espaces verts. Du jardin des Plantes au parc de la Garenne, du jardin du Mail au lac de Maine, les Angevins sont particulièrement attachés à leur cadre de vie verdoyant. Cette tradition horticole remonte au XIXe siècle, quand Angers était déjà reconnue comme un centre majeur de la production végétale en France.

      Le climat angevin, doux et océanique, est un atout considérable pour les jardins. Les hivers rarement rigoureux et les étés tempérés permettent de cultiver une grande diversité végétale. Les hortensias, camélias, magnolias et rhododendrons s'épanouissent dans ce terroir privilégié. Les sols varient selon les quartiers : schisteux et bien drainés sur les hauteurs de Monplaisir, alluviaux et plus lourds en fond de vallée vers le lac de Maine.

      Art des Jardins intervient dans tous les quartiers d'Angers, du centre historique aux zones résidentielles périphériques. Dans le quartier de La Doutre, les jardins de ville exigent une approche soignée qui respecte le patrimoine architectural. À Saint-Serge et Belle-Beille, les espaces plus vastes se prêtent à des créations paysagères ambitieuses. Dans les quartiers pavillonnaires des Hauts de Saint-Aubin ou du lac de Maine, les terrains de 500 à 1 000 m² permettent de créer de véritables jardins d'agrément avec terrasses, massifs et espaces de détente.

      La ville encourage la biodiversité urbaine, et nous intégrons cette démarche dans chacun de nos projets : haies mixtes, prairies fleuries, nichoirs, hôtels à insectes. Nous sélectionnons des végétaux produits en Anjou, parfaitement acclimatés, et adaptons chaque création à la nature du sol et aux réglementations locales du PLU.
    `,
    neighborhoods: [
      'La Doutre',
      'Saint-Serge',
      'Belle-Beille',
      'Monplaisir',
      'Roseraie',
      'Les Hauts de Saint-Aubin',
      'Centre-ville',
      'Lac de Maine',
      'Deux-Croix Banchais',
      'Grand Pigeon',
    ],
  },
  {
    slug: 'avrille',
    name: 'Avrillé',
    department: 'Maine-et-Loire',
    postalCode: '49240',
    population: '14 000',
    distance: '5 km',
    geo: { lat: 47.4955, lng: -0.5876 },
    description:
      'Commune résidentielle au nord d\'Angers, Avrillé est appréciée pour son cadre de vie verdoyant et ses nombreux espaces naturels, avec un parc de loisirs réputé.',
    specificContent: `
      Avrillé, commune limitrophe d'Angers au nord, offre un cadre de vie particulièrement agréable qui attire de nombreuses familles. Son parc de loisirs de 30 hectares, ses allées arborées et ses quartiers résidentiels soignés en font l'une des communes les plus vertes de l'agglomération angevine. Les propriétés se caractérisent par des jardins de 600 à 1 500 m², dont beaucoup arrivent à maturité et nécessitent des interventions de restructuration.

      Le sol avrillais est majoritairement argilo-limoneux, avec des zones de schiste sur les hauteurs du bourg. Ce type de sol retient bien l'eau en hiver mais peut se compacter en été, rendant les amendements organiques réguliers et l'aération du gazon essentiels. Le choix des végétaux doit aussi tenir compte de ces contraintes pédologiques.

      Art des Jardins connaît parfaitement les différents quartiers d'Avrillé. Dans le centre-bourg historique, les parcelles plus étroites accueillent des jardins de charme avec murets de pierre et rosiers. Du côté de la Blancheraie et du Bois-du-Roy, les terrains plus vastes permettent des aménagements ambitieux : grandes pelouses, massifs arbustifs structurés, potagers familiaux et espaces de jeux pour enfants.

      La commune étant bien exposée avec peu d'ombre naturelle, la création de zones ombragées est un enjeu important : pergolas, plantations d'arbres à croissance rapide comme les érables ou les charmes. Nous concevons des jardins qui offrent du confort toute l'année, avec des ambiances différentes selon les saisons.
    `,
    neighborhoods: ['Centre-bourg', 'La Perrière', 'L\'Adezière', 'La Blancheraie', 'Le Bois-du-Roy', 'La Garde'],
    serviceContent: {
      paysagiste: {
        content: `
          Le sol argilo-limoneux qui caractérise la commune impose un cadre précis à tout projet d'aménagement paysager. Riche en nutriments et capable de retenir l'eau en profondeur, il convient à une large palette végétale — mais sa tendance au compactage estival exige un travail de décompactage et d'amendement organique avant chaque plantation. Sans cette préparation, l'enracinement reste superficiel et les végétaux peinent à s'installer.

          Les parcelles résidentielles d'Avrillé, souvent comprises entre 600 et 1 500 m², offrent une surface suffisante pour structurer de véritables espaces de vie extérieurs. Terrasses en pierre naturelle ou en composite, massifs de vivaces et graminées, haies taillées en limite de propriété : l'espace disponible permet de combiner zones de détente, circulations et plantations sans sensation d'encombrement.

          Du côté de la Blancheraie et du Bois-du-Roy, les terrains plus vastes se prêtent à des compositions avec plusieurs ambiances — un coin ombragé sous pergola, un espace engazonné, des massifs arbustifs en fond de parcelle. Dans le centre-bourg, les jardins plus étroits demandent un travail de proportion différent : murets bas en tuffeau, rosiers palissés, aromatiques en bordure. Chaque configuration appelle une lecture spécifique du terrain.

          L'ensoleillement généreux de la commune, notamment dans les lotissements récents peu arborés, rend la création de zones d'ombre structurante. Pergolas bois ou aluminium, érables champêtres, charmes fastigiés — ces éléments verticaux apportent du volume tout en filtrant la lumière aux heures chaudes.
        `,
        metaDescription: 'Paysagiste à Avrillé, Maine-et-Loire : création de jardins sur sol argilo-limoneux, terrasses en pierre, pergolas et massifs vivaces pour chaque quartier.',
        highlights: [
          'Création de jardins sur sol argilo-limoneux avec amendements adaptés',
          'Terrasses en pierre naturelle ou composite sur terrain argileux',
          'Pergolas et structures ombragées pour lotissements peu arborés',
          'Massifs de vivaces et graminées ornementales quatre saisons',
          'Aménagement de jardins étroits en centre-bourg historique',
        ],
      },
      elagage: {
        content: `
          Chênes pédonculés, érables sycomores, tilleuls, cèdres de l'Atlas — les quartiers résidentiels établis d'Avrillé abritent un patrimoine arboré diversifié qui a atteint sa pleine maturité. Ces arbres de grande envergure nécessitent des tailles régulières d'éclaircissage et de réduction pour maintenir leur équilibre structurel, préserver la luminosité des jardins et limiter les risques de casse par vent fort.

          Sur sol argilo-limoneux compact, les systèmes racinaires se développent en surface plutôt qu'en profondeur. Cette caractéristique favorise les soulèvements de terrasses, d'allées et de clôtures, mais aussi une moindre stabilité de l'arbre face aux rafales. Un diagnostic visuel et mécanique permet d'évaluer l'ancrage réel avant toute intervention de taille ou de haubanage.

          La taille douce reste l'approche la plus respectueuse de la physiologie de l'arbre. Elle consiste à supprimer le bois mort, les branches mal orientées et les gourmands, sans recourir aux coupes sévères qui déséquilibrent la charpente et provoquent des repousses anarchiques. Sur les fruitiers — pommiers, poiriers, cerisiers, fréquents dans les jardins de la commune — la taille de fructification suit un calendrier précis, idéalement entre novembre et février hors période de gel.

          Les jeunes sujets plantés dans les lotissements récents bénéficient de tailles de formation qui orientent la croissance dès les premières années. Un arbre correctement formé développe une charpente équilibrée qui réduit le besoin d'interventions lourdes à maturité.
        `,
        metaDescription: 'Élagage à Avrillé : taille douce des arbres matures, éclaircissage et taille de formation adaptés au sol argilo-limoneux compact. Élagueurs grimpeurs qualifiés.',
        highlights: [
          'Taille douce et éclaircissage des arbres matures',
          'Diagnostic d\'ancrage racinaire sur sol argilo-limoneux compact',
          'Taille de formation pour jeunes sujets en lotissement',
          'Taille de fructification des fruitiers (pommiers, poiriers, cerisiers)',
          'Sécurisation des arbres fragilisés par le vent',
        ],
      },
      'entretien-jardin': {
        content: `
          Entre le compactage estival et l'engorgement hivernal, le sol argilo-limoneux d'Avrillé impose un rythme d'entretien spécifique aux pelouses et massifs. L'aération mécanique au printemps et à l'automne restaure la porosité du sol, tandis que le terreautage en surface compense la tendance naturelle de l'argile à former une croûte imperméable. Sans ces interventions régulières, le gazon jaunit dès juin et la mousse colonise les zones ombragées.

          La tonte s'adapte elle aussi aux conditions locales. En période de croissance active — avril à juin, puis septembre-octobre — une fréquence hebdomadaire maintient un gazon dense qui limite la pousse des adventices. En été, relever la hauteur de coupe à 7-8 cm protège les racines du dessèchement sur sol argileux. Le mulching, qui restitue les résidus de tonte au sol, nourrit le terrain et réduit le besoin d'engrais.

          Les haies constituent l'autre poste d'entretien majeur sur la commune. Lauriers, photinias, thuyas, charmes : la diversité des essences implique des calendriers de taille distincts. Les persistants se taillent deux fois par an — fin de printemps et début d'automne — tandis que les caducs se travaillent en fin d'hiver. Un bon entretien de haie passe aussi par le désherbage de son pied et un apport de compost annuel.

          Le désherbage des massifs et allées repose sur des méthodes mécaniques et préventives : binage régulier, paillage organique en couche épaisse, plantation de couvre-sols compétitifs. Sur les sols argileux, le paillage joue un double rôle — limiter les adventices et maintenir l'humidité en surface pendant les sécheresses estivales.
        `,
        metaDescription: 'Entretien de jardin à Avrillé : tonte, aération et désherbage mécanique adaptés au sol argilo-limoneux. Taille de haies, paillage et fertilisation saisonnière.',
        highlights: [
          'Aération mécanique et terreautage sur sol argilo-limoneux',
          'Tonte adaptée avec mulching sur terrain argileux',
          'Désherbage mécanique et paillage organique sans produit chimique',
          'Taille de haies persistantes et caduques selon calendrier',
          'Fertilisation saisonnière adaptée aux sols compacts',
        ],
      },
      abattage: {
        content: `
          Les parcelles enclavées du centre-bourg et les jardins mitoyens de La Perrière limitent considérablement les options d'abattage direct. Lorsqu'un arbre doit être retiré — dépérissement avancé, déstabilisation racinaire, proximité dangereuse avec une habitation — le démontage par sections reste l'approche la plus adaptée. L'élagueur-grimpeur travaille de la cime vers la base, descendant chaque tronçon au cordage pour préserver les clôtures, toitures et plantations adjacentes.

          Les conifères disproportionnés représentent une part significative des demandes d'abattage à Avrillé. Thuyas devenus opaques et envahissants, épicéas dont les racines soulèvent les terrasses, sapins qui privent les jardins de lumière — ces sujets, souvent plantés en haie ou en isolé dans les lotissements, finissent par poser des problèmes d'encombrement et de voisinage que seul l'abattage résout.

          Le dessouchage sur sol argilo-limoneux présente des contraintes spécifiques. L'argile compacte freine le travail de la rogneuse et exige un matériel dimensionné en conséquence. Après extraction, le trou laissé par la souche se comble avec un mélange de terre végétale et de compost pour restaurer la structure du sol et préparer une éventuelle replantation. Le broyage des rémanents sur place produit un paillage réutilisable au jardin.

          Les tempêtes hivernales fragilisent particulièrement les arbres à enracinement superficiel sur sol argileux — peupliers, bouleaux, robiniers. Après un épisode venteux, un diagnostic visuel permet d'identifier les sujets inclinés, fissurés ou dont la motte racinaire s'est partiellement soulevée. L'abattage de sécurisation intervient alors pour éliminer le risque de chute sur les biens ou les personnes.
        `,
        metaDescription: 'Abattage d\'arbres à Avrillé : démontage technique par sections en parcelles enclavées, dessouchage à la rogneuse sur sol argileux compact, évacuation complète.',
        highlights: [
          'Démontage technique par sections en parcelles enclavées',
          'Abattage de conifères disproportionnés en zone résidentielle',
          'Dessouchage à la rogneuse sur sol argilo-limoneux compact',
          'Broyage des rémanents et valorisation en paillage sur place',
          'Diagnostic post-tempête et abattage de sécurisation',
        ],
      },
    },
  },
  {
    slug: 'beaucouze',
    name: 'Beaucouzé',
    department: 'Maine-et-Loire',
    postalCode: '49070',
    population: '5 500',
    distance: '7 km',
    geo: { lat: 47.4812, lng: -0.6147 },
    description:
      'Commune de l\'ouest angevin, Beaucouzé allie zones résidentielles et commerciales avec de nombreux espaces verts à entretenir.',
    specificContent: `
      Beaucouzé, située à l'ouest d'Angers le long de la route de Nantes, est une commune dynamique qui mélange harmonieusement zones résidentielles et pôle commercial. Le centre commercial Atoll a contribué à transformer le visage de la commune tout en préservant les quartiers résidentiels plus anciens qui conservent leur charme et leur végétation mature.

      Le sol de Beaucouzé est principalement composé de limons profonds reposant sur un substrat schisteux. Ces sols fertiles et bien équilibrés permettent la culture d'une large gamme de végétaux. Les rosiers, vivaces et arbustes à fleurs s'y développent particulièrement bien. Le drainage naturel peut cependant être insuffisant en période de fortes pluies hivernales, et la mise en place de drains est recommandée pour les zones les plus basses.

      Art des Jardins intervient à Beaucouzé aussi bien pour les particuliers que pour les professionnels. Les terrains généralement plats facilitent la création de belles pelouses et de terrasses de plain-pied, ainsi que l'installation de systèmes d'arrosage automatique pour les jardins de plus de 300 m².

      Les demandes les plus fréquentes concernent la création ou la rénovation de terrasses, l'engazonnement de nouvelles parcelles et la plantation de haies. Les jardins des constructions récentes nécessitent souvent un aménagement complet depuis le terrain nu : terrassement, apport de terre végétale, engazonnement et création d'espaces de vie extérieurs.
    `,
    neighborhoods: ['Centre-bourg', 'Zone Atoll', 'La Gaudière', 'Le Haut-Beaucouzé'],
    serviceContent: {
      paysagiste: {
        content: `
          Les limons profonds de Beaucouzé, posés sur un substrat de schiste, comptent parmi les sols les plus fertiles de l'agglomération angevine. Cette terre équilibrée retient l'eau et les nutriments sans excès, ce qui élargit considérablement la palette végétale envisageable — des rosiers aux graminées ornementales, des vivaces aux arbustes à fleurs.

          Le relief plat de la commune simplifie les travaux de terrassement et de nivellement. Les terrasses de plain-pied s'intègrent naturellement au jardin, qu'elles soient en pierre naturelle, en dalles ou en bois composite. L'absence de dénivelé favorise aussi l'installation de systèmes d'arrosage automatique, utiles sur les parcelles dépassant 300 m².

          Les constructions récentes livrent souvent un terrain nu qu'il faut aménager intégralement : apport de terre végétale, création de circulations, engazonnement et plantation de haies pour structurer l'espace. Dans les quartiers plus anciens du centre-bourg et de la Gaudière, la demande porte davantage sur la rénovation de jardins existants — restructuration de massifs vieillissants, remplacement de haies monotones par des compositions mixtes, modernisation des espaces de vie extérieurs.

          Un point de vigilance concerne le drainage. En zones basses, les limons saturés d'eau hivernale peuvent asphyxier les racines des plantations récentes. La pose de drains agricoles ou la création de noues paysagères permet de gérer cet excès d'eau tout en valorisant le jardin. Le choix d'essences tolérantes à l'humidité temporaire — cornouillers, saules ornementaux, iris — complète cette approche sur les parcelles les plus exposées.
        `,
        metaDescription: 'Paysagiste à Beaucouzé : création de jardins sur sols limoneux fertiles, terrasses de plain-pied, plantations et haies adaptées aux conditions locales.',
        highlights: [
          'Plantations sur sols limoneux fertiles adaptées au substrat schisteux',
          'Terrasses de plain-pied intégrées au terrain plat',
          'Création de jardins complets sur terrain nu en lotissement',
          'Drainage et noues paysagères pour parcelles en zone basse',
          'Rénovation de massifs et haies dans les quartiers anciens',
        ],
      },
      elagage: {
        content: `
          Chênes pédonculés, érables champêtres, tilleuls et charmes composent l'essentiel du patrimoine arboré de Beaucouzé. Dans les quartiers résidentiels établis — centre-bourg et la Gaudière —, ces arbres ont atteint une envergure qui déborde souvent sur les toitures, les clôtures ou les propriétés voisines.

          La taille douce reste l'approche privilégiée sur ces sujets matures. Elle consiste à alléger la ramure en supprimant le bois mort, les branches mal orientées et les rejets, sans coupes drastiques qui provoqueraient des réactions de stress végétal. Sur les sols limoneux de la commune, les arbres disposent d'un enracinement profond et vigoureux ; un élagage trop sévère déséquilibrerait le rapport entre houppier et système racinaire.

          Les conifères — thuyas devenus trop hauts, cyprès de Leyland débordants — posent un problème récurrent dans les lotissements. Plantés à l'origine comme haies, certains atteignent huit à dix mètres et provoquent un ombrage excessif sur les parcelles mitoyennes. Leur taille demande une approche spécifique : les résineux ne repartent pas sur le vieux bois, ce qui limite les possibilités de réduction.

          Le calendrier d'intervention joue un rôle déterminant. Les feuillus se taillent de préférence en période de repos végétatif, entre novembre et mars, quand la structure de l'arbre est visible et la cicatrisation plus rapide. Les interventions d'été se limitent au bois mort et aux branches à risque. Sur les fruitiers — pommiers, poiriers, cerisiers, courants dans les jardins de Beaucouzé —, la taille de fructification s'effectue en fin d'hiver pour favoriser la mise à fruit.
        `,
        metaDescription: 'Élagage professionnel à Beaucouzé : taille douce des feuillus matures, gestion des conifères en lotissement, entretien des fruitiers sur sol limoneux.',
        highlights: [
          'Taille douce des chênes, érables et tilleuls matures',
          'Gestion des conifères disproportionnés en lotissement',
          'Taille de fructification des pommiers, poiriers et cerisiers',
          'Respect du calendrier de taille selon les essences',
          'Intervention sur arbres proches des clôtures et toitures',
        ],
      },
      'entretien-jardin': {
        content: `
          Dès les premières pluies d'automne, les sols limoneux de Beaucouzé se gorgent d'eau et deviennent lourds. Cette saturation hivernale impose d'adapter le calendrier d'entretien : les tontes cessent plus tôt qu'ailleurs, le passage d'engins est limité pour préserver la structure du sol, et les interventions de fond — scarification, amendements — se concentrent sur le printemps et le début d'automne.

          La pelouse constitue l'élément central de la plupart des jardins de la commune. Sur ces limons fertiles, le gazon pousse vigoureusement au printemps, ce qui implique une fréquence de tonte soutenue d'avril à juin. En été, la croissance ralentit mais le sol peut se fissurer en surface lors d'épisodes secs prolongés. Une aération mécanique au printemps, suivie d'un terreautage léger, améliore la perméabilité et limite ce phénomène de retrait.

          Les haies de thuyas et de lauriers, omniprésentes dans les lotissements, nécessitent deux à trois tailles annuelles pour conserver un aspect soigné. Les haies mixtes — photinias, éléagnus, charmilles — gagnent en popularité et demandent une taille plus nuancée, adaptée au rythme de croissance de chaque essence.

          Le désherbage des massifs et des allées représente un poste d'entretien récurrent. Sur les sols limoneux, les adventices s'enracinent profondément et reviennent vite après un simple arrachage superficiel. Le paillage organique — broyat de branches, écorces, paillettes de lin — reste la méthode la plus efficace pour limiter la repousse tout en nourrissant le sol. Ce paillage se décompose en un à deux ans sur les limons actifs de Beaucouzé et demande un renouvellement régulier.
        `,
        metaDescription: 'Entretien de jardin à Beaucouzé : tonte, taille de haies et désherbage écologique sur sols limoneux fertiles. Rythme saisonnier adapté au terrain local.',
        highlights: [
          'Tonte et aération adaptées aux limons fertiles de Beaucouzé',
          'Taille de haies de thuyas, lauriers et haies mixtes',
          'Paillage organique et désherbage sans produit chimique',
          'Scarification et terreautage saisonnier des pelouses',
          'Entretien des massifs de vivaces et arbustifs',
        ],
      },
      abattage: {
        content: `
          La configuration résidentielle de Beaucouzé, avec ses parcelles mitoyennes et ses rues bordées de végétation, impose des techniques d'abattage adaptées. Le démontage par sections — branche par branche, tronçon par tronçon, avec descente au cordage — reste l'approche la plus courante dans les zones habitées de la commune, où l'abattage direct est rarement envisageable.

          Les arbres concernés sont le plus souvent des conifères devenus disproportionnés — épicéas, pins, cyprès — ou des feuillus en déclin sanitaire. Le chancre coloré du platane, la chalarose du frêne et les champignons lignivores comme le polypore soufré fragilisent certains sujets au point de rendre leur maintien incompatible avec la sécurité des riverains. Un diagnostic visuel et, si nécessaire, un examen au résistographe permettent d'évaluer l'état interne du tronc avant toute décision.

          Le dessouchage sur les limons profonds de Beaucouzé s'effectue à la rogneuse, qui réduit la souche en copeaux sur une profondeur de 30 à 40 centimètres. Ce type de sol, meuble en surface mais parfois compact en profondeur au contact du schiste, nécessite un réglage adapté de la machine. Les copeaux mélangés à la terre de remblai constituent un substrat correct pour un réengazonnement, à condition d'ajouter un apport azoté pour compenser la faim d'azote liée à la décomposition du bois.

          Après l'abattage, le bois valorisable — chêne, frêne, érable — peut être débité en bûches de chauffage. Les rémanents, branchages et houppier, sont broyés sur place ou évacués selon la configuration du chantier et les souhaits du propriétaire.
        `,
        metaDescription: 'Abattage d\'arbres à Beaucouzé : démontage par sections en zone résidentielle, dessouchage sur limons profonds au contact du schiste, broyage sur place.',
        highlights: [
          'Démontage technique par sections en zone résidentielle',
          'Dessouchage à la rogneuse sur sols limoneux profonds',
          'Diagnostic sanitaire avant décision d\'abattage',
          'Valorisation du bois de chauffage (chêne, frêne, érable)',
          'Broyage des rémanents et évacuation sur site',
        ],
      },
    },
  },
  {
    slug: 'bouchemaine',
    name: 'Bouchemaine',
    department: 'Maine-et-Loire',
    postalCode: '49080',
    population: '6 800',
    distance: '8 km',
    geo: { lat: 47.4415, lng: -0.6089 },
    description:
      'Au confluent de la Maine et de la Loire, Bouchemaine offre des paysages exceptionnels et des jardins souvent en bord de rivière.',
    specificContent: `
      Bouchemaine, au confluent de la Maine et de la Loire, jouit d'une situation géographique privilégiée qui en fait l'une des communes les plus prisées de l'agglomération angevine. Les paysages y sont saisissants : depuis les hauteurs du bourg, la vue s'étend sur les méandres de la Loire et les prairies inondables qui changent de visage au fil des saisons. Les propriétés, allant des maisons de maître du XIXe siècle aux villas contemporaines, offrent des jardins de 1 000 à 3 000 m².

      L'eau est à la fois un atout et un défi à Bouchemaine. Dans les zones basses, les sols alluviaux riches mais lourds imposent des choix de végétaux résilients : saules, aulnes, cornouillers sanguins, iris des marais et graminées ornementales. Sur les coteaux du bourg et de la Pointe, les sols schisteux et bien drainés accueillent des espèces méditerranéennes — lavandes, cistes, romarins et oliviers — qui profitent de l'exposition sud.

      Art des Jardins adapte ses interventions au contexte hydraulique et pédologique de chaque parcelle. Pour les jardins en zone inondable, nous privilégions des aménagements résilients : terrasses surélevées, murets de soutènement en pierre naturelle, plantations en buttes et matériaux résistants à l'eau. Sur les coteaux, les plantations étagées subliment les vues sur le fleuve sans les obstruer.

      L'entretien des jardins en bord de rivière suit un rythme saisonnier adapté. Au printemps, nettoyage et apport de compost relancent la végétation après le retrait des eaux. L'été, la proximité de l'eau maintient une fraîcheur qui limite l'arrosage. L'automne est idéal pour les plantations, profitant de l'humidité naturelle du sol.
    `,
    neighborhoods: ['Bourg', 'La Pointe', 'Pruneaux', 'La Basse-Île', 'Pruniers'],
    serviceContent: {
      paysagiste: {
        content: `
          Au confluent de la Maine et de la Loire, le terrain de Bouchemaine impose deux logiques d'aménagement distinctes. Les parcelles basses — Basse-Île, Pruneaux — reposent sur des alluvions riches mais lourdes, gorgées d'eau une partie de l'année. Les coteaux du Bourg et de La Pointe, eux, offrent un sol schisteux bien drainé, sec en été, avec une exposition sud favorable.

          Cette dualité oriente chaque choix de plantation. En zone inondable, les végétaux doivent tolérer des submersions temporaires : cornouillers sanguins, saules, iris des marais, certaines graminées ornementales. Les terrasses surélevées et les murets en pierre naturelle permettent de créer des espaces de vie fonctionnels malgré les contraintes hydrauliques. Sur les hauteurs, le schiste drainé autorise des palettes plus méditerranéennes — lavandes, romarins, cistes — qui tirent parti de la chaleur emmagasinée par la roche.

          Les propriétés de Bouchemaine, souvent vastes (1 000 à 3 000 m²), se prêtent à des compositions paysagères étagées. La topographie naturelle des coteaux crée des plans successifs que les plantations peuvent souligner sans obstruer les vues sur la Loire. Le travail de nivellement reste minimal quand le dessin du jardin épouse le relief existant.

          Le choix des matériaux compte autant que celui des végétaux. Le tuffeau local, la pierre de schiste et le bois s'intègrent mieux au paysage ligérien que les matériaux standardisés. Pour les jardins en pente, des paliers successifs reliés par des escaliers en pierre structurent l'espace tout en gérant naturellement le ruissellement.
        `,
        metaDescription: 'Aménagement paysager à Bouchemaine : sols alluviaux en bord de Loire, coteaux schisteux bien drainés. Conception sur mesure selon le terrain. Devis gratuit.',
        highlights: [
          'Conception adaptée aux zones inondables et aux coteaux',
          'Plantations résilientes pour sols alluviaux humides',
          'Terrasses surélevées et murets en pierre naturelle',
          'Jardins étagés intégrant la topographie des coteaux',
          'Palette végétale méditerranéenne sur sol schisteux drainé',
        ],
      },
      elagage: {
        content: `
          Chênes pédonculés, frênes, saules blancs, aulnes glutineux : le patrimoine arboré de Bouchemaine reflète la diversité de ses milieux. Les essences de ripisylve dominent les parcelles basses le long de la Maine, tandis que les jardins des coteaux abritent des sujets plus ornementaux — cèdres, tilleuls, érables — plantés au fil des décennies par les propriétaires successifs.

          La proximité de l'eau crée des conditions de croissance vigoureuse. Les arbres en fond de vallée développent un volume important en quelques décennies, et leur ramure finit par empiéter sur les toitures, les lignes aériennes ou les propriétés voisines. La taille douce, pratiquée hors période de nidification, permet de contenir ce développement sans compromettre l'équilibre physiologique de l'arbre.

          Sur les coteaux du Bourg et de La Pointe, le sol schisteux superficiel limite l'ancrage racinaire des grands sujets. Les coups de vent remontant la vallée de la Loire exercent une pression mécanique sur des arbres dont l'enracinement reste peu profond. Un éclaircissage régulier de la couronne réduit la prise au vent et diminue le risque de casse ou de déracinement.

          L'élagage en bord de rivière implique des contraintes réglementaires spécifiques. Les zones humides et les berges relèvent souvent de périmètres protégés où les interventions sur la végétation nécessitent une attention particulière au calendrier et aux méthodes. Le diagnostic préalable identifie l'état sanitaire de chaque arbre et les éventuelles pathologies fongiques favorisées par l'humidité ambiante.
        `,
        metaDescription: 'Élagage à Bouchemaine : taille douce des arbres de ripisylve en bord de Maine et Loire, éclaircissage sur coteaux schisteux. Élagueurs qualifiés, devis gratuit.',
        highlights: [
          'Taille douce adaptée aux essences de ripisylve',
          'Éclaircissage des arbres exposés aux vents de vallée',
          'Diagnostic phytosanitaire en milieu humide',
          'Élagage en bord de rivière avec contraintes réglementaires',
          'Sécurisation des arbres sur sol schisteux superficiel',
        ],
      },
      'entretien-jardin': {
        content: `
          Le sol alluvial des parties basses de Bouchemaine, riche en limons et en matière organique, favorise une pousse rapide du gazon et des adventices dès le printemps. La fréquence de tonte y est plus soutenue qu'ailleurs dans l'agglomération, avec un pic entre avril et juin. En contrepartie, ce sol fertile limite le besoin en fertilisation — un simple apport de compost à l'automne suffit généralement à maintenir une pelouse dense.

          L'humidité ambiante liée à la proximité des cours d'eau favorise le développement de la mousse et de certaines maladies fongiques sur les gazons. Le scarifiage de printemps, suivi d'un sursemis des zones clairsemées, reste l'intervention la plus efficace. Sur les coteaux, le problème s'inverse : le sol schisteux sèche vite en été, et les pelouses jaunissent sans arrosage. Le choix de graminées résistantes à la sécheresse — fétuques élevées, ray-grass anglais — conditionne la tenue estivale du gazon.

          Les haies constituent un poste d'entretien important à Bouchemaine. Lauriers, photinias, troènes et charmilles bordent la majorité des propriétés. Deux à trois tailles annuelles maintiennent une silhouette nette. Les haies mixtes, plus fréquentes dans les quartiers anciens, demandent une taille différenciée selon les espèces pour respecter la floraison de chacune.

          Le cycle saisonnier des jardins en zone inondable suit un rythme particulier. Après le retrait des eaux en fin d'hiver, un nettoyage des dépôts et un apport d'amendement relancent la végétation. L'automne est consacré aux plantations, la terre encore chaude et l'humidité naturelle favorisant un enracinement rapide avant l'hiver.
        `,
        metaDescription: 'Entretien de jardin à Bouchemaine : tonte sur sol alluvial fertile, scarifiage anti-mousse, taille de haies. Rythme adapté aux zones inondables et coteaux.',
        highlights: [
          'Tonte régulière sur sol alluvial à pousse rapide',
          'Scarifiage et traitement anti-mousse en milieu humide',
          'Taille de haies persistantes et mixtes, deux à trois fois par an',
          'Nettoyage et remise en état après retrait des crues',
          'Choix de graminées résistantes pour coteaux secs',
        ],
      },
      abattage: {
        content: `
          Les tempêtes hivernales qui remontent la vallée de la Loire mettent régulièrement à l'épreuve les arbres de Bouchemaine. Les rafales canalisées par le couloir fluvial atteignent des vitesses supérieures à celles mesurées sur le plateau angevin, fragilisant les sujets âgés ou mal ancrés. Peupliers en fin de cycle, saules fragilisés par des champignons lignivores, frênes touchés par la chalarose : les motifs d'abattage ne manquent pas dans les quartiers proches de la rivière.

          L'accès aux parcelles en bord de Maine ou de Loire complique souvent les interventions. Chemins étroits, proximité de l'eau, végétation dense autour de l'arbre à abattre : le démontage par sections, avec descente des tronçons au cordage, reste l'approche la plus adaptée. Cette technique protège les structures voisines — clôtures, abris, plantations — et limite l'impact au sol sur des terrains meubles.

          Sur les coteaux du Bourg, la difficulté est différente. Le sol schisteux, peu profond, complique le dessouchage mécanique. La rogneuse de souche doit travailler dans un substrat dur et hétérogène, mêlant roche et racines. Le temps d'intervention est plus long que sur sol meuble, mais le résultat permet une replantation propre après comblement du trou.

          Le bois issu des abattages à Bouchemaine — chêne, frêne, aulne — présente un potentiel de valorisation. Le bois dur peut être débité en bûches de chauffage, les branches broyées en copeaux réutilisables comme paillage. Les rémanents sont systématiquement évacués ou valorisés sur place selon les souhaits du propriétaire.
        `,
        metaDescription: 'Abattage d\'arbres à Bouchemaine : démontage technique en bord de rivière, dessouchage sur sol schisteux et alluvial, valorisation du bois. Devis gratuit.',
        highlights: [
          'Démontage technique en parcelles enclavées près de la rivière',
          'Dessouchage adapté aux sols schisteux et alluviaux',
          'Abattage de peupliers, saules et frênes en fin de cycle',
          'Valorisation du bois en bûches ou paillage',
          'Intervention après tempête en vallée de Loire',
        ],
      },
    },
  },
  {
    slug: 'saint-barthelemy-anjou',
    name: 'Saint-Barthélemy-d\'Anjou',
    department: 'Maine-et-Loire',
    postalCode: '49124',
    population: '9 500',
    distance: '4 km',
    geo: { lat: 47.4687, lng: -0.51 },
    description:
      'Commune de l\'est angevin en plein développement, Saint-Barthélemy-d\'Anjou offre un mix de quartiers résidentiels établis et de programmes immobiliers récents.',
    specificContent: `
      Saint-Barthélemy-d'Anjou, à l'est immédiat d'Angers, connaît depuis plusieurs années un fort développement urbain avec de nombreux programmes immobiliers neufs. Cette dynamique crée une demande importante en aménagement paysager, les nouveaux propriétaires souhaitant transformer leur terrain nu en un véritable jardin de vie. Parallèlement, les quartiers plus anciens du bourg offrent des jardins matures qui nécessitent des travaux de restructuration.

      Les sols barthéloméens sont principalement argilo-schisteux, avec une bonne fertilité mais une tendance au compactage. Ce type de sol nécessite un travail de préparation soigneux avant toute plantation : décompactage, amendement organique et paillage pour maintenir une bonne structure. Pour les pelouses, les mélanges de graminées résistants à la sécheresse s'adaptent bien à ces terrains, avec un semis idéal en septembre.

      Dans les lotissements récents, les parcelles de 300 à 600 m² demandent une conception optimisée : coin repas avec terrasse, espace de jeu, massif d'agrément et potager, le tout agencé pour préserver l'intimité. Art des Jardins élabore des plans d'aménagement qui intègrent circulations, plantations, éléments construits et éclairage extérieur.

      Les haies de séparation sont un sujet récurrent dans la commune. Nous préconisons les haies mixtes composées de photinia, eleagnus, viburnum et charmille, plus résistantes aux maladies qu'une haie monospécifique et offrant un intérêt écologique supérieur en accueillant une faune variée.
    `,
    neighborhoods: ['Bourg', 'Les Music\'Halles', 'La Baumette', 'Les Music\'Halles Nord', 'La Grande Chaussée'],
    serviceContent: {
      paysagiste: {
        content: `
          Le sol argilo-schisteux de Saint-Barthélemy-d'Anjou se travaille différemment selon les saisons. Souple et collant en hiver quand l'argile gorge d'eau, il durcit en surface dès juin et forme une croûte que les racines peinent à traverser. Tout projet de plantation sérieux commence par un décompactage mécanique et un apport de matière organique — compost, fumier décomposé — pour restaurer une structure grumeleuse favorable à l'enracinement.

          Les lotissements récents de la commune livrent des parcelles de 300 à 600 m², souvent plates, avec un terrain décapé par les travaux de construction. La couche de terre végétale résiduelle dépasse rarement vingt centimètres. Avant de dessiner quoi que ce soit — terrasse, massifs, pelouse — un apport de terre criblée sur l'ensemble de la surface s'impose pour reconstituer un horizon cultivable. Les parcelles plus anciennes du Bourg et de La Grande Chaussée présentent des sols nettement plus matures, enrichis par des décennies de jardinage.

          Sur les terrains barthéloméens, les haies mixtes représentent une alternative robuste aux haies monospécifiques. Photinia, eleagnus, viburnum tinus, charmille : la diversité limite la propagation des maladies et crée une structure végétale dense toute l'année. En fond de parcelle, les arbustes à port libre — cornouillers, amélanchiers, viornes — demandent moins de taille et apportent un aspect naturaliste adapté à la transition avec les zones pavillonnaires voisines.

          L'ensoleillement correct de la commune, combiné à la capacité de rétention du sol argileux, convient aux fruitiers palissés — pommiers, poiriers — et aux vivaces de sol frais : géraniums vivaces, heuchères, hostas en zones mi-ombragées.
        `,
        metaDescription: 'Paysagiste à Saint-Barthélemy-d\'Anjou : aménagement de jardins sur sol argilo-schisteux, haies mixtes, massifs adaptés aux lotissements récents et anciens.',
        highlights: [
          'Décompactage et amendement de sol argilo-schisteux avant plantation',
          'Reconstitution de terre végétale sur parcelles de lotissements neufs',
          'Haies mixtes résistantes : photinia, eleagnus, viburnum, charmille',
          'Aménagement optimisé pour parcelles de 300 à 600 m²',
          'Fruitiers palissés et vivaces adaptés au sol de rétention',
        ],
      },
      elagage: {
        content: `
          Érables sycomores, tilleuls à grandes feuilles, chênes pédonculés — les quartiers établis du Bourg et de La Baumette abritent des arbres qui ont pris leur pleine envergure. Plantés lors des premiers lotissements, ces sujets dépassent souvent les douze mètres et leur houppier déborde largement au-dessus des toitures, des clôtures et des lignes de voisinage.

          Sur sol argilo-schisteux, le système racinaire se développe de manière caractéristique. L'argile compacte en surface pousse les racines à s'étaler horizontalement avant de trouver des fissures dans le schiste sous-jacent. Ce profil racinaire étalé rend les arbres sensibles aux vents forts et provoque régulièrement des soulèvements d'allées et de terrasses. La taille douce, en réduisant progressivement la voilure sans coupes sévères, diminue la prise au vent tout en préservant la charpente.

          Les conifères — thuyas, cyprès de Leyland — plantés en haie dans les lotissements des années 1980 et 1990 posent un problème récurrent à Saint-Barthélemy-d'Anjou. Devenus opaques et disproportionnés par rapport aux parcelles, ils créent une ombre dense et acidifient le sol autour d'eux. L'éclaircissage ciblé ou le retrait sélectif de certains sujets, suivi d'une replantation en essences caduques, redonne de la lumière aux jardins concernés.

          Les fruitiers — pommiers, cerisiers, pruniers — restent bien présents dans les jardins anciens de la commune. La taille de fructification, menée entre novembre et février hors gel, maintient un port aéré qui favorise la mise à fruit et limite les foyers de moniliose ou de tavelure.
        `,
        metaDescription: 'Élagage à Saint-Barthélemy-d\'Anjou : taille douce d\'arbres matures sur sol argilo-schisteux, éclaircissage de conifères, taille fruitière. Élagueurs grimpeurs.',
        highlights: [
          'Taille douce des feuillus matures en quartiers résidentiels',
          'Diagnostic racinaire sur sol argilo-schisteux compact',
          'Éclaircissage et retrait sélectif de conifères disproportionnés',
          'Taille de fructification des pommiers, cerisiers et pruniers',
          'Réduction de voilure pour limiter la prise au vent',
        ],
      },
      'entretien-jardin': {
        content: `
          Dès les premières chaleurs de mai, le sol argileux de Saint-Barthélemy-d'Anjou commence à se fissurer en surface. La pelouse jaunit par plaques, la mousse recule mais les adventices à pivot — pissenlits, plantains — profitent des fentes pour s'installer. Ce cycle saisonnier impose un calendrier d'entretien précis : aération mécanique au printemps pour casser la croûte, terreautage au compost tamisé en automne pour nourrir le sol, et relevage de la hauteur de coupe à 7-8 cm en été pour protéger les racines du dessèchement.

          La mousse colonise facilement les zones ombragées et les passages piétinés, là où le sol se tasse le plus. Le pH légèrement acide du substrat schisteux favorise son développement. La scarification mécanique en mars-avril, complétée d'un chaulage modéré, freine cette progression sans traitement chimique. Le résultat est visible dès la reprise végétative de fin avril.

          Les haies représentent un poste d'entretien conséquent dans la commune. Photinias et lauriers-cerises dominent dans les lotissements récents ; charmilles et troènes persistent dans les jardins plus anciens. Deux à trois tailles par an — mai, juillet, septembre — maintiennent un port dense. Les haies de thuyas vieillissantes montrent souvent des zones dégarnies à la base, un défaut irréversible qui oriente vers un remplacement progressif par des essences mixtes.

          Le paillage des massifs avec du broyat de branches joue un rôle central sur ce type de sol : il limite la pousse des adventices, maintient l'humidité en période sèche et se décompose lentement en nourrissant la couche superficielle. Un renouvellement annuel en fin d'hiver suffit à conserver une couverture efficace.
        `,
        metaDescription: 'Entretien de jardin à Saint-Barthélemy-d\'Anjou : tonte et aération sur sol argilo-schisteux compact, scarification anti-mousse, taille de haies et paillage.',
        highlights: [
          'Aération mécanique et terreautage sur sol argilo-schisteux',
          'Scarification et chaulage anti-mousse en terrain acide',
          'Taille de haies deux à trois fois par an selon essences',
          'Paillage au broyat de branches pour massifs et pieds de haie',
          'Tonte adaptée avec hauteur relevée en période sèche',
        ],
      },
      abattage: {
        content: `
          Dans les quartiers pavillonnaires de La Grande Chaussée et des Music'Halles, les parcelles mitoyennes laissent peu d'espace de chute libre. Lorsqu'un arbre doit être retiré — dépérissement, instabilité racinaire, conflit de voisinage — le démontage par sections s'impose dans la majorité des cas. L'élagueur-grimpeur intervient de la cime vers la base, chaque tronçon descendu au cordage pour éviter tout impact sur les clôtures, toitures ou plantations voisines.

          Les peupliers, encore présents en limite de certaines parcelles barthéloméennes, figurent parmi les arbres les plus fréquemment abattus. Après quatre à cinq décennies, leur bois devient cassant, les charpentières se fendent et les branches mortes en cime menacent les habitations proches. Leur système racinaire traçant, particulièrement agressif sur sol argileux, endommage canalisations et fondations à plusieurs mètres du tronc.

          Le dessouchage sur sol argilo-schisteux demande un matériel adapté. La rogneuse travaille correctement dans l'argile meuble, mais les racines qui s'insinuent entre les strates de schiste résistent davantage et nécessitent parfois un complément à la mini-pelle. Le trou d'extraction est comblé de terre végétale amendée, prête à accueillir une replantation ou un engazonnement.

          Les épisodes venteux d'automne et d'hiver fragilisent les arbres à enracinement superficiel, fréquents sur ce type de sol compact. Un diagnostic visuel après tempête permet d'identifier les sujets inclinés ou dont la motte racinaire s'est partiellement soulevée — signes d'un risque de basculement qui justifie un abattage de sécurisation.
        `,
        metaDescription: 'Abattage d\'arbres à Saint-Barthélemy-d\'Anjou : démontage par sections en parcelles mitoyennes, dessouchage sur sol argilo-schisteux, évacuation des rémanents.',
        highlights: [
          'Démontage technique par sections en parcelles mitoyennes',
          'Abattage de peupliers vieillissants et arbres dépérissants',
          'Dessouchage à la rogneuse sur sol argilo-schisteux',
          'Diagnostic post-tempête et abattage de sécurisation',
          'Évacuation des rémanents et valorisation en bois de chauffage',
        ],
      },
    },
  },
  {
    slug: 'trelaze',
    name: 'Trélazé',
    department: 'Maine-et-Loire',
    postalCode: '49800',
    population: '14 000',
    distance: '5 km',
    geo: { lat: 47.4432, lng: -0.5064 },
    description:
      'Ancienne cité ardoisière, Trélazé est une commune dynamique avec un riche patrimoine industriel reconverti et de nombreux jardins à entretenir.',
    specificContent: `
      Trélazé, ancienne capitale de l'ardoise, possède un patrimoine unique en France. Les buttes ardoisières, vestiges de siècles d'exploitation, ont été progressivement reconverties en espaces naturels et de loisirs. Ce passé industriel a façonné les sols et le paysage de manière singulière, créant des conditions de jardinage très spécifiques. La commune conserve aussi une forte tradition de jardins ouvriers et familiaux.

      Les sols trélazéens sont profondément marqués par le schiste ardoisier. Les fragments de schiste dans les couches superficielles confèrent un excellent drainage mais une certaine pauvreté en matière organique. Un travail d'amendement conséquent est nécessaire : compost, fumier décomposé et terre végétale pour enrichir la couche cultivable et améliorer la rétention d'eau.

      Art des Jardins s'inscrit dans la tradition locale en proposant des aménagements qui combinent esthétique et production : carrés potagers surélevés, vergers en espalier, arbres fruitiers nains et massifs de fleurs comestibles. Les murets de schiste typiques de la commune sont intégrés dans nos créations — escaliers, bordures de massifs, rocailles — rappelant l'identité ardoisière tout en apportant un aspect minéral contemporain.

      Les quartiers sont variés : le centre-ville offre des jardins de petite taille, tandis que le Petit Trélazé et la Quantinière disposent de terrains de 800 à 1 200 m². Près des anciennes carrières, les dénivellations offrent des opportunités de jardins en terrasses originaux.
    `,
    neighborhoods: ['Centre-ville', 'Les Music\'Halles', 'Petit Trélazé', 'La Quantinière', 'Les Plaines'],
    serviceContent: {
      paysagiste: {
        content: `
          Le schiste ardoisier qui affleure dans les jardins trélazéens impose ses règles. Drainage naturel excellent, mais sol pauvre en matière organique — chaque projet d'aménagement commence par un diagnostic de la couche cultivable et un plan d'amendement adapté : compost, fumier décomposé, apport de terre végétale sur les zones les plus minérales. Sans ce travail préalable, les plantations peinent à s'installer durablement.

          Les fragments d'ardoise omniprésents dans le sol offrent en revanche un matériau local précieux pour la conception paysagère. Murets de schiste en bordure de massifs, pas japonais taillés dans la pierre locale, rocailles sèches plantées de sedums et de thyms : ces éléments minéraux ancrent visuellement le jardin dans l'identité ardoisière de Trélazé. Le contraste entre la pierre sombre et les feuillages clairs — graminées, hélichryses, santolines — fonctionne particulièrement bien.

          Du côté du Petit Trélazé et de la Quantinière, les parcelles de 800 à 1 200 m² permettent des compositions complètes : terrasse, pelouse, massifs structurés et potager. Le centre-ville, avec ses jardins plus compacts, demande une approche différente — optimisation de chaque mètre carré, jeux de niveaux, végétaux à port colonnaire pour ne pas empiéter sur l'espace de vie.

          À proximité des anciennes carrières, les dénivellations naturelles se prêtent à des aménagements en terrasses étagées. Ces configurations, rares dans l'agglomération angevine, permettent de créer des ambiances distinctes sur un même terrain — un jardin sec en haut, un espace plus frais et ombragé en contrebas.
        `,
        metaDescription: 'Paysagiste à Trélazé — aménagement de jardins sur sol schisteux ardoisier, murets en pierre locale, terrasses étagées et massifs adaptés au terrain angevin.',
        highlights: [
          'Aménagement sur sol schisteux avec amendement adapté',
          'Murets et rocailles en ardoise locale de Trélazé',
          'Jardins en terrasses près des anciennes carrières',
          'Massifs arbustifs résistants aux sols drainants',
          'Conception optimisée pour parcelles de centre-ville',
        ],
      },
      elagage: {
        content: `
          Chênes pédonculés, érables sycomores, tilleuls à grandes feuilles — les lotissements établis de Trélazé abritent des arbres qui ont pris de l'ampleur au fil des décennies. Sur les parcelles de la Quantinière et du Petit Trélazé, ces sujets matures dépassent souvent la hauteur des habitations et réduisent significativement la luminosité des jardins et des pièces de vie orientées nord.

          Le sol schisteux trélazéen influence directement le comportement racinaire. Le schiste fragmenté offre peu de résistance mécanique en profondeur, ce qui pousse certains arbres à développer un enracinement superficiel étalé. Ce phénomène est visible sur les trottoirs et allées soulevés dans plusieurs quartiers. La taille douce, en réduisant progressivement la voilure sans provoquer de repousse vigoureuse, limite la prise au vent et les contraintes sur ces systèmes racinaires fragiles.

          Les conifères — cyprès de Leyland, thuyas, épicéas — plantés massivement dans les années 1980 posent des problèmes spécifiques à Trélazé. Devenus trop grands pour les parcelles qu'ils occupent, ils créent de l'ombre excessive et acidifient un sol déjà pauvre. L'éclaircissage ou le retrait sélectif de ces sujets, remplacés par des essences caduques mieux adaptées, redonne de la lumière et améliore la qualité du sol sur le long terme.

          Les interventions à proximité des buttes ardoisières et des espaces naturels reconvertis demandent une attention particulière aux accès et au voisinage. Le démontage par sections, avec descente contrôlée des branches au cordage, reste la technique privilégiée dans les zones où l'espace au sol est contraint.
        `,
        metaDescription: 'Élagage à Trélazé : taille douce et éclaircissage sur arbres matures en sol schisteux ardoisier, démontage technique de conifères par sections.',
        highlights: [
          'Taille douce adaptée aux enracinements sur schiste',
          'Éclaircissage et retrait sélectif de conifères vieillissants',
          'Démontage technique en parcelles enclavées',
          'Diagnostic phytosanitaire avant intervention',
          'Gestion de la luminosité en quartiers résidentiels',
        ],
      },
      'entretien-jardin': {
        content: `
          Sur sol schisteux, la pelouse se comporte différemment des gazons installés sur argile ou limon. Le drainage rapide empêche la stagnation hivernale — un avantage — mais provoque un stress hydrique précoce dès les premières chaleurs de juin. Les graminées à enracinement profond (fétuques élevées, ray-grass anglais) résistent mieux sur ce type de sol que les mélanges fins classiques. L'apport régulier de matière organique en surface — terreautage au compost tamisé — améliore progressivement la rétention d'eau.

          La mousse, paradoxalement fréquente malgré le bon drainage, s'installe sur les zones ombragées par les arbres matures et les murs. Le pH naturellement acide du schiste favorise son développement. La scarification mécanique au printemps, couplée à un chaulage modéré, freine cette colonisation sans recourir aux traitements chimiques. Le paillage des massifs avec du broyat de branches locales complète l'approche en limitant la pousse des adventices.

          Les haies constituent un poste d'entretien important à Trélazé. Photinias, lauriers-cerises et eleagnus dominent dans les lotissements. Deux à trois tailles annuelles — mai, juillet et septembre — maintiennent un port dense et régulier. Les haies de thuyas vieillissantes, fréquentes dans les quartiers des années 1980, montrent souvent des zones dégarnies à la base ; leur remplacement progressif par des haies mixtes caduques et persistantes offre un meilleur résultat à moyen terme.

          Le ramassage des feuilles en automne prend une dimension particulière dans les rues bordées de tilleuls et d'érables. Le volume de feuilles mortes, s'il n'est pas géré, forme un tapis humide qui asphyxie le gazon et favorise les maladies fongiques.
        `,
        metaDescription: 'Entretien de jardin à Trélazé : tonte et scarification sur sol schisteux acide, taille de haies, désherbage écologique et paillage. Contrat sur mesure.',
        highlights: [
          'Tonte et fertilisation adaptées au sol schisteux drainant',
          'Scarification et chaulage contre la mousse en terrain acide',
          'Taille de haies deux à trois fois par an',
          'Désherbage écologique et paillage au broyat local',
          'Terreautage au compost pour améliorer la rétention d\'eau',
        ],
      },
      abattage: {
        content: `
          Les peupliers d'Italie, plantés en rideaux brise-vent dans les anciennes zones maraîchères de Trélazé, arrivent en fin de cycle. Après quatre à cinq décennies, ces arbres à croissance rapide deviennent cassants — le bois se fragilise, les charpentières se fendent sous l'effet du vent, et les branches mortes en cime constituent un risque pour les habitations proches. Leur retrait fait partie des interventions les plus fréquentes sur la commune.

          L'enracinement superficiel sur schiste complique certains abattages. Les arbres de grande taille dont les racines courent en surface, faute de pouvoir s'ancrer profondément dans la roche, présentent un risque de basculement accentué par les tempêtes. L'abattage directionnel classique n'est pas toujours possible dans les jardins trélazéens ; le démontage par sections, en commençant par la cime, permet de contrôler chaque étape et de protéger les structures environnantes.

          Le dessouchage sur terrain schisteux présente ses particularités. La rogneuse de souche travaille efficacement dans le schiste fragmenté, mais les racines qui se sont faufilées entre les strates de pierre demandent parfois un travail complémentaire à la mini-pelle. Le trou laissé par l'extraction est comblé avec de la terre végétale amendée, prête à recevoir une nouvelle plantation ou un engazonnement.

          Les rémanents d'abattage — branches, tronçons, copeaux — sont systématiquement évacués ou valorisés sur place. Le broyage des branches produit un paillage réutilisable dans les massifs du jardin. Le bois de tronc, s'il est sain, peut être débité en bûches de chauffage et laissé au propriétaire.
        `,
        metaDescription: 'Abattage d\'arbres à Trélazé : démontage technique par sections en zone résidentielle, dessouchage sur sol schisteux, évacuation et valorisation du bois.',
        highlights: [
          'Abattage de peupliers vieillissants et arbres fragilisés',
          'Démontage par sections en parcelles contraintes',
          'Dessouchage adapté au sol schisteux de Trélazé',
          'Broyage sur place et valorisation en paillage',
          'Évacuation complète des rémanents et bois de coupe',
        ],
      },
    },
  },
  {
    slug: 'les-ponts-de-ce',
    name: 'Les Ponts-de-Cé',
    department: 'Maine-et-Loire',
    postalCode: '49130',
    population: '12 500',
    distance: '7 km',
    geo: { lat: 47.4264, lng: -0.5256 },
    description:
      'Ville insulaire sur la Loire, Les Ponts-de-Cé possède un patrimoine remarquable et des jardins au caractère ligérien prononcé.',
    specificContent: `
      Les Ponts-de-Cé, cité insulaire sur la Loire, offre un cadre de vie exceptionnel avec ses îles, ses bras de Loire et son château médiéval dominant le fleuve. La ville s'étend sur plusieurs îles reliées par des ponts historiques, créant une configuration urbaine unique où l'eau est omniprésente et influence profondément la nature des jardins.

      Les sols ponts-de-céais sont typiquement ligériens : sablonneux et filtrants dans les zones basses proches du fleuve, plus argileux et compacts sur les hauteurs de Sorges et Saint-Aubin. Le climat bénéficie de l'effet modérateur de la Loire qui atténue les extrêmes de température, permettant la culture de figuiers, vignes, kiwis et même certains palmiers dans les expositions abritées.

      Art des Jardins connaît parfaitement les différents secteurs de la ville. Le centre historique présente des jardins étroits mais pleins de charme, encadrés par les façades en tuffeau. Saint-Aubin offre des parcelles plus vastes avec vue sur la Loire. À Sorges, les terrains en pente permettent des créations en terrasses originales. En zone inondable, nous sélectionnons des végétaux résistants aux submersions et des matériaux qui résistent à l'immersion.

      Le patrimoine végétal ligérien est remarquable : peupliers noirs, saules blancs, frênes et aulnes forment des ripisylves le long des berges. Les murs anciens en tuffeau créent des microclimats favorables aux fruitiers en espalier et aux plantes grimpantes.
    `,
    neighborhoods: ['Centre', 'Saint-Aubin', 'Saint-Maurille', 'Sorges', 'Belle-Île'],
    serviceContent: {
      paysagiste: {
        content: `
          Entre Loire et bras du fleuve, les jardins des Ponts-de-Cé composent avec l'eau sous toutes ses formes : nappe haute en hiver, sols sablonneux filtrants dans les parties basses, risque de submersion sur Belle-Île et les parcelles riveraines. Cette omniprésence de l'eau oriente chaque choix d'aménagement — sélection végétale, niveau des terrasses, matériaux de revêtement.

          Les hauteurs de Sorges et de Saint-Aubin présentent un tout autre contexte. Les sols y sont argilo-limoneux, plus compacts, avec une rétention d'eau correcte en été. Les parcelles, souvent entre 600 et 1 500 m², se prêtent à des compositions complètes : terrasse, massifs structurés, pelouse d'agrément et potager. Les dénivellations naturelles vers la Loire permettent des aménagements en terrasses qui tirent parti de la pente plutôt que de la subir.

          Le tuffeau, omniprésent dans le bâti ancien du centre et de Saint-Maurille, crée des microclimats précieux. Ces murs clairs accumulent la chaleur diurne et la restituent la nuit, protégeant du gel les fruitiers palissés et les plantes méditerranéennes — figuiers, romarins, lavandes — qui s'installent durablement dans ces expositions abritées. L'effet modérateur de la Loire amplifie ce phénomène : les températures extrêmes restent atténuées par rapport à l'intérieur des terres.

          En zone inondable, la palette végétale s'adapte. Iris des marais, salicaires, carex, cornouillers sanguins et saules arbustifs tolèrent les submersions temporaires sans dommage. Les revêtements perméables — gravier stabilisé, dalles sur plots — résistent mieux aux montées d'eau que les surfaces bétonnées classiques.
        `,
        metaDescription: 'Paysagiste aux Ponts-de-Cé : conception de jardins sur terrain ligérien entre Loire et coteaux, plantations adaptées aux sols sablonneux et zones inondables.',
        highlights: [
          'Aménagement adapté aux sols sablonneux filtrants de bord de Loire',
          'Plantations résistantes aux submersions en zone inondable',
          'Terrasses et murets en tuffeau intégrés au bâti ancien',
          'Jardins en pente sur les coteaux de Sorges et Saint-Aubin',
          'Végétaux méditerranéens en microclimats de murs anciens',
        ],
      },
      elagage: {
        content: `
          Peupliers noirs, saules blancs, frênes communs et aulnes glutineux — la ripisylve des bords de Loire forme aux Ponts-de-Cé un patrimoine arboré dense. Ces essences hygrophiles prospèrent les pieds dans l'eau, mais leur proximité avec les habitations des quartiers riverains pose des questions régulières de cohabitation : branches surplombant les toitures, racines superficielles soulevant les clôtures, ombrage excessif sur les jardins.

          Dans le centre historique et à Saint-Maurille, les arbres d'ornement — tilleuls, marronniers, érables — occupent des espaces aujourd'hui contraints. L'emprise des houppiers dépasse souvent les limites parcellaires. La taille douce, conduite en respectant le port naturel de chaque essence, permet de réduire progressivement le volume sans déclencher les repousses anarchiques que provoque un étêtage brutal.

          Les saules, très présents le long des bras de Loire et sur Belle-Île, exigent un suivi particulier. Leur bois tendre se fend facilement sous l'effet du vent, et les charpentières âgées deviennent cassantes. Un élagage régulier — tous les trois à cinq ans selon les sujets — réduit la prise au vent et allège les branches maîtresses avant qu'elles ne cèdent.

          Le sol sablonneux des zones basses offre un ancrage limité aux grands sujets. Frênes et peupliers de berge développent un enracinement étalé plutôt que profond, ce qui les rend sensibles aux coups de vent lors des tempêtes d'ouest. L'élagage préventif vise à diminuer l'effet voile du houppier et à répartir les contraintes mécaniques sur l'ensemble de la structure.
        `,
        metaDescription: 'Élagage aux Ponts-de-Cé : taille douce sur arbres de ripisylve en bord de Loire, entretien des saules et peupliers, intervention en quartiers anciens.',
        highlights: [
          'Taille douce de peupliers et saules en bord de Loire',
          'Élagage préventif contre le risque de casse par vent d\'ouest',
          'Intervention en centre historique et parcelles contraintes',
          'Entretien des frênes et aulnes de ripisylve',
          'Réduction de houppier respectueuse du port naturel',
        ],
      },
      'entretien-jardin': {
        content: `
          Le cycle des saisons marque les jardins ponts-de-céais plus intensément qu'ailleurs dans l'agglomération. En hiver, la proximité de la Loire maintient une humidité ambiante élevée qui favorise mousses et lichens sur les pelouses ombragées. En été, les sols sablonneux des parties basses perdent leur eau rapidement — le gazon jaunit dès les premières semaines sans pluie, bien avant les jardins installés sur argile.

          Sur les hauteurs de Sorges et Saint-Aubin, le problème s'inverse. Les sols argilo-limoneux se compactent en hiver, retiennent l'eau en surface et deviennent lourds à travailler au printemps. L'aération mécanique suivie d'un sablage léger améliore la structure sur ces parcelles. Le regarnissage avec des fétuques élevées, plus tolérantes à l'ombre des arbres matures, complète le travail sur pelouse.

          Les haies constituent un poste d'entretien conséquent. Lauriers-cerises, photinias et troènes dominent dans les lotissements récents, tandis que les propriétés anciennes conservent des haies champêtres — charmes, noisetiers, aubépines — qui demandent une taille moins fréquente mais plus technique. Deux à trois passages annuels suffisent pour les persistants ; un seul passage hivernal pour les caduques.

          Le ramassage des feuilles à l'automne prend une ampleur particulière à proximité de la Loire. Peupliers et saules produisent un feuillage abondant qui, laissé au sol, forme un tapis humide propice aux maladies fongiques du gazon. Le broyage de ces feuilles et leur réutilisation en paillage dans les massifs constitue une valorisation simple et efficace.
        `,
        metaDescription: 'Entretien de jardin aux Ponts-de-Cé : tonte et scarification sur sols sablonneux et argileux, lutte contre la mousse en climat humide ligérien, taille de haies.',
        highlights: [
          'Tonte et fertilisation adaptées aux sols sablonneux de bord de Loire',
          'Aération mécanique sur terrain argilo-limoneux compact',
          'Traitement écologique de la mousse en milieu humide ligérien',
          'Taille de haies persistantes et champêtres',
          'Ramassage et broyage des feuilles de ripisylve en automne',
        ],
      },
      abattage: {
        content: `
          Les tempêtes d'ouest qui remontent la vallée de la Loire frappent Les Ponts-de-Cé avec une intensité particulière. La configuration insulaire de la commune, sans relief pour briser le vent, expose les arbres de grande taille à des contraintes mécaniques répétées. Peupliers noirs de berge, saules blancs âgés et frênes fragilisés par la chalarose figurent parmi les sujets les plus fréquemment concernés par un abattage.

          L'accès aux arbres en centre-ville et sur les îles pose des contraintes spécifiques. Rues étroites, façades en tuffeau à préserver, lignes électriques basses, proximité immédiate de la Loire — l'abattage directionnel classique est rarement envisageable. Le démontage par sections, avec rétention au cordage et descente contrôlée de chaque tronçon, reste la technique la plus adaptée à ce tissu urbain dense.

          En zone inondable — Belle-Île, berges, bras secondaires — le calendrier d'intervention tient compte du niveau du fleuve. Les périodes de basses eaux, entre juin et octobre, offrent les meilleures conditions d'accès et de stabilité du sol pour les engins. L'hiver, les terrains gorgés d'eau ne supportent pas le passage de machines lourdes sans risque d'ornièrage profond.

          Le dessouchage en terrain sablonneux se réalise bien à la rogneuse — le sable oppose peu de résistance aux dents de l'outil. Les racines des espèces riveraines, saules et aulnes notamment, s'étendent loin du tronc et nécessitent parfois un travail complémentaire pour dégager les ancrages principaux. Le trou est comblé avec de la terre végétale amendée.
        `,
        metaDescription: 'Abattage d\'arbres aux Ponts-de-Cé : démontage technique par sections en zone insulaire, calendrier adapté aux crues de Loire, dessouchage en sol sablonneux.',
        highlights: [
          'Abattage de peupliers et saules fragilisés en bord de Loire',
          'Démontage par sections dans les rues étroites du centre',
          'Calendrier d\'intervention adapté au niveau du fleuve',
          'Dessouchage à la rogneuse en terrain sablonneux',
          'Évacuation et valorisation des rémanents en bois et paillage',
        ],
      },
    },
  },
  {
    slug: 'ecouflant',
    name: 'Écouflant',
    department: 'Maine-et-Loire',
    postalCode: '49000',
    population: '4 500',
    distance: '6 km',
    geo: { lat: 47.513, lng: -0.5362 },
    description:
      'Commune au nord d\'Angers entre Sarthe et basses vallées angevines, Écouflant offre un cadre naturel préservé avec de beaux jardins résidentiels.',
    specificContent: `
      Écouflant, nichée entre la Sarthe et les basses vallées angevines, bénéficie d'un environnement naturel exceptionnel classé Natura 2000. Les prairies inondables, qui accueillent chaque hiver des milliers d'oiseaux migrateurs, constituent un paysage unique qui influence l'identité des jardins écouflantais. Les propriétés sont souvent généreuses, avec des terrains de 800 à 2 000 m².

      Les sols varient considérablement selon la distance à la Sarthe. En zone basse, les alluvions riches sont extrêmement fertiles mais soumises aux remontées de nappe en hiver. Sur les hauteurs du bourg et vers Éventard, les sols sablo-limoneux sont bien drainés et faciles à travailler. Le choix des végétaux et des techniques de plantation est adapté au contexte pédologique de chaque parcelle.

      Le caractère naturel de l'environnement inspire nos créations paysagères. Nous privilégions des aménagements qui s'intègrent dans ce cadre préservé : haies champêtres mêlant noisetiers, prunelliers et viornes, prairies fleuries d'espèces locales, bosquets d'essences indigènes et mares naturelles qui accueillent batraciens et libellules.

      Art des Jardins intervient à Écouflant pour des projets variés : création de jardins complets, restructuration de jardins anciens, et interventions sur les nombreux arbres de haute tige qui caractérisent la commune. Les peupliers, saules et frênes des bords de Sarthe font partie du patrimoine végétal local que nous contribuons à entretenir.
    `,
    neighborhoods: ['Bourg', 'Basse-Île', 'Éventard', 'Le Grésillé', 'La Sarthe'],
    serviceContent: {
      paysagiste: {
        content: `
          Les alluvions déposées par la Sarthe ont façonné deux profils de sol distincts à Écouflant. En partie basse — Basse-Île, bords de rivière — la terre limoneuse, riche en matière organique, se gorge d'eau dès l'automne et reste fraîche tard au printemps. Sur les hauteurs du bourg et vers Éventard, le sol sablo-limoneux se ressuie vite et se travaille sans difficulté. Toute conception paysagère sur la commune doit intégrer cette dualité dès le plan de plantation.

          Les terrains résidentiels, souvent compris entre 800 et 2 000 m², laissent la place à des aménagements structurés en plusieurs séquences : une zone de vie proche de l'habitation, des massifs arbustifs en transition, et un fond de jardin plus naturel qui prolonge visuellement le paysage des basses vallées angevines. Cette profondeur de parcelle est un atout rare dans l'agglomération.

          Le classement Natura 2000 des prairies inondables voisines oriente le choix des végétaux vers des essences locales et des compositions à faible entretien. Haies champêtres mêlant cornouillers, viornes et prunelliers, prairies fleuries de graminées indigènes, bosquets de chênes et de charmes — ces éléments s'intègrent dans le paysage environnant sans rupture de registre. Les espèces horticoles trouvent leur place en zone de vie, mais le fond de parcelle gagne à rester dans un vocabulaire végétal ligérien.

          Les parcelles en zone inondable demandent une attention particulière : matériaux de terrasse résistant à l'immersion, plantations sur buttes drainantes, choix de végétaux tolérant les submersions temporaires — saules, aulnes, iris des marais. Le dessin du jardin intègre la montée des eaux comme une donnée, pas comme une contrainte à combattre.
        `,
        metaDescription: 'Paysagiste à Écouflant — sols alluviaux en bord de Sarthe, sablo-limoneux sur les hauteurs, plantations adaptées au contexte Natura 2000 des basses vallées.',
        highlights: [
          'Conception sur double profil de sol — alluvial en zone basse, sablo-limoneux en hauteur',
          'Plantations d\'essences indigènes en continuité des basses vallées angevines',
          'Terrasses et matériaux résistant aux submersions en zone inondable',
          'Haies champêtres de cornouillers, viornes et prunelliers',
          'Aménagement de grandes parcelles résidentielles de 800 à 2 000 m²',
        ],
      },
      elagage: {
        content: `
          Peupliers noirs, saules blancs, frênes communs, aulnes glutineux — les abords de la Sarthe à Écouflant abritent une ripisylve dense dont les sujets atteignent couramment 15 à 25 mètres. Ces essences de bord d'eau poussent vite, produisent un bois tendre et cassant, et développent des charpentes larges qui empiètent sur les propriétés riveraines. L'élagage régulier de ces arbres relève autant de la sécurité que de la gestion du patrimoine végétal local.

          Sur les parcelles résidentielles du bourg et d'Éventard, le patrimoine arboré est plus classique : chênes, érables, tilleuls, quelques résineux plantés dans les années 1970-1980. Ces sujets, parvenus à maturité, nécessitent des interventions d'éclaircissage pour maintenir la pénétration de lumière au jardin et réduire la prise au vent. La taille douce — suppression du bois mort, des branches mal orientées et des gourmands — préserve l'architecture naturelle de l'arbre sans provoquer de repousses anarchiques.

          Le sol alluvial en zone basse favorise un enracinement superficiel, surtout chez les peupliers et les saules. Cette particularité augmente la vulnérabilité au chablis lors des tempêtes hivernales. Un diagnostic d'ancrage, visuel et mécanique, permet d'évaluer la stabilité réelle d'un arbre avant de décider entre taille de réduction, haubanage ou abattage préventif.

          Les frênes de la commune méritent une surveillance phytosanitaire particulière. La chalarose du frêne, maladie fongique en progression dans le Val de Loire, provoque le dessèchement progressif du houppier. Les sujets atteints nécessitent une taille sanitaire régulière pour éliminer le bois mort et ralentir la propagation. Les cas les plus avancés imposent l'abattage.
        `,
        metaDescription: 'Élagage à Écouflant — taille douce des peupliers, saules et frênes en bord de Sarthe, diagnostic d\'ancrage sur sol alluvial, surveillance de la chalarose.',
        highlights: [
          'Taille douce des peupliers, saules et frênes en bord de Sarthe',
          'Éclaircissage des arbres matures en quartiers résidentiels',
          'Diagnostic d\'ancrage sur sol alluvial à enracinement superficiel',
          'Surveillance phytosanitaire de la chalarose du frêne',
          'Taille de réduction et haubanage préventif avant tempêtes',
        ],
      },
      'entretien-jardin': {
        content: `
          La montée des eaux hivernale dans les basses vallées modifie profondément le calendrier d'entretien des jardins situés en zone basse d'Écouflant. Les pelouses immergées pendant plusieurs semaines ressortent au printemps couvertes de limon et de débris végétaux. Le nettoyage, le scarifiage et le réensemencement des zones clairsemées constituent le premier chantier de la saison avant toute reprise de tonte régulière.

          Sur les hauteurs du bourg, les gazons installés sur sol sablo-limoneux se comportent différemment : le drainage rapide limite la mousse mais accélère le dessèchement estival. Une tonte à hauteur relevée — 7 à 8 cm en été — et un apport de compost en surface maintiennent l'humidité dans les premiers centimètres du sol. Le mulching, qui restitue les résidus de tonte, complète ce cycle de fertilisation naturelle.

          Les haies champêtres, nombreuses sur la commune, demandent un entretien adapté à leur composition mixte. Cornouillers, viornes, prunelliers, noisetiers : chaque essence a son rythme de croissance et son calendrier de taille. Une haie champêtre ne se conduit pas comme une haie monospécifique de thuyas — elle se taille plus légèrement, en préservant les rameaux à fruits qui nourrissent l'avifaune locale.

          Les massifs et sous-bois bénéficient d'un paillage organique épais — broyat de branches, feuilles mortes compostées — qui reproduit le couvert naturel des boisements voisins. Ce paillage limite le désherbage, maintient la fraîcheur du sol et nourrit progressivement la terre par décomposition. Sur les parcelles proches de la Sarthe, le contrôle des espèces invasives — renouée du Japon, balsamine de l'Himalaya — fait partie de l'entretien courant.
        `,
        metaDescription: 'Entretien de jardin à Écouflant — scarifiage post-crue en zone inondable, tonte sur sol sablo-limoneux, taille de haies champêtres et paillage organique.',
        highlights: [
          'Scarifiage et réensemencement post-crue en zone inondable',
          'Tonte adaptée et mulching sur sol sablo-limoneux bien drainé',
          'Taille de haies champêtres mixtes selon calendrier par essence',
          'Paillage organique et contrôle des espèces invasives en bord de Sarthe',
        ],
      },
      abattage: {
        content: `
          Les parcelles de Basse-Île et des bords de Sarthe présentent des contraintes d'accès qui conditionnent toute opération d'abattage à Écouflant. Chemins étroits, sols meubles en période humide, proximité immédiate de la rivière — l'acheminement d'engins lourds n'est pas toujours possible. Le démontage par sections, avec descente des tronçons au cordage, reste la technique la plus employée sur ces parcelles riveraines.

          Les peupliers constituent la première cause d'abattage sur la commune. Essences à croissance rapide mais à bois fragile, ils atteignent des dimensions considérables en quelques décennies avant de devenir cassants et instables. Les signes de dépérissement — branches sommitales sèches, cavités au collet, champignons lignivores sur le tronc — indiquent un affaiblissement structurel qui justifie le retrait de l'arbre. Les saules blancs, soumis aux mêmes pathologies, suivent un cycle similaire.

          Le dessouchage en sol alluvial diffère sensiblement du travail sur argile ou sur schiste. La terre meuble facilite le passage de la rogneuse, mais l'humidité du sol en zone basse peut compliquer l'intervention en dehors de la période estivale. Le trou laissé par la souche se comble avec un mélange de terre végétale et de compost, permettant une replantation rapide si souhaité.

          Les frênes touchés par la chalarose représentent un volume croissant d'abattages dans le secteur. Quand la maladie a colonisé plus de la moitié du houppier, l'abattage devient la seule option réaliste. Le bois de frêne chamarosé ne présente pas de risque sanitaire une fois abattu, mais les rémanents se broient ou s'évacuent pour limiter la dissémination des spores dans l'environnement immédiat.
        `,
        metaDescription: 'Abattage d\'arbres à Écouflant — démontage par sections sur parcelles riveraines de la Sarthe, retrait de peupliers et frênes chamarosés, dessouchage alluvial.',
        highlights: [
          'Démontage par sections sur parcelles riveraines à accès restreint',
          'Retrait de peupliers fragilisés et sujets à bois cassant',
          'Abattage de frênes atteints de chalarose',
          'Dessouchage à la rogneuse en sol alluvial meuble',
          'Broyage et évacuation des rémanents en zone sensible Natura 2000',
        ],
      },
    },
  },
  {
    slug: 'cantenay-epinard',
    name: 'Cantenay-Épinard',
    department: 'Maine-et-Loire',
    postalCode: '49460',
    population: '2 400',
    distance: '10 km',
    geo: { lat: 47.532, lng: -0.5527 },
    description:
      'Village rural au nord d\'Angers, Cantenay-Épinard conserve un caractère authentique avec ses fermes rénovées et leurs grands jardins bordant les basses vallées angevines.',
    specificContent: `
      Cantenay-Épinard, commune rurale au nord d'Angers, a su conserver un caractère authentique qui attire les amoureux de la campagne angevine. Ses deux bourgs historiques présentent un patrimoine bâti remarquable avec de nombreuses fermes en tuffeau et longères rénovées. Les grands terrains offrent des opportunités exceptionnelles de création paysagère. La commune est bordée par les basses vallées angevines, classées Natura 2000, dont les prairies humides créent un paysage d'une grande beauté.

      Les sols présentent une diversité intéressante. Dans les parties hautes, les terres limoneuses profondes offrent d'excellentes conditions pour les plantations. En descendant vers les vallées, les sols deviennent plus humides et argileux, orientant le choix vers des espèces de zone humide. Cette variation permet aussi bien de planter un verger en altitude que d'aménager un jardin d'eau en fond de vallon.

      Art des Jardins conçoit ici des projets respectueux du caractère rural : remise en état des allées en graviers, taille de restauration des arbres centenaires, création de potagers et de vergers dans l'esprit des jardins de curé angevins. Le bocage environnant inspire nos aménagements avec des haies champêtres traditionnelles composées de chênes têtards, frênes, noisetiers et aubépines.

      De nombreuses propriétés possèdent des arbres remarquables — chênes centenaires, cèdres du Liban, séquoias, tilleuls argentés — qui constituent un patrimoine végétal précieux. Les haies champêtres, que nous encourageons à maintenir et enrichir, structurent le territoire et abritent une faune diverse.
    `,
    neighborhoods: ['Cantenay', 'Épinard', 'Le Bourg', 'Les Basses-Vallées'],
    serviceContent: {
      paysagiste: {
        content: `
          Les basses vallées angevines, classées Natura 2000, bordent la commune et imposent leur logique à tout projet d'aménagement. Les prairies inondables en contrebas, les haies bocagères et les grands arbres isolés composent un paysage qu'il serait contre-productif d'ignorer. Un jardin à Cantenay-Épinard fonctionne quand il prolonge ce cadre rural au lieu de s'en distinguer.

          La dualité des sols oriente les choix de plantation. Sur les parties hautes — autour des bourgs de Cantenay et d'Épinard —, les limons profonds acceptent une palette large : fruitiers, rosiers, vivaces, graminées ornementales. En descendant vers les vallées, l'argile hydromorphe restreint les options aux essences de zone humide : saules, cornouillers, iris des marais, carex. Ignorer cette transition conduit à des échecs d'enracinement en bas de parcelle.

          Les propriétés rurales de la commune — fermes en tuffeau, longères rénovées — disposent de terrains généreux. Cette surface permet de structurer des espaces distincts : potager clos dans l'esprit des jardins de curé angevins, verger haute-tige avec variétés locales, prairie fleurie en fond de parcelle. Les murets existants en tuffeau et les allées en gravier servent de trame à conserver et à prolonger.

          Le bocage environnant fournit un vocabulaire végétal cohérent. Haies champêtres de chênes, frênes, noisetiers et aubépines, bosquets d'essences indigènes, mares naturelles — ces éléments s'intègrent aux aménagements sans rupture avec le paysage. Sur les parcelles exposées au vent du nord, la plantation de haies brise-vent en quinconce protège les zones de vie extérieures.
        `,
        metaDescription: 'Paysagiste à Cantenay-Épinard : aménagement de jardins ruraux sur sols limoneux et argileux, haies bocagères, potagers et vergers adaptés aux basses vallées.',
        highlights: [
          'Aménagement adapté à la dualité sol limoneux / argile hydromorphe',
          'Haies champêtres bocagères (chênes, frênes, noisetiers, aubépines)',
          'Potagers et vergers dans l\'esprit des jardins de curé angevins',
          'Plantations de zone humide en bordure des basses vallées',
          'Valorisation des murets en tuffeau et allées en gravier existants',
        ],
      },
      elagage: {
        content: `
          Chênes centenaires, tilleuls argentés, cèdres du Liban, séquoias — les propriétés rurales de Cantenay-Épinard abritent des arbres remarquables dont l'envergure dépasse souvent quinze mètres. Ces sujets anciens, plantés à une époque où les parcelles n'avaient pas les mêmes usages, nécessitent un suivi régulier pour concilier leur préservation avec la sécurité des bâtiments et des personnes.

          La taille douce s'impose sur ces arbres patrimoniaux. Supprimer le bois mort, alléger les branches basses, éclaircir la ramure pour laisser passer la lumière — chaque coupe se raisonne en fonction de l'architecture naturelle du sujet. Les chênes têtards du bocage environnant, héritage de la gestion paysanne traditionnelle, demandent une taille de restauration spécifique pour maintenir leur silhouette caractéristique sans compromettre leur vigueur.

          Le long des basses vallées, les peupliers, frênes et saules blancs composent la ripisylve. La chalarose du frêne, maladie fongique qui progresse en Maine-et-Loire, fragilise les frênes communs et nécessite une surveillance attentive : dessèchement du houppier, nécroses sur l'écorce, chute de branches sans signal préalable. Les sujets atteints demandent soit un élagage sanitaire ciblé, soit un abattage quand la structure est compromise.

          Sur les sols limoneux des parties hautes, l'enracinement profond des grands feuillus offre un ancrage solide. En revanche, sur les argiles de fond de vallée, les systèmes racinaires restent plus superficiels. Cette distinction conditionne le type d'intervention : un arbre bien ancré supporte un allègement plus important qu'un sujet dont la stabilité dépend d'un équilibre fragile entre houppier et racines.
        `,
        metaDescription: 'Élagage à Cantenay-Épinard : taille douce d\'arbres remarquables, restauration des chênes têtards du bocage, surveillance chalarose des frênes en vallée.',
        highlights: [
          'Taille douce d\'arbres remarquables (chênes centenaires, cèdres, tilleuls)',
          'Restauration des chênes têtards du bocage angevin',
          'Surveillance et élagage sanitaire des frênes touchés par la chalarose',
          'Éclaircissage des grands feuillus en propriétés rurales',
          'Intervention adaptée selon l\'ancrage racinaire (limon ou argile)',
        ],
      },
      'entretien-jardin': {
        content: `
          Les crues hivernales des basses vallées et le ruissellement des coteaux rythment l'entretien des jardins à Cantenay-Épinard. De novembre à mars, les parcelles basses restent gorgées d'eau ; toute intervention mécanique — tonte, scarification, passage d'engins — abîmerait la structure du sol. Le calendrier d'entretien se décale donc par rapport aux communes mieux drainées de l'agglomération.

          Sur les limons des parties hautes, la pelouse pousse vigoureusement au printemps et nécessite une tonte hebdomadaire d'avril à juin. La hauteur de coupe se maintient à 7-8 cm en été pour protéger les racines du dessèchement. La mousse, favorisée par l'ombre des grands arbres et l'humidité ambiante, colonise les zones peu exposées au soleil. Une scarification au printemps suivie d'un réensemencement ciblé limite cette progression.

          Les haies bocagères qui structurent les propriétés rurales demandent un entretien distinct des haies ornementales. Composées de chênes, frênes, noisetiers et aubépines, elles se taillent une fois par an en fin d'hiver, en préservant les branches fructifères qui nourrissent la faune locale. Ce rythme diffère des persistants — lauriers, photinias — qui exigent deux passages annuels.

          Les grands terrains caractéristiques de la commune posent la question de la gestion différenciée. Tondre l'intégralité d'une parcelle de 2 000 m² est coûteux et écologiquement discutable. La fauche tardive en fond de parcelle, combinée à un gazon entretenu près de la maison, réduit la fréquence d'intervention tout en favorisant la biodiversité — cohérent avec le classement Natura 2000 voisin.
        `,
        metaDescription: 'Entretien de jardin à Cantenay-Épinard : tonte sur sol limoneux, taille de haies bocagères, fauche et gestion différenciée des grands terrains ruraux.',
        highlights: [
          'Calendrier d\'entretien adapté aux crues hivernales des basses vallées',
          'Tonte et scarification sur sols limoneux en parties hautes',
          'Taille annuelle des haies bocagères (chênes, noisetiers, aubépines)',
          'Gestion différenciée tonte/fauche sur grands terrains ruraux',
          'Traitement anti-mousse en zones ombragées par les grands arbres',
        ],
      },
      abattage: {
        content: `
          Les longères et fermes en tuffeau de Cantenay-Épinard sont souvent implantées à proximité immédiate d'arbres de grand développement. Quand un chêne centenaire menace une toiture ou qu'un peuplier déraciné penche vers une dépendance, le démontage par sections s'impose. L'élagueur-grimpeur descend chaque tronçon au cordage pour éviter tout impact sur les bâtiments en pierre, dont la fragilité aux chocs ne pardonne pas.

          Les frênes constituent une part croissante des demandes d'abattage sur la commune. La chalarose, maladie fongique qui nécrose le bois et provoque des ruptures de branches imprévisibles, touche de nombreux sujets le long des vallées et dans les haies bocagères. Un frêne atteint à plus de 50 % de son houppier ne récupère généralement pas ; son retrait évite les chutes de branches sur les chemins et les clôtures.

          Le dessouchage varie selon la localisation sur la commune. Sur les limons profonds des hauteurs, la rogneuse travaille efficacement et permet un réengazonnement rapide. Sur les argiles lourdes de fond de vallée, la machine peine davantage et le trou de dessouchage se remplit d'eau en hiver. Dans ce cas, un comblement avec un mélange drainant — graviers, terre végétale, compost — prépare le terrain avant toute replantation.

          Les tempêtes d'ouest, fréquentes dans le couloir des basses vallées, exposent les arbres à des rafales soutenues. Peupliers et saules, essences à bois tendre et croissance rapide, sont les premiers touchés. Après un épisode venteux, les branches cassées en hauteur restent parfois suspendues dans le houppier — un risque qu'un diagnostic visuel permet d'identifier avant qu'elles ne tombent.
        `,
        metaDescription: 'Abattage d\'arbres à Cantenay-Épinard : démontage par sections près des bâtiments en tuffeau, retrait de frênes chalarosés, dessouchage sur sol argileux.',
        highlights: [
          'Démontage par sections à proximité des bâtiments en tuffeau',
          'Retrait des frênes atteints de chalarose le long des vallées',
          'Dessouchage adapté selon le sol (limon en hauteur, argile en vallée)',
          'Diagnostic post-tempête des arbres exposés au couloir de vent',
          'Broyage et valorisation des rémanents sur place',
        ],
      },
    },
  },
  {
    slug: 'murs-erigne',
    name: 'Mûrs-Érigné',
    department: 'Maine-et-Loire',
    postalCode: '49610',
    population: '5 500',
    distance: '10 km',
    geo: { lat: 47.3985, lng: -0.562 },
    description:
      'Commune viticole au sud-ouest d\'Angers, Mûrs-Érigné est appréciée pour son cadre de vie entre vignes et Loire, avec un microclimat favorable aux jardins.',
    specificContent: `
      Mûrs-Érigné, commune viticole des coteaux de Loire, offre un cadre de vie privilégié entre vignobles réputés et fleuve royal. L'appellation Coteaux-du-Layon commence ici, et cette tradition viticole séculaire a façonné le paysage : coteaux exposés plein sud, murets de schiste retenant la chaleur, chemins creux bordés de végétation spontanée. Cet environnement unique inspire des jardins de caractère qui puisent dans le terroir local.

      Le microclimat est l'un des plus favorables de l'agglomération angevine. L'exposition sud-ouest des coteaux et la réflexion de la chaleur par le fleuve créent des conditions quasi-méditerranéennes. Les sols sont majoritairement schisteux et bien drainés sur les coteaux, avec une couche arable mince. En bas de pente, les sols deviennent plus profonds et riches, mêlant sables, limons et argiles. Ce microclimat permet la culture d'oliviers, figuiers, lauriers-roses et grenadiers.

      Art des Jardins conçoit sur les coteaux des jardins en terrasses avec murets de schiste local qui retiennent la terre, stabilisent la pente et créent des microclimats favorables. Les propriétés — maisons de vignerons, longères en tuffeau, belles demeures — méritent un écrin végétal à la hauteur : rosiers grimpants, massifs d'aromatiques, haies topiaires et allées en gravier naturel rappelant les chemins viticoles.

      L'entretien des jardins de coteaux présente des contraintes spécifiques : la pente rend la tonte complexe et l'érosion menace les sols mal protégés. Le paillage systématique, l'engazonnement des talus résistant à la sécheresse et les couvre-sols persistants stabilisent le terrain tout en réduisant l'entretien.
    `,
    neighborhoods: ['Mûrs', 'Érigné', 'Les Coteaux', 'La Plaine', 'Le Bourg'],
    serviceContent: {
      paysagiste: {
        content: `
          Les sols schisteux des coteaux de Mûrs-Érigné imposent d'emblée une contrainte : la couche arable est mince, souvent 20 à 30 cm avant d'atteindre la roche fragmentée. Toute plantation d'envergure — arbre d'ornement, haie structurante, massif arbustif — passe par un travail de fosse élargie et d'apport de terre végétale mélangée au schiste concassé pour maintenir le drainage naturel du terrain.

          L'exposition sud-ouest des coteaux et la proximité de la Loire créent un microclimat sensiblement plus doux que dans le reste de l'agglomération angevine. Figuiers, oliviers, grenadiers et lauriers-roses s'y développent dans des conditions inhabituelles pour le Maine-et-Loire. Ce potentiel végétal élargi permet des compositions d'inspiration méditerranéenne — massifs de lavandes, romarins et sauges associés à des graminées ornementales — qui trouvent ici un terrain favorable sans irrigation excessive.

          Les propriétés du secteur des Coteaux et du bourg de Mûrs présentent souvent des dénivelés marqués. Les jardins en terrasses, soutenus par des murets en schiste local, restent la solution la plus cohérente avec le paysage viticole environnant. Ces murets accumulent la chaleur diurne et la restituent le soir, créant des microclimats de pied de mur propices aux fruitiers palissés et aux plantes grimpantes.

          Dans la plaine d'Érigné, les sols changent de nature : plus profonds, sablo-limoneux, ils se prêtent à des aménagements différents. Pelouses, potagers et vergers s'y installent sans difficulté particulière. La transition entre coteau et plaine offre aux parcelles les plus vastes une diversité de conditions rarement réunie sur une même commune.
        `,
        metaDescription: 'Paysagiste à Mûrs-Érigné : création de jardins en terrasses sur coteaux schisteux, plantations méditerranéennes adaptées et murets en schiste local.',
        highlights: [
          'Jardins en terrasses sur coteaux schisteux avec murets locaux',
          'Plantations méditerranéennes adaptées au microclimat ligérien',
          'Fosses de plantation élargies sur sol à couche arable mince',
          'Massifs de lavandes, romarins et graminées ornementales',
          'Aménagement différencié coteau / plaine selon la parcelle',
        ],
      },
      elagage: {
        content: `
          Chênes pubescents, pins maritimes, cèdres et tilleuls argentés composent l'essentiel du patrimoine arboré des propriétés de Mûrs-Érigné. Sur les coteaux, ces arbres se sont adaptés au sol schisteux en développant des systèmes racinaires étendus en surface, ancrés dans les fissures de la roche. Cette configuration rend leur houppier sensible au vent d'ouest qui remonte la vallée de la Loire, et les branches mortes ou mal équilibrées représentent un risque réel en période de tempête.

          La taille douce — suppression du bois mort, éclaircissage de la ramure, réduction mesurée des branches basses — préserve la silhouette naturelle de l'arbre tout en limitant la prise au vent. Sur les sujets installés en haut de coteau, où l'exposition est maximale, un allègement régulier de la couronne réduit l'effet de levier sans recourir à un étêtage destructeur.

          Les vignes abandonnées et les friches reconquises par la végétation spontanée abritent des arbres qui ont poussé sans contrainte ni taille. Robiniers, érables champêtres et frênes y forment parfois des houppiers déséquilibrés ou des fourches à écorce incluse, points de faiblesse structurelle qu'un diagnostic visuel permet d'identifier. La taille corrective sur ces sujets semi-sauvages demande une lecture attentive de l'architecture de chaque arbre.

          Les fruitiers — figuiers, cerisiers, pruniers — sont fréquents dans les jardins de la commune. Leur taille de fructification s'effectue en hiver hors gel pour les arbres à pépins, en fin d'été pour les arbres à noyaux. Le figuier, particulièrement vigoureux sous ce microclimat, nécessite une taille de contention annuelle pour maintenir un port accessible à la récolte.
        `,
        metaDescription: 'Élagage à Mûrs-Érigné : taille douce des arbres de coteaux ventés, diagnostic sur enracinement schisteux, taille de fructification des figuiers.',
        highlights: [
          'Taille douce et éclaircissage sur arbres exposés au vent de Loire',
          'Diagnostic structurel sur enracinement schisteux superficiel',
          'Taille corrective des arbres issus de friches viticoles',
          'Taille de fructification des figuiers et fruitiers de coteau',
          'Allègement de couronne adapté aux sujets de haut de coteau',
        ],
      },
      'entretien-jardin': {
        content: `
          Sur les coteaux schisteux, la pelouse se comporte différemment que sur les sols profonds de la plaine. Le drainage rapide du schiste provoque un dessèchement estival précoce, dès la mi-juin certaines années. Relever la hauteur de coupe à 8 cm et espacer les tontes en été préserve le système racinaire. Les fétuques élevées et le ray-grass anglais résistent mieux à ces conditions que les variétés classiques de gazon d'ornement.

          Le désherbage des allées et terrasses en schiste local constitue un poste récurrent. Les joints entre les pierres et les murets offrent des niches idéales aux adventices — sédum spontané, valériane, cymbalaire — dont certaines participent au charme du jardin. La gestion raisonnée consiste à maintenir les espèces décoratives et à éliminer mécaniquement celles qui fragilisent les structures.

          Dans la plaine d'Érigné, les sols sablo-limoneux posent des problèmes inverses : rétention d'eau insuffisante en été, pousse vigoureuse au printemps qui impose une tonte hebdomadaire d'avril à juin. Le paillage organique des massifs — broyat de branches, écorces de pin — limite l'évaporation et nourrit progressivement le sol. Les haies de photinias et de lauriers, fréquentes dans les lotissements du secteur, se taillent deux fois par an pour conserver une forme dense.

          Le microclimat favorable de la commune allonge la saison de végétation. Les massifs d'aromatiques — romarins, thyms, sauges — demandent peu d'entretien mais bénéficient d'une taille après floraison pour éviter le dégarnissage de la base. Les rosiers, omniprésents dans les jardins angevins, trouvent dans le schiste un drainage qui limite le développement du marsonia et de l'oïdium.
        `,
        metaDescription: 'Entretien de jardin à Mûrs-Érigné : tonte adaptée aux coteaux schisteux, taille de haies, paillage organique et entretien des aromatiques de coteau.',
        highlights: [
          'Tonte et gestion de pelouse sur sol schisteux drainant',
          'Désherbage raisonné des murets et allées en pierre locale',
          'Paillage organique des massifs sur sol sablo-limoneux en plaine',
          'Taille de haies persistantes en lotissement (photinias, lauriers)',
          'Entretien des massifs d\'aromatiques et rosiers de coteau',
        ],
      },
      abattage: {
        content: `
          Les tempêtes d'ouest qui remontent le couloir de la Loire frappent les coteaux de Mûrs-Érigné avec une intensité particulière. Les arbres de grande taille installés en crête — peupliers, pins maritimes, chênes — subissent des contraintes mécaniques importantes. Ceux dont l'enracinement reste superficiel faute de sol profond au-dessus du schiste présentent un risque de basculement que l'inclinaison du terrain accentue.

          Le démontage par sections s'impose sur la majorité des chantiers de la commune. Les parcelles en pente, les murets de schiste à préserver et la proximité des habitations voisines interdisent l'abattage directionnel classique dans la plupart des configurations. L'élagueur-grimpeur descend chaque tronçon au cordage, en commençant par la cime, pour maîtriser la trajectoire de chaque pièce de bois.

          Le dessouchage sur schiste fragmenté présente une difficulté spécifique : les racines se faufilent entre les strates de roche et forment un réseau difficile à extraire avec une rogneuse seule. Sur les coteaux, le travail combine rogneuse de souche et extraction mécanique à la mini-pelle lorsque le schiste est trop compact. La pente ajoute une contrainte d'accès qui conditionne le choix du matériel.

          Les résineux — pins, cyprès, thuyas — plantés dans les années 1980-1990 sur des parcelles de coteau atteignent des dimensions incompatibles avec leur emplacement initial. Leur système racinaire superficiel et leur prise au vent importante en font des sujets à risque lors des épisodes venteux. L'abattage reste souvent la seule option lorsque la taille de réduction ne suffit plus à contenir leur développement.
        `,
        metaDescription: 'Abattage d\'arbres à Mûrs-Érigné : démontage technique sur coteaux en pente, dessouchage sur schiste, retrait de résineux exposés au vent de Loire.',
        highlights: [
          'Démontage par sections sur parcelles en pente et terrain schisteux',
          'Abattage de résineux disproportionnés sur coteaux exposés',
          'Dessouchage combiné rogneuse et mini-pelle sur schiste compact',
          'Sécurisation post-tempête des arbres fragilisés en crête',
          'Évacuation et broyage des rémanents sur terrain en dénivelé',
        ],
      },
    },
  },
  {
    slug: 'sainte-gemmes-sur-loire',
    name: 'Sainte-Gemmes-sur-Loire',
    department: 'Maine-et-Loire',
    postalCode: '49130',
    population: '4 200',
    distance: '8 km',
    geo: { lat: 47.4082, lng: -0.5517 },
    description:
      'Commune paisible au sud d\'Angers en bord de Loire, Sainte-Gemmes-sur-Loire offre un cadre de vie verdoyant entre fleuve et coteaux, avec des propriétés de charme.',
    specificContent: `
      Sainte-Gemmes-sur-Loire, nichée entre la Loire et les coteaux du Layon, bénéficie d'un environnement naturel remarquable. Le paysage est dominé par le fleuve, ses grèves de sable, ses boires et sa végétation de berge caractéristique. Les propriétés vont des maisons de bourg avec jardins clos aux vastes propriétés en bordure de Loire, en passant par les pavillons des lotissements récents.

      Le sol gemméen présente une dualité marquée. Sur les hauteurs vers La Roche, le substrat schisteux affleure et les sols sont maigres et bien drainés. Dans la plaine alluviale, les sols sablo-limoneux sont profonds, fertiles et faciles à travailler. Dans le bourg historique, les murs en tuffeau créent des microclimats favorables aux fruitiers en espalier et aux plantes grimpantes.

      Art des Jardins valorise les espaces extérieurs en tirant parti des panoramas sur la Loire : conception de terrasses orientées, cadrage des perspectives, sélection de plantes qui apportent couleur et structure sans obstruer la vue. Les pergolas et tonnelles trouvent naturellement leur place dans ces jardins lumineux. En zone inondable, nous concevons des aménagements résilients avec des matériaux résistants à l'eau.

      L'entretien suit le rythme des saisons ligériennes. Le printemps est la saison la plus active, l'été demande une gestion attentive de l'arrosage sur les sols sableux, l'automne est idéal pour les plantations et l'hiver pour l'élagage et la taille des fruitiers.
    `,
    neighborhoods: ['Bourg', 'Les Jubeaux', 'La Roche', 'Les Banchais', 'La Loire'],
    serviceContent: {
      paysagiste: {
        content: `
          La plaine alluviale qui s'étend entre le bourg et la Loire livre un sol sablo-limoneux profond, meuble, facile à travailler. C'est un terrain favorable aux plantations : l'enracinement s'y fait vite et la rétention en eau reste correcte tant que le paillage limite l'évaporation estivale. En revanche, les parcelles situées vers La Roche présentent un substrat schisteux plus maigre, drainant et sec en été, qui oriente le choix végétal vers des espèces frugales — lavandes, romarins, graminées.

          Cette dualité de sol, à quelques centaines de mètres d'écart, permet de créer des ambiances très contrastées sur une même commune. Un jardin des Jubeaux n'appellera pas les mêmes matériaux ni les mêmes végétaux qu'un jardin de La Roche. Les terrasses en pierre de tuffeau, présentes dans le bourg historique, s'intègrent naturellement aux murs existants et prolongent l'identité architecturale locale.

          La proximité de la Loire constitue un atout paysager rare. Les propriétés qui bénéficient d'une vue sur le fleuve appellent un travail de cadrage des perspectives : plantations basses en premier plan, arbustes à port transparent en plan intermédiaire, pour conserver l'ouverture visuelle sans laisser le jardin nu. Pergolas et tonnelles trouvent ici une place logique pour structurer l'espace sans obstruer.

          En zone inondable — une réalité pour les parcelles les plus proches du fleuve — les aménagements doivent intégrer la contrainte hydraulique dès la conception. Matériaux résistants à la submersion temporaire, plantations de ripisylve en limite de terrain, revêtements perméables : la résilience du jardin face aux crues conditionne sa durabilité.
        `,
        metaDescription: 'Paysagiste à Sainte-Gemmes-sur-Loire : aménagement sur sol alluvial et schisteux, terrasses en tuffeau, jardins résilients en zone ligérienne inondable.',
        highlights: [
          'Création de jardins sur sol alluvial sablo-limoneux fertile',
          'Aménagement en zone inondable avec matériaux résilients',
          'Terrasses et murets en tuffeau intégrés au bâti ancien',
          'Cadrage des perspectives sur la Loire',
          'Plantations adaptées au substrat schisteux de La Roche',
        ],
      },
      elagage: {
        content: `
          Saules blancs, aulnes, frênes, peupliers noirs : les parcelles proches de la Loire abritent des essences de ripisylve à croissance vigoureuse. Ces arbres développent un volume important en quelques décennies, et leur ramure finit par empiéter sur les toitures, les lignes ou les propriétés voisines. La taille douce — suppression du bois mort, éclaircissage de la couronne, relèvement de la base — permet de contenir ce développement sans compromettre l'équilibre physiologique de l'arbre.

          Sur les hauteurs de La Roche, le sol schisteux superficiel limite l'ancrage racinaire. Les chênes et les châtaigniers qui y poussent développent un système racinaire étalé plutôt que profond, ce qui réduit leur stabilité face aux rafales. Un éclaircissage régulier diminue la prise au vent et le risque de casse lors des tempêtes hivernales qui remontent la vallée de la Loire.

          Les frênes sont particulièrement surveillés dans le secteur. La chalarose, maladie fongique qui touche les frênes européens, provoque un dépérissement progressif des branches puis du houppier entier. Un diagnostic phytosanitaire permet d'évaluer le stade d'atteinte et de décider entre taille sanitaire et abattage. Les sujets encore sains méritent une taille préventive qui améliore la circulation d'air dans la couronne.

          Dans le bourg, les jardins clos par des murs en tuffeau abritent souvent des fruitiers anciens — pommiers, poiriers, cognassiers — dont la taille de fructification s'effectue entre novembre et février hors gel. Ces arbres modestes en taille demandent un travail précis d'éclaircissage des rameaux à fruits pour maintenir une production régulière.
        `,
        metaDescription: 'Élagage à Sainte-Gemmes-sur-Loire : taille douce des essences de ripisylve en bord de Loire, diagnostic chalarose sur frênes, taille de fruitiers anciens.',
        highlights: [
          'Taille douce des arbres de ripisylve en bord de Loire',
          'Éclaircissage sur sol schisteux superficiel à La Roche',
          'Diagnostic et taille sanitaire des frênes touchés par la chalarose',
          'Taille de fructification des fruitiers anciens en jardins clos',
          'Sécurisation des arbres exposés aux vents de vallée',
        ],
      },
      'entretien-jardin': {
        content: `
          Sur les sols sableux de la plaine alluviale, le gazon lève vite au printemps mais souffre dès les premières chaleurs. Le sable draine l'eau en profondeur avant que les racines superficielles n'en profitent, et les pelouses jaunissent en juillet si rien n'est fait. Le choix de graminées résistantes à la sécheresse — fétuques élevées, ray-grass anglais — et un paillage systématique des massifs limitent les dégâts sans recourir à un arrosage intensif.

          La mousse représente un problème récurrent dans les zones ombragées proches du fleuve. L'humidité ambiante, combinée à l'ombre portée des grands arbres riverains, crée des conditions idéales pour sa prolifération. Le scarifiage de printemps, suivi d'un sursemis et d'un apport de sable pour alléger la couche superficielle, restaure un gazon fonctionnel. Vers La Roche, le problème s'inverse : le sol schisteux sèche vite, et c'est l'aération mécanique qui prime pour éviter la formation d'une croûte imperméable.

          Les haies de Sainte-Gemmes-sur-Loire reflètent la diversité des quartiers. Lauriers-cerises et photinias dans les lotissements, charmilles et buis dans le bourg ancien, haies champêtres mêlant cornouillers, troènes et viornes en périphérie. Chaque type appelle un calendrier de taille distinct — persistants en juin et septembre, caducs en fin d'hiver — et un entretien du pied par binage et paillage.

          Le rythme saisonnier ligérien impose ses priorités. L'automne est la meilleure fenêtre pour les plantations, la terre encore chaude et l'humidité naturelle favorisant l'enracinement. L'hiver se consacre aux tailles de structure et au nettoyage des massifs avant la reprise printanière.
        `,
        metaDescription: 'Entretien de jardin à Sainte-Gemmes-sur-Loire : tonte sur sol sableux alluvial, scarifiage anti-mousse, taille de haies adaptée au rythme ligérien.',
        highlights: [
          'Tonte et fertilisation adaptées aux sols sableux alluviaux',
          'Scarifiage et sursemis en zones ombragées humides',
          'Taille de haies différenciée selon les quartiers et essences',
          'Aération mécanique sur substrat schisteux à La Roche',
          'Paillage systématique contre le dessèchement estival',
        ],
      },
      abattage: {
        content: `
          Les peupliers noirs alignés le long de la Loire arrivent, pour certains, en fin de cycle biologique. Ces arbres à bois tendre deviennent cassants avec l'âge, et les cavités creusées par les champignons lignivores fragilisent le tronc de l'intérieur. L'abattage préventif de ces sujets évite les chutes incontrôlées lors des coups de vent qui balaient régulièrement la vallée.

          L'accès aux parcelles riveraines de Sainte-Gemmes-sur-Loire complique souvent les interventions. Chemins étroits, sol meuble en bordure de fleuve, végétation dense : le démontage par sections, avec descente de chaque tronçon au cordage, reste l'approche la plus adaptée pour protéger les structures voisines. L'élagueur-grimpeur travaille de la cime vers la base, ce qui permet un contrôle précis de la direction de chute de chaque pièce.

          Le dessouchage varie selon la zone. Sur les sols sableux de la plaine, la rogneuse travaille rapidement dans un substrat meuble et homogène. Vers La Roche, le schiste affleurant ralentit le travail mécanique et demande un matériel plus puissant. Dans les deux cas, le trou est comblé avec un mélange de terre végétale et de broyat pour préparer une éventuelle replantation.

          Les frênes atteints de chalarose constituent un motif d'abattage croissant dans le secteur. Quand le dépérissement dépasse la moitié du houppier, la taille sanitaire ne suffit plus à maintenir l'arbre en sécurité. Le bois de frêne, dense et calorifique, se valorise en bûches de chauffage. Les branches sont broyées sur place et réutilisées comme paillage dans les massifs du jardin.
        `,
        metaDescription: 'Abattage d\'arbres à Sainte-Gemmes-sur-Loire : démontage en bord de Loire, dessouchage sur sol sableux et schisteux, abattage de frênes chalarosés.',
        highlights: [
          'Démontage par sections en parcelles riveraines enclavées',
          'Abattage préventif de peupliers en fin de cycle',
          'Dessouchage adapté aux sols sableux et schisteux',
          'Abattage de frênes atteints de chalarose',
          'Valorisation du bois en bûches et paillage sur place',
        ],
      },
    },
  },
  {
    slug: 'montreuil-juigne',
    name: 'Montreuil-Juigné',
    department: 'Maine-et-Loire',
    postalCode: '49460',
    population: '8 500',
    distance: '9 km',
    geo: { lat: 47.5115, lng: -0.602 },
    description:
      'Commune dynamique au nord-ouest d\'Angers, Montreuil-Juigné allie quartiers résidentiels récents et espaces naturels préservés le long de la Mayenne.',
    specificContent: `
      Montreuil-Juigné, en plein développement au nord-ouest d'Angers, accueille de nombreuses familles attirées par un cadre de vie alliant proximité urbaine et environnement naturel. La commune longe la Mayenne, dont les berges ombragées influencent le paysage des jardins riverains. Lotissements récents et quartiers anciens de Juigné-Bené coexistent, créant une diversité architecturale intéressante.

      Le sol est principalement argileux : il retient bien l'eau et les nutriments mais se compacte facilement et peut devenir imperméable en surface. Les amendements sableux et un apport régulier de compost améliorent la structure. Les sols argileux alternent entre saturation en hiver et dessèchement en été, rendant les paillages épais essentiels pour réguler l'humidité.

      Art des Jardins accompagne les propriétaires dans la création de jardins complets pour les constructions neuves — terrassement, drainage, pelouse, plantations et éclairage — comme dans la rénovation de jardins anciens. La présence de la Mayenne crée des conditions particulières en bordure de rivière, avec une humidité favorisant mousses et maladies fongiques que nous gérons par le choix de variétés résistantes.

      Les haies de thuyas et de leylandii des années 1990-2000 arrivent en fin de vie dans de nombreuses propriétés. Nous proposons leur remplacement par des haies mixtes persistantes et caduques, plus esthétiques, écologiques et résistantes aux maladies. La transition peut se faire progressivement.
    `,
    neighborhoods: ['Bourg', 'Juigné-Bené', 'La Foresterie', 'Les Music\'Halles', 'La Mayenne'],
    serviceContent: {
      paysagiste: {
        content: `
          L'argile lourde qui constitue l'essentiel du sous-sol de Montreuil-Juigné impose ses contraintes dès la phase de conception. Ce sol retient l'eau en hiver au point de saturer les horizons superficiels, puis se rétracte en été en formant des fissures qui peuvent endommager les bordures et les terrasses mal fondées. Toute création paysagère sérieuse commence ici par un travail de structure : drainage, apport de sable grossier, incorporation de compost pour alléger la terre et créer un milieu racinaire viable.

          Les lotissements récents de La Foresterie et des Music'Halles livrent des terrains nus, souvent compactés par les engins de chantier. Le décompactage mécanique en profondeur, suivi d'un apport de terre végétale amendée, conditionne la réussite des plantations et de l'engazonnement. Sur ces parcelles de 300 à 600 m², les aménagements combinent terrasse, pelouse, massifs structurants et clôtures végétales — le tout conçu pour fonctionner sur un sol qui travaille beaucoup selon les saisons.

          Du côté de Juigné-Bené, les jardins plus anciens présentent d'autres enjeux. Les haies de thuyas plantées dans les années 1990 arrivent en fin de cycle, dégarnies à la base et sensibles au bupreste. Leur remplacement par des haies mixtes — photinia, éléagnus, charme, viorne — apporte diversité visuelle et meilleure résilience. Les massifs vieillissants gagnent à être restructurés avec des vivaces et des graminées adaptées à l'argile : hémérocalles, rudbeckias, miscanthus.

          La proximité de la Mayenne influence les parcelles riveraines. L'humidité ambiante favorise les mousses sur les terrasses et les maladies fongiques sur certains végétaux. Le choix d'essences tolérantes à l'humidité — cornouillers, saules ornementaux, hostas — et de matériaux résistants au milieu humide oriente les créations en bordure de rivière.
        `,
        metaDescription: 'Aménagement paysager à Montreuil-Juigné : création de jardins sur sol argileux, terrasses adaptées au retrait-gonflement, plantations en bord de Mayenne.',
        highlights: [
          'Création de jardins sur sol argileux avec drainage adapté',
          'Aménagement complet de parcelles neuves en lotissement',
          'Remplacement de haies de thuyas par des haies mixtes',
          'Plantations résistantes à l\'humidité en bord de Mayenne',
          'Restructuration de massifs avec vivaces adaptées à l\'argile',
        ],
      },
      elagage: {
        content: `
          Érables sycomores, tilleuls, chênes pédonculés et frênes composent l'essentiel du patrimoine arboré de Montreuil-Juigné. Dans le bourg ancien et à Juigné-Bené, ces arbres plantés lors des premiers lotissements ont atteint des dimensions qui posent des problèmes de cohabitation : branches en surplomb des toitures, racines soulevant les trottoirs, ombrage excessif sur les parcelles voisines.

          Sur sol argileux, l'enracinement des arbres reste relativement superficiel. Les racines s'étalent en surface plutôt que de plonger en profondeur, ce qui rend les sujets plus sensibles au vent et aux épisodes de sécheresse estivale. La taille douce, qui allège progressivement le houppier sans coupes sévères, limite la prise au vent tout en préservant l'équilibre physiologique de l'arbre. Les coupes drastiques provoquent des réactions de rejets vigoureux qui aggravent le problème à moyen terme.

          Les peupliers en bord de Mayenne constituent un cas particulier. Espèce à croissance rapide et bois tendre, le peuplier devient fragile après trente à quarante ans : charpentières cassantes, cavités internes, champignons lignivores. La taille de sécurisation de ces sujets — suppression du bois mort, réduction des branches à risque — s'effectue de préférence en fin d'été, quand le bois est le plus sec et les interventions en bord de rivière les plus praticables.

          Les fruitiers sont courants dans les jardins de la commune : pommiers, poiriers, cerisiers, pruniers. La taille de fructification, distincte de l'élagage d'entretien, vise à aérer le centre de l'arbre et à favoriser les rameaux porteurs de fruits. Elle s'effectue entre janvier et mars, avant le débourrement.
        `,
        metaDescription: 'Élagage à Montreuil-Juigné : taille douce sur sol argileux, sécurisation des peupliers en bord de Mayenne, entretien des fruitiers et feuillus matures.',
        highlights: [
          'Taille douce des feuillus matures sur sol argileux',
          'Sécurisation des peupliers vieillissants en bord de Mayenne',
          'Taille de fructification des pommiers, poiriers et cerisiers',
          'Réduction de houppier sur arbres en surplomb de toiture',
          'Suppression de bois mort et branches à risque',
        ],
      },
      'entretien-jardin': {
        content: `
          Le cycle des saisons pèse lourd sur les jardins de Montreuil-Juigné. L'argile, gorgée d'eau de novembre à mars, interdit pratiquement tout passage d'engin sans risque de compactage. Les tontes reprennent tard — rarement avant fin mars — et s'interrompent tôt à l'automne. Entre les deux, la croissance vigoureuse du gazon sur ce sol riche impose un rythme soutenu, parfois hebdomadaire en mai-juin.

          La scarification est un geste essentiel sur les pelouses argileuses de la commune. Le feutrage s'accumule plus vite que sur des sols drainants, et la mousse colonise rapidement les zones ombragées, surtout à proximité de la Mayenne où l'humidité ambiante reste élevée. Deux passages de scarificateur par an — mars et septembre — combinés à un terreautage sableux, améliorent la perméabilité de surface et limitent l'asphyxie racinaire.

          Les haies représentent un poste d'entretien conséquent. Thuyas, lauriers-cerises et cyprès de Leyland, très plantés dans les lotissements des années 1990-2000, exigent deux à trois tailles annuelles pour rester contenus. Les haies mixtes qui les remplacent progressivement demandent un travail plus nuancé : chaque essence a son rythme de croissance et sa période de taille optimale. Le charme se taille en août, le photinia après la floraison, l'éléagnus en fin de printemps.

          Le désherbage des massifs et allées reste un entretien récurrent. Sur l'argile, les adventices développent des systèmes racinaires tenaces, difficiles à arracher complètement. Le paillage épais — 8 à 10 centimètres de broyat ou d'écorces — freine efficacement la repousse tout en régulant l'humidité du sol, un double bénéfice appréciable sur ce type de terrain.
        `,
        metaDescription: 'Entretien de jardin à Montreuil-Juigné : tonte et scarification sur sol argileux compact, taille de haies mixtes, paillage organique et désherbage adapté.',
        highlights: [
          'Tonte et aération sur sol argileux compact',
          'Scarification et terreautage sableux anti-mousse',
          'Taille différenciée de haies mixtes et de conifères',
          'Paillage épais pour contrôle des adventices sur argile',
          'Calendrier d\'entretien adapté au cycle hydrique du sol',
        ],
      },
      abattage: {
        content: `
          Les parcelles mitoyennes des lotissements de Montreuil-Juigné laissent rarement la place pour un abattage en pied. Le démontage par sections — tronçonnage progressif depuis le sommet, descente des billots au cordage — reste la technique standard dans les quartiers résidentiels du Bourg, de La Foresterie et des Music'Halles. Cette approche demande plus de temps qu'un abattage direct mais préserve les clôtures, les toitures et les jardins mitoyens.

          Les conifères disproportionnés arrivent en tête des demandes. Épicéas de huit à douze mètres, thuyas devenus des arbres, pins sylvestres au houppier déséquilibré : plantés comme éléments de haie ou d'ornement, ces sujets dépassent l'échelle du jardin après vingt-cinq à trente ans. Leur système racinaire superficiel sur l'argile de Montreuil-Juigné les rend d'autant plus vulnérables aux coups de vent.

          Le dessouchage sur sol argileux présente des particularités. La rogneuse travaille plus lentement dans l'argile compacte que dans un sol sableux ou limoneux. En période humide, le terrain porte mal et l'accès de la machine peut nécessiter la pose de plaques de roulage pour éviter l'ornièrage. Le trou laissé par la souche est comblé avec un mélange de terre végétale et de sable pour améliorer le drainage local et préparer une éventuelle replantation.

          En bord de Mayenne, l'abattage de peupliers ou de saules en déclin suit un protocole spécifique. La proximité de la rivière impose de retenir chaque section pour éviter toute chute dans l'eau. Le bois est évacué ou débité sur place selon l'accessibilité. Les rémanents sont broyés et peuvent servir de paillage dans les massifs du jardin.
        `,
        metaDescription: 'Abattage d\'arbres à Montreuil-Juigné : démontage par sections en zone résidentielle, dessouchage à la rogneuse sur argile, peupliers en bord de Mayenne.',
        highlights: [
          'Démontage par sections en parcelles mitoyennes',
          'Abattage de conifères disproportionnés en lotissement',
          'Dessouchage à la rogneuse sur sol argileux compact',
          'Abattage sécurisé de peupliers en bord de Mayenne',
          'Broyage des rémanents et valorisation en paillage',
        ],
      },
    },
  },
  {
    slug: 'saint-jean-de-linieres',
    name: 'Saint-Jean-de-Linières',
    department: 'Maine-et-Loire',
    postalCode: '49070',
    population: '2 200',
    distance: '12 km',
    geo: { lat: 47.462, lng: -0.6498 },
    description:
      'Village rural à l\'ouest d\'Angers, Saint-Jean-de-Linières conserve un caractère champêtre avec de grandes propriétés, des espaces boisés et un paysage de bocage préservé.',
    specificContent: `
      Saint-Jean-de-Linières, commune rurale à l'ouest d'Angers, offre un cadre de vie champêtre apprécié des amoureux de la nature. Le paysage de bocage angevin y est particulièrement bien préservé, avec ses haies vives, ses chemins creux et ses prairies bordées de chênes têtards. Les propriétés sont souvent spacieuses, dépassant fréquemment les 1 500 m², offrant des possibilités d'aménagement exceptionnelles.

      Le sol est principalement limono-argileux, avec un substrat de grès et de schiste qui affleure par endroits. Ces sols profonds et fertiles sont favorables à la plupart des végétaux d'ornement et des arbres fruitiers. Le drainage naturel est correct sur les parties hautes mais peut être insuffisant dans les cuvettes et bas de parcelle.

      Art des Jardins intervient ici pour des projets variés. Les anciens corps de ferme reconvertis nécessitent souvent un réaménagement complet des abords : reprofilage du terrain, création d'une cour paysagée, plantation de haies et mise en valeur des bâtiments en pierre. Le bocage environnant inspire nos créations : haies mixtes de charmes, érables champêtres, noisetiers et aubépines, intégrées dans le paysage rural.

      Les grandes surfaces permettent des aménagements ambitieux : allées de promenade, parcs arborés, prairies fleuries, vergers de variétés anciennes et potagers généreux. Les arbres de grande taille — chênes pédonculés, hêtres, châtaigniers — sont omniprésents et font partie du patrimoine végétal de la commune.
    `,
    neighborhoods: ['Bourg', 'Les Linières', 'La Motte', 'Le Bocage'],
    serviceContent: {
      paysagiste: {
        content: `
          Le sol limono-argileux de Saint-Jean-de-Linières, reposant sur un substrat de grès et de schiste, offre une couche cultivable profonde et fertile. La plupart des végétaux d'ornement et des fruitiers s'y développent sans difficulté. En revanche, les bas de parcelle et les cuvettes retiennent l'eau en excès — un drainage correctif s'impose avant toute plantation sur ces zones.

          Les propriétés dépassent souvent 1 500 m², parfois largement. Ces surfaces autorisent des aménagements que l'on rencontre rarement dans l'agglomération angevine : allées de promenade sous couvert arboré, prairies fleuries en lisière de bocage, vergers d'anciennes variétés angevines, potagers ceinturés de haies basses. Le paysage bocager qui entoure la commune — haies vives, chemins creux, chênes têtards — fournit un vocabulaire végétal cohérent pour les créations.

          Les anciens corps de ferme reconvertis en habitations représentent une part notable du bâti. Le réaménagement de leurs abords passe par un reprofilage du terrain, la création d'une cour paysagée en harmonie avec la pierre locale et l'intégration de haies mixtes — charmes, érables champêtres, noisetiers, aubépines — qui prolongent visuellement le bocage environnant.

          Les terrains situés vers La Motte et Les Linières présentent parfois des affleurements de grès. Ces éléments minéraux, loin d'être un obstacle, servent de socle pour des rocailles sèches ou des murets bas qui structurent les espaces sans créer de rupture avec le paysage rural.
        `,
        metaDescription: 'Paysagiste à Saint-Jean-de-Linières — aménagement de grands jardins sur sol limono-argileux, haies bocagères et mise en valeur des corps de ferme rénovés.',
        highlights: [
          'Aménagement de grandes parcelles rurales (1 500 m² et plus)',
          'Haies mixtes bocagères : charmes, érables champêtres, aubépines',
          'Réaménagement paysager d\'abords de corps de ferme rénovés',
          'Drainage correctif en bas de parcelle sur sol limono-argileux',
          'Rocailles et murets sur affleurements de grès locaux',
        ],
      },
      elagage: {
        content: `
          Chênes pédonculés, hêtres, châtaigniers — le patrimoine arboré de Saint-Jean-de-Linières reflète l'histoire de son bocage. Ces arbres de grande taille, souvent implantés en limites de propriétés ou en alignement le long des chemins creux, ont grandi sans taille de formation. Leurs houppiers, développés librement, atteignent des envergures qui empiètent sur les toitures, les lignes aériennes ou les parcelles voisines.

          Le sol limono-argileux profond favorise un enracinement puissant mais concentré. En période de saturation hivernale, la cohésion du sol diminue et les sujets les plus exposés au vent d'ouest présentent un risque de basculement accru. La taille douce — allègement progressif de la couronne, suppression du bois mort, éclaircissage des branches croisées — réduit la prise au vent sans altérer la silhouette de l'arbre.

          Les chênes têtards, vestiges de l'exploitation traditionnelle du bocage, sont encore présents sur certaines parcelles. Leur taille d'entretien, dite de rétrogradage, suit un cycle de cinq à huit ans. Le maintien de ces arbres relève aujourd'hui de la conservation du patrimoine paysager autant que de la gestion arboricole.

          Les fruitiers — pommiers, poiriers, cerisiers — occupent une place importante dans les jardins et vergers de la commune. La taille de fructification s'effectue en hiver pour les arbres à pépins, après récolte pour les arbres à noyaux. Un fruitier non taillé pendant plusieurs années produit en hauteur, hors de portée, et s'expose aux chancres et au gui qui colonisent les branches mal ventilées.
        `,
        metaDescription: 'Élagage à Saint-Jean-de-Linières : taille douce sur chênes, hêtres et châtaigniers matures en bocage, entretien des chênes têtards, taille de fructification.',
        highlights: [
          'Taille douce de chênes, hêtres et châtaigniers en bocage',
          'Entretien et rétrogradage des chênes têtards patrimoniaux',
          'Taille de fructification sur pommiers, poiriers et cerisiers',
          'Éclaircissage de houppiers développés sans taille de formation',
          'Allègement de couronne sur sujets exposés au vent d\'ouest',
        ],
      },
      'entretien-jardin': {
        content: `
          Dès les premières pluies d'automne, le sol limono-argileux se gorge d'eau et devient collant. La tonte s'interrompt plus tôt qu'en milieu urbain, et reprend plus tard au printemps — le sol reste gras jusqu'en avril certaines années. Ce décalage saisonnier conditionne l'ensemble du calendrier d'entretien à Saint-Jean-de-Linières.

          En été, le même sol se rétracte et se fissure en surface. L'aération mécanique au printemps, suivie d'un terreautage au compost, améliore la structure et la capacité de rétention sans compacter davantage. Les fétuques élevées, plus tolérantes à la sécheresse que le ray-grass fin, donnent de meilleurs résultats sur ce type de terrain. La hauteur de coupe maintenue à 7-8 cm en période sèche protège le système racinaire.

          Les haies bocagères — charmes, aubépines, noisetiers, prunelliers — demandent une taille annuelle en fin d'hiver pour conserver leur densité sans perturber la nidification. Les haies ornementales des lotissements plus récents (photinias, lauriers-cerises, eleagnus) suivent un rythme différent : deux à trois passages entre mai et septembre. La cohabitation de ces deux types de haies sur une même commune est caractéristique du tissu rural en cours d'urbanisation.

          Les grandes pelouses qui accompagnent les propriétés rurales représentent un volume de tonte conséquent. Le ramassage des feuilles en automne, sous les chênes et les hêtres, s'étale sur plusieurs semaines. Le broyage des feuilles sur place à la tondeuse constitue une alternative lorsque le volume reste raisonnable — les feuilles broyées se décomposent et nourrissent le sol sans former le tapis asphyxiant des feuilles entières.
        `,
        metaDescription: 'Entretien de jardin à Saint-Jean-de-Linières : tonte sur sol limono-argileux, taille de haies bocagères et ornementales, aération et terreautage saisonnier.',
        highlights: [
          'Tonte et aération sur sol limono-argileux compact',
          'Taille de haies bocagères (charmes, aubépines, noisetiers)',
          'Entretien de haies ornementales en lotissement',
          'Terreautage au compost pour améliorer la structure du sol',
          'Ramassage et broyage de feuilles sous chênes et hêtres',
        ],
      },
      abattage: {
        content: `
          Les parcelles du secteur du Bocage et de La Motte, souvent bordées de haies arborées et de vieux chênes en limite de propriété, concentrent la majorité des besoins d'abattage sur la commune. Ces arbres, intégrés au maillage bocager, n'ont pas été plantés dans une logique de jardin — ils sont là depuis plusieurs générations, et leur envergure dépasse parfois ce que la cohabitation avec l'habitat permet.

          Les chênes pédonculés et les châtaigniers constituent les essences les plus fréquentes. Les premiers développent un bois dense et résistant mais des charpentières lourdes susceptibles de rompre sous le poids du givre ou lors des coups de vent. Les châtaigniers, sensibles à la maladie de l'encre et au chancre, peuvent dépérir progressivement — un arbre apparemment sain en feuillage peut cacher un tronc affaibli par la pourriture interne.

          Le démontage par sections s'impose dès que la proximité d'un bâtiment, d'une clôture ou d'une haie mitoyenne interdit l'abattage directionnel. L'élagueur-grimpeur descend chaque tronçon au cordage, ce qui permet d'intervenir même sur les parcelles sans accès pour un engin de levage.

          Le dessouchage en sol limono-argileux profond se fait à la rogneuse de souche. L'argile compacte demande un travail plus lent qu'en sol sableux, mais les racines n'opposent pas la résistance que l'on rencontre sur substrat rocheux. La fosse est comblée de terre végétale amendée, prête à recevoir une replantation ou un engazonnement.
        `,
        metaDescription: 'Abattage d\'arbres à Saint-Jean-de-Linières : démontage de chênes et châtaigniers en bocage, dessouchage en sol argileux profond, évacuation des rémanents.',
        highlights: [
          'Abattage de chênes et châtaigniers matures en limite bocagère',
          'Démontage par sections en parcelles sans accès engin',
          'Dessouchage à la rogneuse sur sol limono-argileux profond',
          'Diagnostic de châtaigniers atteints de maladie de l\'encre',
          'Évacuation et valorisation des rémanents en broyat',
        ],
      },
    },
  },
  {
    slug: 'briollay',
    name: 'Briollay',
    department: 'Maine-et-Loire',
    postalCode: '49125',
    population: '2 800',
    distance: '12 km',
    geo: { lat: 47.556, lng: -0.51 },
    description:
      'Au confluent de la Sarthe et du Loir, Briollay est une commune prisée pour son cadre naturel exceptionnel, ses belles propriétés en bord de rivière et ses paysages de zones humides.',
    specificContent: `
      Briollay, au confluent de la Sarthe et du Loir, offre un cadre de vie exceptionnel. Cette situation hydrographique unique, où deux rivières se rejoignent avant de former la Maine, crée un paysage d'eau et de prairies humides d'une grande beauté. Le patrimoine bâti comprend de belles demeures bourgeoises, manoirs et maisons de maître dont les jardins font appel à un large registre : allées de tilleuls, roseraies, bassins et topiaires.

      Les sols alluviaux sont parmi les plus riches de la région. Les limons déposés par les crues ont constitué une couche fertile propice à toutes les cultures. Cette richesse s'accompagne cependant d'une forte humidité hivernale, avec des remontées de nappe qui imposent le choix d'espèces adaptées. En zone inondable, les aménagements sont conçus pour résister aux submersions temporaires avec des matériaux imputrescibles.

      Art des Jardins crée ici des jardins d'eau avec bassins naturels et plantations de berge intégrées dans l'environnement rivulaire. Iris d'eau, prêles, joncs fleuris, lysimaques, astilbes et hostas composent des massifs luxuriants qui prospèrent dans l'humidité ambiante et offrent un spectacle renouvelé du printemps à l'automne.

      Les arbres de bord de rivière — saules blancs, aulnes glutineux, peupliers noirs et frênes — bordent la Sarthe et le Loir et constituent un patrimoine végétal remarquable. Ces essences à croissance rapide nécessitent un suivi régulier pour préserver leur santé et assurer la sécurité des riverains.
    `,
    neighborhoods: ['Bourg', 'Vaux', 'La Basse-Rivière', 'Le Port', 'Les Grandes-Rivières'],
    serviceContent: {
      paysagiste: {
        content: `
          Les limons déposés par la Sarthe et le Loir forment à Briollay un sol alluvial profond, fertile, à forte capacité de rétention. Cette richesse pédologique autorise une palette végétale large : arbustes à fleurs, vivaces gourmandes, fruitiers de plein vent. Mais la nappe phréatique, souvent haute entre novembre et mars, interdit les plantations à enracinement profond dans les secteurs les plus bas — vers La Basse-Rivière et Le Port notamment.

          Les propriétés du bourg et de Vaux présentent des jardins de taille moyenne à généreuse, souvent clos de murs anciens ou bordés par des haies champêtres. Les demeures bourgeoises qui jalonnent les rives conservent parfois des structures paysagères héritées — allées de tilleuls, massifs de buis, roseraies — que tout nouvel aménagement doit composer avec ou remplacer en respectant l'échelle du lieu.

          La proximité des rivières crée un microclimat humide et tempéré. Les gelées tardives sont rares, la chaleur estivale atténuée par l'évaporation. Ces conditions conviennent aux hortensias, astilbes, hostas et fougères, qui trouvent ici l'humidité atmosphérique nécessaire sans arrosage excessif. En terrain inondable, les aménagements intègrent des matériaux imputrescibles — bois classe 4, pierre naturelle, gravier stabilisé — et des végétaux de zone humide capables de supporter une submersion temporaire.

          Le secteur des Grandes-Rivières, plus ouvert, offre des parcelles où des prairies fleuries et des vergers peuvent s'installer. Le sol limoneux, bien pourvu en matière organique, porte sans difficulté des fruitiers pommiers, poiriers et cognassiers sur porte-greffes adaptés à l'humidité.
        `,
        metaDescription: 'Paysagiste à Briollay : création de jardins sur sols alluviaux fertiles du confluent Sarthe-Loir, plantations adaptées aux zones humides et inondables.',
        highlights: [
          'Aménagement sur sol alluvial profond et fertile',
          'Plantations adaptées aux remontées de nappe hivernales',
          'Jardins d\'eau et végétaux de zone humide en bord de rivière',
          'Matériaux imputrescibles pour parcelles en zone inondable',
          'Prairies fleuries et vergers sur limons du confluent',
        ],
      },
      elagage: {
        content: `
          Saules blancs, aulnes glutineux, peupliers noirs et frênes composent l'essentiel du patrimoine arboré de Briollay. Ces essences de ripisylve, installées le long de la Sarthe et du Loir, poussent vite dans le sol alluvial humide. En une vingtaine d'années, un peuplier atteint 20 mètres et un saule blanc développe une ramure étalée qui couvre facilement 15 mètres de diamètre. Sans intervention, ces houppiers finissent par déborder sur les toitures, les clôtures ou les voies d'accès.

          La taille douce reste l'approche la plus respectueuse de ces essences à bois tendre. Suppression du bois mort, éclaircissage de la couronne, relèvement des branches basses : chaque intervention préserve la silhouette naturelle de l'arbre tout en réduisant la prise au vent. Les saules, dont le bois casse facilement en tempête, bénéficient d'un allègement régulier qui limite les chutes de branches sur les berges et les embarcadères.

          Les frênes du secteur méritent une attention particulière. La chalarose — maladie fongique causée par Hymenoscyphus fraxineus — progresse en vallée de la Sarthe et provoque un dessèchement des rameaux puis des branches charpentières. Un diagnostic visuel régulier permet de repérer les premiers symptômes : nécroses en fuseau sur l'écorce, flétrissement du feuillage en pleine saison, mortalité des pousses apicales. La taille sanitaire des parties atteintes ralentit la progression.

          Dans les jardins clos du bourg, tilleuls et marronniers d'alignement sont fréquents. Leur taille d'entretien — réduction de volume, suppression des rejets de souche, dégagement des façades — s'effectue en période de repos végétatif, entre novembre et février.
        `,
        metaDescription: 'Élagage à Briollay : taille douce des arbres de ripisylve le long de la Sarthe et du Loir, diagnostic de chalarose sur frênes et entretien des tilleuls.',
        highlights: [
          'Taille douce des saules et peupliers en bord de rivière',
          'Diagnostic et taille sanitaire des frênes face à la chalarose',
          'Éclaircissage des couronnes pour réduire la prise au vent',
          'Entretien des tilleuls et marronniers du bourg historique',
          'Intervention sur arbres à proximité de berges et cours d\'eau',
        ],
      },
      'entretien-jardin': {
        content: `
          Le sol limoneux de Briollay retient bien l'eau, parfois trop. Au printemps, les pelouses restent gorgées longtemps après les pluies, et la mousse s'installe dans les zones ombragées par les arbres de berge. Une scarification en mars-avril, suivie d'un regarnissage en ray-grass anglais et fétuque élevée, restaure la densité du gazon. En été, la rétention d'eau du limon joue en faveur de la pelouse : la tonte peut rester espacée sans jaunissement prématuré.

          Les haies champêtres — charmes, noisetiers, troènes — sont caractéristiques des jardins de Briollay. Leur taille s'effectue deux fois par an : une première passe en juin après la pousse printanière, une seconde en septembre pour un aspect soigné avant l'hiver. Les haies de lauriers-palme, plus fréquentes dans les secteurs pavillonnaires, demandent une taille au sécateur plutôt qu'au taille-haie pour éviter le brunissement des feuilles coupées.

          L'humidité ambiante favorise le développement de maladies cryptogamiques. Le marsonia sur les rosiers, le mildiou sur les vivaces tendres, la tavelure sur les pommiers : ces pathologies fongiques prospèrent dans l'air humide du confluent. L'entretien préventif passe par l'espacement des plantations pour favoriser la circulation d'air, le ramassage systématique des feuilles mortes à l'automne et l'élimination des rameaux atteints dès leur apparition.

          Les massifs de plantes de terrain humide — hostas, astilbes, ligulaires, rodgersias — demandent peu d'entretien hormis un nettoyage des tiges sèches en fin d'hiver et une division des touffes tous les trois à quatre ans pour maintenir leur vigueur.
        `,
        metaDescription: 'Entretien de jardin à Briollay : scarification sur sol limoneux humide du confluent, taille de haies champêtres et lutte contre les maladies fongiques.',
        highlights: [
          'Scarification et regarnissage sur sol limoneux à forte rétention',
          'Taille de haies champêtres (charmes, noisetiers, troènes)',
          'Traitement préventif des maladies fongiques liées à l\'humidité',
          'Entretien des massifs de vivaces de terrain humide',
          'Gestion de la mousse en zones ombragées et humides',
        ],
      },
      abattage: {
        content: `
          Les peupliers noirs alignés le long de la Sarthe et du Loir constituent le principal motif d'abattage à Briollay. Plantés en rangées serrées il y a plusieurs décennies, certains sujets présentent des cavités de cœur, des champignons lignivores à la base ou une inclinaison progressive vers la rivière. Leur chute, en cas de rupture, menace les berges aménagées, les pontons et les habitations riveraines.

          Le démontage par sections est la technique standard sur ces chantiers. L'accès aux berges est souvent étroit — chemins de halage, servitudes de passage — et le voisinage immédiat de l'eau interdit toute chute libre de tronçons volumineux. L'élagueur-grimpeur procède de la cime vers la base, chaque section descendue au cordage et déposée en retrait de la berge. Sur les sujets penchés au-dessus du cours d'eau, un haubanage temporaire sécurise l'arbre pendant le démontage.

          Le dessouchage sur sol alluvial ne pose pas les mêmes difficultés que sur roche. La rogneuse de souche travaille efficacement dans le limon meuble, et les racines se fragmentent sans résistance excessive. En revanche, la proximité de la nappe phréatique peut rendre le terrain instable sous le poids du matériel : les interventions en période de basses eaux, entre juin et septembre, limitent ce risque.

          Les frênes atteints de chalarose à un stade avancé — houppier défolié à plus de 50 %, nécroses de collet, champignons à la base — nécessitent un abattage sanitaire. Ces sujets fragilisés cassent de façon imprévisible, parfois par temps calme, et leur maintien à proximité des zones fréquentées présente un risque réel.
        `,
        metaDescription: 'Abattage d\'arbres à Briollay : démontage par sections des peupliers en bord de Sarthe et du Loir, dessouchage sur sol alluvial, retrait sanitaire de frênes.',
        highlights: [
          'Démontage par sections des peupliers en bord de rivière',
          'Dessouchage à la rogneuse sur sol alluvial meuble',
          'Abattage sanitaire des frênes touchés par la chalarose',
          'Haubanage temporaire sur arbres penchés au-dessus de l\'eau',
          'Intervention en période de basses eaux pour sol stable',
        ],
      },
    },
  },
  {
    slug: 'savennieres',
    name: 'Savennières',
    department: 'Maine-et-Loire',
    postalCode: '49170',
    population: '1 500',
    distance: '14 km',
    geo: { lat: 47.385, lng: -0.631 },
    description:
      'Célèbre pour son vignoble d\'exception classé AOC, Savennières est une commune de caractère sur les bords de Loire, entre coteaux viticoles et jardins de charme.',
    specificContent: `
      Savennières, village viticole mondialement réputé pour ses vins blancs secs, s'étend sur les coteaux de la rive droite de la Loire. L'appellation compte deux grands crus — la Coulée-de-Serrant et la Roche-aux-Moines — témoignant d'un terroir d'exception. Les jardins d'agrément bénéficient des mêmes conditions favorables de sol, d'exposition et de microclimat que la vigne.

      Le microclimat est remarquable : l'exposition sud-est face à la Loire capte la chaleur du matin et la réverbération du fleuve l'après-midi. Les sols essentiellement schisteux, avec des affleurements de rhyolite et de schistes pourprés, sont maigres, caillouteux et très bien drainés. Ces conditions permettent la culture d'oliviers, figuiers, grenadiers et d'aromatiques méditerranéennes — lavandes, romarins, cistes, santolines et thyms.

      Art des Jardins puise dans la tradition viticole pour concevoir des jardins intégrés dans le paysage. Schiste local pour les murets et escaliers, graves de Loire pour les allées, plantations mêlant essences méditerranéennes et locales. Les propriétés — maisons de vignerons en tuffeau, manoirs, corps de ferme rénovés — sont habillées de rosiers anciens, glycines, bignones et jasmins étoilés sur les façades de pierre blonde.

      L'entretien suit un calendrier adapté au terroir : taille en fin d'hiver, désherbage mécanique sans produit chimique dans le respect de l'environnement viticole, et arrosages limités grâce au choix de plantes adaptées à la sécheresse estivale des coteaux.
    `,
    neighborhoods: ['Bourg', 'Épiré', 'La Roche-aux-Moines', 'La Coulée-de-Serrant', 'Les Coteaux'],
    serviceContent: {
      paysagiste: {
        content: `
          Le schiste pourpré affleure à quelques centimètres sous la surface des coteaux de Savennières. Ce substrat maigre, caillouteux et naturellement drainé ne retient ni l'eau stagnante ni les excès d'humidité — un avantage pour l'enracinement des végétaux, à condition de sélectionner des espèces tolérantes à la sécheresse estivale. Le sol impose un cadre : travailler avec lui, pas contre lui.

          L'exposition sud-est face à la Loire crée un microclimat singulier dans le Maine-et-Loire. La réverbération du fleuve et l'accumulation de chaleur dans la roche permettent la culture d'espèces habituellement cantonnées au pourtour méditerranéen : lavandes, romarins, santolines, cistes, figuiers. La palette végétale envisageable ici dépasse largement celle des communes voisines sur sols profonds et argileux.

          Les propriétés de caractère — maisons de vignerons en tuffeau, corps de ferme rénovés, manoirs sur les hauteurs — appellent des aménagements cohérents avec le paysage viticole environnant. Murets en schiste local, escaliers de pierre sèche, graves de Loire pour les cheminements : les matériaux du terroir s'intègrent sans artifice dans ces jardins pentus. Le travail en terrasses successives structure l'espace tout en canalisant le ruissellement sur les pentes.

          Du côté d'Épiré, les terrains plus plats et les sols légèrement plus profonds accueillent des compositions différentes — massifs de rosiers, haies champêtres, fruitiers en espalier. Sur les coteaux de la Roche-aux-Moines, la rocaille et les plantations de type garrigue s'imposent naturellement, prolongeant l'atmosphère viticole jusque dans les jardins privés.
        `,
        metaDescription: 'Paysagiste à Savennières — aménagement de jardins sur sols schisteux drainants, terrasses en pierre locale et plantations méditerranéennes sur coteaux de Loire.',
        highlights: [
          'Aménagement sur sols schisteux drainants des coteaux viticoles',
          'Terrasses et murets en schiste local et pierre sèche',
          'Plantations méditerranéennes adaptées au microclimat ligérien',
          'Jardins de propriétés en tuffeau intégrés au paysage viticole',
          'Rocaille et garrigue sur les pentes exposées sud-est',
        ],
      },
      elagage: {
        content: `
          Chênes pubescents, pins maritimes, tilleuls et figuiers centenaires composent le patrimoine arboré de Savennières. Ces essences, façonnées par le microclimat ligérien et le sol schisteux, développent des ports souvent irréguliers — troncs noueux, houppiers asymétriques orientés par les vents dominants d'ouest. La taille respecte cette morphologie plutôt que de chercher à l'uniformiser.

          Sur les coteaux, les arbres s'enracinent dans les fissures du schiste et de la rhyolite. L'ancrage est solide en profondeur mais le volume de terre exploitable reste limité. Cette contrainte produit des systèmes racinaires concentrés qui rendent certains sujets sensibles aux épisodes de sécheresse prolongée. Un arbre stressé hydriquement développe du bois mort dans le houppier — signal qui appelle une taille sanitaire ciblée avant que les branches ne deviennent dangereuses.

          Les propriétés en tuffeau posent un problème récurrent : branches frottant sur les toitures, gourmands envahissant les façades, racines menaçant les murets de soutènement. La taille douce permet de dégager les structures bâties sans déséquilibrer la charpente de l'arbre. L'intervention se fait en grimpe — les pentes et l'étroitesse des chemins bordés de murets rendent l'accès en nacelle souvent impossible sur cette commune.

          Les fruitiers — figuiers, pruniers, cerisiers — abondent dans les jardins clos du bourg et d'Épiré. La taille de fructification s'effectue en fin d'hiver, hors gel, pour favoriser la mise à fruit sans affaiblir le sujet. Sur les figuiers, une taille légère suffit : supprimer le bois mort et les rameaux qui se croisent à l'intérieur de la ramure.
        `,
        metaDescription: 'Élagage à Savennières : taille douce sur coteaux schisteux, grimpe près des propriétés en tuffeau, taille sanitaire et de fructification des fruitiers.',
        highlights: [
          'Taille douce respectant le port naturel des arbres de coteau',
          'Intervention en grimpe sur parcelles pentues et enclavées',
          'Dégagement des façades en tuffeau et des toitures en ardoise',
          'Taille sanitaire sur arbres stressés par la sécheresse estivale',
          'Taille de fructification des figuiers, pruniers et cerisiers',
        ],
      },
      'entretien-jardin': {
        content: `
          La sécheresse estivale frappe tôt sur les coteaux schisteux. Dès juin, le sol maigre et drainant perd toute réserve hydrique, et les pelouses jaunissent si elles n'ont pas été préparées. L'alternative au gazon classique reste la prairie sèche fleurie — achillées, fétuques, trèfles — qui tolère les périodes sans eau et reverdit naturellement aux premières pluies d'automne.

          Sur les terrains plus plats d'Épiré, le sol légèrement plus profond autorise des pelouses conventionnelles, mais l'entretien diffère des communes sur argile. La tonte peut être espacée : la croissance ralentit vite en été sur sol drainant. Le mulching restitue l'azote et protège les racines de l'évaporation. L'aération mécanique, moins critique ici que sur sol compact, reste utile au printemps pour décompacter le piétinement hivernal.

          Le désherbage en contexte viticole exclut tout recours aux produits phytosanitaires. Binage manuel, paillage minéral — graviers de schiste, pouzzolane — et couvre-sols compétitifs (thym serpolet, sédum) constituent les leviers principaux. Les murets en pierre sèche, omniprésents à Savennières, abritent une faune auxiliaire — lézards, carabes — qu'il convient de préserver lors des interventions.

          Les haies reflètent le caractère viticole de la commune : lauriers-tins, fusains et buis taillés dans les jardins clos du bourg, haies champêtres libres en périphérie. Les rosiers grimpants et les glycines qui habillent les façades en tuffeau demandent un palissage et une taille annuelle pour contenir leur développement sans endommager la pierre tendre.
        `,
        metaDescription: 'Entretien de jardin à Savennières : tonte sur sols schisteux drainants, désherbage sans produit chimique en contexte viticole, taille de haies et rosiers.',
        highlights: [
          'Tonte et prairie sèche adaptées aux sols schisteux drainants',
          'Désherbage mécanique sans produit chimique en zone viticole',
          'Paillage minéral en schiste et pouzzolane sur massifs secs',
          'Taille de haies persistantes et caduques selon calendrier',
          'Palissage et taille des grimpantes sur façades en tuffeau',
        ],
      },
      abattage: {
        content: `
          Les coteaux pentus de la rive droite de la Loire compliquent l'accès aux arbres à abattre sur une partie de Savennières. Chemins étroits bordés de murets en schiste, parcelles en dénivelé, proximité des vignes et des bâtis en tuffeau : l'abattage direct par chute orientée est rarement envisageable. Le démontage par sections, avec descente de chaque tronçon au cordage, reste la méthode standard sur ce type de terrain.

          Les frênes constituent un motif d'abattage récurrent dans le secteur ligérien. La chalarose, maladie fongique qui provoque le dessèchement progressif du houppier, touche les frênes communs présents en bordure de Loire et dans les haies bocagères. Quand le dépérissement dépasse la moitié du houppier, la taille sanitaire ne suffit plus et l'abattage devient la seule option réaliste.

          Le dessouchage sur substrat schisteux est plus lent que sur sol meuble. La rogneuse bute sur les blocs de roche et les affleurements de rhyolite, ce qui allonge le temps de travail et exige un matériel renforcé. Le broyat de souche, mélangé à du compost, sert à reconstituer une poche de terre végétale dans le trou laissé par l'extraction — condition nécessaire à toute replantation sur ces sols maigres.

          Les figuiers et les pins qui ont poussé sans formation dans les terrains en friche atteignent parfois des dimensions problématiques. Leur suppression libère de la lumière et de l'espace racinaire pour les plantations voisines. Sur les parcelles viticoles reconverties en jardins d'agrément, le débroussaillage et l'abattage sélectif précèdent tout projet de réaménagement paysager.
        `,
        metaDescription: 'Abattage d\'arbres à Savennières : démontage par sections sur coteaux schisteux, dessouchage sur roche, abattage de frênes chalarosés en bord de Loire.',
        highlights: [
          'Démontage par sections sur coteaux pentus et enclavés',
          'Dessouchage à la rogneuse sur substrat schisteux et rhyolite',
          'Abattage de frênes atteints de chalarose en zone ligérienne',
          'Débroussaillage et abattage sélectif sur parcelles en friche',
          'Évacuation et broyage des rémanents pour valorisation sur place',
        ],
      },
    },
  },
  {
    slug: 'saint-sylvain-anjou',
    name: 'Saint-Sylvain-d\'Anjou',
    department: 'Maine-et-Loire',
    postalCode: '49480',
    population: '5 500',
    distance: '8 km',
    geo: { lat: 47.495, lng: -0.481 },
    description:
      'Commune résidentielle au nord-est d\'Angers, Saint-Sylvain-d\'Anjou offre un cadre de vie familial avec des quartiers pavillonnaires bien établis et un environnement verdoyant.',
    specificContent: `
      Saint-Sylvain-d'Anjou, à quelques minutes d'Angers par la route de Paris, est une commune résidentielle prisée des familles pour son cadre de vie paisible. Les quartiers pavillonnaires s'y sont développés depuis les années 1970, créant un tissu résidentiel varié où coexistent des jardins de différentes générations et de styles divers.

      Le sol saint-sylvainois est principalement limono-argileux, avec une bonne capacité de rétention d'eau. Ce sol fertile convient à la majorité des végétaux d'ornement et des arbres fruitiers. Il peut cependant poser des problèmes de stagnation en hiver, et un drainage périphérique est recommandé pour les nouvelles constructions.

      Les jardins de 400 à 900 m² demandent une conception réfléchie pour optimiser chaque espace : terrasse de réception, coin de détente ombragé, aire de jeux et potager productif. De nombreux jardins plantés dans les années 1980-1990 nécessitent une rénovation : conifères disproportionnés, massifs envahis, pelouses fatiguées. Art des Jardins restructure ces espaces avec des essences plus adaptées.

      La commune étant en zone périurbaine, de nombreux jardins combinent agrément et potager familial. Les carrés potagers surélevés, faciles à entretenir et esthétiques, sont associés à des rotations de cultures et des variétés adaptées au terroir angevin pour des récoltes généreuses du printemps à l'automne.
    `,
    neighborhoods: ['Bourg', 'Le Plessis-Grammoire', 'La Papillaie', 'Les Music\'Halles', 'Le Grand-Coudray'],
    serviceContent: {
      paysagiste: {
        content: `
          Le sol limono-argileux qui caractérise Saint-Sylvain-d'Anjou retient bien l'eau et les éléments nutritifs, ce qui en fait un support de plantation polyvalent. Rosiers, hortensias, érables du Japon, graminées ornementales — la palette envisageable est large, à condition de travailler le drainage en amont sur les parcelles les plus basses, là où l'eau stagne en hiver.

          Les lotissements développés à partir des années 1970 ont produit des jardins de 400 à 900 m², une surface suffisante pour structurer des espaces distincts mais trop limitée pour improviser. Terrasse, massifs, circulation, coin ombragé : chaque zone doit trouver sa place dans un plan cohérent. Sur les parcelles plus récentes, le terrain livré nu demande un apport de terre végétale et un engazonnement complet avant toute plantation.

          Beaucoup de jardins plantés dans les années 1980-1990 arrivent à un stade de saturation. Les conifères ont pris des proportions incompatibles avec la parcelle, les massifs se sont appauvris, les haies monotones de thuyas ou de lauriers vieillissent mal. La restructuration de ces espaces passe par un tri sélectif — conserver les sujets structurants, supprimer ce qui encombre — et une replantation en essences mieux proportionnées au terrain disponible.

          La proximité de la route de Paris et des axes passants crée un besoin d'intimité dans certains quartiers. Les haies mixtes associant persistants et caducs — photinias, charmilles, viornes, fusains — offrent un écran végétal dense tout en évitant la monotonie des haies monospécifiques. Le choix d'essences à croissance modérée limite la fréquence de taille.
        `,
        metaDescription: 'Aménagement paysager à Saint-Sylvain-d\'Anjou — sols limono-argileux, restructuration de jardins pavillonnaires et plantations adaptées au terrain local.',
        highlights: [
          'Plantations adaptées au sol limono-argileux fertile',
          'Restructuration de jardins pavillonnaires des années 1980-1990',
          'Création de jardins complets sur terrain nu en lotissement récent',
          'Haies mixtes brise-vue pour parcelles en bordure d\'axes passants',
          'Drainage préventif sur parcelles basses sujettes à la stagnation',
        ],
      },
      elagage: {
        content: `
          Érables, tilleuls, chênes pédonculés et bouleaux forment l'essentiel du patrimoine arboré de Saint-Sylvain-d'Anjou. Dans les quartiers pavillonnaires les plus anciens, ces arbres dépassent souvent quinze mètres et leur ramure empiète sur les toitures, les lignes électriques ou les propriétés voisines.

          La taille douce s'impose sur ces sujets matures. Le principe : alléger la couronne en supprimant le bois mort, les branches qui se croisent et les rejets, sans coupe drastique qui provoquerait une réaction de stress et une repousse anarchique. Sur le sol limono-argileux de la commune, l'enracinement des grands feuillus est profond et vigoureux — un élagage trop sévère romprait l'équilibre entre houppier et système racinaire.

          Les conifères plantés en haie dans les lotissements des années 1970-1980 posent un problème récurrent. Thuyas, cyprès de Leyland et épicéas atteignent huit à douze mètres et créent un ombrage excessif sur les parcelles mitoyennes. Les résineux ne repartent pas sur le vieux bois, ce qui limite toute réduction significative. Quand la hauteur est incompatible avec le voisinage, l'abattage reste souvent la seule option réaliste.

          Les fruitiers sont courants dans les jardins de la commune — pommiers, poiriers, cerisiers, noyers. Leur taille obéit à un calendrier précis : fructification en fin d'hiver pour les pommiers et poiriers, taille douce après récolte pour les cerisiers, qui supportent mal les coupes en période de dormance. Un fruitier mal taillé produit du bois au détriment des fruits.
        `,
        metaDescription: 'Élagage à Saint-Sylvain-d\'Anjou : taille douce des feuillus matures en quartier pavillonnaire, gestion des conifères, entretien des fruitiers.',
        highlights: [
          'Taille douce des érables, tilleuls et chênes en zone résidentielle',
          'Gestion des conifères disproportionnés en lotissement',
          'Taille de fructification des pommiers, poiriers et cerisiers',
          'Suppression du bois mort et allègement de ramure',
          'Intervention à proximité des toitures et lignes électriques',
        ],
      },
      'entretien-jardin': {
        content: `
          Sur sol limono-argileux, la pelouse pousse avec vigueur au printemps — tonte hebdomadaire d'avril à juin — puis ralentit en été quand la terre se fissure en surface. Cette alternance entre excès d'eau hivernal et sécheresse estivale caractérise l'entretien des jardins à Saint-Sylvain-d'Anjou. Une scarification au printemps, suivie d'un terreautage sableux, améliore la perméabilité et limite le compactage.

          La mousse colonise facilement les zones ombragées par les grands arbres. Plutôt qu'un traitement chimique, l'aération mécanique combinée à un réensemencement en graminées d'ombre — fétuques fines, ray-grass anglais — donne des résultats durables. En plein soleil, les adventices à rhizomes — liseron, chiendent — profitent de la fertilité du sol et exigent un désherbage régulier, idéalement mécanique.

          Les haies constituent un poste d'entretien important dans les quartiers pavillonnaires. Les thuyas et lauriers omniprésents demandent deux à trois tailles par an pour rester contenus. Les haies mixtes, de plus en plus courantes, nécessitent une taille plus nuancée — chaque essence a son propre rythme de croissance. Le photinia se taille après la pousse rouge printanière, le charme en été une fois la croissance stabilisée.

          Le nettoyage automnal prend une dimension particulière dans les rues bordées de feuillus. Les feuilles mortes d'érables et de tilleuls forment un tapis épais qui, laissé en place sur la pelouse, étouffe le gazon et favorise les maladies cryptogamiques. Le ramassage régulier, suivi d'un compostage en tas ou en bac, transforme cette contrainte en ressource pour les massifs.
        `,
        metaDescription: 'Entretien de jardin à Saint-Sylvain-d\'Anjou : tonte sur sol limono-argileux, taille de haies en lotissement, désherbage mécanique et gestion de la mousse.',
        highlights: [
          'Tonte et aération sur sol limono-argileux compact',
          'Traitement anti-mousse mécanique en zones ombragées',
          'Taille de haies de thuyas, lauriers et haies mixtes',
          'Scarification et terreautage saisonnier des pelouses',
          'Désherbage mécanique sans produit chimique',
        ],
      },
      abattage: {
        content: `
          Les parcelles mitoyennes des lotissements de Saint-Sylvain-d'Anjou laissent peu de marge pour un abattage direct. Quand un arbre doit être retiré — conifère devenu trop imposant, feuillu en déclin sanitaire, sujet déstabilisé par une tempête —, le démontage par sections reste la méthode standard. L'élagueur-grimpeur travaille de la cime vers la base, descendant chaque tronçon au cordage pour éviter tout impact sur les clôtures, abris et constructions voisines.

          Les conifères représentent une part importante des demandes. Épicéas jaunissants, thuyas dépérissants, pins trop proches des fondations — ces arbres, plantés il y a quarante ou cinquante ans dans des jardins alors vides, sont devenus incompatibles avec l'espace disponible. Leur système racinaire superficiel les rend aussi plus vulnérables aux coups de vent que les feuillus bien ancrés dans le sol limono-argileux.

          Le dessouchage à la rogneuse s'effectue sans difficulté majeure sur les limons de la commune. La machine réduit la souche en copeaux sur 30 à 40 centimètres de profondeur, suffisant pour permettre un réengazonnement ou une replantation. Sur les zones les plus argileuses, le trou de dessouchage peut retenir l'eau en hiver ; un comblement avec un mélange drainant — graviers, terre végétale, compost — évite cette stagnation.

          Après tempête, les branches cassées suspendues dans le houppier constituent un risque sous-estimé. Elles peuvent tomber des semaines plus tard, sans signal. Un diagnostic visuel après chaque épisode venteux permet d'identifier ces branches pendantes et de les retirer avant qu'elles ne causent des dégâts sur les véhicules, les clôtures ou les passants.
        `,
        metaDescription: 'Abattage d\'arbres à Saint-Sylvain-d\'Anjou : démontage par sections en lotissement, retrait de conifères, dessouchage sur sol limono-argileux.',
        highlights: [
          'Démontage par sections en zone résidentielle mitoyenne',
          'Retrait de conifères disproportionnés (épicéas, thuyas, pins)',
          'Dessouchage à la rogneuse sur sol limono-argileux',
          'Diagnostic post-tempête des branches suspendues',
          'Broyage et évacuation des rémanents sur place',
        ],
      },
    },
  },
  {
    slug: 'soulaines-sur-aubance',
    name: 'Soulaines-sur-Aubance',
    department: 'Maine-et-Loire',
    postalCode: '49610',
    population: '3 200',
    distance: '15 km',
    geo: { lat: 47.358, lng: -0.549 },
    description:
      'Commune rurale au sud d\'Angers traversée par l\'Aubance, appréciée pour son calme, ses paysages de bocage préservés et ses vins de l\'appellation Coteaux-de-l\'Aubance.',
    specificContent: `
      Soulaines-sur-Aubance, commune rurale au sud d'Angers, offre un cadre de vie paisible le long de la rivière Aubance qui a donné son nom à l'appellation viticole locale. Le paysage est typique du bocage angevin méridional : coteaux doux couverts de vignes, vallons frais bordés de haies vives, prairies pâturées et boisements de chênes et de châtaigniers. Les propriétés sont souvent généreuses, de 1 000 à 5 000 m².

      Le terroir est marqué par des sols argilo-calcaires sur les coteaux et des sols alluviaux le long de l'Aubance. Les sols calcaires sont propices aux lavandes, buis et plantes de rocaille, tandis que les zones alluviales conviennent aux arbres fruitiers, rosiers et vivaces gourmandes en eau. L'Aubance crée aussi des zones fraîches propices aux hostas, fougères et astilbes.

      Art des Jardins conçoit ici des jardins de curé revisités, mêlant plantes utiles et ornementales : rosiers anciens, pivoines, iris germanica, aromatiques, petits fruits et fruitiers palissés. Le bocage environnant inspire des haies champêtres de charme, noisetier, prunellier et aubépine, ainsi que des haies gourmandes de cassissiers, groseilliers et framboisiers.

      Les anciennes fermes reconverties offrent un cadre idéal pour des projets paysagers ambitieux : cours, dépendances et vergers qui constituent la base d'aménagements de charme intégrés dans le paysage viticole et bocager de la commune.
    `,
    neighborhoods: ['Bourg', 'Saint-Melaine', 'L\'Aubance', 'Les Coteaux'],
    serviceContent: {
      paysagiste: {
        content: `
          Les sols argilo-calcaires des coteaux de Soulaines-sur-Aubance se réchauffent vite au printemps et retiennent bien les éléments nutritifs, mais leur teneur en argile les rend collants et difficiles à travailler en période humide. Toute création de massif ou de terrasse passe par un travail du sol en conditions ressuyées, généralement entre avril et mai ou en septembre-octobre.

          Le long de l'Aubance, les sols alluviaux changent de nature : plus légers, plus frais, ils conviennent aux espèces qui apprécient l'humidité sans excès — cornouillers, viornes, saules ornementaux, hostas et fougères. Cette transition entre coteau sec et fond de vallée humide offre une palette végétale étendue sur une même propriété, à condition de respecter les exigences de chaque zone.

          Les propriétés de 1 000 à 5 000 m², fréquentes sur la commune, permettent de structurer l'espace en séquences : un jardin d'agrément proche de l'habitation, un verger ou un potager en fond de parcelle, des haies champêtres en limite. Le paysage viticole environnant — coteaux plantés, rangs de vignes, murets de pierre — constitue une référence visuelle que l'aménagement gagne à prolonger plutôt qu'à contredire.

          Les anciennes fermes et longères reconverties présentent des cours fermées et des dépendances en tuffeau ou moellon local. L'aménagement de ces espaces minéraux — dallage en pierre naturelle, massifs surélevés, treilles et grimpantes sur les façades — s'intègre dans l'architecture existante sans la dénaturer.
        `,
        metaDescription: 'Paysagiste à Soulaines-sur-Aubance : aménagement sur sols argilo-calcaires, jardins de propriétés rurales et plantations adaptées au bocage de l\'Aubance.',
        highlights: [
          'Création de massifs sur sols argilo-calcaires de coteau',
          'Plantations de fond de vallée adaptées à l\'humidité de l\'Aubance',
          'Aménagement de cours de fermes et longères en pierre locale',
          'Haies champêtres de bocage : charme, noisetier, aubépine',
          'Structuration de grands jardins ruraux de 1 000 à 5 000 m²',
        ],
      },
      elagage: {
        content: `
          Chênes sessiles, châtaigniers et frênes composent l'ossature arborée des propriétés de Soulaines-sur-Aubance. Sur les coteaux, ces arbres développent des houppiers larges favorisés par l'ensoleillement généreux des versants exposés au sud. Leurs branches basses, qui descendent parfois jusqu'à deux mètres du sol, nécessitent un relèvement de couronne pour dégager les accès et laisser passer la lumière.

          Le long de l'Aubance, saules blancs et aulnes glutineux bordent la rivière. Ces essences à croissance rapide produisent un bois tendre et cassant. Les branches mortes s'accumulent dans la ramure et tombent sans prévenir lors des coups de vent. Un nettoyage régulier du bois mort — tous les trois à cinq ans — limite ce risque sans perturber le rôle de corridor écologique de la ripisylve.

          Les vergers anciens de la commune — pommiers, poiriers, cerisiers, noyers — portent souvent des années de croissance non maîtrisée. La taille de restauration s'étale sur deux à trois saisons pour ne pas épuiser l'arbre : suppression du bois mort la première année, éclaircissage de la charpente la deuxième, mise en forme de fructification la troisième. Forcer le processus en une seule intervention affaiblit le sujet et favorise les rejets anarchiques.

          Les parcelles viticoles reconverties en jardins d'agrément conservent parfois des arbres de haut jet en bordure — peupliers, chênes — dont les racines s'étendent dans l'ancien vignoble. La taille de ces sujets tient compte de l'équilibre entre houppier et système racinaire pour éviter un déséquilibre mécanique.
        `,
        metaDescription: 'Élagage à Soulaines-sur-Aubance : taille douce des chênes et châtaigniers sur coteaux, entretien de la ripisylve de l\'Aubance et restauration de vergers.',
        highlights: [
          'Taille douce des chênes et châtaigniers de coteau argilo-calcaire',
          'Nettoyage du bois mort en ripisylve le long de l\'Aubance',
          'Restauration progressive de vergers anciens sur plusieurs saisons',
          'Relèvement de couronne sur arbres à branches basses',
          'Diagnostic de sujets à risque en bordure de parcelles viticoles',
        ],
      },
      'entretien-jardin': {
        content: `
          L'automne dans la vallée de l'Aubance apporte une humidité persistante qui transforme les pelouses en terrain propice aux mousses et au feutrage racinaire. Les sols argilo-calcaires, gorgés d'eau d'octobre à mars, se compactent sous le poids des passages répétés. L'aération mécanique au printemps — carottage ou scarification — restaure la circulation d'air et d'eau dans les dix premiers centimètres du sol.

          Les haies bocagères qui délimitent les propriétés sont composées de charme, noisetier, prunellier et aubépine. Leur taille s'effectue après la nidification, en septembre, pour respecter la faune qu'elles abritent. Une taille annuelle suffit à maintenir leur forme et leur densité. Les haies persistantes des lotissements plus récents — lauriers, photinias, eleagnus — demandent deux passages par an, en juin et en septembre.

          Les massifs de vivaces adaptés au sol calcaire — iris germanica, pivoines, lavandes, sauges — demandent peu d'intervention en saison mais bénéficient d'un nettoyage complet en fin d'hiver : suppression des tiges sèches, division des touffes tous les trois à quatre ans, apport de compost. Les rosiers, sensibles au calcaire actif, nécessitent un amendement en terre de bruyère et en fer chélaté pour éviter la chlorose foliaire.

          Le long de l'Aubance, les jardins en fond de vallée restent humides tard en saison. La tonte y est plus fréquente au printemps — parfois hebdomadaire en avril-mai — et les adventices à rhizomes profitent de la fraîcheur pour coloniser les massifs. Le désherbage mécanique régulier et le paillage épais limitent leur progression.
        `,
        metaDescription: 'Entretien de jardin à Soulaines-sur-Aubance : aération sur sol argilo-calcaire, taille de haies bocagères, gestion de l\'humidité en vallée de l\'Aubance.',
        highlights: [
          'Aération et scarification sur sol argilo-calcaire compacté',
          'Taille de haies bocagères après nidification (charme, noisetier, aubépine)',
          'Entretien de massifs calcicoles : iris, pivoines, lavandes',
          'Correction de chlorose sur rosiers en sol calcaire actif',
          'Désherbage mécanique et paillage en fond de vallée humide',
        ],
      },
      abattage: {
        content: `
          Les cours fermées des anciennes fermes de Soulaines-sur-Aubance posent un problème récurrent : des arbres devenus trop volumineux dans des espaces enclavés entre bâtiments en pierre, dépendances et murets. L'abattage directionnel est rarement envisageable. Le démontage par sections, tronçon par tronçon depuis la cime, reste l'approche la plus courante pour maîtriser la chute de chaque pièce de bois.

          Les châtaigniers de la commune sont sujets à la maladie de l'encre et au chancre de l'écorce, deux pathologies favorisées par les sols humides des zones basses. Un châtaignier atteint présente des branches mortes en cime, un écoulement noirâtre sur le tronc et un affaiblissement général qui le rend vulnérable aux coups de vent. L'abattage s'impose quand la progression de la maladie compromet la stabilité de l'arbre.

          Les peupliers plantés le long de l'Aubance ou en limite de parcelle atteignent des hauteurs considérables. Leur bois cassant et leur enracinement superficiel en font des sujets à risque lors des tempêtes d'automne et d'hiver. La chute d'un peuplier sur une toiture ou une clôture représente un coût bien supérieur à celui d'un retrait préventif.

          Le dessouchage en sol argilo-calcaire demande un travail adapté. La rogneuse de souche fonctionne efficacement dans les couches supérieures, mais les racines profondes ancrées dans le calcaire sous-jacent résistent au broyage. Sur les souches de grand diamètre, le travail se complète à la mini-pelle pour extraire les pivots principaux.
        `,
        metaDescription: 'Abattage d\'arbres à Soulaines-sur-Aubance : démontage en cours de ferme, retrait de châtaigniers malades, peupliers à risque et dessouchage sur calcaire.',
        highlights: [
          'Démontage par sections dans les cours de fermes enclavées',
          'Abattage de châtaigniers atteints par la maladie de l\'encre',
          'Retrait préventif de peupliers à bois cassant le long de l\'Aubance',
          'Dessouchage combiné rogneuse et mini-pelle sur sol calcaire',
          'Évacuation et broyage des rémanents sur propriétés rurales',
        ],
      },
    },
  },
  {
    slug: 'loire-authion',
    name: 'Loire-Authion',
    department: 'Maine-et-Loire',
    postalCode: '49800',
    population: '16 000',
    distance: '15 km',
    geo: { lat: 47.435, lng: -0.415 },
    description:
      'Commune nouvelle regroupant six bourgs à l\'est d\'Angers, Loire-Authion est le berceau historique de l\'horticulture angevine, entre Loire et Authion.',
    specificContent: `
      Loire-Authion, née en 2016 de la fusion de six communes historiques — Brain-sur-l'Authion, Andard, La Bohalle, La Daguenière, Corné et Saint-Mathurin-sur-Loire — est intimement liée à l'histoire de l'horticulture en Anjou. Ce terroir exceptionnel entre Loire et Authion a vu naître et prospérer des dizaines de pépinières et de rosiéristes qui ont fait la renommée internationale de l'Anjou végétal.

      La plaine alluviale offre des sols d'une richesse exceptionnelle. Les limons fertiles déposés par les crues ont créé une terre noire, profonde et meuble, idéale pour toutes les cultures. Les végétaux s'y développent avec une vigueur remarquable. Le vent d'ouest dominant, souvent sous-estimé, peut cependant dessécher les plantations, ce qui nécessite d'intégrer des brise-vent naturels dans les aménagements.

      La diversité des bourgs crée une variété de paysages et de types de jardins. À Saint-Mathurin-sur-Loire, les propriétés en bord de Loire offrent des vues exceptionnelles. À Brain-sur-l'Authion, les fermes horticoles reconverties présentent de vastes terrains structurés. À Corné, les jardins pavillonnaires récents demandent des aménagements fonctionnels. Art des Jardins travaille avec les pépinières locales qui perpétuent le savoir-faire angevin.

      Le risque d'inondation est un paramètre important. La levée de Loire protège la plaine, mais les jardins sont conçus pour résister aux submersions : végétaux résilients, matériaux résistants à l'eau et terrasses en pierre naturelle privilégiées dans les zones exposées.
    `,
    neighborhoods: ['Brain-sur-l\'Authion', 'Andard', 'La Bohalle', 'La Daguenière', 'Corné', 'Saint-Mathurin-sur-Loire'],
    serviceContent: {
      paysagiste: {
        content: `
          Les limons noirs de la plaine alluviale, déposés par les crues successives de la Loire et de l'Authion, comptent parmi les sols les plus fertiles du Maine-et-Loire. Profonds, meubles et riches en matière organique, ils permettent un enracinement rapide et une reprise végétale vigoureuse — à condition de gérer leur tendance à l'engorgement hivernal par un drainage adapté.

          Six bourgs, six configurations de jardins. À Saint-Mathurin-sur-Loire, les propriétés en surplomb de la levée disposent de terrains exposés au vent d'ouest dominant : les haies brise-vent en charme ou en troène y conditionnent la réussite de tout aménagement. À Brain-sur-l'Authion, les anciens terrains horticoles reconvertis en parcelles résidentielles offrent des surfaces généreuses, souvent supérieures à 1 000 m², où plusieurs ambiances paysagères peuvent coexister.

          Le patrimoine horticole local oriente naturellement les choix de plantation. Rosiers, hortensias, magnolias, camélias — ces végétaux emblématiques de l'Anjou trouvent ici des conditions optimales. Les pépinières encore actives sur la commune fournissent des sujets acclimatés, cultivés sur le même terroir que les jardins de destination.

          Dans les zones inondables situées en contrebas de la levée, le choix des matériaux et des végétaux intègre le risque de submersion. Pierre de tuffeau, bois classe IV, saules, aulnes et iris des marais composent des aménagements capables de supporter une montée des eaux sans dommage structurel.
        `,
        metaDescription: 'Paysagiste à Loire-Authion : aménagement de jardins sur limons alluviaux fertiles, haies brise-vent, plantations adaptées au terroir horticole angevin.',
        highlights: [
          'Aménagement sur limons alluviaux fertiles entre Loire et Authion',
          'Haies brise-vent adaptées à l\'exposition ouest dominante',
          'Végétaux issus des pépinières locales du terroir horticole',
          'Jardins résilients en zone inondable avec matériaux adaptés',
          'Création paysagère sur grands terrains d\'anciens sites horticoles',
        ],
      },
      elagage: {
        content: `
          Peupliers noirs, saules blancs, frênes communs, aulnes glutineux — la ripisylve qui borde l'Authion et les boires de Loire constitue l'essentiel du patrimoine arboré de la commune. Ces essences de milieu humide poussent vite et atteignent des dimensions imposantes en quelques décennies, mais leur bois tendre les rend vulnérables aux ruptures de branches lors des coups de vent.

          Les frênes méritent une attention particulière. La chalarose, maladie fongique qui progresse en Val de Loire, provoque le dessèchement des houppiers et fragilise la structure des sujets atteints. Un élagage sanitaire ciblé — suppression du bois mort, réduction de voilure — prolonge la durée de vie des arbres encore viables tout en limitant la propagation des spores.

          Sur les parcelles résidentielles, les arbres d'ornement plantés dans les lotissements des années 1980-1990 arrivent à maturité. Érables, tilleuls, marronniers développent des couronnes larges qui empiètent sur les toitures, occultent la lumière et interfèrent avec les lignes aériennes. La taille douce par éclaircissage restaure la luminosité sans mutiler la charpente.

          Le sol alluvial, meuble et profond, favorise un enracinement puissant mais parfois déséquilibré. Les arbres implantés près des berges ou en terrain régulièrement saturé d'eau développent des systèmes racinaires asymétriques. Un diagnostic d'ancrage précède toute intervention sur ces sujets pour évaluer le risque de basculement.
        `,
        metaDescription: 'Élagage à Loire-Authion : taille douce des arbres de ripisylve et d\'ornement, suivi sanitaire des frênes, diagnostic d\'ancrage en sol alluvial meuble.',
        highlights: [
          'Taille douce des peupliers, saules et frênes de ripisylve',
          'Suivi sanitaire et élagage des frênes face à la chalarose',
          'Éclaircissage des arbres matures en lotissement',
          'Diagnostic d\'ancrage racinaire en sol alluvial saturé',
          'Intervention sur arbres en bord de berge et zone humide',
        ],
      },
      'entretien-jardin': {
        content: `
          D'avril à octobre, les pelouses installées sur limon alluvial poussent avec une vigueur que peu de sols égalent. Cette fertilité naturelle impose une fréquence de tonte soutenue — hebdomadaire au printemps, bihebdomadaire en période de pic — sous peine de voir le gazon monter en épis et étouffer les graminées fines. Le mulching restitue au sol une partie des nutriments et limite l'accumulation de feutre.

          L'humidité ambiante liée à la proximité des cours d'eau favorise le développement de la mousse et des maladies fongiques sur les gazons. La fusariose et le fil rouge apparaissent dès l'automne dans les zones mal drainées ou trop ombragées. Un scarifiage en mars-avril, suivi d'un réensemencement ciblé avec des variétés résistantes, rétablit la densité du tapis herbeux.

          Les haies de la commune reflètent son passé horticole. Lauriers du Portugal, photinias, osmanthes, fusains — des essences moins banales que les thuyas omniprésents ailleurs — demandent des tailles précises pour conserver leur port naturel. Deux passages annuels suffisent pour les persistants, complétés par un apport de compost au pied chaque automne.

          Le vent d'ouest, constant sur la plaine, accélère l'évapotranspiration estivale. Les massifs exposés sèchent plus vite que ne le laisserait supposer la richesse du sol. Un paillage organique épais — broyat de branches, paillettes de chanvre — maintient l'humidité en surface et limite le désherbage à quelques interventions manuelles par saison.
        `,
        metaDescription: 'Entretien de jardin à Loire-Authion : tonte sur limon fertile, traitement mousse et maladies fongiques, taille de haies horticoles, paillage coupe-vent.',
        highlights: [
          'Tonte régulière sur sol alluvial à croissance rapide',
          'Scarifiage et traitement des maladies fongiques liées à l\'humidité',
          'Taille de haies d\'essences horticoles locales',
          'Paillage organique contre l\'évapotranspiration éolienne',
          'Entretien adapté aux six bourgs de la commune nouvelle',
        ],
      },
      abattage: {
        content: `
          Les peupliers d'Italie, plantés en alignement le long des chemins ruraux et en limite de propriétés, constituent le motif d'abattage le plus fréquent sur la commune. Après quarante à cinquante ans, ces arbres à croissance rapide deviennent cassants : le bois se creuse, les charpentières se fendent, et chaque tempête arrache des branches maîtresses. Leur retrait s'impose quand le risque de chute menace les habitations ou les voies de circulation.

          L'accès aux arbres situés en bordure de l'Authion ou dans les parcelles enclavées de La Bohalle et La Daguenière complique les interventions. Le démontage par sections, effectué par un élagueur-grimpeur qui descend chaque tronçon au cordage, reste la méthode la plus sûre quand ni la grue ni la nacelle ne peuvent s'approcher. Le sol alluvial, meuble en surface, impose par ailleurs un calage rigoureux du matériel lourd pour éviter l'enlisement.

          Le dessouchage en terrain limoneux se déroule dans de bonnes conditions : la rogneuse travaille un sol souple, sans les blocages que provoquent les cailloux ou l'argile compacte. La souche est réduite en copeaux jusqu'à 30-40 cm sous le niveau du sol, et le mélange copeaux-terre peut être laissé en place pour se décomposer ou remplacé par de la terre végétale si une replantation est prévue.

          Les frênes atteints de chalarose à un stade avancé — houppier desséché à plus de 50 %, écorce nécrosée à la base — ne répondent plus à l'élagage sanitaire. L'abattage devient alors la seule option. Le bois contaminé est évacué et non broyé sur place pour limiter la dissémination du champignon.
        `,
        metaDescription: 'Abattage d\'arbres à Loire-Authion : démontage de peupliers vieillissants, dessouchage en sol limoneux meuble, retrait de frênes atteints de chalarose.',
        highlights: [
          'Abattage de peupliers vieillissants en alignement',
          'Démontage par sections en parcelles enclavées des six bourgs',
          'Dessouchage facilité en sol limoneux alluvial meuble',
          'Retrait sécurisé de frênes atteints de chalarose avancée',
          'Évacuation et gestion adaptée des bois contaminés',
        ],
      },
    },
  },
  {
    slug: 'longuenee-en-anjou',
    name: 'Longuenée-en-Anjou',
    department: 'Maine-et-Loire',
    postalCode: '49770',
    population: '7 500',
    distance: '15 km',
    geo: { lat: 47.535, lng: -0.635 },
    description:
      'Commune nouvelle au nord d\'Angers, Longuenée-en-Anjou allie patrimoine rural remarquable et développement résidentiel dans un cadre naturel préservé de bocage.',
    specificContent: `
      Longuenée-en-Anjou, au nord d'Angers, est une commune nouvelle issue du regroupement de La Meignanne, Le Plessis-Macé et La Membrolle-sur-Longuenée. Ce territoire étendu offre une grande diversité de paysages, du château du Plessis-Macé aux lotissements récents de La Meignanne, en passant par les fermes rénovées de La Membrolle. Le château et son parc constituent un patrimoine végétal remarquable qui inspire les propriétaires locaux.

      Les sols sont globalement argilo-limoneux, assez profonds et fertiles. Sur les hauteurs du Plessis-Macé, le substrat de grès roussard affleure, donnant des sols plus légers et mieux drainés. Dans les vallées, les sols plus humides et lourds demandent un travail d'amendement et de drainage. Les essences nobles — tilleuls, platanes, cèdres, magnolias — témoignent d'une tradition de jardinage ancienne et soignée.

      Art des Jardins accompagne chaque bourg selon ses besoins. À La Meignanne, les lotissements récents nécessitent des créations complètes : engazonnement, haies, terrasses et éclairage. Au Plessis-Macé et à La Membrolle, les propriétés anciennes demandent rénovation, taille de restauration et entretien adapté aux grands espaces.

      Le bocage bien conservé abrite une biodiversité riche. Les haies mixtes de charmes, chênes, noisetiers et aubépines constituent le maillage bocager traditionnel. Nous proposons de les enrichir avec des espèces à fleurs (viornes, cornouillers) et à fruits (pommiers sauvages, alisiers) pour maximiser l'intérêt ornemental et écologique.
    `,
    neighborhoods: ['La Meignanne', 'Le Plessis-Macé', 'La Membrolle-sur-Longuenée', 'Le Bourg', 'La Chaussée'],
    serviceContent: {
      paysagiste: {
        content: `
          Le grès roussard qui affleure sur les hauteurs du Plessis-Macé donne un sol léger, filtrant, pauvre en matière organique. Quelques centaines de mètres plus bas, vers La Meignanne, le terrain passe à une argilo-limoneuse épaisse, fertile et lourde en hiver. Cette transition géologique sur un territoire restreint conditionne chaque projet d'aménagement : les palettes végétales, les systèmes de drainage et les amendements diffèrent radicalement d'un bourg à l'autre.

          Les lotissements récents de La Meignanne présentent des parcelles de 500 à 900 m², souvent nues à la livraison. Le sol argileux compacté par les engins de chantier nécessite un décompactage mécanique avant toute plantation. Terrasses en dalles sur plots, massifs structurés de graminées et d'arbustes persistants, clôtures végétalisées — l'aménagement part de zéro et doit intégrer à la fois l'intimité, le drainage et l'usage familial.

          Du côté du Plessis-Macé, les propriétés anciennes entourant le château s'inscrivent dans un paysage plus marqué. Murs de grès, portails en fer forgé, allées gravillonnées sous des tilleuls centenaires. Les interventions paysagères y relèvent davantage de la restauration que de la création : remettre en état un parterre envahi, replanter une haie de charmes clairsemée, reprendre un muret effondré en pierre locale.

          Le bocage dense qui relie les trois bourgs offre un cadre végétal que les aménagements gagnent à prolonger plutôt qu'à contredire. Haies champêtres de cornouillers, viornes et noisetiers en limite de terrain, arbres tiges en point focal, prairies fleuries en fond de parcelle — ces éléments ancrent le jardin dans le paysage environnant.
        `,
        metaDescription: 'Paysagiste à Longuenée-en-Anjou : création de jardins sur sol argileux et grès roussard, terrasses, haies bocagères et restauration de jardins anciens.',
        highlights: [
          'Création complète sur parcelles neuves à La Meignanne',
          'Restauration de jardins anciens au Plessis-Macé',
          'Amendement et drainage adaptés au sol argilo-limoneux',
          'Haies champêtres bocagères en prolongement du paysage local',
          'Terrasses et murets en grès roussard ou pierre locale',
        ],
      },
      elagage: {
        content: `
          Tilleuls, platanes, cèdres de l'Atlas, magnolias grandiflora : le patrimoine arboré du Plessis-Macé et de La Membrolle témoigne d'une tradition de plantation ancienne, liée aux grandes propriétés et au parc du château. Ces sujets de première grandeur, dont certains dépassent vingt mètres, exigent un suivi régulier — éclaircissage de la couronne, suppression du bois mort, relèvement de la base au-dessus des toitures et des voies de passage.

          Sur le sol argileux compact de La Meignanne, les systèmes racinaires se développent en surface. Les racines traçantes soulèvent progressivement les terrasses, fissurent les murets et déstabilisent les clôtures. Un diagnostic racinaire avant intervention permet d'adapter la taille : alléger un côté pour rééquilibrer l'arbre, réduire la voilure pour limiter l'effort sur un ancrage fragilisé, ou poser un haubanage préventif sur un sujet à conserver.

          Les chênes pédonculés et les châtaigniers du bocage développent des charpentes larges et lourdes. La taille douce — suppression sélective des branches mortes, mal orientées ou en surnombre — maintient la structure sans provoquer les repousses anarchiques des coupes sévères. Sur les vieux chênes têtards encore présents le long des chemins creux, la taille de ragréage perpétue une forme traditionnelle qui fait partie du paysage de Longuenée-en-Anjou.

          Les fruitiers occupent une place importante dans les jardins de la commune. Pommiers, poiriers, cerisiers, noyers — la taille de fructification s'effectue entre novembre et février, hors gel, en supprimant les rameaux improductifs et en aérant le centre de l'arbre pour limiter les maladies cryptogamiques.
        `,
        metaDescription: 'Élagage à Longuenée-en-Anjou : taille douce de grands sujets au Plessis-Macé, éclaircissage des chênes du bocage, taille de fruitiers et diagnostic racinaire.',
        highlights: [
          'Taille douce des grands arbres patrimoniaux au Plessis-Macé',
          'Diagnostic racinaire sur sol argileux compact',
          'Éclaircissage des chênes et châtaigniers du bocage',
          'Taille de fructification des fruitiers (pommiers, poiriers, noyers)',
          'Taille de ragréage des chênes têtards en chemin creux',
        ],
      },
      'entretien-jardin': {
        content: `
          D'octobre à mars, le sol argilo-limoneux des zones basses reste gorgé d'eau. Les pelouses s'enfoncent sous le pied, la mousse colonise les parties ombragées, les engins de tonte laissent des ornières. De mai à août, le même sol se rétracte, fissure et durcit en surface. Ce cycle impose un calendrier d'entretien rigoureux : scarifiage et aération mécanique au printemps, tonte haute en été pour protéger les racines, terreautage à l'automne pour restaurer la structure.

          Les haies constituent le poste d'entretien le plus constant sur la commune. Le maillage bocager qui traverse Longuenée-en-Anjou se prolonge dans les jardins sous forme de haies de charmes, de hêtres, de troènes ou de lauriers selon les quartiers. Les persistants se taillent en juin et septembre, les caducs en fin d'hiver. Le pied de haie, souvent négligé, demande un désherbage mécanique et un paillage organique pour maintenir la vigueur des plants.

          Sur les hauteurs du Plessis-Macé, le substrat de grès plus filtrant crée des conditions différentes. Le gazon y souffre davantage de la sécheresse estivale que de l'excès d'eau hivernal. Les fétuques élevées et le trèfle nain, plus résistants au sec, constituent des alternatives pertinentes au ray-grass classique. Le paillage des massifs en couche épaisse — 8 à 10 cm de broyat de bois — limite l'évaporation et nourrit le sol par décomposition lente.

          Les grandes propriétés de La Membrolle demandent une gestion adaptée à leur surface. Tonte différenciée — ras près de la maison, plus haute en fond de parcelle —, zones de prairie fauchée deux fois par an, massifs arbustifs taillés une fois par saison. L'entretien se planifie sur l'année pour répartir les interventions.
        `,
        metaDescription: 'Entretien de jardin à Longuenée-en-Anjou : tonte et aération sur sol argileux compact, taille de haies bocagères et paillage, gestion des grandes parcelles.',
        highlights: [
          'Aération mécanique et terreautage sur sol argilo-limoneux',
          'Taille de haies bocagères et persistantes selon calendrier',
          'Tonte différenciée adaptée aux grandes propriétés',
          'Scarifiage anti-mousse dans les zones ombragées humides',
          'Paillage organique épais sur substrat de grès filtrant',
        ],
      },
      abattage: {
        content: `
          Les conifères plantés dans les années 1980-1990 à La Meignanne arrivent à un stade critique. Épicéas dont les racines superficielles soulèvent les terrasses, thuyas devenus opaques et envahissants, sapins qui privent les pièces de lumière — ces sujets, dimensionnés pour la forêt et non pour un jardin de 700 m², finissent par poser des problèmes d'encombrement que seul l'abattage résout.

          Dans les lotissements, la mitoyenneté et la proximité des constructions interdisent l'abattage direct dans la majorité des cas. Le démontage par sections s'impose : l'élagueur-grimpeur travaille de la cime vers la base, chaque tronçon descendu au cordage pour éviter tout impact sur les clôtures, toitures ou plantations voisines. Les rémanents sont broyés sur place en paillage réutilisable.

          Au Plessis-Macé et à La Membrolle, les arbres feuillus de grande taille constituent l'essentiel des interventions. Tilleuls dépérissants, châtaigniers creux, chênes fragilisés par les sécheresses successives — le diagnostic visuel et mécanique permet d'évaluer si l'arbre relève de la taille sanitaire ou de l'abattage. Le bois de chêne et de châtaignier, dense et calorifique, se valorise en bûches.

          Le dessouchage sur sol argileux demande un matériel dimensionné. L'argile compacte freine la progression de la rogneuse et colle aux outils. Après rognage, le mélange de copeaux et d'argile est excavé et remplacé par de la terre végétale amendée, prête à recevoir une nouvelle plantation ou un engazonnement.
        `,
        metaDescription: 'Abattage d\'arbres à Longuenée-en-Anjou : démontage par sections en lotissement mitoyen, abattage de feuillus au Plessis-Macé, dessouchage sur sol argileux.',
        highlights: [
          'Démontage par sections en parcelles mitoyennes à La Meignanne',
          'Abattage de conifères disproportionnés des années 1980-1990',
          'Diagnostic et abattage de feuillus dépérissants au Plessis-Macé',
          'Dessouchage à la rogneuse sur sol argileux compact',
          'Valorisation du bois de chêne et châtaignier en bûches',
        ],
      },
    },
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getServiceBySlugSeo(slug: string): ServiceCityData | undefined {
  return serviceTypes.find((s) => s.service === slug);
}

// Generate all service-city combinations
export function getAllServiceCityPaths(): { service: string; city: string }[] {
  const paths: { service: string; city: string }[] = [];
  for (const service of serviceTypes) {
    for (const city of cities) {
      paths.push({ service: service.service, city: city.slug });
    }
  }
  return paths;
}

// Main service pages (service-angers format)
export function getMainServicePages(): { slug: string; service: ServiceCityData; city: CityData }[] {
  return serviceTypes.map((service) => ({
    slug: `${service.service}-angers`,
    service,
    city: cities[0], // Angers
  }));
}

function haversineDistance(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const sinLat = Math.sin(dLat / 2);
  const sinLng = Math.sin(dLng / 2);
  const h =
    sinLat * sinLat +
    Math.cos((a.lat * Math.PI) / 180) *
      Math.cos((b.lat * Math.PI) / 180) *
      sinLng * sinLng;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export function getCitiesByProximity(fromCity: CityData, excludeSelf = true): CityData[] {
  return cities
    .filter((c) => (excludeSelf ? c.slug !== fromCity.slug : true))
    .sort((a, b) => haversineDistance(fromCity.geo, a.geo) - haversineDistance(fromCity.geo, b.geo));
}
