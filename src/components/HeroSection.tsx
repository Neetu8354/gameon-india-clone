import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Headphones } from "lucide-react";
import heroBg from "@/assets/hero-cricket.jpg";
import heroBannerSide from "@/assets/hero-banner-side.jpg";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const badges = [
  { icon: Shield, label: "Secure & Private" },
  { icon: TrendingUp, label: "Data-Driven Insights" },
  { icon: Headphones, label: "24/7 Support" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Cricket stadium" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              mahadev777 – India's Most Trusted{" "}
              <span className="text-gold-gradient">Online Gaming Platform</span>
            </h1>

            <p className="text-foreground/80 text-sm md:text-base mb-4">
              Welcome to <strong className="text-foreground">mahadev777</strong>, the online gaming game-changer of all time. Gaming isn't just about chance; it's about timing, strategy, and choosing the right platform.
            </p>

            <p className="text-foreground/70 text-sm md:text-base mb-4">
              Our platform ensures every user enjoys an outstanding experience with 50+ live games, fast payouts, and fully encrypted transactions. Whether you're new or experienced, your verified ID gives you access to advanced tools and smart gaming features.
            </p>

            <p className="text-foreground/70 text-sm md:text-base mb-6">
              Ready to start playing and winning big? Create your account in just a few minutes and begin your journey toward successful online gaming.{" "}
              <strong className="text-foreground">Unlimited wins with one secure ID – only on mahadev777!</strong>
            </p>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gold-gradient text-primary-foreground font-bold px-8 hover:opacity-90 shadow-gold border border-primary/30">
                Get Your ID Now
              </Button>
            </a>

            <div className="flex flex-wrap gap-6 mt-8">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon size={18} className="text-primary" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <img
                src={heroBannerSide}
                alt="mahadev777 official gaming platform banner"
                className="w-full max-w-md rounded-xl shadow-gold-lg hover:scale-105 transition-transform duration-500"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
