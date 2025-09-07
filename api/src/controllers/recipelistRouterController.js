import logger from '../utils/logger.js';
import axios from 'axios';

const getNewRecipeList = async (req, res) => {
    try {
        // Spoontacular API Key from environment variables
        const apiKey = process.env.SPOONTACULRAR_API_KEY;
        if (!apiKey) {
            throw new Error('Spoonacular API key is not set in environment variables');
        }else {
            logger.info('Spoonacular API key found');
            //https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=
            try{
               const response =  await axios.get('https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=' + apiKey)
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