import { motion } from "framer-motion";
import {
  Target,
  Sparkles,
  TrendingUp,
  Wallet,
  Clock,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal, fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/hooks/useScrollReveal";

const reasons = [
  {
    icon: Target,
    title: "Customized Solutions",
    description:
      "Every strategy is tailored specifically to your business goals and industry requirements.",
  },
  {
    icon: Sparkles,
    title: "Modern & Creative Design",
    description:
      "We deliver contemporary designs that reflect current trends while being timeless.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Driven Strategy",
    description:
      "Our approach focuses on measurable results and sustainable business growth.",
  },
  {
    icon: Wallet,
    title: "Affordable Packages",
    description:
      "Premium quality services at competitive prices designed for SMEs.",
  },
  {
    icon: Clock,
    title: "Quick Deliverables",
    description:
      "Fast turnaround times without compromising on quality or attention to detail.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Regular updates and clear communication throughout every project phase.",
  },
];

const stats = [
  { value: "100%", label: "Dedicated", color: "primary" },
  { value: "24/7", label: "Support", color: "accent" },
  { value: "Fast", label: "Delivery", color: "primary" },
];

export const WhyUsSection = () => {
  const { ref, isInView } = useScrollReveal();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-us" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : {}}
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none"
      />

      <div className="container-narrow relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left - Reasons List */}
          <motion.div variants={slideInLeft} className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  variants={fadeInUp}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex gap-4 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300"
                  >
                    <reason.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div variants={slideInRight} className="order-1 lg:order-2">
            <motion.span
              variants={fadeInUp}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Your Success is
              <span className="gradient-text"> Our Priority</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              We understand that choosing a digital partner is a significant
              decision. That's why we're committed to delivering exceptional
              value, transparent processes, and results that speak for themselves.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`text-center p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    stat.color === "primary"
                      ? "bg-primary/5 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10"
                      : "bg-accent/5 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/10"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    className={`text-2xl md:text-3xl font-bold mb-1 ${
                      stat.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="default" size="lg" onClick={scrollToContact}>
                Let's Work Together
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
