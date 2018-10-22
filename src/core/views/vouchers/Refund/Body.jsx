import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  TextColumn,
  SeparatorColumn,
  SpacerColumn,
} from '../../../components/index';
import { Badge } from '../../components/index';
import {
  Heading, PaymentDetails, SignatureBlock,
} from '../components/Body';
import AccountingDetails from './AccountingDetails';
import { withAppContext } from '../../../services/context';


const Body = (props) => {
  const {
    data, t,
  } = props;

  const {
    payment,
  } = data;

  const {
    card = {},
    extraInfo = {},
  } = payment;

  return (
    <Container>
      <Badge>
        {t('vouchers:type.refund.badge')}
      </Badge>

      <SpacerColumn height={20} />

      <Heading title={t('vouchers:type.refund.title')} />

      <SpacerColumn height={24} />

      <AccountingDetails />

      <SeparatorColumn />

      <TextColumn h6>
        {t('vouchers:payment.refund')}
      </TextColumn>

      <SpacerColumn height={8} />

      <PaymentDetails PaymentData={{ ...payment, ticketNumber: extraInfo.ticketNumber }} />

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
