export interface KernelMetric {
  label: string;
  value: string;
  subtext: string;
  status: 'active' | 'optimal' | 'ready';
  icon: string;
}

export const DASHBOARD_METRICS: KernelMetric[] = [
  {
    label: 'Kernel Version',
    value: '5.15.x / 4.14.336',
    subtext: 'Void-Enhanced LTO Clang Build',
    status: 'active',
    icon: 'Terminal'
  },
  {
    label: 'Scheduler',
    value: 'Custom / CFS + EAS',
    subtext: 'Schedutil uclamp & Top-app boost',
    status: 'optimal',
    icon: 'Cpu'
  },
  {
    label: 'Memory Mgmt',
    value: 'MGLRU + ZRAM (zstd)',
    subtext: '4-Gen LRU Page Reclaim',
    status: 'active',
    icon: 'Layers'
  },
  {
    label: 'TCP Congestion',
    value: 'BBR / BBRplus',
    subtext: 'Default net.ipv4.tcp_congestion',
    status: 'optimal',
    icon: 'Wifi'
  },
  {
    label: 'Root Ecosystem',
    value: 'VoidSU v1.0',
    subtext: 'In-Kernel Syscall Hooking',
    status: 'active',
    icon: 'Shield'
  },
  {
    label: 'Security Layer',
    value: 'SUSFS 1.5.5',
    subtext: 'Selective Unmount File System',
    status: 'active',
    icon: 'Lock'
  },
  {
    label: 'Architecture',
    value: 'ARM64-v8a',
    subtext: 'Snapdragon 720G (SM7125)',
    status: 'ready',
    icon: 'Activity'
  },
  {
    label: 'Compiler Toolchain',
    value: 'LLVM / Clang 18.0',
    subtext: 'Polly & ThinLTO Optimized',
    status: 'optimal',
    icon: 'Code2'
  }
];

export const CPU_CORES_CONFIG = [
  { id: 0, type: 'LITTLE', name: 'Core 0 (Kryo 465 Silver)', baseFreq: '1.80 GHz', maxFreq: '1.80 GHz' },
  { id: 1, type: 'LITTLE', name: 'Core 1 (Kryo 465 Silver)', baseFreq: '1.80 GHz', maxFreq: '1.80 GHz' },
  { id: 2, type: 'LITTLE', name: 'Core 2 (Kryo 465 Silver)', baseFreq: '1.80 GHz', maxFreq: '1.80 GHz' },
  { id: 3, type: 'LITTLE', name: 'Core 3 (Kryo 465 Silver)', baseFreq: '1.80 GHz', maxFreq: '1.80 GHz' },
  { id: 4, type: 'LITTLE', name: 'Core 4 (Kryo 465 Silver)', baseFreq: '1.80 GHz', maxFreq: '1.80 GHz' },
  { id: 5, type: 'LITTLE', name: 'Core 5 (Kryo 465 Silver)', baseFreq: '1.80 GHz', maxFreq: '1.80 GHz' },
  { id: 6, type: 'BIG',    name: 'Core 6 (Kryo 465 Gold)',   baseFreq: '2.30 GHz', maxFreq: '2.30 GHz' },
  { id: 7, type: 'BIG',    name: 'Core 7 (Kryo 465 Gold)',   baseFreq: '2.30 GHz', maxFreq: '2.30 GHz' }
];

export const SYSCTL_PRESETS = [
  { key: 'vm.lru_gen.enabled', defaultVal: '0x0007', desc: 'MGLRU active aging generations' },
  { key: 'net.ipv4.tcp_congestion_control', defaultVal: 'bbrplus', desc: 'Active congestion algorithm' },
  { key: 'fs.susfs.auto_unmount', defaultVal: '1', desc: 'SUSFS stealth unmount trigger' },
  { key: 'kernel.sched_energy_aware', defaultVal: '1', desc: 'Energy Aware Scheduler enable' }
];
