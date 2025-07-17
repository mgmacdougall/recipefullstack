// models/MealPlan.js
const mongoose = require('mongoose');

const mealPlanSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // links to the User model
    required: true,
  },
  weekStart: {
    type: Date,
    required: true,
  },
  days: [
    {
      date: { type: Date, required: true },
      meals: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Recipe', // links to your Recipe model
        },
      ],
    },
  ],
  notes: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('MealPlan', mealPlanSchema);