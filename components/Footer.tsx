
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3B251B] text-[#F8F3E7] pt-24 pb-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl akkurat-style mb-8">DUNE & CRÈME</h2>
          <div className="flex gap-8 mb-12">
             <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
             <a href="#" className="hover:opacity-50 transition-opacity">Facebook</a>
             <a href="#" className="hover:opacity-50 transition-opacity">WhatsApp</a>
          </div>
          <div className="space-y-4 max-w-sm">
             <p className="text-xs akkurat-style font-bold text-[#B88453]">Nos Horaires</p>
             <p className="text-xs opacity-60">Lundi au Vendredi — 10H00 à 18H00</p>
             <p className="text-xs opacity-60">Weekends — 10H00 à 18H00</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] akkurat-style opacity-40">
           <p>© 2026 DUNE & CRÈME. TOUS DROITS RÉSERVÉS.</p>
           <div className="flex gap-8 mt-6 md:mt-0">
             <a href="#">Mentions Légales</a>
             <a href="#">Contact</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
