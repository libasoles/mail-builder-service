import React from 'react';
import PropTypes from 'prop-types';
import Signature from './Signature';
import { Text, Spacer, Column } from '../../../../../components';
import { withAppContext } from '../../../../../services/context';

const SignatureBlock = ({ paymentData, t }) => {
  const {
    signatureUrl, qps,
  } = paymentData;
  return (
    <Column>
      { signatureUrl && (
      <React.Fragment>
        <Signature src={signatureUrl} />
        <Spacer height={30} />
      </React.Fragment>
      )}

      { !signatureUrl && qps && (
      <Text bold center>
        {t('vouchers:payment.QPSnoSignature')}
      </Text>
      ) }
    </Column>
  );
};

SignatureBlock.propTypes = {
  paymentData: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
};

export default withAppContext(SignatureBlock);
