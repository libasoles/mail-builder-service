import localize from 'helpers/localize';

export const withServices = async (controller, ctx) => {
  const { data, meta } = ctx.request.body;
  const { themeService, configService } = ctx.state;
  const lang = ctx.query.lang || configService.get('defaultLang');
  const i18nHelper = localize(lang);

  return controller({
    themeService,
    configService,
    i18nHelper,
    data: {
      ...data,
      meta,
    },
    ctx,
  });
};
