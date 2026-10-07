import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';
import { Gift, ShieldAlert, Check } from 'lucide-react';
import completeKitImg from '../assets/images/complete_kit_bundle_1791293377123.jpg';

export const First100Orders: React.FC = () => {
  const { language, addToWishlist, setIsWishlistDrawerOpen } = useApp();
  const t = TRANSLATIONS[language];

  return (
    <section className="bg-[#EAE5D9]/60 py-16 border-b border-[#E5E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F6F4EE] rounded-3xl border border-[#E5E0D4] p-8 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2D3A34] text-[#D4A359] text-xs font-semibold rounded-full uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5" />
              <span>LAUNCH BONUS GIFT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E2421]">
              {t.first100.title}
            </h2>

            <p className="text-sm sm:text-base text-[#5E6862] leading-relaxed">
              {t.first100.subtitle}
            </p>

            <div className="p-4 bg-[#EAE5D9]/50 rounded-xl border border-[#E5E0D4] text-xs text-[#2D3A34] space-y-2">
              <div className="flex items-center gap-2 font-semibold">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Heavyweight brushed gold stainless steel gelato scoop</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Automatically added at checkout for first 100 paid orders over €19</span>
              </div>
            </div>

            <p className="text-xs text-[#828C86] font-serif italic flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-[#9E4A3B]" />
              <span>{t.first100.note}</span>
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  addToWishlist('launch-box', 1);
                  setIsWishlistDrawerOpen(true);
                }}
                className="px-6 py-3 bg-[#9E4A3B] text-white font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-[#833B2E] transition-all shadow-md"
              >
                {language === 'DE' ? 'Launch Box vorbestellen (+ Gratis Löffel)' : 'Pre-Order Launch Box (+ Free Gold Scoop)'}
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#E5E0D4] shadow-md bg-[#EAE5D9] aspect-[4/3]">
              <img
                src={completeKitImg}
                alt="S'Amazing Gold Scoop & Launch Box"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
