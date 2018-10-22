import React from 'react';
import PropTypes from 'prop-types';

import {
  MjmlColumn,
  MjmlImage,
} from 'mjml-react';
import Group from '../../../../components/Group';
import { withAppContext } from '../../../../services/context';

const FeedbackSelector = ({ styles }) => (
  <Group>
    <MjmlColumn>
      <MjmlImage
        {...styles.sections.feedback.icons.default}
        {...styles.sections.feedback.icons.positive}
      />
    </MjmlColumn>
    <MjmlColumn>
      <MjmlImage
        {...styles.sections.feedback.icons.default}
        {...styles.sections.feedback.icons.negative}
      />
    </MjmlColumn>
  </Group>
);

FeedbackSelector.propTypes = {
  links: PropTypes.shape({
    like: PropTypes.string,
    dislike: PropTypes.string,
  }),
  images: PropTypes.shape({
    like: PropTypes.string,
    dislike: PropTypes.string,
  }),
  styles: PropTypes.shape({}).isRequired,
};

FeedbackSelector.defaultProps = {
  links: {},
  images: {},
};

export default withAppContext(FeedbackSelector);
