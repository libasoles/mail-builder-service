import deepMerge from './deepMerge';

it('should merge two plain objects', () => {
  const result = deepMerge({ foo: 'bar' }, { test: 'ok' });
  expect(result).toEqual({ foo: 'bar', test: 'ok' });
});

it('supports empty object as fisrt param', () => {
  const result = deepMerge({}, { foo: 'bar' });
  expect(result).toEqual({ foo: 'bar' });
});

it('supports empty object as second param', () => {
  const result = deepMerge({ foo: 'bar' }, {});
  expect(result).toEqual({ foo: 'bar' });
});

it('should merge two objects with nested values', () => {
  const obj1 = {
    nested: {
      foo: 'bar',
    },
  };
  const obj2 = {
    test: {
      result: 'ok',
    },
    nested: {
      result: 'ok',
    },
  };
  const result = deepMerge(obj1, obj2);
  expect(result).toEqual({
    nested: {
      foo: 'bar',
      result: 'ok',
    },
    test: {
      result: 'ok',
    },
  });
});

it('should take second value as definitive one', () => {
  const result = deepMerge({ foo: 'bar' }, { foo: 'wei' });
  expect(result).toEqual({ foo: 'wei' });
});
