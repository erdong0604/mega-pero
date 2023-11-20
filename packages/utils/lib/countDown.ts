
type TOptions = {
  countDown:number,
}

type TResult = {
  countDown:number,
  day:string,
  hour:string,
  minute:string,
  second:string
}

type TCallBack = (result:TResult) => void

export class CountdownService {
  constructor (options:TOptions) {
    this.countDown = options.countDown
    this.timer = null
    this.start = 0
    this.count = 1
  }

  static serverTime:number
  private timer:ReturnType<typeof setTimeout> | null
  private start:number
  private count:number
  private countDown:number
  private getDate () {
    return new Date().getTime()
  }

  private createTimer (cb:TCallBack) {
    const date = this.getDate() 
    const offset = date - (this.start + this.count * 1000)
    const nextDelay = Math.max(1000 - offset, 0)
    const diff = Math.floor(offset / 1000)
    const step = Math.max(diff, 1)
    this.countDown -= step
    this.count += step
    const result = this.composeResult()
    cb(result)
    if (result.countDown <= 0) {
      return this.clearTimeOut()
    }
    this.timer = setTimeout(() => {
      this.createTimer(cb)
    }, nextDelay)
  }

  private composeResult ():TResult {
    const timeStamp = Math.max(this.countDown, 0)
    const day = String(Math.floor(timeStamp / (3600 * 24)))
    const hour = String(Math.floor(timeStamp / 3600 % 24))
    const minute = String(Math.floor((timeStamp % 3600) / 60))
    const second = String(Math.floor((timeStamp % 3600) % 60))
    return {
      countDown: Math.max(timeStamp, 0),
      day: day.padStart(2, '0'),
      hour: hour.padStart(2, '0'),
      minute: minute.padStart(2, '0'),
      second: second.padStart(2, '0')
    }
  }

  createCountDown (cb:TCallBack) {
    this.start = this.getDate()
    this.clearTimeOut()
    this.timer = setTimeout(() => {
      this.createTimer(cb)
    }, 1000)
  }

  clearTimeOut () {
    this.timer && clearTimeout(this.timer)
    this.timer = null
  }
}
