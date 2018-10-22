import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '../../../../../components';
import { semanticProps } from '../../../../../components/Text';

const Row = ({ label, value, textProperties }) => (
  <Table cellspacing="0" cellpadding="0" padding={0}>
    <tr>
      <td style={{
        fontSize: '16px', padding: '4px', paddingTop: '8px', paddingBottom: '8px', wordBreak: 'break-word',
      }}
      >
        <div style={textProperties}>
          {label}
        </div>
      </td>
      <td>
        <div style={{ ...textProperties, minWidth: '100px', textAlign: 'right' }}>
          {value}
        </div>
      </td>
    </tr>
  </Table>
);

Row.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  textProperties: PropTypes.shape({}),
};

Row.defaultProps = {
  textProperties: {
    ...semanticProps.medium,
  },
};

export default Row;
