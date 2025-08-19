import MealPlan from '../models/MealPlan.js'
import logger from '../utils/logger.js';

const saveMealPlan = async (req, res) => {
    try {
        const mealPlan = req.body; // Assuming the meal plan is sent in the request body
        const { id } = req.params;

        if (!mealPlan || !id) {
            return res.status(400).json({ message: 'Meal plan or user ID is missing' });
        }
        logger.info(`Saving meal plan for user ID: ${id}`);
        mealPlan.user = id; // Associate the meal plan with the user ID

        mealPlan.weekStart = new Date(mealPlan.weekStart)
        mealPlan.days[0].date = new Date(mealPlan.days[0].date)
        console.log(mealPlan)
        const userMealPlan = new MealPlan(mealPlan)
        await userMealPlan.save(mealPlan)
        res.status(201).json({ message: 'Meal plan saved successfully', mealPlan });
    } catch (error) {
        res.status(500).json({ message: 'Error saving meal plan', error: error.message });
    }
}

const getAllMealPlans = async (req, res) => {

    try {
        const userMealPlan = await MealPlan.find({})
        if (!userMealPlan) {
            res.send({ message: "No user plans located." })
        }
        res.send(userMealPlan)
    } catch (e) {
        res.send({ "message": e.message })
    }

}

const getMealPlanById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await MealPlan.findById(id);
        if (!result) {
           return res.status(400).send({ "message": "No meal plan found" })
        }
        return res.send(result)
    } catch (e) {
        return res.send({ "message": e.message })
    }


}
export default {
    saveMealPlan, getAllMealPlans, getMealPlanById
}   