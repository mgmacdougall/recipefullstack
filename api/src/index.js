import express from 'express';
import cors from 'cors';
import session from 'express-session';


import bodyParser from 'body-parser';

import logger from './utils/logger.js';
import morgan from 'morgan';
import router from './routes/recipes.js';
import substituteRouter from './routes/substitute.js'; // Uncomment this line to enable the substitute route
import favouritesRouter from './routes/favourites.js'; // Uncomment this line to enable the favourites route
import mealPlanRouter from './routes/mealPlanRouter.js'; // Uncomment this line to enable the meal plan 
import recipeListRouter from './routes/recipelistRouter.js';
import userRouter from './routes/user.js';

import { connectDB } from './utils/db.js'; // Uncomment this line to enable database connection

const app = express();
connectDB();
app.use(express.json());
app.use(cors())
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SECRET_KEY || 'defaultsecret',
  resave: false,
  saveUninitialized: false
}));
const PORT = 3000;


app.use('/recipes', router);
app.use('/mealplan', mealPlanRouter); // Use the meal plan controller for handling meal plan routes
app.use('/substitutes', substituteRouter); // Uncomment this line to enable the substitute route
app.use('/favourites', favouritesRouter)
app.use('/recipelist', recipeListRouter);
app.use('/user',userRouter);
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});