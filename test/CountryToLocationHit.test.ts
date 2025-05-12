import { CountryToLocationHint } from '../src/CountryToLocationHint';
import { CountryAlpha2 } from '../src/Country';
import { LocationHint } from '../src/LocationHint';

describe('CountryToLocationHint', () => {
  it('should map US to wnam', () => {
    expect(CountryToLocationHint[CountryAlpha2.US]).toBe(LocationHint.wnam);
  });
  it('should map CN to apac', () => {
    expect(CountryToLocationHint[CountryAlpha2.CN]).toBe(LocationHint.apac);
  });
  it('should map FR to weur', () => {
    expect(CountryToLocationHint[CountryAlpha2.FR]).toBe(LocationHint.weur);
  });
  it('should map BR to sam', () => {
    expect(CountryToLocationHint[CountryAlpha2.BR]).toBe(LocationHint.sam);
  });
  it('should map ZA to afr', () => {
    expect(CountryToLocationHint[CountryAlpha2.ZA]).toBe(LocationHint.afr);
  });
});
