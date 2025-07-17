import User from '../models/User.js'

const saveUser = async (req, res) => {
    console.log('Received a POST request on /mealplan');
    try {
        const userDetails = req.body; // Assuming the meal plan is sent in the request body
        res.status(201).json({ message: 'User saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving user', error: error.message });
    }
}

const deleteOneUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await User.findByIdAndDelete(id.trim())
        !result ? console.log("Not found") : console.log("found")
        return res.json({ message: "record deleted", result })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body; // Assuming the meal plan is sent in the request body
        console.log(username, email, password)
        let newUser = new User({ username, email, password })
        await newUser.save()
        res.status(201).json({ message: 'User saved successfully', newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error saving user', error: error.message });
    }

}

const getUsers = async (req, res) => {
    try {
        const result = await User.find({})
        res.send(result)
    } catch (e) {
        res.json({ "message": e.message })
    }
}
export default {
    saveUser, createUser, getUsers, deleteOneUserById
}   