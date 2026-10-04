const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema(
  {
    track: {
      type: String,
      required: true,
      enum: ['dsa', 'dev', 'systemDesign', 'coreCs', 'aptitude']
    },
    topic: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
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
    pdfUrl: {
      type: String,
      default: null
    },
    notes: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Topic', topicSchema);