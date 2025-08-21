import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import './RecipeCard.css'

function RecipeCard({ data }) {

    return (
        <div className="recipe-container">
            {
                data.map((recipe) => (
                    <div key={recipe._id} className="recipe-card">
                        <h2 className='text-base text-5xl font-serif font-bold'>{recipe.title}</h2>
                        <p className='text-base text-gray-700 leading-relaxed font-serif p-4'>Hard coded for now</p>
                        <h3 className='text-base text-3xl font-serif font-bold'>Ingredients:</h3>
                        <ul>
                            {recipe.ingredients.map(ingredient => <li key={ingredient._id} >{ingredient.name} {ingredient.quantity}</li>)}
                        </ul>         
                    </div>
                ))
            }
        </div>
    )
}

export default RecipeCard