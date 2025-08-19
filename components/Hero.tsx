import React, { useState, useEffect, useRef } from 'react';
import { useContent } from '../context/LanguageContext';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { PlayIcon } from './icons/AdvantageIcons'; // Re-using AdvantageIcons file

interface HeroProps {
  scrollToProducts: () => void;
}

const images = [
  'https://thumbs2.imgbox.com/fd/cc/DIxH0Rdf_t.jpg',
  'https://thumbs2.imgbox.com/7b/6b/UPF1nJAt_t.jpg',
  'https://thumbs2.imgbox.com/1c/b8/G0o4QIQw_t.jpg',
  'https://thumbs2.imgbox.com/d8/24/u1JEjZqZ_t.jpg'
];

const Hero: React.FC<HeroProps> = ({ scrollToProducts }) => {
    const { content } = useContent();
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div 
            ref={ref}
            data-visible={isVisible}
            className="relative bg-trust-navy transition-opacity ease-in duration-1000"
        >
             <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1599382878149-e93910a3399f?q=80&w=2940&auto=format&fit=crop')"}}></div>
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="min-h-screen grid lg:grid-cols-2 items-center gap-12 relative z-10 pt-24 pb-12 lg:pt-0 lg:pb-0">
                    <div className="text-center lg:text-left">
                        <div 
                            className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 pop-in"
                            style={{ '--delay': '200ms' } as React.CSSProperties}
                        >
                            <img src="https://iili.io/FQiLFzQ.png" alt="Xinyi Trading Group Logo" className="h-16 md:h-20 object-contain" />
                            <span className="text-4xl md:text-5xl font-light text-gray-400 mx-2">+</span>
                            <img src="https://images2.imgbox.com/62/7d/pvVxSmYd_o.png" alt="Kawan Lama Group Logo" className="h-12 md:h-16 object-contain filter-to-white" />
                        </div>
                        <p 
                            className="mt-6 text-lg text-medium-gray max-w-2xl mx-auto lg:mx-0 pop-in"
                            style={{ '--delay': '350ms' } as React.CSSProperties}
                        >
                            {content.hero.subheadline}
                        </p>
                        <div 
                            className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pop-in"
                            style={{ '--delay': '500ms' } as React.CSSProperties}
                        >
                            <button 
                                onClick={scrollToProducts}
                                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-corporate-gold text-white font-bold rounded-lg shadow-lg hover:bg-corporate-gold/80 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                            >
                                {content.hero.primary_cta}
                                <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                            <a 
                                href="https://www.youtube.com/watch?v=XH976fSwcuk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent text-gray-200 font-bold rounded-lg border-2 border-gray-700 hover:bg-gray-800 hover:text-white transition-all duration-300"
                            >
                                <PlayIcon className="w-5 h-5 mr-2" />
                                {content.hero.secondary_cta}
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:flex justify-center items-center h-full pop-in" style={{ '--delay': '400ms' } as React.CSSProperties}>
                        <div className="grid grid-cols-2 gap-3 w-full max-w-lg aspect-[1/1] rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-2xl">
                            {images.map((src, index) => (
                                <div key={index} className="overflow-hidden">
                                    <img 
                                        src={src} 
                                        alt={`PUDU Robot Showcase ${index + 1}`}
                                        className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;