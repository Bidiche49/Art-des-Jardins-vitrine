# FEAT-001: Lever les verrous noindex pour le lancement SEO

**Type:** Feature
**Statut:** A faire
**Priorite:** Haute
**Complexite:** XS
**Tags:** seo
**Date creation:** 2026-02-28

---

## Description
Le site est en soft launch avec 3 verrous anti-indexation. Pour le lancement SEO, il faut lever les 3 EN MEME TEMPS.

## Les 3 verrous a lever

### 1. Meta robots dans `src/app/layout.tsx` (ligne ~87)
```tsx
// AVANT (soft launch)
robots: {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
},

// APRES (lancement)
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
  },
},
```

### 2. Robots.txt dans `src/app/robots.ts` (ligne ~5)
```ts
// AVANT
const SOFT_LAUNCH = true;

// APRES
const SOFT_LAUNCH = false;
```
Cela passe de `Disallow: /` a `Allow: /` + sitemap.

### 3. Header HTTP dans `public/_headers` (ligne 2)
```
// SUPPRIMER cette ligne :
  X-Robots-Tag: noindex, nofollow
```

## Criteres d'acceptation
- [ ] `layout.tsx` : robots index/follow = true
- [ ] `robots.ts` : SOFT_LAUNCH = false (Allow: / + sitemap)
- [ ] `public/_headers` : ligne X-Robots-Tag supprimee
- [ ] Build passe sans erreur
- [ ] Verifier dans `out/robots.txt` que le contenu est correct (Allow + sitemap)
- [ ] Verifier dans `out/index.html` qu'il n'y a pas de `noindex`

## Fichiers concernes
- `src/app/layout.tsx`
- `src/app/robots.ts`
- `public/_headers`

## Tests de validation
- [ ] `grep -r "noindex" out/` ne retourne rien
- [ ] `cat out/robots.txt` contient `Allow: /` et `Sitemap:`
- [ ] `cat out/index.html | grep robots` montre `index, follow`
