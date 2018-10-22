import React from 'react';
import Vouchers from '../../views/vouchers';
import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter';
import localize from '../../helpers/localize';
import { renderToHTML } from '../../services/render';
import StaticGoogleMap from '../../services/googleMaps';
import { AppContextProvider } from '../../services/context';

const create = async (ctx) => {
  const namespace = 'vouchers';
  const { type: voucherType } = ctx.params;
  const data = ctx.request.body;

  const { themeService, configService } = ctx.state;
  const styles = themeService.getStyles(namespace);

  const lang = ctx.query.lang || configService.get('defaultLang');
  const i18nHelper = localize(lang);

  const mapService = new StaticGoogleMap(configService.get('googleMapApiKey'));
  data.location.map = await mapService.getMap(data.location, styles.primaryColor.substring(1));

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
