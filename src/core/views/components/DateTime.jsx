import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { withAppContext } from 'services/context';
import Table from 'components/Table';

const DateTime = (props) => {
  const { config, styles, value } = props;

  const formatDateTime = (date, format) => moment(date).tz(config.timezone).format(format);

  return (
    <Table cellspacing="0" cellpadding="0">
      <tr>
        <td align="center">
          <div style={{ ...styles.dateTime.container, ...styles.dateTime.leftContainer }}>
            <div style={styles.dateTime.text}>
              {formatDateTime(value, config.dateFormat)}
            </div>
          </div>
        </td>
        <td align="center" style={{ ...styles.dateTime.rightContainer }}>
          <div style={{ ...styles.dateTime.container, ...styles.dateTime.rightContainer }}>
            <div style={styles.dateTime.text}>
              {`${formatDateTime(value, config.timeFormat)} ${config.afterTimeFormat}`}
            </div>
          </div>
        </td>
      </tr>
    </Table>
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

export default withAppContext(DateTime);
