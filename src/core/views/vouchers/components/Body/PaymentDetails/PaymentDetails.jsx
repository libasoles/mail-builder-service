import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { Column } from 'components/index';
import { withAppContext } from 'services/context';
import DetailRow from './PaymentDetailsRow';

/**
 * Will print every field listed in config if the value is not undefined
 */
const PaymentDetails = (props) => {
  const { payment, config, t } = props;

  const { paymentDetailsRows } = config;

  return (
    <Column>
      {
        paymentDetailsRows
          .map(x => ({
            label: x.label ? t(x.label) : get(payment, x.key),
            value: get(payment, x.value),
          }))
          .filter(x => !!x.value)
          .map(x => <DetailRow key={x.label.toLowerCase()} label={x.label} value={x.value} />)
      }
    </Column>
  );
};

PaymentDetails.propTypes = {
  payment: PropTypes.shape({}).isRequired,
  config: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
};

export default withAppContext(PaymentDetails);
