import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, ProductId, WishlistItem, PreOrderInterest, AnalyticsEvent } from '../types';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  wishlist: WishlistItem[];
  addToWishlist: (productId: ProductId, quantity?: number, flavorSelections?: Record<string, number>) => void;
  removeFromWishlist: (productId: ProductId) => void;
  updateWishlistQuantity: (productId: ProductId, quantity: number) => void;
  clearWishlist: () => void;
  selectedProductModal: ProductId | null;
  setSelectedProductModal: (id: ProductId | null) => void;
  isWishlistDrawerOpen: boolean;
  setIsWishlistDrawerOpen: (open: boolean) => void;
  isRecipesModalOpen: boolean;
  setIsRecipesModalOpen: (open: boolean) => void;
  activeRecipeId: string | null;
  setActiveRecipeId: (id: string | null) => void;
  legalModalType: string | null;
  setLegalModalType: (type: string | null) => void;
  isAppGuideOpen: boolean;
  setIsAppGuideOpen: (open: boolean) => void;
  isAutotestOpen: boolean;
  setIsAutotestOpen: (open: boolean) => void;
  isAnalyticsOpen: boolean;
  setIsAnalyticsOpen: (open: boolean) => void;
  preOrderInterests: PreOrderInterest[];
  submitPreOrderInterest: (data: { firstName: string; email: string; interestType: PreOrderInterest['interestType']; marketingConsent: boolean; notes?: string }) => void;
  analyticsEvents: AnalyticsEvent[];
  logAnalyticsEvent: (eventName: string, payload?: Record<string, unknown>) => void;
  version: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY_WISHLIST = 'samazing_wishlist_v1';
const STORAGE_KEY_INTERESTS = 'samazing_interests_v1';
const STORAGE_KEY_ANALYTICS = 'samazing_analytics_v1';
const STORAGE_KEY_LANG = 'samazing_lang_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_LANG);
    return (saved === 'EN' || saved === 'DE') ? saved : 'DE'; // German is primary according to handoff
  });

  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_WISHLIST);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [preOrderInterests, setPreOrderInterests] = useState<PreOrderInterest[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_INTERESTS);
      return saved ? JSON.parse(saved) : [
        {
          id: 'int_sample_1',
          firstName: 'Elena',
          email: 'elena.muller@example.de',
          interestType: 'monthly_box',
          items: [{ productId: 'monthly-box', quantity: 1, addedAt: new Date().toISOString() }],
          marketingConsent: true,
          notes: 'Looking forward to Milky Moon and Pistachio Glow!',
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        },
        {
          id: 'int_sample_2',
          firstName: 'Marcus',
          email: 'marcus.s@example.com',
          interestType: 'complete_kit',
          items: [{ productId: 'complete-kit', quantity: 1, addedAt: new Date().toISOString() }],
          marketingConsent: true,
          notes: 'Interested in early launch access in Munich.',
          createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
        }
      ];
    } catch {
      return [];
    }
  });

  const [analyticsEvents, setAnalyticsEvents] = useState<AnalyticsEvent[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ANALYTICS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedProductModal, setSelectedProductModal] = useState<ProductId | null>(null);
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState<boolean>(false);
  const [isRecipesModalOpen, setIsRecipesModalOpen] = useState<boolean>(false);
  const [activeRecipeId, setActiveRecipeId] = useState<string | null>(null);
  const [legalModalType, setLegalModalType] = useState<string | null>(null);
  const [isAppGuideOpen, setIsAppGuideOpen] = useState<boolean>(false);
  const [isAutotestOpen, setIsAutotestOpen] = useState<boolean>(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState<boolean>(false);

  const version = 'FlashLearn v 1.0.0';

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_LANG, language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_WISHLIST, JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_INTERESTS, JSON.stringify(preOrderInterests));
  }, [preOrderInterests]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_ANALYTICS, JSON.stringify(analyticsEvents.slice(-100)));
  }, [analyticsEvents]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    logAnalyticsEvent('language_switched', { language: lang });
  };

  const logAnalyticsEvent = (eventName: string, payload: Record<string, unknown> = {}) => {
    const event: AnalyticsEvent = {
      id: `evt_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      eventName,
      payload,
      timestamp: new Date().toISOString(),
    };
    setAnalyticsEvents(prev => [event, ...prev]);
  };

  const addToWishlist = (productId: ProductId, quantity = 1, flavorSelections?: Record<string, number>) => {
    setWishlist(prev => {
      const existingIndex = prev.findIndex(item => item.productId === productId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          flavorSelections: flavorSelections || updated[existingIndex].flavorSelections,
        };
        return updated;
      }
      return [
        ...prev,
        {
          productId,
          quantity,
          flavorSelections,
          addedAt: new Date().toISOString(),
        }
      ];
    });
    logAnalyticsEvent('wishlist_add_item', { productId, quantity, flavorSelections });
  };

  const removeFromWishlist = (productId: ProductId) => {
    setWishlist(prev => prev.filter(item => item.productId !== productId));
    logAnalyticsEvent('wishlist_remove_item', { productId });
  };

  const updateWishlistQuantity = (productId: ProductId, quantity: number) => {
    if (quantity <= 0) {
      removeFromWishlist(productId);
      return;
    }
    setWishlist(prev =>
      prev.map(item => (item.productId === productId ? { ...item, quantity } : item))
    );
    logAnalyticsEvent('wishlist_update_quantity', { productId, quantity });
  };

  const clearWishlist = () => {
    setWishlist([]);
    logAnalyticsEvent('wishlist_cleared');
  };

  const submitPreOrderInterest = (data: {
    firstName: string;
    email: string;
    interestType: PreOrderInterest['interestType'];
    marketingConsent: boolean;
    notes?: string;
  }) => {
    const newInterest: PreOrderInterest = {
      id: `interest_${Date.now()}`,
      firstName: data.firstName,
      email: data.email,
      interestType: data.interestType,
      items: [...wishlist],
      marketingConsent: data.marketingConsent,
      notes: data.notes,
      createdAt: new Date().toISOString(),
    };
    setPreOrderInterests(prev => [newInterest, ...prev]);
    logAnalyticsEvent('pre_order_interest_submitted', {
      email: data.email,
      interestType: data.interestType,
      itemCount: wishlist.length,
    });
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        updateWishlistQuantity,
        clearWishlist,
        selectedProductModal,
        setSelectedProductModal,
        isWishlistDrawerOpen,
        setIsWishlistDrawerOpen,
        isRecipesModalOpen,
        setIsRecipesModalOpen,
        activeRecipeId,
        setActiveRecipeId,
        legalModalType,
        setLegalModalType,
        isAppGuideOpen,
        setIsAppGuideOpen,
        isAutotestOpen,
        setIsAutotestOpen,
        isAnalyticsOpen,
        setIsAnalyticsOpen,
        preOrderInterests,
        submitPreOrderInterest,
        analyticsEvents,
        logAnalyticsEvent,
        version,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
