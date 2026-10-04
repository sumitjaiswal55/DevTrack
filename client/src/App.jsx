import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import TrackView from './components/TrackView';
import OpportunitiesView from './components/OpportunitiesView';
import PdfViewer from './components/PdfViewer';
import PlannerView from './components/PlannerView';
import { Menu, Loader2 } from 'lucide-react';
import { 
  fetchTopics, 
  toggleTopicStatus, 
  createTopic, 
  fetchOpportunities,
  fetchDayPlans,
  toggleDayTask
} from './services/api';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [allTopics, setAllTopics] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [dayPlans, setDaysPlan] = useState([]);

  useEffect(() => {
    async function loadInitialData() {
      try {
        setLoading(true);
        const [topicsData, oppsData, plansData] = await Promise.all([
          fetchTopics(),
          fetchOpportunities(),
          fetchDayPlans()
        ]);
        setAllTopics(Array.isArray(topicsData) ? topicsData : []);
        setOpportunities(Array.isArray(oppsData) ? oppsData : []);
        setDaysPlan(Array.isArray(plansData) ? plansData : []);
      } catch (err) {
        console.error('Error connecting to backend:', err);
      } finally {
        setLoading(false);
      }
    }
    loadInitialData();
  }, []);

  // Filter Tracks
  const dsa = allTopics.filter(t => t.track === 'dsa');
  const dev = allTopics.filter(t => t.track === 'dev');
  const systemDesign = allTopics.filter(t => t.track === 'systemDesign');
  const coreCs = allTopics.filter(t => t.track === 'coreCs');
  const aptitude = allTopics.filter(t => t.track === 'aptitude');

  // Toggle Topic Status
  const handleToggleTopic = async (id) => {
    setAllTopics(prev => prev.map(t => 
      t._id === id ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' } : t
    ));
    try {
      await toggleTopicStatus(id);
    } catch (err) {
      console.error('Failed to toggle status on server:', err);
    }
  };

  // Toggle Day Sprint Task
  const handleToggleDayTask = async (day, taskId) => {
    setDaysPlan(prev => prev.map(d => {
      if (d.day !== day) return d;
      return {
        ...d,
        tasks: d.tasks.map(t => (t._id === taskId || t.id === taskId) ? { ...t, completed: !t.completed } : t)
      };
    }));

    try {
      await toggleDayTask(day, taskId);
    } catch (err) {
      console.error('Failed to toggle sprint task on server:', err);
    }
  };

  // Add Topic
  const handleAddTopic = (trackKey) => async (newTopicData) => {
    try {
      const savedTopic = await createTopic({ ...newTopicData, track: trackKey });
      setAllTopics(prev => [...prev, savedTopic]);
    } catch (err) {
      console.error('Failed to add topic to database:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#0B0F17] text-white">
        <div className="flex items-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
          <span className="text-sm font-medium text-slate-300">Syncing Placement OS with MongoDB...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0B0F17] text-slate-100 font-sans antialiased">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        counts={{
          dsa: `${dsa.filter(i => i.status === 'completed').length}/${dsa.length}`,
          dev: `${dev.filter(i => i.status === 'completed').length}/${dev.length}`,
          systemDesign: `${systemDesign.filter(i => i.status === 'completed').length}/${systemDesign.length}`,
          coreCs: `${coreCs.filter(i => i.status === 'completed').length}/${coreCs.length}`,
          aptitude: `${aptitude.filter(i => i.status === 'completed').length}/${aptitude.length}`,
          opportunities: opportunities.length
        }}
      />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="flex md:hidden items-center justify-between px-4 py-3 bg-[#0E1522] border-b border-[#1E293B] flex-shrink-0">
          <button onClick={() => setIsSidebarOpen(true)} className="p-1.5 rounded-lg text-slate-300 hover:bg-slate-800">
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-bold text-sm text-white">DevTrack OS</span>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Live
          </span>
        </header>

        <main className="flex-1 h-full overflow-y-auto px-4 sm:px-6 md:px-8 py-5">
          <div className={`mx-auto w-full pb-6 ${activeTab === 'pdfViewer' ? 'max-w-[98%]' : 'max-w-6xl'}`}>
            
            {activeTab === 'dashboard' && (
              <DashboardView
                tracks={{ dsa, dev, systemDesign, coreCs, aptitude }}
                setActiveTab={setActiveTab}
                dayPlans={dayPlans}
                onToggleTask={handleToggleDayTask}
              />
            )}

            {activeTab === 'planner' && (
              <PlannerView daysPlan={dayPlans} onToggleTask={handleToggleDayTask} />
            )}

            {activeTab === 'dsa' && (
              <TrackView
                title="Data Structures & Algorithms Engine"
                description="Curated pattern-based problem sheet with LeetCode links & breakdown."
                items={dsa.map(i => ({ ...i, id: i._id }))}
                onItemToggle={handleToggleTopic}
                onAddItem={handleAddTopic('dsa')}
              />
            )}

            {activeTab === 'dev' && (
              <TrackView
                title="Full-Stack & Backend Engineering"
                description="Node.js internals, Database indexes, Redis caching, and OWASP security."
                items={dev.map(i => ({ ...i, id: i._id }))}
                onItemToggle={handleToggleTopic}
                onAddItem={handleAddTopic('dev')}
              />
            )}

            {activeTab === 'systemDesign' && (
              <TrackView
                title="System Design & Low-Level Design (LLD)"
                description="Core scaling foundations and 22+ real-world interview architectures."
                items={systemDesign.map(i => ({ ...i, id: i._id }))}
                onItemToggle={handleToggleTopic}
                onAddItem={handleAddTopic('systemDesign')}
              />
            )}

            {activeTab === 'coreCs' && (
              <TrackView
                title="Core CS Fundamentals"
                description="Operating Systems, DBMS, Computer Networks, and OOP interview questions."
                items={coreCs.map(i => ({ ...i, id: i._id }))}
                onItemToggle={handleToggleTopic}
                onAddItem={handleAddTopic('coreCs')}
              />
            )}

            {activeTab === 'aptitude' && (
              <TrackView
                title="Aptitude & Logical Reasoning"
                description="Quantitative formulas, reasoning shortcuts, and OA assessment sets."
                items={aptitude.map(i => ({ ...i, id: i._id }))}
                onItemToggle={handleToggleTopic}
                onAddItem={handleAddTopic('aptitude')}
              />
            )}

            {activeTab === 'pdfViewer' && <PdfViewer />}
            {activeTab === 'opportunities' && <OpportunitiesView />}

          </div>
        </main>
      </div>
    </div>
  );
}