'use client';

import { useEffect, useRef, useState } from 'react';
import { type ImageEntry, getSrcSet, getDefaultSrc } from '@/lib/images-manifest';

interface GalleryCarouselProps {
  images: ImageEntry[];
  onOpen: (index: number) => void;
  desktopColumns?: 2 | 3 | 4;
  /** Sizes attribute. Defaut adapte au pattern 88vw mobile / colonnes desktop. */
  sizes?: string;
}

const DEFAULT_SIZES =
  '(max-width: 767px) 88vw, (max-width: 1023px) 33vw, 25vw';

export function GalleryCarousel({
  images,
  onOpen,
  desktopColumns = 4,
  sizes = DEFAULT_SIZES,
}: GalleryCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = () =>
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(max-width: 767px)').matches;

  // Reset à 0 quand la liste change (changement de filtre, etc.)
  useEffect(() => {
    setCurrentIndex(0);
    if (trackRef.current && isMobile()) {
      trackRef.current.scrollTo({ left: 0, behavior: 'auto' });
    }
  }, [images]);

  // IntersectionObserver pour suivre la slide centrée sur mobile
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typeof window.matchMedia !== 'function') return;
    if (typeof IntersectionObserver === 'undefined') return;

    const mq = window.matchMedia('(max-width: 767px)');
    if (!mq.matches) return;

    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const target = visible[0].target as HTMLElement;
          const idx = Number(target.dataset.index);
          if (!Number.isNaN(idx)) setCurrentIndex(idx);
        }
      },
      {
        root: track,
        threshold: [0.5, 0.75, 1],
      }
    );

    slideRefs.current.forEach((slide) => slide && observer.observe(slide));
    return () => observer.disconnect();
  }, [images]);

  const colsClass =
    desktopColumns === 2
      ? 'gallery-cols-2'
      : desktopColumns === 3
      ? 'gallery-cols-3'
      : '';

  const total = images.length;
  const progress = total > 0 ? ((currentIndex + 1) / total) * 100 : 0;

  if (total === 0) return null;

  return (
    <div>
      <div
        ref={trackRef}
        className={`gallery-responsive ${colsClass}`}
        role="region"
        aria-roledescription="carousel"
        aria-label="Galerie photos"
      >
        {images.map((image, index) => {
          const isPortrait = image.originalHeight > image.originalWidth;
          return (
          <button
            key={image.slug}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            data-index={index}
            type="button"
            onClick={() => onOpen(index)}
            className={`gallery-slide group ${isPortrait ? 'is-portrait' : ''}`}
            aria-roledescription="slide"
            aria-label={`Photo ${index + 1} sur ${total}`}
          >
            <picture>
              <source type="image/webp" srcSet={getSrcSet(image)} sizes={sizes} />
              <img
                src={getDefaultSrc(image, 800)}
                alt={image.alt}
                width={image.sizes[480]?.width || 480}
                height={image.sizes[480]?.height || 360}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </picture>
            <span className="sr-only">Ouvrir l&apos;image en grand</span>
          </button>
          );
        })}
      </div>

      {/* Indicateur éditorial — mobile uniquement */}
      <div
        className="md:hidden mt-6 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="gallery-progress-track">
          <span
            className="gallery-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </span>
        <p className="font-serif text-sm text-gray-500 tracking-[0.25em]">
          {String(currentIndex + 1).padStart(2, '0')}
          <span className="mx-2 text-secondary-500">·</span>
          {String(total).padStart(2, '0')}
        </p>
      </div>

      {/* Live region pour annoncer la slide courante aux lecteurs d'écran */}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Photo {currentIndex + 1} sur {total}
      </p>
    </div>
  );
}
