import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.jpg";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const features = [
  "Live gaming on cricket, casino & more",
  "Get your verified gaming ID instantly",
  "Fast withdrawals with encrypted payment gateways",
  "Simple navigation and smooth user experience",
  "Exclusive bonuses, offers, and referral rewards",
  "100% safe and responsible gaming experience",
];

const AppDownloadSection = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-gradient">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Download the <span className="text-gold-gradient">Royal777 App</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Royal777 ko apne phone pe khelein — Android aur iOS dono pe available.
              Fast, secure, aur feature-rich app apki fingertips pe!
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="text-primary">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gold-gradient text-primary-foreground font-bold hover:opacity-90 shadow-gold">
                Get Your Online Cricket ID Now
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={appMockup}
              alt="Royal777 gaming app on mobile"
              loading="lazy"
              className="max-w-sm w-full rounded-2xl shadow-gold-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
