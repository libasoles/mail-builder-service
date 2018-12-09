import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import { withAppContext } from 'services/context';

const Subtotal = ({ formattedAmount, t }) => (
  <Row
    label={t('vouchers:order.items.subTotal')}
    value={formattedAmount}
  />
);

Subtotal.propTypes = {
  formattedAmount: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default withAppContext(Subtotal);
