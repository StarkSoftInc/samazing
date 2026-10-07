import React from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { Heart, CheckCircle2 } from 'lucide-react';
import heroImg from '../assets/images/hero_samazing_box_1791293299051.jpg';

export const LaunchBoxSection: React.FC = () => {
  const { language, addToWishlist, setIsWishlistDrawerOpen } = useApp();
  const t = TRANSLATIONS[language];

  const launchBox = PRODUCTS.find((p) => p.id === 'launch-box')!;

  const includedFlavours = [
    'Milky Moon (Fior di Latte)',
    'Choco Dream (Dark Cocoa)',
    'Mango Sunset (Alphonso Mango)',
    'Pistachio Glow (Bronte Pistachio)',
    'Raspberry Velvet (Wild Berry)',
  ];

  return (
    <section className="bg-[#F6F4EE] py-20 border-b border-[#E5E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2D3A34] text-[#F6F4EE] rounded-3xl p-8 lg:p-12 border border-[#45544C] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          
          {/* Image Left */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#4E5E56] shadow-xl aspect-[4/3]">
              <img
                src={heroImg}
                alt="Approved Dark Brown S'AMAZING Launch Box"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Details Right */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4A359]">
              <span>THE TASTING BOX</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              {t.launchBoxSection.title}
            </h2>

            <p className="text-sm sm:text-base text-[#C3CFC9] leading-relaxed">
              {t.launchBoxSection.subtitle}
            </p>

            {/* Included pouches list */}
            <div className="space-y-2 pt-2">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D4A359]">
                {language === 'DE' ? 'Enthaltene Sorten (5x 50g Pouches):' : 'Included Pouches (5x 50g Pouches):'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#E1E8E4]">
                {includedFlavours.map((flv, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A359] shrink-0" />
                    <span>{flv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-[#45544C]">
              <div>
                <span className="text-3xl font-serif font-bold text-white">€19.00</span>
                <span className="text-xs text-[#A6B5AF] block">€3.80 / pouch</span>
              </div>

              <button
                onClick={() => {
                  addToWishlist('launch-box', 1);
                  setIsWishlistDrawerOpen(true);
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#9E4A3B] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#833B2E] transition-colors shadow-md"
              >
                <Heart className="w-4 h-4 fill-white/20" />
                <span>{t.launchBoxSection.addToCart}</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
