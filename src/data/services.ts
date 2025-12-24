import {
    Globe,
    Megaphone,
    Search,
    Video,
    Image,
    MessageCircle,
    Palette,
    LucideIcon,
} from "lucide-react";

export interface ServiceData {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    longDescription: string;
    features: string[];
    color: "primary" | "accent";
}

export const services: ServiceData[] = [
    {
        id: "website-development",
        icon: Globe,
        title: "Website Development & Design",
        description:
            "Custom, responsive websites that captivate visitors and drive conversions with modern design.",
        longDescription:
            "In the digital age, your website is your storefront. We build lightning-fast, visually stunning, and mobile-responsive websites tailored to your brand's unique identity. Whether you need a simple landing page or a complex e-commerce platform, our development team ensures your site is secure, scalable, and optimized for user experience.",
        features: [
            "Custom UI/UX Design",
            "Mobile-First Responsive Layouts",
            "Performance Optimization (Core Web Vitals)",
            "SEO-Friendly Architecture",
            "E-commerce Integration",
            "Content Management Systems (CMS)",
        ],
        color: "primary",
    },
    {
        id: "seo-optimization",
        icon: Search,
        title: "SEO & Ranking Optimization",
        description:
            "Boost your visibility on search engines and attract organic traffic that converts.",
        longDescription:
            "Stop getting lost in the search results. Our data-driven SEO strategies help your business climb the rankings and stay there. We conduct deep keyword research, optimize on-page technical elements, and build high-quality backlinks to drive sustainable organic traffic to your site.",
        features: [
            "Comprehensive Keyword Research",
            "On-Page & Technical SEO",
            "Local SEO & Google Business Profile",
            "Content Strategy & Optimization",
            "Backlink Building",
            "Monthly Performance Reporting",
        ],
        color: "primary",
    },
    {
        id: "digital-marketing",
        icon: Megaphone,
        title: "Digital Marketing & Ads",
        description:
            "Strategic campaigns across Google, Meta, and more to maximize your reach and ROI.",
        longDescription:
            "Reach your ideal customers where they spend their time. We design and execute targeted advertising campaigns on Google, Facebook, Instagram, and LinkedIn. Our focus is on maximizing your Return on Ad Spend (ROAS) through precise targeting, compelling ad copy, and continuous A/B testing.",
        features: [
            "PPC Campaign Management (Google Ads)",
            "Social Media Advertising (Meta, LinkedIn)",
            "Audience Targeting & Retargeting",
            "Conversion Rate Optimization (CRO)",
            "Ad Creative Design",
            "Real-time Analytics Dashboard",
        ],
        color: "accent",
    },
    {
        id: "video-editing",
        icon: Video,
        title: "Video Editing & Creative Ads",
        description:
            "Engaging video content that tells your story and captures audience attention.",
        longDescription:
            "Video is the most powerful medium for storytelling. Our creative team produces high-impact video content that grabs attention within the first few seconds. From short-form social media reels to polished corporate presentations, we handle editing, color grading, and motion graphics to make your brand shine.",
        features: [
            "Short-Form Content (Reels/TikTok/Shorts)",
            "Corporate & Promotional Videos",
            "Motion Graphics & Animation",
            "Color Correction & Grading",
            "Sound Design & Mixing",
            "Scriptwriting Assistance",
        ],
        color: "accent",
    },
    {
        id: "graphic-design",
        icon: Image,
        title: "Photo Editing & Graphic Design",
        description:
            "Stunning visuals and graphics that elevate your brand's visual identity.",
        longDescription:
            "Visuals speak louder than words. We provide professional photo editing and graphic design services to give your brand a polished, professional look. Whether it's product photography enhancement, social media graphics, or marketing collateral, we ensure every pixel aligns with your brand guidelines.",
        features: [
            "Logo & Brand Identity Design",
            "Social Media Post Design",
            "Marketing Collateral (Brochures, Flyers)",
            "Product Photo Retouching",
            "Infographics & Data Visualization",
            "Print Design",
        ],
        color: "primary",
    },
    {
        id: "whatsapp-marketing",
        icon: MessageCircle,
        title: "WhatsApp Business API & CRM",
        description:
            "Automate customer communications and run targeted campaigns via WhatsApp. Build a strong relationship with your customers.",
        longDescription:
            "Leverage the power of the world's most popular messaging app. We help you integrate the WhatsApp Business API to automate customer support, send transactional notifications, and run personalized marketing campaigns. Coupled with a CRM strategy, we help you build lasting relationships with your audience.",
        features: [
            "WhatsApp Business API Setup",
            "Automated Chatbots & Flows",
            "Broadcast Marketing Campaigns",
            "CRM Integration",
            "Customer Support Automation",
            "Message Analytics & Reporting",
        ],
        color: "accent",
    },
    {
        id: "branding",
        icon: Palette,
        title: "Branding & Social Media",
        description:
            "Complete brand identity design and social media management for consistent growth.",
        longDescription:
            "Your brand is more than just a logo—it's an experience. We help you define your brand voice, visual identity, and social media strategy. From curating aesthetic feeds to engaging with your community, we manage your social presence to foster loyalty and growth.",
        features: [
            "Brand Strategy & Positioning",
            "Social Media Management",
            "Content Calendar Planning",
            "Community Management",
            "Influencer Collaboration",
            "Brand Style Guides",
        ],
        color: "primary",
    },
];
