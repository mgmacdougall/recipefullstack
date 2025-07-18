import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Favourite from '../../models/Favourite.js'


import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedData = JSON.parse(fs.readFileSync(path.join(__dirname, 'favourites.json'), 'utf8'));
const seedDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    await Favourite.deleteMany({});
    await Favourite.insertMany(seedData);
    console.log('✅ Seeded successfully');
    mongoose.disconnect();
};

seedDB();