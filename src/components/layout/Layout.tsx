import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { businessConfig, getPhoneLink } from '../../config/business';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-neutral-50">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />

      {/* Mobile Sticky Call Button */}
      <a
        href={getPhoneLink()}
        className="lg:hidden fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-200 z-50 flex items-center justify-center group"
        aria-label="Call for radon testing"
      >
        <Phone className="w-6 h-6" />
        <span className="max-w-0 group-hover:max-w-xs lg:group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300 lg:group-hover:ml-2">
          {businessConfig.name === '[BUSINESS NAME]' ? 'Radon Solution' : 'Call Now'}
        </span>
      </a>
    </div>
  );
}
