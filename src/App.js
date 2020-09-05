import React, { useEffect,useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () =>{
const APP_ID = '471f6f5d';
const APP_KEY = 'b8a1eb8739fc078e98e2116a54443059';
   const [recipes,setRecipes] = useState([]);
   const [search , setSearch] = useState("");
   const [query , setQuery] = useState('chicken');
 useEffect(()=>{
 nutrition();

 },[query]);
 const nutrition = async () => {
   const response = await fetch(` https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
   const data = await response.json();
 setRecipes(data.hits);
 };
const updateSearch = e =>{
setSearch(e.target.value);


};
const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  console.log(search);


};
  return (
    <div className="App">
   
    <form  onSubmit= {getSearch}   className="search-form">
      <input type="text"  className="search-bar" value= {search} onChange= {updateSearch} />
      <button type="submit" className="search-button">search</button>
    </form>
    <div className="recipes">
    {recipes.map ( recipe =>  (
      <Recipe
      key ={recipe.recipe.label}
     title= {recipe.recipe.label}
     calories = {recipe.recipe.calories}
     image = {recipe.recipe.image}
     time= {recipe.recipe.time}
     ingredients = {recipe.recipe.ingredients}
      
      />
    )) }
    </div>
    </div>
  );
}

export default App;
