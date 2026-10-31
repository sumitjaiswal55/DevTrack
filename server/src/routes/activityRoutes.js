const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Activity = require('../models/Activity');

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret_personal_ai_key';

// Token Verification Middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access Token Missing' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid or Expired Token' });
    req.user = user;
    next();
  });
}

// Activity Add Route (App ya Web dono se call ho sakegi)
router.post('/add', authenticateToken, async (req, res) => {
  try {
    const { title, category, durationMinutes, isProductive, loggedFrom } = req.body;

    const activity = await Activity.create({
      userId: req.user.userId,
      title,
      category,
      durationMinutes,
      isProductive: isProductive !== undefined ? isProductive : true,
      loggedFrom: loggedFrom || 'WEB'
    });

    res.status(201).json({ success: true, activity });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Aaj ka Activity Data Fetch Route
router.get('/today', authenticateToken, async (req, res) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const activities = await Activity.find({
      userId: req.user.userId,
      timestamp: { $gte: startOfDay }
    }).sort({ timestamp: -1 });

    res.json({ role: req.user.role, activities });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;