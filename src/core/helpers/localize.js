import i18n from 'i18next';

const t = lng => key => i18n.t(key, { lng });
export default t;
