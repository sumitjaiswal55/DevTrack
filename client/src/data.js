export const initialSyllabus = [
  {
    id: "dsa-1",
    module: "Data Structures & Algorithms",
    title: "Sliding Window Maximum & Two Pointers",
    category: "DSA",
    difficulty: "Medium",
    status: "completed",
    notes: "Monotonic deque handles sliding window maximum in O(n) time."
  },
  {
    id: "dsa-2",
    module: "Data Structures & Algorithms",
    title: "Dynamic Programming: 0/1 Knapsack Variants",
    category: "DSA",
    difficulty: "Medium",
    status: "pending",
    notes: "Focus on space optimization from 2D array to 1D rolling array."
  },
  {
    id: "dsa-3",
    module: "Data Structures & Algorithms",
    title: "Graph Traversal: Cycle Detection in Directed Graph (Kahn's)",
    category: "DSA",
    difficulty: "Hard",
    status: "pending",
    notes: "Topological sort using in-degree array."
  },
  {
    id: "be-1",
    module: "Backend Engineering & DBs",
    title: "PostgreSQL Indexing: B-Tree vs GIN & Query Optimization",
    category: "Backend",
    difficulty: "Medium",
    status: "completed",
    notes: "Use EXPLAIN ANALYZE to monitor index scans."
  },
  {
    id: "be-2",
    module: "Backend Engineering & DBs",
    title: "Redis Caching Strategies & LRU Eviction Under Load",
    category: "Backend",
    difficulty: "Hard",
    status: "pending",
    notes: "Cache-aside vs write-through patterns."
  },
  {
    id: "be-3",
    module: "Backend Engineering & DBs",
    title: "WebSocket Connection Resilience & Heartbeat Protocol",
    category: "Backend",
    difficulty: "Medium",
    status: "completed",
    notes: "Exponential backoff client-side reconnect loop."
  },
  {
    id: "sys-1",
    module: "System Design & LLD",
    title: "Rate Limiter Design (Token Bucket / Sliding Window)",
    category: "System Design",
    difficulty: "Hard",
    status: "pending",
    notes: "Evaluate Redis sliding log memory consumption vs Lua script token bucket."
  }
];

export const initialOpportunities = [
  {
    id: "opp-1",
    company: "Razorpay",
    role: "Associate Software Engineer",
    batch: "2025 / 2026 Batch",
    location: "Bengaluru (Hybrid)",
    stipendOrCtc: "18-24 LPA",
    status: "Not Applied",
    deadline: "Closes in 3 days",
    tags: ["Node.js", "Postgres", "DSA"],
    applyUrl: "https://razorpay.com/jobs"
  },
  {
    id: "opp-2",
    company: "CRED",
    role: "Backend Intern / SDE",
    batch: "2026 Batch",
    location: "Bengaluru",
    stipendOrCtc: "₹1,00,000/mo",
    status: "Applied",
    deadline: "Closes in 5 days",
    tags: ["Go", "Distributed Systems", "SQL"],
    applyUrl: "https://cred.club/careers"
  },
  {
    id: "opp-3",
    company: "Swiggy",
    role: "Frontend Engineer - 1",
    batch: "2025 / 2026 Batch",
    location: "Remote / Bengaluru",
    stipendOrCtc: "16-20 LPA",
    status: "Not Applied",
    deadline: "Rolling Basis",
    tags: ["React", "TypeScript", "Performance"],
    applyUrl: "https://swiggy.com/careers"
  },
  {
    id: "opp-4",
    company: "Groww",
    role: "Software Developer Intern",
    batch: "2026 Batch",
    location: "Bengaluru",
    stipendOrCtc: "₹80,000/mo",
    status: "Interviewing",
    deadline: "Closes this week",
    tags: ["Spring Boot", "Microservices", "Java"],
    applyUrl: "https://groww.in/careers"
  }
];