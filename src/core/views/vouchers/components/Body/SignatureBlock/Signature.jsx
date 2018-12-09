import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Image,
  Separator,
} from 'components/index';
import { withAppContext } from 'services/context';

const Signature = (props) => {
  const { src, t } = props;
  return (
    <React.Fragment>
      <Image src={src} padding="0" />

      <Separator padding="5px 4px" />

      <Text light bold center>
        {t('vouchers:payment.signature')}
      </Text>
    </React.Fragment>
  );
};

Signature.propTypes = {
  src: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default withAppContext(Signature);
