import Axios from 'axios';
import React ,{ useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';

function App() {
  const [search, setSearch] = useState("chiken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "8b0dfee9";
  const APP_KEY = "fd465694afb9420f4e3a00c84c7cf3d4";
  
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(res.data.hits);
  }

  const onInputChange = e => {
    setSearch(e.target.value);
  }

  const onSearchClick = () => {
    getRecipes();
  }
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
      <div className="container">
        <Recipes recipes={recipes}  />
      </div>
    </div>
  );
}

export default App;
