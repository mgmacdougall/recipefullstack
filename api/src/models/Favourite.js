import mongoose from 'mongoose';
import {recipeSchema} from './Recipe.js';

const favouritesSchema = new mongoose.Schema({
    recipeCollectionName: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    image: {
        type: String,
        require: true,
        trim: true
    },
    external_url: {
        type: String,
        require: true,
        trim: true
    },
    details: [recipeSchema]
});

export default  mongoose.model('Favourite', favouritesSchema);