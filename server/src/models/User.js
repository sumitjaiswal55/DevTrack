const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['FULL_STACK', 'DATA_ANALYST'], 
    default: 'DATA_ANALYST' 
  },
  targetDailyHours: { type: Number, default: 4 },
  prioritySkills: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);