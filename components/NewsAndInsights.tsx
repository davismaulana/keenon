import React, { useState, useRef, useEffect, useCallback } from 'react';
import Section from './Section';
import { useContent } from '../context/LanguageContext';
import type { NewsArticle } from '../data/content';

const NewsAndInsights: React.FC = () => {
    const { content } = useContent();
    const { section_title } = content.news_and_insights;

    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const targetUrl = 'https://www.pudurobotics.com/api/v2/news?type=1&page=1&pageSize=5&language=en';
                const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;
                const response = await fetch(proxyUrl);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (data.code !== 0 || !data.data || !Array.isArray(data.data.list)) {
                    throw new Error('Invalid API response structure');
                }

                const formattedArticles: NewsArticle[] = data.data.list.map((item: any) => ({
                    title: item.title,
                    description: item.desc,
                    date: item.addTime.split(' ')[0], // Keep only date part
                    category: item.category.name,
                    image: `https://www.pudurobotics.com${item.thumb}`,
                    link: `https://www.pudurobotics.com${item.url}`,
                }));
                setArticles(formattedArticles);
            } catch (e) {
                console.error("Failed to fetch news:", e);
                setError('Could not load the latest news. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchNews();
    }, []);

    const handleSelectArticle = (index: number) => {
        setActiveIndex(index);
    };
    
    const scrollToCard = useCallback((index: number) => {
        if (scrollContainerRef.current) {
            const card = scrollContainerRef.current.children[index] as HTMLElement;
            if (card) {
                card.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center',
                });
            }
        }
    }, []);

    useEffect(() => {
        if (articles.length > 0) {
            scrollToCard(activeIndex);
        }
    }, [activeIndex, scrollToCard, articles.length]);
    
    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="w-full h-96 flex items-center justify-center">
                    <p className="text-gray-300 animate-pulse">Loading latest news...</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="w-full h-64 flex items-center justify-center bg-red-900/20 rounded-lg">
                    <p className="text-red-300 text-center">{error}</p>
                </div>
            );
        }

        if (!articles || articles.length === 0) {
            return null;
        }

        const activeArticle = articles[activeIndex];

        return (
            <>
                {/* Main Featured Article */}
                <div key={activeIndex} className="bg-trust-navy shadow-lg rounded-xl mb-12 lg:flex reveal pop-in animate-fade-in overflow-hidden">
                    <div className="lg:w-1/2 rounded-t-xl lg:rounded-l-xl lg:rounded-t-none overflow-hidden">
                        <img className="h-64 w-full object-cover lg:h-full" src={activeArticle.image} alt={activeArticle.title} />
                    </div>
                    <div className="p-6 md:p-8 lg:w-1/2 flex flex-col justify-between">
                        <div>
                            <div className="uppercase tracking-wide text-sm text-corporate-gold font-semibold">{activeArticle.category}</div>
                            <a href={activeArticle.link} target="_blank" rel="noopener noreferrer" className="block mt-1 text-xl md:text-2xl leading-tight font-bold text-gray-100 hover:underline">{activeArticle.title}</a>
                            <p className="mt-4 text-medium-gray line-clamp-4 text-sm md:text-base">{activeArticle.description}</p>
                        </div>
                        <div className="mt-6 flex justify-between items-center">
                            <p className="text-sm text-medium-gray">{activeArticle.date}</p>
                            <a href={activeArticle.link} target="_blank" rel="noopener noreferrer" className="text-corporate-gold font-semibold hover:text-corporate-gold/80 text-sm">Read More &rarr;</a>
                        </div>
                    </div>
                </div>

                {/* Article Selector Slider */}
                <div className="relative reveal">
                     <div 
                        className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4"
                     >
                        <div ref={scrollContainerRef} className="flex w-max items-center space-x-4">
                            {articles.map((article, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSelectArticle(index)}
                                    aria-label={`Select article: ${article.title}`}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSelectArticle(index)}
                                    className={`snap-center cursor-pointer flex-shrink-0 w-60 md:w-64 p-3 rounded-lg transition-all duration-300 transform ${
                                        activeIndex === index
                                            ? 'bg-trust-navy shadow-xl scale-105 z-10'
                                            : 'bg-trust-navy/70 scale-95 opacity-80 hover:opacity-100 hover:scale-100 hover:shadow-md'
                                    }`}
                                >
                                    <div className="h-32 w-full overflow-hidden rounded-md mb-3">
                                        <img src={article.image} alt="" className="h-full w-full object-cover" />
                                    </div>
                                    <h3 className="font-semibold text-sm text-gray-200 line-clamp-2">{article.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <Section className="bg-trust-navy" id="news">
            <div className="bg-light-gray rounded-2xl shadow-xl p-8 md:p-12 reveal">
                <div className="mb-8 lg:mb-12">
                     <h2 className="text-3xl lg:text-42 font-bold font-display text-gray-100">
                        {section_title}
                    </h2>
                </div>
                {renderContent()}
            </div>
        </Section>
    );
};

export default NewsAndInsights;