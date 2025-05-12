# cf-tools

Cloudflare Tools

## Features

- Supported Country code ([ISO-3166-1 Alpha-2](https://www.iso.org/iso-3166-country-codes.html)) enum
- Supported [Cloudflare Durable Objects region](https://developers.cloudflare.com/durable-objects/reference/data-location/#supported-locations-1) enum (`LocationHint`)
- Country to LocationHint mapping

## Usage Example

```typescript
import { getLocationHint, CountryAlpha2 } from '@popomore/cf-tools';

const region = getLocationHint(CountryAlpha2.US); // e.g. 'wnam'
```

## Develop

### Installation

```bash
npm install
```

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

### Coverage

```bash
npm run coverage
```

## License

MIT
