import React, { useState, useEffect } from 'react';
import { FileText, Upload, Link as LinkIcon, BookOpen, Save, Trash2, Maximize2, Minimize2 } from 'lucide-react';

export default function PdfViewer() {
  const [pdfSource, setPdfSource] = useState(null);
  const [urlInput, setUrlInput] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [notes, setNotes] = useState(() => {
    return localStorage.getItem('devtrack_pdf_notes') || '';
  });
  const [saveStatus, setSaveStatus] = useState('');

  useEffect(() => {
    localStorage.setItem('devtrack_pdf_notes', notes);
  }, [notes]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileUrl = URL.createObjectURL(file);
      setPdfSource(fileUrl);
    } else {
      alert('Kripya sirf valid PDF file upload karein.');
    }
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (!urlInput.trim()) return;
    setPdfSource(urlInput.trim());
  };

  const handleSaveNotes = () => {
    localStorage.setItem('devtrack_pdf_notes', notes);
    setSaveStatus('Saved!');
    setTimeout(() => setSaveStatus(''), 2000);
  };

  const handleClear = () => {
    if (window.confirm('Kya aap current document band karna chahte hain?')) {
      setPdfSource(null);
      setUrlInput('');
      setIsFullScreen(false);
    }
  };

  return (
    <div className="space-y-4 w-full h-[calc(100vh-5rem)] flex flex-col">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-[#1E293B] flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white leading-tight">In-App Study Desk & Document Reader</h2>
            <p className="text-[11px] text-slate-400">PDFs aur cheatsheets bina browser tab switch kiye full size me padhein.</p>
          </div>
        </div>

        {pdfSource && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#131B2A] text-slate-300 border border-[#1E293B] hover:border-slate-700 text-xs font-medium rounded-lg transition"
            >
              {isFullScreen ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5" /> Show Scratchpad
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-blue-400" /> Focus Mode (Full Width)
                </>
              )}
            </button>
            <button
              onClick={handleClear}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 text-xs font-medium rounded-lg transition"
            >
              <Trash2 className="w-3.5 h-3.5" /> Close Document
            </button>
          </div>
        )}
      </div>

      {/* Upload Screen */}
      {!pdfSource ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-8 my-auto">
          <div className="p-8 rounded-2xl bg-[#131B2A] border border-[#1E293B] flex flex-col items-center justify-center text-center space-y-4 hover:border-slate-700 transition">
            <div className="h-12 w-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
              <Upload className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Upload Local PDF</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Apne college notes, DSA cheatsheets ya syllabus PDF select karein.
              </p>
            </div>
            <label className="cursor-pointer px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-md transition">
              Browse PDF
              <input type="file" accept="application/pdf" onChange={handleFileUpload} className="hidden" />
            </label>
          </div>

          <div className="p-8 rounded-2xl bg-[#131B2A] border border-[#1E293B] flex flex-col items-center justify-center text-center space-y-4 hover:border-slate-700 transition">
            <div className="h-12 w-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <LinkIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Load PDF from Web URL</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Direct online hosted PDF link daal kar instant embed karein.
              </p>
            </div>
            <form onSubmit={handleUrlSubmit} className="flex gap-2 w-full max-w-sm">
              <input
                type="url"
                placeholder="https://example.com/notes.pdf"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="flex-1 bg-[#0B0F17] border border-[#1E293B] rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition"
              >
                Load
              </button>
            </form>
          </div>
        </div>
      ) : (
        /* Large Expanded Workspace */
        <div className={`grid gap-4 flex-1 h-full min-h-0 ${isFullScreen ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-4'}`}>
          {/* Main PDF Display */}
          <div className={`${isFullScreen ? 'col-span-1' : 'lg:col-span-3'} rounded-2xl overflow-hidden border border-[#1E293B] bg-[#0E1522] h-full shadow-2xl flex flex-col`}>
            <iframe
              src={pdfSource}
              title="PDF Reader"
              className="w-full h-full border-none flex-1"
            />
          </div>

          {/* Quick Scratchpad */}
          {!isFullScreen && (
            <div className="rounded-2xl border border-[#1E293B] bg-[#131B2A] p-4 flex flex-col justify-between h-full shadow-lg">
              <div className="flex flex-col h-full space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#1E293B] flex-shrink-0">
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Quick Scratchpad</span>
                  </div>
                  {saveStatus && <span className="text-[10px] text-emerald-400 font-mono">{saveStatus}</span>}
                </div>

                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Yahan important points, algorithms ya exam topics note karein... (Auto-saved)"
                  className="flex-1 w-full bg-[#0B0F17] border border-[#1E293B] rounded-xl p-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 resize-none font-mono leading-relaxed"
                />

                <div className="pt-2 flex justify-between items-center text-[10px] text-slate-500 flex-shrink-0">
                  <span>Auto-saved to LocalStorage</span>
                  <button
                    onClick={handleSaveNotes}
                    className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-medium transition"
                  >
                    <Save className="w-3.5 h-3.5" /> Save Note
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}