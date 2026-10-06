import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { X, Heart, Trash2, Plus, Minus, ArrowRight, CheckCircle2 } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const {
    language,
    wishlist,
    removeFromWishlist,
    updateWishlistQuantity,
    clearWishlist,
    isWishlistDrawerOpen,
    setIsWishlistDrawerOpen,
    submitPreOrderInterest,
  } = useApp();

  const t = TRANSLATIONS[language];

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isWishlistDrawerOpen) return null;

  const totalEstimate = wishlist.reduce((acc, item) => {
    const prod = PRODUCTS.find((p) => p.id === item.productId);
    return acc + (prod ? prod.price * item.quantity : 0);
  }, 0);

  const handleSubmitInterest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email) return;

    submitPreOrderInterest({
      firstName,
      email,
      interestType: 'wishlist',
      marketingConsent: true,
      notes: 'Submitted via Wishlist Drawer',
    });

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div className="bg-[#F6F4EE] w-full max-w-md h-full flex flex-col justify-between shadow-2xl relative border-l border-[#E5E0D4] p-6 overflow-y-auto">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E0D4]">
          <div className="flex items-center gap-2 font-serif font-bold text-xl text-[#1E2421]">
            <Heart className="w-5 h-5 text-[#9E4A3B] fill-[#9E4A3B]/20" />
            <span>{t.wishlistDrawer.title}</span>
          </div>
          <button
            onClick={() => setIsWishlistDrawerOpen(false)}
            className="p-2 text-[#1E2421] hover:bg-[#EAE5D9] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 py-6 space-y-6 overflow-y-auto">
          {wishlist.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Heart className="w-12 h-12 text-[#9E4A3B]/30 mx-auto" />
              <p className="text-sm text-[#5E6862] max-w-xs mx-auto">
                {t.wishlistDrawer.emptyMessage}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlist.map((item) => {
                const prod = PRODUCTS.find((p) => p.id === item.productId);
                if (!prod) return null;
                return (
                  <div
                    key={item.productId}
                    className="bg-[#EAE5D9]/40 p-4 rounded-2xl border border-[#E5E0D4] flex items-center justify-between gap-4"
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-14 h-14 object-cover rounded-xl bg-[#EAE5D9] border border-[#E5E0D4]"
                    />

                    <div className="flex-1 min-w-0">
                      <p className="font-serif font-bold text-sm text-[#1E2421] truncate">
                        {prod.name}
                      </p>
                      <p className="text-xs text-[#5E6862] font-mono">
                        €{prod.price.toFixed(2)} each
                      </p>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateWishlistQuantity(item.productId, item.quantity - 1)}
                          className="w-6 h-6 rounded-full bg-[#EAE5D9] text-[#1E2421] flex items-center justify-center hover:bg-[#DED7C7]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-bold w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateWishlistQuantity(item.productId, item.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-[#EAE5D9] text-[#1E2421] flex items-center justify-center hover:bg-[#DED7C7]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromWishlist(item.productId)}
                      className="p-2 text-[#828C86] hover:text-[#9E4A3B] transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}

              <div className="flex justify-end pt-2">
                <button
                  onClick={clearWishlist}
                  className="text-xs text-[#9E4A3B] underline hover:text-[#833B2E]"
                >
                  {t.wishlistDrawer.clearAll}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer: Pre-Order Interest Form */}
        {wishlist.length > 0 && (
          <div className="pt-4 border-t border-[#E5E0D4] space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-[#5E6862]">{t.wishlistDrawer.totalEstimate}:</span>
              <span className="font-serif font-bold text-xl text-[#1E2421]">
                €{totalEstimate.toFixed(2)}
              </span>
            </div>

            {submitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Interest Recorded!</span>
                </p>
                <p>Welcome to S'AMAZING. You will receive launch access shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitInterest} className="space-y-3 bg-[#EAE5D9]/40 p-4 rounded-2xl border border-[#E5E0D4]">
                <p className="text-xs font-semibold text-[#1E2421] uppercase tracking-wider">
                  Register Pre-Order Interest
                </p>
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#E5E0D4] rounded-lg text-xs text-[#1E2421] focus:outline-none focus:border-[#9E4A3B]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#E5E0D4] rounded-lg text-xs text-[#1E2421] focus:outline-none focus:border-[#9E4A3B]"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#9E4A3B] text-white font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-[#833B2E] transition-colors shadow-xs"
                >
                  {t.wishlistDrawer.submitInterestBtn}
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
