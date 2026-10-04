import React, { useState, useEffect, useCallback } from 'react';
import { 
  Briefcase, 
  ExternalLink, 
  Calendar, 
  Search, 
  Building2, 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  Loader2
} from 'lucide-react';
import { fetchOpportunities } from '../services/api';

export default function OpportunitiesView() {
  const [opportunities, setOpportunities] = useState([]);
  const [pagination, setPagination] = useState({
    totalItems: 0,
    totalPages: 1,
    currentPage: 1,
    pageSize: 24,
    hasNextPage: false,
    hasPrevPage: false
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [loading, setLoading] = useState(false);

  // Debounced/Direct Data Fetch
  const loadData = useCallback(async (page, search, status) => {
    setLoading(true);
    try {
      const response = await fetchOpportunities(page, 24, search, status);
      if (response.success) {
        setOpportunities(response.data);
        setPagination(response.pagination);
      }
    } catch (err) {
      console.error('Failed to load opportunities:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Filter change par Page 1 se fetch karein
  useEffect(() => {
    const timer = setTimeout(() => {
      loadData(1, searchTerm, filterStatus);
    }, 300); // 300ms debounce typing ke liye

    return () => clearTimeout(timer);
  }, [searchTerm, filterStatus, loadData]);

  // Page change handler
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      loadData(newPage, searchTerm, filterStatus);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Expiry Calculator
  const getExpiryStatus = (deadlineStr) => {
    if (!deadlineStr || deadlineStr.toLowerCase().includes('rolling') || deadlineStr.toLowerCase().includes('active')) {
      return { label: 'Ongoing / Rolling', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' };
    }
    const deadlineDate = new Date(deadlineStr);
    if (isNaN(deadlineDate.getTime())) {
      return { label: deadlineStr, color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' };
    }
    const now = new Date();
    const diffDays = Math.ceil((deadlineDate - now) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return { label: 'Expired', color: 'text-rose-400 bg-rose-500/10 border-rose-500/20' };
    if (diffDays === 0) return { label: 'Expires Today!', color: 'text-red-400 bg-red-500/20 border-red-500/40 animate-pulse' };
    if (diffDays <= 2) return { label: `Closing in ${diffDays}d`, color: 'text-orange-400 bg-orange-500/10 border-orange-500/20' };
    return { label: `${diffDays} days left`, color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' };
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Applied': return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'OA Round': return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Interview': return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'Selected': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      default: return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-[#0E1522] border border-[#1E293B] shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5" /> 2026 Batch Placement Radar
          </div>
          <h2 className="text-2xl font-extrabold text-white mt-2">Active Off-Campus & Internship Openings</h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Live database containing 2,200+ verified listings. Paginated 24 per page for instant browsing performance.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-3.5 py-2 rounded-xl bg-[#131B2A] border border-[#1E293B] text-slate-300">
            Total Matches: <strong className="text-white font-bold">{pagination.totalItems}</strong>
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search company, role or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#0E1522] border border-[#1E293B] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {['All', 'Not Applied', 'Applied', 'OA Round', 'Interview', 'Selected'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                filterStatus === status 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-[#0E1522] border border-[#1E293B] text-slate-400 hover:text-white'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      {loading ? (
        <div className="py-24 flex flex-col items-center justify-center space-y-3">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          <p className="text-xs text-slate-400 font-mono">Fetching page {pagination.currentPage} records...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {opportunities.map((opp) => {
            const expiry = getExpiryStatus(opp.deadline);

            return (
              <div
                key={opp._id}
                className="p-5 rounded-2xl bg-[#0E1522] border border-[#1E293B] hover:border-slate-700 transition flex flex-col justify-between space-y-4 shadow-lg group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${getStatusColor(opp.status)}`}>
                      {opp.status || 'Not Applied'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition truncate">
                      {opp.company}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium truncate mt-0.5">
                      {opp.role}
                    </p>
                  </div>

                  {opp.skillsRequired && (
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      <strong className="text-slate-500">Skills:</strong> {opp.skillsRequired}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 pt-1 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" /> {opp.batch || '2026 Batch'}
                    </span>
                    <span>•</span>
                    <span className={`flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded border ${expiry.color}`}>
                      <Clock className="w-3 h-3" /> {expiry.label}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1E293B] flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-mono truncate max-w-[130px]" title={opp.source}>
                    {opp.source || 'Drive Radar'}
                  </span>
                  <a
                    href={opp.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 rounded-xl text-xs font-semibold transition flex-shrink-0"
                  >
                    Apply Direct <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Controls */}
      {pagination.totalPages > 1 && (
        <div className="p-4 rounded-2xl bg-[#0E1522] border border-[#1E293B] flex items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-mono">
            Showing Page <strong className="text-white">{pagination.currentPage}</strong> of <strong className="text-white">{pagination.totalPages}</strong> ({pagination.totalItems} Total)
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              disabled={!pagination.hasPrevPage || loading}
              className="p-2 rounded-xl bg-[#131B2A] border border-[#1E293B] text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono text-slate-300 px-3 py-1.5 rounded-xl bg-[#131B2A] border border-[#1E293B]">
              {pagination.currentPage} / {pagination.totalPages}
            </span>

            <button
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              disabled={!pagination.hasNextPage || loading}
              className="p-2 rounded-xl bg-[#131B2A] border border-[#1E293B] text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}