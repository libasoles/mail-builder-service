import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  TextColumn,
} from '../../../components/index';


const Footer = (props) => {
  const { styles } = props;

  return (
    <Container padding="8px" backgroundColor={styles.sections.footer.background}>
      <TextColumn h6 center>
        Original
      </TextColumn>
    </Container>
  );
};

Footer.propTypes = {
  styles: PropTypes.shape({}),
};

Footer.defaultProps = {
  styles: {},
};

export default Footer;
