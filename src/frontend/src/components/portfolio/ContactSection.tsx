import SectionShell from './SectionShell';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'amrmeetdesaiu02432@gmail.com',
    href: 'mailto:amrmeetdesaiu02432@gmail.com',
    color: 'text-cyan-400',
    hoverColor: 'hover:bg-cyan-400/10',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/meetdesai2k7',
    href: 'https://github.com/meetdesai2k7',
    color: 'text-purple-400',
    hoverColor: 'hover:bg-purple-400/10',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/meet-desai-055694305',
    href: 'https://www.linkedin.com/in/meet-desai-055694305',
    color: 'text-cyan-400',
    hoverColor: 'hover:bg-cyan-400/10',
  },
];

export default function ContactSection() {
  return (
    <SectionShell id="contact" title="Get In Touch">
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-center text-lg text-foreground/70">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
          Feel free to reach out through any of the channels below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactLinks.map((link, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/30 backdrop-blur-sm hover:border-border transition-all duration-300"
            >
              <CardContent className="p-6">
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex flex-col items-center text-center space-y-3 group ${link.hoverColor} rounded-lg p-4 transition-colors duration-300`}
                >
                  <link.icon className={`h-8 w-8 ${link.color}`} />
                  <div>
                    <p className="font-semibold text-foreground">{link.label}</p>
                    <p className="text-sm text-foreground/60 break-all">{link.value}</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <a href="/assets/meet-desai-resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
