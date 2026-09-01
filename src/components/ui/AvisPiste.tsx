'use client';

import { useEffect, useRef } from 'react';

/**
 * Conteneur du bandeau d'avis, qui reboucle le defilement manuel.
 *
 * Seul ce conteneur est un composant client : les cartes lui sont passees en
 * `children` et restent donc rendues cote serveur. Le JS embarque se limite au
 * repositionnement du scroll.
 *
 * Le principe : la liste est presente en deux exemplaires identiques. On
 * demarre sur le second, ce qui laisse une liste entiere de marge de chaque
 * cote, et des qu'on s'en approche on decale d'une longueur de liste. Comme les
 * deux copies sont identiques, le saut ne se voit pas et le bandeau n'a ni
 * debut ni fin.
 *
 * Ne s'active que lorsque le bandeau se parcourt reellement a la main : sur
 * mobile, et sur desktop sous prefers-reduced-motion. Le defilement automatique
 * du desktop boucle deja tout seul via l'animation CSS, et son conteneur est en
 * overflow hidden, ce qui sert ici de test.
 */
export function AvisPiste({
  dureeS,
  children,
}: {
  dureeS: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (getComputedStyle(el).overflowX === 'hidden') return;

    /**
     * Longueur d'un exemplaire de la liste, mesuree par l'ecart entre la
     * premiere carte et son double. On ne peut pas se contenter de
     * `scrollWidth / 2` : le padding lateral de la piste et le gap entrent dans
     * scrollWidth, et le saut serait decale d'une vingtaine de pixels.
     */
    const longueurListe = () => {
      const cartes = el.querySelectorAll<HTMLElement>('li');
      if (cartes.length < 2) return 0;
      const premierDouble = cartes[cartes.length / 2];
      if (!premierDouble) return 0;
      return premierDouble.offsetLeft - cartes[0].offsetLeft;
    };

    el.scrollLeft = longueurListe();

    const onScroll = () => {
      const l = longueurListe();
      if (l <= 0) return;

      // Les seuils sont a une demi-liste des bords : largement plus que ce
      // qu'un geste peut parcourir entre deux evenements de scroll.
      if (el.scrollLeft >= l * 1.5) {
        el.scrollLeft -= l;
      } else if (el.scrollLeft <= l * 0.5) {
        el.scrollLeft += l;
      }
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="avis-piste-wrap mt-10"
      style={{ '--avis-duree': `${dureeS}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
