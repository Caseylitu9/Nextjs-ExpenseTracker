
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

export function AppShell({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const router = useRouter();
  const [title, setTitle] = useState('Dashboard');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !localStorage.getItem('isAuthenticated')) {
      router.push('/login');
    }
  }, [isClient, router]);

  useEffect(() => {
    setTitle(pageTitles[pathname] ?? 'FinanceFlow');
  }, [pathname]);

  if (!isClient || !localStorage.getItem('isAuthenticated')) {
    return null; // Or a loading spinner
  }

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
