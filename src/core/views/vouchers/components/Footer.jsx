import React from 'react';
import PropTypes from 'prop-types';
import {
  Group,
  Container,
  TextColumn,
  SpacerColumn,
  ImageColumn,
} from 'components/index';
import { withAppContext } from 'services/context';

const Footer = (props) => {
  const { config, t } = props;
  let { styles } = props;
  styles = styles.sections.footer;
  const { website, phone } = config.account;

  return (
    <Container padding="8px" backgroundColor={styles.body}>
      <TextColumn tiny center>
        {t('vouchers:doNotReply', { phone })}
      </TextColumn>

      <TextColumn tiny primary bold center>
        <a style={styles.website} href={website.link} target="_blank" rel="noopener noreferrer">
          {website.label}
        </a>
      </TextColumn>

      <SpacerColumn height={36} />

      <Group {...styles.logos.container}>
        <ImageColumn {...styles.logos.client} />
        <ImageColumn {...styles.logos.poweredBy} />
      </Group>
    </Container>
  );
};

Footer.propTypes = {
  data: PropTypes.shape({}).isRequired,
  config: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
  t: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  styles: {},
};

export default withAppContext(Footer);
