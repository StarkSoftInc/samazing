import React from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { Heart, Sparkles, Eye, Plus } from 'lucide-react';

export const FlavoursGrid: React.FC = () => {
  const { language, setSelectedProductModal, addToWishlist, setIsWishlistDrawerOpen } = useApp();
  const t = TRANSLATIONS[language];

  const flavours = PRODUCTS.filter((p) => p.isFlavour);

  return (
    <section id="flavours" className="bg-[#F6F4EE] py-20 border-b border-[#E5E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#9E4A3B]">
            <Sparkles className="w-4 h-4" />
            <span>5 FLAVOURS · 5 MOODS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1E2421]">
            {t.flavours.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5E6862]">
            {t.flavours.subtitle}
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {flavours.map((product) => (
            <div
              key={product.id}
              className="group bg-[#EAE5D9]/40 hover:bg-white rounded-2xl border border-[#E5E0D4] hover:border-[#9E4A3B]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl"
            >
              {/* Product Image Slot */}
              <div
                onClick={() => setSelectedProductModal(product.id)}
                className="relative cursor-pointer aspect-[4/3] sm:aspect-square overflow-hidden bg-[#EAE5D9]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-[#1E2421] shadow-xs">
                  €{product.price.toFixed(2)}
                </div>
                {/* Protein Kicker Tag */}
                <div className="absolute bottom-3 left-3 bg-[#2D3A34]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium text-[#F6F4EE]">
                  {product.proteinGrams}g Protein
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    onClick={() => setSelectedProductModal(product.id)}
                    className="font-serif font-bold text-xl text-[#1E2421] group-hover:text-[#9E4A3B] transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#5E6862] mt-1.5 leading-relaxed line-clamp-2">
                    {product.tagline[language]}
                  </p>
                </div>

                {/* Metadata Unboxed */}
                <div className="text-[11px] text-[#828C86] font-medium flex items-center gap-2 pt-2 border-t border-[#E5E0D4]">
                  <span>~{product.caloriesWater} kcal</span>
                  <span aria-hidden="true">·</span>
                  <span>{product.preparedVolume}</span>
                </div>

                {/* Card Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => setSelectedProductModal(product.id)}
                    className="flex items-center justify-center gap-1 py-2 px-2 text-[11px] font-semibold text-[#2D3A34] bg-[#EAE5D9] hover:bg-[#DED7C7] rounded-lg transition-colors"
                    title={t.flavours.viewProduct}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>

                  <button
                    onClick={() => {
                      addToWishlist(product.id, 1);
                      setIsWishlistDrawerOpen(true);
                    }}
                    className="flex items-center justify-center gap-1 py-2 px-2 text-[11px] font-semibold text-white bg-[#9E4A3B] hover:bg-[#833B2E] rounded-lg transition-colors shadow-xs"
                    title={t.flavours.addToWishlist}
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
