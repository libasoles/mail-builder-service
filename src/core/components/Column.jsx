import React from 'react';
import PropTypes from 'prop-types';

import {
  MjmlColumn,
} from 'mjml-react';


const Column = (props) => {
  const { children, ...rest } = props;

  return (
    <MjmlColumn {...rest}>
      {children}
    </MjmlColumn>
  );
};

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Column;
