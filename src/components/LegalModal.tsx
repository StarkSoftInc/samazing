import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';
import { X, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

export const LegalModal: React.FC = () => {
  const { language, legalModalType, setLegalModalType } = useApp();
  const t = TRANSLATIONS[language];

  if (!legalModalType) return null;

  const renderContent = () => {
    switch (legalModalType) {
      case 'impressum':
        return (
          <div className="space-y-4 text-xs text-[#4A544F] leading-relaxed">
            <h3 className="text-xl font-serif font-bold text-[#1E2421]">Impressum (Anbieterkennzeichnung)</h3>
            <p><strong>Angaben gemäß § 5 TMG:</strong></p>
            <p>S'AMAZING NUTRITION GmbH<br />Maximilianstraße 35<br />80539 München, Deutschland</p>
            <p><strong>Vertreten durch:</strong><br />Samanta (Gründerin & Geschäftsführerin)</p>
            <p><strong>Kontakt:</strong><br />E-Mail: info@samazingnutrition.com<br />Telefon: +49 (0) 89 1234 5678</p>
            <p><strong>Registereintrag:</strong><br />Eintragung im Handelsregister.<br />Registergericht: Amtsgericht München<br />Registernummer: HRB 284920</p>
            <p><strong>Umsatzsteuer-ID:</strong><br />Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE394810293</p>
            <p><strong>EU-Streitschlichtung:</strong><br />Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.</p>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-4 text-xs text-[#4A544F] leading-relaxed">
            <h3 className="text-xl font-serif font-bold text-[#1E2421]">Datenschutzerklärung / Privacy Policy</h3>
            <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.</p>
            <p><strong>1. Datenerfassung auf unserer Website:</strong><br />Die Datennutzung erfolgt zur Kontaktaufnahme, Wartelisten-Registrierung und Vorbestellungs-Abwicklung. Marketing-Einwilligungen sind freiwillig und werden per Double Opt-In verifiziert.</p>
            <p><strong>2. Ihre Rechte:</strong><br />Sie haben jederzeit das Recht auf kostenfreie Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.</p>
          </div>
        );

      case 'agb':
        return (
          <div className="space-y-4 text-xs text-[#4A544F] leading-relaxed">
            <h3 className="text-xl font-serif font-bold text-[#1E2421]">Allgemeine Geschäftsbedingungen (AGB)</h3>
            <p><strong>§ 1 Geltungsbereich:</strong><br />Für die Geschäftsbeziehungen zwischen der S'AMAZING NUTRITION GmbH und dem Kunden gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.</p>
            <p><strong>§ 2 Mindestbestellwert & Vorbestellungen:</strong><br />Der Mindestbestellwert im Shop beträgt 19,00 €. Bei Vorbestellungen über die Wunschliste entsteht eine unverbindliche Interessensbekundung bis zum offiziellen Verkaufsstart.</p>
            <p><strong>§ 3 Gratis-Beigabe (Erste 100 Bestellungen):</strong><br />Der S'Amazing Gold-Löffel im Wert von 6,90 € wird den ersten 100 bezahlten Bestellungen ab 19 € Mindestbestellwert automatisch im Warenkorb hinzugefügt.</p>
          </div>
        );

      case 'withdrawal':
        return (
          <div className="space-y-4 text-xs text-[#4A544F] leading-relaxed">
            <h3 className="text-xl font-serif font-bold text-[#1E2421]">Widerrufsbelehrung & Muster-Widerrufsformular</h3>
            <p><strong>Widerrufsrecht:</strong><br />Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben.</p>
            <p><strong>Ausschluss des Widerrufsrechts:</strong><br />Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde.</p>
          </div>
        );

      case 'shipping':
        return (
          <div className="space-y-4 text-xs text-[#4A544F] leading-relaxed">
            <h3 className="text-xl font-serif font-bold text-[#1E2421]">Versand & Lieferung (DHL Climate Neutral)</h3>
            <p><strong>Lieferländer:</strong> Deutschland, Österreich, Italien, Schweiz, EU-Länder.</p>
            <p><strong>Versandkosten:</strong><br />• Deutschland & Österreich: 4,90 € (Kostenfrei ab 50 € Bestellwert)<br />• Restliche EU: 8,90 €</p>
            <p><strong>Lieferzeiten:</strong> 2-4 Werktage ab Versandbestätigung.</p>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-4 text-xs text-[#4A544F] leading-relaxed">
            <h3 className="text-xl font-serif font-bold text-[#1E2421]">Kontakt & Kundenservice</h3>
            <p>Haben Sie Fragen zu unseren Produkten, Inhaltsstoffen oder Ihrer Bestellung? Unser Team antwortet Ihnen innerhalb von 24 Stunden.</p>
            <div className="p-4 bg-[#EAE5D9]/50 rounded-xl space-y-2 border border-[#E5E0D4]">
              <p className="flex items-center gap-2 font-semibold text-[#1E2421]">
                <Mail className="w-4 h-4 text-[#9E4A3B]" />
                <span>info@samazingnutrition.com</span>
              </p>
              <p className="flex items-center gap-2 font-semibold text-[#1E2421]">
                <Phone className="w-4 h-4 text-[#9E4A3B]" />
                <span>+49 (0) 89 1234 5678 (Mo-Fr 09:00 - 17:00 Uhr)</span>
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#F6F4EE] rounded-3xl border border-[#E5E0D4] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-left my-8">
        <button
          onClick={() => setLegalModalType(null)}
          className="absolute top-6 right-6 p-2 text-[#1E2421] bg-[#EAE5D9] hover:bg-[#DED7C7] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {renderContent()}

        <div className="pt-6 mt-6 border-t border-[#E5E0D4] flex justify-end">
          <button
            onClick={() => setLegalModalType(null)}
            className="px-6 py-2 bg-[#2D3A34] text-white text-xs font-semibold rounded-full"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
