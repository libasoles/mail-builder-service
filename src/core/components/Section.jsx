import React from 'react';
import PropTypes from 'prop-types';

import {
  MjmlSection,
} from 'mjml-react';


const Section = (props) => {
  const { children } = props;

  return (
    <MjmlSection>
      {children}
    </MjmlSection>
  );
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Section;
