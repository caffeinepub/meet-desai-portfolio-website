import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypingText } from '@/hooks/useTypingText';

const typingPhrases = [
  'Exploring Intelligent Robotics',
  'Learning AI & Embedded Systems',
  'Building Real World Tech Solutions',
];

export default function HeroSection() {
  const typedText = useTypingText(typingPhrases, 100, 50, 2000);

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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-10" />
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
              Meet Desai
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Computer Engineering Student | AI & Robotics Enthusiast
            </p>
            <p className="text-base md:text-lg text-foreground/60 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              SAL Institute of Technology and Engineering Research
            </p>
          </div>

          {/* Typing Animation */}
          <div className="h-16 flex items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <p className="text-lg md:text-xl text-cyan-400 font-mono">
              • {typedText}
              <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 text-lg rounded-lg"
            >
              <a href="/assets/meet-desai-resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <Button
              size="icon"
              variant="ghost"
              asChild
              className="h-12 w-12 rounded-full border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
            >
              <a
                href="https://github.com/meetdesai2k7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
              className="h-12 w-12 rounded-full border border-purple-400/30 hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300"
            >
              <a
                href="https://www.linkedin.com/in/meet-desai-055694305"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
              className="h-12 w-12 rounded-full border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
            >
              <a href="mailto:amrmeetdesaiu02432@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
