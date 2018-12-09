import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import get from 'lodash/get';
import initi18next from './services/i18n';
import ConfigFactory from './services/config.factory';
import ThemeFactory from './services/theme.factory';
import MailerFactory from './services/mailer.factory';
import { supportLocales } from './services/intl';

const verifySMTPConnection = (mailerService) => {
  mailerService.verifyConnection((error, success) => {
    if (error) {
      console.error('[SMTP CONNECTION]', error);
    } else {
      console.info('[SMTP] Server is ready to take our messages');
    }
  });
};

const createApp = (appConfig, appStyles, appLocales) => {
  const configService = ConfigFactory.create(appConfig);
  const themeService = ThemeFactory.create(appStyles);
  const mailerService = MailerFactory.create(configService.get('smtp'));
  verifySMTPConnection(mailerService);
  initi18next(appLocales, configService.get('i18nNamespaces'), configService.get('defaultLang'));
  supportLocales([configService.get('locale')]);

  const app = new Koa();

  app.use(async (ctx, next) => {
    ctx.state.configService = configService;
    ctx.state.themeService = themeService;
    ctx.state.mailerService = mailerService;

    await next();
  });

  app.use(bodyParser());

  app.use(async (ctx, next) => {
    await next();

    const sendMail = ctx.state.configService.get('sendMail');
    if (!sendMail) return;

    const mailOptions = {
      ...get(ctx, 'request.body.meta.mailOptions'),
      text: ctx.body,
    };

    ctx.state.mailerService.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('[SMTP RESPONSE]', error);
      } else {
        console.info(`[SMTP] Email sent: ${info.response}`);
      }
    });
  });

  return app;
};

export { createApp };
