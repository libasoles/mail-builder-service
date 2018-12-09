import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { Table } from 'components';
import { withAppContext } from 'services/context';

const Row = ({
  label, value, styles, textProperties,
}) => {
  const textStyle = !isEmpty(textProperties) ? textProperties : get(styles, 'text.medium');
  return (
    <Table cellspacing="0" cellpadding="0" padding={0}>
      <tr>
        <td style={{
          fontSize: '16px', padding: '4px', paddingTop: '8px', paddingBottom: '8px', wordBreak: 'break-word',
        }}
        >
          <div style={textStyle}>
            {label}
          </div>
        </td>
        <td>
          <div style={{ ...textStyle, minWidth: '100px', textAlign: 'right' }}>
            {value}
          </div>
        </td>
      </tr>
    </Table>
  );
};

Row.propTypes = {
  styles: PropTypes.shape({}).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  textProperties: PropTypes.shape({}),
};

Row.defaultProps = {
  textProperties: {},
};
export default withAppContext(Row);
