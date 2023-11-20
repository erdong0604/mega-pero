import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export class HttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      // 这里可以添加更多默认配置
    });

    // 请求拦截器
    this.instance.interceptors.request.use(this.handleRequest, this.handleError);

    // 响应拦截器
    this.instance.interceptors.response.use(this.handleResponse, this.handleError);
  }

  private handleRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    // 在这里添加请求处理逻辑
    return config;
  }

  private handleResponse(response: AxiosResponse): AxiosResponse {
    // 在这里添加响应处理逻辑
    return response;
  }

  private handleError(error: AxiosError): Promise<AxiosError> {
    // 在这里添加错误处理逻辑
    return Promise.reject(error);
  }

  public get<T>(url: string, config?: InternalAxiosRequestConfig): Promise<T> {
    return this.instance.get<T>(url, config).then(response => response.data);
  }

  public post<T>(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<T> {
    return this.instance.post<T>(url, data, config).then(response => response.data);
  }

  public put<T>(url: string, config?: InternalAxiosRequestConfig): Promise<T> {
    return this.instance.put<T>(url, config).then(response => response.data);
  }
  public delete<T>(url: string, config?: InternalAxiosRequestConfig): Promise<T> {
    return this.instance.delete<T>(url, config).then(response => response.data);
  }

}