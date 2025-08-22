import { Recipe } from '../models/Recipe.js'
import dotenv from 'dotenv';
dotenv.config();

import OpenAI from 'openai';

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

const getAllRecipes = async (req, res) => {
    console.log('Received a GET request on /recipes');
    try {
        let result = await Recipe.find({})
        return res.json({ data: result });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching all recipes' });
    }
}

const getSingleRecipeById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Recipe.findById(id.trim())
        return res.json(result)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }

}
const getOneRecipeAndDelete = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Recipe.findByIdAndDelete(id.trim())
        !result ? console.log('not found') : console.log('found')

        return res.json({ message: `Record ${id} deleted` })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const addNewRecipe = async (req, res) => {
    try {
        const recipeDetails = req.body; // Assuming the meal plan is sent in the request body   

        if (recipeDetails) {
            let newRecipe = new Recipe(recipeDetails)
            await newRecipe.save()
            return res.status(201).json({ message: 'Recipe saved successfully', newRecipe });
        } else {
            //throw new Error({message: "Error"})
            return res.status(500).json({ message: "error" });
        }           
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }   
}

// not functional yet
// This function is intended to provide recipe suggestions based on user input using OpenAI's API
const getSuggestion = async (req, res) => {
    const { prompt } = req.body;
    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: prompt },
            ],
        });

        res.json({ result: completion.choices[0].message.content });
    } catch (err) {
        console.error('OpenAI error:', err);
        res.status(500).json({ error: 'Failed to generate response' });
    }
}

const setFavouriteRecipe = async (req, res) => {
    const { id } = req.params;  

    try {
        const recipe = await Recipe.findById(id.trim());
        console.log(recipe)
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        recipe.favourite = !recipe.favourite; // Toggle the favourite status
        await recipe.save();

        return res.json({ message: `Recipe ${recipe.favourite ? 'added to' : 'removed from'} favourites`, recipe });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export default {
    getAllRecipes, getSingleRecipeById, getOneRecipeAndDelete, getSuggestion, addNewRecipe, setFavouriteRecipe
}