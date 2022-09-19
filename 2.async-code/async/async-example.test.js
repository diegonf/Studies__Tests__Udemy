import { it, describe, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example.js';

describe('generateToken()', () => {
  it('should generate a token value', (done) => {
    const testUserEmail = 'test@test.com';

    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        // expect(token).toBe(2); // to see the test error
        done(); // it is a tool that makes the test waits for the token to be generated
      }
      catch (err) {
        done(err);  // try/catch to show the exact error in case token is not generated
      }
    });
  });
});

describe('generateTokenPromise()', () => {
  
  // testing with expect().resolves
  it('should generate a token value', () => {
    const testUserEmail = 'test@test.com';

    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined(2);
  });

  // testing with async await
  it('should generate a token value', async () => {
    const testUserEmail = 'test@test.com';

    const token = await generateTokenPromise(testUserEmail);
    expect(token).toBeDefined();
  });
});