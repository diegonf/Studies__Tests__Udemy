import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io';

vi.mock('fs');
// vi.mock('fs', () => {
//   return {
//     fs: {
//       writeFile: (storageData, data) => {
//         //
//       }
//     }
//   }
// });
vi.mock('path',() => {
  return {
    default: { //default because path is the default export
      join: (...args) => {
        return args[args.length - 1]; // returns the last argument === filename in the function
      }
    }
  }
});

it('should execute the writeFile method', () => {
  const testData = 'Teste';
  const testFilename = 'test.txt';

  // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  writeData(testData, testFilename);
  expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});