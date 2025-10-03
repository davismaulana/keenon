import React from 'react';
import Section from './Section';
import Partners from './Partners';

const CateringSolution: React.FC = () => {
    const heroImage = "https://static.keenon.com/uploads/2025/04/27/399b2df9da8e4ff1931ea03d7aa05212.jpg?x-oss-process=image/format,webp";

    const features = [
        {
            title: "Efficient & Stable Serving",
            description: "Our DINERBOT series ensures timely and stable delivery from kitchen to table. With advanced navigation and multi-robot collaboration, they optimize workflow, reduce spills, and allow staff to focus on customer interaction.",
            image: "https://static.keenon.com/uploads/2024/12/30/1e6802e656064293af36c6feb0ab7e2b.webp",
            alt: "KEENON DINERBOT T8 serving food in a restaurant"
        },
        {
            title: "High-Capacity Bussing",
            description: "The DINERBOT T11 is a workhorse for clearing tables. Its large capacity and intelligent route planning drastically improve the speed of table turnover, keeping your dining room ready for the next guests.",
            image: "https://static.keenon.com/uploads/2024/12/30/6a2fddac7ea849759a1540d15bc37bac.webp",
            alt: "KEENON DINERBOT T11 for bussing"
        },
        {
            title: "Engaging Guest Welcome",
            description: "Make a great first impression with our Guiderbot series. These robots can greet guests, guide them to their tables, and even display promotions on their high-definition screens, creating a futuristic and interactive welcome.",
            image: "https://static.keenon.com/uploads/2024/12/30/0819a16f6b55452fbdc71286940a08e1.webp",
            alt: "KEENON Guiderbot G2 greeting guests"
        }
    ];

    return (
        <div className="bg-trust-navy text-gray-200">
            <header
                className="relative h-[60vh] min-h-[400px] w-full bg-cover bg-center flex items-center justify-center text-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative px-6">
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white reveal">KEENON Smart Catering Solution</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
                        Empower restaurants with fully autonomous robots, from greeting and guiding to delivery and bussing.
                    </p>
                </div>
            </header>

            <Section className="bg-light-gray">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold font-display text-gray-100 reveal">Redefining Dining with Intelligent Automation</h2>
                    <p className="mt-4 text-lg text-medium-gray reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
                        KEENON Robotics is a global leader in commercial service robots, dedicated to solving the pressing challenges of the catering industry. Our solutions tackle high labor costs, recruitment difficulties, and operational inefficiencies, empowering restaurants to enhance service quality, streamline management, and create an unforgettable, high-tech dining experience for every customer.
                    </p>
                </div>
            </Section>

            <Section className="bg-trust-navy">
                <div className="space-y-16 md:space-y-24">
                    {features.map((feature, index) => (
                        <div key={index} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center reveal">
                            <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                <img src={feature.image} alt={feature.alt} className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video" />
                            </div>
                            <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} text-center md:text-left`}>
                                <h3 className="text-3xl font-bold font-display text-corporate-gold">{feature.title}</h3>
                                <p className="mt-4 text-lg text-medium-gray max-w-2xl mx-auto md:mx-0 leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
            
            <Partners />
        </div>
    );
};

export default CateringSolution;
