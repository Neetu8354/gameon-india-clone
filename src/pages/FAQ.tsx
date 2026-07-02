import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQSection from "@/components/FAQSection";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>FAQ – mahadev777 | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about mahadev777 gaming platform, deposits, withdrawals, and more." />
        <meta name="keywords" content="mahadev777 faq, frequently asked questions, gaming help, support" />
      </Helmet>

      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Get answers to common questions about mahadev777 platform.
          </p>
        </div>
      </section>

      <FAQSection />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQ;
