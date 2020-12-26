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
    <form onSubmit={handleSubmit}>
       <input
        type="text"
        name="countryName"
        placeholder= "Name of the Country"
        value={formData.countryName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="recipeName"
        placeholder= "Name of the recipe"
        value={formData.recipeName}
        onChange={handleChange}
      />
      
      <input
        type = "text"
        src = {formData.image}
        placeholder= "Link to image"
        width= "250"
        height= "300"/>

      <input
        type="number"
        name="servingSize"
        placeholder= "What is the serving size"
        value={formData.servingSize}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"        
        placeholder= "A bit about the recipe"
        value={formData.description}
        onChange={handleChange}
      />
       <input
        type="number"
        name="cookTime"
        placeholder= "What is the cooking time?"
        value={formData.cookTime}
        onChange={handleChange}
      />
         <input
        type="text"
        name="ingredients"
        placeholder= "what are the ingredients?"
        value={formData.ingredients}
        onChange={handleChange}
      />
     <input
        type="text"
        name="instructions"
        placeholder= "Cooking isntructions"
        value={formData.instructions}
        onChange={handleChange}
      />
      <input type="submit" value={props.label} />
    </form>
  );
};

export default Form;