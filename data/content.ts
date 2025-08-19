

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
    image: string;
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
        headline: "Powering Indonesia's Future, Together.",
        subheadline: "At Xinyi, we're dedicated to reshaping how Indonesia cleans, serves, and operates — through intelligent automation. Xinyi Trading Group collaborates with Kawan Lama Group to distribute Pudu Robotics' innovative service robots in Indonesia. This partnership stems from Kawan Lama's legacy as Indonesia's premier industrial equipment importer since 1955. Following extensive research in China, we identified Pudu Robotics as the market leader in service automation. Combining Kawan Lama's local expertise with Xinyi's nationwide distribution ensures seamless access and reliable support. Together, we empower businesses to boost efficiency, enhance service quality, and achieve measurable operational improvements.",
        primary_cta: "Explore Products",
        secondary_cta: "Watch Demo",
    },
    products_showcase: {
        section_title: "Our Robot Solutions",
        section_subtitle: "Discover the perfect robot for your business needs",
        products: [
            {
                id: "bellabot",
                name: "BellaBot",
                category: "Delivery Robot",
                headline: "The Robot Everyone Loves, with Performance Everyone Needs",
                description: "BellaBot isn't just a delivery robot — it's a brand ambassador on wheels. With expressive interactions, smooth navigation, and precise delivery, BellaBot delights guests while streamlining operations.",
                key_features: [
                    "Expressive AI face for friendly customer interaction",
                    "Multi-tray design for high-volume delivery",
                    "Centimeter-level navigation & obstacle avoidance",
                    "Supports both Visual SLAM and Laser SLAM"
                ],
                applications: ["Restaurants", "Hotels", "Corporate Spaces"],
                cta: "Learn More",
                image: "https://cdn.pudutech.com/nav_product_bellabot_f807eb57b5.png",
                detailTagline: "The delivery robot that brings personality and performance to your service floor.",
                heroImage: "https://cdn.pudutech.com/nav_product_bellabot_f807eb57b5.png",
                keySpecs: [
                    { label: "Trays", value: "4" },
                    { label: "Load Capacity", value: "40kg" },
                    { label: "Runtime", value: "13h" },
                    { label: "Charging Time", value: "4.5h" }
                ],
                featureSections: [
                    {
                        title: "Expressive AI Interaction",
                        description: "BellaBot features a range of cute, expressive animations on its screen-based face, creating a memorable and friendly experience for customers. It responds to touch and can engage in simple, charming interactions.",
                        image: "https://cdn.pudutech.com/nav_product_bellabot_f807eb57b5.png"
                    },
                    {
                        title: "3D Omnidirectional Obstacle Avoidance",
                        description: "Equipped with dual SLAM solutions and advanced 3D sensors, BellaBot navigates complex environments with ease. It can detect and avoid obstacles with a response time of just 0.5 seconds, ensuring safe and reliable operation.",
                        image: "https://cdn.pudutech.com/nav_product_bellabot_f807eb57b5.png"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "565 x 537 x 1290 mm" }, { name: "Weight", value: "55kg" }] },
                    { category: "Performance", specs: [{ name: "Max Speed", value: "1.2m/s" }, { name: "Load Capacity", value: "10kg/tray" }] },
                    { category: "Battery", specs: [{ name: "Battery Life", value: "13h" }, { name: "Charging", value: "Auto/Manual" }] },
                ],
                videoUrl: "https://www.youtube.com/watch?v=MMUkyfJ9Yhc",
                videoDescription: "See how BellaBot charms customers and streamlines service with its friendly AI face and efficient delivery capabilities. A true restaurant superstar.",
                brochureUrl: "https://drive.google.com/uc?export=download&id=16ep3h2yGJ6tg-9q6LwbIlIyL2xWVhlYc"
            },
            {
                id: "bellabot_pro",
                name: "BellaBot Pro",
                category: "Premium Delivery & Marketing",
                headline: "Deliveries That Sell Themselves",
                description: "BellaBot Pro merges flawless delivery with built-in marketing screens. It greets guests, explains products, and promotes offers while working in high-traffic environments.",
                key_features: [
                  "Dual LCD screens for ads & interaction",
                  "Stable chassis for smooth delivery",
                  "AI voice interaction for personalized engagement",
                  "Superior navigation in complex layouts"
                ],
                applications: ["Premium Hotels", "High-End Restaurants", "Retail Stores"],
                cta: "Learn More",
                image: "https://cdn.pudutech.com/nav_product_bella_pro_816bfa936e.png",
                detailTagline: "The ultimate fusion of premium delivery service and interactive marketing.",
                heroImage: "https://thumbs2.imgbox.com/33/45/T3GdXlHA_t.png",
                keySpecs: [
                    { label: "Screens", value: "2x HD" },
                    { label: "Load Capacity", value: "40kg" },
                    { label: "AI Voice", value: "Enabled" },
                    { label: "Runtime", value: "11h" }
                ],
                featureSections: [
                    {
                        title: "Dual Screens for Dynamic Marketing",
                        description: "BellaBot Pro is equipped with two high-definition screens: a main interactive face and a top-mounted screen for dynamic advertising. This allows for simultaneous customer engagement and brand promotion.",
                        image: "https://cdn.pudutech.com/nav_product_bella_pro_816bfa936e.png"
                    },
                    {
                        title: "Advanced AI Voice and Interaction",
                        description: "Featuring an advanced AI voice module with 360° sound localization, BellaBot Pro can engage in natural, intelligent conversations. It understands context and provides a highly personalized service experience.",
                        image: "https://cdn.pudutech.com/nav_product_bella_pro_816bfa936e.png"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "570 x 550 x 1290 mm" }, { name: "Weight", value: "55kg" }] },
                    { category: "Performance", specs: [{ name: "Max Speed", value: "1.2m/s" }, { name: "Load Capacity", value: "10kg/tray" }] },
                    { category: "Battery", specs: [{ name: "Battery Life", value: "11h" }, { name: "Charging", value: "Auto/Manual" }] }
                ],
                videoUrl: "https://www.youtube.com/watch?v=BiJtudsRqkw",
                videoDescription: "Meet the ultimate service professional. BellaBot Pro combines premium delivery with dynamic advertising on its dual screens, elevating brand presence with every order.",
                brochureUrl: "/brochures/bellabot pro_compressed.pdf"
            },
            {
                id: "mt1",
                name: "MT1",
                category: "Industrial Sweeping",
                headline: "Big Spaces. Bigger Cleaning Power",
                description: "Designed for expansive venues, MT1's AI-powered sweeping handles everything from fine dust to large debris with real-time trash recognition and targeted spot cleaning.",
                key_features: [
                  "Cleans up to 64,000+ ft²/h in spot-cleaning mode",
                  "AI trash recognition & continuous learning",
                  "Active dust control to prevent secondary pollution",
                  "Long battery life for uninterrupted operation"
                ],
                applications: ["Warehouses", "Airports", "Shopping Malls"],
                cta: "Learn More",
                image: "https://cdn.pudutech.com/nav_product_mt_9d40c8e237.webp",
                detailTagline: "The AI-powered robotic sweeper for ultimate efficiency in large-scale commercial spaces.",
                heroImage: "https://thumbs2.imgbox.com/3b/e3/1E84t17Y_t.png",
                 keySpecs: [
                    { label: "Cleaning Efficiency", value: "7000 m²/h" },
                    { label: "AI Recognition", value: "Trash Detect" },
                    { label: "Dust Bin", value: "35L" },
                    { label: "Runtime", value: "Up to 10h" }
                ],
                featureSections: [
                    {
                        title: "AI-Powered Debris Recognition",
                        description: "MT1 utilizes AI vision to recognize various types of debris, from bottles and paper to dust and leaves. It continuously learns and optimizes its cleaning strategies for maximum effectiveness.",
                        image: "https://cdn.pudutech.com/nav_product_mt_9d40c8e237.webp"
                    },
                    {
                        title: "Built for Industrial Scale",
                        description: "With a large 35L dustbin, wide 1000mm sweeping path, and long-lasting battery, the MT1 is engineered to clean vast areas like factory floors, warehouses, and parking lots with minimal human oversight.",
                        image: "https://cdn.pudutech.com/nav_product_mt_9d40c8e237.webp"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "840 x 600 x 490 mm" }, { name: "Weight", value: "65kg" }] },
                    { category: "Performance", specs: [{ name: "Sweeping Width", value: "1000mm" }, { name: "Productivity", value: "5000-7000 m²/h" }] },
                    { category: "Capacity", specs: [{ name: "Dust Bin", value: "35L" }, { name: "Battery Life", value: "Up to 10h" }] }
                ],
                videoUrl: "https://www.youtube.com/watch?v=RczLmqYRAXc",
                videoDescription: "Experience the industrial might of the MT1 as it intelligently sweeps large-scale venues, using AI to recognize and tackle debris for a spotless finish every time.",
                brochureUrl: "https://drive.google.com/uc?export=download&id=1dNUAQ9LPeNhv7w5rety9hTpRiv0KRiOG"
            },
            {
                id: "cc1",
                name: "CC1",
                category: "Cleaning Robot",
                headline: "One Robot. Four Cleaning Functions. Zero Hassle",
                description: "The CC1 cleans, sweeps, vacuums, and mops — all without plumbing modifications. Designed for offices, hotels, and retail spaces, it automates floor care with smart mapping and hands-free operation.",
                key_features: [
                    "Scrubbing, sweeping, vacuuming & mopping",
                    "Mobile water station — no building mods needed",
                    "Intelligent route planning",
                    "Measurable cleaning reports"
                ],
                applications: ["Offices", "Hotels", "Retail Spaces"],
                cta: "Learn More",
                image: "https://cdn.pudutech.com/nav_product_cc1_8baf7f1424.png",
                detailTagline: "The all-in-one autonomous solution for commercial floor cleaning.",
                heroImage: "https://cdn.pudutech.com/nav_product_cc1_8baf7f1424.png",
                keySpecs: [
                    { label: "Cleaning Efficiency", value: "12,000 m²/day" },
                    { label: "Functions", value: "4-in-1" },
                    { label: "Water Tank", value: "15L Clean" },
                    { label: "Runtime", value: "6-8h" }
                ],
                featureSections: [
                    {
                        title: "Truly Automated Operations",
                        description: "CC1 offers a hands-free experience with automatic water changes, refilling, and self-cleaning capabilities. Its mobile workstation allows deployment anywhere without costly building modifications.",
                        image: "https://cdn.pudutech.com/nav_product_cc1_8baf7f1424.png"
                    },
                    {
                        title: "Smart and Safe Navigation",
                        description: "Leveraging 3D obstacle avoidance and multi-sensor fusion, CC1 intelligently navigates its environment. It generates cleaning reports, providing data-driven insights to optimize your cleaning schedule.",
                        image: "https://cdn.pudutech.com/nav_product_cc1_8baf7f1424.png"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "629 x 552 x 695 mm" }, { name: "Weight", value: "75kg" }] },
                    { category: "Performance", specs: [{ name: "Cleaning Width", value: "500mm" }, { name: "Max Speed", value: "1.2m/s" }] },
                    { category: "Tanks", specs: [{ name: "Clean Water", value: "15L" }, { name: "Dirty Water", value: "15L" }] }
                ],
                videoUrl: "https://www.youtube.com/watch?v=A3_IVfmUMGA",
                videoDescription: "Witness the CC1's 4-in-1 cleaning power. From sweeping to mopping, this all-in-one unit provides a truly hands-free, automated cleaning solution for any commercial space.",
                brochureUrl: "https://drive.google.com/uc?export=download&id=1wWsYbV-z_dXBT8AuRyFToxdbDJKt7UkT"
            },
            {
                id: "kettybot_pro",
                name: "KettyBot Pro",
                category: "Customer Engagement",
                headline: "The AI Host That Greets, Guides, and Sells",
                description: "KettyBot attracts customers with an engaging personality, crisp voice interaction, and a vibrant 18.5\" display for ads. It guides guests, promotes products, and delivers while making experiences unforgettable.",
                key_features: [
                    "Active customer tracking & engagement",
                    "Customizable ad playlists for targeted marketing",
                    "Multiple delivery & attraction modes",
                    "360° sound localization with noise suppression"
                ],
                applications: ["Retail", "Restaurants", "Shopping Centers"],
                cta: "Learn More",
                image: "https://cdn.pudutech.com/nav_product_kettybotpro_64d5202d1a.png",
                detailTagline: "More than a robot—it's your marketing, hosting, and delivery specialist in one.",
                heroImage: "https://thumbs2.imgbox.com/15/55/ep2jAK3p_t.jpg",
                keySpecs: [
                    { label: "Display Size", value: "18.5\" HD" },
                    { label: "AI Voice", value: "Enabled" },
                    { label: "Runtime", value: "8-12h" },
                    { label: "Modes", value: "3+" }
                ],
                featureSections: [
                    {
                        title: "A Walking Billboard",
                        description: "The centered, 18.5-inch HD screen is perfect for displaying advertisements and promotions. The PUDU Ads platform allows for easy management of marketing content, turning KettyBot Pro into a powerful sales tool.",
                        image: "https://cdn.pudutech.com/nav_product_kettybotpro_64d5202d1a.png"
                    },
                    {
                        title: "Intelligent Greetings & Guidance",
                        description: "KettyBot Pro can actively detect and greet passing customers, engaging them with custom voice lines and on-screen content. In guide mode, it can lead customers to specific seats or store sections, enhancing service quality.",
                        image: "https://cdn.pudutech.com/nav_product_kettybotpro_64d5202d1a.png"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "435 x 450 x 1120 mm" }, { name: "Weight", value: "38kg" }] },
                    { category: "Performance", specs: [{ name: "Max Speed", value: "1.2m/s" }, { name: "Load Capacity", value: "10kg" }] },
                    { category: "Display", specs: [{ name: "Screen Size", value: "18.5 inch" }, { name: "Resolution", value: "1080p" }] }
                ],
                videoUrl: "https://www.youtube.com/watch?v=nbZEkz0keak&t=8s",
                videoDescription: "Discover how KettyBot Pro does more than just deliver—it greets, guides, and engages customers with its vibrant HD screen, turning every interaction into a marketing opportunity.",
                brochureUrl: "https://drive.google.com/uc?export=download&id=1EDtNtxBFaq-JMHVcfarYM2AWCvoWiWNg"
            },
            {
                id: "pudubot2",
                name: "PuduBot 2",
                category: "Universal Delivery",
                headline: "Your All-Purpose Autonomous Courier",
                description: "From restaurants to hospitals, PuduBot 2 handles deliveries with precision and care. Fully enclosed trays, multi-robot collaboration, and automatic charging create a contact-free service ecosystem.",
                key_features: [
                  "12–15 hours of runtime",
                  "Marker-less deployment for quick setup",
                  "PUDU OS for seamless integration",
                  "Supports multi-modal delivery scenarios"
                ],
                applications: ["Restaurants", "Hospitals", "Offices"],
                cta: "Learn More",
                image: "https://cdn.pudutech.com/nav_product_pudubot2_478d35cdae.png",
                detailTagline: "The next generation of universal delivery, engineered for enhanced stability and intelligence.",
                heroImage: "https://thumbs2.imgbox.com/5f/06/AKuoWz18_t.jpg",
                keySpecs: [
                    { label: "Load Capacity", value: "40kg" },
                    { label: "Suspension", value: "Floating" },
                    { label: "Navigation", value: "PUDU VSLAM+" },
                    { label: "Collaboration", value: "Multi-Robot" }
                ],
                featureSections: [
                    {
                        title: "Upgraded Chassis for Superior Stability",
                        description: "PuduBot 2 features an all-new floating suspension system that actively absorbs shocks and vibrations. This ensures that even liquids and delicate items are transported smoothly, minimizing spills and accidents.",
                        image: "https://cdn.pudutech.com/nav_product_pudubot2_478d35cdae.png"
                    },
                    {
                        title: "PUDU VSLAM+ for Unmatched Performance",
                        description: "The new PUDU VSLAM+ technology allows for marker-less deployment in even highly complex environments, reducing setup time by 75%. It offers robust navigation that is less susceptible to environmental changes.",
                        image: "https://cdn.pudutech.com/nav_product_pudubot2_478d35cdae.png"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "580 x 535 x 1290 mm" }, { name: "Weight", value: "39kg" }] },
                    { category: "Performance", specs: [{ name: "Max Speed", value: "1.2m/s" }, { name: "Load Capacity", value: "40kg Max" }] },
                    { category: "Battery", specs: [{ name: "Battery Life", value: "12 - 15h" }, { name: "Charging", value: "Wire / Automatic" }] }
                ],
                videoUrl: "https://www.youtube.com/watch?v=45vUOogXXQc",
                videoDescription: "Observe the enhanced stability and intelligence of PuduBot 2. Its advanced suspension and marker-less navigation make it the reliable choice for any delivery task.",
                brochureUrl: "https://drive.google.com/uc?export=download&id=1XQbyfrQogCaQxEkHI8YvLiLXaEafh6rx"
            },
            {
                id: "t300",
                name: "T300",
                category: "Industrial Transport",
                headline: "300kg Payload. 60cm Path Clearance. Endless Applications",
                description: "T300 delivers where others can't. Built for manufacturing, logistics, and large facilities, it hauls heavy loads while navigating tight spaces with multiple configuration options.",
                key_features: [
                  "24/7 operation with auto recharging & battery swap",
                  "VSLAM+ rapid deployment without layout changes",
                  "IoT-enabled for elevator & e-gate control",
                  "Exceptional mobility across thresholds & grooves"
                ],
                applications: ["Manufacturing", "Logistics", "Warehouses"],
                cta: "Learn More",
                image: "https://cdn.pudutech.com/nav_product_0dd9c73f5a.png",
                detailTagline: "The heavy-duty AMR that navigates narrow passages with agility and power.",
                heroImage: "https://cdn.pudutech.com/nav_product_0dd9c73f5a.png",
                keySpecs: [
                    { label: "Payload", value: "300kg" },
                    { label: "Passage Width", value: "60cm Min" },
                    { label: "Mobility", value: "Crosses 3.5cm" },
                    { label: "Operation", value: "24/7" }
                ],
                featureSections: [
                    {
                        title: "Unmatched Maneuverability",
                        description: "The T300 is designed to navigate the tight corridors of industrial environments. It can pass through spaces as narrow as 60cm and effortlessly cross thresholds up to 2cm and grooves up to 3.5cm wide.",
                        image: "https://cdn.pudutech.com/nav_product_0dd9c73f5a.png"
                    },
                    {
                        title: "Flexible and Powerful",
                        description: "With a 300kg payload capacity and multiple attachment options, the T300 is highly adaptable. It supports both automatic battery swapping and charging, enabling true 24/7 autonomous operation in demanding settings.",
                        image: "https://cdn.pudutech.com/nav_product_0dd9c73f5a.png"
                    }
                ],
                 techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "835 x 500 x 1350 mm" }, { name: "Weight", value: "65kg" }] },
                    { category: "Performance", specs: [{ name: "Max Speed", value: "1.2m/s" }, { name: "Payload", value: "300kg" }] },
                    { category: "Mobility", specs: [{ name: "Min Passage", value: "600mm" }, { name: "Threshold Crossing", value: "20mm" }] }
                ],
                videoUrl: "https://www.youtube.com/watch?v=UpEVbS84ak8",
                videoDescription: "See the powerful T300 in motion, effortlessly hauling heavy payloads through narrow industrial passages, proving that strength and agility can coexist.",
                brochureUrl: "https://drive.google.com/uc?export=download&id=1sQuKVxYdQfQMfUIbh-e-ZI-9czsNmjqO"
            },
            {
                id: "flashbot",
                name: "FlashBot",
                category: "Multi-Floor Delivery",
                headline: "From Lobby to Level 30 — Seamless Multi-Floor Delivery",
                description: "FlashBot is built for vertical operations. Integrated with elevators, turnstiles, and smart access controls, it delivers securely across multiple floors with modular compartments and verification systems.",
                key_features: [
                    "Cloud or hardware elevator control",
                    "Secure compartment access verification",
                    "Supports semi-outdoor deliveries",
                    "Fast multi-floor map replication"
                ],
                applications: ["Office Buildings", "Hospitals", "Hotels"],
                cta: "Learn More",
                image: "https://cdn.pudutech.com/nav_flashbot_new_e3c621b5fd.png",
                detailTagline: "The intelligent courier for secure, automated delivery across multiple floors.",
                heroImage: "https://thumbs2.imgbox.com/13/a2/JvVBafVc_t.jpg",
                keySpecs: [
                    { label: "Payload", value: "30kg" },
                    { label: "Compartments", value: "2-4" },
                    { label: "IoT Integration", value: "Elevator/Gate" },
                    { label: "Runtime", value: "9h" }
                ],
                featureSections: [
                    {
                        title: "Take The Elevator, Automatically",
                        description: "FlashBot seamlessly integrates with building elevators through a cloud-based or hardware module connection. It can autonomously call and ride elevators to deliver items to any designated floor without human intervention.",
                        image: "https://cdn.pudutech.com/nav_flashbot_new_e3c621b5fd.png"
                    },
                    {
                        title: "Secure & Modular Compartments",
                        description: "Featuring adjustable and secure compartments, FlashBot ensures that deliveries are safe and confidential. Access can be granted via passwords or facial recognition, making it ideal for confidential document or package delivery.",
                        image: "https://cdn.pudutech.com/nav_flashbot_new_e3c621b5fd.png"
                    }
                ],
                techSpecs: [
                    { category: "Dimensions & Weight", specs: [{ name: "Size", value: "538 x 534 x 1052 mm" }, { name: "Weight", value: "60kg" }] },
                    { category: "Performance", specs: [{ name: "Max Speed", value: "1.5m/s" }, { name: "Payload", value: "10kg/compartment" }] },
                    { category: "Battery", specs: [{ name: "Battery Life", value: "9h" }, { name: "Charging", value: "Auto/Manual" }] }
                ],
                videoUrl: "https://www.youtube.com/watch?v=ZhNCUcAWEYU",
                videoDescription: "Watch FlashBot navigate multi-floor buildings with ease, seamlessly integrating with elevators to provide secure, automated delivery from the lobby to any floor.",
                brochureUrl: "https://drive.google.com/uc?export=download&id=1t_tS6huJmXzUO-fOxGH0SNNejxnjjkL7"
            },
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
        articles: [
            {
                title: "Pudu Robotics Launches PUDU MT1 Vac: AI-powered Robotic Sweeper & Vacuum Sets New Standard for Commercial Dry Cleaning",
                description: "Pudu Robotics Launches PUDU MT1 Vac: AI-powered Robotic Sweeper & Vacuum Sets New Standard for Commercial Dry Cleaning",
                date: "2025-07-15",
                category: "News",
                image: "https://cdn.pudutech.com/MT_1_Vac_news_banner_c8948e4c02.png",
                link: "#"
            },
            {
                title: "Pudu Robotics Marks Major Milestone with Completion of 100,000th Robot",
                description: "Pudu Robotics Marks Major Milestone with Completion of 100,000th Robot",
                date: "2025-06-10",
                category: "News",
                image: "https://cdn.pudutech.com/E5_AE_98_E7_BD_91_2025_06_10_19_3_A34_3_A48_0e33295865.png",
                link: "#"
            },
            {
                title: "Pudu Robotics Launches its Latest AI-Powered Autonomous Cleaning Robot – PUDU CC1 Pro",
                description: "Pudu Robotics Launches its Latest AI-Powered Autonomous Cleaning Robot – PUDU CC1 Pro",
                date: "2025-05-27",
                category: "News",
                image: "https://cdn.pudutech.com/1184_752_1_2025_05_27_11_3_A16_3_A33_ea68addc21.png",
                link: "#"
            },
            {
                title: "Pudu Robotics and Deloitte Release White Paper on \"Open Full-Stack Intelligent Service Robot Ecosystem\"",
                description: "Pudu Robotics and Deloitte Release White Paper on \"Open Full-Stack Intelligent Service Robot Ecosystem\"",
                date: "2025-04-24",
                category: "News",
                image: "https://cdn.pudutech.com/E5_AE_98_E7_BD_91_E8_8_B_B1_E6_96_87_2025_04_24_13_3_A46_3_A31_97961f6bca.png",
                link: "#"
            }
        ]
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