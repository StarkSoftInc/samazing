import React from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { Heart, Eye, Check } from 'lucide-react';

export const AccessoriesSection: React.FC = () => {
  const { language, setSelectedProductModal, addToWishlist, setIsWishlistDrawerOpen } = useApp();
  const t = TRANSLATIONS[language];

  const completeKit = PRODUCTS.find((p) => p.id === 'complete-kit')!;
  const accessories = PRODUCTS.filter((p) => p.category === 'accessory');

  return (
    <section className="bg-[#F6F4EE] py-20 border-b border-[#E5E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#9E4A3B]">
            <span>ESSENTIAL ACCESSORIES & BUNDLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1E2421]">
            {t.accessoriesSection.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5E6862]">
            {t.accessoriesSection.subtitle}
          </p>
        </div>

        {/* Hero Complete Kit Banner */}
        <div className="bg-[#2D3A34] text-[#F6F4EE] rounded-3xl p-8 lg:p-12 border border-[#45544C] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#4E5E56] shadow-xl aspect-[16/9]">
              <img
                src={completeKit.image}
                alt="S'AMAZING Complete Kit Bundle"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-block px-3 py-1 bg-[#D4A359] text-[#1E2421] text-xs font-bold rounded-full uppercase tracking-wider">
              {language === 'DE' ? 'ALLES-IN-EINEM BUNDLE' : 'ALL-IN-ONE BUNDLE'}
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              {t.accessoriesSection.bundleTitle}
            </h3>

            <p className="text-sm text-[#C3CFC9] leading-relaxed">
              {completeKit.description[language]}
            </p>

            <div className="space-y-1.5 text-xs text-[#E1E8E4]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4A359]" />
                <span>Launch Box (5x 50g Pouches) — €19.00</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4A359]" />
                <span>Electric Handheld Mixer — €19.90</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4A359]" />
                <span>Brushed Gold Scoop — €6.90</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4A359]" />
                <span>Silicone Popsicle Mould — €9.99</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4A359]" />
                <span>Protein Milk UHT 1 L — €2.99</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#45544C] flex items-center gap-6">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-bold text-white">€{completeKit.price.toFixed(2)}</span>
                  <span className="text-sm text-[#828C86] line-through font-mono">€{completeKit.originalPrice?.toFixed(2)}</span>
                </div>
                <span className="text-xs text-[#D4A359] font-medium block">
                  {language === 'DE' ? 'Spare €5.88 im Komplett-Set' : 'Save €5.88 with complete bundle'}
                </span>
              </div>

              <button
                onClick={() => {
                  addToWishlist('complete-kit', 1);
                  setIsWishlistDrawerOpen(true);
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#9E4A3B] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#833B2E] transition-colors shadow-md"
              >
                <Heart className="w-4 h-4 fill-white/20" />
                <span>{language === 'DE' ? 'Set zur Wunschliste' : 'Add Bundle to Wishlist'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Accessory Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((acc) => (
            <div
              key={acc.id}
              className="group bg-[#EAE5D9]/40 hover:bg-white rounded-2xl border border-[#E5E0D4] hover:border-[#9E4A3B]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs"
            >
              <div
                onClick={() => setSelectedProductModal(acc.id)}
                className="aspect-square bg-[#EAE5D9] overflow-hidden cursor-pointer relative"
              >
                <img
                  src={acc.image}
                  alt={acc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-[#1E2421]">
                  €{acc.price.toFixed(2)}
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4
                    onClick={() => setSelectedProductModal(acc.id)}
                    className="font-serif font-bold text-lg text-[#1E2421] group-hover:text-[#9E4A3B] cursor-pointer"
                  >
                    {acc.name}
                  </h4>
                  <p className="text-xs text-[#5E6862] mt-1 leading-relaxed">
                    {acc.tagline[language]}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E5E0D4]">
                  <button
                    onClick={() => setSelectedProductModal(acc.id)}
                    className="flex items-center justify-center gap-1 py-2 px-2 text-[11px] font-semibold text-[#2D3A34] bg-[#EAE5D9] hover:bg-[#DED7C7] rounded-lg transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>
                  <button
                    onClick={() => {
                      addToWishlist(acc.id, 1);
                      setIsWishlistDrawerOpen(true);
                    }}
                    className="flex items-center justify-center gap-1 py-2 px-2 text-[11px] font-semibold text-white bg-[#2D3A34] hover:bg-[#1E2421] rounded-lg transition-colors"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white/20" />
                    <span>+ Wishlist</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
