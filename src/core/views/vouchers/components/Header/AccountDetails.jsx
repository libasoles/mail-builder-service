import React from 'react';
import PropTypes from 'prop-types';
import { withAppContext } from '../../../../services/context';
import Column from '../../../../components/Column';
import Text from '../../../../components/Text';

const AccountDetails = withAppContext((props) => {
  const { account, t } = props;
  const {
    legalName,
    identification,
  } = account;

  return (
    <Column>
      <Text small light>
        <b>
          {`${t('vouchers:account.legalName')}:`}
        </b>
        {' '}
        {legalName}
      </Text>

      {identification && (
        <Text small light>
          <b>
            {`${identification.type}:`}
          </b>
          {' '}
          {identification.number}
        </Text>
      )
      }
    </Column>
  );
});


AccountDetails.propTypes = {
  account: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
};

export default withAppContext(AccountDetails);
