import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';
import heroImg from '../assets/images/hero_samazing_box_1791293299051.jpg';
import { ArrowRight, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language, addToWishlist, setIsWishlistDrawerOpen } = useApp();
  const t = TRANSLATIONS[language];

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-[#F6F4EE] pt-8 pb-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9E4A3B]">
              <span>{t.hero.kicker}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1E2421] leading-[1.1] tracking-tight">
              {t.hero.title}
            </h1>

            <p className="text-base sm:text-lg text-[#4A544F] font-normal leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection('flavours')}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#2D3A34] text-[#F6F4EE] font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-[#1E2421] transition-all shadow-md group"
              >
                <span>{t.hero.shopFlavours}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('monthly-box')}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#EAE5D9] text-[#1E2421] font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-[#DED7C7] transition-all border border-[#D5CEBD]"
              >
                <span>{t.hero.buildMonthlyBox}</span>
              </button>

              <button
                onClick={() => {
                  addToWishlist('launch-box', 1);
                  setIsWishlistDrawerOpen(true);
                }}
                className="inline-flex items-center justify-center px-4 py-3.5 bg-white text-[#9E4A3B] border border-[#E5D7CE] rounded-full hover:bg-[#FDF8F5] transition-all shadow-xs"
                title="Add Launch Box to Wishlist"
              >
                <Heart className="w-4 h-4 fill-[#9E4A3B]/10" />
              </button>
            </div>

            {/* Quick Proof Kicker Bar (Unboxed Metadata) */}
            <div className="pt-6 border-t border-[#E5E0D4] flex items-center gap-3 text-xs sm:text-sm font-medium text-[#5E6862]">
              <span className="font-serif italic text-[#9E4A3B] font-semibold">Proof</span>
              <span aria-hidden="true">·</span>
              <span>{t.hero.proofPoints}</span>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5E0D4] bg-[#EAE5D9]/50 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] group">
              <img
                src={heroImg}
                alt="S'AMAZING NUTRITION Artisanal Pouch & Prepared Dessert"
                className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#1E2421] uppercase tracking-wider">
                    S'AMAZING LAUNCH EDITION
                  </p>
                  <p className="text-xs text-[#5E6862] font-serif italic">
                    {language === 'DE' ? '5 Sorten + Eiklar-Aufschlagformel' : '5 Flavours + Egg-white whipping formula'}
                  </p>
                </div>
                <button
                  onClick={() => scrollToSection('flavours')}
                  className="px-3 py-1.5 bg-[#9E4A3B] text-white text-[11px] font-bold rounded-lg hover:bg-[#833B2E] transition-colors"
                >
                  {t.flavours.viewProduct}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
