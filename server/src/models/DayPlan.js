const mongoose = require('mongoose');

const taskItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  track: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const dayPlanSchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true
    },
    tasks: [taskItemSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model('DayPlan', dayPlanSchema);