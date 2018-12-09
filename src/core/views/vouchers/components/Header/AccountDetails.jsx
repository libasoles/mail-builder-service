import React from 'react';
import PropTypes from 'prop-types';
import { withAppContext } from 'services/context';
import Column from 'components/Column';
import Text from 'components/Text';
import get from 'lodash/get';

const AccountDetails = (props) => {
  const { account, config, t } = props;
  const { accountDetailsRows } = config;

  return (
    <Column>
      {
        accountDetailsRows
          .map(x => ({
            label: x.label ? t(x.label) : get(account, x.key),
            value: get(account, x.value),
          }))
          .filter(x => !!x.value)
          .map(x => (
            <Text small light key={x.label.toLowerCase()}>
              <b>{`${x.label}:`}</b>
              {' '}
              {x.value}
            </Text>
          ))
      }
    </Column>
  );
};


AccountDetails.propTypes = {
  account: PropTypes.shape({}).isRequired,
  config: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
};

export default withAppContext(AccountDetails);
