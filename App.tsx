
import React, { useEffect, useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import ProductSection from './components/ProductSection.tsx';
import Advisor from './components/Advisor.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'order'>('home');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // État du formulaire
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
    const whatsappNumber = "212661000000"; // Remplacez par le numéro réel
    const text = `*NOUVELLE COMMANDE DUNE & CRÈME*%0A%0A*Client:* ${formData.prenom} ${formData.nom}%0A*Produit:* ${selectedProduct || 'Non spécifié'}%0A*Créneau:* ${formData.creneau}%0A*WhatsApp:* ${formData.telephone}%0A*Note:* ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    setCurrentPage('home');
  };

  const faqs = [
    {
      q: "Où commander un bento cake à Rabat ?",
      a: "Directement sur ce site. Dune & Crème est spécialisée dans la création de bento cakes premium livrés ou à retirer en boutique à Rabat."
    },
    {
      q: "Quel est le délai de commande ?",
      a: "Nous recommandons de commander 48h à l'avance pour les créations sur mesure. Pour les besoins urgents, contactez-nous via WhatsApp."
    },
    {
      q: "Les gâteaux sont-ils personnalisables ?",
      a: "Absolument. Chaque bento cake est une pièce unique : message, couleurs et saveurs sont définis selon vos envies."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header onNavigate={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <div className="animate-fade-in">
          <Hero onViewMenu={() => setIsMenuOpen(true)} onOrder={() => handleOrderRedirect()} />
          
          <section id="histoire" className="py-24 md:py-40 px-6 bg-[#3B251B] text-[#F8F3E7]">
            <div className="max-w-4xl mx-auto text-center reveal">
              <h2 className="text-2xl md:text-3xl akkurat-style mb-10">Notre Maison</h2>
              <div className="space-y-6 text-base md:text-xl serif italic opacity-80 leading-relaxed">
                <p>Dune & Crème est née d'une passion pour la haute pâtisserie, portée par la Cheffe Meryem à Rabat.</p>
                <p>Chaque création est un équilibre parfait entre l'esthétique minimaliste du bento cake et l'exigence des saveurs françaises.</p>
              </div>
              <div className="w-12 h-[1px] bg-[#B88453] mx-auto mt-12"></div>
            </div>
          </section>

          <ProductSection onOrderProduct={handleOrderRedirect} />

          <section id="services" className="py-24 md:py-40 px-6 bg-[#F8F3E7]">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <h2 className="text-4xl md:text-6xl akkurat-style text-[#3B251B] mb-8">Click & Collect</h2>
                <p className="text-lg text-[#3B251B] font-medium mb-8 italic">"Récupérez votre coffret à Rabat."</p>
                <p className="text-base text-[#828282] mb-10 leading-relaxed">Une expérience fluide : commandez en ligne, choisissez votre créneau de retrait et venez chercher votre création artisanale directement à notre point de vente.</p>
                <button onClick={() => handleOrderRedirect()} className="px-10 py-5 bg-[#3B251B] text-white akkurat-style text-[10px] font-bold rounded-full hover:bg-[#B88453] transition-all">Commander maintenant</button>
              </div>
              <div className="reveal order-first lg:order-last">
                <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                  <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Boutique" />
                </div>
              </div>
            </div>
          </section>

          <Advisor />

          <section className="py-24 md:py-40 px-6 bg-white">
            <div className="max-w-3xl mx-auto reveal">
              <h2 className="text-2xl akkurat-style text-[#3B251B] mb-16 text-center">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className={`faq-item border border-[#B88453]/10 rounded-2xl overflow-hidden ${activeFaq === i ? 'active bg-[#F8F3E7]/20' : ''}`}>
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex justify-between items-center p-6 md:p-8 text-left">
                      <span className="font-bold akkurat-style text-[11px] md:text-xs">{faq.q}</span>
                      <svg className={`w-4 h-4 text-[#B88453] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <div className="faq-answer">
                      <div className="p-6 md:p-8 text-sm text-[#828282] border-t border-[#B88453]/10">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="pt-32 pb-40 px-6 animate-fade-in max-w-3xl mx-auto">
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 akkurat-style text-[10px] font-bold mb-10 hover:opacity-50 transition-opacity">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
             Retour
          </button>
          <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl border border-[#B88453]/10">
            <h1 className="text-4xl akkurat-style text-[#3B251B] mb-8">Commander</h1>
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <input required placeholder="Prénom" className="w-full bg-[#F8F3E7]/30 border-b border-gray-200 py-4 outline-none focus:border-[#B88453]" onChange={e => setFormData({...formData, prenom: e.target.value})} />
                <input required placeholder="Nom" className="w-full bg-[#F8F3E7]/30 border-b border-gray-200 py-4 outline-none focus:border-[#B88453]" onChange={e => setFormData({...formData, nom: e.target.value})} />
              </div>
              <input required type="tel" placeholder="Téléphone WhatsApp" className="w-full bg-[#F8F3E7]/30 border-b border-gray-200 py-4 outline-none focus:border-[#B88453]" onChange={e => setFormData({...formData, telephone: e.target.value})} />
              <select required className="w-full bg-[#F8F3E7]/30 border-b border-gray-200 py-4 outline-none focus:border-[#B88453]" value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)}>
                <option value="">Choisir un produit</option>
                <option value="Iconic">Bento Iconic</option>
                <option value="Elegant">Bento Elegant</option>
                <option value="Signature">Bento Signature</option>
                <option value="Sale">Assortiment Salé</option>
              </select>
              <div>
                <label className="text-[10px] akkurat-style font-bold mb-4 block">Créneau de retrait</label>
                <div className="grid grid-cols-3 gap-4">
                  {['Matin', 'Après-midi', 'Soir'].map(s => (
                    <button key={s} type="button" onClick={() => setFormData({...formData, creneau: s})} className={`py-3 rounded-xl border text-[10px] akkurat-style font-bold ${formData.creneau === s ? 'bg-[#3B251B] text-white' : 'border-gray-100'}`}>{s}</button>
                  ))}
                </div>
              </div>
              <textarea rows={4} placeholder="Détails (Message sur le gâteau, couleurs...)" className="w-full bg-[#F8F3E7]/30 rounded-2xl p-6 outline-none border border-gray-100 focus:border-[#B88453]" onChange={e => setFormData({...formData, message: e.target.value})} />
              <button type="submit" className="w-full py-6 bg-[#B88453] text-white akkurat-style font-bold rounded-full shadow-lg hover:bg-[#3B251B] transition-all">Valider sur WhatsApp</button>
            </form>
          </div>
        </div>
      )}

      <Footer />

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#3B251B]/95 backdrop-blur-xl p-6" onClick={() => setIsMenuOpen(false)}>
          <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800" className="flex-1 rounded-3xl shadow-2xl" alt="Menu 1" />
            <img src="https://images.unsplash.com/photo-1550966842-30cae7501b17?q=80&w=800" className="flex-1 rounded-3xl shadow-2xl" alt="Menu 2" />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
