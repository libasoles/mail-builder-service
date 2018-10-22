import React from 'react';
import PropTypes from 'prop-types';

import {
  MjmlColumn,
} from 'mjml-react';
import Separator from './Separator';

const SeparatorColumn = props => (
  <MjmlColumn>
    <Separator {...props} />
  </MjmlColumn>
);

SeparatorColumn.propTypes = {
  styles: PropTypes.shape({}),
};

SeparatorColumn.defaultProps = {
  styles: {},
};

export default SeparatorColumn;
