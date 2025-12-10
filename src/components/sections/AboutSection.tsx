import { motion } from "framer-motion";
import { Heart, Lightbulb, Shield, Users, ArrowRight } from "lucide-react";
import { useScrollReveal, fadeInUp, staggerContainer, scaleIn } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Cutting-edge solutions that keep you ahead of the competition.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Creativity",
    description: "Unique designs that make your brand memorable and impactful.",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Transparent processes and reliable delivery you can count on.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Client-First",
    description: "Your success is our priority. We listen, adapt, and deliver.",
    color: "accent",
  },
];

export const AboutSection = () => {
  const { ref, isInView } = useScrollReveal();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"
      />

      <div className="container-narrow relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.span
              variants={fadeInUp}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              About Creathy
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Your Partner in
              <span className="gradient-text"> Digital Excellence</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Creathy is a passionate digital agency helping businesses step into
              the digital world with ease. Our mission is to empower growth using
              creative, technology-driven solutions that transform how you connect
              with your audience.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              We believe every business deserves a powerful digital presence. From
              stunning websites to comprehensive marketing strategies, we craft
              solutions that drive real results and sustainable growth.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="default" size="lg" onClick={scrollToContact}>
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          {/* Right - Values Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-5"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={scaleIn}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { duration: 0.2 } 
                }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                    value.color === "primary"
                      ? "bg-primary/10 group-hover:bg-primary/20"
                      : "bg-accent/10 group-hover:bg-accent/20"
                  }`}
                >
                  <value.icon
                    className={`w-7 h-7 ${
                      value.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                  />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
