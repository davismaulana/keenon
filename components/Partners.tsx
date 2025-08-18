import React from 'react';
import Section from './Section';

// A curated list of partner logos to display in a grid format.
const partnerLogos = [
  'https://cdn.pudutech.com/logo_en_28_fe7c4dd48e.png', // Pizza Hut
  'https://cdn.pudutech.com/logo_en_30_63a6f69894.png', // Marriott
  'https://cdn.pudutech.com/logo_en_27_1a5ada4238.png', // Haidilao
  'https://cdn.pudutech.com/logo_en_26_faf1e83c0c.png', // Walmart
  'https://cdn.pudutech.com/logo_en_29_0147e74bef.png', // MediaMarkt
  'https://cdn.pudutech.com/logo_en_24_fedfa36423.png', // Carrefour
  'https://cdn.pudutech.com/logo_en_22_c98a188e87.png', // Coca-Cola
  'https://cdn.pudutech.com/logo_en_20_13c1d3053b.png', // Shell
  'https://cdn.pudutech.com/logo_en_16_c4ce5213aa.png', // McDonald's
  'https://cdn.pudutech.com/logo_en_21_4c6cb3b9d3.png', // Metro
  'https://cdn.pudutech.com/logo_en_1_4e2e3599ba.png',  // SF Express
  'https://cdn.pudutech.com/logo_en_25_09b053cb21.png', // JD.com
  'https://cdn.pudutech.com/logo_en_19_b4a546c986.png', // ACCOR
  'https://cdn.pudutech.com/logo_en_17_bb7cc6808c.png', // InterContinental
  'https://cdn.pudutech.com/logo_en_14_6516450a79.png', // Sheraton
  'https://cdn.pudutech.com/logo_en_13_4dd3d62e53.png', // Westin
  'https://cdn.pudutech.com/logo_en_7_6fcc7446fa.png',  // Hilton
  'https://cdn.pudutech.com/logo_en_10_09b9ec58e7.png'  // Hyatt
];

const Partners: React.FC = () => {
    return (
        <Section className="bg-trust-navy">
            <div className="flex flex-col items-center">
                <h2 className="w-full text-3xl lg:text-4xl text-center pb-12 lg:pb-16 font-bold font-display text-gray-100 reveal">
                    Businesses Grow with Xinyi Trading Group
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {partnerLogos.map((logoUrl, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-6 rounded-xl shadow-sm flex justify-center items-center h-28 hover:shadow-lg hover:shadow-corporate-gold/20 transition-all duration-300 transform hover:-translate-y-1 reveal"
                            style={{ '--delay': `${200 + index * 40}ms` } as React.CSSProperties}
                        >
                            <img
                                src={logoUrl}
                                alt={`Logo of PUDU Robotics partner ${index + 1}`}
                                className="max-h-12 w-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Partners;