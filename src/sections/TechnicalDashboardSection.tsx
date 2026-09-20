import React, { useState, useEffect } from 'react';
import { DASHBOARD_METRICS, CPU_CORES_CONFIG, SYSCTL_PRESETS } from '../data/dashboardData';
import { Badge } from '../components/Badge';
import { Terminal, Cpu, Activity, Layers, Wifi, Shield, Lock, Code2, Sliders, RefreshCw, CheckCircle } from 'lucide-react';
import { CopyButton } from '../components/CopyButton';

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  Cpu,
  Layers,
  Wifi,
  Shield,
  Lock,
  Activity,
  Code2
};

export const TechnicalDashboardSection: React.FC = () => {
  const [coreLoads, setCoreLoads] = useState<number[]>([12, 18, 8, 24, 15, 9, 65, 42]);
  const [activeSysctlState, setActiveSysctlState] = useState<Record<string, string>>({
    'vm.lru_gen.enabled': '0x0007',
    'net.ipv4.tcp_congestion_control': 'bbrplus',
    'fs.susfs.auto_unmount': '1',
    'kernel.sched_energy_aware': '1'
  });

  // Simulated dynamic CPU load variation
  useEffect(() => {
    const interval = setInterval(() => {
      setCoreLoads(prev =>
        prev.map((load, i) => {
          const delta = Math.floor(Math.random() * 15) - 7;
          // Core 6 and 7 are Big cores (higher workload simulation)
          const min = i >= 6 ? 30 : 5;
          const max = i >= 6 ? 95 : 50;
          return Math.min(max, Math.max(min, load + delta));
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleSysctl = (key: string, nextVal: string) => {
    setActiveSysctlState(prev => ({ ...prev, [key]: nextVal }));
  };

  return (
    <section id="dashboard" className="py-24 relative bg-[#050508] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Kernel Monitor Interface</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Technical Kernel Dashboard
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Real-time interface state representing Void Kernel active subsystems, CPU scheduler topology, memory reclamation status, and security unmount layers.
          </p>
        </div>

        {/* System Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {DASHBOARD_METRICS.map((metric, idx) => {
            const IconComponent = iconMap[metric.icon] || Terminal;
            return (
              <div
                key={idx}
                className="terminal-card rounded-xl p-4 border border-zinc-800/80 hover:border-emerald-500/40 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    {metric.label}
                  </span>
                  <IconComponent className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="font-mono text-base font-bold text-zinc-100">
                  {metric.value}
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] font-mono text-zinc-500">
                    {metric.subtext}
                  </span>
                  <Badge variant={metric.status === 'active' ? 'emerald' : 'cyan'}>
                    {metric.status}
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>

        {/* CPU Scheduler & Core Frequencies Load Gauges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Left: CPU Cores Monitor */}
          <div className="lg:col-span-7 terminal-card rounded-2xl p-6 border border-zinc-800">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <h3 className="font-mono text-sm font-bold text-white">
                  Snapdragon 720G CPU Topology (Kryo 465)
                </h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                Live Dynamic Load
              </span>
            </div>

            <div className="space-y-3">
              {CPU_CORES_CONFIG.map((core, i) => {
                const load = coreLoads[i] || 15;
                const isBig = core.type === 'BIG';
                return (
                  <div key={core.id} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-300 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${isBig ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
                        {core.name}
                      </span>
                      <span className="text-zinc-400">
                        {load}% load • <strong className="text-zinc-200">{core.maxFreq}</strong>
                      </span>
                    </div>

                    {/* Load Bar */}
                    <div className="w-full h-2 rounded-full bg-zinc-900 overflow-hidden border border-zinc-800/80">
                      <div
                        className={`h-full transition-all duration-500 rounded-full ${
                          load > 80
                            ? 'bg-rose-500'
                            : isBig
                            ? 'bg-gradient-to-r from-cyan-500 to-emerald-400'
                            : 'bg-emerald-400'
                        }`}
                        style={{ width: `${load}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Live Sysctl Dynamic Simulator */}
          <div className="lg:col-span-5 terminal-card rounded-2xl p-6 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-mono text-sm font-bold text-white">
                    Live sysctl Parameter State
                  </h3>
                </div>
                <CopyButton textToCopy={JSON.stringify(activeSysctlState, null, 2)} label="Export" />
              </div>

              <div className="space-y-4">
                {SYSCTL_PRESETS.map((item) => {
                  const currentVal = activeSysctlState[item.key] || item.defaultVal;
                  return (
                    <div key={item.key} className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-emerald-400 font-semibold">{item.key}</span>
                        <span className="text-zinc-300 font-bold bg-zinc-800 px-2 py-0.5 rounded text-[11px]">
                          {currentVal}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400">{item.desc}</p>
                      
                      {/* Toggle controls */}
                      {item.key === 'net.ipv4.tcp_congestion_control' && (
                        <div className="flex items-center gap-2 pt-1">
                          <button
                            onClick={() => toggleSysctl(item.key, 'bbrplus')}
                            className={`px-2.5 py-1 text-[10px] font-mono rounded ${currentVal === 'bbrplus' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'bg-zinc-800 text-zinc-400'}`}
                          >
                            bbrplus
                          </button>
                          <button
                            onClick={() => toggleSysctl(item.key, 'bbr')}
                            className={`px-2.5 py-1 text-[10px] font-mono rounded ${currentVal === 'bbr' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'bg-zinc-800 text-zinc-400'}`}
                          >
                            bbr
                          </button>
                          <button
                            onClick={() => toggleSysctl(item.key, 'cubic')}
                            className={`px-2.5 py-1 text-[10px] font-mono rounded ${currentVal === 'cubic' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'bg-zinc-800 text-zinc-400'}`}
                          >
                            cubic
                          </button>
                        </div>
                      )}

                      {item.key === 'fs.susfs.auto_unmount' && (
                        <div className="flex items-center gap-2 pt-1">
                          <button
                            onClick={() => toggleSysctl(item.key, currentVal === '1' ? '0' : '1')}
                            className={`px-2.5 py-1 text-[10px] font-mono rounded ${currentVal === '1' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-zinc-800 text-zinc-400'}`}
                          >
                            {currentVal === '1' ? 'Active (1)' : 'Disabled (0)'}
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-900 mt-4 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                sysctl /proc/sys sync verified
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
