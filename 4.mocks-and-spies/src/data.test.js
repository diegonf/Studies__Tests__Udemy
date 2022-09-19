import { describe, it, expect, vi} from 'vitest';
// import { describe, it, expect, jest} from 'jest'; in jest, vi = jest
import { generateReportData } from './data';

describe('generateReport()', () => {
  it('should execute logFn if provided', () => {
    const logger = vi.fn();

    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});