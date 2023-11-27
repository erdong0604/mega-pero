// verify.test.ts
import {
  isPhone,
  isAmount,
  isPureNumber,
  isPureChineseCharacters,
  isContain,
} from "./../lib/verify";
describe("isPhone", () => {
  test("valid phone number", () => {
    expect(isPhone("13812345678")).toBeTruthy();
  });

  test("invalid phone number", () => {
    expect(isPhone("1234567890")).toBeFalsy();
  });
});

describe("isAmount", () => {
  test("valid amount1", () => {
    expect(isAmount("123.45")).toBeTruthy();
  });
  test("valid amount2", () => {
    expect(isAmount("123.00")).toBeTruthy();
  });
  test("valid amount3", () => {
    expect(isAmount("0.1")).toBeTruthy();
  });

  test("invalid amount", () => {
    expect(isAmount("123.456")).toBeFalsy();
  });
});

describe('isPureNumber', () => {
  test('valid pure number', () => {
      expect(isPureNumber('123456')).toBeTruthy();
  });

  test('invalid pure number', () => {
      expect(isPureNumber('123abc')).toBeFalsy();
  });
});

describe('isPureChineseCharacters', () => {
  test('valid pure Chinese characters', () => {
      expect(isPureChineseCharacters('测试')).toBeTruthy();
  });

  test('invalid pure Chinese characters', () => {
      expect(isPureChineseCharacters('test123')).toBeFalsy();
  });
});

describe('containsCharacter', () => {
  test('contains specific character', () => {
      expect(isContain('hello world', 'world')).toBeTruthy();
  });

  test('does not contain specific character', () => {
      expect(isContain('hello world', 'xyz')).toBeFalsy();
  });
});