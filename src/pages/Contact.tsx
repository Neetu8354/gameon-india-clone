import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact – mahadev777 | Get in Touch</title>
        <meta name="description" content="Contact mahadev777 for support, inquiries, and assistance. Available 24/7 via WhatsApp." />
        <meta name="keywords" content="mahadev777 contact, customer support, whatsapp support" />
      </Helmet>

      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Contact <span className="text-gold-gradient">Us</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-8">
            Get in touch with our 24/7 support team for any assistance.
          </p>

          <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-heading font-bold mb-4">Get Your Gaming ID</h2>
            <p className="text-muted-foreground mb-6">
              Contact us via WhatsApp to get your verified gaming ID and start playing today.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gold-gradient text-primary-foreground font-bold hover:opacity-90">
                Contact on WhatsApp
              </Button>
            </a>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-semibold mb-4">Support Hours</h3>
              <p className="text-muted-foreground">24/7 Available</p>
              <p className="text-muted-foreground mt-2">Response Time: Within minutes</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
