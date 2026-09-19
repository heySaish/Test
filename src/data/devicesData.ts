export interface SupportedDevice {
  id: string;
  name: string;
  codename: string;
  soc: string;
  arch: string;
  androidVersion: string;
  kernelVersion: string;
  status: 'Official' | 'Testing' | 'Planned';
  maintainer: string;
  downloadUrl: string;
  gitBranch: string;
  featuresHighlight: string[];
}

export const SUPPORTED_DEVICES: SupportedDevice[] = [
  {
    id: 'miatoll',
    name: 'POCO M2 Pro / Redmi Note 9 Pro Family',
    codename: 'gram / miatoll',
    soc: 'Qualcomm Snapdragon 720G (SM7125)',
    arch: 'ARM64 (arm64-v8a)',
    androidVersion: 'Android 11 - 15 (AOSP / Custom ROMs)',
    kernelVersion: 'Linux 4.14.336+ (Void-Enhanced)',
    status: 'Official',
    maintainer: 'heySaish',
    downloadUrl: '#downloads',
    gitBranch: 'miatoll-rebase',
    featuresHighlight: [
      'SUSFS 1.5+ Native Unmount',
      'MGLRU Backport from Mainline',
      'VoidSU Integrated Hooks',
      'BBRplus TCP Congestion Control',
      'Adreno 618 GPU Governor Tweaks'
    ]
  }
];

// Placeholder pattern structure for community device submissions
export const DEVICE_SUBMISSION_GUIDE = {
  title: "Add Your Device to Void Kernel",
  description: "Void Kernel is built with modularity in mind. Maintainers and device porters can apply Void patches and VoidSU hooks to bring the Void Kernel experience to new Android hardware.",
  steps: [
    "Fork the Void Kernel base repository on GitHub",
    "Apply Void core patchset (SUSFS, MGLRU, VoidSU hooks)",
    "Configure device defconfig and verify boot status",
    "Submit a Pull Request or contact heySaish on GitHub"
  ]
};
