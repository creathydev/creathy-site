import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import razzaqHeroImage from "@/assets/razzaq-automotives-hero.png";

// Sample portfolio data - can be updated later
const portfolioItems = [
  {
    id: 1,
    companyName: "Razzaq Automotives",
    description: "A fully functional website with backend admin controls and inventory management system, built for a leading supplier of heavy vehicle body parts in Autonogar, Vijayawada.",
    siteUrl: "https://www.razzaqautomotives.com",
    images: [razzaqHeroImage],
    category: "Web Development",
  },
  {
    id: 2,
    companyName: "Coming Soon",
    description: "Digital marketing success story coming soon",
    siteUrl: "#",
    images: ["/placeholder.svg"],
    category: "Digital Marketing",
  },
  {
    id: 3,
    companyName: "Coming Soon",
    description: "Video production showcase coming soon",
    siteUrl: "#",
    images: ["/placeholder.svg"],
    category: "Video Editing",
  },
];

const PortfolioCard = ({ item }: { item: typeof portfolioItems[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden bg-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
        <div className="relative aspect-video overflow-hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {item.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video">
                    <img
                      src={image}
                      alt={`${item.companyName} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {item.images.length > 1 && (
              <>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </>
            )}
          </Carousel>
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
              {item.category}
            </span>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {item.companyName}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {item.description}
          </p>
          {item.siteUrl !== "#" && (
            <a
              href={item.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Visit Website
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Helmet>
        <title>Our Work | Creathy - Digital Services Portfolio</title>
        <meta
          name="description"
          content="Explore Creathy's portfolio of successful digital projects including websites, digital marketing campaigns, and video production work."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Work</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Showcasing our journey of digital transformation and creative excellence
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="pb-24 px-4">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>

            {/* Coming Soon Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-primary/5 border border-primary/20">
                <h3 className="text-xl font-semibold text-foreground">
                  More Projects Coming Soon
                </h3>
                <p className="text-muted-foreground max-w-md">
                  We're working on exciting projects. Check back soon to see our latest work!
                </p>
                <Button variant="default" asChild>
                  <Link to="/#contact">Work With Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;
