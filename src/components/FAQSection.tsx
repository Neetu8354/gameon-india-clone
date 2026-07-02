import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What is Royal777 Online Gaming ID?",
    a: "The Royal777 Online Gaming ID is a verified account that lets you access gaming services such as cricket, casino, poker, and more. With this ID, users can deposit funds, place bets, and enjoy a secure gaming experience.",
  },
  {
    q: "How does Royal777 work?",
    a: "Royal777 works by providing registered users with a secure gaming ID. After logging in, you can deposit funds, choose your favorite sports or casino games, and play in real time. Winnings can be withdrawn via bank transfer or UPI.",
  },
  {
    q: "How do I join Royal777?",
    a: "You can join Royal777 by requesting a verified ID through WhatsApp. Once you receive your ID, you can log in, complete verification, and start playing.",
  },
  {
    q: "What games can I play with my Royal777 ID?",
    a: "Your ID gives you access to Cricket Fantasy, Teen Patti, Andar Bahar, Poker, Roulette, Slots, Live Casino, and more entertainment options.",
  },
  {
    q: "How do I deposit money?",
    a: "Deposits can be made using UPI, Paytm, Google Pay, PhonePe, bank transfer, or other supported payment methods from your account dashboard.",
  },
  {
    q: "How do I withdraw my winnings?",
    a: "Go to the withdrawal section, enter your UPI ID or bank details, and submit a request. Withdrawals are processed quickly through secure payment channels.",
  },
  {
    q: "Can I use Royal777 on mobile?",
    a: "Yes, Royal777 is fully mobile-friendly and also offers an app for a smoother experience on Android and iOS devices.",
  },
  {
    q: "Is my personal information secure?",
    a: "Yes, Royal777 uses advanced encryption and secure servers to protect your financial and personal data at all times.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-lg px-4 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:text-primary py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
