import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const links = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Insights', path: 'insights' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="px-6 md:px-12 lg:px-[120px] py-6 md:py-8 max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center">
        <button onClick={() => handleNavigate('home')} className="hover:opacity-70 transition-opacity">
          <Logo />
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 lg:gap-12">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavigate(link.path)}
              className={`transition-colors hover:text-[#E6B450] ${
                currentPage === link.path ? 'text-[#E6B450]' : ''
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:opacity-70 transition-opacity"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-6 pt-6 border-t border-[#4A372A]/10">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                className={`text-left py-2 transition-colors hover:text-[#E6B450] ${
                  currentPage === link.path ? 'text-[#E6B450]' : ''
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
