const promoItems = [
  "🎉 Welcome Bonus on First Deposit!",
  "🏏 IPL Season Special — Play Now!",
  "🎰 New Casino Games Added Daily",
  "⭐ Instant Withdrawals via UPI",
  "🏆 Weekly Leaderboard Rewards",
  "🎮 50+ Games Available Now",
];

const PromoBanner = () => {
  return (
    <div className="bg-gold-gradient py-2 overflow-hidden">
      <div className="animate-slide flex whitespace-nowrap">
        {[...promoItems, ...promoItems].map((item, i) => (
          <span
            key={i}
            className="inline-block px-8 text-sm font-semibold text-primary-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PromoBanner;
