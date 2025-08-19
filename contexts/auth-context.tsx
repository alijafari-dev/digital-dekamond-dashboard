'use client';

import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import type { AuthState } from '@/types/auth';
import { AuthService } from '@/lib/auth-service';

interface AuthContextType extends AuthState {
  login: (phoneNumber: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const initializeAuth = () => {
      const user = AuthService.getUser();
      setState({
        user,
        isAuthenticated: !!user,
        isLoading: false,
      });
    };

    initializeAuth();
  }, []);

  const login = async (phoneNumber: string): Promise<void> => {
    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      const user = await AuthService.fetchUser();
      AuthService.saveUser(user);

      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      setState((prev) => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const logout = (): void => {
    AuthService.clearUser();
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const value: AuthContextType = {
    ...state,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
