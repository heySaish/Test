import React, { useState } from 'react';
import { Terminal, Download, Github, Shield, ArrowRight, Activity, Cpu, Layers } from 'lucide-react';
import { CopyButton } from '../components/CopyButton';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'sysctl' | 'bootlog' | 'version'>('bootlog');

  const bootlogCode = `[ 0.000000] Linux version 4.14.336-VoidKernel-v1.2.0 (heySaish@build-host)
[ 0.000000] Command line: console=ttyMSM0,115200n8 androidboot.hardware=qcom
[ 0.124892] CPU: ARM64-v8a Kryo 465 [Qualcomm Snapdragon 720G]
[ 0.245102] mglru: 4 generations enabled (multi-gen LRU page reclaim)
[ 0.389120] susfs_init: selective unmount filesystem initialized v1.5.5
[ 0.512040] voidsu: sys_call_table kernel privilege hook registered [OK]
[ 0.678912] tcp_bbrplus: registered as default net.ipv4.tcp_congestion_control
[ 0.890123] sched: EAS uclamp utilization clamping enabled`;

  const sysctlCode = `# Kernel sysctl runtime configuration
vm.lru_gen.enabled = 0x0007
net.ipv4.tcp_congestion_control = bbrplus
fs.susfs.auto_unmount = 1
kernel.sched_energy_aware = 1
vm.swappiness = 80`;

  const versionCode = `VOID KERNEL BUILD INFO
Target Device: POCO M2 Pro / Redmi Note 9 Pro (gram / miatoll)
SoC: Qualcomm Snapdragon 720G (SM7125)
Android Support: Android 11.0, 12.0, 13.0, 14.0, 15.0
Toolchain: LLVM / Clang 18.0.0 (Polly & ThinLTO)
Root Manager: VoidSU v1.0.0-beta`;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Hero Text */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Project Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Void Ecosystem • Open Source Kernel</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans">
                VOID <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-200 font-mono">KERNEL</span>
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-zinc-300 font-medium leading-snug">
                &ldquo;An Android kernel built beyond the stock experience.&rdquo;
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
              Void Kernel is an open-source Android/Linux kernel project engineered for maximum performance, battery efficiency, low-memory stability with MGLRU, stealth SUSFS unmounting, and deep native VoidSU root management.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Download */}
              <button
                onClick={() => onNavigate('downloads')}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-all duration-200 shadow-lg shadow-emerald-500/25 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Kernel</span>
              </button>

              {/* Primary GitHub */}
              <a
                href="https://github.com/heySaish"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 active:scale-95"
              >
                <Github className="w-4 h-4 text-zinc-400" />
                <span>GitHub</span>
              </a>

              {/* Secondary Link: Explore VoidSU */}
              <button
                onClick={() => onNavigate('voidsu')}
                className="flex items-center gap-1.5 px-4 py-3 rounded-xl font-mono text-sm text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200 cursor-pointer"
              >
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Explore VoidSU</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>
            </div>

            {/* Quick Spec Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-zinc-800/60 max-w-xl">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">Target Device</span>
                <span className="text-xs font-mono font-semibold text-zinc-200 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  gram / miatoll
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">In-Kernel Root</span>
                <span className="text-xs font-mono font-semibold text-zinc-200 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  VoidSU v1.0
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">Security Layer</span>
                <span className="text-xs font-mono font-semibold text-zinc-200 flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-purple-400" />
                  SUSFS 1.5.5
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Interactive Card */}
          <div className="lg:col-span-5">
            <div className="terminal-card rounded-2xl p-5 shadow-2xl relative overflow-hidden group">
              {/* Window Bar Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    void_kernel.log
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-zinc-900/80 p-1 rounded-lg border border-zinc-800">
                  <button
                    onClick={() => setActiveTab('bootlog')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors ${
                      activeTab === 'bootlog' ? 'bg-emerald-500/20 text-emerald-400 font-semibold' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    dmesg
                  </button>
                  <button
                    onClick={() => setActiveTab('sysctl')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors ${
                      activeTab === 'sysctl' ? 'bg-cyan-500/20 text-cyan-400 font-semibold' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    sysctl
                  </button>
                  <button
                    onClick={() => setActiveTab('version')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors ${
                      activeTab === 'version' ? 'bg-purple-500/20 text-purple-400 font-semibold' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    specs
                  </button>
                </div>
              </div>

              {/* Terminal Code Viewer */}
              <div className="relative">
                <pre className="font-mono text-[11px] leading-relaxed text-zinc-300 bg-[#07070a] p-4 rounded-xl border border-zinc-900 overflow-x-auto min-h-[220px] max-h-[260px]">
                  <code>
                    {activeTab === 'bootlog' && bootlogCode}
                    {activeTab === 'sysctl' && sysctlCode}
                    {activeTab === 'version' && versionCode}
                  </code>
                </pre>

                {/* Copy Button */}
                <div className="absolute top-2 right-2">
                  <CopyButton
                    textToCopy={
                      activeTab === 'bootlog'
                        ? bootlogCode
                        : activeTab === 'sysctl'
                        ? sysctlCode
                        : versionCode
                    }
                  />
                </div>
              </div>

              {/* Status Footer */}
              <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Architecture: ARM64-v8a</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  LIVE KERNEL HOOKS
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
