import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { useScrollReveal, fadeInUp, staggerContainer } from "@/hooks/useScrollReveal";

const ServiceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const service = services.find((s) => s.id === id);
    const { ref, isInView } = useScrollReveal();

    if (!service) {
        return <Navigate to="/" replace />;
    }

    const scrollToContact = () => {
        // If on a different page, we might need a different approach, 
        // but assuming Contact is globally available or we link back to home#contact
        window.location.href = "/#contact";
    };

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 bg-background overflow-hidden relative">
            {/* Dynamic Background */}
            <div className={`fixed inset-0 pointer-events-none opacity-[0.03] ${service.color === 'primary' ? 'bg-primary' : 'bg-accent'
                }`} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto relative z-10"
            >
                {/* Back Navigation */}
                <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl mb-8 relative overflow-hidden"
                >
                    {/* Decorative Blob */}
                    <div className={`absolute top-0 right-0 w-64 h-64 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl opacity-20 pointer-events-none ${service.color === 'primary' ? 'bg-primary' : 'bg-accent'
                        }`}
                    />

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <div className={`p-6 rounded-2xl ${service.color === 'primary'
                                ? 'bg-primary/10 text-primary'
                                : 'bg-accent/10 text-accent'
                            }`}>
                            <service.icon className="w-12 h-12" />
                        </div>

                        <div className="flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Detailed Content */}
                <div className="grid md:grid-cols-3 gap-8" ref={ref}>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="md:col-span-2 space-y-8"
                    >
                        <div className="prose prose-lg dark:prose-invert">
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Overview</h2>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                {service.longDescription}
                            </p>
                        </div>

                        <div className="bg-secondary/30 rounded-2xl p-8 border border-border/50">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                What We Offer
                                <span className={`h-1.5 w-1.5 rounded-full ${service.color === 'primary' ? 'bg-primary' : 'bg-accent'
                                    }`} />
                            </h3>

                            <ul className="grid sm:grid-cols-2 gap-4">
                                {service.features.map((feature, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-3 text-muted-foreground"
                                    >
                                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${service.color === 'primary' ? 'text-primary' : 'text-accent'
                                            }`} />
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* CTA Side Panel */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: 0.2 }}
                        className="h-fit sticky top-24"
                    >
                        <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">Ready to start?</h3>
                            <p className="text-muted-foreground mb-6 text-sm">
                                Let's discuss how we can help you achieve your goals with our {service.title} services.
                            </p>

                            <Button
                                onClick={scrollToContact}
                                className="w-full gap-2"
                                size="lg"
                                variant={service.color === 'primary' ? 'default' : 'secondary'}
                            >
                                Get Started
                                <ArrowRight className="w-4 h-4" />
                            </Button>

                            <div className="mt-6 pt-6 border-t border-border">
                                <p className="text-xs text-center text-muted-foreground">
                                    Transforming businesses one project at a time.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default ServiceDetail;
