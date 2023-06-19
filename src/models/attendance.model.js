const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  course_id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'ongoing',
    enum: ['ongoing', 'closed'],
  },
  count: {
    type: Number,
    default: 0,
  },
  total_classes: {
    type: Number,
    required: true
  },
  start_date: {
    type: Date,
  },
  end_date: {
    type: Date,
  },
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);
