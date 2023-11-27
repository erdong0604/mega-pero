// date.test.ts
import { formatDateTime, getCurrentDateTime, addDays } from './../lib/date';
import moment from 'moment'

describe('Date Utils', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should format date and time from Date object', () => {
    const date = new Date('2023-11-24T12:34:56');
    const result = formatDateTime(date, 'YYYY-MM-DD HH:mm:ss');
    expect(result).toBe('2023-11-24 12:34:56');
  });

  it('should format date and time from timestamp', () => {
    const timestamp = 1700814988682; // A timestamp representing a date and time
    const result = formatDateTime(timestamp, 'YYYY-MM-DD HH:mm:ss');
    expect(result).toBe('2023-11-24 16:36:28'); // Update this with the expected result
  });

  it('should get current date and time', () => {
    const result = getCurrentDateTime('YYYY-MM-DD HH:mm:ss');
    const now = moment().format('YYYY-MM-DD HH:mm:ss');
    expect(result).toBe(now);
  });

  it('should add days to a date', () => {
    const date = '2023-11-24 10:10:10';
    const result = addDays(date, 3);
    expect(result).toBe('2023-11-27 10:10:10');
  });
});
