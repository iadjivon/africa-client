import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Display = (props) =>{
    const {recipes} = props

    const loaded = () =>(
        <div style={{textAlign: "center"}}>
          {recipes.map((recipe) =>(
            <div className="recipe-display">

<div className="image"> 
              <img src={recipe.image}></img>
              </div>
              <div className="recipe"> 
              <h3>Country Name: </h3> <h3>{recipe.countryName}</h3>
              </div>

              <div className="recipe"> 
              <h3> Recipe Name: </h3> <h3>{recipe.recipeName}</h3>
              </div>

              <div className="recipe"> 
              <h3> Serving Size: </h3> <h3>{recipe.servingSize} Serving(s)</h3>
              </div>

              <div className="recipe"> 
              <h3> Cook Time: </h3> <h3>{recipe.cookTime} minutes</h3>
              </div>
              <div className="ingredients"> 
              <h1>Recipe Ingredients:</h1> <p> {recipe.ingredients}</p>
              </div>

              <div className="descriptions">     
              <h1> Description: </h1> <p>{recipe.description}</p>
              </div>


              <div className="instructions"> 
              <h1> Recipe Instructions: </h1> <p> {recipe.instructions}</p> 
              </div>

              
              <div className="bttns"> 
              <button className ="ed-button" onClick={()=>{props.selectRecipe(recipe);
              props.history.push("/edit")}}> Edit</button>
      
              <button className ="ed-button" onClick={()=>{props.deleteRecipe(recipe);
            }}> Delete </button>

          </div>
            {/* <hr /> */}


            </div>))}
        </div>
     
      )
      const loading = <h1> Loading ... </h1>

    return recipes.length > 0 ? loaded() : loading
    

};

export default Display;