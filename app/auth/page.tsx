import { Suspense } from 'react';
import { AuthShell } from '@/components/auth/auth-shell';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export const metadata = {
  title: 'Authentication - Secure Login',
  description: 'Enter your mobile number to access your secure dashboard',
  robots: 'noindex, nofollow', // Prevent indexing of auth pages
};

export const dynamic = 'force-static';

export default function AuthPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background">
          <LoadingSpinner size="lg" />
        </div>
      }
    >
      <AuthShell />
    </Suspense>
  );
}
