export interface DownloadItem {
  id: string;
  category: 'kernel' | 'voidsu' | 'source';
  title: string;
  version: string;
  releaseDate: string;
  device: string;
  androidVersion: string;
  filename: string;
  size: string;
  sha256: string;
  downloadUrl: string;
  githubReleaseUrl: string;
  changelogSummary: string[];
  isLatest?: boolean;
}

export const DOWNLOADS_DATA: DownloadItem[] = [
  {
    id: 'vk-miatoll-v1.2',
    category: 'kernel',
    title: 'Void Kernel for gram / miatoll',
    version: 'v1.2.0-STABLE',
    releaseDate: '2026-02-15',
    device: 'POCO M2 Pro / Redmi Note 9 Pro (gram/miatoll)',
    androidVersion: 'Android 13.0 / 14.0 / 15.0',
    filename: 'VoidKernel-miatoll-v1.2.0-stable.zip',
    size: '18.4 MB',
    sha256: '9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e',
    downloadUrl: 'https://github.com/heySaish/Void_Kernel/releases',
    githubReleaseUrl: 'https://github.com/heySaish/Void_Kernel/releases/tag/v1.2.0',
    changelogSummary: [
      'Upgraded SUSFS to v1.5.5',
      'Backported MGLRU memory patches',
      'Integrated VoidSU native syscall hooks',
      'Tuned Schedutil uclamp response'
    ],
    isLatest: true
  },
  {
    id: 'vk-miatoll-v1.1',
    category: 'kernel',
    title: 'Void Kernel for gram / miatoll',
    version: 'v1.1.0-STABLE',
    releaseDate: '2026-01-10',
    device: 'POCO M2 Pro / Redmi Note 9 Pro (gram/miatoll)',
    androidVersion: 'Android 12.0 / 13.0 / 14.0',
    filename: 'VoidKernel-miatoll-v1.1.0-stable.zip',
    size: '18.1 MB',
    sha256: '8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f',
    downloadUrl: 'https://github.com/heySaish/Void_Kernel/releases',
    githubReleaseUrl: 'https://github.com/heySaish/Void_Kernel/releases/tag/v1.1.0',
    changelogSummary: [
      'Initial public release for miatoll',
      'BBR / BBRplus TCP congestion control enabled',
      'SLUB allocator memory optimization',
      'Wireless driver stability patches'
    ]
  },
  {
    id: 'voidsu-apk-v1.0',
    category: 'voidsu',
    title: 'VoidSU Companion Manager App',
    version: 'v1.0.0-BETA',
    releaseDate: '2026-02-18',
    device: 'All Void Kernel Supported Devices',
    androidVersion: 'Android 11.0+',
    filename: 'VoidSU-Manager-v1.0.0.apk',
    size: '4.2 MB',
    sha256: '7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a',
    downloadUrl: 'https://github.com/heySaish/VoidSU/releases',
    githubReleaseUrl: 'https://github.com/heySaish/VoidSU/releases/tag/v1.0.0-beta',
    changelogSummary: [
      'Native root elevation prompt',
      'SUSFS unmount status indicator',
      'Sysctl tuning tab for BBR & MGLRU',
      'Kernel dmesg log viewer'
    ],
    isLatest: true
  },
  {
    id: 'voidsu-flashable-v1.0',
    category: 'voidsu',
    title: 'VoidSU Recovery Module Zip',
    version: 'v1.0.0-BETA',
    releaseDate: '2026-02-18',
    device: 'TWRP / OrangeFox / Custom Recovery',
    androidVersion: 'Android 11.0+',
    filename: 'VoidSU-Module-v1.0.0.zip',
    size: '1.8 MB',
    sha256: '6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f',
    downloadUrl: 'https://github.com/heySaish/VoidSU/releases',
    githubReleaseUrl: 'https://github.com/heySaish/VoidSU/releases/tag/v1.0.0-beta',
    changelogSummary: [
      'Recovery installer script for automatic setup',
      'Injected VoidSU init hooks',
      'Magisk module compatibility wrapper'
    ]
  }
];

export const SOURCE_CODE_REPOS = [
  {
    name: 'Void Kernel Main Repository',
    repoUrl: 'https://github.com/heySaish/Void_Kernel',
    cloneUrl: 'git clone https://github.com/heySaish/Void_Kernel.git',
    branch: 'miatoll-rebase',
    description: 'Source tree for Void Kernel containing all driver backports, MGLRU, SUSFS, and EAS scheduler patches.',
    license: 'GPL-2.0'
  },
  {
    name: 'VoidSU Companion Manager',
    repoUrl: 'https://github.com/heySaish/VoidSU',
    cloneUrl: 'git clone https://github.com/heySaish/VoidSU.git',
    branch: 'main',
    description: 'Userland companion application and kernel IPC bridge written for Android.',
    license: 'GPL-3.0'
  }
];
