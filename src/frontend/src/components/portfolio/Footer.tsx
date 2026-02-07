import { Heart } from 'lucide-react';

const footerLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/generated/md-logo.dim_512x512.png"
                alt="MD Logo"
                className="h-10 w-10"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Meet Desai
              </span>
            </div>
            <p className="text-sm text-foreground/60">
              Computer Engineering Student passionate about AI, Robotics, and building innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-foreground/60 hover:text-cyan-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex flex-col space-y-2 text-sm text-foreground/60">
              <a href="mailto:amrmeetdesaiu02432@gmail.com" className="hover:text-cyan-400 transition-colors">
                amrmeetdesaiu02432@gmail.com
              </a>
              <a
                href="https://github.com/meetdesai2k7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/meet-desai-055694305"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/30 text-center text-sm text-foreground/60">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © 2026. Built with{' '}
            <Heart className="h-4 w-4 text-red-500 fill-red-500 inline" />{' '}
            using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
