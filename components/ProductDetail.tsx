

import React, { useState, useEffect, useRef } from 'react';
import { Product } from '../data/content';
import Section from './Section';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { DownloadIcon } from './icons/DownloadIcon';
import CTA from './Advantages';

interface ProductDetailProps {
    product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    const heroRef = useRef<HTMLDivElement>(null);
    const [isHeroVisible, setIsHeroVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsHeroVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = heroRef.current;
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
    
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const headerOffset = 80; // Height of the fixed header
            const elementPosition = contactSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-trust-navy">
            {/* Hero Section */}
            <header 
                ref={heroRef}
                data-visible={isHeroVisible}
                className="relative bg-light-gray"
            >
                <div className="absolute inset-0 bg-cover bg-center opacity-5"></div>
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                    <div className="min-h-screen grid lg:grid-cols-2 items-center gap-12 relative z-10 pt-24 pb-12 lg:pt-20 lg:pb-12">
                        <div className="text-center lg:text-left">
                            <span 
                                className="text-corporate-gold font-bold uppercase tracking-wider pop-in"
                                style={{ '--delay': '100ms' } as React.CSSProperties}
                            >
                                {product.category}
                            </span>
                            <h1 
                                className="text-4xl md:text-6xl font-bold font-display text-gray-100 mt-2 leading-tight md:leading-tight pop-in"
                                style={{ '--delay': '200ms' } as React.CSSProperties}
                            >
                                {product.name}
                            </h1>
                            {product.detailTagline && (
                                <p 
                                    className="mt-6 text-lg text-medium-gray max-w-xl mx-auto lg:mx-0 pop-in"
                                    style={{ '--delay': '350ms' } as React.CSSProperties}
                                >
                                    {product.detailTagline}
                                </p>
                            )}
                            <div 
                                className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pop-in"
                                style={{ '--delay': '500ms' } as React.CSSProperties}
                            >
                                <button 
                                    onClick={scrollToContact}
                                    className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-corporate-gold text-white font-bold rounded-lg shadow-lg hover:bg-corporate-gold/80 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                                >
                                    Get a Quote
                                    <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center items-center h-full pop-in" style={{ '--delay': '400ms' } as React.CSSProperties}>
                           <div className="relative w-full max-w-lg aspect-square">
                                <img src={product.heroImage || product.image} alt={product.name} className="w-full h-full object-contain drop-shadow-2xl rounded-2xl" />
                           </div>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Video Features Section */}
            {product.videoFeatures && product.videoFeatures.length > 0 && (
                <Section className="bg-light-gray">
                    <div className="space-y-16 md:space-y-24">
                        {product.videoFeatures.map((feature, index) => (
                            <div key={index} className="max-w-5xl mx-auto text-center">
                                <h3 className="text-3xl md:text-4xl font-bold font-display text-corporate-gold reveal tracking-wide">
                                    {feature.title}
                                </h3>
                                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto reveal" style={{ '--delay': '150ms' } as React.CSSProperties}>
                                    {feature.subtitle}
                                </p>
                                <div className="mt-8 md:mt-12 mx-auto rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl shadow-black/30 reveal" style={{ '--delay': '300ms' } as React.CSSProperties}>
                                    <video
                                        className="w-full h-full object-cover"
                                        src={feature.videoUrl}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* Key Specs Section */}
            {product.keySpecs && product.keySpecs.length > 0 && (
                <Section className="bg-light-gray border-t border-gray-800">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {product.keySpecs.map((spec, index) => (
                            <div key={index} className="pop-in" style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}>
                                <p className="text-3xl md:text-4xl font-bold font-display text-corporate-gold">{spec.value}</p>
                                <p className="mt-2 text-medium-gray uppercase text-sm tracking-wider">{spec.label}</p>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* Feature Sections */}
            {product.featureSections && product.featureSections.length >= 2 && (
                <Section className="bg-trust-navy">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                        <div className="reveal">
                            <div className="bg-light-gray rounded-2xl shadow-xl p-4 md:p-6">
                                <img
                                    src={product.featureSections[0].image}
                                    alt={product.featureSections[0].title}
                                    className="w-full h-auto object-cover rounded-xl"
                                />
                            </div>
                        </div>
                        <div className="reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-3xl font-bold font-display text-gray-100">{product.featureSections[0].title}</h2>
                                    <p className="mt-4 text-lg text-medium-gray leading-relaxed">{product.featureSections[0].description}</p>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold font-display text-gray-100">{product.featureSections[1].title}</h2>
                                    <p className="mt-4 text-lg text-medium-gray leading-relaxed">{product.featureSections[1].description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            )}

            {/* Combination Section for Specs and Apps */}
            <Section className="bg-light-gray">
                <div className="grid md:grid-cols-5 gap-8 lg:gap-16">
                    {/* Technical Specifications Section */}
                    <div className="md:col-span-3">
                        {product.techSpecs && product.techSpecs.length > 0 && (
                            <>
                                <h2 className="text-3xl font-bold font-display text-gray-100 mb-8 reveal">Technical Specifications</h2>
                                <div className="overflow-x-auto reveal rounded-lg border border-gray-700">
                                    <table className="w-full text-left border-collapse">
                                        <tbody className="align-baseline">
                                            {product.techSpecs.flatMap(category => category.specs).map((spec, specIndex) => (
                                                <tr key={specIndex} className="border-b border-gray-800 last-of-type:border-b-0">
                                                    <td className="px-6 py-4 text-medium-gray">{spec.name}</td>
                                                    <td className="px-6 py-4 font-semibold text-gray-200 text-right">{spec.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Applications Section */}
                    <div className="md:col-span-2">
                        {product.applications && product.applications.length > 0 && (
                             <div className="bg-trust-navy h-fit rounded-xl p-8 sticky top-28">
                                <h2 className="text-2xl font-bold font-display text-gray-100 mb-6 reveal">Typical Applications</h2>
                                <ul className="space-y-4">
                                    {product.applications.map((app, index) => (
                                        <li key={index} className="flex items-start reveal" style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}>
                                            <CheckCircleIcon className="h-6 w-6 text-corporate-gold mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-lg text-gray-200">{app}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
            
            <CTA 
                scrollToContact={scrollToContact}
                productBrochureUrl={product.brochureUrl}
            />
        </div>
    );
};

export default ProductDetail;