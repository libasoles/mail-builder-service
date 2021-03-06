import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ImageColumn,
} from 'components/index';
import { withAppContext } from 'services/context';


const Map = (props) => {
  const { data } = props;

  const {
    map,
  } = data.location;

  return (
    <If condition={map}>
      <Container padding="0">
        <ImageColumn src={map} padding="0" />
      </Container>
    </If>
  );
};

Map.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default withAppContext(Map);
