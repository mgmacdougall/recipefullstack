import React from 'react'
import RecipeCard from '../components/RecipeCard'
import NavBar from '../components/NavBar'
import RecipeForm from '../components/RecipeForm'
function Recipes({ data, isVisible, formVisibleHandler, recipeFormTitleChangeHandler, recipeTitleData, handleQuantityChangeHandler, quantityData, handleIngredientChange, ingredientData, instructionsHandler, instructionsData , handleRecipeFormSubmit}) {
    console.log('data.length:', data.length);
    return (
        <div>
            <NavBar />
            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>Recipes</h1>
            {data.length > 0 ? <RecipeCard data={data} /> : <h2>No recipes found</h2>}
            <RecipeForm recipeTitleHandler={recipeFormTitleChangeHandler} recipeTitleData={recipeTitleData} recipeQuanityHandler={handleQuantityChangeHandler} quantityData={quantityData} ingredientChangeHandler={handleIngredientChange} ingredientData={ingredientData} instructionsHandler={instructionsHandler} instructionsData={instructionsData} handleRecipeFormSubmit={handleRecipeFormSubmit}/>
        </div>
    )
}
    export default Recipes