const config = {
  timezone: 'America/Argentina/Buenos_Aires',
  dateFormat: 'DD/MM/YYYY',
  timeFormat: 'HH:mm',
  afterTimeFormat: 'hs',
  account: {
    website: {
      label: 'www.fancyproject.com',
      link: 'https://www.fancyproject.com',
    },
    phone: '0810 --- ----',
    defaultImage: 'https://s3.amazonaws.com/fancyproject/images/naranja/mailings/merchant-default.png',
  },
  i18nNamespaces: ['vouchers'],
  defaultLang: 'es',

  /**
  * This will be used to get to correct currency symbol
  */
  locale: 'es-AR',
  googleMapApiKey: process.env.GOOGLE_STATIC_MAPS_API_KEY,

  /**
  * user and pass will be provided by secrets
  */
  smtp: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
  },

  /**
  * Don't send emails by default
  */
  sendMail: false,

  /**
   * If the label depends on locales, use 'label'
   * If the label is another data field, use 'key' instead
   */
  accountDetailsRows: [
    {
      label: 'vouchers:account.legalName',
      value: 'legalName',
    },
    {
      label: 'vouchers:account.address',
      value: 'address',
    },
    {
      label: 'vouchers:account.phone',
      value: 'phone',
    },
    {
      key: 'identification.type',
      value: 'identification.number',
    },
    {
      label: 'vouchers:account.merchantId',
      value: 'merchantId',
    },
  ],

  /**
   * If the label depends on locales, use 'label'
   * If the label is another data field, use 'key' instead
   */
  paymentDetailsRows: [
    {
      key: 'card.brand',
      value: 'card.number',
    },
    {
      label: 'vouchers:payment.card.cardholder',
      value: 'card.cardholder',
    },
    {
      label: 'vouchers:payment.installments',
      value: 'installments',
    },
    {
      label: 'vouchers:payment.authorization',
      value: 'authorizationCode',
    },
    {
      label: 'vouchers:payment.reference',
      value: 'extraInfo.retrieveReferenceNumber',
    },
    {
      label: 'vouchers:payment.ticket',
      value: 'extraInfo.ticketNumber',
    },
    {
      label: 'vouchers:payment.terminalID',
      value: 'terminalId',
    },
    {
      label: 'vouchers:payment.arqc',
      value: 'extraInfo.arqc',
    },
    {
      label: 'vouchers:payment.aid',
      value: 'extraInfo.aid',
    },
    {
      label: 'vouchers:payment.arpc',
      value: 'extraInfo.arpc',
    },
    {
      label: 'vouchers:payment.tc',
      value: 'extraInfo.tc',
    },
    {
      label: 'vouchers:payment.tsi',
      value: 'extraInfo.tsi',
    },
    {
      label: 'vouchers:payment.tvr',
      value: 'extraInfo.tvr',
    },
  ],
};

export default config;
