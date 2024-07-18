const mongoose = require('mongoose');
const videoSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: true
    },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' // Assuming you have a Trainer model for uploadedBy field
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  // Create the Video model
  const Video = mongoose.model('Video', videoSchema);
  
  // Export the Video model
  module.exports = Video;
