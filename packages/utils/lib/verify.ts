// 校验是否是手机号
export const isPhone = (phone: string): boolean => {
  const regex = /^1[3456789]\d{9}$/
  return regex.test(phone)
}

// 校验输入的是否是金额
export const isAmount = (amount: string): boolean => {
  const regex = /^(\d+(\.\d{1,2})?)$/
  return regex.test(amount)
}
// 校验是否是纯数字
export const isPureNumber = (number: string): boolean => {
  const regex = /^\d+$/
  return regex.test(number)
}
// 校验是否是纯汉字
export const isPureChineseCharacters = (text: string): boolean => {
  const regex = /^[\u4e00-\u9fa5]+$/
  return regex.test(text)
}
// 校验字符串是否存在某个字符
export const isContain = (text: string, char: string): boolean => {
  const regex = new RegExp(char)
  return regex.test(text)
}
