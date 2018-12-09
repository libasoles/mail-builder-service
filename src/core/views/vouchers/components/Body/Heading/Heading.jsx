import React from 'react';
import PropTypes from 'prop-types';
import { Text, Spacer, Column } from 'components';
import DateTime from 'views/components/DateTime';
import { withAppContext } from 'services/context';
import Title from './Title';

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

  return (
    <React.Fragment>
      <Column>

        <Title>
          {title}
        </Title>

        <Spacer height={5} />

        <Text h3 center>
          {`${t('vouchers:payment.authorization')} ${authorizationCode}`}
        </Text>

        <Spacer height={20} />

        <DateTime value={date} center />
      </Column>
    </React.Fragment>
  );
};

Heading.propTypes = {
  data: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default withAppContext(Heading);
