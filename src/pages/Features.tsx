import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FeaturesSection from "@/components/FeaturesSection";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Features – mahadev777 | Why Choose Us</title>
        <meta name="description" content="Discover why mahadev777 is India's most trusted gaming platform. Secure, fast, and reliable gaming experience." />
        <meta name="keywords" content="mahadev777 features, secure gaming, fast withdrawals, 24/7 support" />
      </Helmet>

      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Why Choose <span className="text-gold-gradient">mahadev777</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Experience the best features that make us India's most trusted gaming platform.
          </p>
        </div>
      </section>

      <FeaturesSection />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Features;
