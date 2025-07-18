import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import MealPlan from '../../models/MealPlan.js'


import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedData = JSON.parse(fs.readFileSync(path.join(__dirname, 'mealPlan.json'), 'utf8'));
const seedDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    await MealPlan.deleteMany({});
    await MealPlan.insertMany(seedData);
    console.log('✅ Seeded successfully');
    mongoose.disconnect();
};

seedDB();