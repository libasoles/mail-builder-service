import livereload from 'koa-livereload';
import React from 'react';
import Vouchers from 'mail-builder-core/views/vouchers';
import { renderToHTML } from 'mail-builder-core/services/render';
import capitalizeFirstLetter from 'mail-builder-core/helpers/capitalizeFirstLetter';
import StaticGoogleMap from 'mail-builder-core/services/googleMaps';
import { AppContextProvider } from 'mail-builder-core/services/context';
import mockupData from './mockups';
import createApp from './app';
import localize from 'mail-builder-core/helpers/localize';

const app = createApp();

app.use(livereload());

app.use(async (ctx, next) => {
  ctx.state.namespace = 'vouchers';
  ctx.state.type = 'sale'; // sale or refund
  ctx.query.lang = 'es';
  await next();
});

app.use(async (ctx, next) => {
  const { namespace, type: voucherType } = ctx.state;

  const { themeService, configService } = ctx.state;
  const styles = themeService.getStyles(namespace);

  let data = mockupData[voucherType];
  data = { ...data.data, ...data.meta };

  const mapService = new StaticGoogleMap(configService.get('googleMapApiKey'));
  data.location.map = await mapService.getMap(data.location, styles.primaryColor.substring(1));

  const View = Vouchers[capitalizeFirstLetter(voucherType)];

  const lang = ctx.query.lang || configService.get('defaultLang');
  const i18nHelper = localize(lang);

  renderToHTML(ctx, (
    <AppContextProvider styles={styles} config={configService.get()} i18n={i18nHelper} data={data}>
      <View />
    </AppContextProvider>
  ));

  await next();
});

const port = 4321;

try {
  app.listen(port);
  console.log(`Connected on port: ${port}`);
} catch (error) {
  console.log(error);
}
