import { useInViewOnce } from '@/hooks/useInViewOnce';

interface SkillMeterProps {
  name: string;
  level: number;
  delay?: number;
}

export default function SkillMeter({ name, level, delay = 0 }: SkillMeterProps) {
  const { ref, isInView } = useInViewOnce();

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground/80">{name}</span>
        <span className="text-cyan-400 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isInView ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
