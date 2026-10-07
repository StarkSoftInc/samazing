import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';
import founderImg from '../assets/images/founder_samanta_1791293395209.jpg';
import { Award, Heart } from 'lucide-react';

export const AboutSamanta: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language];

  return (
    <section id="about" className="bg-[#EAE5D9]/40 py-20 border-b border-[#E5E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F6F4EE] rounded-3xl p-8 lg:p-12 border border-[#E5E0D4] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-sm">
          
          {/* Photo Left */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E0D4] shadow-xl aspect-[3/4]">
              <img
                src={founderImg}
                alt="Samanta - Food Scientist & Founder of S'AMAZING NUTRITION"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#E5E0D4] shadow-md">
                <p className="font-serif font-bold text-sm text-[#1E2421]">Samanta</p>
                <p className="text-[11px] text-[#9E4A3B] font-semibold">{t.aboutSamanta.kicker}</p>
              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9E4A3B]">
              <Award className="w-4 h-4" />
              <span>THE FOUNDER'S STORY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E2421]">
              {t.aboutSamanta.title}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#5E6862] leading-relaxed">
              <p>{t.aboutSamanta.paragraph1}</p>
              <p>{t.aboutSamanta.paragraph2}</p>
            </div>

            <div className="p-4 bg-[#EAE5D9]/60 rounded-xl border border-[#E5E0D4] flex items-center gap-4">
              <div className="p-3 bg-[#2D3A34] text-[#D4A359] rounded-xl shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <p className="text-xs text-[#2D3A34] font-medium leading-relaxed">
                {language === 'DE'
                  ? '„Keine künstlichen Kaugummi-Verdickungsmittel, kein gefrorener Sand. Nur reine Eiklar-Aerierung für echtes Fior di Latte Feeling.“'
                  : '"No artificial gum fillers, no frozen chalk. Just pure egg-white aeration for authentic Fior di Latte feeling."'
                }
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
