

import React from 'react';
import Section from './Section';
import { useContent } from '../context/LanguageContext';
import { HotelIcon, RetailIcon, HealthcareIcon, LogisticsIcon, OfficeIcon, EllipsisIcon } from './icons/ServiceIcons';

const iconMap: { [key: string]: React.FC<{className: string}> } = {
    HotelIcon,
    RetailIcon,
    HealthcareIcon,
    LogisticsIcon,
    OfficeIcon,
};

const Solutions: React.FC = () => {
    const { content } = useContent();

    return (
        <Section className="bg-trust-navy" id="solutions">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-100 reveal">{content.solutions_by_industry.section_title}</h2>
                <p className="mt-4 text-lg text-medium-gray max-w-3xl mx-auto reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>{content.solutions_by_industry.section_subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.solutions_by_industry.industries.slice(0, 5).map((industry, index) => {
                    const Icon = iconMap[industry.icon];
                    return (
                        <div 
                            key={index} 
                            className="bg-light-gray p-6 rounded-lg border border-transparent hover:border-corporate-gold/50 hover:bg-gray-700 transition-all duration-300 reveal flex flex-col text-center items-center transform hover:-translate-y-1"
                            style={{ '--delay': `${200 + index * 100}ms` } as React.CSSProperties}
                        >
                            {Icon && <Icon className="h-10 w-10 text-corporate-gold mb-4 flex-shrink-0"/>}
                            <h3 className="font-bold font-display text-gray-200 text-xl">{industry.name}</h3>
                            <p className="text-medium-gray mt-2 flex-grow">{industry.description}</p>
                        </div>
                    );
                })}
                 <div 
                    className="bg-corporate-gold p-6 rounded-lg transition-all duration-300 reveal flex flex-col text-center items-center transform hover:-translate-y-1 hover:opacity-90"
                    style={{ '--delay': `${200 + 5 * 100}ms` } as React.CSSProperties}
                >
                     <EllipsisIcon className="h-10 w-10 text-white mb-4 flex-shrink-0"/>
                     <h3 className="font-bold font-display text-white text-xl">And Many More...</h3>
                     <p className="text-gray-100 mt-2 flex-grow">Our versatile robots are adaptable to countless industries. Contact us to find your custom solution.</p>
                </div>
            </div>
        </Section>
    );
};

export default Solutions;