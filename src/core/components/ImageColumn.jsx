import React from 'react';
import PropTypes from 'prop-types';

import {
  MjmlColumn,
} from 'mjml-react';
import Image from './Image';

const ImageColumn = props => (
  <MjmlColumn>
    <Image {...props} />
  </MjmlColumn>
);

ImageColumn.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

ImageColumn.defaultProps = {
  width: null,
};

export default ImageColumn;
