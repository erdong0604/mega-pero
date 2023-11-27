// countdownService.test.ts
import { CountdownService } from './../lib/countDown';

jest.useFakeTimers();

describe('CountdownService', () => {
  let countdownService: CountdownService;

  beforeEach(() => {
    countdownService = new CountdownService({ countDown: 60 });
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should create a countdown', () => {
    const callbackMock = jest.fn();
    countdownService.createCountDown(callbackMock);

    jest.advanceTimersByTime(1000); // Advance time by 1 second

    expect(callbackMock).toHaveBeenCalledWith({
      countDown: 59,
      day: '00',
      hour: '00',
      minute: '00',
      second: '59',
    });
    // Advance time by 59 seconds
    jest.advanceTimersByTime(60000);

    expect(callbackMock).toHaveBeenCalledWith({
      countDown: 0,
      day: '00',
      hour: '00',
      minute: '00',
      second: '00',
    });

    expect(callbackMock).toHaveBeenCalledTimes(60);
  });

  it('should clear the timeout', () => {
    const callbackMock = jest.fn();
    countdownService.createCountDown(callbackMock);

    countdownService.clearTimeOut();

    jest.advanceTimersByTime(60000); // Advance time by 60 seconds

    expect(callbackMock).not.toHaveBeenCalled();
  });

});
