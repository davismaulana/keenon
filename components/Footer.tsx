

import React, { useState } from 'react';
import { useContent } from '../context/LanguageContext';
import CookieSettings from './CookieSettings';

const Footer: React.FC = () => {
    const { content } = useContent();
    const [showCookieSettings, setShowCookieSettings] = useState(false);

    return (
        <>
            <footer className="bg-trust-navy text-gray-300">
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl py-16">
                    <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} {content.footer.company_info.name}. All Rights Reserved.</p>
                            <div className="flex items-center gap-4 text-xs">
                                <button
                                    onClick={() => setShowCookieSettings(true)}
                                    className="text-gray-400 hover:text-corporate-gold transition-colors"
                                >
                                    Cookie Settings
                                </button>
                                <span className="text-gray-600">•</span>
                                <a href="/privacy-policy" className="text-gray-400 hover:text-corporate-gold transition-colors">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
            {showCookieSettings && (
                <CookieSettings onClose={() => setShowCookieSettings(false)} />
            )}
        </>
    );
};

export default Footer;