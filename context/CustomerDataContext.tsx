import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { CookieManager, CustomerData, CookieConsent } from '../utils/cookies';

interface CustomerDataContextType {
  customerData: CustomerData | null;
  hasConsent: boolean;
  consentDetails: CookieConsent | null;
  trackPageView: (page: string) => void;
  trackProductView: (productId: string) => void;
  trackSolutionInterest: (solutionId: string) => void;
  trackContactFormSubmission: () => void;
  updateLanguagePreference: (language: string) => void;
  exportCustomerData: () => string;
  clearCustomerData: () => void;
  refreshCustomerData: () => void;
}

const CustomerDataContext = createContext<CustomerDataContextType | undefined>(undefined);

interface CustomerDataProviderProps {
  children: ReactNode;
}

export const CustomerDataProvider: React.FC<CustomerDataProviderProps> = ({ children }) => {
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);
  const [hasConsent, setHasConsent] = useState(false);
  const [consentDetails, setConsentDetails] = useState<CookieConsent | null>(null);
  const [sessionStartTime, setSessionStartTime] = useState<number>(Date.now());

  // Initialize customer data tracking
  useEffect(() => {
    const initializeTracking = () => {
      const consent = CookieManager.hasConsent();
      const details = CookieManager.getConsentDetails();
      
      setHasConsent(consent);
      setConsentDetails(details);

      if (consent) {
        // Initialize customer tracking
        CookieManager.initializeCustomerTracking();
        
        // Generate session ID if needed
        CookieManager.getSessionId();
        
        // Track initial page view
        const currentPage = window.location.pathname || 'home';
        CookieManager.trackPageView(currentPage);
        
        // Set session start time
        setSessionStartTime(Date.now());
      }

      // Load customer data
      refreshCustomerData();
    };

    initializeTracking();

    // Track time on site
    const timeTracker = setInterval(() => {
      if (hasConsent && sessionStartTime) {
        const timeOnSite = Math.floor((Date.now() - sessionStartTime) / 1000);
        CookieManager.setCookie('time_on_site', timeOnSite.toString(), 30);
      }
    }, 30000); // Update every 30 seconds

    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (hasConsent && !document.hidden) {
        setSessionStartTime(Date.now());
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(timeTracker);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [hasConsent, sessionStartTime]);

  // Track page changes
  useEffect(() => {
    if (!hasConsent) return;

    const currentPage = window.location.pathname || 'home';
    CookieManager.trackPageView(currentPage);
    refreshCustomerData();
  }, [hasConsent, window.location.pathname]);

  const trackPageView = (page: string) => {
    if (!hasConsent) return;
    
    CookieManager.trackPageView(page);
    refreshCustomerData();
  };

  const trackProductView = (productId: string) => {
    if (!hasConsent) return;
    
    CookieManager.trackProductView(productId);
    refreshCustomerData();
  };

  const trackSolutionInterest = (solutionId: string) => {
    if (!hasConsent) return;
    
    CookieManager.trackSolutionInterest(solutionId);
    refreshCustomerData();
  };

  const trackContactFormSubmission = () => {
    if (!hasConsent) return;
    
    CookieManager.trackContactFormSubmission();
    refreshCustomerData();
  };

  const updateLanguagePreference = (language: string) => {
    if (!hasConsent) return;
    
    CookieManager.setCookie('language_preference', language, 365);
    refreshCustomerData();
  };

  const exportCustomerData = (): string => {
    return CookieManager.exportCustomerData();
  };

  const clearCustomerData = () => {
    CookieManager.clearAllCookies();
    setCustomerData(null);
    setHasConsent(false);
    setConsentDetails(null);
  };

  const refreshCustomerData = () => {
    if (CookieManager.hasConsent()) {
      const data = CookieManager.getCustomerData();
      setCustomerData(data);
    }
  };

  const contextValue: CustomerDataContextType = {
    customerData,
    hasConsent,
    consentDetails,
    trackPageView,
    trackProductView,
    trackSolutionInterest,
    trackContactFormSubmission,
    updateLanguagePreference,
    exportCustomerData,
    clearCustomerData,
    refreshCustomerData
  };

  return (
    <CustomerDataContext.Provider value={contextValue}>
      {children}
    </CustomerDataContext.Provider>
  );
};

export const useCustomerData = (): CustomerDataContextType => {
  const context = useContext(CustomerDataContext);
  if (context === undefined) {
    throw new Error('useCustomerData must be used within a CustomerDataProvider');
  }
  return context;
};

// Custom hook for tracking specific events
export const useCustomerTracking = () => {
  const { trackPageView, trackProductView, trackSolutionInterest, trackContactFormSubmission } = useCustomerData();

  return {
    trackPageView,
    trackProductView,
    trackSolutionInterest,
    trackContactFormSubmission
  };
};

// Custom hook for customer data analytics
export const useCustomerAnalytics = () => {
  const { customerData, hasConsent, exportCustomerData } = useCustomerData();

  const getAnalyticsSummary = () => {
    if (!customerData) return null;

    return {
      totalVisits: customerData.visitCount,
      pageViews: customerData.pageViews.length,
      productViews: customerData.productViews.length,
      solutionInterests: customerData.solutionInterests.length,
      contactSubmissions: customerData.contactFormSubmissions,
      timeOnSite: customerData.timeOnSite,
      deviceType: customerData.deviceType,
      browser: customerData.browser,
      referrer: customerData.referrer,
      utmSource: customerData.utmSource,
      utmMedium: customerData.utmMedium,
      utmCampaign: customerData.utmCampaign,
      languagePreference: customerData.languagePreference
    };
  };

  const getPopularPages = () => {
    if (!customerData) return [];

    const pageCounts: { [key: string]: number } = {};
    customerData.pageViews.forEach((view: any) => {
      pageCounts[view.page] = (pageCounts[view.page] || 0) + 1;
    });

    return Object.entries(pageCounts)
      .map(([page, count]) => ({ page, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  };

  const getPopularProducts = () => {
    if (!customerData) return [];

    const productCounts: { [key: string]: number } = {};
    customerData.productViews.forEach((view: any) => {
      productCounts[view.productId] = (productCounts[view.productId] || 0) + 1;
    });

    return Object.entries(productCounts)
      .map(([productId, count]) => ({ productId, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  };

  const getPopularSolutions = () => {
    if (!customerData) return [];

    const solutionCounts: { [key: string]: number } = {};
    customerData.solutionInterests.forEach((interest: any) => {
      solutionCounts[interest.solutionId] = (solutionCounts[interest.solutionId] || 0) + 1;
    });

    return Object.entries(solutionCounts)
      .map(([solutionId, count]) => ({ solutionId, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  };

  return {
    customerData,
    hasConsent,
    getAnalyticsSummary,
    getPopularPages,
    getPopularProducts,
    getPopularSolutions,
    exportCustomerData
  };
};
