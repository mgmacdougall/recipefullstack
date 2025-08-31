import React from 'react'
import { logger } from '../utils/logger';


function RecipeForm({recipeTitleHandler, recipeTitleData, recipeQuanityHandler, quantityData, ingredientChangeHandler, ingredientData,instructionsHandler, instructionsData,handleRecipeFormSubmit}) {

    return (
        <div className="mb-6">
            <h2>Enter recipe</h2>
            <form className="max-w-sm mx-auto" onSubmit={handleRecipeFormSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input id="title" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="title" placeholder="Recipe Title" onChange={recipeTitleHandler} value={recipeTitleData} />
                </div>
                <div className="md:flex md:items-center mb-6">
                    <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                    <input id="quantity" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="quantity" placeholder="Quantity" onChange={recipeQuanityHandler} value={quantityData}/>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <label htmlFor="ingredient" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingredient</label>
                    <input id="ingredient" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="ingredient" placeholder="Ingredient" onChange={ingredientChangeHandler} value={ingredientData}/>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <label htmlFor="instructions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">instructions</label>
                    <textarea id="instructions" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={instructionsHandler} value={instructionsData} placeholder="Write your thoughts here..."></textarea>
                </div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">Add Ingredient</button>
                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Clear form</button>
            </form>

        </div>
    )
}

export default RecipeForm