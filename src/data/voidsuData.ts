export interface VoidSuCapability {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  features: string[];
}

export const VOIDSU_INFO = {
  name: "VoidSU",
  tagline: "Root management built for the Void ecosystem.",
  description: "VoidSU is the native companion manager designed specifically to interface with Void Kernel. Unlike generic root managers, VoidSU talks directly to in-kernel hooks, providing zero-footprint privilege management, live kernel tuning, and deep hardware monitoring.",
  version: "v1.0.0-beta",
  license: "GPL-3.0",
  githubUrl: "https://github.com/heySaish/VoidSU",
  capabilities: [
    {
      title: "Root Access Management",
      subtitle: "Kernel-level UID granting",
      icon: "ShieldAlert",
      description: "Approve or deny superuser requests directly in the kernel ring without executing su binaries in userland.",
      features: [
        "Stealth per-app permission database",
        "Zero modifications to /system or /vendor",
        "Instant UID permission validation",
        "Auto-grant & timeout rules"
      ]
    },
    {
      title: "Superuser Request Management",
      subtitle: "Secure interactive prompt UI",
      icon: "Fingerprint",
      description: "Clean, responsive prompt interface for app su requests with fingerprint verification support and real-time security warnings.",
      features: [
        "Biometric authentication prompt",
        "Real-time request origin caller verification",
        "Granular temporary privilege elevation",
        "Detailed su access log history"
      ]
    },
    {
      title: "Kernel Feature Integration",
      subtitle: "Direct sysfs & procfs interface",
      icon: "Cpu",
      description: "Control Void Kernel custom modules such as SUSFS, MGLRU parameters, and BBR congestion modes directly from the app interface.",
      features: [
        "One-tap SUSFS mount hiding toggle",
        "Live MGLRU generation tuner",
        "TCP congestion control switcher",
        "Custom kernel module loader"
      ]
    },
    {
      title: "Kernel Information & Status",
      subtitle: "Deep system internals inspection",
      icon: "Terminal",
      description: "Inspect active kernel version, compiler tooling (LLVM/Clang), build flags, patch levels, and memory subsystem statistics.",
      features: [
        "Detailed /proc/version parser",
        "Active kernel patch level inspector",
        "Loaded kernel module viewer",
        "System uptime & CPU load statistics"
      ]
    },
    {
      title: "Boot & Debug Information",
      subtitle: "Real-time kernel log streaming",
      icon: "FileCode",
      description: "Access dmesg, kmsg, and pstore crash logs with syntax highlighting and instant export for troubleshooting boot issues.",
      features: [
        "Live dmesg kernel log filter",
        "Pstore last_kmsg panic recovery logs",
        "Boot argument inspector (/proc/cmdline)",
        "SELinux denial log parser (audit.log)"
      ]
    },
    {
      title: "Performance & Power Controls",
      subtitle: "On-the-fly hardware governor tuning",
      icon: "Gauge",
      description: "Switch CPU governor profiles, adjust GPU frequency limits, and modify thermal throttles to match current usage workloads.",
      features: [
        "CPU cluster frequency scaling curves",
        "Thermal throttling policy selector",
        "Custom battery saver kernel profiles",
        "Touch boost response control"
      ]
    },
    {
      title: "Void-Specific Kernel Integration",
      subtitle: "Ecosystem-exclusive optimizations",
      icon: "Zap",
      description: "Leverages Void Kernel's specialized syscalls to lock essential root processes in memory, eliminating background manager kills.",
      features: [
        "OOM-killer protection lock via kernel hook",
        "Ultra-fast IPC socket channel",
        "Low memory pressure pin",
        "Hardware-backed state storage"
      ]
    }
  ]
};
