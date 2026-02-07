import SectionShell from './SectionShell';
import { Shield, Bot, Rocket, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useInViewOnce } from '@/hooks/useInViewOnce';

const interests = [
  {
    icon: Shield,
    title: 'AI Assisted Security Systems',
    description: 'Developing intelligent surveillance and threat detection systems using computer vision and machine learning.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Bot,
    title: 'Robotics Automation',
    description: 'Creating autonomous robotic systems for industrial, medical, and assistive applications.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: Rocket,
    title: 'Space Exploration Technology',
    description: 'Exploring robotics and AI solutions for space missions, planetary rovers, and extraterrestrial research.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Cpu,
    title: 'Embedded Intelligence',
    description: 'Integrating AI capabilities into embedded systems for edge computing and IoT applications.',
    gradient: 'from-pink-500/20 to-purple-500/20',
    iconColor: 'text-pink-400',
  },
];

export default function ResearchInterestsSection() {
  return (
    <SectionShell id="research" title="Research & Learning Interests">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((interest, index) => (
          <InterestCard key={index} interest={interest} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}

function InterestCard({ interest, index }: { interest: typeof interests[0]; index: number }) {
  const { ref, isInView } = useInViewOnce();
  const Icon = interest.icon;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="group relative overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm hover:border-border transition-all duration-300">
        <div className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <CardHeader className="relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-background/50 to-background/30 group-hover:scale-110 transition-transform duration-300">
              <Icon className={`h-6 w-6 ${interest.iconColor}`} />
            </div>
            <CardTitle className="text-xl">{interest.title}</CardTitle>
          </div>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <p className="text-foreground/70">{interest.description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
