import SectionShell from './SectionShell';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <SectionShell id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
