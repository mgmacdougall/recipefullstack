import Favourite from '../models/Favourite.js'
import { Recipe } from '../models/Recipe.js'

const getFavourties = async (req, res) => {
    console.log('Received a GET request on /favorites');
    try {
        let result = await Favourite.find({})
        return res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching favorite recipes' });
    }
}

const deleteOneFavourite = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Favourite.findByIdAndDelete(id.trim())
        !result ? console.log("Not found") : console.log("found")
        return res.json({ message: "record deleted", id })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}


const getFavourite = async (req, res) => {
    const { id } = req.params;
    try {
        let result = await Favourite.findById(id);
        return res.json({ data: result })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }

}

const setFavourites = async (req, res) => {

    const { recipeCollectionName, description, image, external_url, details } = req.body;

    const recipesList = details.map(recipe => new Recipe(recipe))
    try {
        let newFav = new Favourite({
            recipeCollectionName: recipeCollectionName,
            description: description,
            image: image,
            external_url: external_url,
            details: recipesList
        })
        console.log(newFav)
        let response = await newFav.save();
        return res.json(response)
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
}

export default {
    getFavourties, setFavourites, getFavourite, deleteOneFavourite
}