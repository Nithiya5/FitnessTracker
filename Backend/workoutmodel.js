const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  trainerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainer', // Assuming you have a Trainer model
    required: true
  },
  workoutName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
