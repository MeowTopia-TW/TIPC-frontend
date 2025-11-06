import { ReactNode } from 'react';
import { Header, Footer } from '@/components';

interface PageLayoutProps {
  title?: string;      
  subtitle?: string;
  headerpic?: string;
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export default function PageLayout({ 
  children, 
  title,
  subtitle,
  headerpic, 
  showHeader = true,
  showFooter = true 
}: PageLayoutProps) {
  return (
    <>
      {showHeader && <Header title={title ?? ""} subtitle={subtitle} headerpic={headerpic ?? "/images/header/典藏索引_頭.png"}/>}
      <main>
        {children}
      </main>
      {showFooter && <Footer />}
    </>
  );
}
