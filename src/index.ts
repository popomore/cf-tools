import { CountryAlpha2 } from './Country';
import { CountryToLocationHint } from './CountryToLocationHint';
import { LocationHint } from './LocationHint';


export { CountryAlpha2, LocationHint };

export function getLocationHint(country: CountryAlpha2): LocationHint | undefined {
  return CountryToLocationHint[country];
}

