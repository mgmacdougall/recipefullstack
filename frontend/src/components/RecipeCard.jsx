import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import './RecipeCard.css'
function RecipeCard({ data }) {

    return (
        <div className="recipe-container">
            {
                data.map((recipe) => (

                    <div key={uuidv4()} className="recipe-card">
                        <h2 className="recipe-title">{recipe.title}</h2>
                        <div className="recipe-ingredients">
                            <h3>Instructions:</h3>
                            <p>{recipe.instructions}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default RecipeCard