import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { handleMjmlProps } from 'mjml-react/dist/src/utils';

class MjmlGroup extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement('mj-group', handleMjmlProps(rest), children);
  }
}

const Group = ({ children }) => (
  <MjmlGroup>
    {children}
  </MjmlGroup>
);

Group.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Group;
