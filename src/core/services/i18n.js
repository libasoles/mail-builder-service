import i18n from 'i18next';
import defaultLocales from 'locales';
import deepMerge from 'helpers/deepMerge';

const i18NextInitializer = (appLocales, namespaces, fallbackLng = 'es') => {
  i18n
    .init({
      resources: deepMerge(defaultLocales, appLocales),
      fallbackLng,
      ns: namespaces,
    }, (err, t) => {
      if (err) console.error('something went wrong loading', err);
      t('key');
    });
};
export default i18NextInitializer;
