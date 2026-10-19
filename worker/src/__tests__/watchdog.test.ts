import { describe, it, expect } from 'vitest';
import { diagnostic } from '../watchdog';

const maintenant = new Date('2026-10-20T07:00:00Z');
const ilYa = (jours: number) => new Date(maintenant.getTime() - jours * 86_400_000).toISOString();

describe('chien de garde de la note Google', () => {
  it('se tait quand le build et la note datent du dernier lundi', () => {
    expect(diagnostic({ checkedAt: ilYa(1), fetchedAt: ilYa(1) }, maintenant)).toBeNull();
  });

  it('accuse la chaine de build quand aucun build n\'a tourne depuis plus de 8 jours', () => {
    const probleme = diagnostic({ checkedAt: ilYa(48), fetchedAt: ilYa(48) }, maintenant);
    expect(probleme).toMatch(/Aucun build du site depuis 48 jours/);
  });

  it('accuse l\'API Places quand les builds tournent mais que la note est perimee', () => {
    const probleme = diagnostic(
      { checkedAt: ilYa(1), fetchedAt: ilYa(15), error: 'API Places 403 Forbidden' },
      maintenant,
    );
    expect(probleme).toMatch(/l'API Places echoue depuis 15 jours/);
    expect(probleme).toMatch(/API Places 403 Forbidden/);
  });

  it('signale un fichier sans horodatage exploitable', () => {
    expect(diagnostic({ fetchedAt: '2026-10-19' }, maintenant)).toMatch(/illisible/);
    expect(diagnostic({ checkedAt: 'n/a', fetchedAt: 'n/a' }, maintenant)).toMatch(/illisible/);
  });
});
