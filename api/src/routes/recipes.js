import express from 'express';
import logger from '../utils/logger.js';

const router = express.Router();
import recipeController from '../controllers/recipeController.js';



router.get('/', (req, res) => {
    logger.info('Received a GET request on /recipes');
    recipeController.getAllRecipes(req, res);
});

router.get('/:id', async (req, res) => {
    recipeController.getSingleRecipeById(req, res)
})

router.delete('/delete/:id', async (req, res) => {
    recipeController.getOneRecipeAndDelete(req, res);
})

router.post('/add', async (req, res) => {
    recipeController.addNewRecipe(req, res);
})

router.post('/suggestion', async (req, res) => {
    recipeController.getSuggestion(req, res);
})

export default router;