import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';

// A reusable component for the count-up animation.
const CountUp = ({ end, duration = 2000, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const startTime = Date.now();
        
        const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            
            // Ease-out cubic function for a smoother animation
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easedProgress * end);
            
            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure it ends on the exact value
            }
        };
        
        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span>{count.toLocaleString()}</span>;
};

const stats = [
  { label: 'No. of Operation Center', end: 80, suffix: '+' },
  { label: 'No. of Cities Covered', end: 600, suffix: '+' },
  { label: 'Total Robot Services', end: 830, suffix: 'million+' },
  { label: 'Global Robot Shipments', end: 100000, suffix: '+' },
];

const GlobalPresence: React.FC = () => {
    const statsRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger animation when the stats section is 20% visible
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        const currentRef = statsRef.current;
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
        <Section id="global-presence" className="bg-light-gray">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-100 reveal">
                    Leading Global Provider of Embodied Service Robotics
                </h2>
                <p className="mt-4 text-sm font-semibold text-medium-gray uppercase tracking-widest reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
                    KEEN ON ROBOTS, KEEN ON THE FUTURE
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center reveal" style={{ '--delay': `${200 + index * 100}ms` } as React.CSSProperties}>
                            <p className="text-medium-gray">{stat.label}</p>
                            <p className="text-5xl lg:text-6xl font-bold font-display text-corporate-gold mt-1">
                                <CountUp end={stat.end} isVisible={isVisible} />
                                {stat.suffix}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default GlobalPresence;