import { motion } from "framer-motion";
import { Shield, Lock, Eye, Clock } from "lucide-react";
import securityImg from "@/assets/security-badge.jpg";

const securityPoints = [
  "Platform is built with advanced encryption to keep your data safe.",
  "All interactions processed via secure and verified systems.",
  "Multi-layered protection with real-time threat detection.",
  "Responsible gaming tools — set limits and take breaks as needed.",
  "Transparent operations with no hidden charges.",
  "Regular audits ensure fairness and compliance.",
  "24/7 live support for instant assistance.",
  "Your gaming remains private and fully protected.",
];

const responsibleGaming = [
  { icon: Lock, title: "Play Limits", desc: "Set daily or weekly play time limits" },
  { icon: Eye, title: "Self-Exclusion", desc: "Temporarily restrict access to your account" },
  { icon: Clock, title: "Time-Outs", desc: "Take breaks from gaming for set periods" },
  { icon: Shield, title: "Reality Checks", desc: "Regular reminders of your gaming activity" },
];

const SecuritySection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Security & Trust <span className="text-gold-gradient">You Can Count On</span>
            </h2>
            <ul className="space-y-3">
              {securityPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-foreground/70">
                  <span className="text-primary mt-0.5">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={securityImg}
              alt="Security certification badge"
              loading="lazy"
              className="w-48 md:w-64 rounded-xl shadow-gold-lg"
            />
          </motion.div>
        </div>

        {/* Responsible Gaming */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            Commitment to <span className="text-gold-gradient">Responsible Gaming</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {responsibleGaming.map((item, i) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-lg p-5 text-center hover:border-primary/30 transition-all"
              >
                <item.icon size={24} className="text-primary mx-auto mb-3" />
                <h4 className="font-heading font-bold text-sm text-foreground mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;
