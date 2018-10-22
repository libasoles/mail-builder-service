import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

import {
  Text,
} from '../../components/index';

const DateTime = (props) => {
  const { config, styles, value } = props;

  const formatDateTime = (date, format) => moment(date).tz(config.timezone).format(format);

  return (
    <Text center {...styles.dateTime.text}>
      {`${formatDateTime(value, config.dateFormat)} ${formatDateTime(value, config.timeFormat)} hs`}
    </Text>
  );
};

DateTime.propTypes = {
  config: PropTypes.shape({}).isRequired,
  value: PropTypes.string.isRequired,
  styles: PropTypes.shape({}),
};

DateTime.defaultProps = {
  styles: {},
};

export default DateTime;
