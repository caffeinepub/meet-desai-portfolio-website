import { lazy, Suspense } from 'react';
import Navbar from './components/portfolio/Navbar';
import HeroSection from './components/portfolio/HeroSection';
import AboutSection from './components/portfolio/AboutSection';
import ProjectsSection from './components/portfolio/ProjectsSection';
import SkillsSection from './components/portfolio/SkillsSection';
import AchievementsSection from './components/portfolio/AchievementsSection';
import LeadershipSection from './components/portfolio/LeadershipSection';
import ResearchInterestsSection from './components/portfolio/ResearchInterestsSection';
import ContactSection from './components/portfolio/ContactSection';
import Footer from './components/portfolio/Footer';

const ParticleBackground = lazy(() => import('./components/portfolio/ParticleBackground'));

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>
      
      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <LeadershipSection />
        <ResearchInterestsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
