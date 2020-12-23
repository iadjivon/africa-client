import React, {useState} from 'react';
import Display from './components/Visualization';
import data from './components/africa.geo.json';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Recipes from './components/Recipe'


function App() {

//Variable to hold url 
   const url = "http://localhost:3000"
  const [property, setProperty] = React.useState([]);

// state to hold recipes 
const [recipes, setRecipes] = React.useState([])

// Empty Recipes

const emptyRecipe = {
  name: "",
  cookTime: 0,
  description: "",
  servingSize: 0,
  ingredients: "",
  instructions: "", 
  recipesCompleted: Boolean

}

// selected state, this will represent the edited recipe
const [selectedRecipe, setSelectedRecipe] = React.useState(emptyRecipe)
// Function to get recipes via API
const getRecipes = () =>{
  fetch(url + "/africa/")
  .then(response => response.json()
  .then(data => {
    setRecipes(data)
  }))
}
// useEffect to do initial call of getRecipes
React.useEffect(()=>{
  getRecipes()
}, [])






  // const svgRef = useRef();
  // useEffect(() => {
  //   const svg = select(svgRef.current)
  // }, []);












  

  return (
  <div>
  <h1> African Recipes </h1>
  <hr />
  <Link to="/">
        <button>Home </button>
  </Link>
  <Link to="/recipes">
        <button>Explore Recipes </button>
  </Link>


  <main> 
  <Switch>
        <Route exact path ="/" render={ () => 
          <Display data={data} property={property}/> }/>

        <Route
            exact
            path="/recipes"
            render={(rp) => (
              <Recipes recipes= {recipes} {...rp} label="create" recipe={{emptyRecipe}} />
            )}
          />  



</Switch>
      </main>

</div>)
  
}

export default App;
