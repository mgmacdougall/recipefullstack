import express from 'express';
const router = express.Router();
import logger from '../utils/logger.js';
import substituteController from '../controllers/substituteController.js';

router.get('/', (req, res) => {
    logger.info('Received a Get request on /substitutes');
    substituteController.getSubstitutes(req, res);
});


export default router;