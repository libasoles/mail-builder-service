import Config from './config';

const configMockup = {
  timezone: 'America/Argentina/Buenos_Aires',
  dateFormat: 'DD/MM/YYYY',
  timeFormat: 'HH:mm',
  account: {
    identification: {
      type: 'CUIT',
    },
  },
  currency: '$',
  locale: 'es',
  numbers: [1, 2, 3],
  objects: [
    { index: 1 },
    { index: 2 },
    { index: 3 },
  ],
};

const customConfigMockup = {
  locale: 'ru',
  numbers: [4],
  objects: [
    { index: 4 },
  ],
};

it('returns entire configuration object', () => {
  const config = new Config(configMockup);
  expect(config.get()).toEqual(configMockup);
});

it('gets value from object', () => {
  const config = new Config(configMockup);
  expect(config.get('timeFormat')).toEqual('HH:mm');
});

it('gets nested value from object', () => {
  const config = new Config(configMockup);
  expect(config.get('account.identification.type')).toEqual('CUIT');
});

it('merges two object values correctly', () => {
  const config = new Config(configMockup);
  config.set(customConfigMockup);
  expect(config.get('locale')).toEqual('ru');
});

it('keeps default values after merging', () => {
  const config = new Config(configMockup);
  config.set(customConfigMockup);
  expect(config.get('currency')).toEqual('$');
});

it('merges arrays of objects', () => {
  const config = new Config(configMockup);
  config.set(customConfigMockup);
  expect(config.get('objects')).toEqual([
    { index: 1 },
    { index: 2 },
    { index: 3 },
    { index: 4 },
  ]);
});

it('merges numeric arrays', () => {
  const config = new Config(configMockup);
  config.set(customConfigMockup);
  expect(config.get('numbers')).toEqual([1, 2, 3, 4]);
});
