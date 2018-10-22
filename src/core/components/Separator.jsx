import React from 'react';
import PropTypes from 'prop-types';

import {
  MjmlDivider,
} from 'mjml-react';

const Separator = (props) => {
  const { styles, ...rest } = props;

  return (
    <MjmlDivider
      borderWidth={1}
      borderColor="#cbdbe7"
      padding="20px 4px"
      {...styles.separator}
      {...rest}
    />
  );
};

Separator.propTypes = {
  styles: PropTypes.shape({}),
};

Separator.defaultProps = {
  styles: {},
};

export default Separator;
