'use client';

import { useCallback, useMemo, useState } from 'react';
import {
  getImage,
  getSrcSet,
  getDefaultSrc,
  type ImageEntry,
} from '@/lib/images-manifest';
import { Lightbox } from './Lightbox';

interface InlineGalleryProps {
  slugs: string[];
  columns?: 2 | 3;
}

export function InlineGallery({ slugs, columns = 3 }: InlineGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = useMemo<ImageEntry[]>(() => {
    return slugs
      .map((slug) => getImage(slug))
      .filter((img): img is ImageEntry => Boolean(img));
  }, [slugs]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const navigate = useCallback(
    (direction: 1 | -1) => {
      setLightboxIndex((prev) => {
        if (prev === null || images.length === 0) return prev;
        return (prev + direction + images.length) % images.length;
      });
    },
    [images.length]
  );

  if (images.length === 0) return null;

  // Mobile: toujours 2 colonnes masonry. Desktop: 2 ou 3 selon prop.
  const desktopCols = columns === 2 ? 'md:columns-2' : 'md:columns-2 lg:columns-3';
  const sizes =
    columns === 2
      ? '(max-width: 767px) 50vw, 50vw'
      : '(max-width: 767px) 50vw, (max-width: 1023px) 50vw, 33vw';

  return (
    <div className="my-8">
      <div className={`columns-2 gap-3 md:gap-4 ${desktopCols}`}>
        {images.map((image, index) => (
          <button
            key={image.slug}
            type="button"
            onClick={() => openLightbox(index)}
            className="block w-full mb-3 md:mb-4 rounded-lg overflow-hidden bg-primary-50 break-inside-avoid group cursor-zoom-in p-0 border-0 text-left"
            aria-label={`Voir la photo ${index + 1} sur ${images.length} en grand`}
          >
            <picture>
              <source type="image/webp" srcSet={getSrcSet(image)} sizes={sizes} />
              <img
                src={getDefaultSrc(image, 480)}
                alt={image.alt}
                width={image.sizes[480]?.width || 480}
                height={image.sizes[480]?.height || 360}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </picture>
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={closeLightbox}
        onNavigate={navigate}
      />
    </div>
  );
}
