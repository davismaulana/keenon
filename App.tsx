import React, { useEffect } from 'react';
import { ContentProvider, useContent } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import GlobalPresence from './components/GlobalPresence';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import CateringSolution from './components/CateringSolution';
import HotelSolution from './components/HotelSolution';
import Solutions from './components/Services'; // Repurposed Services.tsx as Solutions
import Partners from './components/Partners';
import CustomerStories from './components/News'; // Repurposed News.tsx as CustomerStories
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { trackPageView } from './utils/analytics';
import CookieConsent from './components/CookieConsent';

const AppCore: React.FC = () => {
    const { content } = useContent();
    
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');
    const solutionId = params.get('solution');
    const productData = productId 
        ? content.products_showcase.products.find(p => p.id === productId) 
        : null;

    useEffect(() => {
        // On component mount or when page changes, track the view and scroll to top.
        trackPageView();
        window.scrollTo(0, 0);
    }, [productId, solutionId]);

    useEffect(() => {
        if (productData) {
            document.title = `${productData.name} - ${content.company_name}`;
        } else if (solutionId === 'catering') {
            document.title = `Catering Solution - ${content.company_name}`;
        } else if (solutionId === 'hotel') {
            document.title = `Hotel Solution - ${content.company_name}`;
        } else {
            document.title = `${content.company_name} - ${content.tagline}`;
        }
    }, [productData, solutionId, content.company_name, content.tagline]);
    
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80; // Height of the fixed header (h-20)
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const HomePageContent = () => (
         <>
            <div id="home"><Hero scrollToProducts={() => scrollToSection('products')} /></div>
            <GlobalPresence />
            <div id="products"><Products /></div>
            <div id="solutions"><Solutions /></div>
            <Partners />
            <CustomerStories />
        </>
    );

    return (
        <div className="bg-trust-navy text-gray-200 font-sans">
            <Header isDetailPage={!!productData || !!solutionId} />
            
            <main>
                {productData ? (
                    <ProductDetail product={productData} />
                ) : solutionId === 'catering' ? (
                    <CateringSolution />
                ) : solutionId === 'hotel' ? (
                    <HotelSolution />
                ) : (
                    <HomePageContent />
                )}
                <div id="contact"><Contact /></div>
            </main>

            <Footer />
            <WhatsAppButton />
            <CookieConsent />
        </div>
    );
};

const App: React.FC = () => (
    <ContentProvider>
        <AppCore />
    </ContentProvider>
);

export default App;