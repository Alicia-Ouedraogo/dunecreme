
import React from 'react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'order') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-[80] bg-transparent py-6 md:py-8 transition-all duration-500">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <nav className="hidden md:flex flex-1 gap-10 text-[9px] font-bold akkurat-style text-white">
          <button onClick={() => { onNavigate('home'); window.location.hash = 'histoire'; }} className="hover:text-[#B88453] transition-colors tracking-[0.2em]">La Maison</button>
          <button onClick={() => { onNavigate('home'); window.location.hash = 'menu'; }} className="hover:text-[#B88453] transition-colors tracking-[0.2em]">Nos Créations</button>
        </nav>

        <div className="flex-1 flex justify-center">
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center group">
            <span className="text-2xl md:text-4xl font-light text-white tracking-[0.4em] akkurat-style group-hover:text-[#B88453] transition-all duration-700">
              DUNE <span className="text-[#B88453] md:mx-1">/</span> CRÈME
            </span>
            <div className="w-8 h-[1px] bg-[#B88453] mt-2 group-hover:w-16 transition-all duration-700"></div>
          </button>
        </div>

        <nav className="hidden md:flex flex-1 justify-end gap-10 items-center text-[9px] font-bold akkurat-style text-white">
          <button onClick={() => { onNavigate('home'); window.location.hash = 'services'; }} className="hover:text-[#B88453] transition-colors tracking-[0.2em]">Click & Collect</button>
          <button 
            onClick={() => onNavigate('order')}
            className="px-8 py-3 bg-white text-[#3B251B] rounded-full hover:bg-[#B88453] hover:text-white transition-all shadow-xl font-black"
          >
            COMMANDER
          </button>
        </nav>

        <button className="md:hidden text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 8h16M4 16h16"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
