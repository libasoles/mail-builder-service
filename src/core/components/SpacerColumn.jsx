import React from 'react';
import PropTypes from 'prop-types';

import {
  MjmlColumn,
} from 'mjml-react';
import Spacer from './Spacer';

const SpacerColumn = ({ height }) => {
  return (
    <MjmlColumn>
      <Spacer height={height} />
    </MjmlColumn>
  );
};

SpacerColumn.propTypes = {
  height: PropTypes.number,
};

SpacerColumn.defaultProps = {
  height: 0,
};

export default SpacerColumn;
