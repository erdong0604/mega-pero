type TOptions = {
    countDown: number;
};
type TResult = {
    countDown: number;
    day: string;
    hour: string;
    minute: string;
    second: string;
};
type TCallBack = (result: TResult) => void;
export declare class CountdownService {
    constructor(options: TOptions);
    static serverTime: number;
    private timer;
    private start;
    private count;
    private countDown;
    private getDate;
    private createTimer;
    private composeResult;
    createCountDown(cb: TCallBack): void;
    clearTimeOut(): void;
}
export {};
