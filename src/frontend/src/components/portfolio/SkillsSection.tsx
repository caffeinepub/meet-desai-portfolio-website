import SectionShell from './SectionShell';
import SkillMeter from './SkillMeter';
import { Code2, Brain, Cpu, Wrench } from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming',
    icon: Code2,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'JavaScript', level: 75 },
    ],
  },
  {
    title: 'AI & Software Skills',
    icon: Brain,
    skills: [
      { name: 'Machine Learning Basics', level: 70 },
      { name: 'Computer Vision Basics', level: 75 },
      { name: 'Signal Processing Basics', level: 65 },
    ],
  },
  {
    title: 'Hardware & Robotics',
    icon: Cpu,
    skills: [
      { name: 'Arduino', level: 85 },
      { name: 'ESP32', level: 80 },
      { name: 'Sensors', level: 75 },
      { name: 'Embedded Systems', level: 70 },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'GitHub', level: 80 },
      { name: 'VS Code', level: 85 },
      { name: 'AI Development Platforms', level: 70 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <SectionShell id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="space-y-4 p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                <group.icon className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
            </div>
            <div className="space-y-4">
              {group.skills.map((skill, skillIndex) => (
                <SkillMeter
                  key={skillIndex}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 100 + skillIndex * 50}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
