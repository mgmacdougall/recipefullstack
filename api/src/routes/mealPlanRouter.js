import express from 'express';
import logger from '../utils/logger.js';
import mealPlanController from '../controllers/mealPlanController.js';
const router = express.Router();

router.post('/', (req, res) => {
    logger.info('Received a POST request on /mealplan');
    mealPlanController.saveMealPlan(req, res);
});

router.get('/', (req, res) => {
    logger.info('Received a GET request on /mealplan');
    mealPlanController.getAllMealPlans(req, res);
});

router.get('/:id', (req, res) => {
    logger.info('Received a GET request on /mealplan');
    mealPlanController.getMealPlanById(req, res);
});
export default router;