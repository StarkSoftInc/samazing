import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';
import { Milk, Wind, Snowflake, HeartHandshake } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language];

  const steps = [
    {
      stepNum: '01',
      title: t.howItWorks.step1Title,
      desc: t.howItWorks.step1Desc,
      icon: Milk,
    },
    {
      stepNum: '02',
      title: t.howItWorks.step2Title,
      desc: t.howItWorks.step2Desc,
      icon: Wind,
    },
    {
      stepNum: '03',
      title: t.howItWorks.step3Title,
      desc: t.howItWorks.step3Desc,
      icon: Snowflake,
    },
    {
      stepNum: '04',
      title: t.howItWorks.step4Title,
      desc: t.howItWorks.step4Desc,
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#EAE5D9]/40 py-20 border-b border-[#E5E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#9E4A3B]">
            <span>4-STEP FOOLPROOF PREPARATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E2421]">
            {t.howItWorks.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5E6862]">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.stepNum}
                className="bg-[#F6F4EE] p-8 rounded-2xl border border-[#E5E0D4] space-y-4 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#9E4A3B] tracking-wider">
                    STEP {step.stepNum}
                  </span>
                  <div className="p-2.5 bg-[#EAE5D9] text-[#2D3A34] rounded-xl">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-2xl text-[#1E2421] tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5E6862] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
