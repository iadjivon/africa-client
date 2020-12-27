import React, {useState} from 'react';
import Map from './components/Mapping';
import data from './components/africa.geo.json';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Display from './components/Display';
import Form from './components/Form';
import Accordion from './components/Accordion'

// const decoratedOnClick = useAccordionToggle(eventKey, onClick);


function App() {

//Variable to hold url 
   const url = "http://localhost:3000"
  const [property, setProperty] = React.useState([]);

// state to hold recipes 
const [recipes, setRecipes] = React.useState([])

// Empty Recipes

const emptyRecipe = ({
  countryName: "",
  recipeInfo: [{
    recipeName: "",
    cookTime: 0,
    description: "",
    servingSize: 0,
    ingredients: "",
    instructions: "", 
    recipesCompleted: Boolean
  }]
  
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
  <h1> African Recipes </h1>
 
  <Link to="/">
        <button>Home </button>
  </Link>
  <Link to="/recipes">
        <button>Explore Recipes </button>
  </Link>
  <Link to="/create">
        <button>Add New Recipes </button>
  </Link>
  <hr />
  </header>


  <main> 
  <Switch>
        <Route exact path ="/" render={ () => 
          <Map data={data} property={property}/> 
           }/>

           <Route exact path ="/" render ={ ()=> <Accordion />} />

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
              <Form {...rp} label="create" recipe={emptyRecipe} handleSubmit={handleCreate} />
            )}
          />

        <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form {...rp} label="update" 
              recipe={selectedRecipe} 
              handleSubmit={handleUpdate} />
            )}
          />

</Switch>




{/*  THIS IS THE SECOND DIV ON THE MAIN PAGE. RIGHT UNDER THE MAP */}

{/* <div> */}
{/* <h1> Recipes from across the continent </h1> */}

{/* <Accordion /> */}


{/* </div> */}
      
           
</main>

{/* THIS IS THE FOOTER SECTION */}
<footer className="footer">
  <h1 className="footerh1"> this is a footer</h1>
  <h1> this is a footer</h1>
  <h1> this is a footer</h1>
</footer>

</div>)
  
}

export default App;
