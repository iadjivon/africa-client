import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Display = (props) =>{
    const {recipes} = props

    const loaded = () =>(
        <div style={{textAlign: "center"}}>
          {recipes.map((recipe) =>(
            <div className="recipe-display">
<Card> 
           <div className="image"> 
                <div className="recipe"> 
               <h1>{recipe.recipeName}</h1>
              </div>  
               <div className="country-name"> 
               <h3>{recipe.countryName}</h3>
              </div>
              
              <img src={recipe.image}></img>
              </div>
              
              <div className="recipe"> 
              <h3> Serving Size:</h3> <p> {recipe.servingSize} Serving(s)</p>
              </div>

              <div className="recipe"> 
              <h3> Cook Time: </h3> <p>{recipe.cookTime} minutes</p>
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
            </Card>

            </div>))}
           
        </div>

      )
     
      const loading = <h1> Loading ... </h1>

    return recipes.length > 0 ? loaded() : loading
    

};

export default Display;