import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog";

const Blog = () => {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Helmet>
                <title>Blog | Creathy - Digital Trends & Insights</title>
                <meta
                    name="description"
                    content="Stay updated with the latest insights in web development, digital marketing, SEO, and video editing from the Creathy team."
                />
                <meta name="keywords" content="digital marketing blog, web dev tips, seo guide, business growth, Creathy blog" />
                <link rel="canonical" href="https://creathy.in/blog" />

                {/* Open Graph */}
                <meta property="og:title" content="Blog | Creathy - Digital Trends & Insights" />
                <meta property="og:description" content="Stay updated with the latest insights in web development, digital marketing, SEO, and video editing." />
                <meta property="og:url" content="https://creathy.in/blog" />
                <meta property="og:type" content="website" />
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
                                Our <span className="gradient-text">Insights</span>
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Expert thoughts on the changing landscape of digital technology.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="pb-24 px-4">
                    <div className="container-narrow">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="h-full flex flex-col bg-card border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden group">
                                        <div className="relative aspect-video overflow-hidden">
                                            <img
                                                src={post.imageUrl}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-foreground">
                                                    {post.category}
                                                </Badge>
                                            </div>
                                        </div>

                                        <CardHeader className="space-y-2 p-6">
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                        </CardHeader>

                                        <CardContent className="p-6 pt-0 flex-grow">
                                            <p className="text-muted-foreground text-sm line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                        </CardContent>

                                        <CardFooter className="p-6 pt-0">
                                            <Button variant="ghost" className="p-0 h-auto hover:bg-transparent text-primary hover:text-primary/80 group/btn">
                                                Read More
                                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Newsletter CTA */}
                        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/10 text-center max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h3>
                            <p className="text-muted-foreground mb-6">Get the latest insights delivered straight to your inbox.</p>
                            <div className="flex gap-2 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 h-10 px-4 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                                <Button>Subscribe</Button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default Blog;
