import React from 'react';
import PropTypes from 'prop-types';
import { TextColumn } from '../../../../../components/index';
import { withAppContext } from '../../../../../services/context';

const Authorization = ({ code, t }) => (
  <React.Fragment>
    <TextColumn h3 center>
      {`${t('vouchers:payment.authorization')} ${code}`}
    </TextColumn>

  </React.Fragment>
);

Authorization.propTypes = {
  code: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default withAppContext(Authorization);
