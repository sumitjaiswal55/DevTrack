require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

// Database Connection
const connectDB = require('./src/config/db');

// Existing Services
const { startJobScheduler } = require('./src/services/jobAggrigator');

const app = express();

// Middlewares - CORS Setup
const allowedOrigins = [
  'https://dev-track-theta-seven.vercel.app',
  'https://dev-track-xr46.vercel.app',
  'http://localhost:3000',
  'http://localhost:5173', // <-- Yeh line add karein (Vite dev server ke liye)
];

app.use(cors({
  origin: function (origin, callback) {
    // Mobile apps, Postman ya local testing ke liye allow karein
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS policy'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-sync-secret']
}));

app.use(express.json());

// Routes Setup
// 1. New Life Manager Routes (Login, Signup & Activity Tracker)
app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/activity', require('./src/routes/activityRoutes'));

// 2. Existing Routes
app.use('/api/topics', require('./src/routes/topicRoutes'));
app.use('/api/planner', require('./src/routes/plannerRoutes'));
app.use('/api/opportunities', require('./src/routes/opportunityRoutes'));

// Health Check Route
app.get('/', (req, res) => {
  res.send('Personal AI Life Manager Backend is Running.');
});

// Database connect hone ke baad hi server listen aur scheduler start karein
connectDB().then(() => {
  startJobScheduler();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to start server due to DB connection error:', err);
});