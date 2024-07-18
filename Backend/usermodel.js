// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   role: {
//     type: String,
//     required: true
//   },
//   followers: [{ 
//     type: Schema.Types.ObjectId, 
//     ref: 'User' 
//   }],
//   followedTrainers: [{ 
//     type: Schema.Types.ObjectId, 
//     ref: 'User' 
//   }]
// });

// const User = mongoose.model('User', userSchema);
// module.exports = User;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['trainee', 'trainer'] // Ensure role is either 'trainee' or 'trainer'
  },
  followers: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  }],
  followedTrainers: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  }]
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

// Add indexes for performance
userSchema.index({ email: 1 });
userSchema.index({ role: 1 });

const User = mongoose.model('User', userSchema);
module.exports = User;
