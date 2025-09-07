import express from 'express';
import logger from '../utils/logger.js';
import responseData from '../controllers/sample_recipe_response.js';
const recipeListRouter = express.Router();
import recipeListController from '../controllers/recipelistRouterController.js';
/** Get a list of recipes from the spoontacular api via the getNewRecipeList fetch service */
recipeListRouter.get('/', async (req, res) => {
    logger.info('Received a GET request on /recipelist');
    let _data;
    if (process.env.ENV_TYPE === "DEV") {
        logger.info('in dev section on  /recipelist');
        let tempResult = responseData;
        _data = tempResult.data;
        logger.info('Successfully retrieved recipe list');  
        return res.status(200).json({ data: _data  });
    }

    if (process.env.ENV_TYPE === "PROD") {
        logger.info('in prod section on  /recipelist');
        let tempResult = await recipeListController.getNewRecipeList(req, res);
        logger.log(tempResult);
        _data = tempResult.data;
        console.log(">>", _data);

        if (_data) {
            logger.info('Successfully retrieved recipe list');
            console.log(_data);
            return res.status(200).json(_data);
        } else {
            logger.error('Failed to retrieve recipe list');
            console.log(_data);
            return res.status(500).json({ error: 'Failed to retrieve recipe list' });
        }

    }

    return res.send(_data)


});


export default recipeListRouter;