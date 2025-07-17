import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Recipe } from '../../models/Recipe.js'

import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedData = JSON.parse(fs.readFileSync(path.join(__dirname, 'recipes.json'), 'utf8'));

const seedDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    await Recipe.deleteMany({});
    await Recipe.insertMany(seedData);
    console.log('✅ Seeded successfully');
    mongoose.disconnect();
};

seedDB();