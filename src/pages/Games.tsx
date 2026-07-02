import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GamesSection from "@/components/GamesSection";

const Games = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Games – mahadev777 | Cricket, Casino & More</title>
        <meta name="description" content="Play Cricket Fantasy, Teen Patti, Roulette, Slots, Andar Bahar and 50+ games on mahadev777. Fast payouts, secure transactions." />
        <meta name="keywords" content="mahadev777 games, cricket fantasy, teen patti, roulette, slots, andar bahar, live casino" />
      </Helmet>

      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="text-gold-gradient">Games</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore our wide variety of games including Cricket Fantasy, Casino games, and more.
          </p>
        </div>
      </section>

      <GamesSection />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Games;
