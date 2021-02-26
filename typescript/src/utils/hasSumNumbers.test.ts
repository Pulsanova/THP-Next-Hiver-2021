import hasSumNumbers from './hasSumNumbers';

describe('hasSumNumbers', () => {
  test('Return true when 2 numbers can sum up to target', () => {
    const result = hasSumNumbers([3, 8, 2, 5, 3, 1], 10);
    expect(result).toBe(true);
  });

  test('Return false when no number in array', () => {
    const result = hasSumNumbers([], 10);
    expect(result).toBe(false);
  });

  test('Return false when only one number in array', () => {
    const result = hasSumNumbers([3], 10);
    expect(result).toBe(false);
  });

  test('Return false when only two numbers in array', () => {
    const result = hasSumNumbers([7, 3], 10);
    expect(result).toBe(true);
  });

  test('Return false when no numbers can sum up to target', () => {
    const result = hasSumNumbers([3, 8, 2, 5, 3, 1], 22);
    expect(result).toBe(false);
  });
});
