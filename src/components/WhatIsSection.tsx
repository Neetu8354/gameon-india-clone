import { motion } from "framer-motion";
import casinoImg from "@/assets/casino-games.jpg";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const WhatIsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              What is <span className="text-gold-gradient">Royal777?</span>
            </h2>
            <p className="text-foreground/80 mb-4">
              <strong className="text-foreground">Royal777</strong> is India's most popular and trusted online gaming platform. It is known for its secure system, smooth user experience, and wide variety of games.
            </p>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>
                <strong className="text-foreground">🏏 Cricket Games:</strong> Play fantasy cricket, live cricket predictions, and more. Famous for IPL season specials.
              </li>
              <li>
                <strong className="text-foreground">🎰 Casino Games:</strong> Play Teen Patti, Andar Bahar, and enjoy live casino experiences.
              </li>
              <li>
                <strong className="text-foreground">⚡ Real-Time Gaming:</strong> Play live games while matches are on for added excitement.
              </li>
              <li>
                <strong className="text-foreground">💰 Payment Options:</strong> Supports UPI, Paytm, Google Pay, PhonePe, and bank transfers for fast deposits and withdrawals.
              </li>
              <li>
                <strong className="text-foreground">📱 Device Friendly:</strong> Works smoothly on both mobile and desktop.
              </li>
              <li>
                <strong className="text-foreground">💬 Customer Support:</strong> 24/7 help available on WhatsApp.
              </li>
            </ul>
            <p className="text-foreground/70 text-sm mt-4">
              In short, <strong className="text-foreground">Royal777</strong> is a complete gaming platform — combining entertainment, security, and convenience for both casual players and professionals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <img
                src={casinoImg}
                alt="Royal777 casino games"
                loading="lazy"
                className="rounded-xl shadow-gold-lg w-full hover:scale-105 transition-transform duration-500"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
