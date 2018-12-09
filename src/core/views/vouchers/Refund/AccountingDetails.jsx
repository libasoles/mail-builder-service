import React from 'react';
import PropTypes from 'prop-types';
import { Column, Separator } from 'components';
import { Items, Total } from 'views/vouchers/components/Body/AccountingDetails';
import CurrencyFormatterFactory from 'services/currencyFormatter.factory';
import {
  withAppContext,
} from 'services/context';

class AccountingDetails extends React.Component {
  constructor(props) {
    super(props);
    const { data, config } = props;
    const { currency } = data;
    this.currencyFormatter = CurrencyFormatterFactory.create(config.locale, currency);
  }

  createRefundRow(amount) {
    const { t } = this.props;
    const price = -amount;
    const formattedPrice = this.currencyFormatter.format(price);
    return [{
      name: t('vouchers:order.refundItemName'),
      price,
      formattedPrice,
    }];
  }

  render() {
    const { data } = this.props;

    const {
      amount,
    } = data;

    const items = this.createRefundRow(amount);

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
