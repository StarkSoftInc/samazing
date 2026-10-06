import React from 'react';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickProof } from './components/QuickProof';
import { Transformation } from './components/Transformation';
import { FlavoursGrid } from './components/FlavoursGrid';
import { HowItWorks } from './components/HowItWorks';
import { BeyondIceCream } from './components/BeyondIceCream';
import { ScienceTexture } from './components/ScienceTexture';
import { RecipesSection } from './components/RecipesSection';
import { First100Orders } from './components/First100Orders';
import { LaunchBoxSection } from './components/LaunchBoxSection';
import { MonthlyBoxBuilder } from './components/MonthlyBoxBuilder';
import { AccessoriesSection } from './components/AccessoriesSection';
import { AboutSamanta } from './components/AboutSamanta';
import { FaqSection } from './components/FaqSection';
import { WaitingListSection } from './components/WaitingListSection';
import { Footer } from './components/Footer';

// Modals & Drawers
import { ProductDetailModal } from './components/ProductDetailModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { RecipesHubModal } from './components/RecipesHubModal';
import { LegalModal } from './components/LegalModal';
import { InterestAnalyticsModal } from './components/InterestAnalyticsModal';
import { AppGuideModal } from './components/AppGuideModal';
import { AutotestRunnerModal } from './components/AutotestRunnerModal';

export function MainAppContent() {
  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#1E2421] font-sans antialiased flex flex-col justify-between selection:bg-[#2D3A34] selection:text-[#F6F4EE]">
      {/* Header with Top Bar Contract */}
      <Header />

      {/* Main 16 Sections in Agreed PDF Order */}
      <main className="flex-1">
        {/* 1. HERO */}
        <Hero />

        {/* 2. QUICK PROOF */}
        <QuickProof />

        {/* 3. TRANSFORMATION */}
        <Transformation />

        {/* 4. FLAVOURS */}
        <FlavoursGrid />

        {/* 5. HOW IT WORKS */}
        <HowItWorks />

        {/* 6. BEYOND THE ICE CREAM */}
        <BeyondIceCream />

        {/* 7. SCIENCE + TEXTURE */}
        <ScienceTexture />

        {/* 8. RECIPES PREVIEW */}
        <RecipesSection />

        {/* 9. FIRST 100 ORDERS */}
        <First100Orders />

        {/* 10. LAUNCH BOX */}
        <LaunchBoxSection />

        {/* 11. MONTHLY BOX / SUBSCRIPTION BUILDER */}
        <MonthlyBoxBuilder />

        {/* 12. COMPLETE KIT + ACCESSORIES */}
        <AccessoriesSection />

        {/* 13. ABOUT SAMANTA */}
        <AboutSamanta />

        {/* 14. FAQ */}
        <FaqSection />

        {/* 15. NEWSLETTER / WAITING LIST */}
        <WaitingListSection />
      </main>

      {/* 16. FOOTER */}
      <Footer />

      {/* Interactive Modals & Drawers */}
      <ProductDetailModal />
      <WishlistDrawer />
      <RecipesHubModal />
      <LegalModal />
      <InterestAnalyticsModal />
      <AppGuideModal />
      <AutotestRunnerModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
