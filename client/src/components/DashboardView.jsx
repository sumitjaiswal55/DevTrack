import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Code2, 
  Flame, 
  Briefcase, 
  Layers, 
  Cpu, 
  BookMarked, 
  Calculator,
  ArrowRight,
  Calendar,
  ArrowUpRight
} from 'lucide-react';

export default function DashboardView({ tracks, setActiveTab, dayPlans = [], onToggleTask }) {
  // Aggregate stats calculate karein
  const allItems = Object.values(tracks).flat();
  const completedCount = allItems.filter(i => i.status === 'completed').length;
  const totalCount = allItems.length || 1;
  const todoLeft = totalCount - completedCount;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const dsaSolved = tracks.dsa ? tracks.dsa.filter(i => i.status === 'completed').length : 0;
  const dsaTotal = tracks.dsa ? tracks.dsa.length : 0;

  // Active sprint calculation
  const activeSprint = dayPlans.find(d => d.tasks?.some(t => !t.completed)) || dayPlans[0] || { day: 1, title: 'Sprint In Progress', tasks: [] };
  const sprintCompleted = activeSprint.tasks?.filter(t => t.completed).length || 0;
  const sprintTotal = activeSprint.tasks?.length || 1;

  const trackCards = [
    { id: 'dsa', name: 'DSA Engine', icon: Code2, data: tracks.dsa || [], barColor: 'bg-blue-500', unit: 'problems solved' },
    { id: 'dev', name: 'Dev & Backend', icon: Layers, data: tracks.dev || [], barColor: 'bg-emerald-500', unit: 'modules done' },
    { id: 'systemDesign', name: 'System Design / LLD', icon: Cpu, data: tracks.systemDesign || [], barColor: 'bg-indigo-500', unit: 'designs complete' },
    { id: 'coreCs', name: 'Core CS Subjects', icon: BookMarked, data: tracks.coreCs || [], barColor: 'bg-cyan-500', unit: 'chapters covered' },
    { id: 'aptitude', name: 'Aptitude & Reasoning', icon: Calculator, data: tracks.aptitude || [], barColor: 'bg-amber-500', unit: 'topics mastered' },
  ];

  return (
    <div className="space-y-6">
      
      {/* 1. TOP HERO: TARGET READINESS ENGINE */}
      <div className="p-8 rounded-3xl bg-[#0E1522] border border-[#1E293B] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 shadow-xl relative overflow-hidden">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            Placement Radar • Batch 2026
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Target Readiness Engine</h1>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Aapne total <span className="text-emerald-400 font-bold">{completedCount} modules</span> complete kar liye hain. Off-campus screening clear karne ke liye bache hue <span className="text-amber-400 font-bold">{todoLeft} critical topics</span> finish karein.
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold">
              <Flame className="w-4 h-4 fill-amber-400 text-amber-400" /> 14 Days Continuous Streak
            </span>
          </div>
        </div>

        {/* Circular Progress Gauge */}
        <div className="p-6 rounded-2xl bg-[#131B2A] border border-[#1E293B] flex flex-col items-center justify-center min-w-[210px] self-center">
          <div className="relative flex items-center justify-center">
            {/* Outer Circular Ring Effect */}
            <div className="w-28 h-28 rounded-full border-4 border-slate-800 flex items-center justify-center relative">
              <div 
                className="absolute inset-0 rounded-full border-4 border-blue-500 transition-all duration-700"
                style={{ clipPath: `polygon(0 0, 100% 0, 100% ${progressPercent}%, 0 ${progressPercent}%)` }}
              />
              <div className="text-center z-10">
                <span className="text-2xl font-black text-white font-mono">{progressPercent}%</span>
                <p className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold">Syllabus Done</p>
              </div>
            </div>
          </div>
          <span className="text-xs text-slate-400 font-mono mt-3">{completedCount} of {totalCount} completed</span>
        </div>
      </div>

      {/* 2. STATS 4-CARD METRIC STRIP */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Completed */}
        <div className="p-4 rounded-2xl bg-[#0E1522] border border-[#1E293B] flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400 font-medium">Completed</p>
            <p className="text-2xl font-black text-emerald-400 font-mono mt-1">{completedCount}</p>
          </div>
          <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        {/* To-Do Left */}
        <div className="p-4 rounded-2xl bg-[#0E1522] border border-[#1E293B] flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400 font-medium">To-Do Left</p>
            <p className="text-2xl font-black text-amber-400 font-mono mt-1">{todoLeft}</p>
          </div>
          <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        {/* DSA Solved */}
        <div className="p-4 rounded-2xl bg-[#0E1522] border border-[#1E293B] flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400 font-medium">DSA Solved</p>
            <p className="text-2xl font-black text-blue-400 font-mono mt-1">{dsaSolved}/{dsaTotal}</p>
          </div>
          <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <Code2 className="w-5 h-5" />
          </div>
        </div>

        {/* Target Drives */}
        <div className="p-4 rounded-2xl bg-[#0E1522] border border-[#1E293B] flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400 font-medium">Target Drives</p>
            <p className="text-xl font-black text-purple-400 font-mono mt-1">12 Active</p>
          </div>
          <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <Briefcase className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* 3. NEW ELEMENT: DAY-WISE BATTLE PLAN WIDGET */}
      <div className="p-6 rounded-2xl bg-[#0E1522] border border-[#1E293B] space-y-4 shadow-lg">
        <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                Today's Battle Plan: Day {activeSprint.day}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-normal">
                  {sprintCompleted} of {sprintTotal} Done
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">{activeSprint.title}</p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('planner')}
            className="text-xs text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 transition"
          >
            Full Sprint <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {activeSprint.tasks?.map((task) => (
            <div
              key={task._id || task.id}
              onClick={() => onToggleTask(activeSprint.day, task._id || task.id)}
              className={`p-3.5 rounded-xl border transition cursor-pointer flex items-center justify-between gap-3 ${
                task.completed
                  ? 'bg-[#131B2A]/60 border-slate-800 text-slate-400 line-through'
                  : 'bg-[#131B2A] border-[#1E293B] hover:border-slate-600 text-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <button className="text-slate-400 flex-shrink-0">
                  {task.completed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Circle className="w-4 h-4 text-slate-600" />
                  )}
                </button>
                <span className="text-xs font-medium truncate">{task.title}</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#0B0F17] text-slate-400 border border-slate-800 flex-shrink-0">
                {task.track}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. PREPARATION TRACKS BREAKDOWN (ORIGINAL CARD STYLE) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Preparation Tracks Breakdown</h3>
          <span className="text-[11px] text-slate-500 font-mono">Click any box to inspect</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trackCards.map((card) => {
            const Icon = card.icon;
            const done = card.data.filter(i => i.status === 'completed').length;
            const total = card.data.length || 1;
            const pending = card.data.length - done;
            const pct = Math.round((done / total) * 100);

            return (
              <div
                key={card.id}
                onClick={() => setActiveTab(card.id)}
                className="p-5 rounded-2xl bg-[#0E1522] border border-[#1E293B] hover:border-slate-700 transition cursor-pointer flex flex-col justify-between space-y-4 group shadow-md"
              >
                {/* Header Icon + % */}
                <div className="flex items-center justify-between">
                  <div className="h-8 w-8 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-400">{pct}%</span>
                </div>

                {/* Title & Count */}
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition">{card.name}</h4>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">{done} of {card.data.length} {card.unit}</p>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-[#0B0F17] rounded-full h-1.5 overflow-hidden border border-[#1E293B]">
                  <div 
                    className={`h-full rounded-full ${card.barColor} transition-all duration-500`}
                    style={{ width: `${pct}%` }}
                  />
                </div>

                {/* Footer Status */}
                <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-[#1E293B]/60 font-mono">
                  <span>{pending} pending</span>
                  <span className="text-blue-400 group-hover:translate-x-0.5 transition flex items-center gap-1 font-semibold">
                    Open <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}