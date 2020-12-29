import React from "react";

const Form = (props) => {
    //STATE FOR THE FORM
    const [formData, setFormData] = React.useState(props.recipe);

     //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/recipes"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="input-div"> 
    <form onSubmit={handleSubmit}>
       <input
        type="text"
        name="countryName"
        className="input"
        placeholder= "Name of the Country"
        value={formData.countryName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="recipeName"
        className="input"
        placeholder= "Name of the recipe"
        value={formData.recipeName}
        onChange={handleChange}
      />
      
      <input
        type = "url"
        src = {formData.image}
        className="input"
        placeholder= "Link to image"
        width= "250"
        height= "300"/>

      <input
        type="number"
        name="servingSize"
        className="input"
        placeholder= "What is the serving size"
        value={formData.servingSize}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description" 
        className="input"       
        placeholder= "A bit about the recipe"
        value={formData.description}
        onChange={handleChange}
      />
       <input
        type="number"
        name="cookTime"
        className="input"
        placeholder= "What is the cooking time?"
        value={formData.cookTime}
        onChange={handleChange}
      />
         <input
        type="text"
        name="ingredients"
        className="input"
        placeholder= "What are the ingredients?"
        value={formData.ingredients}
        onChange={handleChange}
      />
     <input
        type="text"
        name="instructions"
        className="input"
        placeholder= "Cooking instructions"
        value={formData.instructions}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="recipeCompleted"
        value={formData.recipeCompleted}
      />
      <input className="submit-btn" type="submit" value={props.label} />
    </form>
    </div>
  );
};

export default Form;