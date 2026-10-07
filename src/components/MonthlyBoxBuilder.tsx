import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { Plus, Minus, Heart, RefreshCw, CheckCircle2 } from 'lucide-react';

export const MonthlyBoxBuilder: React.FC = () => {
  const { language, addToWishlist, setIsWishlistDrawerOpen } = useApp();
  const t = TRANSLATIONS[language];

  const flavours = PRODUCTS.filter((p) => p.isFlavour);

  // Initialize 10 pouches default selection (2 of each)
  const [counts, setCounts] = useState<Record<string, number>>({
    'milky-moon': 2,
    'choco-dream': 2,
    'mango-sunset': 2,
    'pistachio-glow': 2,
    'raspberry-velvet': 2,
  });

  const totalSelected = Object.values(counts).reduce((a, b) => a + b, 0);

  const handleIncrement = (id: string) => {
    if (totalSelected < 10) {
      setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    }
  };

  const handleDecrement = (id: string) => {
    if ((counts[id] || 0) > 0) {
      setCounts((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

  const handleQuickFillAll = (id: string) => {
    const newCounts: Record<string, number> = {
      'milky-moon': 0,
      'choco-dream': 0,
      'mango-sunset': 0,
      'pistachio-glow': 0,
      'raspberry-velvet': 0,
    };
    newCounts[id] = 10;
    setCounts(newCounts);
  };

  const handleSaveToWishlist = () => {
    addToWishlist('monthly-box', 1, counts);
    setIsWishlistDrawerOpen(true);
  };

  return (
    <section id="monthly-box" className="bg-[#EAE5D9]/50 py-20 border-b border-[#E5E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#9E4A3B]">
            <RefreshCw className="w-4 h-4" />
            <span>RECURRING BUILD YOUR BOX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1E2421]">
            {t.monthlyBoxSection.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5E6862]">
            {t.monthlyBoxSection.subtitle}
          </p>
          <div className="inline-block px-4 py-1.5 bg-[#F6F4EE] rounded-full border border-[#E5E0D4] text-xs font-semibold text-[#9E4A3B]">
            {t.monthlyBoxSection.normalValue}
          </div>
        </div>

        {/* Builder Container */}
        <div className="bg-[#F6F4EE] rounded-3xl border border-[#E5E0D4] p-6 sm:p-10 shadow-lg space-y-8">
          
          {/* Progress Tracker (10 Slots Bar) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="uppercase tracking-wider text-[#1E2421]">
                {t.monthlyBoxSection.pouchCount}: <strong className="font-mono text-[#9E4A3B] text-base">{totalSelected} / 10</strong>
              </span>
              <span className="text-[#5E6862] font-normal">
                {totalSelected === 10
                  ? (language === 'DE' ? '✓ Box ist vollständig!' : '✓ Box is complete!')
                  : (language === 'DE' ? `Noch ${10 - totalSelected} Pouch(es) wählen` : `Select ${10 - totalSelected} more pouch(es)`)
                }
              </span>
            </div>

            {/* 10 Visual Slot Indicators */}
            <div className="grid grid-cols-10 gap-1.5 h-3 bg-[#EAE5D9] p-0.5 rounded-full overflow-hidden">
              {Array.from({ length: 10 }).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-full rounded-full transition-all duration-300 ${
                    idx < totalSelected ? 'bg-[#2D3A34]' : 'bg-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Flavour Selectors List */}
          <div className="space-y-4">
            {flavours.map((flavour) => {
              const currentCount = counts[flavour.id] || 0;
              return (
                <div
                  key={flavour.id}
                  className="bg-[#EAE5D9]/40 p-4 sm:p-5 rounded-2xl border border-[#E5E0D4] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:bg-white"
                >
                  {/* Flavour Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={flavour.image}
                      alt={flavour.name}
                      className="w-14 h-14 object-cover rounded-xl border border-[#E5E0D4] bg-[#EAE5D9]"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-lg text-[#1E2421]">
                        {flavour.name}
                      </h4>
                      <p className="text-xs text-[#5E6862]">
                        {flavour.tagline[language]}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Stepper & Quick Fill Button */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E5E0D4]">
                    <button
                      onClick={() => handleQuickFillAll(flavour.id)}
                      className="px-2.5 py-1 text-[11px] font-medium text-[#5E6862] bg-[#EAE5D9] hover:bg-[#DED7C7] rounded-lg transition-colors"
                      title="Select 10 of this flavour"
                    >
                      {language === 'DE' ? 'Alle 10 x' : '10 of this'}
                    </button>

                    <div className="flex items-center bg-[#F6F4EE] border border-[#E5E0D4] rounded-full p-1 shadow-xs">
                      <button
                        onClick={() => handleDecrement(flavour.id)}
                        disabled={currentCount === 0}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-[#1E2421] hover:bg-[#EAE5D9] disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>

                      <span className="w-10 text-center font-mono font-bold text-sm text-[#1E2421]">
                        {currentCount}
                      </span>

                      <button
                        onClick={() => handleIncrement(flavour.id)}
                        disabled={totalSelected >= 10}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-[#1E2421] hover:bg-[#EAE5D9] disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Save / Pre-Order Action Footer */}
          <div className="pt-6 border-t border-[#E5E0D4] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-2xl font-serif font-bold text-[#1E2421]">
                €35.00 <span className="text-xs font-sans font-normal text-[#5E6862]">/ month</span>
              </p>
              <p className="text-xs text-[#828C86]">
                {language === 'DE' ? 'Jederzeit pausierbar, anpassbar oder kündbar.' : 'Flexible monthly box with pause or cancel controls.'}
              </p>
            </div>

            <button
              onClick={handleSaveToWishlist}
              disabled={totalSelected !== 10}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2D3A34] text-[#F6F4EE] font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-[#1E2421] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
            >
              <Heart className="w-4 h-4 fill-white/20" />
              <span>{t.monthlyBoxSection.saveBox}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
