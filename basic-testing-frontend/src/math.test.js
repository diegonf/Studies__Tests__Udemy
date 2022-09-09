import { it, expect } from 'vitest';
import { add } from './math';

it('should somarize all number values in an array', () => {
  // Arange 
  const numbers = [1, 2];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue, 0
  );
  expect(result).toBe(expectedResult);
});

it('show yield NaN if at least one invalid number is provided', () => {
  // Arrange
  const inputs = ['invalid', 1];
  
  // Act
  const result = add(inputs);

  // Assert
  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string is provided', () => {
  const numbers =['1', '2'];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue, 0
  );
  expect(result).toBe(expectedResult)
});

it('should yield 0 if an empty array is provided', () => {
  const numbers =[];

  const result = add(numbers);

  expect(result).toBe(0)
});

it('should throw an error if no value is passed into the function', () => {

  const result = () => {
    add();
  }

  expect(result).toThrow(/is not iterable/);
});

it('should throw an error if provided with mutiple arguments instead of an array', () => {
  const num1 = 1;
  const num2 = 2;

  const result = () => {
    add(num1, num2)
  };

  expect(result).toThrow(/is not iterable/);
});
