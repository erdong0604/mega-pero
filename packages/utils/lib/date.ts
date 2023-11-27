// date.ts
import moment from 'moment';

const DEFAULT_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatDateTime(date: Date | number | string, format: string = DEFAULT_FORMAT): string {
  return moment(date).format(format);
}

export function getCurrentDateTime(format: string = DEFAULT_FORMAT): string {
  return moment().format(format);
}

export function addDays(date: Date | string, days: number, format: string = DEFAULT_FORMAT): string {
  return moment(date).add(days, 'days').format(format);
}
