import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';
import { generateManifest } from './optimize-images.mjs';

function makeResult(overrides = {}) {
  return {
    slug: 'test-image',
    category: 'creation',
    alt: 'Test image',
    tags: ['tag1', 'tag2'],
    originalWidth: 1920,
    originalHeight: 1080,
    blurDataURI: 'data:image/webp;base64,abc',
    sizes: {
      480: { path: '/images/realisations/test-image-480w.webp', width: 480, height: 270 },
      800: { path: '/images/realisations/test-image-800w.webp', width: 800, height: 450 },
    },
    ...overrides,
  };
}

describe('generateManifest', () => {
  it('should generate valid manifest with nominal results', () => {
    const results = [
      makeResult(),
      makeResult({ slug: 'second-image', category: 'elagage', alt: 'Second image', tags: ['elagage'] }),
    ];

    const output = generateManifest(results);

    expect(output).toContain('export const images');
    expect(output).toContain("'test-image'");
    expect(output).toContain("'second-image'");
    expect(output).toContain("category: 'creation'");
    expect(output).toContain("category: 'elagage'");
    expect(output).toContain('/images/realisations/test-image-480w.webp');
  });

  it('should generate manifest with empty object when no results', () => {
    const output = generateManifest([]);

    expect(output).toContain('export const images');
    expect(output).toContain('Record<string, ImageEntry> = {\n\n}');
  });

  it('should escape apostrophes in alt text', () => {
    const results = [makeResult({ alt: "l'arbre" })];

    const output = generateManifest(results);

    expect(output).toContain("alt: 'l\\'arbre'");
  });

  it('should filter out null results', () => {
    const results = [null, makeResult(), null];

    const output = generateManifest(results);

    expect(output).toContain("'test-image'");
    // Should only have one entry
    const matches = output.match(/'test-image': \{/g);
    expect(matches).toHaveLength(1);
  });
});

describe('optimize-images smoke test', () => {
  it('should exit cleanly with no source images', () => {
    const result = execSync('node scripts/optimize-images.mjs', {
      encoding: 'utf-8',
      cwd: process.cwd(),
      timeout: 30000,
    });
    expect(result).toContain('Done!');
  });
});
