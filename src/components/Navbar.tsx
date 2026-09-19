import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Terminal, Cpu, Download, BookOpen, Shield, Layers, HelpCircle, Activity } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'features', label: 'Features', icon: Cpu },
    { id: 'voidsu', label: 'VoidSU', icon: Shield },
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'devices', label: 'Devices', icon: Layers },
    { id: 'downloads', label: 'Downloads', icon: Download },
    { id: 'docs', label: 'Docs', icon: BookOpen },
    { id: 'changelog', label: 'Changelog', icon: Terminal },
    { id: 'about', label: 'About', icon: HelpCircle },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050508]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative w-9 h-9 rounded-lg bg-zinc-900 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-500/80 transition-colors shadow-sm">
              <Terminal className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <div>
              <span className="font-mono font-bold text-base text-zinc-100 tracking-wider flex items-center gap-1.5">
                VOID<span className="text-emerald-400">KERNEL</span>
              </span>
              <span className="text-[10px] font-mono text-zinc-500 block -mt-0.5 tracking-tight">
                by heySaish
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-mono shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* GitHub Link & CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/heySaish"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>heySaish</span>
            </a>
            <button
              onClick={() => handleLinkClick('downloads')}
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-mono font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-all duration-200 shadow-md shadow-emerald-500/20 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get Kernel</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5 text-zinc-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#08080d]/95 backdrop-blur-xl border-b border-zinc-800/90 shadow-2xl transition-all animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
            <div className="grid grid-cols-2 gap-2 pb-4 border-b border-zinc-800/60">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-mono text-left transition-all ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : 'text-zinc-300 hover:bg-zinc-900 border border-zinc-800/40'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-emerald-400" />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://github.com/heySaish"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono text-zinc-200 bg-zinc-900 border border-zinc-800"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository (@heySaish)</span>
              </a>
              <button
                onClick={() => handleLinkClick('downloads')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-bold text-black bg-emerald-400"
              >
                <Download className="w-4 h-4" />
                <span>Download Void Kernel</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
