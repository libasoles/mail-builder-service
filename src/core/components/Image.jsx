import React from 'react';
import PropTypes from 'prop-types';

import {
  MjmlImage,
} from 'mjml-react';

const Image = props => (
  <MjmlImage
    align="center"
    {...props}
  />
);

Image.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Image.defaultProps = {
  width: null,
};

export default Image;
