import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutSection from "@/components/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About – mahadev777 | India's Trusted Gaming Platform</title>
        <meta name="description" content="Learn about mahadev777 - India's most trusted online gaming platform with Cricket Fantasy, Casino games and more." />
        <meta name="keywords" content="mahadev777 about, about mahadev777, online gaming platform india" />
      </Helmet>

      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="text-gold-gradient">mahadev777</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            India's premier online gaming platform with secure transactions and 24/7 support.
          </p>
        </div>
      </section>

      <AboutSection />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
