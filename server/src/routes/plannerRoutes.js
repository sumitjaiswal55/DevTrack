const express = require('express');
const router = express.Router();
const DayPlan = require('../models/DayPlan');

// 1. Saare days ka plan fetch karein
router.get('/', async (req, res) => {
  try {
    const plans = await DayPlan.find().sort({ day: 1 });
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Kisi specific day ke specific task ko toggle karein
router.patch('/:day/task/:taskId', async (req, res) => {
  try {
    const dayPlan = await DayPlan.findOne({ day: req.params.day });
    if (!dayPlan) return res.status(404).json({ error: 'Day plan not found' });

    const task = dayPlan.tasks.id(req.params.taskId);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    task.completed = !task.completed;
    await dayPlan.save();
    res.json(dayPlan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;