'use client';

import { useEffect, useRef } from 'react';

/**
 * Conteneur du bandeau d'avis : defilement automatique, parcours a la main et
 * boucle infinie.
 *
 * Tout passe par `scrollLeft`, y compris le defilement automatique. Une
 * animation CSS `transform` serait plus economique, mais elle imposerait un
 * conteneur en overflow hidden : le trackpad et le doigt n'auraient aucune
 * prise, et superposer un scroll a une translation ferait cohabiter deux
 * systemes de position concurrents. Un seul mecanisme evite tout ce genre.
 *
 * La boucle repose sur la liste presente en deux exemplaires identiques : on
 * demarre sur le second, ce qui laisse une liste entiere de marge de chaque
 * cote, et on decale d'une longueur de liste des qu'on approche d'un bord.
 * Les deux copies etant identiques, le saut ne se voit pas.
 *
 * Seul ce conteneur est un composant client. Les cartes lui sont passees en
 * `children` et restent rendues cote serveur.
 */

/** Largeur d'avance toleree avant de recentrer, en longueurs de liste. */
const MARGE = 0.5;

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

    /**
     * Longueur d'un exemplaire de la liste, mesuree par l'ecart entre la
     * premiere carte et son double. `scrollWidth / 2` serait faux : le padding
     * lateral de la piste et le gap y entrent, et decaleraient le saut.
     */
    const longueurListe = () => {
      const cartes = el.querySelectorAll<HTMLElement>('li');
      if (cartes.length < 2) return 0;
      const premierDouble = cartes[cartes.length / 2];
      if (!premierDouble) return 0;
      return premierDouble.offsetLeft - cartes[0].offsetLeft;
    };

    const recentre = () => {
      const l = longueurListe();
      if (l <= 0) return;
      if (el.scrollLeft >= l * (1 + MARGE)) el.scrollLeft -= l;
      else if (el.scrollLeft <= l * MARGE) el.scrollLeft += l;
    };

    el.scrollLeft = longueurListe();
    el.addEventListener('scroll', recentre, { passive: true });

    // Le defilement automatique n'a de sens que la ou il y a de quoi
    // l'interrompre. Sur mobile il n'y a pas de survol, et on ne lit pas un
    // texte qui bouge : le bandeau s'y parcourt uniquement au doigt.
    const surDesktop = window.matchMedia('(min-width: 768px)');
    const animationsReduites = window.matchMedia('(prefers-reduced-motion: reduce)');

    let raf = 0;
    let precedent = 0;
    let enPause = false;
    let visible = true;

    const tick = (horodatage: number) => {
      const actif =
        visible && surDesktop.matches && !animationsReduites.matches && !enPause;

      if (actif && precedent) {
        const l = longueurListe();
        if (l > 0 && dureeS > 0) {
          el.scrollLeft += (l / dureeS) * ((horodatage - precedent) / 1000);
        }
      }

      precedent = horodatage;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    // `precedent` est remis a zero a la reprise : sans cela, le temps ecoule
    // pendant la pause serait rattrape d'un bond au premier tick suivant.
    const pause = () => {
      enPause = true;
    };
    const reprise = () => {
      enPause = false;
      precedent = 0;
    };

    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', reprise);
    el.addEventListener('focusin', pause);
    el.addEventListener('focusout', reprise);

    // Le bandeau est en bas de page : sans cela, la boucle tournerait pendant
    // toute la lecture du haut du site, pour rien.
    const observateur = new IntersectionObserver(
      ([entree]) => {
        visible = entree.isIntersecting;
        if (visible) precedent = 0;
      },
      { threshold: 0 },
    );
    observateur.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      observateur.disconnect();
      el.removeEventListener('scroll', recentre);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', reprise);
      el.removeEventListener('focusin', pause);
      el.removeEventListener('focusout', reprise);
    };
  }, [dureeS]);

  /**
   * Degrade de fin de texte, affiche uniquement quand un avis deborde vraiment
   * de sa carte, et masque une fois arrive en bas.
   *
   * Le CSS ne sait pas detecter un debordement : un degrade pose sans condition
   * apparait aussi sur les avis courts, et fond une derniere ligne pourtant
   * complete. La comparaison scrollHeight / clientHeight est le seul test fiable.
   */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const zones = Array.from(el.querySelectorAll<HTMLElement>('.avis-texte-zone'));
    const nettoyages: Array<() => void> = [];

    const majDebordement = () => {
      for (const zone of zones) {
        const texte = zone.querySelector<HTMLElement>('.avis-texte');
        if (!texte) continue;
        // Une marge d'un pixel absorbe les arrondis de sous-pixels.
        zone.classList.toggle('avis-deborde', texte.scrollHeight > texte.clientHeight + 1);
      }
    };

    majDebordement();

    // Les hauteurs changent quand la police du site remplace celle de secours.
    document.fonts?.ready.then(majDebordement).catch(() => {});

    for (const zone of zones) {
      const texte = zone.querySelector<HTMLElement>('.avis-texte');
      if (!texte) continue;

      const onScrollTexte = () => {
        const enBas = texte.scrollTop + texte.clientHeight >= texte.scrollHeight - 1;
        zone.classList.toggle('avis-fin', enBas);
      };

      texte.addEventListener('scroll', onScrollTexte, { passive: true });
      nettoyages.push(() => texte.removeEventListener('scroll', onScrollTexte));
    }

    window.addEventListener('resize', majDebordement);
    nettoyages.push(() => window.removeEventListener('resize', majDebordement));

    return () => nettoyages.forEach((f) => f());
  }, []);

  return (
    <div ref={ref} className="avis-piste-wrap mt-10">
      {children}
    </div>
  );
}
