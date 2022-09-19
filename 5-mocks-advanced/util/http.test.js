import { it, describe, expect, vi } from 'vitest';
import { HttpError } from './errors';
import { sendDataRequest } from './http';

// used in the previus lectures: vi.mock('fs');
// this would replace the module 'fs'

// But the problem now is that fetch is a globally available functions. It is not imported from any module.

// vi.stubGlobal() - to replace global functions

const testResponseData = { testKey: 'testData' };
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      return reject('Not a string.');
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
        // return testResponseData; // in this case this would also work
      }
    };
    resolve(testResponse)
  });
});
vi.stubGlobal('fetch', testFetch);

describe('sendDataRequest()', () => {
  it('should return any available response data', () => {
    const testData = { key: 'test' };

    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
  });

  it('should convert the provided data to JSON before sending the request', async () => {
    const testData = { key: 'test' };

    // return expect(sendDataRequest(testData)).not.rejects.toBe('Not a string');
    // the above line can be misunderstood. It expects the function to reject, but to reject not with 'Not a string'.

    let errorMessage;

    try {
      await sendDataRequest(testData);
    }
    catch (error) {
      errorMessage = error;
    }

    expect(errorMessage).not.toBe('Not a string.')
  });

  it('should throw an HttpError in case of non-ok responses', () => {
    testFetch.mockImplementationOnce((url, options) => {
      return new Promise((resolve, reject) => {
        const testResponse = {
          ok: false,
          json() {
            return new Promise((resolve, reject) => {
              resolve(testResponseData);
            });
            // return testResponseData; // in this case this would also work
          }
        };
        resolve(testResponse)
      });
    });

    const testData = { key: 'test' };

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});