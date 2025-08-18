import React, { useEffect, useState } from 'react';

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button after scrolling down 80% of the viewport height
            if (window.scrollY > window.innerHeight * 0.8) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const whatsappNumber = "6282315156088";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Us on WhatsApp"
            className={`fixed bottom-8 right-8 z-40 flex flex-col items-center transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:rounded-lg ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
            }`}
        >
            {/* Image container with blue outline */}
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center p-1 shadow-lg border-2 border-blue-600">
                <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                        src="https://cdn.pudutech.com/nav_product_bella_pro_816bfa936e.png" 
                        alt="BellaBot Pro" 
                        className="w-full h-full object-cover scale-150"
                        style={{ objectPosition: 'center 20%' }} // Focus on the head
                    />
                </div>
            </div>

            {/* "Contact Us" Button */}
            <div className="bg-blue-600 text-white font-bold text-base px-6 py-2 rounded-full shadow-lg transform -translate-y-6">
                Contact Us
            </div>
        </a>
    );
};

export default WhatsAppButton;
