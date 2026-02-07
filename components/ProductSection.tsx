
import React from 'react';
import { BENTO_CAKES, SALES_MAISON } from '../constants';

interface ProductSectionProps {
  onOrderProduct: (productName: string) => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({ onOrderProduct }) => {
  return (
    <section id="menu" className="py-40 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-32 text-center reveal">
          <h2 className="text-[32px] md:text-5xl akkurat-style text-[#3B251B] mb-6">Nos créations</h2>
          <div className="w-20 h-[2px] bg-[#B88453] mx-auto mb-10"></div>
          <p className="text-sm md:text-base text-[#828282] max-w-2xl mx-auto italic leading-relaxed">
            Réalisées chaque jour dans notre atelier de Rabat, nos créations marient l'exigence française à une touche contemporaine.
          </p>
        </div>

        {/* BENTO CAKES SECTION */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-xl md:text-2xl akkurat-style text-[#B88453] whitespace-nowrap">Bento Cakes</h3>
            <div className="w-full h-[1px] bg-[#B88453]/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {BENTO_CAKES.map((product) => (
              <div key={product.id} className="group reveal">
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-8 shadow-sm">
                  <img src={product.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#3B251B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={() => onOrderProduct(product.name)}
                      className="bg-white text-[#3B251B] px-8 py-3 rounded-full akkurat-style text-[9px] font-bold"
                    >
                      Personnaliser
                    </button>
                  </div>
                </div>
                <h4 className="text-lg font-bold akkurat-style text-[#3B251B] mb-2">{product.name}</h4>
                <p className="text-xs text-[#828282] leading-relaxed mb-4">{product.description}</p>
                <span className="text-sm font-bold text-[#B88453]">{product.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SALES SECTION */}
        <div>
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-xl md:text-2xl akkurat-style text-[#B88453] whitespace-nowrap">Les Salés de la Maison</h3>
            <div className="w-full h-[1px] bg-[#B88453]/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SALES_MAISON.map((product) => (
              <div key={product.id} className="group reveal">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-8 shadow-sm">
                  <img src={product.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#3B251B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={() => onOrderProduct(product.name)}
                      className="bg-white text-[#3B251B] px-8 py-3 rounded-full akkurat-style text-[9px] font-bold"
                    >
                      Ajouter
                    </button>
                  </div>
                </div>
                <h4 className="text-lg font-bold akkurat-style text-[#3B251B] mb-2">{product.name}</h4>
                <p className="text-xs text-[#828282] leading-relaxed mb-4">{product.description}</p>
                <span className="text-sm font-bold text-[#B88453]">{product.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
