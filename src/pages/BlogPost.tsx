import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getBlogBySlug, blogPosts } from "@/data/blogPosts";
import { Helmet } from "react-helmet-async";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.category === post.category || p.keywords.some((k) => post.keywords.includes(k)))
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": { "@type": "Organization", "name": "mahadev777" },
    "publisher": {
      "@type": "Organization",
      "name": "mahadev777",
      "url": "https://royal777.app"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://royal777.app/blog/${post.slug}`
    },
    "keywords": post.keywords.join(", ")
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://royal777.app" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://royal777.app/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://royal777.app/blog/${post.slug}` }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={`https://royal777.app/blog/${post.slug}`} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://royal777.app/blog/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <article className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
              <ol className="flex items-center gap-2 flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link to="/" className="hover:text-primary" itemProp="item"><span itemProp="name">Home</span></Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li>/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link to="/blog" className="hover:text-primary" itemProp="item"><span itemProp="name">Blog</span></Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li>/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="text-foreground truncate max-w-[200px]">
                  <span itemProp="name">{post.title}</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-xs bg-primary/80 text-primary-foreground px-2 py-0.5 rounded font-semibold">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock size={12} /> {post.readTime}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>

              <h1 className="text-2xl md:text-4xl font-heading font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Article content */}
              <div
                className="prose prose-invert prose-sm md:prose-base max-w-none
                  prose-headings:font-heading prose-headings:text-foreground
                  prose-h2:text-xl prose-h2:md:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-foreground/80 prose-p:leading-relaxed
                  prose-strong:text-foreground
                  prose-li:text-foreground/80
                  prose-ul:my-4 prose-ol:my-4
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/^- (.*$)/gm, '<li>$1</li>')
                    .replace(/^(\d+)\. (.*$)/gm, '<li>$2</li>')
                    .replace(/(<li>.*<\/li>\n?)+/g, (match) => {
                      if (match.includes('1.') || /^\d/.test(match)) return `<ol>${match}</ol>`;
                      return `<ul>${match}</ul>`;
                    })
                    .replace(/\n{2,}/g, '</p><p>')
                    .replace(/^(?!<[hulo])/gm, (match) => match ? `<p>${match}` : '')
                }}
              />

              {/* CTA */}
              <div className="mt-12 p-6 bg-card border border-primary/30 rounded-lg text-center">
                <h3 className="font-heading font-bold text-xl mb-2">Ready to Start Playing?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Join mahadev777 today and get your verified gaming ID in minutes.
                </p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gold-gradient text-primary-foreground font-bold hover:opacity-90">
                    Get Your ID Now
                  </Button>
                </a>
              </div>

              {/* Keywords as tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {post.keywords.map((kw) => (
                  <span key={kw} className="text-xs bg-secondary text-muted-foreground px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag size={10} /> {kw}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-xl font-heading font-bold mb-6">Related Articles</h2>
                <div className="grid gap-4">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      to={`/blog/${rp.slug}`}
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/40 transition-all group"
                    >
                      <div className="flex-1">
                        <span className="text-xs text-primary font-semibold">{rp.category}</span>
                        <h3 className="font-heading font-bold text-sm group-hover:text-primary transition-colors">
                          {rp.title}
                        </h3>
                        <span className="text-xs text-muted-foreground">{rp.date}</span>
                      </div>
                      <ArrowLeft size={16} className="text-muted-foreground rotate-180 group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8">
              <Link to="/blog" className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                <ArrowLeft size={14} /> Back to All Articles
              </Link>
            </div>
          </div>
        </article>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BlogPost;
