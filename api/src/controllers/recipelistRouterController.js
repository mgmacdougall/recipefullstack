import logger from '../utils/logger.js';
import axios from 'axios';
import {fetchSingleRecipe, fetchASIngleRandomRecipe} from '../controllers/recipeListFetchService.js';

const getNewRecipeList = async (req, res) => {
    try {
        // Spoontacular API Key from environment variables
        const apiKey = process.env.SPOONTACULRAR_API_KEY;
        if (!apiKey) {
            throw new Error('Spoonacular API key is not set in environment variables');
        }else {
            logger.info('Spoonacular API key found');
            try{
                const response =  await fetchASIngleRandomRecipe();
                console.log("response from spoontacular api count", response.recipes.length)
                return response;
            }catch(error){
                logger.error('Error fetching data from Spoonacular API:', error);
            }
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }

}


export default { getNewRecipeList }