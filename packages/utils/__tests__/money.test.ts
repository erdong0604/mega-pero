// money.test.ts
import { add, subtract, round, formatThousands } from './../lib/money';

describe('Money Operations', () => {
  it('should add two amounts', () => {
    const result = add(10.5, 20.75);
    expect(result).toBe('31.25');
  });

  it('should subtract two amounts', () => {
    const result = subtract(30.0, 15.25);
    expect(result).toBe('14.75');
  });

  it('should subtract two amounts', () => {
    const result = subtract(0.3, 0.2);
    expect(result).toBe("0.1");
  });

  it('should round amount to specified decimal places', () => {
    const result = round(1234.5678, 2);
    expect(result).toBe('1234.57');
  });

  it('should round amount to specified decimal places', () => {
    const result = round(1234.1, 2);
    expect(result).toBe('1234.10');
  });

  it('should format amount with thousands separator', () => {
    const result = formatThousands(1234567.89);
    expect(result).toBe('1,234,567.89');
  });

  it('should handle formatting negative amounts with thousands separator', () => {
    const result = formatThousands(-9876543.21);
    expect(result).toBe('-9,876,543.21');
  });
});
