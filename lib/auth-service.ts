import type { User, RandomUserApiResponse } from '@/types/auth';

// Clean service layer for authentication operations
export class AuthService {
  private static readonly API_URL =
    'https://randomuser.me/api/?results=1&nat=us';
  private static readonly STORAGE_KEY = 'auth_user';

  static async fetchUser(): Promise<User> {
    try {
      const response = await fetch(this.API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: RandomUserApiResponse = await response.json();
      const userData = data.results[0];

      return {
        id: userData.login.uuid,
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        picture: userData.picture,
        location: userData.location,
      };
    } catch (error) {
      throw new Error('Failed to fetch user data');
    }
  }

  static saveUser(user: User): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    }
  }

  static getUser(): User | null {
    if (typeof window === 'undefined') return null;

    try {
      const userData = localStorage.getItem(this.STORAGE_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch {
      return null;
    }
  }

  static clearUser(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }
}
