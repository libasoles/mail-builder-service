import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import initi18next from 'mail-builder-core/services/i18n';
import ConfigFactory from 'mail-builder-core/services/config.factory';
import ThemeFactory from 'mail-builder-core/services/theme.factory';
import appConfig from './config';
import appStyles from './styles';
import appLocales from './locales';

const createApp = () => {
  const configService = ConfigFactory.create(appConfig);
  const themeService = ThemeFactory.create(appStyles);
  initi18next(appLocales, configService.get('i18nNamespaces'), configService.get('defaultLang'));

  const app = new Koa();

  app.use(async (ctx, next) => {
    ctx.state.configService = configService;
    ctx.state.themeService = themeService;

    await next();
  });

  app.use(bodyParser());

  return app;
};

export default createApp;
