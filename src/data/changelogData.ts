export interface ChangelogRelease {
  version: string;
  releaseDate: string;
  tag: 'Latest' | 'Stable' | 'Beta';
  highlights: string;
  sections: {
    category: 'Kernel improvements' | 'Scheduler changes' | 'Memory improvements' | 'Thermal improvements' | 'VoidSU integration';
    items: string[];
  }[];
}

export const CHANGELOG_DATA: ChangelogRelease[] = [
  {
    version: 'v1.2.0',
    releaseDate: 'February 15, 2026',
    tag: 'Latest',
    highlights: 'Major release introducing SUSFS 1.5.5, MGLRU optimizations, and enhanced VoidSU companion hooks.',
    sections: [
      {
        category: 'Kernel improvements',
        items: [
          'Upgraded Linux kernel base to 4.14.336 upstream stable',
          'Compiled with LLVM Clang 18.0 with ThinLTO & Polly optimizations',
          'Enabled Kprobes for real-time dynamic tracing',
          'WireGuard VPN kernel module performance patches'
        ]
      },
      {
        category: 'Scheduler changes',
        items: [
          'Fine-tuned Energy Aware Scheduler (EAS) energy model for Snapdragon 720G',
          'Optimized uclamp placement for UI top-app thread responsiveness',
          'Reduced task migration latency across LITTLE and Big CPU clusters'
        ]
      },
      {
        category: 'Memory improvements',
        items: [
          'Full MGLRU backport with multi-generational LRU aging generations',
          'Upgraded ZRAM swap compression engine to fast zstd driver',
          'SLUB allocator memory fragmentation mitigation'
        ]
      },
      {
        category: 'Thermal improvements',
        items: [
          'Custom dynamic thermal mitigation algorithm for prolonged high load',
          'Smooth frequency step-down curves preventing sudden fps drops'
        ]
      },
      {
        category: 'VoidSU integration',
        items: [
          'Implemented in-kernel VoidSU privilege hooks',
          'SUSFS 1.5.5 unmount integration for hiding root traces and overlayfs',
          'Direct sysctl interface bridge for VoidSU companion app'
        ]
      }
    ]
  },
  {
    version: 'v1.1.0',
    releaseDate: 'January 10, 2026',
    tag: 'Stable',
    highlights: 'Focus on network performance with BBRplus TCP congestion control and memory stability.',
    sections: [
      {
        category: 'Kernel improvements',
        items: [
          'Added BBR and BBRplus TCP congestion control algorithms',
          'Stripped obsolete legacy debug drivers for smaller binary footprint',
          'Updated QCACLD Wi-Fi driver stack'
        ]
      },
      {
        category: 'Scheduler changes',
        items: [
          'Schedutil governor rate-limit response adjustments',
          'Touch boost curve responsiveness fixes'
        ]
      },
      {
        category: 'Memory improvements',
        items: [
          'Background memory compaction tuning',
          'Adjusted default vm.swappiness presets'
        ]
      },
      {
        category: 'Thermal improvements',
        items: [
          'Per-core thermal zone sensor monitoring additions'
        ]
      },
      {
        category: 'VoidSU integration',
        items: [
          'Initial prototype kernel-level su privilege granting'
        ]
      }
    ]
  },
  {
    version: 'v1.0.0',
    releaseDate: 'December 01, 2025',
    tag: 'Stable',
    highlights: 'Initial public release of Void Kernel for miatoll / gram family.',
    sections: [
      {
        category: 'Kernel improvements',
        items: [
          'Initial Void Kernel tree clean rebase for Snapdragon 720G (miatoll/gram)',
          'ARM64 architecture compiler flag optimizations'
        ]
      },
      {
        category: 'Scheduler changes',
        items: [
          'Default CFS scheduler tuning for balance of battery & performance'
        ]
      },
      {
        category: 'Memory improvements',
        items: [
          'Basic ZRAM configuration'
        ]
      },
      {
        category: 'Thermal improvements',
        items: [
          'Stock thermal driver baseline configuration'
        ]
      },
      {
        category: 'VoidSU integration',
        items: [
          'Ecosystem foundation preparation'
        ]
      }
    ]
  }
];
