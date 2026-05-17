interface StorageItem<T> {
  value: T;
  expiry?: number; // timestamp in milliseconds
}

/**
 * Type-safe Storage Service wrapping localStorage.
 * Features namespace prefixes, exception tolerance, and item expiration.
 */
export class StorageService {
  private static prefix = 'aura_';

  /**
   * Saves data under a specified key.
   * @param key Key name
   * @param value Serializable data object
   * @param ttlSeconds Optional lifetime in seconds
   */
  public static set<T>(key: string, value: T, ttlSeconds?: number): void {
    try {
      const fullKey = `${this.prefix}${key}`;
      const item: StorageItem<T> = { value };

      if (ttlSeconds) {
        item.expiry = Date.now() + ttlSeconds * 1000;
      }

      localStorage.setItem(fullKey, JSON.stringify(item));
    } catch (error) {
      console.error(`[StorageService] Error writing key "${key}":`, error);
    }
  }

  /**
   * Retrieves data by key, returning a default fallback value if not found or expired.
   */
  public static get<T>(key: string, fallback: T): T {
    try {
      const fullKey = `${this.prefix}${key}`;
      const dataStr = localStorage.getItem(fullKey);

      if (!dataStr) return fallback;

      const item: StorageItem<T> = JSON.parse(dataStr);

      if (item.expiry && Date.now() > item.expiry) {
        this.remove(key); // clear expired item
        return fallback;
      }

      return item.value;
    } catch (error) {
      console.error(`[StorageService] Error reading key "${key}":`, error);
      return fallback;
    }
  }

  /**
   * Removes item from storage.
   */
  public static remove(key: string): void {
    try {
      const fullKey = `${this.prefix}${key}`;
      localStorage.removeItem(fullKey);
    } catch (error) {
      console.error(`[StorageService] Error removing key "${key}":`, error);
    }
  }

  /**
   * Clears all items sharing the active namespace prefix.
   */
  public static clearNamespace(): void {
    try {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(this.prefix)) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((k) => localStorage.removeItem(k));
    } catch (error) {
      console.error('[StorageService] Error clearing namespace:', error);
    }
  }
}
