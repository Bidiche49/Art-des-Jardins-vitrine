import { describe, it, expect } from 'vitest';
import { services, TAX_CREDIT_SLUGS, getServiceBySlug } from '../services-data';

describe('services-data integrity', () => {
  it('each service has non-empty critical fields', () => {
    const criticalFields = ['slug', 'shortTitle', 'cardDescription', 'menuDescription'] as const;

    for (const service of services) {
      for (const field of criticalFields) {
        expect(service[field], `${service.slug || 'unknown'}: "${field}" must be non-empty`).toBeTruthy();
        expect(service[field].trim().length, `${service.slug}: "${field}" must not be whitespace-only`).toBeGreaterThan(0);
      }
    }
  });

  it('each slug is unique', () => {
    const slugs = services.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('TAX_CREDIT_SLUGS contains at least 1 entry', () => {
    expect(TAX_CREDIT_SLUGS.length).toBeGreaterThanOrEqual(1);
  });

  it('TAX_CREDIT_SLUGS are consistent with services', () => {
    const allSlugs = services.map((s) => s.slug);
    for (const slug of TAX_CREDIT_SLUGS) {
      expect(allSlugs, `TAX_CREDIT_SLUGS contains "${slug}" which is not in services`).toContain(slug);
    }
  });

  it('getServiceBySlug returns the correct service', () => {
    const first = services[0];
    const result = getServiceBySlug(first.slug);
    expect(result).toBeDefined();
    expect(result!.slug).toBe(first.slug);
    expect(result!.shortTitle).toBe(first.shortTitle);
  });

  it('getServiceBySlug returns undefined for unknown slug', () => {
    expect(getServiceBySlug('slug-inexistant-xyz')).toBeUndefined();
  });
});
