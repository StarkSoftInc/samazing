import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';
import { Flame, ShieldCheck, Zap } from 'lucide-react';

export const QuickProof: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language];

  return (
    <section className="bg-[#EAE5D9]/60 py-12 border-y border-[#E5E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#F6F4EE] p-6 rounded-xl border border-[#E5E0D4] flex items-start gap-4 shadow-xs">
            <div className="p-3 bg-[#E5E0D4] text-[#9E4A3B] rounded-lg shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg text-[#1E2421]">
                {t.proof.card1Title}
              </h3>
              <p className="text-xs text-[#5E6862] mt-1 leading-relaxed">
                {t.proof.card1Desc}
              </p>
            </div>
          </div>

          <div className="bg-[#F6F4EE] p-6 rounded-xl border border-[#E5E0D4] flex items-start gap-4 shadow-xs">
            <div className="p-3 bg-[#E5E0D4] text-[#2D3A34] rounded-lg shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg text-[#1E2421]">
                {t.proof.card2Title}
              </h3>
              <p className="text-xs text-[#5E6862] mt-1 leading-relaxed">
                {t.proof.card2Desc}
              </p>
            </div>
          </div>

          <div className="bg-[#F6F4EE] p-6 rounded-xl border border-[#E5E0D4] flex items-start gap-4 shadow-xs">
            <div className="p-3 bg-[#E5E0D4] text-[#D4A359] rounded-lg shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg text-[#1E2421]">
                {t.proof.card3Title}
              </h3>
              <p className="text-xs text-[#5E6862] mt-1 leading-relaxed">
                {t.proof.card3Desc}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
