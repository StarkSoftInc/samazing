import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: {
        EN: 'Do I need an ice cream machine or Ninja Creami?',
        DE: 'Brauche ich eine Eismaschine oder ein spezielles Küchengerät?',
      },
      a: {
        EN: 'No! S\'AMAZING is specifically formulated to eliminate the need for expensive ice cream makers. A standard handheld electric mixer or frother whips the egg-white base into a voluminous foam in 2 minutes.',
        DE: 'Nein! S\'AMAZING wurde speziell entwickelt, damit du keine teure Eismaschine brauchst. Ein ganz normaler Handmixer schlägt das Eiklar-Proteinpulver in 2 Minuten auf.',
      },
    },
    {
      q: {
        EN: 'What liquid works best for preparation?',
        DE: 'Welche Flüssigkeit eignet sich am besten?',
      },
      a: {
        EN: 'Cold water gives a light, sorbet-like gelato texture at ~204 kcal. Unsweetened almond milk, skimmed milk, or our 75g Protein Milk UHT create an ultra-creamy, richer dessert texture.',
        DE: 'Kaltes Wasser liefert eine erfrischende Gelato-Struktur mit nur ~204 kcal. Pflanzendrinks, Mager- oder Proteinmilch machen das Ergebnis noch cremiger.',
      },
    },
    {
      q: {
        EN: 'How long should I freeze it, and what about overnight freezing?',
        DE: 'Wie lange muss das Dessert einfrieren?',
      },
      a: {
        EN: 'Freeze for 3 hours for ideal gelato scoopability. If left in the freezer overnight, simply allow it to rest on the counter for 5 minutes before scooping.',
        DE: '3 Stunden Einfrieren sind ideal für cremige Löffelbarkeit. Wenn es über Nacht im Tiefkühler steht, einfach 5 Minuten bei Raumtemperatur antauen lassen.',
      },
    },
    {
      q: {
        EN: 'Are there any allergens in S\'AMAZING products?',
        DE: 'Welche Allergene sind enthalten?',
      },
      a: {
        EN: 'All 5 flavours contain Egg and Milk proteins. Pistachio Glow contains real Bronte pistachio nuts. Detailed ingredient tables are listed on each product page.',
        DE: 'Alle 5 Sorten enthalten Ei- und Milchproteine. Pistachio Glow enthält echte Pistazien. Die genauen Zutaten findest du auf jeder Produktseite.',
      },
    },
    {
      q: {
        EN: 'How does the Monthly Box subscription work?',
        DE: 'Wie funktioniert das Monats-Box Abo?',
      },
      a: {
        EN: 'Choose 10 pouches and pay for 9 (€35/month). Before each monthly renewal, you can change your flavour selection, pause, skip, or cancel in your account with 1 click.',
        DE: 'Wähle 10 Pouches und bezahle nur 9 (35 €/Monat). Vor jeder Verlängerung kannst du die Sortenauswahl anpassen, pausieren oder mit 1 Klick kündigen.',
      },
    },
    {
      q: {
        EN: 'When will orders ship and what are the shipping rules?',
        DE: 'Wann wird geliefert und wie hoch sind die Versandkosten?',
      },
      a: {
        EN: 'We ship across EU & UK via DHL Climate Neutral. Standard shipping is €4.90, and FREE for orders over €50. Pre-order registrants receive priority dispatch on launch day.',
        DE: 'Wir versenden EU-weit klimaneutral mit DHL. Der Standardversand beträgt 4,90 € und ist ab 50 € versandkostenfrei. Vorbestellungen werden am Launch-Tag bevorzugt versendet.',
      },
    },
  ];

  return (
    <section className="bg-[#F6F4EE] py-20 border-b border-[#E5E0D4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#9E4A3B]">
            <HelpCircle className="w-4 h-4" />
            <span>CLEAR ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E2421]">
            {t.faq.title}
          </h2>
          <p className="text-sm text-[#5E6862]">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#EAE5D9]/40 rounded-2xl border border-[#E5E0D4] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-serif font-bold text-lg text-[#1E2421] hover:text-[#9E4A3B] transition-colors"
                >
                  <span>{faq.q[language]}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#9E4A3B] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#5E6862] leading-relaxed border-t border-[#E5E0D4]/60 pt-4 animate-in fade-in duration-200">
                    {faq.a[language]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
