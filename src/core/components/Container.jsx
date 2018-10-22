import React from 'react';

import {
  MjmlWrapper,
  MjmlSection,
} from 'mjml-react';
import PropTypes from 'prop-types';

const Container = (props) => {
  const { children } = props;

  return (
    <MjmlWrapper
      borderBottom="8px solid #f1f4f6"
      backgroundColor="#ffffff"
      padding="46px 24px"
      {...props}
    >
      {React.Children.map(children, component => (
        component && <MjmlSection>
          {component}
        </MjmlSection>
      ))}
    </MjmlWrapper>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
