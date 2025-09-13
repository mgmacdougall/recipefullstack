import React from 'react'
import NavBar from '../components/NavBar'


function MealPlanner() {
    return (
        <div>
            <NavBar />
            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>Meal Planner</h1>
            <p className='text-base text-gray-700 leading-relaxed font-serif p-4'>Plan your next meal by entering a main ingredient</p>
        </div>
    )
}

export default MealPlanner