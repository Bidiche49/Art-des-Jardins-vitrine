import { describe, it, expect } from 'vitest';
import { MEDIATEUR, getMediateur } from '../site-config';

describe('mediateur de la consommation', () => {
  const complet = {
    nom: 'Mediateur Exemple',
    site: 'https://mediateur.example',
    adresse: '1 rue Exemple, 75000 Paris',
  };

  it('est masque tant qu\'un champ manque', () => {
    expect(getMediateur({ nom: '', site: '', adresse: '' })).toBeNull();
    expect(getMediateur({ ...complet, adresse: '' })).toBeNull();
    expect(getMediateur({ ...complet, site: '   ' })).toBeNull();
  });

  it('est affiche une fois les trois champs remplis', () => {
    expect(getMediateur(complet)).toEqual(complet);
  });

  // Une constante a moitie remplie serait silencieusement masquee : on prefere
  // que le test casse pour signaler l'oubli.
  it('la constante est soit vide, soit complete avec une URL absolue', () => {
    const remplis = Object.values(MEDIATEUR).filter((v) => v.trim() !== '').length;
    expect([0, Object.keys(MEDIATEUR).length]).toContain(remplis);
    if (remplis > 0) expect(MEDIATEUR.site).toMatch(/^https?:\/\//);
  });
});
