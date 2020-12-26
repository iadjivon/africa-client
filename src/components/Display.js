import React from 'react';

const Display = (props) =>{
    const {recipes} = props

    const loaded = () =>(
        <div style={{textAlign: "center"}}>
          {recipes.map((recipe) =>(
            <article>
              <h1>{recipe.countryName}</h1>
              <h3>{recipe.recipeName}</h3>
              <h3>{recipe.servingSize} Serving(s)</h3>
              <img src={recipe.image}></img>
              <p>{recipe.description}</p>
              <h3>{recipe.cookTime} minutes</h3>
              <h3>{recipe.ingredients}</h3>
              <p>{recipe.instructions}</p>

              <button onClick={()=>{props.selectRecipe(recipe);
              props.history.push("/edit")}}> Edit</button>
      
              <button onClick={()=>{props.deleteRecipe(recipe);
            }}> Delete </button>
            <hr />
            </article>))}
        </div>
     
      )
      const loading = <h1> Loading ... </h1>

    return recipes.length > 0 ? loaded() : loading
    

};

export default Display;