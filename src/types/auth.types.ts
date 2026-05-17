import { ApiResponse } from './api.types';

export interface User {
  id: string;
  email: string;
  username: string;
  role: 'admin' | 'user';
  createdAt: string;
}

export interface AuthResponseData {
  user: User;
  token: string;
}

export type LoginResponse = ApiResponse<AuthResponseData>;
