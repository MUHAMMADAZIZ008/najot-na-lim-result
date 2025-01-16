import { expect } from 'vitest';
import { test } from 'vitest';
import { pow, sum } from './sum';

test('adds 1 + 2 to equla 3', () => {
  // eslint-disable-next-line prettier/prettier
    expect(sum(1, 2)).toBe(3)
});

test('adds 1, 2 to equla 2', () => {
  // eslint-disable-next-line prettier/prettier
      expect(pow(2, 2)).toBe(4)
});
