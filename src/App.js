import React, {useState} from 'react';
import Map from './components/Mapping';
import data from './components/africa.geo.json';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Display from './components/Display';
import Form from './components/Form';
import Accordion from './components/Accordion'
// import Header from './components/Header'

// const decoratedOnClick = useAccordionToggle(eventKey, onClick);


function App() {

//Variable to hold url 
   const url = "https://afri-recipes.herokuapp.com"
  const [property, setProperty] = React.useState([]);

// state to hold recipes 
const [recipes, setRecipes] = React.useState([])

// Empty Recipes

const emptyRecipe = ({
  countryName: "",
    image: "",
    recipeName: "",
    cookTime: 0,
    description: "",
    servingSize: 0,
    ingredients: "",
    instructions: "", 
    recipesCompleted: Boolean
 
  
})

// selected state, this will represent the edited recipe
const [selectedRecipe, setSelectedRecipe] = React.useState(emptyRecipe)
// Function to get recipes via API
const getRecipes = () =>{
  fetch(url + "/recipe/")
  .then(response => response.json()
  .then(data => {
    setRecipes(data)
  }))
}
// useEffect to do initial call of getRecipes
React.useEffect(()=>{
  getRecipes()
}, [])

//handle create to create recipes
const handleCreate = (newRecipe) =>{
    fetch(url + "/recipe", {
      method: "post",
      headers: {
        "Content-type": "application/json"
      }, 
      body: JSON.stringify(newRecipe)   
    }).then(response => {
      getRecipes()
    })
  }


//handleUpdate for when you use the update form 
const handleUpdate = (recipe)=>{
      fetch(url + "/recipe/" + recipe._id, {
        method:"put",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(recipe)
      })
      .then(response => getRecipes());
    };


//set the state when you select a recipe to edit 
 const selectRecipe = (recipe) => {
  setSelectedRecipe(recipe);
}

// Function to delete dog 
  const deleteRecipe = (recipe) => {
    fetch(url + "/recipe/" + recipe._id, {
      method: "delete",
    }).then((response) => getRecipes())
  }





  

  return (
  <div>

{/* THIS IS THE HEADER FOR ALL PAGES */}
  <header> 
    <div> 
  <h1 className="headers-h1"> Fufu </h1>
  </div>

  <div className="buttons">
  <Link to="/">
        <button className="headers">Home </button>
  </Link>
  <Link to="/recipes">
        <button className="headers">Explore Recipes </button>
  </Link>
  <Link to="/create">
        <button className="headers">Add New Recipes </button>
  </Link>
  </div>

  </header>


  <main> 
  <Switch>
        <Route exact path ="/" render={() => 
          <Map data={data} property={property}/> 
           }/>

           <Route exact path ="/" render ={ ()=> 
           <Accordion />} />

        <Route
            exact
            path="/recipes"
            render={(rp) => (
              <Display selectRecipe={selectRecipe}
              {...rp} recipes= {recipes} 
              deleteRecipe={deleteRecipe}
                 />
                 
            )}
          />  

      <Route
            exact
            path="/create"
            render={(rp) => (
              <Form {...rp} label="Create" recipe={emptyRecipe} handleSubmit={handleCreate} />
            )}
          />

        <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form {...rp} label="Update" 
              recipe={selectedRecipe} 
              handleSubmit={handleUpdate} />
            )}
          />

</Switch>         
</main>

{/* THIS IS THE FOOTER SECTION */}
<footer className="footer">
  <div className="footer1">
  <h1 className="footerh1"> Resources</h1>
  <h5> Instagram accounts</h5>
  </div>

  <div className="footer2">
  <h1 className="footerh1"> Contacts</h1>
  <h5> <a href="https://www.linkedin.com/in/ida-adjivon/"> LinkedIn</a></h5>
  <h5> <a href="https://github.com/iadjivon"> Github </a> </h5>
  </div>

  <div className="footer3">
  <img src="https://www.clipartkey.com/mpngs/m/175-1750487_fork-knife-spoon-png-icon-knife-and-fork.png" width="120" height="auto"/> 
  </div>
  <div>
    <p> Made by Ida Adjivon</p>
    <p> Copyright 2021. All rights reserved. </p>
  </div>
</footer>

</div>)
  
}

export default App;
