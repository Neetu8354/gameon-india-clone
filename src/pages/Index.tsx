import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/PromoBanner";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import GamesSection from "@/components/GamesSection";
import OfficialPlatformSection from "@/components/OfficialPlatformSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SecuritySection from "@/components/SecuritySection";
import AppDownloadSection from "@/components/AppDownloadSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "mahadev777",
    "url": "https://royal777.app",
    "description": "India's most trusted online cricket & casino gaming platform with fast payouts and secure transactions.",
    "contactPoint": { "@type": "ContactPoint", "contactType": "Customer Support", "availableLanguage": ["Hindi", "English"] },
    "sameAs": ["https://royal777.app"]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "mahadev777",
    "url": "https://royal777.app",
    "description": "India's most trusted online gaming platform with Cricket Fantasy, Casino games and more.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://royal777.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is mahadev777 Online Gaming ID?", "acceptedAnswer": { "@type": "Answer", "text": "The mahadev777 Online Gaming ID is a verified account that lets you access gaming services such as cricket, casino, poker, and more. With this ID, users can deposit funds, place bets, and enjoy a secure gaming experience." } },
      { "@type": "Question", "name": "How does mahadev777 work?", "acceptedAnswer": { "@type": "Answer", "text": "mahadev777 works by providing registered users with a secure gaming ID. After logging in, you can deposit funds, choose your favorite sports or casino games, and play in real time. Winnings can be withdrawn via bank transfer or UPI." } },
      { "@type": "Question", "name": "How do I join mahadev777?", "acceptedAnswer": { "@type": "Answer", "text": "You can join mahadev777 by requesting a verified ID through WhatsApp. Once you receive your ID, you can log in, complete verification, and start playing." } },
      { "@type": "Question", "name": "What games can I play with my mahadev777 ID?", "acceptedAnswer": { "@type": "Answer", "text": "Your ID gives you access to Cricket Fantasy, Teen Patti, Andar Bahar, Poker, Roulette, Slots, Live Casino, and more entertainment options." } },
      { "@type": "Question", "name": "How do I deposit money?", "acceptedAnswer": { "@type": "Answer", "text": "Deposits can be made using UPI, Paytm, Google Pay, PhonePe, bank transfer, or other supported payment methods from your account dashboard." } },
      { "@type": "Question", "name": "How do I withdraw my winnings?", "acceptedAnswer": { "@type": "Answer", "text": "Go to the withdrawal section, enter your UPI ID or bank details, and submit a request. Withdrawals are processed quickly through secure payment channels." } },
      { "@type": "Question", "name": "Can I use mahadev777 on mobile?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, mahadev777 is fully mobile-friendly and also offers an app for a smoother experience on Android and iOS devices." } },
      { "@type": "Question", "name": "Is my personal information secure?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, mahadev777 uses advanced encryption and secure servers to protect your financial and personal data at all times." } }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />
      <PromoBanner />
      <HeroSection />
      <WhatIsSection />
      <GamesSection />
      <OfficialPlatformSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TeamSection />
      <TestimonialsSection />
      <SecuritySection />
      <AppDownloadSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
