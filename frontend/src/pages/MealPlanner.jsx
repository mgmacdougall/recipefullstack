import {React, useState} from 'react'
import NavBar from '../components/NavBar'
import IngredientInput from '../components/IngredientInput'
import IngredientList from '../components/IngredientList'
import Substitution from '../components/Substitution'
function MealPlanner({data, inputString,handler,submitHandler}) {
    return (
        <div>
            <NavBar />
            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>Meal Planner</h1>
            <p className='text-base text-gray-700 leading-relaxed font-serif p-4'>Plan your next meal by entering a main ingredient</p>
            <IngredientInput inputData={data} inputHandler={handler} textVal={inputString} clickHandler={submitHandler}/>
            {data.length>0? <IngredientList listItems={data}/>: null}
            {console.log(data.length>0)}
            <Substitution />
        </div>
    )
}

export default MealPlanner