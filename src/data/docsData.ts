export interface DocSection {
  id: string;
  title: string;
  icon: string;
  summary: string;
  content: {
    heading: string;
    subtext?: string;
    steps?: string[];
    codeBlock?: string;
    notes?: string[];
  }[];
}

export const DOCS_DATA: DocSection[] = [
  {
    id: 'installation',
    title: 'Installation Guide',
    icon: 'Download',
    summary: 'How to flash Void Kernel safely using TWRP, OrangeFox, or KernelFlasher on your device.',
    content: [
      {
        heading: 'Prerequisites',
        steps: [
          'Unlocked bootloader on your target Android device',
          'Compatible custom recovery installed (OrangeFox or TWRP recommended)',
          'Backup your existing boot partition (`boot.img` or `dtbo.img`) before flashing',
          'Ensure your ROM is supported (AOSP / Custom ROMs matching target Android version)'
        ]
      },
      {
        heading: 'Method 1: Flashing via Custom Recovery (Recommended)',
        steps: [
          'Download the latest `VoidKernel-*.zip` release for your device from the Downloads page',
          'Reboot your device into Custom Recovery (Hold Power + Volume Up)',
          'Navigate to Install -> Select `VoidKernel-*.zip`',
          'Swipe to confirm flash',
          'Wipe Dalvik/Cache (Optional but recommended)',
          'Reboot system'
        ],
        codeBlock: '# Optional CLI check via ADB shell recovery\nfastboot boot recovery.img\nadb push VoidKernel-miatoll-v1.2.0-stable.zip /sdcard/\nadb shell twrp install /sdcard/VoidKernel-miatoll-v1.2.0-stable.zip'
      },
      {
        heading: 'Method 2: KernelFlasher (Direct Android App)',
        steps: [
          'Install KernelFlasher app (requires existing root or KernelSU)',
          'Select `VoidKernel-*.zip` or extracted `AK3` archive',
          'Flash to AK3 slot and reboot'
        ]
      }
    ]
  },
  {
    id: 'first-boot',
    title: 'First Boot Verification',
    icon: 'Terminal',
    summary: 'Confirming Void Kernel is active and verifying kernel patch status.',
    content: [
      {
        heading: 'Check Active Kernel String',
        subtext: 'Open a terminal app (Termux) or use ADB shell to inspect uname output:',
        codeBlock: '$ uname -r\n4.14.336-VoidKernel-v1.2.0-stable-miatoll+\n\n$ cat /proc/version\nLinux version 4.14.336-VoidKernel (heySaish@build-host) (clang version 18.0.0) #1 SMP PREEMPT'
      },
      {
        heading: 'Verifying In-Kernel Features',
        steps: [
          'Check MGLRU status: `cat /sys/kernel/mm/lru_gen/enabled` (Should return 0x0007)',
          'Check TCP congestion control: `sysctl net.ipv4.tcp_congestion_control` (Returns bbr or bbrplus)',
          'Check SUSFS mount status: `cat /proc/sys/fs/susfs/version` (Returns active SUSFS version)'
        ]
      }
    ]
  },
  {
    id: 'voidsu-setup',
    title: 'VoidSU Setup & Configuration',
    icon: 'Shield',
    summary: 'Installing and configuring VoidSU companion manager for stealth root access.',
    content: [
      {
        heading: 'Installing VoidSU Manager',
        steps: [
          'Download `VoidSU-Manager-v1.0.0.apk` from Downloads section',
          'Install APK on your Android device',
          'Open VoidSU app -> It will automatically detect Void Kernel hooks',
          'Grant superuser permissions to desired apps when prompted'
        ],
        notes: [
          'If flashing from a clean setup, install VoidSU Manager after booting into system with Void Kernel active.'
        ]
      },
      {
        heading: 'Configuring Stealth & SUSFS',
        steps: [
          'Open VoidSU app -> Navigate to Security tab',
          'Enable "SUSFS Auto Unmount"',
          'Select banking or payment apps in SUSFS DenyList/HideList',
          'Verify Play Integrity / SafetyNet status'
        ]
      }
    ]
  },
  {
    id: 'kernel-features',
    title: 'Kernel Features Tuning',
    icon: 'Sliders',
    summary: 'Manual sysctl and sysfs tweaking for power users.',
    content: [
      {
        heading: 'Tuning MGLRU & Swappiness',
        subtext: 'Adjust page reclaim aggressiveness for high RAM multi-tasking:',
        codeBlock: '# Set swappiness ratio (Recommended: 60-100 for zstd ZRAM)\nsysctl -w vm.swappiness=80\n\n# Adjust MGLRU min_ttl_ms\necho 1000 > /sys/kernel/mm/lru_gen/min_ttl_ms'
      },
      {
        heading: 'TCP Congestion Control Selector',
        codeBlock: '# Switch to BBRplus\nsysctl -w net.ipv4.tcp_congestion_control=bbrplus\n\n# Switch to cubic (Default fallback)\nsysctl -w net.ipv4.tcp_congestion_control=cubic'
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting & Diagnostics',
    icon: 'AlertTriangle',
    summary: 'Resolving common issues like bootloops, module conflicts, or missing features.',
    content: [
      {
        heading: 'Device Stuck on Boot Logo (Bootloop)',
        steps: [
          'Reboot into custom recovery',
          'Reflash stock ROM boot.img or restore boot partition backup',
          'Ensure your ROM vendor matches kernel prerequisites',
          'Check if incompatible Magisk modules are active (Boot in recovery -> disable modules)'
        ]
      },
      {
        heading: 'Extracting Kernel Logs (dmesg)',
        subtext: 'If experiencing sudden reboots or panic traps, gather pstore log:',
        codeBlock: '# ADB shell or Termux log extraction\nsu -c "dmesg > /sdcard/dmesg_void.log"\nsu -c "cat /sys/fs/pstore/console-ramoops-0 > /sdcard/last_kmsg.log"'
      }
    ]
  },
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    icon: 'HelpCircle',
    summary: 'Quick answers regarding compatibility, battery life, and SafetyNet.',
    content: [
      {
        heading: 'Does Void Kernel pass Play Integrity / SafetyNet?',
        subtext: 'Yes! When paired with VoidSU and SUSFS unmount enabled, modified mount points are hidden from detection, allowing Play Integrity (Basic & Device) pass on supported ROM setups.'
      },
      {
        heading: 'Can I use Void Kernel on stock MIUI / HyperOS?',
        subtext: 'Void Kernel is primarily optimized for AOSP and custom ROMs (LineageOS, Pixel Experience, Evolution X). Stock MIUI compatibility depends on vendor blob matching. Always check release notes.'
      },
      {
        heading: 'Is VoidSU compatible with Magisk modules?',
        subtext: 'VoidSU provides a compatibility bridge for standard overlay modules while executing root calls directly in kernel space.'
      }
    ]
  }
];
