import React from 'react';

const Display = (props) =>{
    const {recipes} = props

    const loaded = () =>(
        <div style={{textAlign: "center"}}>
          {recipes.map((recipe) =>(
            <article>
              <h1>{recipe.name}</h1>
              <h3>{recipe.servingSize}</h3>
              <h3>{recipe.description}</h3>
              <h3>{recipe.cookTime}</h3>
              <h3>{recipe.ingredients}</h3>
              <h3>{recipe.instructions}</h3>

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