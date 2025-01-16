import { test, expect } from 'vitest';
import { returnAge } from './age';

test('input year 2008 output age 16', () => {
  const year = 2008;
  const expectAge = 16;
  const result = returnAge(year);
  expect(result).toBe(expectAge);
});

test('input year 2000 output age 24', () => {
  const year = 2000;
  const expectAge = 24;
  const result = returnAge(year);
  expect(result).toBe(expectAge);
});

test('input year 2010 output age 14', () => {
  const year = 2010;
  const expectAge = 14;
  const result = returnAge(year);
  expect(result).toBe(expectAge);
});
