const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Topic = require('./models/Topic');
const DayPlan = require('./models/DayPlan');
const Opportunity = require('./models/Opportunity');
const topicsData = require('./seedData');

const importData = async () => {
  try {
    await connectDB();

    // 1. Purana dummy data clean karein
    await Topic.deleteMany();
    await DayPlan.deleteMany();
    await Opportunity.deleteMany();

    console.log('Old Database Cleaned...');

    // 2. Real Topics Inject Karein
    await Topic.insertMany(topicsData);
    console.log(`Successfully seeded ${topicsData.length} Placement Topics!`);

    // 3. Real Day-Wise Sprint Plan Inject Karein
    await DayPlan.create([
      {
        day: 1,
        title: "Two Sum Patterns & Operating System Basics",
        tasks: [
          { title: "Two Sum & Subarray Sum Equals K (LeetCode)", track: "DSA", completed: false },
          { title: "Process vs Thread & Virtual Memory Paging", track: "Core CS", completed: false },
          { title: "Node.js Event Loop Microtasks vs Macrotasks", track: "Dev", completed: false }
        ]
      },
      {
        day: 2,
        title: "Sliding Window & SQL Indexing Depth",
        tasks: [
          { title: "Longest Substring Without Repeating Characters", track: "DSA", completed: false },
          { title: "PostgreSQL B-Tree vs Hash Indexing (EXPLAIN ANALYZE)", track: "Dev", completed: false },
          { title: "Aptitude: Time, Speed & Distance 10 Problems", track: "Aptitude", completed: false }
        ]
      },
      {
        day: 3,
        title: "Tree Recursion & SOLID Principles",
        tasks: [
          { title: "Lowest Common Ancestor & Diameter of Binary Tree", track: "DSA", completed: false },
          { title: "SOLID Principles Implementation in TypeScript", track: "System Design", completed: false },
          { title: "Deadlock: 4 Coffman Conditions & Prevention", track: "Core CS", completed: false }
        ]
      }
    ]);
    console.log('Successfully seeded Day-Wise Sprint Plan!');

    // 4. Live Drives Inject Karein
    await Opportunity.create([
      {
        company: "Razorpay",
        role: "Software Development Engineer - 1",
        batch: "2026 Batch",
        status: "Not Applied",
        link: "https://razorpay.com/jobs",
        deadline: "Closing in 4 days"
      },
      {
        company: "Groww",
        role: "Backend Engineering Intern",
        batch: "2026 Batch",
        status: "Applied",
        link: "https://groww.in/careers",
        deadline: "Rolling"
      },
      {
        company: "Cred",
        role: "Associate Backend Developer (Go/Node)",
        batch: "2026 Batch",
        status: "Not Applied",
        link: "https://cred.club/careers",
        deadline: "Closing this week"
      }
    ]);
    console.log('Successfully seeded Off-Campus Drives!');

    process.exit();
  } catch (error) {
    console.error(`Error with seeding: ${error.message}`);
    process.exit(1);
  }
};

importData();