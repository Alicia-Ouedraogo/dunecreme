
import React, { useState } from 'react';
import { getPatiRitualAdvice } from '../services/geminiService';

const Advisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setResponse(null);
    const result = await getPatiRitualAdvice(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section className="py-32 px-6 bg-[#F8F3E7]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] akkurat-style text-[#B88453] font-bold mb-4 block">Conseils Personnalisés</span>
          <h2 className="text-3xl akkurat-style text-[#3B251B] mb-6">DEMANDEZ AU CHEF</h2>
          <p className="text-sm text-[#828282] max-w-md mx-auto">
            Une question sur un Bento Cake ou nos ingrédients ? Notre Chef Digital est là pour vous guider.
          </p>
        </div>

        <div className="bg-white p-8 md:p-16 rounded-2xl shadow-sm border border-[#3B251B]/5">
          <form onSubmit={handleSubmit} className="mb-10">
            <div className="relative">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Quel Bento Cake pour un anniversaire ?"
                className="w-full bg-transparent border-b border-[#3B251B]/10 py-6 text-lg outline-none focus:border-[#B88453] transition-all placeholder:opacity-30"
              />
              <button 
                type="submit"
                disabled={loading}
                className="absolute right-0 bottom-6 text-[10px] font-bold akkurat-style text-[#B88453] hover:opacity-50 transition-opacity disabled:opacity-20"
              >
                {loading ? 'Consultation...' : 'Envoyer'}
              </button>
            </div>
          </form>

          {response && (
            <div className="animate-fade-in p-8 bg-[#F8F3E7]/50 rounded-xl">
              <p className="text-base serif italic leading-relaxed text-[#3B251B]/80">
                "{response}"
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Advisor;
