import React from 'react';
import PropTypes from 'prop-types';
import { Column, Separator } from '../../../components';
import { Items, Total } from '../components/Body/AccountingDetails';
import CurrencyFormatterFactory from '../../../services/currencyFormatter.factory';
import {
  withAppContext,
} from '../../../services/context';

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
      const name = item.name || t('vouchers:order.refundItemName');
      const price = -item.unitPrice;
      const formattedPrice = this.currencyFormatter.format(price);
      return {
        name,
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

    return (
      <Column>

        <Items items={items} />

        <Separator />

        <Total formattedAmount={this.currencyFormatter.format(-amount)} />

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
