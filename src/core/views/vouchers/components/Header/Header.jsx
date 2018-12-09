import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  TextColumn,
  SpacerColumn,
} from 'components/index';

import { withAppContext } from 'services/context';
import Image from './Image';
import AccountDetails from './AccountDetails';

const Header = (props) => {
  const { data, config } = props;
  const {
    account,
  } = data;

  const image = account.image || config.account.defaultImage;

  return (

    <Container>

      <Image src={image} />

      <TextColumn h1 dark bold center>
        {account.name}
      </TextColumn>

      <SpacerColumn height={32} />

      <AccountDetails account={account} />
    </Container>
  );
};


Header.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.shape({}),
    company: PropTypes.shape({
      identificator: PropTypes.shape({
        type: PropTypes.string,
        number: PropTypes.string,
      }),
    }),
  }).isRequired,
  config: PropTypes.shape({}).isRequired,
};

export default withAppContext(Header);
