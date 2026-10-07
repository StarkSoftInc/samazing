import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { X, Heart, Plus, Minus, Check, Zap, ShieldCheck } from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const {
    language,
    selectedProductModal,
    setSelectedProductModal,
    addToWishlist,
    setIsWishlistDrawerOpen,
  } = useApp();

  const t = TRANSLATIONS[language];

  if (!selectedProductModal) return null;

  const product = PRODUCTS.find((p) => p.id === selectedProductModal);
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);

  const crossSells = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === 'accessory' || p.id === 'complete-kit')
  ).slice(0, 3);

  const handleAddAndOpenDrawer = () => {
    addToWishlist(product.id, quantity);
    setSelectedProductModal(null);
    setIsWishlistDrawerOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#F6F4EE] rounded-3xl border border-[#E5E0D4] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedProductModal(null)}
          className="absolute top-6 right-6 p-2 text-[#1E2421] bg-[#EAE5D9] hover:bg-[#DED7C7] rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Gallery Column (Front Pouch + Prepared Dessert ONLY - NO Rear Packaging) */}
          <div className="md:col-span-6 space-y-4">
            <div className="aspect-[4/3] bg-[#EAE5D9] rounded-2xl overflow-hidden border border-[#E5E0D4] relative">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#2D3A34] text-[#D4A359] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                FRONT PACKAGING ONLY · NO REAR PHOTOS
              </div>
            </div>

            {/* Thumbnail Row */}
            {product.galleryImages && product.galleryImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      activeImage === img ? 'border-[#9E4A3B]' : 'border-[#E5E0D4] opacity-70'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="md:col-span-6 space-y-6 text-left">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#9E4A3B]">
                S'AMAZING {product.category.toUpperCase()}
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#1E2421] mt-1">
                {product.name}
              </h2>
              <p className="text-sm text-[#5E6862] italic mt-1 font-serif">
                {product.tagline[language]}
              </p>
            </div>

            {/* Price & Stock */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-serif font-bold text-[#1E2421]">
                €{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#828C86] line-through font-mono">
                  €{product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                In Stock & Ready for Launch
              </span>
            </div>

            <p className="text-sm text-[#4A544F] leading-relaxed">
              {product.description[language]}
            </p>

            {/* Main Proof Callout */}
            {product.isFlavour && (
              <div className="p-4 bg-[#EAE5D9]/60 rounded-xl border border-[#E5E0D4] space-y-1 text-xs">
                <p className="font-semibold text-[#1E2421] flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#9E4A3B]" />
                  <span>High Protein Claim: {product.proteinGrams}g Protein per serving</span>
                </p>
                <p className="text-[#5E6862]">
                  {product.preparedVolume} prepared volume · ~{product.caloriesWater} kcal prepared with cold water.
                </p>
              </div>
            )}

            {/* Quantity Stepper & Add CTA */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-[#EAE5D9] border border-[#E5E0D4] rounded-full p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[#1E2421] hover:bg-white transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center font-mono font-bold text-sm text-[#1E2421]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[#1E2421] hover:bg-white transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAddAndOpenDrawer}
                  className="flex-1 py-3.5 px-6 bg-[#2D3A34] text-[#F6F4EE] font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-[#1E2421] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Heart className="w-4 h-4 fill-white/20" />
                  <span>ADD TO PRE-ORDER WISHLIST</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Extended Product Tabs (Prep, Nutrition, Ingredients) */}
        {product.isFlavour && (
          <div className="mt-10 pt-8 border-t border-[#E5E0D4] space-y-8 text-left">
            
            {/* Preparation Steps */}
            <div>
              <h3 className="font-serif font-bold text-xl text-[#1E2421] mb-4">
                Preparation Instructions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {product.prepSteps?.map((step, i) => (
                  <div key={i} className="p-4 bg-[#EAE5D9]/40 rounded-xl border border-[#E5E0D4]">
                    <p className="font-serif font-bold text-sm text-[#1E2421]">{step.title[language]}</p>
                    <p className="text-xs text-[#5E6862] mt-1">{step.desc[language]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Nutrition Table (Written as text/table) */}
            {product.nutrition && (
              <div>
                <h3 className="font-serif font-bold text-xl text-[#1E2421] mb-4">
                  Nutritional Value Table (Labor-Confirmed)
                </h3>
                <div className="overflow-x-auto bg-white rounded-xl border border-[#E5E0D4] p-4 text-xs">
                  <table className="w-full text-left font-mono tabular-nums">
                    <thead>
                      <tr className="border-b border-[#E5E0D4] text-[#9E4A3B] font-sans font-semibold">
                        <th className="py-2">Nutrient</th>
                        <th className="py-2">Per 100g Powder</th>
                        <th className="py-2">Per 50g + Water (~400ml)</th>
                        <th className="py-2">Per 50g + Protein Milk (~400ml)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E0D4]/60 text-[#1E2421]">
                      <tr>
                        <td className="py-2 font-sans font-medium">Energy (kcal)</td>
                        <td className="py-2">{product.nutrition.per100g.energyKcal} kcal</td>
                        <td className="py-2">{product.nutrition.per50gWithWater.energyKcal} kcal</td>
                        <td className="py-2">{product.nutrition.per50gWithProteinMilk.energyKcal} kcal</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-sans font-medium">Fat</td>
                        <td className="py-2">{product.nutrition.per100g.fat}g</td>
                        <td className="py-2">{product.nutrition.per50gWithWater.fat}g</td>
                        <td className="py-2">{product.nutrition.per50gWithProteinMilk.fat}g</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-sans font-medium">Carbohydrates</td>
                        <td className="py-2">{product.nutrition.per100g.carbs}g</td>
                        <td className="py-2">{product.nutrition.per50gWithWater.carbs}g</td>
                        <td className="py-2">{product.nutrition.per50gWithProteinMilk.carbs}g</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-sans font-medium">Protein</td>
                        <td className="py-2 font-bold text-[#9E4A3B]">{product.nutrition.per100g.protein}g</td>
                        <td className="py-2 font-bold text-[#9E4A3B]">{product.nutrition.per50gWithWater.protein}g</td>
                        <td className="py-2 font-bold text-[#9E4A3B]">{product.nutrition.per50gWithProteinMilk.protein}g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Ingredients & Allergens (Text Only - NO rear pouch photo!) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#EAE5D9]/40 p-6 rounded-2xl border border-[#E5E0D4]">
              <div>
                <h4 className="font-serif font-bold text-base text-[#1E2421] mb-2">
                  Full Ingredients (Approved Label Text)
                </h4>
                <p className="text-xs text-[#5E6862] leading-relaxed">
                  {product.ingredients?.[language]}
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-[#1E2421] mb-2">
                  Allergen Information
                </h4>
                <p className="text-xs text-[#9E4A3B] font-semibold leading-relaxed">
                  {product.allergens?.[language]}
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Cross-Sells Section */}
        <div className="mt-10 pt-8 border-t border-[#E5E0D4] text-left">
          <h3 className="font-serif font-bold text-xl text-[#1E2421] mb-4">
            Pairs Perfectly With
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {crossSells.map((item) => (
              <div
                key={item.id}
                className="bg-[#EAE5D9]/40 p-4 rounded-xl border border-[#E5E0D4] flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg bg-[#EAE5D9]" />
                  <div>
                    <p className="font-serif font-bold text-sm text-[#1E2421]">{item.name}</p>
                    <p className="text-xs text-[#5E6862] font-mono">€{item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => addToWishlist(item.id, 1)}
                  className="px-2.5 py-1.5 bg-[#2D3A34] text-white text-[11px] font-semibold rounded-lg hover:bg-[#1E2421]"
                >
                  + Add
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
