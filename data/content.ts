export interface CoreTechFeature {
    title: string;
    description: string;
    image?: string;
}

export interface KeenonCoreTechnology {
    title: string;
    features: CoreTechFeature[];
}

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
    detailTagline?: string;
    heroImage?: string;
    featureSections?: { title?: string; description?: string; image?: string; }[];
    keenonCoreTechnology?: KeenonCoreTechnology;
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
                heroImage: "https://static.keenon.com/uploads/2025/01/07/358ebe3c25fc43d69f1af28d94207c7c.webp",
                featureSections: [
                    {
                        title: "Safe. Hygienic.",
                        description: "Step-activated and password-secured automatic doors ensure hygienic, spill-proof dish serving.",
                        image: "https://images2.imgbox.com/60/67/3TF9efBO_o.png"
                    },
                    {
                        title: "Efficiency Maximized.",
                        description: "Unlocking streamlined delivery efficiency with a spacious 180L cabin volume.",
                        image: "https://images2.imgbox.com/4d/dd/G4tJhQWd_o.png"
                    },
                    {
                        title: "Tailored Courier Solutions",
                        description: "Flexible for diverse needs. Adjustable layers accommodate items of varied heights (23cm, 38cm, 69cm).",
                        image: "https://images2.imgbox.com/02/0c/Q1MVD9Jl_o.png"
                    }
                ],
                keenonCoreTechnology: {
                    title: "Keenon Core Technology",
                    features: [
                        {
                            title: "Precise navigation and positioning",
                            description: "Craft precise positioning maps with seamless spatial data collection for trustworthy reliability.",
                            image: "https://images2.imgbox.com/a0/d7/3DXxs6JL_o.png"
                        },
                        {
                            title: "Synergizing 3D perception with instant response",
                            description: "Precise environmental perception for swift avoidance.",
                            image: "https://images2.imgbox.com/22/a6/Xo1pHMa1_o.png"
                        },
                        {
                            title: "Patented algorithms and multi-robot dispatching",
                            description: "Patented AI algorithms empower robots to optimize route planning for efficient task execution.",
                            image: "https://images2.imgbox.com/72/92/NOMNRmXW_o.png"
                        }
                    ]
                },
                techSpecs: [
                    { 
                        category: "Dimensions & Weight", 
                        specs: [
                            { name: "Dimensions (WxDxH)", value: '49.6 x 62.3 x 135.1cm (19.53" x 24.53" x 53.19")' }, 
                            { name: "Weight", value: "71kg (156lbs)" },
                            { name: "Layer Size", value: '42.2 x 57.5cm (16.61" x 22.64")' }
                        ] 
                    },
                    { 
                        category: "Performance", 
                        specs: [
                            { name: "Moving Speed", value: "0.1-1.0m/s (0.33-3.28ft/s)" },
                            { name: "Slope Angle", value: "5°" },
                            { name: "Total Load Capacity", value: "40kg (88lbs)" },
                            { name: "Minimum Passage Width", value: '75cm (29.53")' }
                        ] 
                    },
                    { 
                        category: "Battery", 
                        specs: [
                            { name: "Battery Life*", value: "Up to 12h" }
                        ] 
                    },
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
                heroImage: "https://static.keenon.com/uploads/2025/01/07/a5250f4cb30446b2912151e2c96f0598.webp",
                featureSections: [
                    {
                        title: "Compact, for Enhanced Agility",
                        description: "Our compact robot navigates spaces as narrow as 55 cm, ensuring maneuverability in cozy environments.",
                        image: "https://images2.imgbox.com/4d/8a/ZPoXaQMG_o.png"
                    },
                    {
                        title: "Smart Self-Pickup Guidance",
                        description: "Made possible by tray sensors, a 300° open tray, and voice and visual guidance on the 10.1\" touch screen.",
                        image: "https://images2.imgbox.com/99/be/4nVj4qOg_o.png"
                    },
                    {
                        title: "Safety, Elevated",
                        description: "DINERBOT T8 uses 3 stereo vision sensors, detecting common high obstacles and those under 5cm, for precise, safe service in any environment.",
                        image: "https://images2.imgbox.com/b1/37/iTh9dLz6_o.png"
                    }
                ],
                keenonCoreTechnology: {
                    title: "Keenon Core Technology",
                    features: [
                        {
                            title: "Precise navigation and positioning",
                            description: "Craft precise positioning maps with seamless spatial data collection for trustworthy reliability.",
                            image: "https://images2.imgbox.com/f2/41/zsKzp31t_o.png"
                        },
                        {
                            title: "Synergizing 3D perception with instant response",
                            description: "Precise environmental perception for swift avoidance.",
                            image: "https://images2.imgbox.com/37/70/1rZ3eJZt_o.png"
                        },
                        {
                            title: "Patented algorithms and multi-robot dispatching",
                            description: "Patented AI algorithms empower robots to optimize route planning for efficient task execution.",
                            image: "https://images2.imgbox.com/1f/f6/9eSB4CYy_o.png"
                        }
                    ]
                },
                techSpecs: [
                    { 
                        category: "Dimensions & Weight", 
                        specs: [
                            { name: "Dimensions (WxDxH)", value: '38.4x46.8x111.1cm (15.12"x18.43"x43.74")' }, 
                            { name: "Weight", value: "34kg (74.96lbs)" }
                        ] 
                    },
                    { 
                        category: "Performance", 
                        specs: [
                            { name: "Max. Moving Speed", value: "1.0m/s (3.28ft/s)" },
                            { name: "Slope Angle", value: "5°" },
                            { name: "Total Load Capacity", value: "20 kg (44 lbs)" },
                            { name: "Minimum Passage Width", value: '55 cm (21.65")' }
                        ] 
                    },
                    { 
                        category: "Battery", 
                        specs: [
                            { name: "Battery Life*", value: "Up to 15h" }, 
                            { name: "Charging Time**", value: "4h" }
                        ] 
                    },
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
                heroImage: "https://static.keenon.com/uploads/2025/01/07/b924622435a94162bcacef7af337553c.webp",
                featureSections: [
                    {
                        title: "Adjustable Layers",
                        description: "The trays allow for adjustable space heights of 19.5cm, 16.9cm, 25.3cm, 22.8cm"
                    },
                    {
                        title: "40kg Load Capacity",
                        description: "10kg per layer, for efficient food service."
                    },
                    {
                        title: "Autonomous Charging",
                        description: "Extended battery life, with a single charge lasting up to 18 hours."
                    },
                    {
                        title: "Big Touch Screen, Perfect Height",
                        description: "Optimize daily operations with large touch screen and ideal height."
                    }
                ],
                keenonCoreTechnology: {
                    title: "Keenon Core Technology",
                    features: [
                        {
                            title: "Precise navigation and positioning",
                            description: "Craft precise positioning maps with seamless spatial data collection for trustworthy reliability."
                        },
                        {
                            title: "Synergizing 3D perception with instant response",
                            description: "Precise environmental perception for swift avoidance."
                        },
                        {
                            title: "Chassis designs with trio patents",
                            description: "Vehicle-grade independent suspension with shock absorption, based on CAE simulation for superior performance."
                        },
                        {
                            title: "Patented algorithms and multi-robot dispatching",
                            description: "Patented AI algorithms empower robots to optimize route planning for efficient task execution."
                        }
                    ]
                },
                techSpecs: [
                    { 
                        category: "Dimensions & Weight", 
                        specs: [
                            { name: "Dimensions (WxDxH)", value: '50.0 x 52.7 x 126.6cm (19.69" x 20.75" x 49.84")' }, 
                            { name: "Weight*", value: "63kg (139lbs)" }
                        ] 
                    },
                    { 
                        category: "Performance", 
                        specs: [
                            { name: "Moving Speed", value: "0.1-1.0 m/s (0.33-3.28 ft/s)" },
                            { name: "Slope Angle", value: "5°" },
                            { name: "Total Load Capacity", value: "40kg (88lbs)" },
                            { name: "Minimum Passage Width", value: '70cm (27.56")' }
                        ] 
                    },
                    { 
                        category: "Battery", 
                        specs: [
                            { name: "Battery Life**", value: "Up to 18h" }, 
                            { name: "Charging Time***", value: "4h" }
                        ] 
                    },
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
                heroImage: "https://static.keenon.com/uploads/2025/03/17/0e55bb5ce2d34973821c534d912ebd96.jpg?x-oss-process=image/format,webp",
                featureSections: [
                    {
                        title: "Interactive & Engaging, Making Every Moment Fun",
                        description: "Adaptive head movements respond to actions like movement, touch, and delivery, providing dynamic feedback"
                    },
                    {
                        title: "Engagement Elevated",
                        description: "Movable heads, 23.8\" screen, and interactive buttons redefine engagement."
                    },
                    {
                        title: "Effortless Pickup, Thoughtfully Designed",
                        description: "a. Touch Control b. AI Tray Detection"
                    },
                    {
                        title: "Safeguarding Every Step",
                        description: "360° Recognition, equipped with 4 stereo vision sensors + VSLAM + 1 RGB camera for ultra-wide, clearer vision."
                    },
                    {
                        title: "Take it Easy, Savor the Ease",
                        description: "Open-access tray for easy self-pickup, with visual detection, tray lights, on-screen guidance and voice prompts."
                    },
                    {
                        title: "Versatile Styles, Your Way",
                        description: "Pick Your Options: Head Accessories, Expressions, Voices, Skins, and a Large Screen"
                    }
                ],
                keenonCoreTechnology: {
                    title: "Keenon Core Technology",
                    features: [
                        {
                            title: "Precise navigation and positioning",
                            description: "Craft precise positioning maps with seamless spatial data collection for trustworthy reliability."
                        },
                        {
                            title: "Patented algorithms and multi-robot dispatching",
                            description: "Patented AI algorithms empower robots to optimize route planning for efficient task execution."
                        }
                    ]
                },
                techSpecs: [
                    { 
                        category: "Dimensions & Weight", 
                        specs: [
                            { name: "Dimensions (WxDxH)", value: '48.6 x 55.5 x 139.9 cm (19.13" x 21.85" x 54.69")' }, 
                            { name: "Weight", value: "58kg (128lbs)" }
                        ] 
                    },
                    { 
                        category: "Performance", 
                        specs: [
                            { name: "Max. Moving Speed", value: "1m/s (3.28 ft/s)" },
                            { name: "Slope Angle", value: "5°" },
                            { name: "Total Load Capacity", value: "40kg (88lbs)" },
                            { name: "Minimum Passage Width", value: '59cm (23.23")' }
                        ] 
                    },
                    { 
                        category: "Battery", 
                        specs: [
                            { name: "Battery Life*", value: "up to 8h" }, 
                            { name: "Charging Time**", value: "5.5h" }
                        ] 
                    },
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
                heroImage: "https://static.keenon.com/uploads/2025/08/27/225f3bdaa69441529a0787643b8f7ebd.jpg?x-oss-process=image/format,webp",
                featureSections: [
                    {
                        image: "https://static.keenon.com/uploads/2025/08/27/bff71a3e19bc43f6ba5f7ee9055555f1.jpg?x-oss-process=image/format,webp"
                    },
                    {
                        image: "https://static.keenon.com/uploads/2025/08/27/e5d5ba0f417346fbb0cbbdb038746f8a.jpg?x-oss-process=image/format,webp"
                    },
                    {
                        image: "https://static.keenon.com/uploads/2025/08/27/15eba5c9e4b54040a2048fd7dea74722.jpg?x-oss-process=image/format,webp"
                    },
                    {
                        image: "https://static.keenon.com/uploads/2025/08/27/f485683db03e444a8ccf48e2e158e77b.jpg?x-oss-process=image/format,webp"
                    }
                ],
                techSpecs: [
                    { 
                        category: "Dimensions & Weight", 
                        specs: [
                            { name: "Dimensions (WxDxH)", value: "463 x 384 x 1123 mm" }, 
                            { name: "Weight", value: "38kg" },
                            { name: "Tray Dimensions (middle)", value: "383 × 342 × 220 mm" },
                            { name: "Tray Dimensions (bottom)", value: "383 × 342 × 285 mm" }
                        ] 
                    },
                    { 
                        category: "Performance", 
                        specs: [
                            { name: "Maximum Load Capacity", value: "20 kg" },
                            { name: "Operating Speed", value: "0.1 to 1.0 m/s" },
                            { name: "Minimum Passage Width", value: "49cm" },
                            { name: "Maximum Climbing Angle", value: "5°" }
                        ] 
                    },
                    { 
                        category: "Battery", 
                        specs: [
                            { name: "Battery Specification", value: "DC25.9V, 20.8Ah" }
                        ] 
                    },
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
                heroImage: "https://static.keenon.com/uploads/2025/01/07/ed59fd54ff2f4a45a53f62519bdaf4aa.webp",
                featureSections: [
                    {
                        title: "The IoT Elevator Rider",
                        description: "The BUTLERBOT W3 can now take the elevator for item delivery, streamlining business processes."
                    },
                    {
                        title: "Safe. Hygienic. Private",
                        description: "Automatic doors and ventilation ensure contactless, hygienic dish service, prioritizing privacy and spill prevention."
                    },
                    {
                        title: "1 Dispatch, 4 Locations Served",
                        description: "Adjustable up to four compartments, each accessible independently, serving up to 4 locations' diverse needs."
                    }
                ],
                techSpecs: [
                    { 
                        category: "Dimensions & Weight", 
                        specs: [
                            { name: "Dimensions (WxDxH)", value: '45.9 x 54.9 x 108.1 cm (18.07" x 21.61" x 42.56")' }, 
                            { name: "Weight", value: "48kg (106lbs)" }
                        ] 
                    },
                    { 
                        category: "Performance", 
                        specs: [
                            { name: "Max. Moving Speed", value: "0.8m/s (2.63ft/s)" },
                            { name: "Slope Angle", value: "7°" },
                            { name: "Total Load Capacity", value: "20kg (44lbs)" },
                            { name: "Minimum Passage Width", value: '70cm (27.56")' }
                        ] 
                    },
                    { 
                        category: "Battery", 
                        specs: [
                            { name: "Battery Life*", value: "Up to 12h" }, 
                            { name: "Charging Time**", value: "6.5h" }
                        ] 
                    },
                ],
                videoUrl: "https://youtu.be/hDVr_RCuxMs?si=mfDkolDMe18RKlKL",
                videoDescription: "See how the BUTLERBOT W3 revolutionizes hotel service with autonomous and secure delivery.",
                brochureUrl: "https://www.keenon.com/en/product/W3/index.html"
            },
            {
                id: "c20",
                name: "KLEENBOT C20",
                category: "Cleaning",
                headline: "Efficient and Agile, A Cleaning Expert for Small to Medium-sized Scenarios",
                description: "The C20 is a compact, efficient cleaning robot designed for small to medium commercial spaces. It combines 4-in-1 cleaning functions to deliver thorough performance while easily navigating tight spaces.",
                key_features: [
                    "4-in-1 cleaning: sweeping, scrubbing, vacuuming, and mopping",
                    "Compact body for navigating narrow spaces (≥60cm)",
                    "Intelligent perception and upgraded obstacle avoidance",
                    "Optional workstation for fully automated operation"
                ],
                applications: ["Office buildings", "Hotels", "Restaurants", "Shopping malls", "Supermarkets"],
                cta: "Learn More",
                image: "https://static.keenon.com/uploads/2025/04/10/bffedda3ed8a49fb9d48db0731dafa3b.png?x-oss-process=image/format,webp",
                detailTagline: "The agile 4-in-1 cleaning robot for efficient maintenance in complex commercial spaces.",
                heroImage: "https://static.keenon.com/uploads/2025/05/30/249ddd79696847a39faff2155e7b15b9.jpg?x-oss-process=image/format,webp",
                featureSections: [
                    {
                        image: "https://static.keenon.com/uploads/2025/05/30/92729e51aaa74750b1d077c75c631a2b.jpg?x-oss-process=image/format,webp"
                    },
                    {
                        image: "https://static.keenon.com/uploads/2025/05/30/cecf06ebc4bb492688f605e2412e4052.jpg?x-oss-process=image/format,webp"
                    },
                    {
                        image: "https://static.keenon.com/uploads/2025/05/30/be9a556dec134c0ca696adad0952edd3.jpg?x-oss-process=image/format,webp"
                    },
                    {
                        image: "https://static.keenon.com/uploads/2025/05/30/6c9b261c52044095a31aa1f23f545b4a.jpg?x-oss-process=image/format,webp"
                    }
                ],
                techSpecs: [
                    { 
                        category: "Dimensions & Weight", 
                        specs: [
                            { name: "Dimensions (WxDxH)", value: "523 x 400 x 351 mm" }, 
                            { name: "Weight", value: "22 kg" }
                        ] 
                    },
                    { 
                        category: "Performance", 
                        specs: [
                            { name: "Cleaning Width (Sweeping/Vacuuming)", value: "450 mm" },
                            { name: "Cleaning Width (Scrubbing)", value: "285 mm" },
                            { name: "Cleaning Efficiency", value: "Up to 400 ㎡/h" }
                        ] 
                    },
                    { 
                        category: "Tanks & Bins", 
                        specs: [
                            { name: "Clean Water Tank Capacity", value: "7L" },
                            { name: "Waste Water Tank Capacity", value: "5L" },
                            { name: "Trash Bin Capacity", value: "0.66L" }
                        ] 
                    },
                    { 
                        category: "Battery", 
                        specs: [
                            { name: "Charging Time", value: "4h" },
                            { name: "Battery Specification", value: "DC 24V 15.6Ah" }
                        ] 
                    },
                ],
                videoUrl: "https://youtu.be/JAEnvexMePw?si=yjBLaZAZoxl1UtvJ",
                videoDescription: "Discover the C20, the agile and efficient cleaning expert for small to medium commercial scenarios.",
                brochureUrl: "https://www.keenon.com/en/product/C20/index.html"
            },
            {
                id: "c30",
                name: "KLEENBOT C30",
                category: "Cleaning",
                headline: "Smaller and Smarter, Your Cleaning Expert",
                description: "The compact size of the C30 allows it to easily navigate narrow spaces, while its powerful 4-in-1 cleaning functions and intelligent perception capabilities ensure efficient and thorough cleaning results in various commercial settings.",
                key_features: [
                    "4-in-1 cleaning: sweeping, scrubbing, vacuuming, and mopping",
                    "Compact 50cm body for navigating narrow spaces (≥55cm)",
                    "Intelligent perception and upgraded obstacle avoidance",
                    "Fully automated: auto-recharge, water refill & drainage"
                ],
                applications: ["Restaurants", "Hotels", "Offices", "Shopping Malls", "Supermarkets"],
                cta: "Learn More",
                image: "https://static.keenon.com/uploads/2024/12/30/eb8ba6e205eb4134b5c51fcde8733835.png?x-oss-process=image/format,webp",
                detailTagline: "The nimble and compact 4-in-1 cleaning robot for complex commercial environments.",
                heroImage: "https://static.keenon.com/uploads/2025/01/07/9137ed1569104c14ba2821eaf1b11678.jpg?x-oss-process=image/format,webp",
                featureSections: [
                    {
                        title: "3-in-1 Dry Cleaning",
                        description: "Sweeping, vacuuming, and dust mopping covers 610mm wide."
                    },
                    {
                        title: "100% Charged, 2500㎡ cleaned",
                        description: "With one complete automatic charging, the C30 can clean up to 2500㎡, ideal for extended cleaning sessions."
                    },
                    {
                        title: "Dual Operation Modes",
                        description: "Switch between manual map building and automated cleaning with the innovative extendable handle."
                    },
                    {
                        title: "Remote Assign and Track",
                        description: "Effortlessly assign and track cleaning tasks, and gain insights into your C30 with the KEENON App."
                    }
                ],
                techSpecs: [
                    { 
                        category: "Dimensions & Weight", 
                        specs: [
                            { name: "Dimensions (WxDxH)", value: '49.0 x 52.0 x 75.0cm (19.29" x 20.47" x 29.53")' }, 
                            { name: "Weight", value: "35kg (77lbs)" }
                        ] 
                    },
                    { 
                        category: "Performance", 
                        specs: [
                            { name: "Max. Moving Speed", value: "0.8m/s (2.63ft/s)" },
                            { name: "Cleaning Efficiency", value: "600㎡/h" },
                            { name: "Maximum Cleaning Width***", value: '61.0cm (24.02")' },
                            { name: "Maximum Suction", value: "19000Pa" }
                        ] 
                    },
                    { 
                        category: "Battery", 
                        specs: [
                            { name: "Battery Life* (Sweeping & Vacuuming)", value: "Up to 6h" },
                            { name: "Battery Life* (Dust Mopping)", value: "Up to 10h" },
                            { name: "Charging Time**", value: "5-6h" }
                        ] 
                    },
                ],
                videoUrl: "https://youtu.be/nHcg64XRxks?si=ig7cLxqnHVDiN3Oa",
                videoDescription: "Watch the C30, a compact and intelligent cleaning robot, effortlessly navigate and clean various commercial spaces with its 4-in-1 functionality.",
                brochureUrl: "https://www.keenon.com/en/product/C30/index.html"
            },
            {
                id: "c40",
                name: "KLEENBOT C40",
                category: "Cleaning",
                headline: "Efficient and Agile, a Cleaning Expert for Small and Medium-sized Scenarios.",
                description: "The C40 is a compact, efficient cleaning robot designed for small to medium commercial spaces. It combines 5-in-1 cleaning functions to deliver thorough cleaning performance, easily navigating tight spaces and complex layouts.",
                key_features: [
                    "5-in-1 cleaning: sweeping, vacuuming, scrubbing, mopping, and dust mopping",
                    "Compact design for narrow passages (≥65cm)",
                    "Intelligent obstacle avoidance",
                    "Fully automated station for charging, water refill & drainage"
                ],
                applications: ["Office buildings", "Hotels", "Restaurants", "Shopping malls", "Supermarkets"],
                cta: "Learn More",
                image: "https://static.keenon.com/uploads/2025/03/29/57c63343437f4cc9a4513d0ec12adec1.png?x-oss-process=image/format,webp",
                detailTagline: "The agile 5-in-1 cleaning robot for efficient maintenance in complex commercial spaces.",
                heroImage: "https://static.keenon.com/uploads/2025/03/29/94bd7277215d4acbab6af9106eb7085e.jpg?x-oss-process=image/format,webp",
                featureSections: [
                    { image: "https://static.keenon.com/uploads/2025/03/29/d587a7566ad74622a9a60b03a18f0feb.jpg?x-oss-process=image/format,webp" },
                    { image: "https://static.keenon.com/uploads/2025/03/29/92beedc365b8445291e2f708b34fa76d.jpg?x-oss-process=image/format,webp" },
                    { image: "https://static.keenon.com/uploads/2025/03/29/4630618af3b245c289eff9f2f709651f.jpg?x-oss-process=image/format,webp" },
                    { image: "https://static.keenon.com/uploads/2025/03/29/0e892556adb2497ea476e49d6d90807e.jpg?x-oss-process=image/format,webp" },
                    { image: "https://static.keenon.com/uploads/2025/03/29/6f9053cab7b040079dcaf03874657cde.jpg?x-oss-process=image/format,webp" },
                    { image: "https://static.keenon.com/uploads/2025/03/29/420cc45ae1404a58b2aa74abc488baa5.jpg?x-oss-process=image/format,webp" },
                    { image: "https://static.keenon.com/uploads/2025/03/29/8cc941e0305d4abf925fbf5d23802331.jpg?x-oss-process=image/format,webp" },
                    { image: "https://static.keenon.com/uploads/2025/03/29/aa0a4be7434448f5b99b507c2ebd7cd7.jpg?x-oss-process=image/format,webp" }
                ],
                techSpecs: [
                    { 
                        category: "Dimensions & Weight", 
                        specs: [
                            { name: "Dimensions (w/o squeegee)", value: "578 × 500 × 690 mm" }, 
                            { name: "Dimensions (w/ squeegee)", value: "616 × 550 × 690 mm" },
                            { name: "Weight", value: "70 kg" }
                        ] 
                    },
                    { 
                        category: "Performance", 
                        specs: [
                            { name: "Cleaning Width (Sweeping)", value: "560 mm" },
                            { name: "Cleaning Width (Vacuuming & Scrubbing)", value: "400 mm" },
                            { name: "Cleaning Efficiency", value: "Up to 1,100 ㎡/h" }
                        ] 
                    },
                    { 
                        category: "Tanks & Bins", 
                        specs: [
                            { name: "Clean Water Tank", value: "16 L" },
                            { name: "Waste Water Tank", value: "14 L" },
                            { name: "Dust Bag Capacity", value: "8 L" },
                            { name: "Trash Bin Capacity", value: "0.7 L" }
                        ] 
                    },
                     { 
                        category: "Battery", 
                        specs: [
                            { name: "Maximum Runtime (Scrubbing)", value: "up to 5 hours" },
                            { name: "Maximum Runtime (Sweeping)", value: "up to 12 hours" },
                            { name: "Charging Time", value: "2 hours" },
                            { name: "Battery Specification", value: "DC 25.6V, 50Ah" }
                        ] 
                    },
                ],
                videoUrl: "https://youtu.be/Gd4mC4TcF6s?si=BlKfJOHmSpcMcOGu",
                videoDescription: "Discover the C40, the agile and efficient cleaning expert for small to medium commercial scenarios.",
                brochureUrl: "https://www.keenon.com/en/product/C40/index.html"
            },
            {
                id: "c55",
                name: "KLEENBOT C55",
                category: "Cleaning",
                headline: "Advanced Cleaning Solution for Large Environments",
                description: "The C55 is an industrial-grade cleaning robot designed for maximum efficiency in large-scale commercial spaces. More details coming soon.",
                key_features: [],
                applications: [],
                cta: "Learn More",
                image: "https://static.keenon.com/uploads/2025/04/14/051877d47539412287e75afedd94a16f.png?x-oss-process=image/format,webp",
                heroImage: "https://static.keenon.com/uploads/2025/04/11/546e8f90ea2741a08d76ca366ae2c2eb.jpg?x-oss-process=image/format,webp",
            },
            {
                id: "s100",
                name: "KEENON S100",
                category: "Heavy Load",
                headline: "A New Generation of Fully Enclosed Delivery Robot",
                description: "The S100 is a new generation of fully enclosed delivery robot that ensures the safe and private delivery of items. With modular compartments, it meets diverse delivery needs for items of different sizes.",
                key_features: [
                    "Fully enclosed and private cabin",
                    "Modular compartments for flexible combinations",
                    "Autonomous elevator riding for multi-floor delivery",
                    "Smart call and notifications for item retrieval"
                ],
                applications: ["Office Buildings", "Government Affairs Halls", "Medical Institutions", "High-end Hotels"],
                cta: "Learn More",
                image: "https://static.keenon.com/admin/9fe4eb592a7d46c19cb58f5dd2c645db.webp",
                detailTagline: "A New Generation of Fully Enclosed Delivery Robot for Secure and Private Transport.",
                heroImage: "https://static.keenon.com/uploads/2025/01/07/09654c9cf811439c943a6e53a84d5173.jpg?x-oss-process=image/format,webp",
                featureSections: [
                    {
                        title: "100kg+ Load Capacity",
                        description: "Reliably transport light loads, facilitating the movement of bulky goods across your workspace."
                    },
                    {
                        title: "Plug-and-Play",
                        description: "Powered by pre-installed OS and App, S100 offers ready-to-use solutions for instant robot deployment."
                    },
                    {
                        title: "24/7 Delivery, Nonstop Efficiency.",
                        description: "3 charging options: charging pile, adapter, & 15s-to-swap battery ensures around-the-clock delivery."
                    },
                    {
                        title: "Operation Safety, Maximized",
                        description: "360° obstacle avoidance, anti-collision strip, and 3 emergency stop buttons make sure of it."
                    }
                ],
                techSpecs: [
                    { 
                        category: "Dimensions & Weight", 
                        specs: [
                            { name: "Dimensions (WxDxH)", value: '92.5 x 62.0 x 128.2cm (36.42" x 24.41" x 50.47")' }, 
                            { name: "Weight", value: "87.5kg (192.9lbs)" },
                            { name: "Standard Shelf Size", value: '86.5 x 60.0 x 80.0cm (34.06" x 23.62" x 31.50")' }
                        ] 
                    },
                    { 
                        category: "Performance", 
                        specs: [
                            { name: "Total Load Capacity", value: "100kg+ (220lbs+)" },
                            { name: "Max. Moving Speed", value: "1m/s (3.28ft/s)" },
                            { name: "Minimum Passage Width", value: '90cm (29.53")' }
                        ] 
                    },
                    { 
                        category: "Battery", 
                        specs: [
                            { name: "Battery Life*", value: "Up to 8h" }, 
                            { name: "Charging Time**", value: "2.5h" }
                        ] 
                    },
                ],
                videoUrl: "https://youtu.be/KGtbV6l5aJQ?si=hatmy42v9NFHGQhg",
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