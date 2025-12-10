import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MessageCircle, Send, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal, fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/hooks/useScrollReveal";

export const ContactSection = () => {
  const { ref, isInView } = useScrollReveal();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@creathy.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          business: formData.get("business"),
          message: formData.get("message"),
          _subject: "New Contact Form Submission - Creathy Website",
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactOptions = [
    {
      href: "https://wa.me/919885787676?text=Hi%20Creathy!%20I'm%20interested%20in%20your%20digital%20services.",
      icon: MessageCircle,
      iconColor: "text-green-600",
      bgColor: "bg-green-500/10 group-hover:bg-green-500/20",
      title: "WhatsApp",
      subtitle: "Quick response guaranteed",
      delay: 0.3,
    },
    {
      href: "mailto:info@creathy.in",
      icon: Mail,
      iconColor: "text-primary",
      bgColor: "bg-primary/10 group-hover:bg-primary/20",
      title: "Email Us",
      subtitle: "info@creathy.in",
      delay: 0.4,
    },
    {
      href: "tel:+919885787676",
      icon: Phone,
      iconColor: "text-accent",
      bgColor: "bg-accent/10 group-hover:bg-accent/20",
      title: "Call Us",
      subtitle: "+91 988-578-7676",
      delay: 0.5,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-section-alt relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Left Content */}
          <motion.div variants={slideInLeft}>
            <motion.span
              variants={fadeInUp}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Let's Build Your
              <span className="gradient-text"> Digital Presence</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-10 leading-relaxed"
            >
              Ready to transform your business? Get in touch with us today and
              let's discuss how we can help you achieve your digital goals.
            </motion.p>

            {/* Contact Options */}
            <div className="space-y-4">
              {contactOptions.map((option) => (
                <motion.a
                  key={option.title}
                  href={option.href}
                  target={option.href.startsWith("http") ? "_blank" : undefined}
                  rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  variants={fadeInUp}
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl ${option.bgColor} flex items-center justify-center transition-colors`}>
                    <option.icon className={`w-6 h-6 ${option.iconColor}`} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{option.title}</div>
                    <div className="text-sm text-muted-foreground">{option.subtitle}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            variants={slideInRight}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Send us a message
                  </h3>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                      >
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <Input 
                          type="text" 
                          name="name"
                          placeholder="John Doe" 
                          required 
                          className="h-12 transition-all focus:scale-[1.02]" 
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.45 }}
                      >
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input 
                          type="tel" 
                          name="phone"
                          placeholder="+1 234 567 890" 
                          className="h-12 transition-all focus:scale-[1.02]" 
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input 
                        type="email" 
                        name="email"
                        placeholder="john@company.com" 
                        required 
                        className="h-12 transition-all focus:scale-[1.02]" 
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.55 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Business Name
                      </label>
                      <Input 
                        type="text" 
                        name="business"
                        placeholder="Your Company" 
                        className="h-12 transition-all focus:scale-[1.02]" 
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">
                        How can we help?
                      </label>
                      <Textarea 
                        name="message"
                        placeholder="Tell us about your project..." 
                        required 
                        className="min-h-[120px] resize-none transition-all focus:scale-[1.01]" 
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.65 }}
                    >
                      <Button 
                        type="submit" 
                        variant="glow" 
                        size="lg" 
                        className="w-full group" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};