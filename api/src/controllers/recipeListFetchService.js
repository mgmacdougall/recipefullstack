import axios from 'axios';

 const fetchSingleRecipe = async (type = 'pasta') => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=1&apiKey=${process.env.SPOONTACULRAR_API_KEY}`;
  const response = await axios.get(url);
  return response.data.meals?.[0]; // return first match
};

 const fetchASIngleRandomRecipe = async () => {
 //https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey
  const url = `https://api.spoonacular.com/recipes/random?number=1&apiKey=${process.env.SPOONTACULRAR_API_KEY}`;
  const response = await axios.get(url);
  console.log("response from fetchASIngleRandomRecipe", response.data)
  return response.data;
};


export { fetchSingleRecipe, fetchASIngleRandomRecipe };