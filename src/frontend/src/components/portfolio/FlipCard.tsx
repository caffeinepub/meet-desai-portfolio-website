import { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useInViewOnce } from '@/hooks/useInViewOnce';

interface Achievement {
  icon: LucideIcon;
  title: string;
  front: string;
  back: string;
}

interface FlipCardProps {
  achievement: Achievement;
  index: number;
}

export default function FlipCard({ achievement, index }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { ref, isInView } = useInViewOnce();
  const Icon = achievement.icon;

  const handleClick = () => setIsFlipped(!isFlipped);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="relative h-48 cursor-pointer perspective-1000"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`${achievement.title}. Click to flip card.`}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front */}
          <Card className="absolute inset-0 backface-hidden border-border/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm">
            <CardContent className="flex flex-col items-center justify-center h-full text-center p-6 space-y-4">
              <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                <Icon className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{achievement.front}</h3>
              <p className="text-sm text-foreground/60">Click to learn more</p>
            </CardContent>
          </Card>

          {/* Back */}
          <Card className="absolute inset-0 backface-hidden rotate-y-180 border-border/50 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm">
            <CardContent className="flex flex-col items-center justify-center h-full text-center p-6">
              <p className="text-sm text-foreground/80 leading-relaxed">{achievement.back}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
