import mongoose from 'mongoose';

const mealPlanSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  weekStart: {
    type: Date,
    required: true,
  },
  days: [
    {
      date: { type: Date, required: true },
      meals: [{

        title: {
          type: String,
          required: false
        },
      }
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

const MealPlan = mongoose.model('MealPlan', mealPlanSchema);
export default MealPlan;