
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Advisor from './components/Advisor';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'order'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    telephone: '',
    creneau: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [currentPage]);

  const handleOrderRedirect = (productName: string = '') => {
    setSelectedProduct(productName);
    setCurrentPage('order');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construction du message WhatsApp
    const whatsappNumber = "212600000000"; // À remplacer par votre vrai numéro
    const text = `Bonjour Dune & Crème ! 
    
Nouvelle commande de : ${formData.prenom} ${formData.nom}
Produit : ${selectedProduct}
Créneau souhaité : ${formData.creneau}
Téléphone : ${formData.telephone}
Message : ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
    
    alert('Votre commande a été préparée. Vous allez être redirigé vers WhatsApp pour la validation finale.');
    setCurrentPage('home');
  };

  const faqs = [
    {
      q: "Où commander un bento cake à Rabat ?",
      a: "Directement ici sur notre site officiel DUNE & CRÈME. Nous sommes spécialisés dans le bento cake sur mesure avec retrait en boutique à Rabat."
    },
    {
      q: "Quel est le délai de commande ?",
      a: "Pour les bento cakes personnalisés, nous recommandons de commander 24h à 48h à l'avance. Pour les créations du jour, le click & collect immédiat est possible selon disponibilité."
    },
    {
      q: "Où se situe le point de retrait ?",
      a: "Nos créations sont à retirer dans notre atelier/boutique à Rabat. L'adresse exacte vous est communiquée lors de la confirmation WhatsApp."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header onNavigate={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <main>
          <Hero onViewMenu={() => setIsMenuOpen(true)} onOrder={() => handleOrderRedirect()} />
          
          <section id="histoire" className="py-32 md:py-48 px-6 bg-[#3B251B] text-[#F8F3E7]">
            <div className="max-w-4xl mx-auto text-center reveal">
              <span className="text-[10px] akkurat-style text-[#B88453] mb-8 block">L'Art de la Pâtisserie</span>
              <h2 className="text-[28px] md:text-4xl akkurat-style mb-12">NOTRE MAISON</h2>
              <div className="space-y-8 text-base md:text-xl leading-relaxed opacity-90 serif italic max-w-3xl mx-auto">
                <p>
                  Dune & Crème est née d’un savoir-faire exigeant, porté par la Cheffe <strong>Meryem</strong>, dont la vision réinvente les classiques de la pâtisserie française à Rabat.
                </p>
                <p>
                  Chaque bento cake est une pièce unique, une attention sucrée pensée pour transformer vos moments simples en souvenirs précieux.
                </p>
              </div>
              <div className="w-16 h-[1px] bg-[#B88453] mx-auto mt-16 opacity-30"></div>
            </div>
          </section>

          <ProductSection onOrderProduct={handleOrderRedirect} />
          
          <section id="services" className="py-32 md:py-48 px-6 bg-[#F8F3E7]">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
              <div className="reveal">
                <h2 className="text-4xl md:text-7xl akkurat-style text-[#3B251B] mb-10 leading-[1.1]">Click & collect <br/><span className="text-[#B88453]">Rabat</span></h2>
                <p className="text-lg md:text-xl text-[#3B251B] font-medium mb-10 leading-relaxed italic opacity-80">
                  "L'excellence artisanale, prête à emporter."
                </p>
                <p className="text-base text-[#828282] leading-relaxed mb-12 max-w-xl">
                  Profitez de notre service Click & Collect pour vos bento cakes et brunchs salés. Commandez en ligne en quelques clics et récupérez votre coffret signature directement en boutique à l'heure de votre choix.
                </p>
                <button 
                  onClick={() => handleOrderRedirect()}
                  className="px-14 py-6 bg-[#3B251B] text-white akkurat-style text-[10px] font-bold rounded-full hover:bg-[#B88453] transition-all duration-500 shadow-xl"
                >
                  Passer ma commande
                </button>
              </div>
              <div className="reveal order-first lg:order-last">
                <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white group">
                  <img 
                    src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop" 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                    alt="Boutique Dune & Crème Rabat"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B251B]/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </section>

          <Advisor />

          <section className="py-32 md:py-48 px-6 bg-white">
            <div className="max-w-3xl mx-auto reveal">
              <h2 className="text-[26px] akkurat-style text-[#3B251B] mb-20 text-center tracking-widest">QUESTIONS FRÉQUENTES</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className={`faq-item border border-[#B88453]/10 rounded-3xl overflow-hidden transition-all duration-500 ${activeFaq === i ? 'active bg-[#F8F3E7]/30 ring-1 ring-[#B88453]/20' : 'bg-white'}`}>
                    <button 
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full flex justify-between items-center p-8 md:p-10 text-left hover:bg-[#F8F3E7]/20 transition-colors"
                    >
                      <span className="text-sm md:text-base font-semibold akkurat-style text-[#3B251B] tracking-normal">{faq.q}</span>
                      <svg className={`w-5 h-5 text-[#B88453] transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <div className="faq-answer">
                      <div className="p-8 md:p-10 text-sm md:text-base text-[#828282] leading-relaxed border-t border-[#B88453]/10">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      ) : (
        /* ORDER PAGE - OPTIMIZED FOR CONVERSION */
        <main className="pt-32 pb-40 px-6 bg-[#F8F3E7] min-h-screen">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setCurrentPage('home')} className="group flex items-center gap-3 text-[#3B251B] akkurat-style text-[10px] font-bold mb-12 hover:text-[#B88453] transition-all">
              <span className="w-8 h-8 rounded-full border border-[#3B251B]/20 flex items-center justify-center group-hover:border-[#B88453] transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </span>
              RETOUR
            </button>
            
            <div className="bg-white rounded-[50px] p-8 md:p-20 shadow-2xl border border-[#B88453]/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F8F3E7] rounded-full -mr-32 -mt-32 opacity-50"></div>
              
              <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl akkurat-style text-[#3B251B] mb-4">COMMANDER</h1>
                <p className="text-base text-[#828282] mb-16 serif italic">Personnalisez votre création et nous vous recontactons sur WhatsApp.</p>
                
                <form className="space-y-12" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative">
                      <label className="text-[10px] akkurat-style font-bold text-[#B88453] mb-4 block">Prénom</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.prenom}
                        onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                        className="w-full bg-transparent border-b-2 border-[#3B251B]/10 py-4 outline-none focus:border-[#B88453] transition-colors text-lg" 
                      />
                    </div>
                    <div className="relative">
                      <label className="text-[10px] akkurat-style font-bold text-[#B88453] mb-4 block">Nom</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.nom}
                        onChange={(e) => setFormData({...formData, nom: e.target.value})}
                        className="w-full bg-transparent border-b-2 border-[#3B251B]/10 py-4 outline-none focus:border-[#B88453] transition-colors text-lg" 
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-[10px] akkurat-style font-bold text-[#B88453] mb-4 block">WhatsApp (Mobile)</label>
                    <input 
                      required 
                      type="tel" 
                      placeholder="+212 ..." 
                      value={formData.telephone}
                      onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-[#3B251B]/10 py-4 outline-none focus:border-[#B88453] transition-colors text-lg" 
                    />
                  </div>

                  <div className="relative">
                    <label className="text-[10px] akkurat-style font-bold text-[#B88453] mb-4 block">Votre Sélection</label>
                    <select 
                      required 
                      value={selectedProduct} 
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full bg-transparent border-b-2 border-[#3B251B]/10 py-4 outline-none focus:border-[#B88453] transition-colors akkurat-style text-xs"
                    >
                      <option value="">Choisir un délice</option>
                      <optgroup label="Bento Cakes">
                        <option value="Iconic">Bento Cake - Iconic</option>
                        <option value="Elegant">Bento Cake - Elegant</option>
                        <option value="Signature">Bento Cake - Signature</option>
                      </optgroup>
                      <optgroup label="Brunch & Salés">
                        <option value="Tartine Avocado">Tartine Avocado</option>
                        <option value="Croissant Smash">Croissant Smash Mozza</option>
                        <option value="Grilled Cheese">Grilled Cheese Truffle</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] akkurat-style font-bold text-[#B88453] mb-6 block">Moment de retrait</label>
                    <div className="grid grid-cols-3 gap-6">
                      {['Matin', 'Après-midi', 'Soir'].map((slot) => (
                        <button 
                          key={slot}
                          type="button"
                          onClick={() => setFormData({...formData, creneau: slot})}
                          className={`py-5 rounded-2xl text-[10px] akkurat-style font-bold border-2 transition-all duration-500 ${formData.creneau === slot ? 'bg-[#3B251B] text-white border-[#3B251B] shadow-lg scale-[1.05]' : 'bg-transparent text-[#3B251B] border-[#3B251B]/10 hover:border-[#B88453]'}`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-[10px] akkurat-style font-bold text-[#B88453] mb-4 block">Personnalisation & Message</label>
                    <textarea 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Indiquez le message à écrire sur le gâteau, vos couleurs préférées..."
                      className="w-full bg-[#F8F3E7]/30 border-2 border-[#3B251B]/5 rounded-3xl p-8 outline-none focus:border-[#B88453] transition-all resize-none text-base"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full py-8 bg-[#B88453] text-white akkurat-style font-bold text-[11px] rounded-full hover:bg-[#3B251B] transition-all duration-500 shadow-2xl transform hover:scale-[1.02] flex items-center justify-center gap-4">
                    CONFIRMER VIA WHATSAPP
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      )}

      <Footer />

      {/* MODAL MENUS */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#3B251B]/98 backdrop-blur-2xl animate-fade-in">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 text-white hover:text-[#B88453] transition-all duration-500">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <div className="max-w-6xl w-full h-[80vh] flex flex-col md:flex-row gap-12 items-center justify-center overflow-auto px-6">
             <div className="flex-1 bg-white p-6 rounded-[40px] shadow-2xl transition-transform hover:scale-105 duration-700">
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop" className="rounded-[30px] w-full" alt="Menu Cakes" />
                <p className="mt-8 text-center akkurat-style font-bold text-[#3B251B]">Carte des Cakes</p>
             </div>
             <div className="flex-1 bg-white p-6 rounded-[40px] shadow-2xl transition-transform hover:scale-105 duration-700 md:translate-y-12">
                <img src="https://images.unsplash.com/photo-1550966842-30cae7501b17?q=80&w=1000&auto=format&fit=crop" className="rounded-[30px] w-full" alt="Menu Salés" />
                <p className="mt-8 text-center akkurat-style font-bold text-[#3B251B]">Carte Brunch</p>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
