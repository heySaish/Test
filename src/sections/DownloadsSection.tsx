import React, { useState } from 'react';
import { DOWNLOADS_DATA, SOURCE_CODE_REPOS, DownloadItem } from '../data/downloadsData';
import { Badge } from '../components/Badge';
import { CopyButton } from '../components/CopyButton';
import { Download, ExternalLink, Github, Terminal, Shield, Code, CheckCircle, FileText, ChevronRight } from 'lucide-react';

interface DownloadsSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const DownloadsSection: React.FC<DownloadsSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'kernel' | 'voidsu' | 'source' | 'changelog'>('kernel');

  const filteredDownloads = DOWNLOADS_DATA.filter(item => item.category === activeTab);

  return (
    <section id="downloads" className="py-24 relative bg-[#060609] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Artifacts & Binaries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Downloads & Source Distribution
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
            Official compiled releases for Void Kernel and VoidSU ecosystem binaries. Verified checksum hashes available for each release.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('kernel')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs transition-all duration-200 cursor-pointer ${
              activeTab === 'kernel'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold shadow-sm'
                : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:text-zinc-200'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Void Kernel</span>
          </button>

          <button
            onClick={() => setActiveTab('voidsu')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs transition-all duration-200 cursor-pointer ${
              activeTab === 'voidsu'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold shadow-sm'
                : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:text-zinc-200'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>VoidSU Binaries</span>
          </button>

          <button
            onClick={() => setActiveTab('source')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs transition-all duration-200 cursor-pointer ${
              activeTab === 'source'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold shadow-sm'
                : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:text-zinc-200'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>Source Code</span>
          </button>

          <button
            onClick={() => onNavigate('changelog')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:text-zinc-200 transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Full Changelog</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
          </button>
        </div>

        {/* Tab Content: Downloads List */}
        {(activeTab === 'kernel' || activeTab === 'voidsu') && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDownloads.map((item: DownloadItem) => (
              <div
                key={item.id}
                className="terminal-card rounded-2xl p-6 border border-zinc-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Badge variant={item.category === 'kernel' ? 'emerald' : 'cyan'}>
                        {item.version}
                      </Badge>
                      {item.isLatest && (
                        <Badge variant="purple">LATEST RELEASE</Badge>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">
                      Released: {item.releaseDate}
                    </span>
                  </div>

                  {/* Title & Specs */}
                  <h3 className="text-lg font-bold font-sans text-white mb-2">
                    {item.title}
                  </h3>
                  
                  <div className="space-y-1.5 mb-4 text-xs font-mono text-zinc-400">
                    <div>Target Device: <span className="text-zinc-200 font-semibold">{item.device}</span></div>
                    <div>Android Version: <span className="text-emerald-400">{item.androidVersion}</span></div>
                    <div>File Size: <span className="text-zinc-300">{item.size}</span></div>
                  </div>

                  {/* Changelog highlights */}
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5 mb-4">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase font-semibold block">
                      Release Highlights
                    </span>
                    <ul className="space-y-1 text-xs font-mono text-zinc-300">
                      {item.changelogSummary.map((summary, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{summary}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SHA256 Checksum preview */}
                  <div className="p-2.5 rounded-lg bg-[#050508] border border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500 overflow-hidden">
                    <span className="truncate mr-2">SHA-256: {item.sha256}</span>
                    <CopyButton textToCopy={item.sha256} label="SHA" />
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between gap-3">
                  <a
                    href={item.githubReleaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Release</span>
                  </a>

                  <a
                    href={item.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20 active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download ({item.filename.endsWith('.apk') ? 'APK' : 'ZIP'})</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Source Code Repositories */}
        {activeTab === 'source' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOURCE_CODE_REPOS.map((repo, idx) => (
              <div
                key={idx}
                className="terminal-card rounded-2xl p-6 border border-zinc-800 space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                      <Code className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-sans text-white">{repo.name}</h3>
                      <span className="text-xs font-mono text-purple-400">Branch: {repo.branch}</span>
                    </div>
                  </div>
                  <Badge variant="purple">{repo.license}</Badge>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {repo.description}
                </p>

                {/* Git Clone Box */}
                <div className="p-3 rounded-xl bg-[#050508] border border-zinc-900 flex items-center justify-between font-mono text-xs text-zinc-300">
                  <code className="truncate mr-2">{repo.cloneUrl}</code>
                  <CopyButton textToCopy={repo.cloneUrl} label="Clone" />
                </div>

                <div className="pt-3 border-t border-zinc-900 flex justify-end">
                  <a
                    href={repo.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-purple-500/40 transition-all"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
