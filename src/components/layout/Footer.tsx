import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Heart, MessageCircle } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

const services = [
  "Website Development",
  "Digital Marketing",
  "SEO Optimization",
  "Video Editing",
  "Influencer Marketing",
  "WhatsApp Business",
  "Branding",
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/creathy.in?igsh=ZXk3YzBuMjI1dDRz", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/919885787676?text=Hi%20Creathy!%20I'm%20interested%20in%20your%20digital%20services.", label: "WhatsApp" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black pointer-events-none" />
      
      <div className="container-narrow section-padding pb-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <a href="#" className="inline-block mb-6">
              <img 
                src={logoDark} 
                alt="Creathy Logo" 
                className="h-8 w-auto"
              />
            </a>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Your trusted partner for digital transformation. We help businesses
              grow with modern, creative solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-neutral-800"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#about" },
                { name: "Our Services", href: "#services" },
                { name: "Why Choose Us", href: "#why-us" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral-400 hover:text-primary transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@creathy.in" className="flex items-start gap-3 text-neutral-400 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>info@creathy.in</span>
                </a>
              </li>
              <li>
                <a href="tel:+919885787676" className="flex items-start gap-3 text-neutral-400 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>+91 988-578-7676</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/919885787676?text=Hi%20Creathy!%20I'm%20interested%20in%20your%20digital%20services." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-neutral-400 hover:text-green-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Available Worldwide</span>
              </li>
            </ul>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Creathy. Made with
              <Heart className="w-4 h-4 text-accent fill-accent" />
              for growing businesses.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-neutral-500 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-500 hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
