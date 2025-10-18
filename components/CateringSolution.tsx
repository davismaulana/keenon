import React from 'react';
import Section from './Section';
import Partners from './Partners';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const CateringSolution: React.FC = () => {
    const heroImage = "https://static.keenon.com/uploads/2025/04/27/399b2df9da8e4ff1931ea03d7aa05212.jpg?x-oss-process=image/format,webp";

    const features = [
        {
            title: "Streamline Service from Kitchen to Table",
            description: "Elevate your dining experience with the DINERBOT series. The T9's stable, multi-layer design ensures swift and secure delivery, while the T10S adds a layer of sophistication with its interactive screen and hygienic tray covers. Automate delivery and bussing to reduce staff workload, accelerate table turnover, and allow your team to focus on providing exceptional hospitality.",
            videoUrl: "https://www.youtube.com/embed/khnZ4v-5Lqg?autoplay=1&mute=1&loop=1&playlist=khnZ4v-5Lqg&controls=0&rel=0&showinfo=0",
            alt: "KEENON DINERBOT robots serving food in a busy restaurant.",
            benefits: [
                "Drastically reduce food delivery and bussing times.",
                "Advanced shock mitigation ensures stable, spill-free transport.",
                "Engage guests with smart, interactive features and promotions."
            ]
        },
        {
            title: "Ensure Pristine Dining Environments, Automatically",
            description: "Maintain the highest standards of cleanliness with the KLEENBOT series. The C30 and C40 are compact powerhouses, combining sweeping, scrubbing, vacuuming, and mopping to keep floors spotless. Schedule automated cleaning during off-peak hours to ensure a fresh, hygienic dining space for your guests, all while optimizing labor costs and efficiency.",
            videoUrl: "https://www.youtube.com/embed/DLyLjJ2PwGg?autoplay=1&mute=1&loop=1&playlist=DLyLjJ2PwGg&controls=0&rel=0&showinfo=0",
            alt: "KEENON KLEENBOT cleaning the floor of a modern restaurant.",
            benefits: [
                "5-in-1 cleaning for comprehensive floor maintenance.",
                "Agile navigation for complex layouts and tight spaces.",
                "Fully automated operation, from cleaning to charging and water changes."
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
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white reveal">KEENON Smart Catering Solution</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
                        Revolutionize your restaurant with intelligent automation, from greeting and delivery to cleaning.
                    </p>
                </div>
            </header>

            <Section className="bg-light-gray">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold font-display text-gray-100 reveal">Mastering the Art of Service</h2>
                    <p className="mt-4 text-lg text-medium-gray reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
                        In today's competitive catering industry, efficiency, consistency, and guest experience are paramount. KEENON's solutions address labor shortages and rising operational costs by automating repetitive tasks, allowing your staff to deliver the high-quality, personal service that turns first-time visitors into loyal customers.
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
                                <ul className="mt-6 space-y-3 text-left max-w-2xl mx-auto md:mx-0">
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

export default CateringSolution;