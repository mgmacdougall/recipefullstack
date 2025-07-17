import express from 'express';
import logger from '../utils/logger.js';
const router = express.Router();
import favoritesController from '../controllers/favoritesController.js';

router.get("/", favoritesController.getFavourties)
router.post('/save', favoritesController.setFavourites)
router.get('/:id', favoritesController.getFavourite)
router.delete('/delete/:id', favoritesController.deleteOneFavourite)

export default router;