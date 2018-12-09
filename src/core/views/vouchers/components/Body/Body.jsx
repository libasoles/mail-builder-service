import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  TextColumn,
  SeparatorColumn,
  SpacerColumn,
} from 'components/index';
import PaymentDetails from './PaymentDetails/PaymentDetails';
import AccountingDetails from './AccountingDetails/index';
import SignatureBlock from './SignatureBlock/index';
import Heading from './Heading/Heading';
import {
  withAppContext,
} from 'services/context';

const Body = (props) => {
  const {
    data, t,
  } = props;

  const {
    payment,
    order
  } = data;

  const {
    card = {}, installments,
  } = payment;

  const voucherType = installments > 1 ? t('vouchers:payment.installmentSale') : t('vouchers:payment.sale');

  return (
    <Container>
      <Heading title={t('vouchers:type.sale.title')} />

      <SpacerColumn height={24} />

      <AccountingDetails order={order} />

      <SeparatorColumn />

      <TextColumn h6>
        {voucherType}
      </TextColumn>

      <SpacerColumn height={8} />

      <PaymentDetails payment={payment} />

      <SpacerColumn height={24} />

      { card && (
      <TextColumn tiny>
        {t('vouchers:payment.card.disclaimer')}
      </TextColumn>
      ) }

      <SpacerColumn height={20} />

      <SignatureBlock paymentData={payment} />
    </Container>
  );
};

Body.propTypes = {
  data: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
};

export default withAppContext(Body);
