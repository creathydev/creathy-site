import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal, fadeInUp, staggerContainer, scaleIn } from "@/hooks/useScrollReveal";
import { services } from "@/data/services";

export const ServicesSection = () => {
  const { ref, isInView } = useScrollReveal();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="section-padding bg-section-alt relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Everything You Need to
            <span className="gradient-text"> Go Digital</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground"
          >
            From building your online presence to scaling your digital marketing,
            we offer comprehensive solutions tailored to your business needs.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <Link to={`/services/${service.id}`} key={service.id} className="block h-full">
              <motion.div
                variants={scaleIn}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${service.color === "primary"
                      ? "bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20"
                      : "bg-accent/10 group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent/20"
                      }`}
                  >
                    <service.icon
                      className={`w-7 h-7 ${service.color === "primary" ? "text-primary" : "text-accent"
                        }`}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300 mt-auto">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We're here to help.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="glow" size="lg" onClick={scrollToContact}>
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
