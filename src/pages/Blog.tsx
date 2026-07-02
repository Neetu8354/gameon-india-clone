import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogPosts";
import { Helmet } from "react-helmet-async";

const categoryColors: Record<string, string> = {
  Cricket: "bg-green-600/80",
  Casino: "bg-primary/80",
  Security: "bg-blue-600/80",
  Payments: "bg-emerald-600/80",
  Industry: "bg-purple-600/80",
};

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Royal777 Blog – Cricket, Casino Tips & Gaming Guides India</title>
        <meta name="description" content="Read expert gaming guides, cricket fantasy tips, casino strategies, and online gaming insights on the Royal777 blog. Updated daily with SEO-rich articles." />
        <meta name="keywords" content="royal777 blog, cricket tips, casino strategy, teen patti guide, fantasy cricket, online gaming india" />
        <link rel="canonical" href="https://royal777.app/blog" />
        <meta property="og:title" content="Royal777 Blog – Cricket, Casino Tips & Gaming Guides" />
        <meta property="og:description" content="Expert gaming guides, cricket fantasy tips, and casino strategies. Updated daily." />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://royal777.app/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Royal777 Blog",
            "description": "Expert gaming guides, cricket tips, and casino strategies for Indian players.",
            "url": "https://royal777.app/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Royal777",
              "url": "https://royal777.app"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "url": `https://royal777.app/blog/${post.slug}`,
              "author": { "@type": "Organization", "name": "Royal777" }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                Royal777 <span className="text-gold-gradient">Blog</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Expert guides, winning strategies, and the latest insights in online gaming, cricket fantasy, and casino entertainment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all hover:shadow-gold h-full"
                  >
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs text-white px-2 py-0.5 rounded font-semibold ${categoryColors[post.category] || "bg-primary/80"}`}>
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock size={12} /> {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Blog;
