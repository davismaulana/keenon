import React, { useState, useEffect, useRef } from 'react';
import { Product } from '../data/content';
import Section from './Section';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

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
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div className="bg-trust-navy">
            {/* Hero Section */}
            <header
                ref={heroRef}
                data-visible={isHeroVisible}
                className="relative h-[70vh] md:h-[90vh] w-full overflow-hidden flex items-center justify-center text-center"
            >
                <img 
                    src={product.heroImage || product.image} 
                    alt={`${product.name} hero image`} 
                    className="absolute inset-0 w-full h-full object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-trust-navy via-trust-navy/50 to-transparent"></div>
                <div className="relative z-10 px-6">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display text-white drop-shadow-2xl reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
                        {product.name}
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-lg reveal" style={{ '--delay': '400ms' } as React.CSSProperties}>
                        {product.detailTagline || product.headline}
                    </p>
                </div>
            </header>

            {/* Video Section */}
            {product.videoUrl && (
                <Section className="bg-trust-navy">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold font-display text-gray-100 mb-4 reveal">Watch in Action</h2>
                        {product.videoDescription && <p className="text-lg text-medium-gray mb-8 reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>{product.videoDescription}</p>}
                        <div className="reveal" style={{ '--delay': '400ms' } as React.CSSProperties}>
                            {(() => {
                                const getEmbedUrl = (urlStr: string): string | null => {
                                    try {
                                        const url = new URL(urlStr);
            
                                        if (url.hostname.includes('youtube.com') || url.hostname.includes('youtu.be')) {
                                            let videoId;
                                            if (url.hostname.includes('youtu.be')) {
                                                videoId = url.pathname.split('/').pop();
                                            } else {
                                                videoId = url.searchParams.get('v');
                                            }
            
                                            if (videoId) {
                                                // Autoplay requires mute=1. Loop and playlist are for continuous play. Controls=0 for a cleaner look.
                                                return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&showinfo=0`;
                                            }
                                        }
            
                                        // Fallback for old Google Drive links if any are left
                                        if (url.hostname.includes('drive.google.com')) {
                                            const fileIdMatch = url.pathname.match(/\/file\/d\/([^/]+)/);
                                            if (fileIdMatch && fileIdMatch[1]) {
                                                const driveVideoId = fileIdMatch[1];
                                                return `https://drive.google.com/file/d/${driveVideoId}/preview`;
                                            }
                                        }
                                    } catch (e) {
                                        console.error("Invalid video URL", e);
                                        return null;
                                    }
                                    return null;
                                };
                                
                                const embedUrl = getEmbedUrl(product.videoUrl);
            
                                if (embedUrl) {
                                    return (
                                        <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
                                            <iframe
                                                className="w-full h-full"
                                                src={embedUrl}
                                                title="Product video"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    );
                                }
                                
                                console.warn(`Could not generate embed URL for: ${product.videoUrl}`);
                                return null;
                            })()}
                        </div>
                    </div>
                </Section>
            )}

            {/* New Features Section */}
            {product.featureSections && product.featureSections.length > 0 && (() => {
                const specialImageProducts = ['t11', 'c20'];

                if (specialImageProducts.includes(product.id)) {
                    return (
                        <>
                            {product.featureSections?.map((feature, index) => (
                                feature.image && (
                                    <Section key={index} fullscreen className="h-[60vh] md:h-screen">
                                        <div className="reveal-x w-full h-full">
                                            <img 
                                                src={feature.image} 
                                                alt={`${product.name} feature ${index + 1}`} 
                                                className="w-full h-full object-cover" 
                                            />
                                        </div>
                                    </Section>
                                )
                            ))}
                        </>
                    );
                }

                const isImageGallery = product.featureSections?.every(f => f.image && !f.title);

                if (isImageGallery) {
                    return (
                        <Section className="bg-trust-navy">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {product.featureSections.map((feature, index) => (
                                    <div key={index} className="reveal aspect-square bg-light-gray rounded-lg overflow-hidden shadow-lg" style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}>
                                        <img src={feature.image} alt={`${product.name} feature ${index + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </Section>
                    );
                } else {
                    return (
                        <Section className="bg-light-gray">
                            <div className="space-y-16 md:space-y-24">
                                {product.featureSections.map((feature, index) => (
                                    feature.title && (
                                        <div key={index} className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center reveal`} style={{ '--delay': `${index * 150}ms` } as React.CSSProperties}>
                                            <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                                {feature.image && <img src={feature.image} alt={feature.title} className="rounded-lg shadow-xl w-full h-auto object-cover" />}
                                            </div>
                                            <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} text-center md:text-left`}>
                                                <h3 className="text-3xl font-bold font-display text-corporate-gold">{feature.title}</h3>
                                                <p className="mt-4 text-lg text-medium-gray max-w-2xl mx-auto md:mx-0 leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </Section>
                    );
                }
            })()}

            {/* Keenon Core Technology Section */}
            {product.keenonCoreTechnology && (
                <Section className="bg-trust-navy">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-100 reveal">{product.keenonCoreTechnology.title}</h2>
                    </div>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {product.keenonCoreTechnology.features.map((tech, index) => (
                            <div key={index} className="bg-light-gray rounded-lg shadow-md reveal overflow-hidden flex flex-col" style={{ '--delay': `${100 + index * 100}ms` } as React.CSSProperties}>
                                {tech.image && (
                                    <div className="aspect-video">
                                        <img src={tech.image} alt={tech.title} className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <div className="p-6 flex-grow flex flex-col">
                                    <h4 className="text-xl font-bold font-display text-corporate-gold">{tech.title}</h4>
                                    <p className="mt-3 text-medium-gray flex-grow">{tech.description}</p>
                                </div>
                            </div>
                        ))}
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
                                                    <td className="px-4 sm:px-6 py-4 text-medium-gray">{spec.name}</td>
                                                    <td className="px-4 sm:px-6 py-4 font-semibold text-gray-200 text-right">{spec.value}</td>
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
                             <div className="bg-trust-navy h-fit rounded-xl p-6 md:p-8 md:sticky top-28">
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
        </div>
    );
};

export default ProductDetail;