// money.ts
import Big from 'big.js'

// 两个金额相加
export const add = (
  amount1: number,
  amount2: number
): string => {
  const bigAmount1 = new Big(amount1)
  const bigAmount2 = new Big(amount2)
  return bigAmount1.plus(bigAmount2).toString()
}

// 两个金额相减
export const subtract = (
  amount1: number,
  amount2: number
): string => {
  const bigAmount1 = new Big(amount1)
  const bigAmount2 = new Big(amount2)
  return bigAmount1.minus(bigAmount2).toString()
}

// 保留n位小数
export const round = (
  amount: number,
  decimalPlaces: number
): string => {
  const bigAmount = new Big(amount)
  return bigAmount.toFixed(decimalPlaces)
}

// 金额千分位
export const formatThousands = (
  amount: number
): string => {
  const bigAmount = new Big(amount)
  return bigAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
