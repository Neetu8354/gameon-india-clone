const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-heading font-bold text-gold-gradient mb-3">👑 Royal777</div>
            <p className="text-sm text-muted-foreground max-w-sm mb-4">
              India's most trusted online gaming platform. Cricket, Casino games aur bahut kuch —
              secure, fast, aur reliable!
            </p>
            <p className="text-xs text-muted-foreground">
              ⚠️ Disclaimer: Royal777 is an entertainment platform. Please play responsibly.
              Users must be 18+ to register.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Games", "Features", "About", "FAQ"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-3">Games</h4>
            <ul className="space-y-2">
              {["Fantasy Cricket", "Teen Patti", "Andar Bahar", "Roulette", "Slots", "Live Casino"].map((item) => (
                <li key={item}>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Royal777. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Privacy Policy</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Terms of Service</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Responsible Gaming</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
