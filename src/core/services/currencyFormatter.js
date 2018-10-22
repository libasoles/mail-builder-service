/**
 * Accounting format service
 */
export default class CurrencyFormatter {
  constructor(locale, currency) {
    const settings = {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
    };
    this.instance = new Intl.NumberFormat(locale, settings);
  }

  format(value) {
    return this.instance.format(value);
  }
}
