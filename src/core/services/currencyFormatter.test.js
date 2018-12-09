import CurrencyFormatter from './currencyFormatter';
import { supportLocales } from './intl';

beforeAll(() => {
  supportLocales(['es-AR']);
});

it('formats price with correct currency symbol', () => {
  const formatter = new CurrencyFormatter('es-AR', 'ARS');
  expect(formatter.format(245.20)).toEqual('$ 245,20');
});

it('works with strings too', () => {
  const formatter = new CurrencyFormatter('es-AR', 'ARS');
  expect(formatter.format('245.20')).toEqual('$ 245,20');
});

it('formats thousands too', () => {
  const formatter = new CurrencyFormatter('es-AR', 'ARS');
  expect(formatter.format(1245.20)).toEqual('$ 1.245,20');
});
