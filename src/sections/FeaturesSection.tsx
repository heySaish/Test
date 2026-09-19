import React, { useState } from 'react';
import { KERNEL_FEATURES, FeatureItem } from '../data/featuresData';
import { Badge } from '../components/Badge';
import { ShieldCheck, Lock, Cpu, Wifi, Activity, Zap, Layers, Sliders, Radio, Settings, Gauge, Info, ChevronRight, X } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Lock,
  Cpu,
  Wifi,
  Activity,
  Zap,
  Layers,
  Sliders,
  Radio,
  Settings,
  Gauge
};

export const FeaturesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalFeature, setActiveModalFeature] = useState<FeatureItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Features' },
    { id: 'security', label: 'Root & Security' },
    { id: 'memory', label: 'Memory & RAM' },
    { id: 'performance', label: 'Scheduler & Thermal' },
    { id: 'network', label: 'Networking & Drivers' },
    { id: 'core', label: 'Core Config' }
  ];

  const filteredFeatures = selectedCategory === 'all'
    ? KERNEL_FEATURES
    : KERNEL_FEATURES.filter(f => f.category === selectedCategory);

  return (
    <section id="features" className="py-24 relative bg-[#060609] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Kernel Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Engineered Kernel Architecture
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
            Void Kernel combines upstream Linux 6.x backports, customized schedulers, and zero-footprint stealth security hooks. Features are configurable project capabilities tailored for target SoC platforms.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold shadow-sm'
                  : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800/80 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Cpu;
            return (
              <div
                key={feature.id}
                onClick={() => setActiveModalFeature(feature)}
                className="terminal-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 group cursor-pointer"
              >
                <div>
                  {/* Top Bar with Icon & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors">
                      <IconComponent className="w-5 h-5 text-emerald-400" />
                    </div>
                    <Badge
                      variant={
                        feature.status === 'Built-in'
                          ? 'emerald'
                          : feature.status === 'Configurable'
                          ? 'cyan'
                          : 'zinc'
                      }
                    >
                      {feature.status}
                    </Badge>
                  </div>

                  {/* Feature Title & Tagline */}
                  <h3 className="text-base font-bold font-sans text-zinc-100 group-hover:text-emerald-300 transition-colors mb-1">
                    {feature.name}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400/80 mb-3">
                    {feature.tagline}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                {/* Technical Bullet Points & Learn More link */}
                <div className="pt-4 border-t border-zinc-900 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    <span className="flex items-center gap-1">
                      <Info className="w-3 h-3 text-emerald-400" />
                      View Technical Specs
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Detail Drawer/Modal */}
        {activeModalFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="terminal-card bg-[#0b0b12] border border-emerald-500/30 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-6">
              <button
                onClick={() => setActiveModalFeature(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  {React.createElement(iconMap[activeModalFeature.icon] || Cpu, { className: 'w-5 h-5 text-emerald-400' })}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">{activeModalFeature.name}</h3>
                  <span className="text-xs font-mono text-emerald-400">{activeModalFeature.tagline}</span>
                </div>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-900/60 p-3.5 rounded-xl border border-zinc-800">
                {activeModalFeature.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                  Technical Mechanisms & Internals
                </h4>
                <ul className="space-y-2">
                  {activeModalFeature.technicalDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-mono text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-500">Status: <strong className="text-emerald-400">{activeModalFeature.status}</strong></span>
                <button
                  onClick={() => setActiveModalFeature(null)}
                  className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200"
                >
                  Close Spec
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
