import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiError } from './errors/api-error';

// Read values from Vite environment variables (with robust fallback defaults)
const baseURL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com/v1';
const timeout = Number(import.meta.env.VITE_API_TIMEOUT) || 10000;

export const apiClient: AxiosInstance = axios.create({
  baseURL,
  timeout,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request Interceptor: Attach JWT Token if available in localStorage
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem('aura_auth_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    return config;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (error: any) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Parse ApiError or trigger session behaviors (auto-logout on 401)
apiClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (error: any) => {
    if (error.response?.status === 401) {
      // Trigger session logout event or clear credentials immediately
      localStorage.removeItem('aura_auth_token');
      localStorage.removeItem('aura_user');
      window.dispatchEvent(new Event('auth:logout'));
    }

    // Wrap the error inside a custom type-safe ApiError instance
    return Promise.reject(ApiError.fromAxiosError(error));
  }
);
