// bigMath.ts
import Big from 'big.js';
// 加法
export function add(num1, num2) {
    const bigNum1 = new Big(num1);
    const bigNum2 = new Big(num2);
    return bigNum1.plus(bigNum2).toString();
}
// 减法
export function subtract(num1, num2) {
    const bigNum1 = new Big(num1);
    const bigNum2 = new Big(num2);
    return bigNum1.minus(bigNum2).toString();
}
// 乘法
export function multiply(num1, num2) {
    const bigNum1 = new Big(num1);
    const bigNum2 = new Big(num2);
    return bigNum1.times(bigNum2).toString();
}
// 除法
export function divide(num1, num2) {
    const bigNum1 = new Big(num1);
    const bigNum2 = new Big(num2);
    return bigNum1.div(bigNum2).toString();
}
