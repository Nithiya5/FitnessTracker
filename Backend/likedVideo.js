const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likedVideosSchema = new Schema({
  traineeId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  videos: [{
    type: Schema.Types.ObjectId,
    ref: 'Video'
  }]
}, { timestamps: true });

const LikedVideos = mongoose.model('LikedVideos', likedVideosSchema);
module.exports = LikedVideos;
