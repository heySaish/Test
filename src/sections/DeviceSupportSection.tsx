import React, { useState } from 'react';
import { SUPPORTED_DEVICES, DEVICE_SUBMISSION_GUIDE } from '../data/devicesData';
import { Badge } from '../components/Badge';
import { Layers, Smartphone, Download, Github, PlusCircle, Check, ChevronRight, X, Cpu, Terminal } from 'lucide-react';

interface DeviceSupportSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const DeviceSupportSection: React.FC<DeviceSupportSectionProps> = ({ onNavigate }) => {
  const [showGuideModal, setShowGuideModal] = useState(false);

  return (
    <section id="devices" className="py-24 relative bg-[#040407] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Target Hardware Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Supported Device Ecosystem
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
            Void Kernel is built with expandable device architecture. Official builds are meticulously compiled and tested on target SoC families.
          </p>
        </div>

        {/* Device Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Main Official Device Card */}
          <div className="lg:col-span-8 terminal-card rounded-2xl p-6 lg:p-8 border border-emerald-500/30 relative overflow-hidden group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-emerald-500/40 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-sans text-white">
                    {SUPPORTED_DEVICES[0].name}
                  </h3>
                  <span className="text-xs font-mono text-emerald-400">
                    Codename: &quot;{SUPPORTED_DEVICES[0].codename}&quot;
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="emerald">{SUPPORTED_DEVICES[0].status}</Badge>
                <Badge variant="zinc">Maintainer: {SUPPORTED_DEVICES[0].maintainer}</Badge>
              </div>
            </div>

            {/* Device Tech Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                <span className="text-[11px] font-mono text-zinc-500 uppercase block">SoC Platform</span>
                <span className="text-xs font-mono font-semibold text-zinc-200 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  {SUPPORTED_DEVICES[0].soc}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                <span className="text-[11px] font-mono text-zinc-500 uppercase block">Android Compatibility</span>
                <span className="text-xs font-mono font-semibold text-zinc-200">
                  {SUPPORTED_DEVICES[0].androidVersion}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                <span className="text-[11px] font-mono text-zinc-500 uppercase block">Kernel Release Base</span>
                <span className="text-xs font-mono font-semibold text-zinc-200 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  {SUPPORTED_DEVICES[0].kernelVersion}
                </span>
              </div>
            </div>

            {/* Features Included List */}
            <div className="space-y-2 mb-6">
              <span className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider block">
                Platform Specific Kernel Enhancements
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SUPPORTED_DEVICES[0].featuresHighlight.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-zinc-500">
                Git Branch: <code className="text-emerald-400">{SUPPORTED_DEVICES[0].gitBranch}</code>
              </div>

              <button
                onClick={() => onNavigate('downloads')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Get Kernel for {SUPPORTED_DEVICES[0].codename}</span>
              </button>
            </div>
          </div>

          {/* Expandable Architecture Card (Adding Community Devices) */}
          <div className="lg:col-span-4 terminal-card rounded-2xl p-6 border border-zinc-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <PlusCircle className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold font-sans text-white">
                Expandable Device Architecture
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Are you a kernel developer or device maintainer? Void Kernel patches (SUSFS, VoidSU, MGLRU, BBR) can be ported to additional SoC platforms.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2">
              <span className="text-[11px] font-mono text-cyan-400 block font-semibold">
                Porting Requirements
              </span>
              <ul className="text-xs font-mono text-zinc-400 space-y-1">
                <li>• Linux 4.14+ or 5.x kernel base</li>
                <li>• Defconfig with Kprobes enabled</li>
                <li>• VoidSU hook patch applied</li>
              </ul>
            </div>

            <button
              onClick={() => setShowGuideModal(true)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 transition-all"
            >
              <span>View Maintainer Porting Guide</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

        </div>

        {/* Guide Modal */}
        {showGuideModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="terminal-card bg-[#0b0b12] border border-cyan-500/30 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-6">
              <button
                onClick={() => setShowGuideModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <Github className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">{DEVICE_SUBMISSION_GUIDE.title}</h3>
                  <span className="text-xs font-mono text-cyan-400">Community Device Integration</span>
                </div>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-900/60 p-3.5 rounded-xl border border-zinc-800">
                {DEVICE_SUBMISSION_GUIDE.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                  Submission Steps
                </h4>
                <ol className="space-y-2 font-mono text-xs text-zinc-300">
                  {DEVICE_SUBMISSION_GUIDE.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-[10px] shrink-0 font-bold">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex justify-between items-center text-xs font-mono">
                <a
                  href="https://github.com/heySaish/Void_Kernel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline flex items-center gap-1"
                >
                  Fork on GitHub
                </a>
                <button
                  onClick={() => setShowGuideModal(false)}
                  className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
