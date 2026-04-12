# Audit Technique Complet — Site Vitrine Art des Jardins

**Date :** 29 mars 2026
**Objet :** Evaluation objective et exhaustive du site artdesjardins-paysagiste.fr
**Usage :** Document de reference pour chiffrage par un prestataire externe

---

## Table des matieres

1. [Identite du projet](#1-identite-du-projet)
2. [Stack technique](#2-stack-technique)
3. [Architecture & structure](#3-architecture--structure)
4. [Contenu & copywriting](#4-contenu--copywriting)
5. [SEO](#5-seo)
6. [Performance & optimisations](#6-performance--optimisations)
7. [Accessibilite](#7-accessibilite)
8. [Securite](#8-securite)
9. [Qualite du code](#9-qualite-du-code)
10. [Tests](#10-tests)
11. [Synthese forces / faiblesses](#11-synthese-forces--faiblesses)
12. [Metriques cles](#12-metriques-cles)

---

## 1. Identite du projet

**Nom commercial :** Art des Jardins
**Forme juridique :** SARL Art des Jardins
**Domaine :** artdesjardins-paysagiste.fr
**Activite :** Paysagiste professionnel — amenagement, entretien, elagage, abattage
**Zone d'intervention :** Angers et 30 km (Maine-et-Loire, 49)
**Communes ciblees :** 19 (Angers + 18 communes limitrophes)
**Type de site :** Site vitrine / generation de leads (devis gratuit)
**Clientele declaree :** Particuliers, professionnels, syndics

---

## 2. Stack technique

### Framework & runtime

| Element | Detail |
|---------|--------|
| Framework | Next.js 14.1 (App Router) |
| React | 18.2 |
| Langage | TypeScript (strict mode) |
| CSS | Tailwind CSS 3.4 |
| Package manager | pnpm |
| Test runner | Vitest 1.0 |
| Image processing | Sharp 0.34.5 (build-time) |

### Mode de deploiement

Double mode configure :
- **Defaut :** `output: 'export'` — site 100 % statique (fichiers HTML/CSS/JS dans `out/`)
- **Docker :** `output: 'standalone'` — serveur Node.js avec optimisation d'images et headers de securite

Cible de deploiement : Cloudflare Pages (statique) ou Docker sur VPS.

### Dependencies de production

| Package | Role |
|---------|------|
| next, react, react-dom | Framework |
| @heroicons/react | Icones SVG (tree-shaked) |
| dotenv | Variables d'environnement au build |
| heic-to | Conversion HEIC→JPEG pour upload photo client |
| signature_pad | **Non utilise** — dependance morte |

### Dependencies de developpement

| Package | Role |
|---------|------|
| vitest, @testing-library/react, jsdom | Tests |
| sharp, png-to-ico | Pipeline images + favicon |
| tailwindcss, autoprefixer, postcss | CSS |
| typescript, @types/* | Typage |

### Scripts

```
dev             → next dev -p 3001
images:optimize → node scripts/optimize-images.mjs
prebuild        → pnpm images:optimize
build           → next build
test            → vitest run
lint            → next lint (mais ESLint desactive au build)
```

### Variables d'environnement

6 variables consommees (aucun `.env.example` fourni) :
- `NEXT_PUBLIC_SITE_URL` — URL canonique
- `NEXT_PUBLIC_API_URL` — Backend NestJS (formulaire contact)
- `NEXT_PUBLIC_WEB3FORMS_KEY` — Fallback formulaire (cle publique)
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — Analytics Plausible (optionnel)
- `NEXT_PUBLIC_UMAMI_WEBSITE_ID` / `NEXT_PUBLIC_UMAMI_URL` — Analytics Umami (optionnel)
- `DOCKER_BUILD` — Switch statique/standalone

### CI/CD

Aucune configuration CI/CD presente (pas de GitHub Actions, GitLab CI, ni Dockerfile).

---

## 3. Architecture & structure

### Arborescence

```
src/
├── app/                        (Next.js App Router — 19 page.tsx)
│   ├── layout.tsx              (layout racine)
│   ├── page.tsx                (accueil)
│   ├── globals.css             (230 lignes)
│   ├── robots.ts / sitemap.ts
│   ├── [serviceCity]/          (route dynamique service×ville)
│   ├── services/[slug]/        (pages services)
│   ├── conseils/[slug]/        (blog)
│   ├── paysagiste-angers/      (4 pages SEO Angers dediees)
│   ├── elagage-angers/
│   ├── entretien-jardin-angers/
│   ├── abattage-angers/
│   ├── contact/ faq/ realisations/ a-propos/
│   └── mentions-legales/ cgv/ politique-confidentialite/
├── components/
│   ├── layout/                 (Header, Footer)
│   ├── ui/                     (14 composants presentationnels)
│   ├── seo/                    (3 composants Schema.org)
│   └── 5 composants standalone (ContactForm, Testimonials, etc.)
├── lib/
│   ├── site-config.ts          (config centralisee entreprise)
│   ├── services-data.ts        (9 services)
│   ├── cities-data.ts          (19 villes, ~1930 lignes)
│   ├── blog-data.ts            (4 articles, ~2400 lignes)
│   ├── images-manifest.ts      (auto-genere)
│   └── icons.tsx
scripts/
├── optimize-images.mjs         (pipeline images custom)
└── optimize-images.test.mjs
public/images/
├── realisations/               (~108 fichiers .webp)
├── blog/                       (~20 fichiers .webp)
└── og-*.jpg                    (5 images Open Graph)
```

### Nombre de fichiers source

| Categorie | Nombre |
|-----------|--------|
| Pages (page.tsx) | 19 |
| Composants | 22 |
| Fichiers lib/utilitaires | 6 |
| Fichiers de test | 3 |
| Scripts | 2 |

### Pages generees au build

| Type | Nombre |
|------|--------|
| Pages statiques nommees | ~14 |
| Pages services `/services/[slug]/` | 9 |
| Pages SEO Angers (dediees) | 4 |
| Pages SEO service×ville `/[serviceCity]/` | 72 (4 services × 18 villes) |
| Articles blog `/conseils/[slug]/` | 4 |
| **Total** | **~103 pages** |

### Modele de donnees

Tout le contenu est en TypeScript pur — aucun CMS, aucune base de donnees, aucun appel API au build.

- `site-config.ts` : identite entreprise (NAP, coordonnees, SIRET, horaires)
- `services-data.ts` : 9 services avec description, features, FAQ, process, metadata SEO
- `cities-data.ts` : 19 villes avec description, `serviceContent` par service (contenu unique), quartiers, donnees demographiques
- `blog-data.ts` : 4 articles avec contenu HTML inline, FAQ, metadata
- `images-manifest.ts` : auto-genere par le script d'optimisation

### Patterns architecturaux

- **SSG pur** : toutes les pages sont generees au build (`generateStaticParams`), aucun SSR/ISR
- **Pas de state management global** : `useState` local dans les composants client
- **14 composants `'use client'`** : Header, formulaire contact, galerie, sliders, animations
- **App Router** : pas de repertoire `pages/`, metadata via l'API native Next.js
- **Pipeline images custom** : Sharp au build → manifest TypeScript → composant `OptimizedImage` avec srcSet et blur-up
- `trailingSlash: true` : toutes les URLs finissent par `/`

---

## 4. Contenu & copywriting

### Volume de contenu

| Categorie | Mots estimes |
|-----------|-------------|
| Pages statiques (accueil, services, legal, FAQ, contact, about) | ~10 000 |
| 4 pages SEO Angers | ~2 950 |
| 72 pages service×ville | ~43 200 |
| 4 articles blog | ~2 800 |
| Composants partages (header, footer, trust band, stats) | ~500 |
| **Total** | **~59 450 mots** |

### Ton et style

Ton **professionnel-neutre** avec ancrage local. Phrases declaratives et informatives. Pas de superlatifs commerciaux ("le meilleur", "imbattable"). Vocabulaire technique utilise avec justesse (schiste, alluvions, chalarose, rogneuse, physiologie de l'arbre). Les pages service×ville adoptent un registre editorial informe sur les sols, essences et conditions locales.

### Propositions de valeur

1. Visite sur site gratuite avant devis
2. Devis remis sous 48h
3. Credit d'impot 50 % sur entretien, taille haies, debroussaillage
4. 16 ans d'experience cumulee
5. Zone : Angers et 30 km
6. Assurance RC Pro + decennale
7. Intervention urgence arbres dangereux (24-48h)
8. Structure a taille humaine
9. Contrats d'entretien annuels (-15 % et priorite planning)

### Signaux de confiance

- Assurances RC Pro + decennale (banniere de confiance sur toutes les pages)
- 16 ans d'experience (compteur anime, pages services, pages villes)
- Identifiants legaux complets (SIREN, SIRET, TVA, NAF, capital)
- Instagram @artdesjardins_49 (header + footer)
- Photos avant/apres (slider interactif)
- **Temoignages clients : DESACTIVES** (composant present mais contient des avis fictifs, volontairement coupe)

### Tarification

**Absente du site.** Aucun tarif, grille de prix ou estimation horaire. La FAQ explique : "Chaque projet est unique, il est impossible de donner des tarifs standard." Les seuls chiffres sont des exemples illustratifs dans la section credit d'impot (1 200 € → 600 € net apres credit).

### Appels a l'action (CTA)

Placement systematique sur chaque page :
- **Hero** : 2 CTA (devis + telephone ou decouvrir)
- **Sidebar sticky** : carte CTA devis
- **Mi-page** : section CTA intermediaire
- **Bas de page** : section pleine largeur image + CTA
- **Header** : bouton "Devis gratuit" + telephone (desktop)
- **Mobile** : barre sticky en bas (telephone + CTA)

Textes CTA : "Demander ma visite gratuite", "Demander un devis gratuit", "Appeler maintenant", "Parlons de votre projet", "Urgence : 07 81 16 07 37".

### Contenu service×ville : unique vs template

Pour les 18 villes hors Angers × 4 services = 72 pages :
- **Corps de texte** : contenu unique (4-5 paragraphes, ~400 mots) pour chaque combinaison — toutes les villes ont du `serviceContent` renseigne
- **Cadre** : hero subtitle, intro, bloc "pourquoi nous", CTA = formulaique avec interpolation du nom de ville
- **Meta descriptions** : uniques par combinaison

### Contenu legal

| Page | Etat |
|------|------|
| Mentions legales | Complete (editeur, SIRET, TVA, NAF, gerants). **Hebergeur non renseigne ("A definir")** |
| Politique de confidentialite | Complete (11 sections, droits RGPD, durees de conservation) |
| CGV | Complete (11 articles). **Coordonnees du mediateur non renseignees ("[Coordonnees du mediateur]")** |
| Bandeau cookies | **Absent** — justifie par l'utilisation de Plausible (cookieless) |

### Contact & conversion

- **Formulaire** : 6 champs + upload photo + case RGPD + honeypot anti-bot
- **Soumission** : dual-path (API NestJS primaire avec timeout 8s → fallback Web3Forms)
- **Telephones** : 07 81 16 07 37 (principal) + 06 59 68 49 16 (secondaire) — liens `tel:` cliquables partout
- **Email** : contact@artdesjardins-paysagiste.fr — lien `mailto:` footer + contact
- **WhatsApp** : bouton flottant (07 81 16 07 37)
- **Google Maps** : iframe sur la page contact

---

## 5. SEO

### Metadata

- **Titres** : template global `'%s | Art des Jardins - Paysagiste Angers'`, surcharge par page. Chaque page a un titre unique.
- **Descriptions** : presentes sur toutes les pages. Uniques pour les pages avec `serviceContent`, template avec interpolation pour le reste.
- **Open Graph** : `og:title`, `og:description`, `og:type`, `og:url`, `og:locale` (fr_FR), `og:site_name` sur toutes les pages. Images OG specifiques par service (5 fichiers JPEG 1200×630). Les pages service×ville heritent de l'image OG globale.
- **Twitter Card** : `summary_large_image` defini uniquement dans le layout global — pas de surcharge par page.
- **Canonical** : defini sur toutes les pages avec `alternates.canonical`. `metadataBase` = `https://artdesjardins-paysagiste.fr`.
- **Robots** : `index: true, follow: true` par defaut. `noindex` sur mentions legales, CGV, politique de confidentialite.

### Structured Data (Schema.org)

| Schema | Emplacement | Contenu |
|--------|-------------|---------|
| LocalBusiness | Accueil | Complet : NAP, coordonnees, horaires, SIRET, catalogue services, areaServed |
| LocalBusinessCity | 4 pages Angers + 72 pages service×ville | Variante locale : areaServed = ville cible |
| Service | `/services/` + `/services/[slug]/` | Nom, description, provider, zone |
| FAQPage | Pages services + articles blog (si FAQ) | Questions/reponses du service ou article |
| HowTo | Pages services | Etapes du processus d'intervention |
| Article | Articles blog | Headline, author, publisher, datePublished |
| BreadcrumbList | Toutes pages avec HeroSection | Fil d'Ariane |
| CollectionPage | Realisations | Collection de photos |

### Sitemap & robots.txt

- **Sitemap** : genere dynamiquement, ~118 URLs, priorites differenciees (0.3 a 1.0), frequences adaptees
- **robots.txt** : `Allow: /`, `Disallow: /api/, /_next/, /admin/`
- **Observation** : `lastModified` = date du build pour toutes les pages sauf articles (qui utilisent `publishDate`)

### Maillage interne

- Chaque page service×ville pointe vers les 3 autres services de la meme ville + jusqu'a 10 communes voisines
- Les 4 pages Angers listent les villes avec liens
- Homepage liste toutes les villes (liens vers `/paysagiste-{ville}/` uniquement)
- Footer pointe vers les 4 pages Angers + pages principales
- **Absence** : pas de lien reciproque entre `/services/[slug]/` et les pages SEO locales

### SEO local

- NAP centralise dans `site-config.ts`, utilise partout (Footer, Contact, Schemas)
- 19 communes avec pages dediees
- 4 services dans la couche SEO locale (vs 9 au total)
- Google Maps integre sur la page contact
- Coordonnees GPS dans les schemas LocalBusiness

---

## 6. Performance & optimisations

### Pipeline images

Pipeline custom en 2 etapes :

**Build-time (`optimize-images.mjs`)** :
- Source : `/Images/` (HEIC/JPG) → 4 variantes WebP par image (480, 800, 1200, 1920px), qualite 80
- Placeholder blur : 20×20px WebP base64 par image
- Images OG : 1200×630 JPEG avec overlay gradient + logo
- Manifest TypeScript auto-genere avec metadata complete

**Runtime (`OptimizedImage.tsx`)** :
- `<picture>` + `<source>` avec `srcSet` WebP + `sizes` adaptatifs
- Effet blur-up via CSS transition opacity 0.6s
- Hero : `loading="eager"`, `fetchPriority="high"`, `<link rel="preload">` avec `imageSrcSet`
- Reste : `loading="lazy"`, `decoding="async"`

**Volumes** : ~140 fichiers images (108 WebP realisations + 20 WebP blog + 5 OG JPEG + logos/icones).

**Format AVIF** : non utilise.

### Fonts

- Inter (body) + Cormorant Garamond (headings) via `next/font/google`
- Self-hosted en `woff2` au build (aucune requete vers Google Fonts au runtime)
- `font-display: swap` par defaut

### JavaScript client

- 14 composants `'use client'` (header, formulaire, galerie, animations, sliders)
- Aucun script tiers lourd (pas de GTM, pas de pixel Facebook, pas de chat widget)
- Analytics : Plausible ou Umami, charge en `afterInteractive`, conditionnel
- 1 seul import dynamique : `heic-to` (lazy, uniquement sur upload HEIC)

### Core Web Vitals (analyse statique)

**LCP** :
- Candidat : image hero pleine largeur
- Optimise : `<link rel="preload">` server-side + `fetchPriority="high"` + `loading="eager"`
- Point d'attention : le `blurDataURI` est passe au composant hero mais **jamais applique** — affichage gris fonce pendant le chargement au lieu du blur-up

**CLS** :
- Hero : `min-h-[400px] lg:min-h-[580px]` reserve l'espace
- `OptimizedImage` : `aspectRatio` CSS depuis le manifest
- Galerie (`PhotoGallery`) : pas de conteneur avec ratio fixe — **risque CLS** au chargement
- Fonts : `next/font` applique `size-adjust` pour minimiser le shift

**INP** :
- `BeforeAfterSlider` : `onPointerMove` sans throttle (state update a chaque evenement)
- Reste : patterns standards, pas de risque significatif

### Headers & cache

- **Mode statique** : aucun header configure (responsabilite de l'hebergeur)
- **Mode Docker** : headers securite + cache images/static 1 an (`immutable`)
- Pas de configuration specifique Cloudflare (`_headers`, `_redirects`)

---

## 7. Accessibilite

### Ce qui est implemente

- Skip link : `<a href="#main-content">Aller au contenu principal</a>` (sr-only, visible au focus)
- `lang="fr"` sur `<html>`
- ARIA : `aria-expanded` (menu, accordeons), `aria-pressed` (filtres galerie), `aria-label` (boutons icones, lightbox, WhatsApp, mobile), `aria-hidden` (images decoratives)
- Clavier : fleches gauche/droite sur slider avant/apres et lightbox, Escape ferme le menu et la lightbox
- Focus management : focus deplace sur le bouton fermer a l'ouverture de la lightbox
- Alt text : toutes les images de contenu ont un alt descriptif en francais, images decoratives en `alt=""`
- Dialog native : `<dialog>` pour la lightbox avec `showModal()`

### Ce qui manque

- Pas d'audit automatise de contraste couleurs
- Desktop : pas de `<nav>` explicite autour du groupe de liens de navigation
- Pas de page 404 personnalisee

---

## 8. Securite

### Formulaire contact

- Honeypot anti-bot (champ cache `website`, `tabIndex={-1}`, `aria-hidden`)
- Validation client par champ (nom, email regex, message requis, case RGPD)
- AbortController avec timeout 8s sur l'appel API
- Gestion differenciee des erreurs (400/429 vs 5xx)
- Fallback Web3Forms si API primaire indisponible

### Cles API

- `NEXT_PUBLIC_WEB3FORMS_KEY` : cle publique par design (domain-restricted cote Web3Forms)
- Aucune cle privee dans le code source

### Headers de securite

Definis uniquement en mode Docker :
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy restrictive
- **CSP (Content Security Policy) : absent**

En mode statique : aucun header — a configurer sur l'hebergeur.

---

## 9. Qualite du code

### Points forts

- **TypeScript strict** active, zero `any`, zero `@ts-ignore`
- Typage complet des modeles de donnees (interfaces `ServiceData`, `CityData`, `BlogArticle`, etc.)
- Nommage coherent (PascalCase composants, camelCase fonctions, kebab-case slugs)
- Organisation claire des fichiers (app/, components/ui|layout|seo/, lib/)
- Config centralisee dans `SITE` (site-config.ts) — source unique de verite

### Points faibles

- **ESLint desactive au build** (`ignoreDuringBuilds: true` + pas de config `.eslintrc`)
- `ServiceSchema.tsx` hardcode l'adresse Angers/49000 au lieu d'utiliser `SITE.address`
- `foundingDate: '2026'` dans le schema LocalBusiness (incoherent avec "16 ans d'experience")
- `Header.tsx` utilise `!` (non-null assertion) sur un `.find()` — erreur runtime si slug supprime
- `hiddenSlugs = ['creation-6']` hardcode dans `PhotoGallery.tsx` sans documentation
- Dependance `signature_pad` dans package.json sans aucune utilisation
- Pas de README projet
- Pas de `.env.example`
- `sitemap.ts` : `lastModified` = date du build pour toutes les pages (signal inutile pour les crawlers)

### Code mort / desactive

- `Testimonials.tsx` : composant complet avec avis fictifs, importe puis commente dans la homepage
- `SOFT_LAUNCH = false` dans `robots.ts` : branche morte permanente
- `@heroicons/react` dans `optimizePackageImports` mais jamais importe (icones custom dans `icons.tsx`)

### Duplication

- 4 pages Angers dediees structurellement similaires (non factorisees)
- `HomeFAQ` duplique 7 questions de `faq-content.tsx`
- Bloc "Pourquoi choisir Art des Jardins" identique sur les 72 pages service×ville

---

## 10. Tests

### Framework

Vitest 1.0 + @testing-library/react + jsdom.

### Couverture

| Fichier de test | Type | Ce qui est teste |
|-----------------|------|-----------------|
| `services-data.test.ts` | Unite | Integrite donnees : champs non-vides, slugs uniques, coherence TAX_CREDIT_SLUGS |
| `PhotoGallery.test.tsx` | Composant (jsdom) | Filtres, lightbox, aria-pressed, maxItems |
| `optimize-images.test.mjs` | Unite | Logique du script d'optimisation |

**3 fichiers de test, ~12 tests au total.**

### Ce qui n'est pas teste

- ContactForm (logique complexe, multi-etats, dual-path)
- Integrite donnees cities-data (80 combinaisons service×ville)
- Schemas JSON-LD (LocalBusinessCitySchema, ServiceSchema)
- Logique de fallback `[serviceCity]` template
- Routage et generation des pages
- Aucune configuration de seuil de couverture

---

## 11. Synthese forces / faiblesses

### Forces

| Domaine | Detail |
|---------|--------|
| **Pipeline images** | Solution production-grade : Sharp au build, 4 variantes WebP, blur placeholders, preload hero, manifest type. Depasse le standard pour un site vitrine. |
| **SEO local** | 76 pages service×ville avec contenu unique par combinaison. Schema.org exhaustif (LocalBusiness, Service, FAQ, HowTo, Article, Breadcrumb). Maillage interne entre villes et services. |
| **TypeScript strict** | Zero any, zero ts-ignore, interfaces completes, typage bout en bout. |
| **Formulaire contact** | Dual-path (API + fallback), AbortController, gestion erreurs differenciee, honeypot, upload photo avec conversion HEIC. |
| **Accessibilite** | Skip link, ARIA complet sur les composants interactifs, clavier, focus management lightbox, dialog native. |
| **Architecture statique** | SSG pur, deployable sur CDN, double mode (statique + Docker), pas de runtime serveur requis. |
| **Contenu** | ~59 000 mots, ton professionnel et technique, contenu unique par page service×ville (pas de duplicate content). |
| **Config centralisee** | Source unique de verite (`site-config.ts`) pour toutes les donnees entreprise. |

### Faiblesses

| Domaine | Detail |
|---------|--------|
| **Pas de CI/CD** | Aucun pipeline de build, lint ou test automatise. ESLint desactive au build. |
| **Tests minimaux** | 3 fichiers, ~12 tests. ContactForm, cities-data, schemas non testes. Pas de seuil de couverture. |
| **Pas de CMS** | Tout le contenu est dans le code TypeScript. Modification de contenu = modification de code + rebuild + deploy. |
| **Pas de README** | Aucune documentation projet (setup, env vars, pipeline images, modes deploy). |
| **Analytics non configure** | Le composant existe mais retourne `null` si les env vars ne sont pas definies. |
| **Temoignages desactives** | Le composant est coupe — pas de preuve sociale client sur un site de services. |
| **4 pages Angers non factorisees** | ~3000 lignes de contenu dans 4 fichiers structurellement identiques. |
| **Blog minimal** | 4 articles uniquement. |
| **5 services sans couche SEO locale** | Terrasse, cloture, taille-haies, debroussaillage, arrosage automatique n'ont pas de pages service×ville. |
| **Mentions legales incompletes** | Hebergeur "A definir", mediateur non renseigne dans les CGV. |
| **CSP absente** | Pas de Content Security Policy, meme en mode Docker. |
| **Pas de page 404 personnalisee** | 404 par defaut de Next.js. |
| **Pas de config Cloudflare** | Aucun fichier `_headers`, `_redirects`, pas de cache headers pour le mode statique. |
| **Incoherence foundingDate/experience** | Schema.org dit 2026, le site dit 16 ans d'experience. |

---

## 12. Metriques cles

| Metrique | Valeur |
|----------|--------|
| Pages generees | ~103 |
| Mots de contenu | ~59 450 |
| Composants React | 22 |
| Fichiers source (hors node_modules) | ~50 |
| Lignes de code source estimees | ~8 000-9 000 |
| dont contenu data (cities, blog, services) | ~4 700 |
| Images optimisees | ~140 fichiers |
| Formats images | WebP (contenu) + JPEG (OG) + PNG (logos) |
| Schemas JSON-LD | 8 types |
| Tests | 3 fichiers, ~12 tests |
| Dependencies production | 6 (dont 1 inutilisee) |
| Dependencies dev | 12 |
| Composants client-side | 14 |
| Polices | 2 (Inter + Cormorant Garamond, self-hosted woff2) |
| Villes ciblees | 19 |
| Services | 9 (dont 4 avec couche SEO locale) |
| Articles blog | 4 |
| Variables d'environnement | 6 |

---

*Document genere le 29 mars 2026 par audit automatise du code source.*
