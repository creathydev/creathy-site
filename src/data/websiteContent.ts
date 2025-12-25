import { services } from "./services";

export const websiteContent = {
    about: {
        mission: "Creathy is a passionate digital agency helping businesses step into the digital world with ease. Our mission is to empower growth using creative, technology-driven solutions that transform how you connect with your audience.",
        description: "We believe every business deserves a powerful digital presence. From stunning websites to comprehensive marketing strategies, we craft solutions that drive real results and sustainable growth.",
        values: [
            "Innovation: Cutting-edge solutions that keep you ahead of the competition.",
            "Creativity: Unique designs that make your brand memorable and impactful.",
            "Trust: Transparent processes and reliable delivery you can count on.",
            "Client-First: Your success is our priority. We listen, adapt, and deliver."
        ]
    },

    process: [
        { title: "Discovery", description: "We dive deep into your business goals, target audience, and brand identity to lay a solid foundation." },
        { title: "Strategy", description: "We craft a tailored roadmap and creative direction that aligns with your objectives and market needs." },
        { title: "Execution", description: "Our experts bring the vision to life with pixel-perfect design, clean code, and engaging content." },
        { title: "Launch & Scale", description: "We test, launch, and monitor performance, helping you scale and adapt to market changes." }
    ],

    whyUs: [
        "Customized Solutions: Every strategy is tailored specifically to your business goals.",
        "Modern & Creative Design: Contemporary designs that reflect current trends.",
        "Growth-Driven Strategy: Focus on measurable results and sustainable growth.",
        "Affordable Packages: Premium quality services at competitive prices designed for SMEs.",
        "Quick Deliverables: Fast turnaround times without compromising on quality.",
        "Transparent Communication: Regular updates and clear communication throughout every project phase."
    ],

    services: services,

    faqs: [
        {
            question: "How long does it take to build a website?",
            answer: "A standard business website typically takes 2-4 weeks, while complex e-commerce platforms or custom web apps may take 6-12 weeks. We provide a detailed timeline during the discovery phase."
        },
        {
            question: "Do you offer ongoing support and maintenance?",
            answer: "Yes, we offer various support packages to ensure your website remains secure, up-to-date, and optimized."
        },
        {
            question: "Can you help improve my site's Google ranking?",
            answer: "Absolutely. SEO is one of our core services. We implement on-page SEO best practices during development and offer ongoing SEO strategies."
        },
        {
            question: "Do you handle social media advertising?",
            answer: "Yes, we specialize in paid campaigns on Google, Facebook, Instagram, and LinkedIn."
        },
        {
            question: "What is your payment structure?",
            answer: "Typically, we require a 50% deposit to start the project, with the remaining 50% due upon completion and before launch."
        }
    ],

    contact: {
        email: "info@creathy.in",
        phone: "+91-988-578-7676",
        whatsapp: "Available via website",
        location: "India, serving clients worldwide"
    },

    portfolio: [
        {
            client: "Razzaq Automotives",
            description: "A fully functional e-commerce website with backend admin controls and inventory management system for a heavy vehicle body parts supplier.",
            category: "Web Development"
        },
        {
            client: "Neoplatron",
            description: "A corporate website with admin panels and a warranty management system for a fuel optimizing solutions leader.",
            category: "Web Development"
        }
    ]
};

export const getSystemPrompt = () => {
    return `You are Creo, the AI assistant for Creathy, a digital agency. 
Your goal is to answer visitor questions helpfully, professionally, and CONCISELY using the comprehensive knowledge base below.

CORE IDENTITY:
${websiteContent.about.mission}
${websiteContent.about.description}

OUR VALUES:
${websiteContent.about.values.map(v => `- ${v}`).join('\n')}

OUR PROCESS (How We Work):
${websiteContent.process.map(p => `- ${p.title}: ${p.description}`).join('\n')}

WHY CHOOSE US:
${websiteContent.whyUs.map(w => `- ${w}`).join('\n')}

SERVICES (Detailed Capabilities):
${websiteContent.services.map(s => `
SERVICE: ${s.title}
DESCRIPTION: ${s.description}
DETAILS: ${s.longDescription}
FEATURES: ${s.features.join(', ')}
`).join('\n')}

PORTFOLIO (Past Projects):
${websiteContent.portfolio.map(p => `- ${p.client}: ${p.description} (${p.category})`).join('\n')}

FAQS:
${websiteContent.faqs.map(f => `Q: ${f.question}\nA: ${f.answer}`).join('\n')}

CONTACT INFO:
Email: ${websiteContent.contact.email}
Phone: ${websiteContent.contact.phone}
Location: ${websiteContent.contact.location}

GUIDELINES:
- Be EXTREMELY concise.
- Use **bold** for key terms and lists for multiple items to improve readability.
- **DO NOT** use unnecessary newlines or split sentences across lines. Keep paragraphs compact.
- STRICTLY FORBIDDEN: Do NOT invent or mention specific prices (e.g., do not say "₹50,000").
- PRICING ANSWER: "We offer customized pricing based on your project's needs. Please contact us for a quote."
- **CRITICAL**: If you suggest contacting us (for pricing, unknown info, or starting a project), ALWAYS append the tag "[[SHOW_CONTACT_OPTIONS]]" at the very end of your message.
- If you don't know the answer, explicitly say: "I'm not sure about that. Please contact our team at ${websiteContent.contact.email}. [[SHOW_CONTACT_OPTIONS]]"
- Do not make up services we don't offer.
- Keep a friendly, helpful tone but prioritize brevity.
`;
};
