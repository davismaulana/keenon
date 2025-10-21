import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const consent = sessionStorage.getItem('cookieConsent');
        if (!consent) {
            // Delay showing the banner slightly to allow the rest of the page to load first.
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleConsent = (consent: 'accepted' | 'declined') => {
        sessionStorage.setItem('cookieConsent', consent);
        setIsExiting(true); // Trigger the exit animation

        // Wait for the animation to finish before removing the component from the DOM.
        setTimeout(() => {
            setIsVisible(false);
        }, 500); // This duration must match the CSS animation duration.

        if (consent === 'accepted') {
            import('../utils/analytics').then(module => {
                module.trackPageView();
            });
        }
    };

    if (!isVisible) {
        return null;
    }
    
    // Apply the correct animation class based on whether the banner is entering or exiting.
    const animationClass = isExiting ? 'animate-slide-fade-out-down' : 'animate-slide-fade-in-up';

    return (
        <div className={`fixed bottom-0 left-0 right-0 bg-light-gray/95 backdrop-blur-sm p-4 z-[100] border-t border-gray-700 shadow-2xl ${animationClass}`}
             role="dialog"
             aria-labelledby="cookie-consent-title"
             aria-describedby="cookie-consent-description">
            <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-300">
                  <h2 id="cookie-consent-title" className="font-bold text-white">Your Privacy Matters</h2>
                  <p id="cookie-consent-description" className="mt-1">
                      We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Learn more in our{' '}
                      <a href="#" className="underline hover:text-corporate-gold transition-colors">Privacy Policy</a>.
                  </p>
                </div>
                <div className="flex-shrink-0 flex gap-3">
                    <button
                        onClick={() => handleConsent('declined')}
                        className="px-5 py-2 text-sm font-bold text-gray-200 rounded-md hover:bg-gray-700 transition-colors"
                        aria-label="Decline analytics tracking"
                    >
                        Decline
                    </button>
                    <button
                        onClick={() => handleConsent('accepted')}
                        className="px-5 py-2 text-sm font-bold bg-corporate-gold text-white rounded-md hover:bg-corporate-gold/80 transition-colors"
                        aria-label="Accept all cookies and analytics tracking"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;