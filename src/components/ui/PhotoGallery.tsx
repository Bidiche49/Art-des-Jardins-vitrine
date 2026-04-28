'use client';

import { useState, useCallback, useMemo } from 'react';
import { images, categories } from '@/lib/images-manifest';
import { GalleryCarousel } from './GalleryCarousel';
import { Lightbox } from './Lightbox';

interface PhotoGalleryProps {
  maxItems?: number;
  showFilters?: boolean;
  initialCategory?: string;
  excludeSlugs?: string[];
}

const categoryLabels: Record<string, string> = {
  creation: 'Creation',
  elagage: 'Elagage',
  entretien: 'Entretien',
  terrasse: 'Terrasse',
  cloture: 'Cloture',
  arrosage: 'Arrosage',
};

export function PhotoGallery({
  maxItems,
  showFilters = true,
  initialCategory,
  excludeSlugs,
}: PhotoGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    initialCategory || null
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const displayed = useMemo(() => {
    const hiddenSlugs = ['creation-6'];
    const allImages = Object.values(images).filter(
      (img) =>
        img.category !== 'blog' &&
        !img.slug.includes('avant') &&
        !hiddenSlugs.includes(img.slug)
    );
    const excluded = excludeSlugs
      ? allImages.filter((img) => !excludeSlugs.includes(img.slug))
      : allImages;
    const filtered = activeCategory
      ? excluded.filter((img) => img.category === activeCategory)
      : excluded;
    return maxItems ? filtered.slice(0, maxItems) : filtered;
  }, [activeCategory, excludeSlugs, maxItems]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const navigate = useCallback(
    (direction: 1 | -1) => {
      setLightboxIndex((prev) => {
        if (prev === null || displayed.length === 0) return prev;
        return (prev + direction + displayed.length) % displayed.length;
      });
    },
    [displayed.length]
  );

  return (
    <div>
      {/* Filtres — trait doré sous le label actif (ton éditorial) */}
      {showFilters && (
        <div
          className="flex flex-nowrap md:flex-wrap gap-x-6 md:gap-x-8 gap-y-2 mb-10 md:justify-center overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0"
          role="tablist"
          aria-label="Filtrer par categorie"
          style={{ scrollbarWidth: 'none' }}
        >
          <FilterButton
            label="Tout"
            active={activeCategory === null}
            onClick={() => setActiveCategory(null)}
          />
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              label={categoryLabels[cat] || cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>
      )}

      <GalleryCarousel
        key={activeCategory || 'all'}
        images={displayed}
        onOpen={openLightbox}
      />

      <Lightbox
        images={displayed}
        index={lightboxIndex}
        onClose={closeLightbox}
        onNavigate={navigate}
      />
    </div>
  );
}

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      role="tab"
      aria-pressed={active}
      aria-selected={active}
      className={`relative shrink-0 px-1 py-2 text-sm font-medium tracking-wide transition-colors duration-200 whitespace-nowrap ${
        active ? 'text-primary-700' : 'text-gray-500 hover:text-gray-800'
      }`}
    >
      {label}
      <span
        className={`absolute left-0 right-0 -bottom-0.5 mx-auto h-[2px] bg-secondary-500 transition-all duration-300 ${
          active ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      />
    </button>
  );
}
