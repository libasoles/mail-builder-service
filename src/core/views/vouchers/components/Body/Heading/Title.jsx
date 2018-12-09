import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/index';

const Title = ({ children }) => (
  <Text h2 dark center>
    {children}
  </Text>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
