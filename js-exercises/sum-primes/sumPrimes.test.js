import { sumPrimes } from './sumPrimes';

describe('sumPrimes', () => {
  test('should return a number', () => {
    expect(typeof sumPrimes(10)).toEqual('number');
  });
  test('should return the correct output', () => {
    expect(sumPrimes(10)).toBe(17);
    expect(sumPrimes(977)).toBe(73156);
  });
  test('should throw error on wrong input', () => {
    expect(sumPrimes(0)).toBe('Invalid Arguments');
    expect(sumPrimes({})).toBe('Invalid arguments');
  });
});
