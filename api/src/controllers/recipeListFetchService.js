import axios from 'axios';

 const fetchMealByName = async (name = 'Arrabiata') => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(name)}`;
  const response = await axios.get(url);
  return response.data.meals?.[0]; // return first match
};

 const fetchRandomMeal = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const response = await axios.get(url);
  return response.data.meals?.[0];
};


export default { fetchMealByName, fetchRandomMeal };