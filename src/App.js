import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';



const App = () => {

  const APP_ID = 'b3867445';
  const APP_KEY = 'b533a7497c9c7246334e3282dc2fe9b7';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

 const getSearch = e => {
   e.preventDefault();
   setQuery(search);
   setSearch('');
 };

  return(
    <div className="App">
      <div id="header">
          <h1 id="h1-text">Search recipies</h1>
          <h2>Using an API from <a href="https://www.edamam.com/">edamam.com</a></h2>
      </div>
      <form onSubmit={getSearch} className="search-form">
      <i className="fas fa-utensils fa-2x icon"></i>
        <input 
         className="search-bar" 
         type="text" 
         value={search} 
         onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
            <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            dietLabels={recipe.recipe.dietLabels}
            />
        ))}
      </div>
    </div>
  );
}


export default App;
