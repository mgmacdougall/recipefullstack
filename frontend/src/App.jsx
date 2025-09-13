import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { logger } from './utils/logger'
import './App.css'

import Home from './pages/Home'
import Recipes from './pages/Recipes'
import About from './pages/About'
import RecipeBox from './pages/RecipeBox'
import MealPlanner from './pages/MealPlanner'
function App() {
  const [recipes, setRecipes] = useState([])
  const [refreshKey, setRefreshKey] = useState(0);

  const updateRecipes = (data) => {
    setRecipes(data);
    setRefreshKey(oldKey => oldKey + 1); // Increment the refresh key to trigger re-render
  }

  const handleRecipeFormSubmit = ({ title, instructions }) => {
    if (!title || !instructions) {
      logger.warn('Please fill in all required fields.');
      return;
    }
    const newRecipe = {
      title: title,
      instructions: instructions
    };
    fetch('http://localhost:3000/recipes/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    })
      .then(response => response.json())
      .then(data => {
        logger.info('Success:', data);
        setRecipes(prev => [...prev, data.newRecipe]);
      })
      .catch((error) => {
        logger.error('Error:', error);
      });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes data={recipes} handleRecipeFormSubmit={handleRecipeFormSubmit} updateRecipes={updateRecipes} />} />
        <Route path="/recipe-box" element={<RecipeBox />} />
        <Route path="/meal-planner" element={<MealPlanner />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </>
  )
}

export default App
