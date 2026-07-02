import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-[#fff] font-semibold px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all animate-pulse-gold"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline text-sm">Chat Now</span>
    </a>
  );
};

export default WhatsAppButton;
