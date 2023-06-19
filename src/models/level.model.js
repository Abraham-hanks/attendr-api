const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Level', levelSchema);
