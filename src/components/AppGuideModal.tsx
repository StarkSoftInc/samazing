import React from 'react';
import { useApp } from '../context/AppContext';
import { X, BookOpen, Sparkles, Heart, CheckCircle2, RefreshCw, BarChart2 } from 'lucide-react';

export const AppGuideModal: React.FC = () => {
  const { isAppGuideOpen, setIsAppGuideOpen, version } = useApp();

  if (!isAppGuideOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#F6F4EE] rounded-3xl border border-[#E5E0D4] max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative text-left my-8 max-h-[90vh] overflow-y-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E0D4]">
          <div className="flex items-center gap-2 font-serif font-bold text-2xl text-[#1E2421]">
            <BookOpen className="w-6 h-6 text-[#9E4A3B]" />
            <span>App Guide & User Documentation ({version})</span>
          </div>
          <button
            onClick={() => setIsAppGuideOpen(false)}
            className="p-2 text-[#1E2421] bg-[#EAE5D9] hover:bg-[#DED7C7] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Feature Documentation Sections */}
        <div className="space-y-6 text-xs text-[#4A544F] leading-relaxed">
          <div className="p-4 bg-[#2D3A34] text-[#F6F4EE] rounded-2xl flex items-center justify-between">
            <div>
              <p className="font-serif font-bold text-base text-white">S'AMAZING NUTRITION Pre-Launch Hub</p>
              <p className="text-xs text-[#C3CFC9]">Powered by FlashLearn Engine · Version {version}</p>
            </div>
            <span className="px-3 py-1 bg-[#D4A359] text-[#1E2421] font-bold rounded-full text-[10px]">
              V1.0.0
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#1E2421] flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#9E4A3B]" />
              <span>1. Wishlist & Customer Interest Collection</span>
            </h3>
            <p>
              Visitors can click "+ Wishlist" on any of the 5 flavours (Milky Moon, Choco Dream, Mango Sunset, Pistachio Glow, Raspberry Velvet), Launch Box, Accessories, or Complete Kit. The Wishlist drawer accumulates items, estimates value, and provides a 1-click pre-order registration form.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#1E2421] flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-[#2D3A34]" />
              <span>2. Interactive Monthly Box Builder (€35/month)</span>
            </h3>
            <p>
              Allows users to choose 10 pouches and pay for 9 (Choose 10, Pay for 9). Features a 10-slot visual progress bar, increment/decrement controls per flavour, and a 1-click "Select 10 of this" option for custom subscription preferences.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#1E2421] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4A359]" />
              <span>3. German Primary & English Bilingual Toggle</span>
            </h3>
            <p>
              Pursuant to the PDF Master Handoff, German (DE) is the primary language with English (EN) as secondary. Toggle DE/EN in the top navigation bar or footer at any time to translate all copy across all 16 sections.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#1E2421] flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-[#2D3A34]" />
              <span>4. Merchant Interest Analytics & CSV Export</span>
            </h3>
            <p>
              Click "Merchant Interest Analytics" in the footer or header menu to access registered customer pre-order leads, double opt-in consent records, and export a CSV file for launch communications.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#1E2421] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>5. Integrated Autotest Verification Suite</span>
            </h3>
            <p>
              An automated testing suite verifies critical application functions including Wishlist additions, Set views, Test mode, and language toggles to ensure complete system stability.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-[#E5E0D4] flex justify-end">
          <button
            onClick={() => setIsAppGuideOpen(false)}
            className="px-6 py-2 bg-[#2D3A34] text-white text-xs font-semibold rounded-full"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};
