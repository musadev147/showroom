import { apiClient } from '../client';
import { LoginResponse, User } from '../../types/auth.types';

// Mock User Data for standalone demonstration
const MOCK_USER: User = {
  id: 'usr_1',
  email: 'admin@marufa.io',
  username: 'admin_aura',
  role: 'admin',
  createdAt: new Date().toISOString(),
};

/**
 * Performs a login request.
 * Integrates real HTTP endpoint, falling back to rich mock data if baseUrl is in mock/example state.
 */
export async function loginApi(email: string, password: string): Promise<LoginResponse> {
  const isMock = import.meta.env.VITE_API_BASE_URL.includes('example.com');

  if (isMock) {
    // High-fidelity local simulation with 600ms latency
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (email === 'admin@marufa.io' && password === 'password123') {
      return {
        success: true,
        data: {
          user: MOCK_USER,
          token: 'mock_jwt_token_abcdef123456',
        },
        message: 'Login successful!',
      };
    } else {
      throw new Error('Invalid email or password. Use: admin@marufa.io / password123');
    }
  }

  // Real API Call
  const response = await apiClient.post<LoginResponse>('/auth/login', { email, password });
  return response.data;
}

/**
 * Validates the current auth token with the server.
 */
export async function checkSessionApi(): Promise<{ success: boolean; data: { user: User } }> {
  const isMock = import.meta.env.VITE_API_BASE_URL.includes('example.com');

  if (isMock) {
    await new Promise((resolve) => setTimeout(resolve, 150));
    return {
      success: true,
      data: { user: MOCK_USER },
    };
  }

  const response = await apiClient.get<{ success: boolean; data: { user: User } }>('/auth/me');
  return response.data;
}
