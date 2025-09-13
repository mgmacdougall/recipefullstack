import { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import NavBar from '../components/NavBar'
import RecipeForm from '../components/RecipeForm'
function Recipes({ data, updateRecipes, handleRecipeFormSubmit }) {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {

        let ignore = false;
        fetch(`http://localhost:3000/recipes?_=${Date.now()}`, {
            method: 'GET',
            cache: 'no-store' // or 'no-cache'
        })
            .then(response => response.json())
            .then(data => {
                console.log('Fetched recipes:', { data });
                if (!ignore) setRecipes(data.data);
                console.log("Data", { data })
                updateRecipes(recipes);
            })
            .catch(error => logger.error('Error fetching recipes:', error))
        return () => { ignore = true; }
    }, [])

    return (
        <div>
            <NavBar />
            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>Recipes</h1>
            <RecipeForm handleRecipeFormSubmit={handleRecipeFormSubmit} />
            {data.length > 0 ? <RecipeCard data={data} /> : <h2>No recipes found</h2>}
        </div>
    )
}
export default Recipes