import React from 'react';
import PropTypes from 'prop-types';
import {
  MjmlColumn,
} from 'mjml-react';

import Text from './Text';

const TextColumn = ({ children, ...props }) => (
  <MjmlColumn>
    <Text {...props}>
      {children}
    </Text>
  </MjmlColumn>
);

export default TextColumn;

TextColumn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};
