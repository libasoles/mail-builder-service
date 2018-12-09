import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import { withAppContext } from 'services/context';

const Total = ({ formattedAmount, styles, t }) => {
  const textProperties = {
    ...styles.text.huge,
    ...styles.text.primary,
    ...styles.text.bold,
  };

  return (
    <Row
      label={t('vouchers:payment.total')}
      value={formattedAmount}
      textProperties={textProperties}
    />
  );
};

Total.propTypes = {
  formattedAmount: PropTypes.string.isRequired,
  styles: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
};

export default withAppContext(Total);
