import { Suspense, lazy } from 'react';
import { AuthGuard } from '@/components/auth/auth-guard';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const DashboardShell = lazy(() =>
  import('@/components/dashboard/dashboard-shell').then((module) => ({
    default: module.DashboardShell,
  }))
);

export const metadata = {
  title: 'Dashboard - Your Secure Workspace',
  description:
    'Access your personalized dashboard with account information and secure features',
  robots: 'noindex, nofollow', // Prevent indexing of protected pages
};

export default function DashboardPage() {
  return (
    <AuthGuard fallback={<LoadingSpinner size="lg" />}>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background">
            <LoadingSpinner size="lg" />
          </div>
        }
      >
        <DashboardShell />
      </Suspense>
    </AuthGuard>
  );
}
