import React, { useState } from 'react';
import { Calendar, CheckCircle2, Circle, Clock, Flame, ChevronRight } from 'lucide-react';

export default function PlannerView({ daysPlan, onToggleTask }) {
  const [selectedDay, setSelectedDay] = useState(1);

  const activeDayData = daysPlan.find(d => d.day === selectedDay) || daysPlan[0];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-bold text-white">Placement Sprint: Day-Wise Execution</h2>
          <p className="text-xs text-slate-400 mt-1">Har din exact target complete karein bina kisi distraction ke.</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-600/10 border border-blue-500/20 rounded-xl text-blue-400 text-xs font-semibold">
          <Calendar className="w-4 h-4" /> Day {selectedDay} of {daysPlan.length} Active
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Left: Days Timeline Selector */}
        <div className="space-y-2 lg:col-span-1">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-1">Sprint Roadmap</p>
          <div className="space-y-2 max-h-[68vh] overflow-y-auto pr-1">
            {daysPlan.map((d) => {
              const completedCount = d.tasks.filter(t => t.completed).length;
              const isAllDone = completedCount === d.tasks.length;
              const isSelected = selectedDay === d.day;

              return (
                <div
                  key={d.day}
                  onClick={() => setSelectedDay(d.day)}
                  className={`p-3 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                    isSelected
                      ? 'bg-blue-600/10 border-blue-500/30 text-white font-semibold'
                      : 'bg-[#131B2A] border-[#1E293B] hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div>
                    <span className="text-xs">Day {d.day}</span>
                    <p className="text-[10px] text-slate-500 line-clamp-1">{d.title}</p>
                  </div>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isAllDone ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {completedCount}/{d.tasks.length}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Active Day Task Checklist */}
        <div className="lg:col-span-3 p-6 rounded-2xl bg-[#131B2A] border border-[#1E293B] space-y-5">
          <div className="border-b border-[#1E293B] pb-4 flex justify-between items-start">
            <div>
              <span className="text-[10px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded font-bold">
                Day {activeDayData.day} Focus
              </span>
              <h3 className="text-lg font-bold text-white mt-1.5">{activeDayData.title}</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              {activeDayData.tasks.filter(t => t.completed).length} of {activeDayData.tasks.length} Done
            </span>
          </div>

          <div className="space-y-3">
            {activeDayData.tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => onToggleTask(activeDayData.day, task.id)}
                className={`p-4 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                  task.completed
                    ? 'bg-[#0E1522]/70 border-slate-800/80 opacity-70'
                    : 'bg-[#0B0F17] border-[#1E293B] hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <button className="text-slate-400">
                    {task.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-600" />
                    )}
                  </button>
                  <div>
                    <p className={`text-sm font-medium ${task.completed ? 'line-through text-slate-400' : 'text-slate-100'}`}>
                      {task.title}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#131B2A] text-blue-400 border border-slate-800">
                  {task.track}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}