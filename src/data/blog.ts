
export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    slug: string; // Ideally we would have individual pages, but for now we might just link to a section or have a placeholder.
    imageUrl: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Why Your Business Needs a Professional Website in 2025",
        excerpt: "In the digital age, a website is more than just an online brochure. It's your 24/7 salesperson. Learn why investing in professional web dev is crucial.",
        date: "Dec 20, 2025",
        readTime: "5 min read",
        category: "Web Development",
        slug: "why-your-business-needs-website",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    {
        id: "2",
        title: "Top Digital Marketing Trends to Watch",
        excerpt: "From AI-driven content to the rise of micro-influencers, stay ahead of the curve with these emerging digital marketing strategies.",
        date: "Dec 18, 2025",
        readTime: "4 min read",
        category: "Digital Marketing",
        slug: "digital-marketing-trends-2025",
        imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2674&auto=format&fit=crop"
    },
    {
        id: "3",
        title: "The Power of Video Content for Brand Growth",
        excerpt: "Video is king. Discover how short-form video editing and high-quality production can skyrocket your brand's engagement on social media.",
        date: "Dec 15, 2025",
        readTime: "6 min read",
        category: "Video Editing",
        slug: "power-of-video-content",
        imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2622&auto=format&fit=crop"
    }
];
