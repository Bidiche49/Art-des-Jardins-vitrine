export type ServiceSlug = 'paysagiste' | 'elagage' | 'entretien-jardin' | 'abattage';

export interface ServiceCityContent {
  content: string;           // 3-5 unique paragraphs about THIS service in THIS city
  metaDescription: string;   // unique meta description, 150-160 chars
  highlights?: string[];     // service-specific highlights for this city
}

export interface CityData {
  slug: string;
  name: string;
  department: string;
  postalCode: string;
  population?: string;
  distance?: string; // from Angers
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
    description:
      'Commune de l\'ouest angevin, Beaucouzé allie zones résidentielles et commerciales avec de nombreux espaces verts à entretenir.',
    specificContent: `
      Beaucouzé, située à l'ouest d'Angers le long de la route de Nantes, est une commune dynamique qui mélange harmonieusement zones résidentielles et pôle commercial. Le centre commercial Atoll a contribué à transformer le visage de la commune tout en préservant les quartiers résidentiels plus anciens qui conservent leur charme et leur végétation mature.

      Le sol de Beaucouzé est principalement composé de limons profonds reposant sur un substrat schisteux. Ces sols fertiles et bien équilibrés permettent la culture d'une large gamme de végétaux. Les rosiers, vivaces et arbustes à fleurs s'y développent particulièrement bien. Le drainage naturel peut cependant être insuffisant en période de fortes pluies hivernales, et la mise en place de drains est recommandée pour les zones les plus basses.

      Art des Jardins intervient à Beaucouzé aussi bien pour les particuliers que pour les copropriétés et les entreprises du secteur commercial. Les terrains généralement plats facilitent la création de belles pelouses et de terrasses de plain-pied, ainsi que l'installation de systèmes d'arrosage automatique pour les jardins de plus de 300 m².

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
        metaDescription: 'Élagage aux Ponts-de-Cé : taille douce sur arbres de ripisylve en bord de Loire, entretien de saules et peupliers, intervention en quartiers anciens.',
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
        metaDescription: 'Entretien de jardin aux Ponts-de-Cé : tonte sur sols sablonneux et argileux, lutte contre la mousse en milieu humide, taille de haies et ramassage.',
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
        metaDescription: 'Abattage d\'arbres aux Ponts-de-Cé : démontage par sections en zone insulaire, intervention adaptée aux crues de Loire, dessouchage en sol sablonneux.',
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
    description:
      'Commune au nord d\'Angers entre Sarthe et basses vallées angevines, Écouflant offre un cadre naturel préservé avec de beaux jardins résidentiels.',
    specificContent: `
      Écouflant, nichée entre la Sarthe et les basses vallées angevines, bénéficie d'un environnement naturel exceptionnel classé Natura 2000. Les prairies inondables, qui accueillent chaque hiver des milliers d'oiseaux migrateurs, constituent un paysage unique qui influence l'identité des jardins écouflantais. Les propriétés sont souvent généreuses, avec des terrains de 800 à 2 000 m².

      Les sols varient considérablement selon la distance à la Sarthe. En zone basse, les alluvions riches sont extrêmement fertiles mais soumises aux remontées de nappe en hiver. Sur les hauteurs du bourg et vers Éventard, les sols sablo-limoneux sont bien drainés et faciles à travailler. Le choix des végétaux et des techniques de plantation est adapté au contexte pédologique de chaque parcelle.

      Le caractère naturel de l'environnement inspire nos créations paysagères. Nous privilégions des aménagements qui s'intègrent dans ce cadre préservé : haies champêtres mêlant noisetiers, prunelliers et viornes, prairies fleuries d'espèces locales, bosquets d'essences indigènes et mares naturelles qui accueillent batraciens et libellules.

      Art des Jardins intervient à Écouflant pour des projets variés : création de jardins complets, restructuration de jardins anciens, et interventions sur les nombreux arbres de haute tige qui caractérisent la commune. Les peupliers, saules et frênes des bords de Sarthe font partie du patrimoine végétal local que nous contribuons à entretenir.
    `,
    neighborhoods: ['Bourg', 'Basse-Île', 'Éventard', 'Le Grésillé', 'La Sarthe'],
  },
  {
    slug: 'cantenay-epinard',
    name: 'Cantenay-Épinard',
    department: 'Maine-et-Loire',
    postalCode: '49460',
    population: '2 400',
    distance: '10 km',
    description:
      'Village rural au nord d\'Angers, Cantenay-Épinard conserve un caractère authentique avec ses fermes rénovées et leurs grands jardins bordant les basses vallées angevines.',
    specificContent: `
      Cantenay-Épinard, commune rurale au nord d'Angers, a su conserver un caractère authentique qui attire les amoureux de la campagne angevine. Ses deux bourgs historiques présentent un patrimoine bâti remarquable avec de nombreuses fermes en tuffeau et longères rénovées. Les grands terrains offrent des opportunités exceptionnelles de création paysagère. La commune est bordée par les basses vallées angevines, classées Natura 2000, dont les prairies humides créent un paysage d'une grande beauté.

      Les sols présentent une diversité intéressante. Dans les parties hautes, les terres limoneuses profondes offrent d'excellentes conditions pour les plantations. En descendant vers les vallées, les sols deviennent plus humides et argileux, orientant le choix vers des espèces de zone humide. Cette variation permet aussi bien de planter un verger en altitude que d'aménager un jardin d'eau en fond de vallon.

      Art des Jardins conçoit ici des projets respectueux du caractère rural : remise en état des allées en graviers, taille de restauration des arbres centenaires, création de potagers et de vergers dans l'esprit des jardins de curé angevins. Le bocage environnant inspire nos aménagements avec des haies champêtres traditionnelles composées de chênes têtards, frênes, noisetiers et aubépines.

      De nombreuses propriétés possèdent des arbres remarquables — chênes centenaires, cèdres du Liban, séquoias, tilleuls argentés — qui constituent un patrimoine végétal précieux. Les haies champêtres, que nous encourageons à maintenir et enrichir, structurent le territoire et abritent une faune diverse.
    `,
    neighborhoods: ['Cantenay', 'Épinard', 'Le Bourg', 'Les Basses-Vallées'],
  },
  {
    slug: 'murs-erigne',
    name: 'Mûrs-Érigné',
    department: 'Maine-et-Loire',
    postalCode: '49610',
    population: '5 500',
    distance: '10 km',
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
    description:
      'Commune dynamique au nord-ouest d\'Angers, Montreuil-Juigné allie quartiers résidentiels récents et espaces naturels préservés le long de la Mayenne.',
    specificContent: `
      Montreuil-Juigné, en plein développement au nord-ouest d'Angers, accueille de nombreuses familles attirées par un cadre de vie alliant proximité urbaine et environnement naturel. La commune longe la Mayenne, dont les berges ombragées influencent le paysage des jardins riverains. Lotissements récents et quartiers anciens de Juigné-Bené coexistent, créant une diversité architecturale intéressante.

      Le sol est principalement argileux : il retient bien l'eau et les nutriments mais se compacte facilement et peut devenir imperméable en surface. Les amendements sableux et un apport régulier de compost améliorent la structure. Les sols argileux alternent entre saturation en hiver et dessèchement en été, rendant les paillages épais essentiels pour réguler l'humidité.

      Art des Jardins accompagne les propriétaires dans la création de jardins complets pour les constructions neuves — terrassement, drainage, pelouse, plantations et éclairage — comme dans la rénovation de jardins anciens. La présence de la Mayenne crée des conditions particulières en bordure de rivière, avec une humidité favorisant mousses et maladies fongiques que nous gérons par le choix de variétés résistantes.

      Les haies de thuyas et de leylandii des années 1990-2000 arrivent en fin de vie dans de nombreuses propriétés. Nous proposons leur remplacement par des haies mixtes persistantes et caduques, plus esthétiques, écologiques et résistantes aux maladies. La transition peut se faire progressivement.
    `,
    neighborhoods: ['Bourg', 'Juigné-Bené', 'La Foresterie', 'Les Music\'Halles', 'La Mayenne'],
  },
  {
    slug: 'saint-jean-de-linieres',
    name: 'Saint-Jean-de-Linières',
    department: 'Maine-et-Loire',
    postalCode: '49070',
    population: '2 200',
    distance: '12 km',
    description:
      'Village rural à l\'ouest d\'Angers, Saint-Jean-de-Linières conserve un caractère champêtre avec de grandes propriétés, des espaces boisés et un paysage de bocage préservé.',
    specificContent: `
      Saint-Jean-de-Linières, commune rurale à l'ouest d'Angers, offre un cadre de vie champêtre apprécié des amoureux de la nature. Le paysage de bocage angevin y est particulièrement bien préservé, avec ses haies vives, ses chemins creux et ses prairies bordées de chênes têtards. Les propriétés sont souvent spacieuses, dépassant fréquemment les 1 500 m², offrant des possibilités d'aménagement exceptionnelles.

      Le sol est principalement limono-argileux, avec un substrat de grès et de schiste qui affleure par endroits. Ces sols profonds et fertiles sont favorables à la plupart des végétaux d'ornement et des arbres fruitiers. Le drainage naturel est correct sur les parties hautes mais peut être insuffisant dans les cuvettes et bas de parcelle.

      Art des Jardins intervient ici pour des projets variés. Les anciens corps de ferme reconvertis nécessitent souvent un réaménagement complet des abords : reprofilage du terrain, création d'une cour paysagée, plantation de haies et mise en valeur des bâtiments en pierre. Le bocage environnant inspire nos créations : haies mixtes de charmes, érables champêtres, noisetiers et aubépines, intégrées dans le paysage rural.

      Les grandes surfaces permettent des aménagements ambitieux : allées de promenade, parcs arborés, prairies fleuries, vergers de variétés anciennes et potagers généreux. Les arbres de grande taille — chênes pédonculés, hêtres, châtaigniers — sont omniprésents et font partie du patrimoine végétal de la commune.
    `,
    neighborhoods: ['Bourg', 'Les Linières', 'La Motte', 'Le Bocage'],
  },
  {
    slug: 'briollay',
    name: 'Briollay',
    department: 'Maine-et-Loire',
    postalCode: '49125',
    population: '2 800',
    distance: '12 km',
    description:
      'Au confluent de la Sarthe et du Loir, Briollay est une commune prisée pour son cadre naturel exceptionnel, ses belles propriétés en bord de rivière et ses paysages de zones humides.',
    specificContent: `
      Briollay, au confluent de la Sarthe et du Loir, offre un cadre de vie exceptionnel. Cette situation hydrographique unique, où deux rivières se rejoignent avant de former la Maine, crée un paysage d'eau et de prairies humides d'une grande beauté. Le patrimoine bâti comprend de belles demeures bourgeoises, manoirs et maisons de maître dont les jardins font appel à un large registre : allées de tilleuls, roseraies, bassins et topiaires.

      Les sols alluviaux sont parmi les plus riches de la région. Les limons déposés par les crues ont constitué une couche fertile propice à toutes les cultures. Cette richesse s'accompagne cependant d'une forte humidité hivernale, avec des remontées de nappe qui imposent le choix d'espèces adaptées. En zone inondable, les aménagements sont conçus pour résister aux submersions temporaires avec des matériaux imputrescibles.

      Art des Jardins crée ici des jardins d'eau avec bassins naturels et plantations de berge intégrées dans l'environnement rivulaire. Iris d'eau, prêles, joncs fleuris, lysimaques, astilbes et hostas composent des massifs luxuriants qui prospèrent dans l'humidité ambiante et offrent un spectacle renouvelé du printemps à l'automne.

      Les arbres de bord de rivière — saules blancs, aulnes glutineux, peupliers noirs et frênes — bordent la Sarthe et le Loir et constituent un patrimoine végétal remarquable. Ces essences à croissance rapide nécessitent un suivi régulier pour préserver leur santé et assurer la sécurité des riverains.
    `,
    neighborhoods: ['Bourg', 'Vaux', 'La Basse-Rivière', 'Le Port', 'Les Grandes-Rivières'],
  },
  {
    slug: 'savennieres',
    name: 'Savennières',
    department: 'Maine-et-Loire',
    postalCode: '49170',
    population: '1 500',
    distance: '14 km',
    description:
      'Célèbre pour son vignoble d\'exception classé AOC, Savennières est une commune de caractère sur les bords de Loire, entre coteaux viticoles et jardins de charme.',
    specificContent: `
      Savennières, village viticole mondialement réputé pour ses vins blancs secs, s'étend sur les coteaux de la rive droite de la Loire. L'appellation compte deux grands crus — la Coulée-de-Serrant et la Roche-aux-Moines — témoignant d'un terroir d'exception. Les jardins d'agrément bénéficient des mêmes conditions favorables de sol, d'exposition et de microclimat que la vigne.

      Le microclimat est remarquable : l'exposition sud-est face à la Loire capte la chaleur du matin et la réverbération du fleuve l'après-midi. Les sols essentiellement schisteux, avec des affleurements de rhyolite et de schistes pourprés, sont maigres, caillouteux et très bien drainés. Ces conditions permettent la culture d'oliviers, figuiers, grenadiers et d'aromatiques méditerranéennes — lavandes, romarins, cistes, santolines et thyms.

      Art des Jardins puise dans la tradition viticole pour concevoir des jardins intégrés dans le paysage. Schiste local pour les murets et escaliers, graves de Loire pour les allées, plantations mêlant essences méditerranéennes et locales. Les propriétés — maisons de vignerons en tuffeau, manoirs, corps de ferme rénovés — sont habillées de rosiers anciens, glycines, bignones et jasmins étoilés sur les façades de pierre blonde.

      L'entretien suit un calendrier adapté au terroir : taille en fin d'hiver, désherbage mécanique sans produit chimique dans le respect de l'environnement viticole, et arrosages limités grâce au choix de plantes adaptées à la sécheresse estivale des coteaux.
    `,
    neighborhoods: ['Bourg', 'Épiré', 'La Roche-aux-Moines', 'La Coulée-de-Serrant', 'Les Coteaux'],
  },
  {
    slug: 'saint-sylvain-anjou',
    name: 'Saint-Sylvain-d\'Anjou',
    department: 'Maine-et-Loire',
    postalCode: '49480',
    population: '5 500',
    distance: '8 km',
    description:
      'Commune résidentielle au nord-est d\'Angers, Saint-Sylvain-d\'Anjou offre un cadre de vie familial avec des quartiers pavillonnaires bien établis et un environnement verdoyant.',
    specificContent: `
      Saint-Sylvain-d'Anjou, à quelques minutes d'Angers par la route de Paris, est une commune résidentielle prisée des familles pour son cadre de vie paisible. Les quartiers pavillonnaires s'y sont développés depuis les années 1970, créant un tissu résidentiel varié où coexistent des jardins de différentes générations et de styles divers.

      Le sol saint-sylvainois est principalement limono-argileux, avec une bonne capacité de rétention d'eau. Ce sol fertile convient à la majorité des végétaux d'ornement et des arbres fruitiers. Il peut cependant poser des problèmes de stagnation en hiver, et un drainage périphérique est recommandé pour les nouvelles constructions.

      Les jardins de 400 à 900 m² demandent une conception réfléchie pour optimiser chaque espace : terrasse de réception, coin de détente ombragé, aire de jeux et potager productif. De nombreux jardins plantés dans les années 1980-1990 nécessitent une rénovation : conifères disproportionnés, massifs envahis, pelouses fatiguées. Art des Jardins restructure ces espaces avec des essences plus adaptées.

      La commune étant en zone périurbaine, de nombreux jardins combinent agrément et potager familial. Les carrés potagers surélevés, faciles à entretenir et esthétiques, sont associés à des rotations de cultures et des variétés adaptées au terroir angevin pour des récoltes généreuses du printemps à l'automne.
    `,
    neighborhoods: ['Bourg', 'Le Plessis-Grammoire', 'La Papillaie', 'Les Music\'Halles', 'Le Grand-Coudray'],
  },
  {
    slug: 'soulaines-sur-aubance',
    name: 'Soulaines-sur-Aubance',
    department: 'Maine-et-Loire',
    postalCode: '49610',
    population: '3 200',
    distance: '15 km',
    description:
      'Commune rurale au sud d\'Angers traversée par l\'Aubance, appréciée pour son calme, ses paysages de bocage préservés et ses vins de l\'appellation Coteaux-de-l\'Aubance.',
    specificContent: `
      Soulaines-sur-Aubance, commune rurale au sud d'Angers, offre un cadre de vie paisible le long de la rivière Aubance qui a donné son nom à l'appellation viticole locale. Le paysage est typique du bocage angevin méridional : coteaux doux couverts de vignes, vallons frais bordés de haies vives, prairies pâturées et boisements de chênes et de châtaigniers. Les propriétés sont souvent généreuses, de 1 000 à 5 000 m².

      Le terroir est marqué par des sols argilo-calcaires sur les coteaux et des sols alluviaux le long de l'Aubance. Les sols calcaires sont propices aux lavandes, buis et plantes de rocaille, tandis que les zones alluviales conviennent aux arbres fruitiers, rosiers et vivaces gourmandes en eau. L'Aubance crée aussi des zones fraîches propices aux hostas, fougères et astilbes.

      Art des Jardins conçoit ici des jardins de curé revisités, mêlant plantes utiles et ornementales : rosiers anciens, pivoines, iris germanica, aromatiques, petits fruits et fruitiers palissés. Le bocage environnant inspire des haies champêtres de charme, noisetier, prunellier et aubépine, ainsi que des haies gourmandes de cassissiers, groseilliers et framboisiers.

      Les anciennes fermes reconverties offrent un cadre idéal pour des projets paysagers ambitieux : cours, dépendances et vergers qui constituent la base d'aménagements de charme intégrés dans le paysage viticole et bocager de la commune.
    `,
    neighborhoods: ['Bourg', 'Saint-Melaine', 'L\'Aubance', 'Les Coteaux'],
  },
  {
    slug: 'loire-authion',
    name: 'Loire-Authion',
    department: 'Maine-et-Loire',
    postalCode: '49800',
    population: '16 000',
    distance: '15 km',
    description:
      'Commune nouvelle regroupant six bourgs à l\'est d\'Angers, Loire-Authion est le berceau historique de l\'horticulture angevine, entre Loire et Authion.',
    specificContent: `
      Loire-Authion, née en 2016 de la fusion de six communes historiques — Brain-sur-l'Authion, Andard, La Bohalle, La Daguenière, Corné et Saint-Mathurin-sur-Loire — est intimement liée à l'histoire de l'horticulture en Anjou. Ce terroir exceptionnel entre Loire et Authion a vu naître et prospérer des dizaines de pépinières et de rosiéristes qui ont fait la renommée internationale de l'Anjou végétal.

      La plaine alluviale offre des sols d'une richesse exceptionnelle. Les limons fertiles déposés par les crues ont créé une terre noire, profonde et meuble, idéale pour toutes les cultures. Les végétaux s'y développent avec une vigueur remarquable. Le vent d'ouest dominant, souvent sous-estimé, peut cependant dessécher les plantations, ce qui nécessite d'intégrer des brise-vent naturels dans les aménagements.

      La diversité des bourgs crée une variété de paysages et de types de jardins. À Saint-Mathurin-sur-Loire, les propriétés en bord de Loire offrent des vues exceptionnelles. À Brain-sur-l'Authion, les fermes horticoles reconverties présentent de vastes terrains structurés. À Corné, les jardins pavillonnaires récents demandent des aménagements fonctionnels. Art des Jardins travaille avec les pépinières locales qui perpétuent le savoir-faire angevin.

      Le risque d'inondation est un paramètre important. La levée de Loire protège la plaine, mais les jardins sont conçus pour résister aux submersions : végétaux résilients, matériaux résistants à l'eau et terrasses en pierre naturelle privilégiées dans les zones exposées.
    `,
    neighborhoods: ['Brain-sur-l\'Authion', 'Andard', 'La Bohalle', 'La Daguenière', 'Corné', 'Saint-Mathurin-sur-Loire'],
  },
  {
    slug: 'longuenee-en-anjou',
    name: 'Longuenée-en-Anjou',
    department: 'Maine-et-Loire',
    postalCode: '49770',
    population: '7 500',
    distance: '15 km',
    description:
      'Commune nouvelle au nord d\'Angers, Longuenée-en-Anjou allie patrimoine rural remarquable et développement résidentiel dans un cadre naturel préservé de bocage.',
    specificContent: `
      Longuenée-en-Anjou, au nord d'Angers, est une commune nouvelle issue du regroupement de La Meignanne, Le Plessis-Macé et La Membrolle-sur-Longuenée. Ce territoire étendu offre une grande diversité de paysages, du château du Plessis-Macé aux lotissements récents de La Meignanne, en passant par les fermes rénovées de La Membrolle. Le château et son parc constituent un patrimoine végétal remarquable qui inspire les propriétaires locaux.

      Les sols sont globalement argilo-limoneux, assez profonds et fertiles. Sur les hauteurs du Plessis-Macé, le substrat de grès roussard affleure, donnant des sols plus légers et mieux drainés. Dans les vallées, les sols plus humides et lourds demandent un travail d'amendement et de drainage. Les essences nobles — tilleuls, platanes, cèdres, magnolias — témoignent d'une tradition de jardinage ancienne et soignée.

      Art des Jardins accompagne chaque bourg selon ses besoins. À La Meignanne, les lotissements récents nécessitent des créations complètes : engazonnement, haies, terrasses et éclairage. Au Plessis-Macé et à La Membrolle, les propriétés anciennes demandent rénovation, taille de restauration et entretien adapté aux grands espaces.

      Le bocage bien conservé abrite une biodiversité riche. Les haies mixtes de charmes, chênes, noisetiers et aubépines constituent le maillage bocager traditionnel. Nous proposons de les enrichir avec des espèces à fleurs (viornes, cornouillers) et à fruits (pommiers sauvages, alisiers) pour maximiser l'intérêt ornemental et écologique.
    `,
    neighborhoods: ['La Meignanne', 'Le Plessis-Macé', 'La Membrolle-sur-Longuenée', 'Le Bourg', 'La Chaussée'],
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
