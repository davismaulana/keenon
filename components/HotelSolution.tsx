import React from 'react';
import Section from './Section';
import Partners from './Partners';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const HotelSolution: React.FC = () => {
    const heroImage = "https://static.keenon.com/uploads/2025/04/27/4e5c2059175b4da19d19dbdf8549b41b.jpg?x-oss-process=image/format,webp";

    const features = [
        {
            productName: "BUTLERBOT W3",
            title: "Elevate Guest Service with 24/7 Autonomous Delivery",
            description: "The BUTLERBOT W3 redefines in-room service. Operating around the clock, it securely and privately delivers amenities, meals, and parcels directly to the guest's door. Its ability to autonomously navigate elevators and complex hotel layouts ensures prompt service, reduces staff workload, and frees your team to focus on creating memorable, high-value guest interactions.",
            videoUrl: "https://www.youtube.com/embed/hDVr_RCuxMs?autoplay=1&mute=1&loop=1&playlist=hDVr_RCuxMs&controls=0&rel=0&showinfo=0",
            alt: "KEENON BUTLERBOT W3 autonomously delivering items in a luxury hotel.",
            benefits: [
                "Secure, fully enclosed cabin for complete guest privacy.",
                "Autonomous elevator integration for seamless multi-floor service.",
                "24/7 contactless operation to meet guest needs at any hour."
            ]
        },
        {
            productName: "KLEENBOT Series",
            title: "Uphold Impeccable Cleanliness, Effortlessly",
            description: "Maintain pristine conditions in your lobbies, hallways, and common areas with the KLEENBOT C30 & C40. These compact and agile robots offer powerful 4-in-1 and 5-in-1 cleaning functions, navigating tight spaces with ease. Automate your cleaning schedules to ensure a consistently spotless environment for your guests while significantly reducing manual labor costs and operational strain.",
            videoUrl: "https://www.youtube.com/embed/nHcg64XRxks?autoplay=1&mute=1&loop=1&playlist=nHcg64XRxks&controls=0&rel=0&showinfo=0",
            alt: "KEENON KLEENBOT C30 providing automated cleaning in a hotel lobby.",
            benefits: [
                "Powerful multi-function cleaning: sweep, scrub, vacuum, and mop.",
                "Compact and agile design effortlessly navigates narrow corridors.",
                "Fully automated workstation for charging, water refill, and drainage."
            ]
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
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white reveal">The Future of Hospitality</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
                        Automated, Efficient, and Unforgettable. Transform your guest experience with KEENON's specialized hotel robotics.
                    </p>
                </div>
            </header>

            <Section className="bg-light-gray">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold font-display text-gray-100 reveal">Address Modern Hospitality Challenges</h2>
                    <p className="mt-4 text-lg text-medium-gray reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
                        Guest expectations are higher than ever. KEENON's smart hotel solutions address labor shortages, rising costs, and the demand for higher hygiene standards. By automating routine tasks, our robots empower your staff to provide the high-touch, personalized service that builds loyalty.
                    </p>
                </div>
            </Section>

            <Section className="bg-trust-navy">
                <div className="space-y-16 md:space-y-24">
                    {features.map((feature, index) => (
                        <div key={index} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center reveal">
                            <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
                                    <iframe
                                        className="w-full h-full"
                                        src={feature.videoUrl}
                                        title={feature.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} text-center md:text-left`}>
                                <h3 className="text-3xl font-bold font-display text-corporate-gold">{feature.title}</h3>
                                <p className="mt-4 text-lg text-medium-gray max-w-2xl mx-auto md:mx-0 leading-relaxed">{feature.description}</p>
                                <ul className="mt-6 space-y-3 text-left">
                                    {feature.benefits.map((benefit, bIndex) => (
                                        <li key={bIndex} className="flex items-start">
                                            <CheckCircleIcon className="h-6 w-6 text-corporate-gold mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-medium-gray">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
            
            <Partners />
        </div>
    );
};

export default HotelSolution;