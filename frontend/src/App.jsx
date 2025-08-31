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

  const [ingredients, setIngredients] = useState([])
  const [inputString, setInputString] = useState("")
  const [isRecipeFormVisible, setIsRecipeFormVisible] = useState(false)


  const [recipeTitle, setRecipeTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [recipeIngredient, setRecipeIngredient] = useState('');
  const [instructions, setRecipeInstructionss] = useState('');
 

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
      .catch(error => logger.error('Error fetching recipes:', error))
  }, [])

  const IngredientInputHandler = e => setInputString(e.target.value)
  const IngredientsClickHandler = (e) => {
    e.preventDefault();
    logger.info(e.target.elements.ingredient.value)
    setIngredients(prev => [...prev, e.target.elements.ingredient.value])
    logger.info(ingredients)
  }

  const toggleRecipeForm = () => {
    setIsRecipeFormVisible(!isRecipeFormVisible);
  };

  const handleRecipeTitleChange = (e) => {
    setRecipeTitle(e.target.value);
  };


  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }

  const handleIngredientChange = (e) => {
    setRecipeIngredient(e.target.value);
  }

  const handleInstructionsChange = (e) => {
    setRecipeInstructionss(e.target.value);
  }

  const handleRecipeFormSubmit = (e) => {
    e.preventDefault();
    // hardcoded values for prepTime, cookTime, servings, and image
    // In a real application, you would get these values from the form inputs
    // or generate them as needed
    // You might also want to add validation and error handling here
    // For simplicity, we'll skip those steps in this example
    // Create a new recipe object
    logger.info('Submitting recipe:', { recipeTitle, quantity, recipeIngredient, instructions });
    if (!recipeTitle || !quantity || !instructions) {
      logger.warn('Please fill in all required fields.');
      return;
    }
    const newRecipe = {
      title: recipeTitle,
      quantity: quantity,
      ingredients: [{ name: "example", quantity: 2 }],
      instructions: instructions,
      prepTime: 30,
      cookTime: 60,
      servings: 4,
      image: 'https://via.placeholder.com/150'
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
    // Here you would typically send the newRecipe to your backend API
    // For now, we'll just update the state to include the new recipe
    // You can use fetch or axios to send a POST request to your backend
    // For example:
    //setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
    setRecipeTitle('');
    setQuantity('');
    setRecipeIngredient('');
    setRecipeInstructionss('');
  };


  const favouriteRecipeHandler = (e) => {
    const { id } = e.target.dataset;
    fetch(`http://localhost:3000/recipes/favourite/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favourite: true }),
    })
      .then(response => response.json())
      .then(data => {
        const{ recipe } = data;
  
        setRecipes(prevRecipes  => {
          logger.info('Previous Recipes:', prevRecipes);
          const updated = prevRecipes.map(r => r._id === recipe._id ? recipe : r);
          logger.info('Updated Recipes:', updated);
          
          return updated;
        })
      })
  
      .catch((error) => {
        logger.error('Error:', error);
      });
   

  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes data={recipes} isVisible={isRecipeFormVisible} formVisibleHandler={toggleRecipeForm} recipeFormTitleChangeHandler={handleRecipeTitleChange} recipeTitleData={recipeTitle} handleQuantityChangeHandler={handleQuantityChange} quantityData={quantity} handleIngredientChange={handleIngredientChange} ingredientData={recipeIngredient} instructionsHandler={handleInstructionsChange} instructionsData={instructions} handleRecipeFormSubmit={handleRecipeFormSubmit} recipeFavouriteHandler={favouriteRecipeHandler} />} />
        <Route path="/recipe-box" element={<RecipeBox />} />
        <Route path="/meal-planner" element={<MealPlanner handler={IngredientInputHandler} submitHandler={IngredientsClickHandler} data={ingredients} inputString={inputString} />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </>
  )
}

export default App
