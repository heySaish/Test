import React, { useState } from 'react';
import { DOCS_DATA, DocSection } from '../data/docsData';
import { CopyButton } from '../components/CopyButton';
import { BookOpen, Download, Terminal, Shield, Sliders, AlertTriangle, HelpCircle, CheckCircle2, ChevronRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Download,
  Terminal,
  Shield,
  Sliders,
  AlertTriangle,
  HelpCircle
};

export const DocumentationSection: React.FC = () => {
  const [activeDocId, setActiveDocId] = useState<string>('installation');

  const activeDoc: DocSection = DOCS_DATA.find(d => d.id === activeDocId) || DOCS_DATA[0];
  const IconComponent = iconMap[activeDoc.icon] || BookOpen;

  return (
    <section id="docs" className="py-24 relative bg-[#040407] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Technical Handbook</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Kernel Documentation & Guides
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
            Comprehensive installation procedures, first boot verification commands, VoidSU setup, and manual tuning references.
          </p>
        </div>

        {/* Documentation Layout: Left Navigation + Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-wider block mb-2 px-2">
              Documentation Index
            </span>
            {DOCS_DATA.map((doc) => {
              const NavIcon = iconMap[doc.icon] || BookOpen;
              const isActive = doc.id === activeDocId;
              return (
                <button
                  key={doc.id}
                  onClick={() => setActiveDocId(doc.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl font-mono text-xs text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 font-bold shadow-md'
                      : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800/80 hover:text-zinc-200 hover:bg-zinc-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <NavIcon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-zinc-500'}`} />
                    <span>{doc.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-emerald-400 translate-x-1' : 'text-zinc-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Main Content Viewer */}
          <div className="lg:col-span-8 terminal-card rounded-2xl p-6 lg:p-8 border border-zinc-800 space-y-8">
            
            {/* Active Doc Title Header */}
            <div className="pb-6 border-b border-zinc-800/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-sans text-white">
                  {activeDoc.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  {activeDoc.summary}
                </p>
              </div>
            </div>

            {/* Doc Sections Content */}
            <div className="space-y-8">
              {activeDoc.content.map((block, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-base font-bold font-sans text-zinc-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {block.heading}
                  </h4>

                  {block.subtext && (
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {block.subtext}
                    </p>
                  )}

                  {/* Steps List */}
                  {block.steps && (
                    <ul className="space-y-2 pt-1">
                      {block.steps.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Code Snippet Box */}
                  {block.codeBlock && (
                    <div className="relative pt-2">
                      <div className="p-4 rounded-xl bg-[#050508] border border-zinc-800 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed">
                        <pre><code>{block.codeBlock}</code></pre>
                      </div>
                      <div className="absolute top-4 right-2">
                        <CopyButton textToCopy={block.codeBlock} />
                      </div>
                    </div>
                  )}

                  {/* Notes / Callout */}
                  {block.notes && (
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
                      {block.notes.map((note, nIdx) => (
                        <p key={nIdx}>💡 Note: {note}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
