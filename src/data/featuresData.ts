export interface FeatureItem {
  id: string;
  name: string;
  tagline: string;
  category: 'core' | 'memory' | 'security' | 'network' | 'performance';
  icon: string;
  description: string;
  technicalDetails: string[];
  status: 'Configurable' | 'Built-in' | 'Optional';
}

export const KERNEL_FEATURES: FeatureItem[] = [
  {
    id: 'voidsu-integration',
    name: 'KernelSU / VoidSU Integration',
    tagline: 'Native kernel-level superuser privilege control',
    category: 'security',
    icon: 'ShieldCheck',
    description: 'Direct in-kernel hooks providing stealth root management without modifying /system or breaking Android SafetyNet/Play Integrity checks.',
    technicalDetails: [
      'Kernel space syscall hooking',
      'No su binary left in system PATH',
      'Seamless companion app management',
      'Granular per-UID permission granting'
    ],
    status: 'Built-in'
  },
  {
    id: 'susfs-support',
    name: 'SUSFS Support',
    tagline: 'Selective Unmount File System',
    category: 'security',
    icon: 'Lock',
    description: 'Advanced file system unmounting driver that prevents detection of modified mount points, root traces, and overlayfs artifacts.',
    technicalDetails: [
      'Spoofs /proc/mounts and /proc/self/mountinfo',
      'Hides custom kernel modules and loop mounts',
      'Protects sensitive apps (Banking, Integrity test tools)',
      'Configurable unmount triggers via sysfs'
    ],
    status: 'Configurable'
  },
  {
    id: 'mglru',
    name: 'MGLRU (Multi-Gen LRU)',
    tagline: 'Modern Linux page reclaim architecture',
    category: 'memory',
    icon: 'Cpu',
    description: 'Replaces legacy Linux 2-generation page reclaim algorithm with multi-generational LRU, significantly reducing low-memory thrashing and app redraws.',
    technicalDetails: [
      'Reduces RAM pressure lag by up to 40%',
      'Optimized page aging generations',
      'Improves multi-tasking latency under heavy load',
      'Backported directly from mainline Linux 6.x'
    ],
    status: 'Built-in'
  },
  {
    id: 'bbr-plus',
    name: 'BBR / BBRplus TCP',
    tagline: 'Bottleneck Bandwidth and RTT congestion control',
    category: 'network',
    icon: 'Wifi',
    description: 'Google BBR and community BBRplus TCP congestion algorithms for lower latency, faster connection ramp-up, and higher network throughput on mobile data/Wi-Fi.',
    technicalDetails: [
      'Model-based congestion control instead of packet loss detection',
      'Improves high-RTT Wi-Fi & LTE packet flow',
      'Reduced TCP handshake latency',
      'Fully selectable via sysctl net.ipv4.tcp_congestion_control'
    ],
    status: 'Built-in'
  },
  {
    id: 'scheduler-work',
    name: 'Custom Scheduler Tuning',
    tagline: 'EAS & Schedutil Energy-Aware Scheduling',
    category: 'performance',
    icon: 'Activity',
    description: 'Fine-tuned Energy Aware Scheduler (EAS) topology with uclamp (utilization clamping) and custom task placement for silky smooth frame rates.',
    technicalDetails: [
      'Custom LITTLE & Big core energy model optimization',
      'Reduced latency for foreground UI threads',
      'Dynamic uclamp top-app boosting',
      'Optimized task migration overhead'
    ],
    status: 'Built-in'
  },
  {
    id: 'thermal-mgmt',
    name: 'Thermal Management',
    tagline: 'Intelligent thermal throttling & dynamic control',
    category: 'performance',
    icon: 'Zap',
    description: 'Custom thermal mitigation algorithms that prevent extreme CPU/GPU throttling during sustained gaming while maintaining safe battery temperatures.',
    technicalDetails: [
      'Gradual frequency step-down curve',
      'Fast thermal recovery algorithm',
      'Per-core thermal zone monitoring',
      'Configurable thermal trip points'
    ],
    status: 'Configurable'
  },
  {
    id: 'memory-opt',
    name: 'Memory Optimization',
    tagline: 'ZRAM zstd, SLUB allocator & compaction',
    category: 'memory',
    icon: 'Layers',
    description: 'High-ratio zstd compressed swap backing, SLUB allocator tuning, and aggressive memory compaction for efficient RAM utilization.',
    technicalDetails: [
      'ZRAM with ultra-fast zstd compression driver',
      'Custom vm.swappiness & dirty_ratio presets',
      'Asynchronous background memory compaction',
      'SLUB memory pool fragmentation reduction'
    ],
    status: 'Built-in'
  },
  {
    id: 'kernel-config',
    name: 'Custom Kernel Configuration',
    tagline: 'Stripped unnecessary debug bloat & enhanced lkm',
    category: 'core',
    icon: 'Sliders',
    description: 'Clean Kconfig setup optimized specifically for target SoC architectures, stripping obsolete kernel drivers and reducing kernel binary footprint.',
    technicalDetails: [
      'Kprobes enabled for dynamic tracing',
      'Stripped tracing/debug bloat for speed',
      'WireGuard native kernel module support',
      'LTO (Link Time Optimization) build support'
    ],
    status: 'Built-in'
  },
  {
    id: 'wireless-drivers',
    name: 'Wireless Driver Updates',
    tagline: 'Upstream Prima / QCACLD Wi-Fi & Bluetooth backports',
    category: 'network',
    icon: 'Radio',
    description: 'Updated Qualcomm Wi-Fi and Bluetooth stack drivers for stable connection handoffs, monitor mode capability, and lower latency ping times.',
    technicalDetails: [
      'Upstream QCACLD driver backports',
      'Packet injection / monitor mode patches',
      'Reduced Wi-Fi wake lock battery drain',
      'Enhanced Bluetooth LE Audio driver support'
    ],
    status: 'Optional'
  },
  {
    id: 'runtime-controls',
    name: 'Runtime Kernel Controls',
    tagline: 'Live sysfs & sysctl configuration knobs',
    category: 'core',
    icon: 'Settings',
    description: 'Exposes comprehensive runtime parameters via sysfs/procfs, allowing users and VoidSU companion app to customize behavior without rebooting.',
    technicalDetails: [
      'Dynamic CPU governor profile switching',
      'Custom I/O scheduler tuning (BFQ, Kyber, MQ-Deadline)',
      'Live TCP algorithm switching',
      'Vibration intensity & GPU clock scaling controls'
    ],
    status: 'Configurable'
  },
  {
    id: 'power-modes',
    name: 'Performance & Powersave Modes',
    tagline: 'Adaptable runtime power profiles',
    category: 'performance',
    icon: 'Gauge',
    description: 'Pre-configured runtime states ranging from maximum efficiency for screen-off music listening to high-performance gaming profiles.',
    technicalDetails: [
      'Screen-off CPU cluster power collapse optimization',
      'Dynamic governor frequency scaling',
      'Automated background app throttling',
      'Touch boost curve customization'
    ],
    status: 'Built-in'
  }
];
