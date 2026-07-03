import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Games = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Online Casino Games & Sports Exchange | Mahadev777 Games</title>
        <meta name="description" content="Explore online casino games, live casino, cricket exchange, slot games, Teen Patti, Aviator, and more at Mahadev777. Fast access with secure gameplay." />
        <meta name="keywords" content="mahadev777 games, online casino, cricket exchange, live casino, slot games, teen patti, aviator, sports exchange" />
        <link rel="canonical" href="https://www.mahadev777.online/games" />
      </Helmet>

      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Explore Premium Online Games at <span className="text-gold-gradient">Mahadev777</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl text-lg">
            Discover exciting online games across sports exchange, live casino, card games, slots, and fast-paced virtual games.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">Discover Exciting Online Games</h2>
          <p className="text-muted-foreground max-w-4xl mb-8">
            Mahadev777 offers a wide selection of online games designed for users looking for entertainment across sports exchange, live casino, card games, slots, and fast-paced virtual games. Whether you enjoy cricket exchange, roulette, Teen Patti, or modern crash games, our platform brings everything together in one place.
          </p>
          <p className="text-muted-foreground max-w-4xl mb-8">
            Built for desktop and mobile users, Mahadev777 provides smooth navigation, responsive performance, and access to popular gaming categories through a single account.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8">Our Game Categories</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gold-gradient">Cricket Exchange</h3>
              <p className="text-muted-foreground mb-4">Stay connected with major cricket tournaments through dynamic exchange markets featuring live odds and multiple betting options.</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Live Cricket Markets</li>
                <li>• Match Odds</li>
                <li>• Session Markets</li>
                <li>• Toss Markets</li>
                <li>• International & Domestic Matches</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gold-gradient">Football Exchange</h3>
              <p className="text-muted-foreground">Enjoy football markets covering major international leagues and tournaments with competitive odds and live updates.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gold-gradient">Tennis Exchange</h3>
              <p className="text-muted-foreground">Access ATP, WTA, Grand Slam tournaments, and other professional tennis events throughout the year.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gold-gradient">Live Casino Games</h3>
              <p className="text-muted-foreground mb-4">Experience real-time casino action with professional live dealers and high-quality streaming.</p>
              <p className="text-sm text-muted-foreground font-semibold mb-2">Popular Live Casino Games include:</p>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Live Roulette</li>
                <li>• Blackjack</li>
                <li>• Baccarat</li>
                <li>• Poker</li>
                <li>• Dragon Tiger</li>
                <li>• Teen Patti</li>
                <li>• Andar Bahar</li>
                <li>• Sic Bo</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gold-gradient">Slot Games</h3>
              <p className="text-muted-foreground mb-4">Discover hundreds of entertaining slot games featuring exciting themes and bonus features.</p>
              <p className="text-sm text-muted-foreground font-semibold mb-2">Popular categories include:</p>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Classic Slots</li>
                <li>• Video Slots</li>
                <li>• Jackpot Slots</li>
                <li>• Fruit Slots</li>
                <li>• Megaways Slots</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gold-gradient">Crash Games</h3>
              <p className="text-muted-foreground mb-4">Play popular multiplier-style games where timing and strategy make every round exciting.</p>
              <p className="text-sm text-muted-foreground font-semibold mb-2">Featured crash-style games include:</p>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Aviator Style Games</li>
                <li>• JetX</li>
                <li>• Rocket Games</li>
                <li>• Multiplier Games</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gold-gradient">Card Games</h3>
              <p className="text-muted-foreground mb-4">Enjoy India's most popular card games in a secure online environment.</p>
              <p className="text-sm text-muted-foreground font-semibold mb-2">Available games include:</p>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Teen Patti</li>
                <li>• Poker</li>
                <li>• Rummy</li>
                <li>• Andar Bahar</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gold-gradient">Virtual Sports</h3>
              <p className="text-muted-foreground">Enjoy simulated sporting events available throughout the day with fast results and continuous entertainment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8">Why Play Games on Mahadev777?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Wide Game Collection</h3>
              <p className="text-muted-foreground">Access multiple gaming categories from one convenient platform.</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Mobile Optimized</h3>
              <p className="text-muted-foreground">Enjoy smooth gameplay on Android, iPhone, tablets, laptops, and desktops.</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Easy Navigation</h3>
              <p className="text-muted-foreground">Quick loading pages and user-friendly design make finding your favorite games effortless.</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Regular Updates</h3>
              <p className="text-muted-foreground">New games and fresh gaming experiences are added regularly to keep the platform engaging.</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Secure Platform</h3>
              <p className="text-muted-foreground">Modern security measures help protect user information and provide a reliable gaming experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8">Popular Games on Mahadev777</h2>
          <div className="flex flex-wrap gap-3">
            {["Cricket Exchange", "Football Exchange", "Tennis Exchange", "Live Casino", "Blackjack", "Roulette", "Baccarat", "Teen Patti", "Poker", "Andar Bahar", "Dragon Tiger", "Slot Games", "Crash Games", "Aviator Style Games", "Virtual Sports"].map((game) => (
              <span key={game} className="bg-card border border-border px-4 py-2 rounded-full text-sm font-medium">
                {game}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8">How to Start Playing</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: 1, text: "Create your Mahadev777 account." },
              { step: 2, text: "Complete the simple verification process." },
              { step: 3, text: "Choose your preferred game category." },
              { step: 4, text: "Access sports exchange or casino games instantly." },
              { step: 5, text: "Enjoy a seamless gaming experience across all devices." }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">Why Choose Mahadev777?</h2>
          <p className="text-muted-foreground max-w-4xl">
            Mahadev777 is designed to deliver a fast, responsive, and user-friendly gaming experience. Whether you prefer sports exchange, live casino tables, or modern online games, the platform combines convenience, multiple gaming options, and responsive support for Indian users.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">Responsible Gaming</h2>
          <p className="text-muted-foreground max-w-4xl">
            Mahadev777 supports responsible gaming. Access is intended only for users aged 18 years or older. Please play responsibly and comply with the laws applicable in your jurisdiction.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-4xl">
            {[
              { q: "What games are available on Mahadev777?", a: "Mahadev777 offers cricket exchange, football, tennis, live casino, slot games, Teen Patti, Poker, Roulette, Baccarat, crash games, and virtual sports." },
              { q: "Can I play on my mobile phone?", a: "Yes. The platform is fully optimized for Android, iPhone, tablets, and desktop devices." },
              { q: "Are live casino games available?", a: "Yes. You can access live dealer games including Blackjack, Roulette, Baccarat, Teen Patti, and Dragon Tiger." },
              { q: "Does Mahadev777 offer slot games?", a: "Yes. The platform includes classic slots, video slots, jackpot slots, and themed slot games." },
              { q: "Which sports exchange games are available?", a: "You can access cricket, football, tennis, kabaddi, basketball, horse racing, and other sports markets." },
              { q: "Is registration easy?", a: "Yes. Registration is simple, and account activation is designed to be completed quickly." },
              { q: "Are new games added regularly?", a: "Yes. Mahadev777 regularly updates its game library with new releases and popular gaming categories." },
              { q: "Is Mahadev777 secure?", a: "The platform uses modern security practices to provide a secure browsing and gaming experience." },
              { q: "Who can access Mahadev777?", a: "Only users who are 18 years of age or older and who comply with applicable local laws should access the platform." }
            ].map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">{index + 1}. {faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Games;
