import { motion } from "framer-motion";
import { Award, ShieldCheck, Zap, Users } from "lucide-react";

const trustItems = [
  { icon: Award, title: "Expertise", desc: "Built by gaming & tech veterans with 10+ years of innovation in entertainment platforms." },
  { icon: Users, title: "Experience", desc: "Trusted by 1 Lakh+ players since launch with over 10M games played successfully." },
  { icon: Zap, title: "Authority", desc: "Recognized as India's leading free gaming platform with top ratings." },
  { icon: ShieldCheck, title: "Trust", desc: "SSL encrypted, fair play certified, and completely transparent gaming environment." },
];

const securityBadges = [
  "256-bit SSL Encryption",
  "Certified Fair Play",
  "Fraud Protection",
  "Account Security",
];

const OfficialPlatformSection = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            The Official <span className="text-gold-gradient">mahadev777</span> Platform
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verified and trusted official platform. Our commitment to security, fair play, and reliability makes us India's most preferred free gaming destination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/40 transition-all hover:shadow-gold"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Security badges row */}
        <div className="flex flex-wrap justify-center gap-4">
          {securityBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-xs text-muted-foreground"
            >
              <ShieldCheck size={14} className="text-primary" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficialPlatformSection;
