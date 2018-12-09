import { roundFloat } from './numbers';

it('should round a number with three decimal to two', () => {
  const result = roundFloat('299.004', 2);
  expect(result).toEqual(299.00);
});

it('should round numbers after multiplication', () => {
  const price = 0.0532;
  // following multiplication would result in 5.319999999999999
  const result = roundFloat(price * 100, 2);
  expect(result).toEqual(5.32);
});


it('should round numbers after division', () => {
  const price = 299;
  // following division would result in 99,66666666666667
  const result = roundFloat(price / 3, 2);
  expect(result).toEqual(99.67);
});
