import React from 'react';
import { 
  LayoutDashboard, 
  Code2, 
  Layers, 
  Cpu, 
  BookMarked, 
  Calculator, 
  Briefcase,
  X,
  BookOpen
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, counts, isOpen, setIsOpen }) {
  // Sidebar.js ke andar navSections ko aise update karein:
const navSections = [
  {
    heading: "Overview",
    items: [
      { id: "dashboard", label: "Dashboard", icon: LayoutDashboard }
    ]
  },
  {
    heading: "Preparation Tracks",
    items: [
      { id: "dsa", label: "DSA Engine", icon: Code2, count: counts.dsa },
      { id: "dev", label: "Dev & Backend", icon: Layers, count: counts.dev },
      { id: "systemDesign", label: "System Design", icon: Cpu, count: counts.systemDesign },
      { id: "coreCs", label: "Core CS Subjects", icon: BookMarked, count: counts.coreCs },
      { id: "aptitude", label: "Aptitude & Reasoning", icon: Calculator, count: counts.aptitude },
      { id: "planner", label: "Day-wise Planner", icon: Calculator, count: counts.aptitude }

    ]
  },
  {
    heading: "In-App Study Desk",
    items: [
      { id: "pdfViewer", label: "PDF & Notes Desk", icon: BookOpen } // <-- Naya Tab
    ]
  },
  {
    heading: "Placement Radar",
    items: [
      { id: "opportunities", label: "Off-Campus Drives", icon: Briefcase, count: counts.opportunities }
    ]
  }
];

  const handleTabClick = (id) => {
    setActiveTab(id);
    if (setIsOpen) setIsOpen(false); // Mobile pe click hote hi drawer close
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Sidebar Panel */}
      <aside className={`
        fixed md:static top-0 left-0 z-50
        w-64 h-full bg-[#0E1522] border-r border-[#1E293B]
        flex flex-col justify-between p-4 flex-shrink-0 select-none
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        
        {/* Top Header & Links */}
        <div className="flex flex-col min-h-0 flex-1">
          {/* Brand Logo & Close Button (Mobile) */}
          <div className="flex items-center justify-between px-2 pb-5 flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-blue-500/20">
                DT
              </div>
              <div>
                <h1 className="font-bold text-sm tracking-wide text-white">DevTrack OS</h1>
                <p className="text-[10px] text-slate-400 font-mono">Off-Campus Suite</p>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 md:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Navigation List */}
          <nav className="space-y-4 overflow-y-auto pr-1 flex-1">
            {navSections.map((section, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider px-2 mb-1.5">
                  {section.heading}
                </p>
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleTabClick(item.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition ${
                        isActive
                          ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 font-semibold'
                          : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                      {item.count !== undefined && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400">
                          {item.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom Profile Footer */}
        <div className="p-3 rounded-xl bg-[#131B2A] border border-[#1E293B] mt-4 flex-shrink-0">
          <p className="text-xs font-semibold text-slate-200">Sumit Jaiswal</p>
          <p className="text-[10px] text-slate-400">Candidate Target: 2027 Placement</p>
        </div>

      </aside>
    </>
  );
}