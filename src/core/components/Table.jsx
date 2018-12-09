import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { handleMjmlProps } from 'mjml-react/dist/src/utils';

class MjmlTable extends PureComponent {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement('mj-table', handleMjmlProps(rest), children);
  }
}

MjmlTable.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

/**
 * IMPORTANT: it only support html. No mjml element will be rendered
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Table = ({ children, ...rest }) => (
  <MjmlTable {...rest}>
    {children}
  </MjmlTable>
);

Table.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Table;
