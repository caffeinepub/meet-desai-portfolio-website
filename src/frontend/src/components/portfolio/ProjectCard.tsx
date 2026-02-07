import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useInViewOnce } from '@/hooks/useInViewOnce';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isInView } = useInViewOnce();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card
        className={`group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 cursor-pointer ${
          isExpanded
            ? 'shadow-2xl shadow-cyan-500/20 border-cyan-400/50 scale-[1.02]'
            : 'hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-400/30'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />

        <CardHeader className="relative z-10">
          <CardTitle className="text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {project.title}
          </CardTitle>
          <CardDescription className="text-foreground/70">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative z-10 space-y-4">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-cyan-400/10 text-cyan-400 border-cyan-400/30"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            {project.github && (
              <Button
                size="sm"
                variant="outline"
                asChild
                className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10"
                onClick={(e) => e.stopPropagation()}
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
            {project.link && (
              <Button
                size="sm"
                variant="outline"
                asChild
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                onClick={(e) => e.stopPropagation()}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
