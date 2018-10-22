import React from 'react';

import {
  Header,
  Body,
  Map,
  Footer,
} from '../components/index';

import {
  Template,
} from '../../../components/index';
import { withAppContext } from '../../../services/context';

class Voucher extends React.PureComponent {
  render() {
    return (
      <Template>

        <Header />

        <Body />

        <Map />

        <Footer />

      </Template>
    );
  }
}

export default withAppContext(Voucher);
