import { motion } from "framer-motion";
import teenPattiImg from "@/assets/teen-patti.jpg";
import andarBaharImg from "@/assets/andar-bahar.jpg";
import rouletteImg from "@/assets/roulette.jpg";
import fantasyCricketImg from "@/assets/fantasy-cricket.jpg";
import slotsImg from "@/assets/slots.jpg";
import cricketGamesImg from "@/assets/cricket-games.jpg";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const cricketGames = [
  { title: "Fantasy Cricket", desc: "Build your dream XI & compete", img: fantasyCricketImg, players: "12K+" },
  { title: "Live Cricket Quiz", desc: "Answer live match questions", img: cricketGamesImg, players: "8K+" },
];

const casinoGames = [
  { title: "Teen Patti", desc: "India's favorite card game", img: teenPattiImg, players: "25K+" },
  { title: "Andar Bahar", desc: "Classic Indian card game", img: andarBaharImg, players: "18K+" },
  { title: "Roulette", desc: "Spin the golden wheel", img: rouletteImg, players: "15K+" },
  { title: "Slots", desc: "777 Jackpot fun", img: slotsImg, players: "20K+" },
];

const GameCard = ({ game, index }: { game: typeof casinoGames[0]; index: number }) => (
  <motion.a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold block"
  >
    <div className="aspect-square overflow-hidden">
      <img
        src={game.img}
        alt={game.title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full border border-primary/30">
        {game.players} Playing
      </span>
      <h3 className="font-heading font-bold text-lg text-foreground mt-2">{game.title}</h3>
      <p className="text-sm text-muted-foreground">{game.desc}</p>
    </div>
  </motion.a>
);

const GamesSection = () => {
  return (
    <section id="games" className="py-16 md:py-24 bg-dark-gradient">
      <div className="container mx-auto px-4">
        {/* Cricket Games */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-2">
            🏏 <span className="text-gold-gradient">Cricket Games</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            IPL Fantasy, Live Quiz aur Cricket se jude exciting games
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {cricketGames.map((game, i) => (
              <GameCard key={game.title} game={game} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Casino Games */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-2">
            🎰 <span className="text-gold-gradient">Casino Games</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Teen Patti, Roulette, Slots — premium casino experience
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {casinoGames.map((game, i) => (
              <GameCard key={game.title} game={game} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GamesSection;
