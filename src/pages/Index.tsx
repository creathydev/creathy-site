import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { ParticleBackground } from "@/components/ui/ParticleBackground";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Helmet>
        <title>Creathy - Website Development, Digital Marketing & Video Editing Services</title>
        <meta name="description" content="Creathy is a digital agency specializing in website development, digital marketing, influencer marketing, video editing, SEO optimization, and branding solutions for growing businesses." />
        <meta name="keywords" content="website development, digital marketing, influencer marketing, video editing, SEO optimization, branding, web design, social media marketing, Creathy" />
        <link rel="canonical" href="https://creathy.in" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Creathy - Website Development, Digital Marketing & Video Editing Services" />
        <meta property="og:description" content="Your trusted partner for digital transformation. We help businesses grow with modern digital solutions." />
        <meta property="og:url" content="https://creathy.in" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Creathy - Website Development, Digital Marketing & Video Editing Services" />
        <meta name="twitter:description" content="Your trusted partner for digital transformation. We help businesses grow with modern digital solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground relative">
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <WhyUsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;