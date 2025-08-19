'use client';

import type React from 'react';
import { useAuthRedirect } from '@/hooks/use-auth-redirect';

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

// Component to protect routes that require authentication
export function AuthGuard({ children, fallback }: AuthGuardProps) {
  const { isAuthenticated, isLoading } = useAuthRedirect();

  if (isLoading) {
    return (
      fallback || (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
        </div>
      )
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
