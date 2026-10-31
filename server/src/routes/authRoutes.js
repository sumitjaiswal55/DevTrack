const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret_personal_ai_key';

const DEFAULT_SKILLS = {
  FULL_STACK: ['DSA', 'React', 'Node.js', 'MongoDB', 'System Design'],
  DATA_ANALYST: ['SQL', 'Python (Pandas)', 'PowerBI', 'Excel', 'Statistics']
};

// Signup Route
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const selectedRole = role === 'FULL_STACK' ? 'FULL_STACK' : 'DATA_ANALYST';

    const newUser = await User.create({
      name,
      email,
      passwordHash,
      role: selectedRole,
      prioritySkills: DEFAULT_SKILLS[selectedRole]
    });

    const token = jwt.sign(
      { userId: newUser._id, role: newUser.role, name: newUser.name },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        prioritySkills: newUser.prioritySkills
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role, name: user.name },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        prioritySkills: user.prioritySkills
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
});

module.exports = router;