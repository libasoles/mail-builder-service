import React from 'react';
import PropTypes from 'prop-types';
import { withAppContext } from 'services/context';
import ItemsRow from './ItemsRow';
import CurrencyFormatterFactory from 'services/currencyFormatter.factory';

class ExtraItems extends React.Component {
  constructor(props) {
    super(props);
    const { data, config } = props;
    const { currency } = data;
    this.currencyFormatter = CurrencyFormatterFactory.create(config.locale, currency);
  }

  render() {
    const { items, t } = this.props;
    return (
      <React.Fragment>
        {items.length && items
          .map(x => ({
            name: x.name || t(`vouchers:payment.extraItems.${x.type}`),
            formattedPrice: this.currencyFormatter.format(x.amount),
          }))
          .map((item, index) => (
            <ItemsRow key={index} itemData={item} />
          ))}
      </React.Fragment>
    );
  }
}

ExtraItems.propTypes = {
  data: PropTypes.shape({}).isRequired,
  config: PropTypes.shape({}).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
  t: PropTypes.func.isRequired,
};

export default withAppContext(ExtraItems);
