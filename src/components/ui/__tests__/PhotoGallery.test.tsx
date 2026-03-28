// @vitest-environment jsdom
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, afterEach } from 'vitest';

vi.mock('@/lib/images-manifest', () => ({
  images: {
    'test-1': {
      slug: 'test-1',
      category: 'creation',
      alt: 'Test image 1',
      tags: ['test'],
      originalWidth: 1920,
      originalHeight: 1080,
      blurDataURI: 'data:image/jpeg;base64,abc',
      sizes: { 480: { path: '/test-1-480.webp', width: 480, height: 270 } },
    },
    'test-2': {
      slug: 'test-2',
      category: 'elagage',
      alt: 'Test image 2',
      tags: ['test'],
      originalWidth: 1920,
      originalHeight: 1080,
      blurDataURI: 'data:image/jpeg;base64,def',
      sizes: { 480: { path: '/test-2-480.webp', width: 480, height: 270 } },
    },
    'test-3': {
      slug: 'test-3',
      category: 'creation',
      alt: 'Test image 3',
      tags: ['test'],
      originalWidth: 1920,
      originalHeight: 1080,
      blurDataURI: 'data:image/jpeg;base64,ghi',
      sizes: { 480: { path: '/test-3-480.webp', width: 480, height: 270 } },
    },
  },
  categories: ['creation', 'elagage'] as const,
  getSrcSet: () => '/images/test.webp 480w',
  getDefaultSrc: () => '/images/test.webp',
}));

vi.mock('@/lib/icons', () => ({
  IconClose: ({ className }: { className?: string }) => <span className={className}>×</span>,
  IconChevronLeft: ({ className }: { className?: string }) => <span className={className}>←</span>,
  IconChevronRight: ({ className }: { className?: string }) => <span className={className}>→</span>,
}));

import { PhotoGallery } from '../PhotoGallery';

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = vi.fn(function (this: HTMLDialogElement) {
    this.setAttribute('open', '');
  });
  HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
    this.removeAttribute('open');
  });
});

afterEach(() => {
  cleanup();
  vi.mocked(HTMLDialogElement.prototype.showModal).mockClear();
  vi.mocked(HTMLDialogElement.prototype.close).mockClear();
});

describe('PhotoGallery', () => {
  it('affiche toutes les images et les filtres par défaut', () => {
    render(<PhotoGallery />);

    expect(screen.getByAltText('Test image 1')).toBeDefined();
    expect(screen.getByAltText('Test image 2')).toBeDefined();
    expect(screen.getByAltText('Test image 3')).toBeDefined();

    expect(screen.getByText('Tout')).toBeDefined();
    expect(screen.getByText('Creation')).toBeDefined();
    expect(screen.getByText('Elagage')).toBeDefined();
  });

  it('filtre par catégorie au clic sur un bouton filtre', () => {
    render(<PhotoGallery />);

    fireEvent.click(screen.getByText('Elagage'));

    expect(screen.getByAltText('Test image 2')).toBeDefined();
    expect(screen.queryByAltText('Test image 1')).toBeNull();
    expect(screen.queryByAltText('Test image 3')).toBeNull();
  });

  it('réaffiche toutes les images au clic sur "Tout" après un filtre', () => {
    render(<PhotoGallery />);

    fireEvent.click(screen.getByText('Elagage'));
    expect(screen.queryByAltText('Test image 1')).toBeNull();

    fireEvent.click(screen.getByText('Tout'));
    expect(screen.getByAltText('Test image 1')).toBeDefined();
    expect(screen.getByAltText('Test image 2')).toBeDefined();
    expect(screen.getByAltText('Test image 3')).toBeDefined();
  });

  it('ouvre la lightbox au clic sur une image (showModal appelé)', () => {
    render(<PhotoGallery />);

    const imageButtons = screen.getAllByRole('button').filter((btn) => btn.querySelector('img'));
    fireEvent.click(imageButtons[0]);

    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });

  it('applique aria-pressed correctement sur les filtres', () => {
    render(<PhotoGallery />);

    const toutBtn = screen.getByText('Tout');
    const creationBtn = screen.getByText('Creation');
    const elagageBtn = screen.getByText('Elagage');

    // Par défaut, "Tout" est actif
    expect(toutBtn.getAttribute('aria-pressed')).toBe('true');
    expect(creationBtn.getAttribute('aria-pressed')).toBe('false');
    expect(elagageBtn.getAttribute('aria-pressed')).toBe('false');

    // Après clic sur "Elagage"
    fireEvent.click(elagageBtn);
    expect(toutBtn.getAttribute('aria-pressed')).toBe('false');
    expect(elagageBtn.getAttribute('aria-pressed')).toBe('true');
    expect(creationBtn.getAttribute('aria-pressed')).toBe('false');
  });

  it('masque les filtres quand showFilters=false', () => {
    render(<PhotoGallery showFilters={false} />);

    expect(screen.queryByText('Tout')).toBeNull();
    expect(screen.queryByText('Creation')).toBeNull();

    // Les images sont toujours affichées
    expect(screen.getByAltText('Test image 1')).toBeDefined();
  });

  it('limite le nombre d\'images affichées avec maxItems', () => {
    render(<PhotoGallery maxItems={2} />);

    const imgs = screen.getAllByRole('img');
    expect(imgs.length).toBe(2);
  });
});
