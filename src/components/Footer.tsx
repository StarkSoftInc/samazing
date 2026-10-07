import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';
import { Heart, BarChart2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const {
    language,
    setLanguage,
    setLegalModalType,
    setIsAnalyticsOpen,
    version,
  } = useApp();

  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-[#1E2421] text-[#F6F4EE] pt-16 pb-12 border-t border-[#343F39]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Brand & Kicker Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#343F39]">
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-2xl font-serif font-bold text-white tracking-wider">
              S'AMAZING NUTRITION
            </h3>
            <p className="text-xs text-[#A6B5AF] max-w-md leading-relaxed">
              Protein never felt softer. Artisanal high-protein whipped dessert mixes inspired by Italian pastry science and egg-white aeration technology.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-[#D4A359]">
              <span className="font-mono bg-[#2D3A34] px-2.5 py-1 rounded-md border border-[#3E4E46]">
                {version}
              </span>
              <span>· German Market Handoff Edition</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-[#A6B5AF]">
            {/* Column 1: Legal Pages */}
            <div className="space-y-2.5">
              <p className="font-semibold text-white uppercase tracking-wider text-[11px]">
                {t.footer.legalTitle}
              </p>
              <button
                onClick={() => setLegalModalType('impressum')}
                className="block hover:text-[#D4A359] transition-colors text-left"
              >
                {t.footer.impressum}
              </button>
              <button
                onClick={() => setLegalModalType('privacy')}
                className="block hover:text-[#D4A359] transition-colors text-left"
              >
                {t.footer.privacy}
              </button>
              <button
                onClick={() => setLegalModalType('agb')}
                className="block hover:text-[#D4A359] transition-colors text-left"
              >
                {t.footer.agb}
              </button>
              <button
                onClick={() => setLegalModalType('withdrawal')}
                className="block hover:text-[#D4A359] transition-colors text-left"
              >
                {t.footer.withdrawal}
              </button>
            </div>

            {/* Column 2: Order & Delivery */}
            <div className="space-y-2.5">
              <p className="font-semibold text-white uppercase tracking-wider text-[11px]">
                {language === 'DE' ? 'Service & Lieferung' : 'Service & Shipping'}
              </p>
              <button
                onClick={() => setLegalModalType('shipping')}
                className="block hover:text-[#D4A359] transition-colors text-left"
              >
                {t.footer.shipping}
              </button>
              <button
                onClick={() => setLegalModalType('withdrawal')}
                className="block hover:text-[#D4A359] transition-colors text-left"
              >
                {language === 'DE' ? 'Rückgabe & Erstattung' : 'Returns & Refunds'}
              </button>
              <button
                onClick={() => setLegalModalType('cookies')}
                className="block hover:text-[#D4A359] transition-colors text-left"
              >
                {t.footer.cookieSettings}
              </button>
              <button
                onClick={() => setLegalModalType('contact')}
                className="block hover:text-[#D4A359] transition-colors text-left"
              >
                {t.footer.contact}
              </button>
            </div>

            {/* Column 3: Admin & Language */}
            <div className="space-y-2.5">
              <p className="font-semibold text-white uppercase tracking-wider text-[11px]">
                {language === 'DE' ? 'Aktionen & Tools' : 'Actions & Tools'}
              </p>
              <button
                onClick={() => setIsAnalyticsOpen(true)}
                className="flex items-center gap-1.5 text-[#D4A359] hover:underline text-left font-medium"
              >
                <BarChart2 className="w-3.5 h-3.5" />
                <span>{t.footer.analytics}</span>
              </button>

              <div className="pt-2">
                <span className="text-[10px] uppercase text-[#73827B] block mb-1">Language:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage('DE')}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      language === 'DE' ? 'bg-[#D4A359] text-[#1E2421]' : 'bg-[#2D3A34] text-white'
                    }`}
                  >
                    DE
                  </button>
                  <button
                    onClick={() => setLanguage('EN')}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      language === 'EN' ? 'bg-[#D4A359] text-[#1E2421]' : 'bg-[#2D3A34] text-white'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#73827B]">
          <p>{t.footer.copy}</p>
          <p className="font-serif italic text-xs text-[#A6B5AF]">
            info@samazingnutrition.com · Munich, Germany
          </p>
        </div>

      </div>
    </footer>
  );
};
