const express = require('express');
const router = express.Router();
const Topic = require('../models/Topic');

// 1. Saare topics ya specific track ke topics fetch karein
router.get('/', async (req, res) => {
  try {
    const { track } = req.query;
    const filter = track ? { track } : {};
    const topics = await Topic.find(filter).sort({ createdAt: 1 });
    res.json(topics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Naya topic create karein
router.post('/', async (req, res) => {
  try {
    const newTopic = new Topic(req.body);
    const saved = await newTopic.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 3. Topic ka completion status toggle karein
router.patch('/:id/toggle', async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);
    if (!topic) return res.status(404).json({ error: 'Topic not found' });

    topic.status = topic.status === 'completed' ? 'pending' : 'completed';
    await topic.save();
    res.json(topic);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;