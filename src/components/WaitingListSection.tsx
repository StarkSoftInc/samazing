import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';
import { Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WaitingListSection: React.FC = () => {
  const { language, submitPreOrderInterest, setLegalModalType } = useApp();
  const t = TRANSLATIONS[language];

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [interestType, setInterestType] = useState<'wishlist' | 'newsletter' | 'monthly_box' | 'complete_kit'>('newsletter');
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim() || !email.includes('@')) {
      setErrorMsg(language === 'DE' ? 'Bitte Vornamen und gültige E-Mail-Adresse eingeben.' : 'Please enter your first name and a valid email address.');
      return;
    }

    submitPreOrderInterest({
      firstName,
      email,
      interestType,
      marketingConsent,
      notes: 'Submitted via waiting list section',
    });

    setSubmitted(true);
    setErrorMsg('');
  };

  return (
    <section id="waiting-list" className="bg-[#2D3A34] text-[#F6F4EE] py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#3B4A43] text-[#D4A359] text-xs font-semibold rounded-full uppercase tracking-wider">
            <span>EARLY ACCESS & PRE-ORDER REGISTER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            {t.waitingList.title}
          </h2>
          <p className="text-sm sm:text-base text-[#C3CFC9] max-w-2xl mx-auto">
            {t.waitingList.subtitle}
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#3B4A43] p-8 sm:p-10 rounded-3xl border border-[#4E5E56] space-y-4 max-w-xl mx-auto animate-in zoom-in-95 duration-300">
            <div className="w-12 h-12 bg-[#D4A359] text-[#1E2421] rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">
              {language === 'DE' ? 'Bestätigungs-E-Mail gesendet!' : 'Confirmation Email Sent!'}
            </h3>
            <p className="text-sm text-[#F6F4EE] font-serif italic text-lg leading-relaxed">
              "{t.waitingList.successMessage}"
            </p>
            <p className="text-xs text-[#A6B5AF]">
              {language === 'DE'
                ? 'Wir haben eine Bestätigungs-E-Mail gesendet. Bitte bestätige deinen Eintrag, um auf die Warteliste zu gelangen.'
                : 'We have sent a double opt-in confirmation email. Please confirm your link to complete registration.'
              }
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#3B4A43] p-8 sm:p-10 rounded-3xl border border-[#4E5E56] space-y-6 max-w-xl mx-auto text-left shadow-2xl">
            {errorMsg && (
              <div className="p-3 bg-red-900/50 text-red-200 border border-red-700/50 rounded-xl text-xs font-medium">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4A359] mb-1.5">
                  {t.waitingList.firstNameLabel} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samanta"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#2D3A34] border border-[#4E5E56] rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D4A359] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4A359] mb-1.5">
                  {t.waitingList.emailLabel} *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. samanta@example.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#2D3A34] border border-[#4E5E56] rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D4A359] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4A359] mb-1.5">
                {t.waitingList.interestLabel}
              </label>
              <select
                value={interestType}
                onChange={(e) => setInterestType(e.target.value as any)}
                className="w-full px-4 py-3 bg-[#2D3A34] border border-[#4E5E56] rounded-xl text-sm text-white focus:outline-none focus:border-[#D4A359] transition-colors"
              >
                <option value="newsletter">General Early Launch Updates & Newsletter</option>
                <option value="monthly_box">Monthly Subscription Box (€35/mo)</option>
                <option value="complete_kit">Complete Starter Kit (€52.90)</option>
                <option value="wishlist">Pre-Order Single Pouches</option>
              </select>
            </div>

            {/* Separate, unselected marketing consent checkbox */}
            <div className="space-y-2 pt-2 border-t border-[#4E5E56]">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-[#4E5E56] bg-[#2D3A34] text-[#D4A359] focus:ring-0"
                />
                <span className="text-xs text-[#C3CFC9] leading-relaxed">
                  {t.waitingList.consentLabel}
                </span>
              </label>

              <p className="text-[11px] text-[#A6B5AF] pl-7">
                {language === 'DE' ? 'Datenschutzinformationen sind verlinkt. ' : 'Privacy information is linked. '}
                <button
                  type="button"
                  onClick={() => setLegalModalType('privacy')}
                  className="text-[#D4A359] underline hover:text-white"
                >
                  {t.footer.privacy}
                </button>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#9E4A3B] text-white font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-[#833B2E] transition-all shadow-md"
            >
              {t.waitingList.submitBtn}
            </button>

            <p className="text-[11px] text-[#A6B5AF] text-center font-serif italic">
              {language === 'DE'
                ? 'Hinweis: Der Gratis S\'Amazing Scoop wird erst bei der ersten bezahlten Bestellung ab 19 € im Checkout vergeben.'
                : 'Note: The free S\'Amazing Scoop is added automatically to the first 100 paid orders over €19 at launch checkout.'
              }
            </p>
          </form>
        )}

      </div>
    </section>
  );
};
