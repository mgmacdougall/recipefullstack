import React from 'react'
import RecipeCard from '../components/RecipeCard'
import NavBar from '../components/NavBar'
function Recipes({ data }) {

    return (
        <div>
            <NavBar />
            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>Recipes</h1>
            {data.length > 0 ? <RecipeCard data={data} /> : <h2>No recipes found</h2>}
        </div>
    )
}

export default Recipes