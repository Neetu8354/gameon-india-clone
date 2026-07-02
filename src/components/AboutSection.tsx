import { motion } from "framer-motion";
import casinoImg from "@/assets/casino-games.jpg";
import securityImg from "@/assets/security-badge.jpg";

const stats = [
  { value: "1L+", label: "Active Players" },
  { value: "50+", label: "Games Available" },
  { value: "60K+", label: "Live Events/Month" },
  { value: "24/7", label: "Customer Support" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-dark-gradient">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              About <span className="text-gold-gradient">mahadev777</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              mahadev777 India ka premier online gaming platform hai. Yahan aap cricket fantasy,
              casino-style card games, aur bahut kuch khel sakte hain — secure aur trusted environment mein.
            </p>
            <p className="text-muted-foreground mb-6">
              Hamara mission hai best gaming experience dena — fast payouts, encrypted transactions,
              aur 24/7 support ke saath. mahadev777 pe gaming ka maza hi kuch aur hai!
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((s) => (
                <div key={s.label} className="bg-card border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-heading font-bold text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <img src={securityImg} alt="Security badge" loading="lazy" className="w-12 h-12 rounded-lg" />
              <div>
                <div className="text-sm font-semibold text-foreground">Fully Secure Platform</div>
                <div className="text-xs text-muted-foreground">Encrypted & Protected Gaming Environment</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={casinoImg}
              alt="Casino games with golden roulette"
              loading="lazy"
              className="rounded-xl shadow-gold-lg w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
