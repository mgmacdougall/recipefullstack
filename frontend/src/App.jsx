import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Recipes from './pages/Recipes'
import About from './pages/About'
import RecipeBox from './pages/RecipeBox'
import MealPlanner from './pages/MealPlanner'
function App() {
  const [recipes, setRecipes] = useState([])

  const [ingredients, setIngredients] = useState([])
  const [inputString, setInputString] = useState("")
  // Fetch recipes from the backend
  // Use useEffect to run the fetch when the component mounts
  // Use fetch to get the data from the backend
  // Use setRecipes to update the state with the fetched data
  // Use setLoading to update the loading state to false after fetching data
  // Handle errors with a catch block
  // Display a loading message while the data is being fetched
  useEffect(() => {
    fetch('http://localhost:3000/recipes')
      .then(response => response.json())
      .then(data => {
        setRecipes(data.data);
      })
      .catch(error => console.error('Error fetching recipes:', error))
  }, [])

  const IngredientInputHandler = e => setInputString(e.target.value)
  const IngredientsClickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.elements.ingredient.value)
    setIngredients(prev => [...prev, e.target.elements.ingredient.value])
    console.log(ingredients)
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes data={recipes} />} />
        <Route path="/recipe-box" element={<RecipeBox />} />
        <Route path="/meal-planner" element={<MealPlanner handler={IngredientInputHandler} submitHandler={IngredientsClickHandler} data={ingredients} inputString={inputString} />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </>
  )
}

export default App
