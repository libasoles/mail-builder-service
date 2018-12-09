import { createApp } from '@geopagos/mailer-core';
import router from './routing';
import appConfig from './config';
import appStyles from './styles';
import appLocales from './locales';

const PORT = process.env.PORT || 4321;

const app = createApp(appConfig, appStyles, appLocales);

app.use(router.routes());

try {
  app.listen(PORT);
  console.info(`Connected on port: ${PORT}`);
} catch (error) {
  console.error(error);
}
