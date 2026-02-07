import SectionShell from './SectionShell';
import { useInViewOnce } from '@/hooks/useInViewOnce';

export default function AboutSection() {
  const { ref, isInView } = useInViewOnce();

  return (
    <SectionShell id="about" title="About Me">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto space-y-6 text-lg text-foreground/80 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p>
          I'm a passionate <span className="text-cyan-400 font-semibold">Computer Engineering student</span> in my second year at{' '}
          <span className="text-cyan-400 font-semibold">SAL Institute of Technology and Engineering Research</span>, 
          driven by a deep fascination with the intersection of hardware and software. My journey in technology is fueled by 
          curiosity and a commitment to creating meaningful solutions that bridge the digital and physical worlds.
        </p>
        
        <p>
          With a strong interest in <span className="text-purple-400 font-semibold">Artificial Intelligence and Robotics</span>, 
          I'm constantly exploring how intelligent systems can transform our interaction with technology. From machine learning 
          algorithms to embedded systems, I thrive on understanding the intricate details that make modern technology work.
        </p>
        
        <p>
          I'm enthusiastic about solving <span className="text-cyan-400 font-semibold">real-world problems using technology</span>. 
          Whether it's developing assistive robotics for accessibility, creating AI-driven security systems, or building innovative 
          automation solutions, I believe technology should serve humanity and make a tangible difference.
        </p>
        
        <p>
          My career vision extends to cutting-edge fields like <span className="text-purple-400 font-semibold">defense technology 
          and space robotics research</span>. I'm particularly drawn to projects that push the boundaries of what's possible—from 
          Mars rover prototypes to intelligent security systems—where innovation meets purpose.
        </p>
        
        <p>
          Currently, I'm actively building hands-on <span className="text-cyan-400 font-semibold">robotics and AI projects</span>, 
          participating in competitions, and continuously expanding my knowledge in embedded systems, computer vision, and 
          intelligent automation. Every project is an opportunity to learn, innovate, and contribute to the future of technology.
        </p>
      </div>
    </SectionShell>
  );
}
