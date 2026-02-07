
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'order') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[80] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <nav className={`hidden md:flex flex-1 gap-10 text-[9px] font-bold akkurat-style ${scrolled ? 'text-[#3B251B]' : 'text-white'}`}>
          <button onClick={() => { onNavigate('home'); window.location.hash = 'histoire'; }} className="hover:text-[#B88453] transition-colors">La Maison</button>
          <button onClick={() => { onNavigate('home'); window.location.hash = 'menu'; }} className="hover:text-[#B88453] transition-colors">Créations</button>
        </nav>

        <div className="flex-1 flex justify-center">
          <button onClick={() => onNavigate('home')} className={`text-xl md:text-3xl font-light tracking-[0.3em] akkurat-style transition-colors ${scrolled ? 'text-[#3B251B]' : 'text-white'}`}>
            DUNE <span className="text-[#B88453]">/</span> CRÈME
          </button>
        </div>

        <nav className="hidden md:flex flex-1 justify-end gap-10 items-center">
          <button 
            onClick={() => onNavigate('order')}
            className={`px-8 py-3 rounded-full akkurat-style text-[9px] font-bold transition-all ${scrolled ? 'bg-[#3B251B] text-white' : 'bg-white text-[#3B251B]'} hover:bg-[#B88453] hover:text-white shadow-lg`}
          >
            COMMANDER
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
