import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash';
import DetailRow from './PaymentDetailsRow';
import {
  Column,
} from '../../../../../components/index';
import { withAppContext } from '../../../../../services/context';

const PaymentDetails = (props) => {
  const { PaymentData, t } = props;

  const {
    card, installments, terminalId, retrieveReferenceNumber, authorizationCode, ticketNumber,
  } = PaymentData;

  let rows = {};
  if (card) {
    rows[card.brand] = card.number;
    rows[t('vouchers:payment.card.cardholder')] = card.cardholder;
  }

  const moreRows = {
    [t('vouchers:payment.installments')]: installments,
    [t('vouchers:payment.authorization')]: authorizationCode,
    [t('vouchers:payment.reference')]: retrieveReferenceNumber,
    [t('vouchers:payment.ticket')]: ticketNumber,
    [t('vouchers:payment.terminalID')]: terminalId,
  };

  rows = Object.assign(rows, moreRows);

  return (
    <Column>
      { Object.keys(rows)
        .filter(label => rows[label])
        .map((label, i) => <DetailRow key={i} label={label} value={rows[label]} />) }
    </Column>
  );
};

PaymentDetails.propTypes = {
  PaymentData: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
};

export default withAppContext(PaymentDetails);
