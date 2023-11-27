// date.ts
import moment from 'moment'

const DEFAULT_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export const formatDateTime = (
  date: Date | number | string,
  format: string = DEFAULT_FORMAT
): string => {
  return moment(date).format(format)
}

export const getCurrentDateTime = (
  format: string = DEFAULT_FORMAT
): string => {
  return moment().format(format)
}

export const addDays = (
  date: Date | string,
  days: number,
  format: string = DEFAULT_FORMAT
): string => {
  return moment(date).add(days, 'days').format(format)
}
