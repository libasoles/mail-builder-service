import React from 'react';
import PropTypes from 'prop-types';
import {
  Column, Group, TextColumn, SpacerColumn,
} from 'components/index';

const ExchangeDetail = (props) => {
  const { data } = props;
  const {
    currency,
    exchangeRate,
    margin,
    transactionAmount,
  } = data;

  return (
    <Column>

      <Group>
        <TextColumn light left>
          Tasa de cambio
        </TextColumn>
        <TextColumn light bold right>
          1 USD =
          {' '}
          {exchangeRate}
          {' '}
          ARS
        </TextColumn>
      </Group>

      <Group>
        <TextColumn light left>
          Margen
        </TextColumn>
        <TextColumn light bold right>
          {margin}
          %
        </TextColumn>
      </Group>

      <Group>
        <TextColumn light left>
          Moneda Transacción
        </TextColumn>
        <TextColumn light bold right>
          {currency}
        </TextColumn>
      </Group>

      <Group>
        <TextColumn light bold left>
          Total Transacción
        </TextColumn>
        <TextColumn light bold right>
          {transactionAmount}
        </TextColumn>
      </Group>

      <SpacerColumn height={24} />

      <TextColumn tiny>
        Me han ofrecido una selección de monedas, incluyendo moneda local del comerciante y he decidido pagar en EUR.
      </TextColumn>
      <TextColumn tiny>
        Conversión Dinámica de Monedas (DCC) es ofrecida por el establecimiento.
      </TextColumn>

    </Column>
  );
};

ExchangeDetail.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default ExchangeDetail;
