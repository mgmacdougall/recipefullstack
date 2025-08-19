import express from 'express';
import logger from '../utils/logger.js';
import userController from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
    userController.getUsers(req, res);
});

userRouter.get('/:id', async (req, res) => {
    userController.saveUser(req, res)
});

userRouter.post('/create', async (req, res) => {
    userController.createUser(req, res);
})

userRouter.delete("/delete/:id", async (req, res) => {
    userController.deleteOneUserById(req, res);
})

userRouter.post('/register', async (req, res) => {
    userController.registerUser(req, res);
})

userRouter.post('/login', async (req, res) => {
    userController.logInUser(req, res);
})

userRouter.post('/logout', async (req, res) => {
    userController.logoutUser(req, res);
});


export default userRouter;