import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { TerminalBackground } from './components/TerminalBackground';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { VoidSuPage } from './pages/VoidSuPage';
import { DashboardPage } from './pages/DashboardPage';
import { DevicesPage } from './pages/DevicesPage';
import { DownloadsPage } from './pages/DownloadsPage';
import { DocsPage } from './pages/DocsPage';
import { ChangelogPage } from './pages/ChangelogPage';
import { AboutPage } from './pages/AboutPage';

export const App: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen bg-[#050508] text-zinc-100 flex flex-col font-sans relative selection:bg-emerald-500/30 selection:text-emerald-300 overflow-x-hidden">
        {/* Background Animation Canvas */}
        <TerminalBackground />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Dynamic Multi-Page Router Outlet */}
        <main className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/voidsu" element={<VoidSuPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/devices" element={<DevicesPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
