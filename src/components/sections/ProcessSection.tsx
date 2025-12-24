import { motion } from "framer-motion";
import { Lightbulb, Compass, Code2, Rocket } from "lucide-react";
import { useScrollReveal, fadeInUp, staggerContainer } from "@/hooks/useScrollReveal";

const steps = [
    {
        icon: Lightbulb,
        title: "Discovery",
        description: "We dive deep into your business goals, target audience, and brand identity to lay a solid foundation.",
        color: "primary",
    },
    {
        icon: Compass,
        title: "Strategy",
        description: "We craft a tailored roadmap and creative direction that aligns with your objectives and market needs.",
        color: "accent",
    },
    {
        icon: Code2,
        title: "Execution",
        description: "Our experts bring the vision to life with pixel-perfect design, clean code, and engaging content.",
        color: "primary",
    },
    {
        icon: Rocket,
        title: "Launch & Scale",
        description: "We test, launch, and monitor performance, helping you scale and adapt to market changes.",
        color: "accent",
    },
];

export const ProcessSection = () => {
    const { ref, isInView } = useScrollReveal();

    return (
        <section id="process" className="section-padding bg-background relative overflow-hidden" ref={ref}>
            <div className="container-narrow relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                    >
                        From Concept to <span className="gradient-text">Success</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-muted-foreground"
                    >
                        Our proven workflow ensures transparency, quality, and results at every step of the journey.
                    </motion.p>
                </motion.div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group relative bg-card md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none border md:border-none border-border"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110 ${step.color === 'primary'
                                            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                                            : 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                                        }`}>
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
