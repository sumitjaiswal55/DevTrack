import React, { useState } from 'react';
import { CheckCircle2, Circle, Plus, Filter } from 'lucide-react';

export default function SyllabusView({ syllabus, onToggleTopic, onAddTopic }) {
  const [filter, setFilter] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newModule, setNewModule] = useState('Data Structures & Algorithms');
  const [newCategory, setNewCategory] = useState('DSA');
  const [newNotes, setNewNotes] = useState('');

  const filteredTopics = syllabus.filter(t => filter === 'All' || t.category === filter);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    onAddTopic({
      title: newTitle,
      module: newModule,
      category: newCategory,
      notes: newNotes,
      status: 'pending',
      difficulty: 'Medium'
    });
    setNewTitle('');
    setNewNotes('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Syllabus & Execution Tree</h2>
          <p className="text-xs text-slate-400 mt-1">Check off modules as you master them to sync readiness stats.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-[#131B2A] border border-[#1E293B] p-1 rounded-lg">
            {['All', 'DSA', 'Backend', 'System Design'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 text-xs rounded-md font-medium transition ${
                  filter === cat ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-sm transition"
          >
            <Plus className="w-4 h-4" /> Add Topic
          </button>
        </div>
      </div>

      {showAddModal && (
        <form onSubmit={handleSubmit} className="p-4 rounded-xl bg-[#131B2A] border border-[#1E293B] space-y-3">
          <h3 className="text-sm font-semibold text-white">Add New Study Module</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              type="text"
              placeholder="Topic Title (e.g. Graph Dijkstra Algorithm)"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="bg-[#0B0F17] border border-[#1E293B] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
              required
            />
            <select
              value={newCategory}
              onChange={(e) => {
                setNewCategory(e.target.value);
                setNewModule(e.target.value === 'DSA' ? 'Data Structures & Algorithms' : e.target.value === 'Backend' ? 'Backend Engineering & DBs' : 'System Design & LLD');
              }}
              className="bg-[#0B0F17] border border-[#1E293B] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
            >
              <option value="DSA">DSA</option>
              <option value="Backend">Backend</option>
              <option value="System Design">System Design</option>
            </select>
            <input
              type="text"
              placeholder="Brief revision notes or pattern"
              value={newNotes}
              onChange={(e) => setNewNotes(e.target.value)}
              className="bg-[#0B0F17] border border-[#1E293B] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="px-3 py-1 text-xs text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 text-xs bg-blue-600 hover:bg-blue-500 font-semibold rounded-lg text-white"
            >
              Save Module
            </button>
          </div>
        </form>
      )}

      <div className="space-y-2.5">
        {filteredTopics.map((topic) => {
          const isDone = topic.status === 'completed';
          return (
            <div
              key={topic.id}
              onClick={() => onToggleTopic(topic.id)}
              className={`p-4 rounded-xl border transition cursor-pointer flex items-start justify-between gap-4 ${
                isDone
                  ? 'bg-[#0E1522]/60 border-slate-800/80 opacity-80'
                  : 'bg-[#131B2A] border-[#1E293B] hover:border-slate-700'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <button className="mt-0.5 text-slate-400 hover:text-white">
                  {isDone ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-600" />
                  )}
                </button>
                <div>
                  <h4 className={`text-sm font-medium ${isDone ? 'line-through text-slate-400' : 'text-slate-100'}`}>
                    {topic.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[11px] text-slate-400">{topic.module}</span>
                    <span className="text-[10px] text-slate-600">•</span>
                    <span className="text-[11px] text-blue-400 font-mono">{topic.category}</span>
                  </div>
                  {topic.notes && (
                    <p className="text-xs text-slate-400 mt-2 bg-[#0B0F17]/60 p-2 rounded border border-slate-800/50">
                      💡 {topic.notes}
                    </p>
                  )}
                </div>
              </div>
              <span
                className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded tracking-wider ${
                  isDone ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                }`}
              >
                {topic.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}