import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  TextColumn,
} from '../../../components/index';


const Top = (props) => {
  const { data, styles } = props;

  const {
    title,
  } = data;

  return (
    <Container padding="10px" {...styles.sections.top}>
      <TextColumn h6 center white>
        {title}
      </TextColumn>
    </Container>
  );
};

Top.propTypes = {
  data: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

Top.defaultProps = {
  styles: {},
};

export default Top;
