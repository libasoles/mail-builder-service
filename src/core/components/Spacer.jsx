import React from 'react';
import PropTypes from 'prop-types';

import {
  MjmlColumn,
  MjmlSpacer,
} from 'mjml-react';

const Spacer = ({ height }) => {
  const formattedHeight = `${height}px`;
  return (
    <MjmlSpacer height={formattedHeight} />
  );
};

Spacer.propTypes = {
  height: PropTypes.number,
};

Spacer.defaultProps = {
  height: 0,
};

export default Spacer;
