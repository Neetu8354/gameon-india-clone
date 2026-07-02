import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const benefits = [
  {
    title: "Trustworthy, Transparent, Tried",
    desc: "When you join the platform, you're becoming part of a community backed by 100% verified credentials and real-time gaming support.",
  },
  {
    title: "Lightning-Fast Verification & Login",
    desc: "Your journey starts the moment you request your account. No delay, no hidden steps. Quick and frictionless on all devices.",
  },
  {
    title: "Optimized for Cricket, Casino & More",
    desc: "From IPL to Roulette, your Royal777 ID gives access to the best gaming markets in India. Responsive, user-friendly interface.",
  },
  {
    title: "Bonuses that Actually Pay",
    desc: "No gimmicks, just pure value. Regular cashback, deposit offers, and win bonuses show up directly in your account.",
  },
  {
    title: "Secure Transactions and Instant Withdrawals",
    desc: "With advanced encryption and verified banking channels, your deposits and withdrawals are fast, reliable, and secure.",
  },
  {
    title: "Play Anywhere with Royal777 App",
    desc: "Whether you're on a train, at work, or relaxing at home, the Royal777 App ensures you never miss a moment. Fast and fully secure.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            Top Benefits of Your <span className="text-gold-gradient">Royal777 ID</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gold-gradient text-primary-foreground font-bold px-8 hover:opacity-90 shadow-gold">
              Get Your Royal777 ID Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
