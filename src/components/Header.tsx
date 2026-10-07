import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';
import { Heart, Menu, X, BarChart2 } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    language,
    setLanguage,
    wishlist,
    setIsWishlistDrawerOpen,
    setIsRecipesModalOpen,
    setIsAnalyticsOpen,
    version,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const totalWishlistCount = wishlist.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F6F4EE]/95 backdrop-blur-md border-b border-[#E5E0D4] transition-all">
      {/* Announcement Bar */}
      <div className="bg-[#2D3A34] text-[#F6F4EE] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="truncate">{t.banner.freeShipping}</span>
        <span className="hidden md:inline-block opacity-60 text-[10px] ml-2 pl-2 border-l border-[#45544C]">
          {version}
        </span>
      </div>

      {/* Top Bar Contract Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Title (Single Text Element) */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="text-xl sm:text-2xl font-serif font-semibold tracking-wider text-[#1E2421] hover:text-[#9E4A3B] transition-colors"
          >
            S'AMAZING NUTRITION
          </a>
        </div>

        {/* Zone 2: Clean Editorial Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#4A544F]">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="hover:text-[#1E2421] transition-colors hover:underline underline-offset-8 decoration-[#9E4A3B]"
          >
            {t.nav.home}
          </a>
          <a
            href="#flavours"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('flavours');
            }}
            className="hover:text-[#1E2421] transition-colors hover:underline underline-offset-8 decoration-[#9E4A3B]"
          >
            {t.nav.flavours}
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('how-it-works');
            }}
            className="hover:text-[#1E2421] transition-colors hover:underline underline-offset-8 decoration-[#9E4A3B]"
          >
            {t.nav.howItWorks}
          </a>
          <a
            href="#monthly-box"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('monthly-box');
            }}
            className="hover:text-[#1E2421] transition-colors hover:underline underline-offset-8 decoration-[#9E4A3B]"
          >
            {t.nav.monthlyBox}
          </a>
          <a
            href="#recipes"
            onClick={(e) => {
              e.preventDefault();
              setIsRecipesModalOpen(true);
            }}
            className="hover:text-[#1E2421] transition-colors hover:underline underline-offset-8 decoration-[#9E4A3B]"
          >
            {t.nav.recipes}
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className="hover:text-[#1E2421] transition-colors hover:underline underline-offset-8 decoration-[#9E4A3B]"
          >
            {t.nav.about}
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#EAE5D9] p-0.5 rounded-full text-xs font-semibold text-[#4A544F]">
            <button
              onClick={() => setLanguage('DE')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === 'DE'
                  ? 'bg-[#2D3A34] text-[#F6F4EE] shadow-sm'
                  : 'hover:text-[#1E2421]'
              }`}
              title="Deutsch (Hauptsprache)"
            >
              DE
            </button>
            <button
              onClick={() => setLanguage('EN')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === 'EN'
                  ? 'bg-[#2D3A34] text-[#F6F4EE] shadow-sm'
                  : 'hover:text-[#1E2421]'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Wishlist Drawer Button */}
          <button
            onClick={() => setIsWishlistDrawerOpen(true)}
            className="relative p-2 text-[#1E2421] hover:text-[#9E4A3B] transition-colors rounded-full hover:bg-[#EAE5D9]/60"
            aria-label="View Wishlist"
          >
            <Heart className="w-5 h-5 text-[#9E4A3B] fill-[#9E4A3B]/10" />
            {totalWishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#9E4A3B] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {totalWishlistCount}
              </span>
            )}
          </button>

          {/* Pre-Order Interest CTA */}
          <button
            onClick={() => scrollToSection('waiting-list')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-[#2D3A34] text-[#F6F4EE] rounded-full hover:bg-[#1E2421] transition-all shadow-sm"
          >
            {t.nav.interest}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1E2421] rounded-lg hover:bg-[#EAE5D9]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F6F4EE] border-b border-[#E5E0D4] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-serif text-lg text-[#1E2421]">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className="py-1 hover:text-[#9E4A3B]"
            >
              {t.nav.home}
            </a>
            <a
              href="#flavours"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('flavours');
              }}
              className="py-1 hover:text-[#9E4A3B]"
            >
              {t.nav.flavours}
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('how-it-works');
              }}
              className="py-1 hover:text-[#9E4A3B]"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#monthly-box"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('monthly-box');
              }}
              className="py-1 hover:text-[#9E4A3B]"
            >
              {t.nav.monthlyBox}
            </a>
            <a
              href="#recipes"
              onClick={(e) => {
                e.preventDefault();
                setIsRecipesModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="py-1 hover:text-[#9E4A3B]"
            >
              {t.nav.recipes}
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="py-1 hover:text-[#9E4A3B]"
            >
              {t.nav.about}
            </a>
          </div>

          <div className="pt-4 border-t border-[#E5E0D4] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsAnalyticsOpen(true);
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#EAE5D9] text-[#2D3A34] text-xs font-semibold rounded-full"
            >
              <BarChart2 className="w-4 h-4 text-[#2D3A34]" />
              <span>Merchant Interest Analytics</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection('waiting-list');
              }}
              className="w-full py-3 bg-[#2D3A34] text-[#F6F4EE] text-xs font-semibold uppercase tracking-wider rounded-full"
            >
              {t.nav.interest}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
