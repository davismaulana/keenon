

export interface Product {
    id: string;
    name: string;
    category: string;
    headline: string;
    description: string;
    key_features: string[];
    applications: string[];
    cta: string;
    image: string;
    // New fields for detailed product pages
    detailTagline?: string;
    heroImage?: string;
    keySpecs?: { label: string; value: string; }[];
    featureSections?: { title: string; description: string; image: string; }[];
    techSpecs?: { category: string; specs: { name: string; value: string; }[] }[];
    videoFeatures?: {
        title: string;
        subtitle: string;
        videoUrl: string;
    }[];
    brochureUrl?: string;
}

export interface IndustrySolution {
    name: string;
    icon: string;
    description: string;
    recommended_products: string[];
}

export interface ValueProposition {
    icon: string;
    title: string;
    description: string;
}

export interface Testimonial {
    quote: string;
    name: string;
    title: string;
    company: string;
    image: string;
}

export interface NewsArticle {
    title: string;
    description: string;
    date: string;
    category: string;
    image?: string;
    link: string;
}

export interface Content {
    company_name: string;
    tagline: string;
    nav: {
        [key: string]: string;
    };
    header_cta: {
        text: string;
    };
    hero: {
        headline: string;
        subheadline: string;
        primary_cta: string;
        secondary_cta: string;
    };
    products_showcase: {
        section_title: string;
        section_subtitle: string;
        products: Product[];
    };
    solutions_by_industry: {
        section_title: string;
        section_subtitle: string;
        industries: IndustrySolution[];
    };
    value_propositions: {
        section_title: string;
        benefits: ValueProposition[];
    };
    testimonials: {
        section_title: string;
        reviews: Testimonial[];
    };
    news_and_insights: {
        section_title: string;
        articles: NewsArticle[];
    };
    cta_section: {
        headline: string;
        subheadline: string;
        primary_cta: string;
        secondary_cta: string;
    };
    contact: {
        title: string;
        subtitle: string;
        form: {
            name: string;
            email: string;
            subject: string;
            message: string;
            send: string;
            success: string;
            sending: string;
        };
    };
    footer: {
        company_info: {
            name: string;
            description: string;
        };
        quick_links: string[];
        contact_info: {
            phone: string;
            email: string;
            address: string;
            businessHours?: string;
        };
    };
}

export const content: Content = {
    company_name: "Xinyi Trading Group",
    tagline: "Intelligent Robotics for Smarter Businesses",
    nav: {
        home: 'Home',
        products: 'Products',
        solutions: 'Solutions',
        about: 'About Us',
        contact: 'Contact',
        back: 'Back to Products'
    },
    header_cta: {
        text: "Get Quote",
    },
    hero: {
        headline: "Global Expertise Meets Robotic Innovation.",
        subheadline: "We are a partnership between Xinyi Trading Group and KEENON Robotics, combining global market expertise with cutting-edge AI robotics. Together, we deliver intelligent service and delivery solutions that help enterprises expand into new markets, improve operational efficiency, and achieve sustainable growth. With reliable technology, rich project experience, and trusted international partnerships, we empower industries from hospitality and catering to healthcare and airports to embrace intelligent upgrades with confidence.",
        primary_cta: "Explore Products",
        secondary_cta: "Watch Demo",
    },
    products_showcase: {
        section_title: "Our Robot Solutions",
        section_subtitle: "Discover the perfect robot for your business needs",
        products: [
            {
                id: "c30",
                name: "C30",
                category: "Cleaning Robot",
                headline: "Smaller and Smarter, Your Cleaning Expert",
                description: "The compact size of the C30 allows it to easily navigate narrow spaces, while its powerful 4-in-1 cleaning functions and intelligent perception capabilities ensure efficient and thorough cleaning results in various commercial settings.",
                key_features: [
                    "4-in-1 cleaning: sweeping, scrubbing, vacuuming, and mopping",
                    "Compact 50cm body for navigating narrow spaces",
                    "Intelligent perception and upgraded obstacle avoidance",
                    "Fully automated: auto-recharge, water refill & drainage"
                ],
                applications: ["Restaurants", "Hotels", "Offices", "Shopping Malls", "Supermarkets"],
                cta: "Learn More",
                image: "https://images2.imgbox.com/13/3f/VjNHhVr0_o.png",
                detailTagline: "The nimble and compact 4-in-1 cleaning robot for complex commercial environments.",
                heroImage: "https://images2.imgbox.com/13/3f/VjNHhVr0_o.png",
                keySpecs: [
                    { label: "Cleaning Efficiency", value: "Up to 700 m²/h" },
                    { label: "Functions", value: "4-in-1" },
                    { label: "Body Width", value: "50cm" },
                    { label: "Runtime", value: "4-6h" }
                ],
                featureSections: [
                    {
                        title: "Nimble and Compact, Access to Narrow Spaces",
                        description: "With a body width of only 50cm, C30 effortlessly navigates through narrow aisles and spaces under tables and chairs. It moves freely in complex environments, ensuring comprehensive cleaning without dead corners.",
                        image: "https://images2.imgbox.com/13/3f/VjNHhVr0_o.png"
                    },
                    {
                        title: "4-in-1 Versatility for Comprehensive Cleaning",
                        description: "C30 integrates sweeping, scrubbing, vacuuming, and mopping. Its dual-roller brush design effectively handles various types of debris, from fine dust to larger particles, ensuring a thorough clean in a single pass.",
                        image: "https://images2.imgbox.com/13/3f/VjNHhVr0_o.png"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "500 x 480 x 605 mm" }, { name: "Weight", value: "45kg" }] },
                    { category: "Performance", specs: [{ name: "Cleaning Efficiency", value: "500-700 m²/h" }, { name: "Min. Passage Width", value: "55cm" }] },
                    { category: "Tanks", specs: [{ name: "Clean Water", value: "7L" }, { name: "Dirty Water", value: "6L" }] },
                    { category: "Battery", specs: [{ name: "Battery Life", value: "4-6h" }, { name: "Charging Time", value: "3.5h" }] },
                ],
                videoFeatures: [
                    {
                        title: "3-in-1 Dry Cleaning",
                        subtitle: "Sweeping, vacuuming, and dust mopping covers 610mm wide.",
                        videoUrl: "https://static.keenon.com/uploads/videos/f9851260060249c8be808db5efaa90a3/pc.mp4"
                    },
                    {
                        title: "100% Charged, 2500㎡ cleaned",
                        subtitle: "With one complete automatic charging, the C30 can clean up to 2500㎡, ideal for extended cleaning sessions.",
                        videoUrl: "https://static.keenon.com/uploads/2025/01/07/6d54b2ce32ae4e4b9c56b2fbbe4ef1ac/pc.mp4"
                    },
                    {
                        title: "Dual Operation Modes",
                        subtitle: "Switch between manual map building and automated cleaning with the innovative extendable handle.",
                        videoUrl: "https://static.keenon.com/uploads/2025/01/07/c8377b46d69e479e96da57dc8a738d89/pc.mp4"
                    },
                    {
                        title: "Remote Assign and Track",
                        subtitle: "Effortlessly assign and track cleaning tasks, and gain insights into your C30 with the KEENON App.",
                        videoUrl: "https://static.keenon.com/uploads/2025/01/07/b5daa7adfeeb48d799d74d7b090ad446/pc.mp4"
                    }
                ],
                brochureUrl: "https://www.keenon.com/en/product/C30/index.html"
            }
        ]
    },
    solutions_by_industry: {
        section_title: "Solutions by Industry",
        section_subtitle: "Tailored robotic solutions for every business sector",
        industries: [
            { name: "Hospitality", icon: "HotelIcon", description: "Enhance guest experience with seamless service robots", recommended_products: ["BellaBot", "BellaBot Pro", "KettyBot Pro"] },
            { name: "Retail", icon: "RetailIcon", description: "Attract customers and streamline operations", recommended_products: ["KettyBot Pro", "BellaBot Pro", "CC1"] },
            { name: "Healthcare", icon: "HealthcareIcon", description: "Safe, hygienic delivery and cleaning solutions", recommended_products: ["PuduBot 2", "FlashBot", "CC1"] },
            { name: "Logistics & Manufacturing", icon: "LogisticsIcon", description: "Heavy-duty transport and industrial cleaning", recommended_products: ["T300", "MT1", "FlashBot"] },
            { name: "Corporate Offices", icon: "OfficeIcon", description: "Professional service and maintenance automation", recommended_products: ["FlashBot", "CC1", "PuduBot 2"] }
        ]
    },
    value_propositions: {
        section_title: "Why Choose Xinyi Trading Group",
        benefits: [
            { icon: "ProductivityIcon", title: "Boost Productivity", description: "Increase operational efficiency by up to 5X with AI-powered automation that works 24/7 without breaks." },
            { icon: "CustomerExperienceIcon", title: "Wow Your Customers", description: "Create unforgettable experiences with expressive AI interactions and seamless service delivery." },
            { icon: "CostEfficiencyIcon", title: "Reduce Operating Costs", description: "Lower labor costs and minimize human error while maintaining consistent service quality." },
            { icon: "ScalabilityIcon", title: "Scalable Solutions", description: "From single units to fleet management, our robots grow with your business needs." }
        ]
    },
    testimonials: {
        section_title: "Testimonials",
        reviews: [
            { 
                company: "Pizza Hut · Poland",
                name: "Jarosław Orłowski",
                title: "Brand Manager of Pizza Hut Poland",
                quote: "The introduction of BellaBots to assist the waitstaff makes the entire dining experience very engaging. These robots attract younger guests to our restaurant, allowing them to enjoy a unique dining experience.", 
                image: "https://cdn.pudutech.com/Pizza_Hut_0ee06c13a4.webp"
            },
            { 
                company: "Marriott Warsaw Hotel · Poland",
                name: "Dariusz Oleksiak",
                title: "Director of Marriott Warsaw Hotel",
                quote: "Introducing robots into our operations has been a wise decision. They have significantly assisted our staff and have become a delightful attraction for children and guests visiting our restaurants and bars. It's gratifying to see that our employees also appreciate the benefits they bring.",
                image: "https://cdn.pudutech.com/card2_436a4442d6.jpg"
            },
            { 
                company: "Haidilao · China",
                name: "Zeng, Xianghui",
                title: "Server at Haidilao",
                quote: "After using the PuduBot, we have freed up some manpower in the back kitchen, allowing us more time to learn skills for other positions. This enables us to be versatile in our roles, enhancing our overall capabilities and laying a solid foundation for our career development and promotions.",
                image: "https://cdn.pudutech.com/1_05a84beb87.webp"
            },
            {
                company: "Magic Natura Resort · Spain",
                name: "Fran Benavides",
                title: "Manager of Magic Natura Resort",
                quote: "Implementing robots in our restaurant has optimized our staff’s resources, allowing them to focus on personalized customer service. The robots assist with tasks like carrying and delivering dishes, reducing stress for our team. This has led to happier customers and improved overall work efficiency.",
                image: "https://cdn.pudutech.com/Magic_Natura_Resort_bf0258e0ff.webp"
            },
            {
                company: "Smiling Park Nursing Home in Japan",
                name: "Yoshimura",
                title: "Manager of Smiling Park Nursing Home",
                quote: "The robot is responsible for delivering various items to different areas of the nursing home. Since we started using it, our staff no longer needs to leave their work areas to deliver items, which has significantly improved efficiency. This allows them to provide more assistance to residents and focus on their essential tasks.",
                image: "https://cdn.pudutech.com/Smiling_Park_Nursing_Home_2d37bd88bc.webp"
            },
            {
                company: "Bali Tower Hotel · Japan",
                name: "Yukari Yamamoto",
                title: "Manager of Hotel Bali Tower Osaka Tennoji",
                quote: "Cleaning all floors up to the 13th floor manually was very time-consuming, especially given our lack of manpower. The introduction of the cleaning robot has cut our workload by several hours. With just a push of a button, it vacuums and mops the entire floor, allowing us to reallocate that time to customer interactions and significantly enhance our hospitality and service",
                image: "https://cdn.pudutech.com/card6_60cfacea9a.jpg"
            },
            {
                company: "Meritum · Poland",
                name: "Katarzyna Chajec",
                title: "Leader of Meritum",
                quote: "Since introducing KettyBot at Meritum, we've improved efficiency by reducing the time our reception staff spends on manual tasks like greeting clients and guiding them to conference rooms. KettyBot also provides information about birthdays and internal events on its screen, enhancing engagement for both employees and clients. This has helped us refine our marketing efforts and create a more dynamic work environment.",
                image: "https://cdn.pudutech.com/Meritum_a4566b302f.webp"
            },
            {
                company: "Dim Dou Dok · China",
                name: "Zhang Jie",
                title: "Manager of Dim Dou Dok",
                quote: "Using PuduBot has been a fantastic experience. It enhances safety and efficiency, allowing us to save on labor while operating at a faster pace. Guests, especially children, are fascinated by it and find it very eye-catching. We've also seen a significant increase in customer numbers and foot traffic since its introduction.",
                image: "https://cdn.pudutech.com/card8_2e1198e782.png"
            }
        ]
    },
    news_and_insights: {
        section_title: "News & Insights",
        articles: [] // Data will be fetched from RSS feed
    },
    cta_section: {
        headline: "Ready to Transform Your Business?",
        subheadline: "Join hundreds of businesses worldwide who trust Xinyi Trading Group for their automation needs",
        primary_cta: "Request a Demo",
        secondary_cta: "Download Brochure"
    },
    contact: {
        title: 'Get in Touch',
        subtitle: "As a trusted partner in Management Consulting & Exclusive Distribution Solutions, we deliver strategic insights, operational excellence, and exclusive market access to help your business grow. Let’s discuss how we can transform your vision into measurable results.",
        form: {
            name: 'Your Name',
            email: 'Your Email',
            subject: 'Subject',
            message: 'Your Message',
            send: 'Send Inquiry',
            success: 'Thank you! Your message has been sent. We will get back to you shortly.',
            sending: 'Sending...'
        },
    },
    footer: {
        company_info: {
            name: "Xinyi Trading Group",
            description: "Leading provider of intelligent robotics solutions for businesses worldwide."
        },
        quick_links: ["Products", "Solutions", "Support", "Contact", "Careers"],
        contact_info: {
            phone: "+62 823 1515 6088",
            email: "info@xinyitradinggroup.com",
            address: "Skyloft SOHO 1698 (Office)\nVieloft SOHO 0819 (Showroom)\nJl. Mayjen Sungkono No.89\nSurabaya, Indonesia",
            businessHours: "Mon - Fri, 9:00 AM - 5:00 PM"
        }
    }
};