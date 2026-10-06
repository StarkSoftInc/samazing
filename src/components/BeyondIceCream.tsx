import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import chocoDreamImg from '../assets/images/flavour_choco_dream_1791293324689.jpg';
import mangoSunsetImg from '../assets/images/flavour_mango_sunset_1791293340114.jpg';
import pistachioGlowImg from '../assets/images/flavour_pistachio_glow_1791293351145.jpg';
import raspberryVelvetImg from '../assets/images/flavour_raspberry_velvet_1791293363922.jpg';

export const BeyondIceCream: React.FC = () => {
  const { language, setIsRecipesModalOpen } = useApp();
  const t = TRANSLATIONS[language];

  const formats = [
    {
      title: t.beyond.formatMousse,
      desc: language === 'DE' ? 'Sofort nach dem 2-Minuten-Aufschlagen als seidenweiche Mousse genießen.' : 'Enjoy immediately after 2 minutes of whipping as a silky soft mousse.',
      image: chocoDreamImg,
    },
    {
      title: t.beyond.formatGelato,
      desc: language === 'DE' ? '3 Stunden einfrieren für authentisch italienische Gelato-Festigkeit.' : 'Freeze for 3 hours for authentic Italian gelato firmness.',
      image: pistachioGlowImg,
    },
    {
      title: t.beyond.formatPopsicles,
      desc: language === 'DE' ? 'In Silikonformen füllen für proteinreiche Sommer-Popsicles.' : 'Pour into silicone moulds for high-protein summer popsicles.',
      image: mangoSunsetImg,
    },
    {
      title: t.beyond.formatShake,
      desc: language === 'DE' ? 'Mit etwas mehr kalter Proteinmilch zu einem luftigen Shake mixen.' : 'Blend with additional cold protein milk for a lofty silk shake.',
      image: raspberryVelvetImg,
    },
  ];

  return (
    <section className="bg-[#F6F4EE] py-20 border-b border-[#E5E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#9E4A3B]">
              <Sparkles className="w-4 h-4" />
              <span>MULTIFUNCTIONAL BASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E2421]">
              {t.beyond.title}
            </h2>
            <p className="text-sm sm:text-base text-[#5E6862]">
              {t.beyond.description}
            </p>
          </div>

          <button
            onClick={() => setIsRecipesModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#2D3A34] text-[#F6F4EE] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#1E2421] transition-colors shrink-0"
          >
            <span>{language === 'DE' ? 'Inspirierende Rezepte' : 'Explore Recipes'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Formats Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map((fmt, i) => (
            <div
              key={i}
              className="group bg-[#EAE5D9]/40 rounded-2xl border border-[#E5E0D4] overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#EAE5D9]">
                <img
                  src={fmt.image}
                  alt={fmt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif font-bold text-xl text-[#1E2421]">
                  {fmt.title}
                </h3>
                <p className="text-xs text-[#5E6862] leading-relaxed">
                  {fmt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
