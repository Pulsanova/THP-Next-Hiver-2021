import getBuildingStages from './getBuildingStages';

describe('getBuildingStages', () => {
  test('Return the right array of buildings', () => {
    const result = getBuildingStages([3, 8, 2, 5, 3, 1]);
    expect(result).toEqual([8, 5, 3, 1]);
  });
});
