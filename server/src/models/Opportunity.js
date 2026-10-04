const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    role: { type: String, required: true },
    batch: { type: String, default: '2026 Batch' },
    status: {
      type: String,
      enum: ['Not Applied', 'Applied', 'Interviewing', 'Offer'],
      default: 'Not Applied'
    },
    link: { type: String, required: true },
    deadline: { type: String, default: 'Rolling' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Opportunity', opportunitySchema);