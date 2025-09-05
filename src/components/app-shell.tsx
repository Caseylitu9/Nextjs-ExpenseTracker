
'use client';
import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { MainNav } from '@/components/main-nav';
import { SiteHeader } from '@/components/site-header';
import { useIsMobile } from '@/hooks/use-mobile';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const pageTitles: { [key: string]: string } = {
  '/dashboard': 'Dashboard',
  '/income': 'Income',
  '/expenses': 'Expenses',
  '/savings': 'Savings Goals',
  '/taxes': 'Tax Estimator',
};

const unprotectedRoutes = ['/login', '/signup'];

export function AppShell({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const router = useRouter();
  const [title, setTitle] = useState('Dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // This check runs only on the client-side
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);

    if (!authStatus && !unprotectedRoutes.includes(pathname)) {
      router.push('/login');
    }
  }, [pathname, router]);

  useEffect(() => {
    setTitle(pageTitles[pathname] ?? 'FinanceFlow');
  }, [pathname]);

  // Render nothing until we know the auth status to avoid flashes of wrong content
  if (isAuthenticated === null) {
    return null;
  }

  // If on an unprotected route, just render the children (e.g., the login page)
  if (unprotectedRoutes.includes(pathname)) {
    return <>{children}</>;
  }

  // If authenticated and on a protected route, render the full app shell
  if (isAuthenticated) {
    return (
      <SidebarProvider>
        <div className="flex min-h-screen">
          <Sidebar collapsible="icon" className="border-r">
            <MainNav />
          </Sidebar>
          <SidebarInset className="flex-1 flex flex-col bg-background">
            <SiteHeader isMobile={isMobile} title={title} />
            <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
              {children}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    );
  }

  // This case should ideally not be reached due to the redirect, but it's good practice
  return null;
}
