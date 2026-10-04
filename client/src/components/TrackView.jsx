import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Plus, 
  Eye, 
  X, 
  FileText, 
  ExternalLink, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Save 
} from 'lucide-react';

export default function TrackView({ title, description, items, onItemToggle, onAddItem }) {
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTopic, setNewTopic] = useState('');
  const [newDifficulty, setNewDifficulty] = useState('Medium');
  const [newPdfUrl, setNewPdfUrl] = useState('');

  // Active viewing PDF modal state
  const [activePdf, setActivePdf] = useState(null);

  // Active expanded card for Notes & AI Explain
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [aiExplanations, setAiExplanations] = useState({});
  const [userNotes, setUserNotes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('devtrack_item_notes') || '{}');
    } catch {
      return {};
    }
  });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    onAddItem({
      title: newTitle,
      topic: newTopic || 'General',
      difficulty: newDifficulty,
      status: 'pending',
      pdfUrl: newPdfUrl.trim() || null
    });
    setNewTitle('');
    setNewTopic('');
    setNewPdfUrl('');
    setShowModal(false);
  };

  const handleSaveItemNote = (itemId, noteText) => {
    const updated = { ...userNotes, [itemId]: noteText };
    setUserNotes(updated);
    localStorage.setItem('devtrack_item_notes', JSON.stringify(updated));
  };

  // Instant Pattern Explainer
  const handleExplain = (item) => {
    if (aiExplanations[item.id]) return;

    // Pattern heuristic breakdown
    const explanation = {
      corePattern: item.notes || `This problem focuses on the fundamental patterns of ${item.topic}.`,
      approach: [
        "1. Identify Invariants: Observe sorted properties, sliding window bounds, or recursive state overlap.",
        "2. Optimal Strategy: Avoid brute-force nested iterations by maintaining running states (HashMap, Monotonic Stack, or DP Table).",
        "3. Edge Cases: Empty input, single element, negative numbers, overflow boundaries, or circular loops."
      ],
      complexity: item.difficulty === 'Easy' ? "Time: O(N) | Space: O(1)" : item.difficulty === 'Hard' ? "Time: O(N log N) or O(N) | Space: O(N)" : "Time: O(N) | Space: O(N)"
    };

    setAiExplanations(prev => ({ ...prev, [item.id]: explanation }));
  };

  const handleLinkClick = (url, itemTitle) => {
    if (!url) return;
    if (url.endsWith('.pdf')) {
      setActivePdf({ title: itemTitle, url });
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-xs text-slate-400 mt-1">{description}</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition"
        >
          <Plus className="w-4 h-4" /> Add Topic / Note
        </button>
      </div>

      {/* Add Modal */}
      {showModal && (
        <form onSubmit={handleAdd} className="p-4 rounded-xl bg-[#131B2A] border border-[#1E293B] space-y-3">
          <h3 className="text-xs font-semibold text-white">Add New Problem / Topic</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Title (e.g. Lowest Common Ancestor)"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="bg-[#0B0F17] border border-[#1E293B] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Topic Tag (e.g. Trees)"
              value={newTopic}
              onChange={(e) => setNewTopic(e.target.value)}
              className="bg-[#0B0F17] border border-[#1E293B] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
            />
            <input
              type="url"
              placeholder="LeetCode Link or PDF URL"
              value={newPdfUrl}
              onChange={(e) => setNewPdfUrl(e.target.value)}
              className="bg-[#0B0F17] border border-[#1E293B] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
            />
            <select
              value={newDifficulty}
              onChange={(e) => setNewDifficulty(e.target.value)}
              className="bg-[#0B0F17] border border-[#1E293B] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="px-3 py-1 text-xs text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 text-xs bg-blue-600 hover:bg-blue-500 font-semibold rounded-lg text-white"
            >
              Save Topic
            </button>
          </div>
        </form>
      )}

      {/* List */}
      <div className="space-y-3">
        {items.map((item) => {
          const isDone = item.status === 'completed';
          const isExpanded = expandedItemId === item.id;
          const isPdf = item.pdfUrl?.endsWith('.pdf');

          return (
            <div
              key={item.id}
              className={`rounded-xl border transition overflow-hidden ${
                isDone
                  ? 'bg-[#0E1522]/60 border-slate-800/80'
                  : 'bg-[#131B2A] border-[#1E293B] hover:border-slate-700'
              }`}
            >
              {/* Row Header */}
              <div className="p-4 flex items-center justify-between gap-4">
                <div 
                  onClick={() => onItemToggle(item.id)}
                  className="flex items-center gap-3.5 cursor-pointer flex-1 min-w-0"
                >
                  <button className="text-slate-400 flex-shrink-0">
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-600" />
                    )}
                  </button>
                  <div className="truncate">
                    <h4 className={`text-sm font-medium truncate ${isDone ? 'line-through text-slate-400' : 'text-slate-100'}`}>
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-500">
                      <span>{item.topic}</span>
                      {item.pdfUrl && (
                        <span className="text-[10px] text-blue-400 font-mono">
                          • {isPdf ? 'PDF' : 'LeetCode / Resource'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {item.pdfUrl && (
                    <button
                      onClick={() => handleLinkClick(item.pdfUrl, item.title)}
                      className="flex items-center gap-1 px-2.5 py-1.5 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-lg text-xs font-semibold transition"
                      title={isPdf ? "Open in PDF Viewer" : "Solve on LeetCode"}
                    >
                      {isPdf ? <Eye className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                      <span className="hidden sm:inline">{isPdf ? 'Read PDF' : 'Solve'}</span>
                    </button>
                  )}

                  <span className={`text-[10px] px-2 py-0.5 rounded font-mono border ${
                    item.difficulty === 'Easy' ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5' :
                    item.difficulty === 'Hard' ? 'text-rose-400 border-rose-500/20 bg-rose-500/5' :
                    'text-amber-400 border-amber-500/20 bg-amber-500/5'
                  }`}>
                    {item.difficulty}
                  </span>

                  <button
                    onClick={() => setExpandedItemId(isExpanded ? null : item.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                    title="Notes & AI Explainer"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Expandable Scratchpad & AI Assistant Panel */}
              {isExpanded && (
                <div className="p-4 bg-[#0B0F17] border-t border-[#1E293B] space-y-4">
                  {/* Canonical Notes */}
                  {item.notes && (
                    <div className="p-3 rounded-lg bg-[#131B2A] border border-[#1E293B] text-xs text-slate-300">
                      <span className="font-semibold text-blue-400">Core Pattern: </span>
                      {item.notes}
                    </div>
                  )}

                  {/* AI Explainer */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Pattern Breakdown & Approach
                      </span>
                      {!aiExplanations[item.id] && (
                        <button
                          onClick={() => handleExplain(item)}
                          className="px-2.5 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-md text-[11px] font-semibold transition"
                        >
                          Generate Breakdown
                        </button>
                      )}
                    </div>

                    {aiExplanations[item.id] && (
                      <div className="p-3.5 rounded-xl bg-[#131B2A] border border-[#1E293B] space-y-2 text-xs">
                        <p className="font-semibold text-emerald-400">{aiExplanations[item.id].complexity}</p>
                        <div className="space-y-1 text-slate-300">
                          {aiExplanations[item.id].approach.map((step, idx) => (
                            <p key={idx}>{step}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Personal Scratchpad for this question */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-blue-400" /> My Dry-Run / Solution Scratchpad:
                    </label>
                    <textarea
                      rows={3}
                      value={userNotes[item.id] || ''}
                      onChange={(e) => handleSaveItemNote(item.id, e.target.value)}
                      placeholder="Apne edge cases, pseudo-code ya dry run variables yahan likhein (Auto-saved)..."
                      className="w-full bg-[#131B2A] border border-[#1E293B] rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 font-mono resize-none"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* PDF Modal */}
      {activePdf && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 md:p-6">
          <div className="w-full max-w-5xl h-[90vh] bg-[#0E1522] border border-[#1E293B] rounded-2xl flex flex-col shadow-2xl overflow-hidden">
            <div className="px-5 py-3.5 border-b border-[#1E293B] flex items-center justify-between bg-[#131B2A]">
              <h3 className="text-sm font-bold text-white truncate">{activePdf.title}</h3>
              <button
                onClick={() => setActivePdf(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 bg-[#0B0F17]">
              <iframe src={activePdf.url} title={activePdf.title} className="w-full h-full border-none" />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}