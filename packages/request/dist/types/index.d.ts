import { InternalAxiosRequestConfig } from 'axios';
export declare class HttpClient {
    private instance;
    constructor(baseURL: string);
    private handleRequest;
    private handleResponse;
    private handleError;
    get<T>(url: string, config?: InternalAxiosRequestConfig): Promise<T>;
    post<T>(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<T>;
    put<T>(url: string, config?: InternalAxiosRequestConfig): Promise<T>;
    delete<T>(url: string, config?: InternalAxiosRequestConfig): Promise<T>;
}
