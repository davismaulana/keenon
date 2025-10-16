import React, { useState, useEffect } from 'react';
import { CookieManager, CookieConsent } from '../utils/cookies';
import { useContent } from '../context/LanguageContext';

interface CookieConsentProps {
  onConsentChange?: (consent: boolean) => void;
}

const CookieConsentBanner: React.FC<CookieConsentProps> = ({ onConsentChange }) => {
  const { content } = useContent();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consentSettings, setConsentSettings] = useState<CookieConsent>({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
    preferences: false,
    date: '',
    version: '1.0'
  });

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = CookieManager.hasConsent();
    if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      date: new Date().toISOString(),
      version: '1.0'
    };
    
    CookieManager.setConsent(consent);
    CookieManager.initializeCustomerTracking();
    setShowBanner(false);
    onConsentChange?.(true);
  };

  const handleAcceptNecessary = () => {
    const consent: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
      date: new Date().toISOString(),
      version: '1.0'
    };
    
    CookieManager.setConsent(consent);
    setShowBanner(false);
    onConsentChange?.(true);
  };

  const handleSaveSettings = () => {
    const consent: CookieConsent = {
      ...consentSettings,
      date: new Date().toISOString(),
      version: '1.0'
    };
    
    CookieManager.setConsent(consent);
    if (consent.analytics || consent.marketing || consent.preferences) {
      CookieManager.initializeCustomerTracking();
    }
    setShowBanner(false);
    setShowSettings(false);
    onConsentChange?.(true);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-trust-navy border-t border-corporate-gold shadow-2xl">
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">Cookie Consent</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, 
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
              <div className="mt-2 text-xs text-gray-400">
                <a href="#cookie-settings" className="text-corporate-gold hover:underline">
                  Cookie Settings
                </a>
                {' • '}
                <a href="/privacy-policy" className="text-corporate-gold hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm font-medium text-gray-300 bg-transparent border border-gray-600 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
              >
                Settings
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="px-4 py-2 text-sm font-medium text-gray-300 bg-transparent border border-gray-600 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
              >
                Necessary Only
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 text-sm font-medium text-white bg-corporate-gold rounded-lg hover:bg-corporate-gold/80 transition-colors font-semibold"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-trust-navy rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Cookie Settings</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="border-b border-gray-700 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Necessary Cookies</h3>
                    <div className="bg-corporate-gold text-black px-2 py-1 rounded text-xs font-semibold">
                      Always Active
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    These cookies are essential for the website to function properly. They enable basic functions 
                    like page navigation, access to secure areas, and remember your cookie preferences.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border-b border-gray-700 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consentSettings.analytics}
                        onChange={(e) => setConsentSettings(prev => ({ ...prev, analytics: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-corporate-gold/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-corporate-gold"></div>
                    </label>
                  </div>
                  <p className="text-gray-300 text-sm">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously. This helps us improve our website performance.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border-b border-gray-700 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Marketing Cookies</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consentSettings.marketing}
                        onChange={(e) => setConsentSettings(prev => ({ ...prev, marketing: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-corporate-gold/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-corporate-gold"></div>
                    </label>
                  </div>
                  <p className="text-gray-300 text-sm">
                    These cookies are used to track visitors across websites. The intention is to display 
                    ads that are relevant and engaging for individual users.
                  </p>
                </div>

                {/* Preferences Cookies */}
                <div className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Preference Cookies</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consentSettings.preferences}
                        onChange={(e) => setConsentSettings(prev => ({ ...prev, preferences: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-corporate-gold/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-corporate-gold"></div>
                    </label>
                  </div>
                  <p className="text-gray-300 text-sm">
                    These cookies enable the website to remember choices you make (such as your username, 
                    language, or region) and provide enhanced, more personal features.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 px-4 py-3 text-sm font-medium text-gray-300 bg-transparent border border-gray-600 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveSettings}
                  className="flex-1 px-6 py-3 text-sm font-medium text-white bg-corporate-gold rounded-lg hover:bg-corporate-gold/80 transition-colors font-semibold"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentBanner;
