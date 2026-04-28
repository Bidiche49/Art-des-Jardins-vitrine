'use client';

import { useEffect, useRef } from 'react';
import { type ImageEntry, getSrcSet, getDefaultSrc } from '@/lib/images-manifest';
import { IconClose, IconChevronLeft, IconChevronRight } from '@/lib/icons';

interface LightboxProps {
  images: ImageEntry[];
  index: number | null;
  onClose: () => void;
  onNavigate: (direction: 1 | -1) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (index !== null) {
      dialogRef.current?.showModal();
      closeBtnRef.current?.focus();
    } else {
      dialogRef.current?.close();
    }
  }, [index]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === 'ArrowLeft') onNavigate(-1);
      if (e.key === 'ArrowRight') onNavigate(1);
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [index, onNavigate]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) onNavigate(delta < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const current = index !== null ? images[index] : null;

  return (
    <dialog
      ref={dialogRef}
      className="lightbox-dialog"
      aria-label="Visionneuse photo"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      {current && index !== null && (
        <div
          className="lightbox-content"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/50 rounded-full p-2"
            aria-label="Fermer"
          >
            <IconClose className="w-6 h-6" />
          </button>
          <button
            onClick={() => onNavigate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white bg-black/50 rounded-full p-2"
            aria-label="Photo precedente"
          >
            <IconChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => onNavigate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white bg-black/50 rounded-full p-2"
            aria-label="Photo suivante"
          >
            <IconChevronRight className="w-6 h-6" />
          </button>
          <picture>
            <source type="image/webp" srcSet={getSrcSet(current)} sizes="90vw" />
            <img
              src={getDefaultSrc(current, 1200)}
              alt={current.alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            />
          </picture>
          <p className="font-serif text-white/60 text-center mt-4 text-base tracking-widest">
            {String(index + 1).padStart(2, '0')}
            <span className="mx-2 text-secondary-400">·</span>
            {String(images.length).padStart(2, '0')}
          </p>
        </div>
      )}
    </dialog>
  );
}
