import {getRandomIndex} from './Helpers';

describe('Helpers spec', () => {
  test('if index is genrated between range', () => {
    const min = 0;
    const max = 10;
    const index = getRandomIndex(min, max);
    const isInRange = min <= index && index <= max;
    expect(isInRange).toBeTruthy();
  });
});
