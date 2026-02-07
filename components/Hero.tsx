
import React from 'react';

interface HeroProps {
  onViewMenu: () => void;
  onOrder: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewMenu, onOrder }) => {
  return (
    <section className="relative h-screen min-h-[750px] w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 scale-105 animate-slow-zoom">
        <img 
          src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=2500&auto=format&fit=crop" 
          alt="Bento Cake Dune & Crème" 
          className="w-full h-full object-cover"
        />
        {/* Overlay pour assurer la lisibilité du texte tout en gardant l'esthétique de la photo */}
        <div className="absolute inset-0 bg-[#3B251B]/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto mt-20">
        <span className="inline-block text-[10px] font-bold akkurat-style text-[#B88453] mb-6 tracking-[0.8em] reveal active">
          Pâtisserie Artisanale Rabat
        </span>
        <h1 className="text-[36px] md:text-7xl lg:text-8xl maquette-title akkurat-style text-[#F8F3E7] mb-8 leading-tight reveal active" style={{ transitionDelay: '0.2s' }}>
          LA PÂTISSERIE DES <br/>MOMENTS QUI COMPTENT
        </h1>
        <p className="text-base md:text-lg font-medium text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed reveal active" style={{ transitionDelay: '0.4s' }}>
          Des bento cakes sur mesure, pensés avec précision et réalisés avec passion. <br className="hidden md:block" />
          Commandez votre création unique et retirez-la en boutique à Rabat.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center reveal active" style={{ transitionDelay: '0.6s' }}>
          <button 
            onClick={onOrder}
            className="px-12 py-5 bg-[#B88453] text-white text-[10px] font-bold akkurat-style rounded-full hover:bg-white hover:text-[#3B251B] transition-all transform hover:scale-105 shadow-2xl"
          >
            Commander mon Bento
          </button>
          <button 
            onClick={onViewMenu}
            className="px-12 py-5 border border-white/40 text-white text-[10px] font-bold akkurat-style rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
          >
            Découvrir le menu
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-60">
         <span className="text-[8px] akkurat-style text-white tracking-[0.5em] mb-4 uppercase">Explorer l'univers</span>
         <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
