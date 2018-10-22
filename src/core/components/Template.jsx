import React from 'react';
import PropTypes from 'prop-types';

import {
  Mjml,
  MjmlHead,
  MjmlAttributes,
  MjmlBody,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from 'mjml-react';
import { withAppContext } from '../services/context';

const Template = (props) => {
  const { children, styles } = props;

  return (
    <Mjml>
      <MjmlHead>
        <MjmlAttributes>
          <MjmlText
            fontFamily="Arial"
            padding={4}
            fontSize={14}
            color={styles.textColors.normal}
          >
            _
          </MjmlText>
          <MjmlWrapper padding={0}>
            _
          </MjmlWrapper>
          <MjmlSection padding={0}>
            _
          </MjmlSection>
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody
        width={480}
        backgroundColor={styles.background.body}
      >
        {children}
      </MjmlBody>
    </Mjml>
  );
};

Template.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  styles: PropTypes.shape({}).isRequired,
};

export default withAppContext(Template);
