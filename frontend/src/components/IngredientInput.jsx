import { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/useDebounce';
import axios from 'axios';

function IngredientInput({ data, textVal, clickHandler, onDebouncedChange }) {
  const [localInput, setLocalInput] = useState(textVal);
  const debouncedInput = useDebounce(localInput, 300);

  useEffect(() => {
    onDebouncedChange(debouncedInput);
  }, [debouncedInput, onDebouncedChange]);

  const handleInputChange = (e) => {
    setLocalInput(e.target.value);
  }

  const handleInputClear = () => {
    setLocalInput('');
  }

  const handleClick = (e, value) => {
    e.preventDefault();
    clickHandler(e, value);
    handleInputClear();
  }

  const fetchIngredients = async (query) => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/food/ingredients/search?query=${query}&number=5&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);

      return response.data.results;
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      return [];
    }
  }


  return (
    <div>
      <form className="max-w-md mx-auto my-4">
        <label className='block mb-2 text-sm font-medium text-gray-700"' htmlFor="ingredient">Ingredient:</label>
        <input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="ingredient" name="ingredient" placeholder="Enter an ingredient" value={localInput} onChange={handleInputChange} required />
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500" onClick={(e) => handleClick(e, 'value')} >Add Ingredient</button>
      </form>
      <div>
        {/* <button onClick={}></button> */}
      </div>
      {/* <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500" type="submit">Search for Ingredients</button>*/}
    </div>
  )
}

export default IngredientInput