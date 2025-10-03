import React from 'react';
import Section from './Section';
import Partners from './Partners';

const HotelSolution: React.FC = () => {
    const heroImage = "https://static.keenon.com/uploads/2025/04/27/4e5c2059175b4da19d19dbdf8549b41b.jpg?x-oss-process=image/format,webp";

    const features = [
        {
            title: "Secure & Private Room Service",
            description: "The BUTLERBOT W3 revolutionizes in-room delivery. With its fully enclosed, secure cabin and ability to autonomously call elevators, it delivers amenities, meals, and parcels directly to the guest's door, ensuring privacy and efficiency 24/7.",
            image: "https://static.keenon.com/uploads/images/10becb8073c94840b6bb9e3b03535780.webp",
            alt: "KEENON BUTLERBOT W3 in a hotel corridor"
        },
        {
            title: "Streamlined In-house Dining",
            description: "For hotel restaurants, bars, and lounges, our DINERBOT series provides the same exceptional delivery service as in traditional restaurants, ensuring guests receive their orders promptly, enhancing their dining experience within the hotel.",
            image: "https://static.keenon.com/uploads/2024/12/30/b408afcd74634745a11cdbe66b4b149c.webp",
            alt: "KEENON DINERBOT T9 suitable for hotel restaurants"
        },
        {
            title: "Intelligent Guest Guidance",
            description: "Our Guiderbot can act as a mobile concierge, welcoming guests in the lobby, providing information about hotel amenities, and guiding them to locations like the spa, pool, or conference rooms, enhancing convenience and impressing guests.",
            image: "https://static.keenon.com/uploads/2024/12/30/0819a16f6b55452fbdc71286940a08e1.webp",
            alt: "KEENON Guiderbot G2 providing concierge services"
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
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white reveal">KEENON Smart Hotel Solution</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
                        Delight guests with safe, reliable, and private contactless service, while significantly improving hotel operational efficiency.
                    </p>
                </div>
            </header>

            <Section className="bg-light-gray">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold font-display text-gray-100 reveal">Elevating Hospitality Through Innovation</h2>
                    <p className="mt-4 text-lg text-medium-gray reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
                        The hotel industry is evolving, and guest expectations are higher than ever. KEENON's smart hotel solutions address these changes by automating routine tasks, ensuring privacy, and providing a unique, modern experience. Our robots handle everything from room service to guiding guests, freeing up your staff to provide the high-touch, personalized service that builds loyalty.
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

export default HotelSolution;
