import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const steps = [
  { num: "01", title: "WhatsApp pe Contact karein", desc: "Hamari team se instantly connect ho jayein" },
  { num: "02", title: "Account Setup karein", desc: "2 minute mein signup — quick verification" },
  { num: "03", title: "Deposit & Choose Games", desc: "UPI, Paytm se deposit karein aur games choose karein" },
  { num: "04", title: "Play & Win!", desc: "Cricket, Casino aur 50+ games mein compete karein" },
];

const HowItWorksSection = () => {
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
            How to <span className="text-gold-gradient">Get Started?</span>
          </h2>
          <p className="text-muted-foreground">4 simple steps mein gaming shuru karein</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.a
              key={s.num}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-card border border-border rounded-lg p-6 text-center hover:border-primary/40 transition-all hover:shadow-gold block group"
            >
              <div className="text-4xl font-heading font-bold text-primary/20 group-hover:text-primary/40 transition-colors mb-2">
                {s.num}
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-primary/30 text-2xl">→</div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
