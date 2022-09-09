import { it, expect, describe } from 'vitest';
import { generateResultText } from './output';

describe('generateResultText()', () => {
  it('should return a string, no matter which value is passed in', () => {
    const value1 = 1;
    const value2 = 'invalid';
    const value3 = false;

    const result1 = generateResultText(value1);
    const result2 = generateResultText(value2);
    const result3 = generateResultText(value3);

    expect(result1).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
  });

  it('should return a string with result when a number is passed in', () => {
    const value = 5;

    const result = generateResultText(value);

    expect(result).toContain(value.toString());
  });

  it('should return an empty string when "no-calc" is provided as the result', () => {
    const value = 'no-calc';

    const result = generateResultText(value);

    expect(result).toBe('');
  });

  it('should return invalid message when invalid is provided as a result', () => {
    const value = 'invalid';

    const result = generateResultText(value);

    expect(result).toContain('Invalid input');
  });
});