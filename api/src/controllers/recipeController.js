import { Recipe } from '../models/Recipe.js'


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

export default {
    getAllRecipes, getSingleRecipeById, getOneRecipeAndDelete
}