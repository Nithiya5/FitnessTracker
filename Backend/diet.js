const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new mongoose.Schema({
  trainerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainer', // Assuming you have a Trainer model
    required: true
  },
  mealName: String,
  foodItems: String,
  quantity: String,
  nutrition: String,
});

const dietPlanSchema = new Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  protein: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fat: { type: Number, required: true },
  description: { type: String, required: true },
  meals: [mealSchema]
}, { timestamps: true });


const DietPlan = mongoose.model('DietPlan', dietPlanSchema);
module.exports = DietPlan;