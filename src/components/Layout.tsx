import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { SupportChat } from './SupportChat';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <SupportChat />
    </div>
  );
};

export default Layout;