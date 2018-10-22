import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  TextColumn,
  SpacerColumn,
} from '../../../../components/index';
import FeedbackSelector from './FeedbackSelector';
import { withAppContext } from '../../../../services/context';

const Feedback = ({ t }) => (
  <Container>
    <TextColumn large center>
      {t('vouchers:doNotReply')}
    </TextColumn>
    <SpacerColumn height={20} />
    <FeedbackSelector />
  </Container>
);

Feedback.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withAppContext(Feedback);
