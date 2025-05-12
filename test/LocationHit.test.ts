import { LocationHint } from '../src/LocationHint';

describe('LocationHint', () => {
  it('should have correct keys and values', () => {
    expect(LocationHint.wnam).toBe('wnam');
    expect(LocationHint.enam).toBe('enam');
    expect(LocationHint.sam).toBe('sam');
    expect(LocationHint.weur).toBe('weur');
    expect(LocationHint.eeur).toBe('eeur');
    expect(LocationHint.apac).toBe('apac');
    expect(LocationHint.oc).toBe('oc');
    expect(LocationHint.afr).toBe('afr');
    expect(LocationHint.me).toBe('me');
  });
});
