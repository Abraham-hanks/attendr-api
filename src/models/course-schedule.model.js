const mongoose = require('mongoose');

const courseScheduleSchema = new mongoose.Schema({
  course_id: {
    type: String,
    required: true,
  },
  week_day: {
    type: String,
    required: true,
    enum: [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
    ],
  },
  start_time: {
    type: Date,
    required: true,
  },
  end_time: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('CourseSchedule', courseScheduleSchema);
