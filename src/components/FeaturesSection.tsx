import { motion } from "framer-motion";
import { Shield, Zap, Users, Gift, Smartphone, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "A Secure & Trusted Platform",
    desc: "Your data and money are always safe. Advanced encryption and regular updates protect every login and transaction.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Need help with login, registration, or your ID? Our support team is available anytime via WhatsApp or live chat.",
  },
  {
    icon: Zap,
    title: "Instant Withdrawals",
    desc: "No waiting for your winnings. Withdrawals are processed within minutes through secure payment channels.",
  },
  {
    icon: Users,
    title: "Simple Account Setup",
    desc: "Creating your account takes only a few minutes. Quick registration designed to be easy for everyone.",
  },
  {
    icon: Gift,
    title: "Premium Gaming Access",
    desc: "With a verified ID, you unlock exclusive tools, live updates, and insights that give you an edge.",
  },
  {
    icon: Smartphone,
    title: "Fast & Reliable Login",
    desc: "Your login is quick, secure, and always reliable. Optimized servers ensure smooth access on all devices.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            Why Choose <span className="text-gold-gradient">Royal777?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Picking the right gaming platform matters. Royal777 is built to give you a safe, simple, and rewarding experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all hover:shadow-gold group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
