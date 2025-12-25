export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    const { messages } = request.body;
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
        return response.status(500).json({ error: 'Missing API Key in Server Environment' });
    }

    // Knowledge Base (Fully restored to match src/data/websiteContent.ts)
    const websiteContent = {
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
        services: [
            {
                title: "Website Development",
                description: "We build high-performance, responsive, and visually stunning websites tailored to your brand.",
                longDescription: "Our coding experts create custom websites that are not only beautiful but also fast, secure, and SEO-friendly. Whether you need a simple landing page or a complex e-commerce platform, we have the skills to bring your vision to life.",
                features: ["Custom Design & Development", "Responsive & Mobile-Friendly", "E-commerce Solutions", "CMS Integration (WordPress, Shopify, etc.)", "Maintenance & Support"]
            },
            {
                title: "Digital Marketing",
                description: "Accelerate your growth with data-driven marketing strategies that reach the right audience.",
                longDescription: "We use a mix of SEO, PPC, and social media marketing to increase your brand visibility and drive traffic. our goal is to convert visitors into loyal customers through targeted campaigns.",
                features: ["Search Engine Optimization (SEO)", "Pay-Per-Click (PPC) Advertising", "Content Marketing", "Email Marketing", "Analytics & Reporting"]
            },
            {
                title: "Influencer Marketing",
                description: "Connect with your audience authentically through trusted voices in your industry.",
                longDescription: "We help you identify and collaborate with influencers who align with your brand values. From micro-influencers to major personalities, we manage the entire campaign to ensure maximum impact.",
                features: ["Influencer Identification", "Campaign Strategy & Management", "Content Creation", "Performance Tracking"]
            },
            {
                title: "Video Editing",
                description: "Transform raw footage into captivating stories that engage and inspire.",
                longDescription: "Our video editing team enhances your content with professional cuts, transitions, effects, and sound design. Perfect for social media, corporate videos, and promotional materials.",
                features: ["Corporate Video Editing", "Social Media Reels & Shorts", "YouTube Video Production", "Color Correction & Grading", "Sound Design & Mixing"]
            },
            {
                title: "Branding",
                description: "Build a strong, memorable brand identity that resonates with your customers.",
                longDescription: "From logo design to complete brand guidelines, we help you define who you are and how you communicate. A strong brand is the foundation of a successful business.",
                features: ["Logo Design", "Brand Strategy", "Visual Identity Systems", "Brand Guidelines", "Rebranding Services"]
            },
            {
                title: "SEO Optimization",
                description: "Improve your search engine rankings and get found by more customers online.",
                longDescription: "We implement on-page and off-page SEO strategies to boost your organic traffic. Our data-driven approach ensures long-term results and higher visibility.",
                features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Link Building", "Local SEO"]
            }
        ],
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
        ],
        faqs: [
            { question: "How long to build a website?", answer: "Standard sites 2-4 weeks, complex ones 6-12 weeks." },
            { question: "Do you offer support?", answer: "Yes, various support packages available." },
            { question: "Can you help with SEO?", answer: "Yes, SEO is a core service." },
            { question: "Do you handle social media ads?", answer: "Yes, Google, Facebook, Instagram, LinkedIn." },
            { question: "Payment structure?", answer: "50% deposit, 50% upon completion." }
        ],
        contact: {
            email: "info@creathy.in",
            phone: "+91-988-578-7676",
            location: "India, serving clients worldwide"
        }
    };

    const systemPrompt = `You are Creo, the AI assistant for Creathy, a digital agency. 
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
- STRICTLY FORBIDDEN: Do NOT invent or mention specific prices.
- PRICING ANSWER: "We offer customized pricing based on your project's needs. Please contact us for a quote."
- **CRITICAL**: If you suggest contacting us (for pricing, unknown info, or starting a project), ALWAYS append the tag "[[SHOW_CONTACT_OPTIONS]]" at the very end of your message.
- **NEVER** output the tag "[[SHOW_CONTACT_OPTIONS]]" alone. You MUST always write a helpful sentence before it (e.g., "Please contact us for more details.").
- If you don't know the answer, explicitly say: "I'm not sure about that. Please contact our team at ${websiteContent.contact.email}. [[SHOW_CONTACT_OPTIONS]]"
- Do not make up services we don't offer.
- Keep a friendly, helpful tone but prioritize brevity.
`;

    try {
        const chatCompletion = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                messages: [
                    { role: "system", content: systemPrompt },
                    ...messages
                ],
                model: "llama-3.3-70b-versatile",
                temperature: 0.7,
                max_tokens: 1024,
            }),
        });

        const data = await chatCompletion.json();

        if (!chatCompletion.ok) {
            throw new Error(data.error?.message || 'Failed to fetch from Groq');
        }

        return response.status(200).json(data);
    } catch (error) {
        console.error('Error:', error);
        return response.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}
