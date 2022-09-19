import { expect, it, describe } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe('transformToNumber()', () => {
  it('should transform a string number to a number of type number', () => {
    const number = '1';

    const result = transformToNumber(number);

    expect(result).toBe(+number);
    expect(result).toBeTypeOf('number');
  });

  it('should yield NaN for non-transformable values', () => {
    const input1 = 'invalid';
    const input2 = {};
    const input3 = [1, 2];

    const result = transformToNumber();
    const result1 = transformToNumber(input1);
    const result2 = transformToNumber(input2);
    const result3 = transformToNumber(input3);

    expect(result).toBeNaN();
    expect(result1).toBeNaN();
    expect(result2).toBeNaN();
    expect(result3).toBeNaN();
  });
});

describe('cleanNumbers()', () => {
  it('should return an arrayof number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2'];

    const cleanedNumbers = cleanNumbers(numberValues);

    // expect(cleanedNumbers[0]).toBeTypeOf('number');
    expect(cleanedNumbers).toEqual([1, 2]);
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
