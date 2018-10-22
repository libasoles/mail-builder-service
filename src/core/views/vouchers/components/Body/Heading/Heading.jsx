import React from 'react';
import PropTypes from 'prop-types';
import { Text, Spacer, Column } from '../../../../../components';
import DateTime from '../../../../components/DateTime';
import Title from './Title';
import { withAppContext } from '../../../../../services/context';

const Heading = ({
  data, title, t,
}) => {
  const {
    date,
    payment,
  } = data;

  const {
    authorizationCode,
  } = payment;

  const DateTimeWithAppContext = withAppContext(DateTime);

  return (
    <Column>

      <Title>
        {title}
      </Title>

      <Spacer height={5} />

      <Text h3 center>
        {`${t('vouchers:payment.authorization')} ${authorizationCode}`}
      </Text>

      <Spacer height={20} />

      <DateTimeWithAppContext value={date} center />
    </Column>
  );
};

Heading.propTypes = {
  data: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default withAppContext(Heading);
