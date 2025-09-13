import React from 'react'

function IngredientListSearchButton({ buttonHandler }) {
    return (
        <div className='max-w-md mx-auto my-4'>
            <h2>Search for Recipe with matches</h2>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500" onClick={buttonHandler}>Search</button>
        </div>
    )
}

export default IngredientListSearchButton