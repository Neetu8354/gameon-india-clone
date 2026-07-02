import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul K.",
    city: "Mumbai",
    text: "Royal777 pe cricket gaming ka experience bahut accha hai! Match insights accurate hain aur easy to follow hain. Best platform!",
    rating: 5,
  },
  {
    name: "Priya S.",
    city: "Delhi",
    text: "Teen Patti aur Andar Bahar ka maza Royal777 pe alag hi hai. Withdrawals fast hain aur games bahut smooth chalte hain.",
    rating: 5,
  },
  {
    name: "Vikram M.",
    city: "Bangalore",
    text: "Mobile pe bhi perfectly kaam karta hai. Registration aur login process simple, fast, aur sabhi devices pe perfect hai.",
    rating: 5,
  },
  {
    name: "Anita R.",
    city: "Jaipur",
    text: "Sabse acchi baat ye hai ki platform secure hai aur payouts fast hain. Customer support 24/7 available rehta hai!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
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
            What Our <span className="text-gold-gradient">Community Says</span>
          </h2>
          <p className="text-muted-foreground">See why players across India trust our platform</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 mb-4 italic">"{t.text}"</p>
              <div>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.city}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
