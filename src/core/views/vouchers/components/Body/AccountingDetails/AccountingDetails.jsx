import React from 'react';
import PropTypes from 'prop-types';
import Items from './Items';
import { Column, Separator } from '../../../../../components';
import Subtotal from './Subtotal';
import Total from './Total';
import { CurrencyFormatterFactory } from '../../../../../services';
import { withAppContext } from '../../../../../services/context';

class AccountingDetails extends React.Component {
  constructor(props) {
    super(props);
    const { data, config } = props;
    const { currency } = data;
    this.currencyFormatter = CurrencyFormatterFactory.create(config.locale, currency);
  }

  mapItems(items) {
    return items.map((item) => {
      const { t } = this.props;
      const name = item.name || t('vouchers:order.defaultItemName');
      const quantity = item.quantity > 1 ? `x${item.quantity}` : '';
      const price = +(item.unitPrice * item.quantity);
      const formattedPrice = this.currencyFormatter.format(price);
      return {
        name: `${name} ${quantity}`,
        price,
        formattedPrice,
      };
    });
  }

  render() {
    const { data } = this.props;

    const {
      amount,
      order,
    } = data;

    let {
      items,
    } = order;

    items = this.mapItems(items);

    const subtotal = items.reduce((total, item) => total + item.price, 0);

    return (
      <Column>

        <Items items={items} />

        <Separator />

        <Subtotal formattedAmount={this.currencyFormatter.format(subtotal)} />

        <Separator />

        <Total formattedAmount={this.currencyFormatter.format(amount)} />
      </Column>
    );
  }
}

AccountingDetails.propTypes = {
  data: PropTypes.shape({}).isRequired,
  config: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
};

export default withAppContext(AccountingDetails);
