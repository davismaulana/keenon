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
            aria-label="Chat on WhatsApp"
            className={`group fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#128C7E] focus:outline-none focus:ring-4 focus:ring-green-500/50 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
            }`}
        >
            <img 
                src="https://iili.io/FZZsZSs.md.png" 
                alt="WhatsApp" 
                className="h-9 w-9 object-contain" 
            />
            <span className="absolute -left-3 top-1/2 -translate-x-full -translate-y-1/2 whitespace-nowrap rounded-md bg-[var(--color-bg-subtle)] px-3 py-1.5 text-sm font-semibold text-[var(--color-text-primary)] opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100">
                Chat on WhatsApp
            </span>
        </a>
    );
};

export default WhatsAppButton;
