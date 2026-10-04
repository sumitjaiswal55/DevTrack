const API_BASE = 'http://localhost:5000/api';

export const fetchTopics = async (track = '') => {
  const url = track ? `${API_BASE}/topics?track=${track}` : `${API_BASE}/topics`;
  const res = await fetch(url);
  return res.json();
};

export const toggleTopicStatus = async (id) => {
  const res = await fetch(`${API_BASE}/topics/${id}/toggle`, {
    method: 'PATCH',
  });
  return res.json();
};

export const createTopic = async (topicData) => {
  const res = await fetch(`${API_BASE}/topics`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(topicData),
  });
  return res.json();
};

// Day-Wise Sprint APIs
export const fetchDayPlans = async () => {
  const res = await fetch(`${API_BASE}/planner`);
  return res.json();
};

export const toggleDayTask = async (day, taskId) => {
  const res = await fetch(`${API_BASE}/planner/${day}/task/${taskId}`, {
    method: 'PATCH',
  });
  return res.json();
};

export const fetchOpportunities = async (page = 1, limit = 24, search = '', status = 'All') => {
  const queryParams = new URLSearchParams({
    page,
    limit,
    search,
    status
  });
  const res = await fetch(`${API_BASE}/opportunities?${queryParams.toString()}`);
  return res.json();
};