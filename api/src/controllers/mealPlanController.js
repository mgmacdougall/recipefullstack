const saveMealPlan = async (req, res) => {
    console.log('Received a POST request on /mealplan');
    try {
        const mealPlan = req.body; // Assuming the meal plan is sent in the request body
        console.log('Meal Plan:', mealPlan);
        res.status(201).json({ message: 'Meal plan saved successfully', mealPlan });
    } catch (error) {
        res.status(500).json({ message: 'Error saving meal plan', error: error.message });
    }
}   

export default {
    saveMealPlan
}   