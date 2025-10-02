
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
    videoUrl?: string;
    videoDescription?: string;
    brochureUrl?: string;
}

export interface IndustrySolution {
    name: string;
    icon: string;
    description: string;
    recommended_products: string[];
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

// FIX: Added ValuePropositionBenefit interface to provide a type for value propositions.
export interface ValuePropositionBenefit {
    icon: string;
    title: string;
    description: string;
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
    testimonials: {
        section_title: string;
        reviews: Testimonial[];
    };
    // FIX: Added `value_propositions` to the Content interface to fix type errors.
    value_propositions: {
        section_title: string;
        benefits: ValuePropositionBenefit[];
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
        section_subtitle: "Discover the perfect robot for your business needs, organized by industry solution.",
        products: [
            {
                id: "t3",
                name: "DINERBOT T3",
                category: "Catering",
                headline: "Efficient Tray Delivery, Smart and Stable",
                description: "The T3 is a tray delivery robot designed for restaurants and catering services. With its multi-layer tray structure and advanced shock absorption system, it ensures fast, stable, and efficient food delivery, improving service quality and operational flow.",
                key_features: [
                    "4-layer adjustable tray with 40kg total capacity",
                    "Advanced shock mitigation for stable delivery",
                    "AI voice interaction and customizable expressions",
                    "Efficient multi-robot cooperation"
                ],
                applications: ["Restaurants", "Hotels", "Cafes", "Bars"],
                cta: "Learn More",
                image: "https://static.keenon.com/uploads/2024/12/30/3913f366f6bd405fa392f50f011c88bd.webp",
                detailTagline: "The professional tray delivery robot for fast, stable, and efficient food service.",
                heroImage: "https://static.keenon.com/uploads/2024/12/30/3913f366f6bd405fa392f50f011c88bd.webp",
                keySpecs: [
                    { label: "Load Capacity", value: "40kg" },
                    { label: "Min Passage Width", value: "60cm" },
                    { label: "Runtime", value: "12-15h" },
                    { label: "Charging Time", value: "4.5h" }
                ],
                featureSections: [
                    {
                        title: "Stable Delivery, Superior Performance",
                        description: "The T3 is equipped with an industry-leading chassis shock absorption system, ensuring smooth and stable delivery even on complex surfaces. It keeps dishes perfectly presented from kitchen to table.",
                        image: "https://static.keenon.com/uploads/2025/01/07/2f6e0938cdf14d17ae050fdee9d9b42c.webp"
                    },
                    {
                        title: "High Capacity, High Efficiency",
                        description: "Featuring four large-capacity trays, the T3 can deliver multiple orders in a single trip. Its multi-robot collaboration system optimizes delivery routes, significantly improving restaurant turnover rates.",
                        image: "https://static.keenon.com/uploads/2024/12/30/3913f366f6bd405fa392f50f011c88bd.webp"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "461 x 521 x 1224 mm" }, { name: "Weight", value: "55kg" }] },
                    { category: "Performance", specs: [{ name: "Max Load", value: "40kg (10kg/tray)" }, { name: "Tray Size", value: "420 x 500 mm" }] },
                    { category: "Battery", specs: [{ name: "Battery Life", value: "12-15h" }, { name: "Charging Time", value: "4.5h" }] },
                ],
                videoUrl: "https://youtu.be/cN2EAXcqVL4",
                videoDescription: "Watch the T3 deliver dishes with unparalleled stability and efficiency in a busy restaurant.",
                brochureUrl: "https://www.keenon.com/en/product/T3/index.html"
            },
            {
                id: "t8",
                name: "DINERBOT T8",
                category: "Catering",
                headline: "Efficient and Nimble Delivery Expert",
                description: "The T8 is a versatile delivery robot that can serve in various scenarios with its open tray design. It combines precise navigation and intelligent obstacle avoidance to provide a stable and efficient delivery experience.",
                key_features: [
                    "Agile movement with 55cm passage width",
                    "Multi-modal interaction with voice and light",
                    "Replaceable cute and customizable expressions",
                    "Detachable magnetic rear cover"
                ],
                applications: ["Restaurants", "Hotels", "Offices", "KTVs"],
                cta: "Learn More",
                image: "https://static.keenon.com/uploads/2024/12/30/1e6802e656064293af36c6feb0ab7e2b.webp",
                detailTagline: "The nimble and versatile delivery expert for complex and crowded environments.",
                heroImage: "https://static.keenon.com/uploads/2024/12/30/1e6802e656064293af36c6feb0ab7e2b.webp",
                keySpecs: [
                    { label: "Load Capacity", value: "30kg" },
                    { label: "Min Passage Width", value: "55cm" },
                    { label: "Runtime", value: "12-15h" },
                    { label: "Charging Time", value: "4.5h" }
                ],
                featureSections: [
                    {
                        title: "Agile and Efficient, Unobstructed Passage",
                        description: "The T8's compact body allows it to easily pass through narrow passages as small as 55cm, making it adaptable to complex and crowded environments. It delivers dishes quickly and accurately, improving service efficiency.",
                        image: "https://static.keenon.com/uploads/2025/01/07/3f1030d1ed7f419e8d1fe25536af2051.webp"
                    },
                    {
                        title: "Smart Interaction, Fun Experience",
                        description: "The T8 is equipped with multi-modal interaction capabilities, including AI voice and customizable facial expressions. It can interact with customers in a friendly and fun way, enhancing the dining experience.",
                        image: "https://static.keenon.com/uploads/2024/12/30/1e6802e656064293af36c6feb0ab7e2b.webp"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "400 x 460 x 1110 mm" }, { name: "Weight", value: "40kg" }] },
                    { category: "Performance", specs: [{ name: "Max Load", value: "30kg" }, { name: "Min. Passage Width", value: "55cm" }] },
                    { category: "Battery", specs: [{ name: "Battery Life", value: "12-15h" }, { name: "Charging Time", value: "4.5h" }] },
                ],
                videoUrl: "https://youtu.be/t5YIz65Kjr0",
                videoDescription: "See the T8 in action, navigating tight spaces with ease and delivering a fun, interactive service.",
                brochureUrl: "https://www.keenon.com/en/product/T8/index.html"
            },
            {
                id: "t9",
                name: "DINERBOT T9",
                category: "Catering",
                headline: "Efficient Tray Delivery, Smart and Stable",
                description: "The T9 is a tray delivery robot designed for restaurants and catering services. With its multi-layer tray structure and advanced shock absorption system, it ensures fast, stable, and efficient food delivery, improving service quality and operational flow.",
                key_features: [
                    "Four-layer adjustable tray structure",
                    "Advanced shock mitigation for stable delivery",
                    "AI voice interaction and customizable expressions",
                    "Efficient multi-robot cooperation"
                ],
                applications: ["Restaurants", "Hotels", "Cafes", "Bars"],
                cta: "Learn More",
                image: "https://static.keenon.com/uploads/2024/12/30/b408afcd74634745a11cdbe66b4b149c.webp",
                detailTagline: "The professional tray delivery robot for fast, stable, and efficient food service.",
                heroImage: "https://static.keenon.com/uploads/2024/12/30/b408afcd74634745a11cdbe66b4b149c.webp",
                keySpecs: [
                    { label: "Load Capacity", value: "40kg" },
                    { label: "Tray Layers", value: "4" },
                    { label: "Runtime", value: "10-12h" },
                    { label: "Min Passage Width", value: "60cm" }
                ],
                featureSections: [
                    {
                        title: "Stable Delivery, Superior Performance",
                        description: "The T9 is equipped with an industry-leading chassis shock absorption system, ensuring smooth and stable delivery even on complex surfaces. It keeps dishes perfectly presented from kitchen to table.",
                        image: "https://static.keenon.com/uploads/2025/01/07/2dc8bf76f6c24bd8abf5db546d36571e.webp"
                    },
                    {
                        title: "High Capacity, High Efficiency",
                        description: "Featuring four large-capacity trays, the T9 can deliver multiple orders in a single trip. Its multi-robot collaboration system optimizes delivery routes, significantly improving restaurant turnover rates.",
                        image: "https://static.keenon.com/uploads/2024/12/30/b408afcd74634745a11cdbe66b4b149c.webp"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "521 x 500 x 1226 mm" }, { name: "Weight", value: "57kg" }] },
                    { category: "Performance", specs: [{ name: "Max Load", value: "40kg" }, { name: "Tray Size", value: "420 x 500 mm" }] },
                    { category: "Battery", specs: [{ name: "Battery Life", value: "10-12h" }, { name: "Charging Time", value: "5h" }] },
                ],
                videoUrl: "https://youtu.be/5TP6MokvFnQ",
                videoDescription: "Watch the T9 deliver dishes with unparalleled stability and efficiency in a busy restaurant.",
                brochureUrl: "https://www.keenon.com/en/product/T9/index.html"
            },
            {
                id: "t10",
                name: "DINERBOT T10",
                category: "Catering",
                headline: "Full-featured Flagship, Smart Dining Companion",
                description: "The T10 is a flagship delivery robot with a tray cover for enhanced food safety and hygiene. It combines intelligent features like plate detection and multi-modal interaction to create a futuristic and efficient dining experience.",
                key_features: [
                    "Automatic tray cover for enhanced hygiene",
                    "Plate detection for automatic return journeys",
                    "Multi-modal interaction: voice, touch, and vision",
                    "23.8-inch large advertising screen"
                ],
                applications: ["Restaurants", "Hotels", "Entertainment venues"],
                cta: "Learn More",
                image: "https://static.keenon.com/uploads/2024/12/30/6a2fddac7ea849759a1540d15bc37bac.webp",
                detailTagline: "The flagship delivery robot with a hygienic tray cover and smart marketing screen.",
                heroImage: "https://static.keenon.com/uploads/2024/12/30/6a2fddac7ea849759a1540d15bc37bac.webp",
                keySpecs: [
                    { label: "Load Capacity", value: "30kg" },
                    { label: "Screen Size", value: "23.8 inch" },
                    { label: "Runtime", value: "10-12h" },
                    { label: "Hygiene", value: "Auto Tray Cover" }
                ],
                featureSections: [
                    {
                        title: "Hygiene and Safety First",
                        description: "The T10's automatic tray cover opens upon arrival and closes during transit, protecting food from airborne particles and ensuring a safe, hygienic delivery process for customers.",
                        image: "https://static.keenon.com/uploads/2025/01/07/4dd7ee05dfa64deebe34cf14b5f2f755.jpg?x-oss-process=image/format,webp"
                    },
                    {
                        title: "Smart Interaction and Marketing",
                        description: "Equipped with a large 23.8-inch screen, the T10 can display advertisements and promotions. Its multi-modal interaction capabilities create an engaging and futuristic experience for diners.",
                        image: "https://static.keenon.com/uploads/2024/12/30/6a2fddac7ea849759a1540d15bc37bac.webp"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "516 x 500 x 1345 mm" }, { name: "Weight", value: "65kg" }] },
                    { category: "Performance", specs: [{ name: "Max Load", value: "30kg" }, { name: "Screen", value: "23.8\" HD" }] },
                    { category: "Battery", specs: [{ name: "Battery Life", value: "10-12h" }, { name: "Charging Time", value: "5h" }] },
                ],
                videoUrl: "https://youtu.be/khnZ4v-5Lqg",
                videoDescription: "Experience the T10's futuristic dining service, featuring its hygienic cover and large ad screen.",
                brochureUrl: "https://www.keenon.com/en/product/T10/index.html"
            },
            {
                id: "t11",
                name: "DINERBOT T11",
                category: "Catering",
                headline: "Efficient Dish Collection, Smart and Practical",
                description: "The T11 is specially designed for dish collection in restaurants. It has a large capacity and can intelligently navigate in complex environments, improving overall service efficiency and quality.",
                key_features: [
                    "120L super large capacity, carries up to 400 dishes",
                    "Three-layer adjustable trays for flexibility",
                    "Smart SLAM navigation for complex environments",
                    "Simple call button for on-demand service"
                ],
                applications: ["Restaurants", "Canteens", "Food courts"],
                cta: "Learn More",
                image: "https://static.keenon.com/uploads/2024/12/30/6a2fddac7ea849759a1540d15bc37bac.webp",
                detailTagline: "The high-capacity dish collecting robot that streamlines restaurant cleanup.",
                heroImage: "https://static.keenon.com/uploads/2024/12/30/6a2fddac7ea849759a1540d15bc37bac.webp",
                keySpecs: [
                    { label: "Load Capacity", value: "60kg" },
                    { label: "Total Volume", value: "120L" },
                    { label: "Runtime", value: "10-12h" },
                    { label: "Min Passage Width", value: "60cm" }
                ],
                featureSections: [
                    {
                        title: "Massive Capacity, Efficient Clearing",
                        description: "The T11's 120L capacity allows it to clear multiple tables in a single trip. The adjustable trays can accommodate various types of tableware, making it a versatile solution for any dining establishment.",
                        image: "https://static.keenon.com/uploads/2025/09/01/aef7c671bab445fdbd46cea9cd50a781.png?x-oss-process=image/format,webp"
                    },
                    {
                        title: "Simple Call, Intelligent Operation",
                        description: "Staff can easily call the robot using a pager. The T11 navigates autonomously to the designated table, waits for staff to load the dishes, and then returns to the kitchen, streamlining the entire collection process.",
                        image: "https://static.keenon.com/uploads/2024/12/30/6a2fddac7ea849759a1540d15bc37bac.webp"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "518 x 500 x 1205 mm" }, { name: "Weight", value: "55kg" }] },
                    { category: "Performance", specs: [{ name: "Max Load", value: "60kg" }, { name: "Volume", value: "120L" }] },
                    { category: "Battery", specs: [{ name: "Battery Life", value: "10-12h" }, { name: "Charging Time", value: "5h" }] },
                ],
                videoUrl: "https://youtu.be/9xLvVsv86KA",
                videoDescription: "Watch the T11 effortlessly collect dishes, boosting efficiency in a busy restaurant environment.",
                brochureUrl: "https://www.keenon.com/en/product/T11/index.html"
            },
            {
                id: "w3",
                name: "BUTLERBOT W3",
                category: "Hotel",
                headline: "Intelligent Hotel Delivery Robot",
                description: "The W3 is an intelligent delivery robot for hotels, providing safe, reliable, and efficient room service to enhance guest experience and improve operational efficiency.",
                key_features: [
                    "Autonomous elevator riding for multi-floor delivery",
                    "Fully enclosed cabin for secure and private transport",
                    "Smart call function to notify guests of arrival",
                    "Optimal path planning for efficient service"
                ],
                applications: ["Hotels", "Serviced Apartments", "Resorts", "Office Buildings"],
                cta: "Learn More",
                image: "https://static.keenon.com/uploads/images/10becb8073c94840b6bb9e3b03535780.webp",
                detailTagline: "Elevating Guest Experience with Autonomous, Contactless Room Service.",
                heroImage: "https://static.keenon.com/uploads/images/10becb8073c94840b6bb9e3b03535780.webp",
                keySpecs: [
                    { label: "Load Capacity", value: "20kg" },
                    { label: "Cabin Volume", value: "41L" },
                    { label: "Runtime", value: "8-10h" },
                    { label: "Min Passage Width", value: "60cm" }
                ],
                featureSections: [
                    {
                        title: "Autonomous Navigation and Elevator Control",
                        description: "The W3 can independently ride elevators to deliver items to any floor. Its advanced navigation system ensures it reaches the correct room safely, providing a seamless guest experience without human intervention.",
                        image: "https://static.keenon.com/uploads/2025/09/01/4f8087ab91134e15b49764fa9c916295.png?x-oss-process=image/format,webp"
                    },
                    {
                        title: "Secure, Private, and Contactless Delivery",
                        description: "The robot's cabin is fully enclosed to protect guest privacy and ensure item security. The cabin door opens only upon guest confirmation via phone call or password, guaranteeing a safe and contactless delivery.",
                        image: "https://static.keenon.com/uploads/2025/09/01/de93b66d71b34a66a3e14674384d5f49.png?x-oss-process=image/format,webp"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "438 x 410 x 1120 mm" }, { name: "Weight", value: "45kg" }] },
                    { category: "Performance", specs: [{ name: "Max Load", value: "20kg" }, { name: "Cabin Volume", value: "41L" }] },
                    { category: "Battery", specs: [{ name: "Battery Life", value: "8-10h" }, { name: "Charging Time", value: "5h" }] },
                ],
                videoUrl: "https://youtu.be/hDVr_RCuxMs?si=mfDkolDMe18RKlKL",
                videoDescription: "See how the BUTLERBOT W3 revolutionizes hotel service with autonomous and secure delivery.",
                brochureUrl: "https://www.keenon.com/en/product/W3/index.html"
            },
            {
                id: "c30",
                name: "C30",
                category: "Cleaning",
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
                videoUrl: "https://youtu.be/nHcg64XRxks",
                videoDescription: "Watch the C30, a compact and intelligent cleaning robot, effortlessly navigate and clean various commercial spaces with its 4-in-1 functionality.",
                brochureUrl: "https://www.keenon.com/en/product/C30/index.html"
            },
            {
                id: "c40",
                name: "C40",
                category: "Cleaning",
                headline: "Efficient and Agile, a Cleaning Expert for Small and Medium-sized Scenarios.",
                description: "The C40 is a compact, efficient cleaning robot designed for small to medium commercial spaces. It combines scrubbing, sweeping, and mopping to deliver thorough cleaning performance, easily navigating tight spaces and complex layouts.",
                key_features: [
                    "5-in-1 cleaning: sweeping, vacuuming, scrubbing, mopping, and dust mopping",
                    "Compact design for narrow passages (≥65cm)",
                    "Intelligent obstacle avoidance",
                    "Fully automated station for charging, water refill & drainage"
                ],
                applications: ["Office buildings", "Hotels", "Restaurants", "Shopping malls", "Supermarkets"],
                cta: "Learn More",
                image: "https://images2.imgbox.com/a3/12/AnPR5cbG_o.png",
                detailTagline: "The agile 5-in-1 cleaning robot for efficient maintenance in complex commercial spaces.",
                heroImage: "https://images2.imgbox.com/a3/12/AnPR5cbG_o.png",
                keySpecs: [
                    { label: "Cleaning Efficiency", value: "Up to 1200 m²/h" },
                    { label: "Functions", value: "5-in-1" },
                    { label: "Min Passage Width", value: "65cm" },
                    { label: "Runtime", value: "3-5h" }
                ],
                featureSections: [
                    {
                        title: "Agile and Efficient, Excellent Cleaning",
                        description: "With a compact body and a minimum passage width of just 65cm, the C40 easily navigates narrow aisles and complex environments. Its 5-in-1 cleaning capabilities ensure comprehensive floor maintenance in a single pass.",
                        image: "https://images2.imgbox.com/a3/12/AnPR5cbG_o.png"
                    },
                    {
                        title: "Intelligent and Autonomous",
                        description: "Equipped with advanced sensors and perception systems, the C40 intelligently avoids obstacles and adapts its cleaning path. The optional workstation enables fully autonomous operation, including recharging and water management.",
                        image: "https://images2.imgbox.com/a3/12/AnPR5cbG_o.png"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "610 x 570 x 695 mm" }, { name: "Weight", value: "65kg" }] },
                    { category: "Performance", specs: [{ name: "Cleaning Efficiency", value: "Up to 1200 m²/h" }, { name: "Min. Passage Width", value: "65cm" }] },
                    { category: "Tanks", specs: [{ name: "Clean Water", value: "10L" }, { name: "Dirty Water", value: "8L" }] },
                    { category: "Battery", specs: [{ name: "Battery Life", value: "3-5h" }, { name: "Charging Time", value: "3.5h" }] },
                ],
                videoUrl: "https://youtu.be/Gd4mC4TcF6s",
                videoDescription: "Discover the C40, the agile and efficient cleaning expert for small to medium commercial scenarios.",
                brochureUrl: "https://www.keenon.com/en/product/C40/index.html"
            },
            {
                id: "s100",
                name: "S100",
                category: "Heavy Load",
                headline: "Smart Delivery, Efficient and Flexible",
                description: "The S100 is a versatile delivery robot with a fully enclosed, modular design. It offers secure, contact-free delivery of various items like documents, samples, and packages, making it ideal for high-end offices, medical facilities, and government buildings.",
                key_features: [
                    "Fully enclosed cabin for privacy and safety",
                    "Modular design with customizable compartments",
                    "Autonomous navigation and elevator integration",
                    "Intelligent interaction with voice and touch screen"
                ],
                applications: ["High-end office buildings", "Government halls", "Medical institutions", "Hotels"],
                cta: "Learn More",
                image: "https://images2.imgbox.com/9f/c0/tfwUC3wG_o.png",
                detailTagline: "The secure, versatile delivery robot for confidential and contactless item transport.",
                heroImage: "https://images2.imgbox.com/9f/c0/tfwUC3wG_o.png",
                keySpecs: [
                    { label: "Load Capacity", value: "Up to 30kg" },
                    { label: "Cabin Volume", value: "100L" },
                    { label: "Runtime", value: "8-12h" },
                    { label: "Navigation", value: "SLAM" }
                ],
                featureSections: [
                    {
                        title: "Secure and Contactless Delivery",
                        description: "The S100 features a fully enclosed design with password-protected cabins, ensuring the safe and private delivery of items. Its autonomous operation minimizes human contact, enhancing hygiene and security.",
                        image: "https://images2.imgbox.com/9f/c0/tfwUC3wG_o.png"
                    },
                    {
                        title: "Intelligent and Efficient Navigation",
                        description: "Using advanced SLAM technology, the S100 navigates complex environments with ease. It can autonomously take elevators to operate across different floors, providing seamless building-wide delivery services.",
                        image: "https://images2.imgbox.com/9f/c0/tfwUC3wG_o.png"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "490 x 480 x 1150 mm" }, { name: "Weight", value: "55kg" }] },
                    { category: "Performance", specs: [{ name: "Max Load", value: "30kg" }, { name: "Cabin Volume", value: "100L" }] },
                    { category: "Battery", specs: [{ name: "Battery Life", value: "8-12h" }, { name: "Charging Time", value: "5h" }] },
                ],
                videoUrl: "https://youtu.be/KGtbV6l5aJQ",
                videoDescription: "See the S100 in action, delivering items securely and efficiently across different floors.",
                brochureUrl: "https://www.keenon.com/en/product/S100/index.html"
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
    // FIX: Added `value_propositions` object to provide data for About.tsx and Quality.tsx components.
    value_propositions: {
        section_title: "Key Advantages of Robotic Automation",
        benefits: [
            {
                icon: "ProductivityIcon",
                title: "Boost Operational Productivity",
                description: "Automate repetitive tasks to free up your staff, allowing them to focus on high-value, customer-facing activities that drive growth."
            },
            {
                icon: "CustomerExperienceIcon",
                title: "Elevate Customer Experience",
                description: "Deliver consistent, efficient, and novel service that delights customers, builds brand loyalty, and creates memorable interactions."
            },
            {
                icon: "CostEfficiencyIcon",
                title: "Achieve Greater Cost Efficiency",
                description: "Reduce labor costs, minimize human error, and optimize operational workflows for a stronger, more sustainable bottom line."
            },
            {
                icon: "ScalabilityIcon",
                title: "Enable Seamless Scalability",
                description: "Easily deploy and manage a fleet of robots to meet growing demand without the complexities and costs of traditional hiring."
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