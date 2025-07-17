import React from 'react'

function IngredientInput({data,textVal, inputHandler, clickHandler}) {
  return (
    <div>
        <form onSubmit={e=>clickHandler(e)}>
            <label className='block mb-2 text-sm font-medium text-gray-700"' htmlFor="ingredient">Ingredient:</label>
            <input  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="ingredient" name="ingredient" placeholder="Enter an ingredient" value={textVal}  onChange={e=>{inputHandler(e)}}required  />
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500" type="submit">Add Ingredient</button>
        </form>
    </div>
  )
}

export default IngredientInput