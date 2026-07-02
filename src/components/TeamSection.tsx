import { motion } from "framer-motion";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const team = [
  {
    name: "Rajiv Mehta",
    role: "Senior Gaming Analyst",
    desc: "12+ years experience in cricket analytics and gaming strategy. Expert in Fantasy Cricket systems.",
    img: team1,
    tags: ["M.Sc. Statistics", "Certified Analyst"],
  },
  {
    name: "Priya Sharma",
    role: "Security Head",
    desc: "Expert in platform security with certifications in cybersecurity and fraud prevention.",
    img: team2,
    tags: ["CISSP Certified", "Security Specialist"],
  },
  {
    name: "Vikram Singh",
    role: "Operations Director",
    desc: "15+ years in gaming operations and customer experience management.",
    img: team3,
    tags: ["MBA, Operations", "iGaming Certified"],
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            Meet Our <span className="text-gold-gradient">Expert Team</span>
          </h2>
          <p className="text-muted-foreground">
            Our team of analysts, engineers, and gaming veterans brings decades of combined experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all hover:shadow-gold group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-foreground">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
