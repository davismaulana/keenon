import React, { useState, useEffect } from 'react';
import { CookieManager, CookieConsent, CustomerData } from '../utils/cookies';
import { useCustomerData, useCustomerAnalytics } from '../context/CustomerDataContext';

interface CookieSettingsProps {
  onClose?: () => void;
}

const CookieSettings: React.FC<CookieSettingsProps> = ({ onClose }) => {
  const { customerData, hasConsent, clearCustomerData } = useCustomerData();
  const { getAnalyticsSummary, getPopularPages, getPopularProducts, getPopularSolutions, exportCustomerData } = useCustomerAnalytics();
  const [consentSettings, setConsentSettings] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
    date: '',
    version: '1.0'
  });
  const [showDataExport, setShowDataExport] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    const existingConsent = CookieManager.getConsentDetails();
    if (existingConsent) {
      setConsentSettings(existingConsent);
    }
  }, []);

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
    
    if (onClose) onClose();
    window.location.reload(); // Reload to apply new settings
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all your data? This action cannot be undone.')) {
      clearCustomerData();
      if (onClose) onClose();
      window.location.reload();
    }
  };

  const handleExportData = () => {
    const data = exportCustomerData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `customer-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const analyticsSummary = getAnalyticsSummary();
  const popularPages = getPopularPages();
  const popularProducts = getPopularProducts();
  const popularSolutions = getPopularSolutions();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-trust-navy rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Cookie & Privacy Settings</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-8">
            {/* Cookie Consent Settings */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Cookie Preferences</h3>
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="border-b border-gray-700 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium text-white">Necessary Cookies</h4>
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
                    <h4 className="text-lg font-medium text-white">Analytics Cookies</h4>
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
                    <h4 className="text-lg font-medium text-white">Marketing Cookies</h4>
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
                    <h4 className="text-lg font-medium text-white">Preference Cookies</h4>
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
            </div>

            {/* Data Management */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Your Data</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setShowDataExport(true)}
                  className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-600 transition-colors"
                >
                  <h4 className="text-white font-medium mb-2">Export Your Data</h4>
                  <p className="text-gray-400 text-sm">Download all your stored data in JSON format</p>
                </button>
                <button
                  onClick={() => setShowAnalytics(true)}
                  className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-600 transition-colors"
                >
                  <h4 className="text-white font-medium mb-2">View Analytics</h4>
                  <p className="text-gray-400 text-sm">See your browsing behavior and preferences</p>
                </button>
              </div>
              
              <div className="mt-4">
                <button
                  onClick={handleClearData}
                  className="p-4 bg-red-900/50 hover:bg-red-800/50 rounded-lg border border-red-700 transition-colors w-full"
                >
                  <h4 className="text-red-300 font-medium mb-2">Clear All Data</h4>
                  <p className="text-red-400 text-sm">Remove all cookies and stored data (cannot be undone)</p>
                </button>
              </div>
            </div>

            {/* Data Export Modal */}
            {showDataExport && (
              <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-70 p-4">
                <div className="bg-trust-navy rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">Export Your Data</h3>
                      <button
                        onClick={() => setShowDataExport(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg mb-4">
                      <pre className="text-gray-300 text-sm overflow-x-auto">
                        {exportCustomerData()}
                      </pre>
                    </div>
                    <button
                      onClick={handleExportData}
                      className="w-full px-4 py-2 bg-corporate-gold text-black font-semibold rounded-lg hover:bg-corporate-gold/80 transition-colors"
                    >
                      Download JSON File
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Analytics Modal */}
            {showAnalytics && analyticsSummary && (
              <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-70 p-4">
                <div className="bg-trust-navy rounded-lg shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-white">Your Analytics</h3>
                      <button
                        onClick={() => setShowAnalytics(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Summary Stats */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Summary</h4>
                        <div className="bg-gray-900 p-4 rounded-lg space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Total Visits:</span>
                            <span className="text-white">{analyticsSummary.totalVisits}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Page Views:</span>
                            <span className="text-white">{analyticsSummary.pageViews}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Product Views:</span>
                            <span className="text-white">{analyticsSummary.productViews}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Contact Submissions:</span>
                            <span className="text-white">{analyticsSummary.contactSubmissions}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Time on Site:</span>
                            <span className="text-white">{Math.floor(analyticsSummary.timeOnSite / 60)}m {analyticsSummary.timeOnSite % 60}s</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Device:</span>
                            <span className="text-white capitalize">{analyticsSummary.deviceType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Browser:</span>
                            <span className="text-white">{analyticsSummary.browser}</span>
                          </div>
                        </div>
                      </div>

                      {/* Popular Pages */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Popular Pages</h4>
                        <div className="bg-gray-900 p-4 rounded-lg space-y-2">
                          {popularPages.length > 0 ? (
                            popularPages.slice(0, 5).map((page, index) => (
                              <div key={index} className="flex justify-between">
                                <span className="text-gray-400">{page.page}</span>
                                <span className="text-white">{page.count}</span>
                              </div>
                            ))
                          ) : (
                            <p className="text-gray-400">No page view data available</p>
                          )}
                        </div>
                      </div>

                      {/* Popular Products */}
                      {popularProducts.length > 0 && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-white">Popular Products</h4>
                          <div className="bg-gray-900 p-4 rounded-lg space-y-2">
                            {popularProducts.slice(0, 5).map((product, index) => (
                              <div key={index} className="flex justify-between">
                                <span className="text-gray-400">{product.productId}</span>
                                <span className="text-white">{product.count}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Popular Solutions */}
                      {popularSolutions.length > 0 && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-white">Popular Solutions</h4>
                          <div className="bg-gray-900 p-4 rounded-lg space-y-2">
                            {popularSolutions.slice(0, 5).map((solution, index) => (
                              <div key={index} className="flex justify-between">
                                <span className="text-gray-400">{solution.solutionId}</span>
                                <span className="text-white">{solution.count}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button
              onClick={onClose}
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
  );
};

export default CookieSettings;
