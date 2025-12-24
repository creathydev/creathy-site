import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal, fadeInUp } from "@/hooks/useScrollReveal";

const faqs = [
    {
        question: "How long does it take to build a website?",
        answer: "The timeline depends on the complexity of the project. A standard business website typically takes 2-4 weeks, while complex e-commerce platforms or custom web apps may take 6-12 weeks. We provide a detailed timeline during the discovery phase.",
    },
    {
        question: "Do you offer ongoing support and maintenance?",
        answer: "Yes, we offer various support packages to ensure your website remains secure, up-to-date, and optimized. From content updates to security patches, we've got you covered.",
    },
    {
        question: "Can you help improve my site's Google ranking?",
        answer: "Absolutely. SEO is one of our core services. We implement on-page SEO best practices during development and offer ongoing SEO strategies, including keyword research, content optimization, and backlink building to improve your visibility.",
    },
    {
        question: "Do you handle social media advertising?",
        answer: "Yes, we specialize in paid campaigns on Google, Facebook, Instagram, and LinkedIn. We create targeted ad strategies, design creative assets, and manage your budget to maximize ROI.",
    },
    {
        question: "What is your payment structure?",
        answer: "Typically, we require a 50% deposit to start the project, with the remaining 50% due upon completion and before launch. For larger projects, we can discuss milestone-based payments.",
    },
];

export const FAQSection = () => {
    const { ref, isInView } = useScrollReveal();

    return (
        <section id="faq" className="section-padding bg-section-alt" ref={ref}>
            <div className="container-narrow">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                        Common Questions
                    </motion.span>
                    <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </motion.h2>
                    <motion.p className="text-lg text-muted-foreground">
                        Got questions? We've got answers. If you don't see your question here, drop us a line!
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};
