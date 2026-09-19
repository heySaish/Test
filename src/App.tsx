import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { TerminalBackground } from './components/TerminalBackground';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { VoidSuSection } from './sections/VoidSuSection';
import { TechnicalDashboardSection } from './sections/TechnicalDashboardSection';
import { DeviceSupportSection } from './sections/DeviceSupportSection';
import { DownloadsSection } from './sections/DownloadsSection';
import { DocumentationSection } from './sections/DocumentationSection';
import { ChangelogSection } from './sections/ChangelogSection';
import { AboutSection } from './sections/AboutSection';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Handle section scrolling and link navigation
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Observe active section on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'features', 'voidsu', 'dashboard', 'devices', 'downloads', 'docs', 'changelog', 'about'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050508] text-zinc-100 flex flex-col font-sans relative selection:bg-emerald-500/30 selection:text-emerald-300 overflow-x-hidden">
      {/* Background Effect */}
      <TerminalBackground />

      {/* Navigation Header */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="flex-grow z-10">
        <HeroSection onNavigate={handleNavigate} />
        <FeaturesSection />
        <VoidSuSection onNavigate={handleNavigate} />
        <TechnicalDashboardSection />
        <DeviceSupportSection onNavigate={handleNavigate} />
        <DownloadsSection onNavigate={handleNavigate} />
        <DocumentationSection />
        <ChangelogSection />
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
