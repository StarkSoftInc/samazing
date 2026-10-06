import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';
import { Microscope, Wind, Layers } from 'lucide-react';
import founderImg from '../assets/images/founder_samanta_1791293395209.jpg';

export const ScienceTexture: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language];

  return (
    <section className="bg-[#2D3A34] text-[#F6F4EE] py-20 border-b border-[#45544C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4A359]">
              <Microscope className="w-4 h-4" />
              <span>PASTRY SCIENCE & AERATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight text-[#F6F4EE]">
              {t.science.title}
            </h2>

            <p className="text-sm sm:text-base text-[#C3CFC9] leading-relaxed max-w-2xl">
              {t.science.description}
            </p>

            {/* 3 Science Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#3B4A43] p-4 rounded-xl border border-[#4E5E56]">
                <Wind className="w-5 h-5 text-[#D4A359] mb-2" />
                <h4 className="font-serif font-semibold text-sm text-white">Egg-White Matrix</h4>
                <p className="text-[11px] text-[#A6B5AF] mt-1">Traps air bubbles in stable protein walls.</p>
              </div>

              <div className="bg-[#3B4A43] p-4 rounded-xl border border-[#4E5E56]">
                <Layers className="w-5 h-5 text-[#D4A359] mb-2" />
                <h4 className="font-serif font-semibold text-sm text-white">300% Volume</h4>
                <p className="text-[11px] text-[#A6B5AF] mt-1">50g powder yields ~400ml voluminous dessert.</p>
              </div>

              <div className="bg-[#3B4A43] p-4 rounded-xl border border-[#4E5E56]">
                <Microscope className="w-5 h-5 text-[#D4A359] mb-2" />
                <h4 className="font-serif font-semibold text-sm text-white">Clean Hydrocolloids</h4>
                <p className="text-[11px] text-[#A6B5AF] mt-1">Guar & xanthan for ice-crystal prevention.</p>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#4E5E56] shadow-2xl aspect-[3/4]">
              <img
                src={founderImg}
                alt="Founder Samanta in R&D Food Science Kitchen"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-semibold text-[#D4A359] uppercase tracking-wider">
                  R&D FORMULATION
                </p>
                <p className="text-sm font-serif italic text-white mt-1">
                  "We engineered the protein matrix to hold air like a high-end Italian meringue."
                </p>
                <p className="text-[11px] text-[#A6B5AF] mt-2">— Samanta, Food Scientist</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
