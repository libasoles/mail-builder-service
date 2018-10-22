import React from 'react';
import PropTypes from 'prop-types';

import Table from '../../../../../components/Table';
import { withAppContext } from '../../../../../services/context';

const PaymentDetailsRow = ({ label, value, styles }) => {
  const textProperties = {
    align: 'right',
    color: styles.textColors.light,
    fontSize: 14,
    lineHeight: '22px',
  };

  return (
    <Table cellspacing="0" cellpadding="0" padding={0}>
      <tr>
        <td style={{
          fontSize: '16px', padding: '4px', wordBreak: 'break-word',
        }}
        >
          <div style={textProperties}>
            {label}
          </div>
        </td>
        <td>
          <div style={{ ...textProperties, fontWeight: 600, textAlign: 'right' }}>
            {value}
          </div>
        </td>
      </tr>
    </Table>
  );
};

PaymentDetailsRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  styles: PropTypes.shape({}).isRequired,
};

export default withAppContext(PaymentDetailsRow);
