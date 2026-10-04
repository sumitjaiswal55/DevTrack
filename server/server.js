require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT  = process.env.PORT;
// PATH FIX: ./config ke badle ./src/config
const connectDB = require('./src/config/db');
connectDB();

// PATH FIX: ./models ke badle ./src/models
const Topic = require('./src/models/Topic');
const DayPlan = require('./src/models/DayPlan');
const Opportunity = require('./src/models/Opportunity');
const { startJobScheduler } = require('./src/services/jobAggrigator');
const app = express();

// Middlewares

const allowedOrigins = [
  'https://dev-track-theta-seven.vercel.app',
  'http://localhost:3000' // Local testing ke liye
];

app.use(cors({
  origin: function (origin, callback) {
    // Mobile apps, Postman ya bina origin wale requests ke liye !origin allow karein
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

connectDB().then(() => {
  // Scheduler automatically har 20 minute me sync karega
  startJobScheduler();
});
app.listen(PORT, ()=>{
    console.log("Server is running");
})

// PATH FIX: ./routes ke badle ./src/routes
app.use('/api/topics', require('./src/routes/topicRoutes'));
app.use('/api/planner', require('./src/routes/plannerRoutes'));
app.use('/api/opportunities', require('./src/routes/opportunityRoutes'));