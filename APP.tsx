
import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Insights } from './pages/Insights';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && ['home', 'about', 'services', 'insights', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        // If no hash, default to home
        setCurrentPage('home');
        window.location.hash = 'home';
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'insights':
        return <Insights />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-[#F4EDE2] text-[#4A372A] min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}
