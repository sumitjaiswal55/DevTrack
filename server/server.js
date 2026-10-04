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
app.use(cors());
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