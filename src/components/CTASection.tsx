import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const points = [
  "Quick and hassle-free registration with your own Royal777 ID.",
  "Instant login access for seamless play across devices.",
  "Step-by-step guidance during sign up and verification.",
  "Safe deposits and withdrawals backed by secure systems.",
  "24/7 support so you're never stuck waiting for help.",
];

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Get Your <span className="text-gold-gradient">Royal777 ID</span> & Start Today
          </h2>
          <p className="text-foreground/70 mb-8">
            Royal777 is India's most trusted platform for online gaming. It's built to be simple, safe, and fast — so whether you're new or experienced, getting started is easy.
          </p>

          <div className="text-left max-w-md mx-auto mb-8 space-y-3">
            {points.map((p) => (
              <div key={p} className="flex items-start gap-3 text-sm text-foreground/80">
                <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                {p}
              </div>
            ))}
          </div>

          <p className="text-foreground/70 text-sm mb-8">
            Thousands of players already trust Royal777 for transparent and secure play. You can join them today by downloading the app or using the website.
          </p>

          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gold-gradient text-primary-foreground font-bold text-lg px-10 hover:opacity-90 shadow-gold animate-pulse-gold">
              👑 Get Your Royal777 ID Now
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
