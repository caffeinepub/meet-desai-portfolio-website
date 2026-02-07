import SectionShell from './SectionShell';
import AnimatedCounter from './AnimatedCounter';
import { Users, Target, Lightbulb, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const metrics = [
  { icon: Users, label: 'Members Led', value: 50, suffix: '+' },
  { icon: Target, label: 'Events Organized', value: 15, suffix: '+' },
  { icon: Lightbulb, label: 'Initiatives Launched', value: 8, suffix: '' },
];

const ambassadorRoles = [
  {
    title: 'Campus Ambassador – Google Gemini',
    description: 'Promoting Google Gemini AI technologies and organizing workshops to help students explore cutting-edge AI capabilities and integrate them into their projects.',
  },
  {
    title: 'Campus Ambassador – GeeksforGeeks',
    description: 'Representing GeeksforGeeks on campus, conducting coding sessions, and encouraging students to enhance their programming skills and participate in competitive coding.',
  },
  {
    title: 'Campus Ambassador – Unstop',
    description: 'Driving awareness about Unstop opportunities, connecting students with hackathons, competitions, and career resources to foster innovation and professional growth.',
  },
];

export default function LeadershipSection() {
  return (
    <SectionShell id="leadership" title="Leadership & Experience">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* President Role */}
        <Card className="border-border/50 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 backdrop-blur-sm">
          <CardContent className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="inline-block p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                <Users className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                President – Unstop Igniter Club
              </h3>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Leading a dynamic community of innovators and problem-solvers, fostering collaboration, 
                organizing technical events, and driving initiatives that empower students to explore 
                cutting-edge technologies and build impactful solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center space-y-2 p-4 rounded-lg bg-background/50"
                >
                  <div className="flex justify-center">
                    <metric.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <p className="text-sm text-foreground/60">{metric.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Campus Ambassador Roles */}
        <div className="space-y-4">
          <div className="text-center space-y-2">
            <div className="inline-block p-2 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
              <Award className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Campus Ambassador Experience</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ambassadorRoles.map((role, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/30 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300"
              >
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-cyan-400 text-sm">
                    {role.title}
                  </h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {role.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
