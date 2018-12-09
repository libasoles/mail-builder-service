import React from 'react';
import PropTypes from 'prop-types';
import { Text, Spacer, Column } from 'components';
import { withAppContext } from 'services/context';
import Signature from './Signature';

const SignatureBlock = ({ paymentData, t }) => {
  const {
    signatureUrl, qps,
  } = paymentData;
  return (
    <Column>
      <If condition={signatureUrl}>
        <React.Fragment>
          <Signature src={signatureUrl} />
          <Spacer height={30} />
        </React.Fragment>
      </If>

      <If condition={!signatureUrl && qps}>
        <Text bold center>
          {t('vouchers:payment.QPSnoSignature')}
        </Text>
      </If>
    </Column>
  );
};

SignatureBlock.propTypes = {
  paymentData: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
};

export default withAppContext(SignatureBlock);
