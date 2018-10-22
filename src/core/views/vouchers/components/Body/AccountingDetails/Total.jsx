import React from 'react';
import PropTypes from 'prop-types';
import { semanticProps } from '../../../../../components/Text';
import Row from './Row';
import { withAppContext } from '../../../../../services/context';

const Total = ({ formattedAmount, t }) => {
  const textProperties = {
    ...semanticProps.huge,
    ...semanticProps.primary,
    ...semanticProps.bold,
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
  t: PropTypes.func.isRequired,
};

export default withAppContext(Total);
