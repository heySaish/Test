import React from 'react';
import { CHANGELOG_DATA } from '../data/changelogData';
import { Badge } from '../components/Badge';
import { Terminal, GitCommit, Check } from 'lucide-react';

export const ChangelogSection: React.FC = () => {
  return (
    <section id="changelog" className="py-24 relative bg-[#060609] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Git History Timeline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Release Changelog
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
            Chronological commit milestone logs detailing kernel upstream merges, scheduler tuning, memory optimizations, and VoidSU ecosystem updates.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:left-6 sm:before:left-8 before:w-0.5 before:bg-zinc-800">
          {CHANGELOG_DATA.map((release, rIdx) => (
            <div key={rIdx} className="relative pl-12 sm:pl-16 space-y-4">
              
              {/* Timeline Node Point */}
              <div className="absolute left-4 sm:left-6 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-[#060609] border-2 border-emerald-400 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>

              {/* Version & Date Card */}
              <div className="terminal-card rounded-2xl p-6 border border-zinc-800 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-900">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold font-mono text-white">
                      {release.version}
                    </span>
                    <Badge variant={release.tag === 'Latest' ? 'emerald' : 'zinc'}>
                      {release.tag}
                    </Badge>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    {release.releaseDate}
                  </span>
                </div>

                <p className="text-xs font-mono text-emerald-400/90 leading-relaxed bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
                  ⚡ {release.highlights}
                </p>

                {/* Categories tree */}
                <div className="space-y-4 pt-2">
                  {release.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <h4 className="text-xs font-mono font-bold text-zinc-300 flex items-center gap-2 uppercase tracking-wider">
                        <GitCommit className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{sec.category}</span>
                      </h4>
                      <ul className="space-y-1.5 pl-5 border-l border-zinc-800/80 font-mono text-xs text-zinc-400">
                        {sec.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
