import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import './RecipeCard.css'
import RecipeCardFavorite from './RecipeCardFavorite.jsx';
function RecipeCard({ data, recipeFavouriteHandler }) {
    console.info('RecipeCard data:', data);
    return (
        <div className="recipe-container">
            {
                data.map((recipe) => (
                    <div key={recipe._id} className="recipe-card" id={recipe._id}>
                        <h2 className='text-base text-5xl font-serif font-bold'>{recipe.title}</h2>
                        <RecipeCardFavorite handler={recipeFavouriteHandler} favouriteId={recipe._id}/>
                    
                        <p className={`activity-toggle ${recipe.isFavorite?'active':''}`}>{recipe.favourite? "favourite":"not favorite"}</p>
                        <p className='text-base text-gray-700 leading-relaxed font-serif p-4'>{recipe.quantity}</p>
                        <h3 className='text-base text-3xl font-serif font-bold'>Ingredients:</h3>
                        <ul>
                            {recipe.ingredients.map(ingredient => <li key={ingredient._id} >{ingredient.name} {ingredient.quantity} </li>)}
                        </ul>         
                    </div>
                ))
            }
        </div>
    )
}

export default RecipeCard