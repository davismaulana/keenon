import React, { useRef, useState, useEffect, useCallback } from 'react';
import Section from './Section';
import { useContent } from '../context/LanguageContext';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const Testimonials: React.FC = () => {
    const { content } = useContent();
    const { section_title, reviews } = content.testimonials;
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const scrollToCard = useCallback((index: number) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const card = container.children[index] as HTMLElement;
            if (card) {
                container.scrollTo({
                    left: card.offsetLeft,
                    behavior: 'smooth',
                });
            }
        }
    }, []);

    const advanceSlide = useCallback((direction: number) => {
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex + direction;
            if (newIndex >= reviews.length) return 0;
            if (newIndex < 0) return reviews.length - 1;
            return newIndex;
        });
    }, [reviews.length]);

    useEffect(() => {
        if (isHovered) return;

        const timer = setInterval(() => {
            advanceSlide(1);
        }, 5000); // Auto-scroll every 5 seconds

        return () => clearInterval(timer);
    }, [currentIndex, isHovered, advanceSlide]);

    const handleNext = () => {
        advanceSlide(1);
    };
    
    const handlePrev = () => {
        advanceSlide(-1);
    };

    useEffect(() => {
        // This will now only scroll the horizontal container, not the whole page.
        scrollToCard(currentIndex);
    }, [currentIndex, scrollToCard]);

    const NavButtons = () => (
        <>
            <button 
                onClick={handlePrev}
                aria-label="Previous testimonials"
                className="p-3 rounded-full bg-light-gray text-gray-200 shadow-md hover:bg-corporate-gold hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-corporate-gold focus:ring-offset-2 focus:ring-offset-trust-navy"
            >
                <ArrowLeftIcon className="h-6 w-6" />
            </button>
             <button 
                onClick={handleNext}
                aria-label="Next testimonials"
                className="p-3 rounded-full bg-light-gray text-gray-200 shadow-md hover:bg-corporate-gold hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-corporate-gold focus:ring-offset-2 focus:ring-offset-trust-navy"
            >
                <ArrowRightIcon className="h-6 w-6" />
            </button>
        </>
    );

    return (
        <Section className="bg-light-gray" id="testimonials">
            <div className="flex justify-between items-center mb-8 md:mb-12">
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-gray-100 text-left reveal">
                    {section_title}
                </h2>
                <div className="hidden md:flex items-center gap-4 reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
                   <NavButtons />
                </div>
            </div>

            <div
                className="relative -mx-6 lg:-mx-8"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div 
                    ref={scrollContainerRef}
                    className="flex items-stretch gap-4 md:gap-6 py-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-6 lg:px-8 scroll-pl-6 lg:scroll-pl-8"
                >
                    {reviews.map((review, index) => (
                        <article 
                            key={`${review.company}-${index}`}
                            className="snap-start bg-trust-navy flex flex-col w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-96 p-5 lg:p-6 flex-shrink-0 rounded-xl border border-gray-700/80 duration-300 reveal"
                            style={{ '--delay': `${300 + index * 100}ms` } as React.CSSProperties}
                        >
                            <div className="w-full h-40 lg:h-48 mb-4">
                               <div className="relative w-full h-full overflow-hidden rounded-lg">
                                   <img 
                                       src={review.image} 
                                       alt={`Testimonial from ${review.company}`}
                                       className="w-full h-full object-cover"
                                   />
                               </div>
                            </div>
                            <div className="flex flex-col flex-grow">
                                <header>
                                    <h3 className="text-lg lg:text-xl font-bold font-display text-gray-100 line-clamp-2">
                                        {review.company}
                                    </h3>
                                    <p className="mt-1 text-sm text-medium-gray line-clamp-2">
                                        {review.name}, {review.title}
                                    </p>
                                </header>
                                <blockquote className="mt-4 leading-relaxed text-sm text-gray-300 flex-grow">
                                    <q>{review.quote}</q>
                                </blockquote>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            
            <div className="md:hidden flex justify-center items-center gap-4 mt-8 reveal" style={{ '--delay': '400ms' } as React.CSSProperties}>
                <NavButtons />
            </div>
        </Section>
    );
};

export default Testimonials;