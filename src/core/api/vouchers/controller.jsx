import React from 'react';
import set from 'lodash/set';
import Vouchers from 'views/vouchers';
import capitalizeFirstLetter from 'helpers/capitalizeFirstLetter';
import { renderToHTML } from 'services/render';
import StaticGoogleMap from 'services/googleMaps';
import { AppContextProvider } from 'services/context';

const create = async ({
  themeService, configService, i18nHelper, data, ctx,
}) => {
  const namespace = 'vouchers';
  const { type: voucherType } = ctx.params;
  const styles = themeService.getStyles(namespace);

  const mapService = new StaticGoogleMap(configService.get('googleMapApiKey'));
  set(data, 'location.map', await mapService.getMap(data.location, styles.primaryColor.substring(1)));

  const View = Vouchers[capitalizeFirstLetter(voucherType)];

  renderToHTML(ctx, (
    <AppContextProvider styles={styles} config={configService.get()} i18n={i18nHelper} data={data}>
      <View />
    </AppContextProvider>
  ));
};

export default {
  create,
};
