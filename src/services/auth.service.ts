import { loginApi } from '../api/endpoints/auth.api';
import { StorageService } from './storage.service';
import { User } from '../types/auth.types';

/**
 * Service orchestrating authentication session states.
 * Communicates between login endpoints, storage, and UI router states.
 */
export class AuthService {
  private static userKey = 'auth_user';
  private static tokenKey = 'auth_token';

  /**
   * Performs credentials verification and establishes user sessions on success.
   */
  public static async login(email: string, password: string): Promise<User> {
    try {
      const response = await loginApi(email, password);

      const { user, token } = response.data;

      // Persist session tokens using storage service
      StorageService.set(this.userKey, user);
      StorageService.set(this.tokenKey, token);

      // Fire global auth transition notification
      window.dispatchEvent(
        new CustomEvent('auth:state-change', { detail: { isAuthenticated: true } })
      );

      return user;
    } catch (error) {
      console.error('[AuthService] Login failed:', error);
      throw error;
    }
  }

  /**
   * Terminate user session and purge locally cached session identifiers.
   */
  public static logout(): void {
    StorageService.remove(this.userKey);
    StorageService.remove(this.tokenKey);

    // Dispatch auth state change notification
    window.dispatchEvent(
      new CustomEvent('auth:state-change', { detail: { isAuthenticated: false } })
    );
  }

  /**
   * Inspects local states to verify if user has active session.
   */
  public static isAuthenticated(): boolean {
    const token = StorageService.get<string | null>(this.tokenKey, null);
    const user = StorageService.get<User | null>(this.userKey, null);
    return token !== null && user !== null;
  }

  /**
   * Gets the active user record.
   */
  public static getCurrentUser(): User | null {
    return StorageService.get<User | null>(this.userKey, null);
  }

  /**
   * Gets the active session token.
   */
  public static getToken(): string | null {
    return StorageService.get<string | null>(this.tokenKey, null);
  }
}
