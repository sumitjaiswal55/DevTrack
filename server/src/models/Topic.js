const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  topic: { 
    type: String, 
    required: true 
  },
  track: { 
    type: String, 
    required: true,
    enum: [
      // Full Stack Tracks
      'dsa', 
      'dev', 
      'systemDesign', 
      'coreCs', 
      'aptitude',
      // Data Analyst Tracks
      'sql', 
      'python', 
      'bi', 
      'stats'
    ] 
  },
  category: { 
    type: String 
  },
  difficulty: { 
    type: String, 
    enum: ['Easy', 'Medium', 'Hard'], 
    default: 'Medium' 
  },
  status: { 
    type: String, 
    enum: ['pending', 'completed'], 
    default: 'pending' 
  },
  link: { 
    type: String 
  },
  notes: { 
    type: String 
  }
}, { timestamps: true });

module.exports = mongoose.model('Topic', TopicSchema);