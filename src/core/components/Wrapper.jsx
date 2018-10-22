import React from 'react';
import PropTypes from 'prop-types';

import {
  MjmlWrapper,
} from 'mjml-react';


const Wrapper = (props) => {
  const { children } = props;

  return (
    <MjmlWrapper>
      {children}
    </MjmlWrapper>
  );
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Wrapper;
