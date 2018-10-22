import React from 'react';

import {
  Template,
} from '../../../components/index';

import {
  Header,
  Map,
  Footer,
} from '../components/index';

import Body from './Body';
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
