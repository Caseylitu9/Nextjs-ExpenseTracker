import { SidebarTrigger } from '@/components/ui/sidebar';

interface SiteHeaderProps {
  isMobile: boolean;
  title: string;
}

export function SiteHeader({ isMobile, title }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {isMobile && <SidebarTrigger className="mr-2" />}
        <h1 className="text-xl font-headline font-semibold">{title}</h1>
      </div>
    </header>
  );
}
