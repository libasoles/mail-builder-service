import CurrencyFormatter from './currencyFormatter';

export default class CurrencyFormatterFactory {
  static create(locale, currency) {
    return new CurrencyFormatter(locale, currency);
  }
}
