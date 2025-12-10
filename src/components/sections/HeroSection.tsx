import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Instagram SVG icon component
const InstagramIcon = ({
  className
}: {
  className?: string;
}) => <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>;
export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const whatsappLink = "https://wa.me/919885787676?text=Hi%20Creathy!%20I'm%20interested%20in%20your%20digital%20services.";
  const instagramLink = "https://www.instagram.com/creathy.in?igsh=ZXk3YzBuMjI1dDRz";
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [0, 50, 0],
        y: [0, -30, 0]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl" />
        <motion.div animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.4, 0.2],
        x: [0, -30, 0],
        y: [0, 50, 0]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-accent/30 to-primary/20 rounded-full blur-3xl" />
        <motion.div animate={{
        scale: [1, 1.3, 1],
        opacity: [0.1, 0.2, 0.1]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Floating shapes */}
        <motion.div animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0]
      }} transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-1/4 right-1/4 w-20 h-20 border border-primary/20 rounded-xl bg-primary/5 backdrop-blur-sm" />
        <motion.div animate={{
        y: [0, 20, 0],
        rotate: [0, -5, 0]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute bottom-1/3 left-1/5 w-16 h-16 border border-accent/20 rounded-full bg-accent/5 backdrop-blur-sm" />
        <motion.div animate={{
        y: [-10, 10, -10],
        x: [0, 10, 0]
      }} transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-1/3 left-1/4 w-12 h-12 border border-primary/30 rounded-lg rotate-45 bg-primary/5" />
      </div>

      <div className="container-narrow relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 20,
          scale: 0.9
        }} animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
            <motion.div animate={{
            rotate: [0, 360]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}>
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">
              Your Digital Growth Partner
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.3
        }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            <motion.span initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }}>
              Digital Transformation
            </motion.span>
            <br />
            <motion.span initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} className="gradient-text">
              for Growing Businesses
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.6
        }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
            We help businesses build their online presence through modern digital
            solutions — websites, digital marketing, influencer marketing, video editing & more.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.7
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button variant="hero" size="xl" onClick={scrollToContact}>
                Schedule a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#services">Explore Services</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Contact Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.9
        }} className="flex items-center justify-center gap-4 mt-8">
            <motion.a href={whatsappLink} target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.1,
            y: -2
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 hover:bg-green-500/20 transition-all duration-300">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">WhatsApp</span>
            </motion.a>
            <motion.a href={instagramLink} target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.1,
            y: -2
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-600 dark:text-pink-400 hover:bg-pink-500/20 transition-all duration-300">
              <InstagramIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Instagram</span>
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.7,
          delay: 1
        }} className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            {[{
            label: "Modern Solutions",
            delay: 0
          }, {
            label: "Creative Design",
            delay: 0.1
          }, {
            label: "Growth Focused",
            delay: 0.2
          }].map((item, i) => <motion.div key={item.label} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 1.2 + item.delay
          }} className="flex items-center gap-2">
                <motion.div animate={{
              scale: [1, 1.3, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-primary" : "bg-accent"}`} />
                <span className="text-sm">{item.label}</span>
              </motion.div>)}
          </motion.div>
        </div>
      </div>

      {/* Scroll Arrow - Right Edge */}
      <motion.button onClick={() => document.getElementById("about")?.scrollIntoView({
      behavior: "smooth"
    })} initial={{
      opacity: 0,
      x: 20
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      delay: 1.5
    }} className="absolute bottom-1/2 right-6 translate-y-1/2 cursor-pointer group hidden md:flex">
        
      </motion.button>
    </section>;
};