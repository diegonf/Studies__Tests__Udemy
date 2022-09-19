import { describe, it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

describe('validateNotEmpty()', () => {
  it('should thorw an error if empty string is provided', () => {
    const testInput = '';

    const validationFn = () => validateNotEmpty(testInput);

    expect(validationFn).toThrow();
  });

  it('should thorw an error if sting with only spaces is provided as a value', () => {
    const testInput = '   ';

    const validationFn = () => validateNotEmpty(testInput);

    expect(validationFn).toThrow();
  });

  it('should throw an error with the provided error message', () => {
    const testInput = '   ';
    const errorMsg = 'error message';

    const validationFn = () => validateNotEmpty(testInput, errorMsg);

    expect(validationFn).toThrow(errorMsg);
  });
});