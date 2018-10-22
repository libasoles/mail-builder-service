const config = {
  timezone: 'America/Argentina/Buenos_Aires',
  dateFormat: 'DD/MM/YYYY',
  timeFormat: 'HH:mm',
  account: {
    website: {
      label: 'www.fancyproject.com',
      link: 'https://www.fancyproject.com',
    },
    phone: '0810 --- ----',
    defaultImage: 'https://s3.amazonaws.com/fancyproject/images/mailings/merchant-default.png',
  },
  i18nNamespaces: ['vouchers'],
  defaultLang: 'es',
  locale: 'es-AR',
  googleMapApiKey: process.env.GOOGLE_STATIC_MAPS_API_KEY,
};

export default config;
