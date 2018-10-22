import React from 'react';
import PropTypes from 'prop-types';

import {
  MjmlColumn,
  MjmlButton,
} from 'mjml-react';

const Badge = (props) => {
  const { children } = props;

  return (

    <MjmlColumn>
      <MjmlButton
        borderRadius={24}
        paddingTop={0}
        paddingBottom={0}
        color="#ff840f"
        backgroundColor="#fef3e8"
        textTransform="uppercase"
        align="center"
        fontFamily="Ubuntu, Arial"
        fontWeight={500}
        fontSize={16}
        {...props}
      >
        {children}
      </MjmlButton>
    </MjmlColumn>
  );
}

Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};

export default Badge;
