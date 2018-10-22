import React from 'react';
import Vouchers from 'mail-builder-core/views/vouchers';
import capitalizeFirstLetter from 'mail-builder-core/helpers/capitalizeFirstLetter';
import localize from 'mail-builder-core/helpers/localize';
import { renderToHTML } from 'mail-builder-core/services/render';
import VoucherTransformers from '../../transformers/index';
import { AppContextProvider } from '../../core/services/context';

const create = async (ctx) => {
  const namespace = 'vouchers';
  const { type: voucherType } = ctx.params;
  const data = ctx.request.body;

  const { themeService, configService } = ctx.state;
  const styles = themeService.getStyles(namespace);

  const DataTransformer = VoucherTransformers[voucherType];
  const request = new DataTransformer(configService.get());
  const voucherData = request.transform(data);

  const View = Vouchers[capitalizeFirstLetter(voucherType)];

  const lang = ctx.query.lang || configService.get('defaultLang');
  const i18nHelper = localize(lang);

  renderToHTML(ctx, (
    <AppContextProvider
      styles={styles}
      config={configService.get()}
      i18n={i18nHelper}
      data={voucherData}
    >
      <View />
    </AppContextProvider>
  ));
};

export default {
  create,
};
