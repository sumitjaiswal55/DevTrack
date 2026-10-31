const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['STUDY', 'CODING', 'PROJECT', 'ENTERTAINMENT', 'FOOD', 'EXERCISE'],
    required: true 
  },
  durationMinutes: { type: Number, required: true },
  isProductive: { type: Boolean, default: true },
  loggedFrom: { type: String, enum: ['APP', 'WEB'], default: 'WEB' },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Activity', ActivitySchema);