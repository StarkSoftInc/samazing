import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';
import { Play, RotateCcw, Volume2, ChevronRight } from 'lucide-react';

export const Transformation: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language];

  const [activeStep, setActiveStep] = useState(2); // 0 to 4

  const transformationSteps = [
    { id: 0, title: t.transformation.step1, ratio: '50g powder', volume: '50 ml', desc: language === 'DE' ? 'Feines Eiklar-Proteinpulver' : 'Fine egg-white protein powder' },
    { id: 1, title: t.transformation.step2, ratio: '+150ml water', volume: '200 ml', desc: language === 'DE' ? 'In eiskalter Flüssigkeit gelöst' : 'Dissolved in ice-cold liquid' },
    { id: 2, title: t.transformation.step3, ratio: '2 min whip', volume: '300 ml', desc: language === 'DE' ? 'Aerierung durch Handrührgerät' : 'High-speed handheld aeration' },
    { id: 3, title: t.transformation.step4, ratio: '3x expansion', volume: '400 ml', desc: language === 'DE' ? 'Mikrobläschen in Eiklar-Matrix' : 'Encapsulated micro-air bubbles' },
    { id: 4, title: t.transformation.step5, ratio: 'Freezer / Spoon', volume: '400 ml Velvet', desc: language === 'DE' ? 'Cremig-softes Gelato-Mousse' : 'Creamy soft gelato mousse' },
  ];

  return (
    <section className="bg-[#F6F4EE] py-20 border-b border-[#E5E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#9E4A3B]">
            <span>{language === 'DE' ? 'AERIERUNGSSPEKTAKEL' : 'AERATION SCIENCE'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E2421]">
            {t.transformation.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5E6862]">
            {t.transformation.subtitle}
          </p>
        </div>

        {/* Step Selector & Visual Demonstrator */}
        <div className="bg-[#EAE5D9]/50 p-6 sm:p-8 rounded-2xl border border-[#E5E0D4] space-y-8">
          
          {/* Interactive Steps Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {transformationSteps.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  activeStep === idx
                    ? 'bg-[#2D3A34] text-[#F6F4EE] border-[#2D3A34] shadow-md'
                    : 'bg-[#F6F4EE] text-[#1E2421] border-[#E5E0D4] hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${activeStep === idx ? 'text-[#D4A359]' : 'text-[#9E4A3B]'}`}>
                    Step 0{idx + 1}
                  </span>
                  <span className={`text-xs font-mono tabular-nums ${activeStep === idx ? 'text-white/70' : 'text-[#828C86]'}`}>
                    {s.volume}
                  </span>
                </div>
                <p className="font-serif font-semibold text-sm mt-1">{s.title}</p>
                <p className={`text-[11px] mt-1 ${activeStep === idx ? 'text-[#C3CFC9]' : 'text-[#5E6862]'}`}>
                  {s.ratio}
                </p>
              </button>
            ))}
          </div>

          {/* Animated Volume Meter Visual */}
          <div className="bg-[#F6F4EE] p-6 rounded-xl border border-[#E5E0D4] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Visual Cylinder Gauge */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-[#2D3A34] rounded-xl text-[#F6F4EE] relative overflow-hidden">
              <div className="text-xs uppercase tracking-widest text-[#D4A359] font-medium mb-4 flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5" />
                <span>Prepared Volume Gauge</span>
              </div>

              {/* Beaker representation */}
              <div className="w-24 h-48 border-2 border-white/30 rounded-b-xl relative bg-black/20 overflow-hidden flex flex-col justify-end p-1">
                <div
                  className="w-full bg-gradient-to-t from-[#D4A359] to-[#F6F4EE] rounded-b-lg transition-all duration-700 ease-out flex items-center justify-center text-xs font-bold text-[#1E2421]"
                  style={{
                    height: `${((activeStep + 1) / 5) * 100}%`,
                  }}
                >
                  {transformationSteps[activeStep].volume}
                </div>
              </div>

              <p className="text-xs text-[#C3CFC9] mt-4 font-mono">
                Aeration Level: {((activeStep + 1) * 20)}%
              </p>
            </div>

            {/* Explanation & Controls */}
            <div className="md:col-span-7 space-y-4 text-left">
              <div className="inline-block px-3 py-1 bg-[#EAE5D9] text-[#9E4A3B] text-xs font-semibold rounded-full">
                Phase {activeStep + 1} of 5: {transformationSteps[activeStep].title}
              </div>

              <h3 className="text-2xl font-serif font-semibold text-[#1E2421]">
                {transformationSteps[activeStep].desc}
              </h3>

              <p className="text-sm text-[#5E6862] leading-relaxed">
                {language === 'DE'
                  ? 'Durch die speziellen Eiklarproteine in Kombination mit natürlichen pflanzlichen Hydrokolloiden dehnt sich die Masse beim 2-minütigen Aufschlagen auf das Dreifache aus. Das Ergebnis ist ein seidenweicher Schaum mit perfekter Cremigkeit.'
                  : 'Special egg-white proteins combined with plant hydrocolloids expand the mixture threefold during 2 minutes of electric whipping. The result is a silky soft foam with luscious creaminess.'
                }
              </p>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % 5)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2D3A34] text-[#F6F4EE] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#1E2421] transition-colors"
                >
                  <span>{language === 'DE' ? 'Nächster Schritt' : 'Next Step'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveStep(0)}
                  className="p-2.5 bg-[#EAE5D9] text-[#1E2421] rounded-full hover:bg-[#DED7C7] transition-colors"
                  title="Reset to Step 1"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
