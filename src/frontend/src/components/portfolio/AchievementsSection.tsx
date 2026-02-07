import SectionShell from './SectionShell';
import FlipCard from './FlipCard';
import { Award, Trophy, Code, Users, Briefcase, Star } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Microsoft Certification',
    front: 'Microsoft Certified',
    back: 'Completed Microsoft certification program demonstrating proficiency in modern technology solutions and cloud computing fundamentals.',
  },
  {
    icon: Award,
    title: 'Samsung Certification',
    front: 'Samsung Certified',
    back: 'Achieved Samsung certification showcasing expertise in mobile technology and innovative hardware solutions.',
  },
  {
    icon: Briefcase,
    title: 'AWS Solutions Architecture',
    front: 'AWS Simulation',
    back: 'Successfully completed AWS Solutions Architecture simulation, gaining hands-on experience with cloud infrastructure design.',
  },
  {
    icon: Code,
    title: 'GDG Solution Challenge',
    front: 'GDG Participant',
    back: 'Participated in Google Developer Groups Solution Challenge, developing innovative solutions for real-world problems.',
  },
  {
    icon: Trophy,
    title: 'Robo Soccer Champion',
    front: '2nd Place Winner',
    back: 'Secured 2nd place in competitive Robo Soccer tournament, demonstrating excellence in robotics design and programming.',
  },
  {
    icon: Users,
    title: 'Club Leadership',
    front: 'Unstop President',
    back: 'Serving as President of Unstop Igniter Club, leading initiatives and fostering innovation among peers.',
  },
];

export default function AchievementsSection() {
  return (
    <SectionShell id="achievements" title="Achievements & Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <FlipCard key={index} achievement={achievement} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
