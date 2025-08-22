import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: [
    {
      name: { type: String, required: true },
      quantity: { type: String }, // e.g., "2 cups", "1 tbsp"
    },
  ],
  instructions: {
    type: String,
    required: true,
  },
  prepTime: {
    type: Number, // in minutes
    default: 0,
  },
  cookTime: {
    type: Number, // in minutes
    default: 0,
  },
  tags: [String], // e.g., ["vegan", "gluten-free"]
  createdAt: {
    type: Date,
    default: Date.now,
  },
  favourite: {
    type: Boolean,
    default: false,
  },
});
const Recipe = mongoose.model('Recipe', recipeSchema);
export {
  Recipe,
  recipeSchema
};