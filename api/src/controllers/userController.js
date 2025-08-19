import User from '../models/User.js'
import bcrypt from 'bcrypt';
const saveUser = async (req, res) => {
    console.log('Received a POST request on /mealplan');
    try {
        const userDetails = req.body; // Assuming the meal plan is sent in the request body
        if (userDetails) {
            return res.status(201).json({ message: 'User saved successfully' });

        } else {
            //throw new Error({message: "Error"})
            return res.status(500).json({ message: "error" });
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
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
        if (username) {

            let newUser = new User({ username, email, password })
            await newUser.save()
            return res.status(201).json({ message: 'User saved successfully', newUser });
        } else {
            throw new Error({ message: "Error encountered" })
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error saving user', error: error.message });
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

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    } else if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    } else if (!email.includes('@')) {
        return res.status(400).json({ message: "Invalid email format" });
    } else if (!username.match(/^[a-zA-Z0-9]+$/)) {
        return res.status(400).json({ message: "Username can only contain letters and numbers" });
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        return res.status(400).json({ message: "Invalid email format" });
    } else if ((await User.find({ username })).length > 0) {
        return res.status(400).json({ message: "Username already exists" });
    } else if ((await User.find({ email })).length > 0) {
        return res.status(400).json({ message: "Email already exists" });
    } else if ((await User.find({ username, email })).length > 0) {
        return res.status(400).json({ message: "Username and email already exist" });
    } else if ((await User.find({ username, email, hashedPassword })).length > 0) {
        return res.status(400).json({ message: "Username, email, and password already exist" });
    } else if (await User.find({ username, email, hashedPassword }).length > 0) {
        return res.status(400).json({ message: "Username, email, and password already exist" });
    } else {
        try {
            await User.create({ username, email, password: hashedPassword });
            res.status(200).json({ message: { username, email, hashedPassword } });
        } catch (error) {
            return res.status(500).json({ message: "Error creating user", error: error.message });
        }
    }
}

const logInUser = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.find({ username })

    if (!user || user.length === 0) {
        return res.status(400).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user[0].password);

    if (user && isPasswordValid) {
        req.session.user = user[0];
        return res.status(200).json({ message: "Login successful", user: user[0] });
    }else{
        return res.status(400).json({ message: "Invalid username or password" });
    }
}

const logoutUser = (req, res) => {
    req.session.destroy((err) => {
        if (err) {  
            return res.status(500).json({ message: "Error logging out" });
        }
        res.clearCookie('connect.sid'); // Clear the session cookie
        res.status(200).json({ message: "Logout successful" });
    });
}
export default {
    saveUser, createUser, getUsers, deleteOneUserById, registerUser, logInUser, logoutUser
}   