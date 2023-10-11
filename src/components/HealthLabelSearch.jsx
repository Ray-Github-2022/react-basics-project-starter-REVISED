// Built a search function that filters based on the name and/or health labels (vegan/vegetarian/pescetarian/gluten-free/sesame-free/etc.).
// Extra Challenge: Users can filter on: vegan/vegetarian/pescetarian
// Without filter: All recipes are displayed

// import { useState } from 'react';
// import { data } from '/src/utils/data'; // OR: ‘../utils/data’
// import { TextInputHealthLabel } from '/src/components/TextInputHealthLabel';
// import { RecipePage } from '/src/pages/RecipePage';

// export const HealthLabelSearch = ({ onClick }) => {

//  const [searchField, setSearchField] = useState("");

//   const matchedHealthLabels = data.hits.filter((recipe) => { // Next up, we want to use a filter method that compares if the items from data.js = healthLabels includes content from the searchField.
         // return recipe.recipe.healthLabels.toLowerCase().includes(searchField.toLowerCase()); 
//          return recipe.recipe.healthLabels.filter(label => label.includes('veg' && 'pes'))
//     }); 
    
//     const handleChange = (event) => { 
//       setSearchField(event.target.value); 
//     };

//     return (
        <> {/* ReactFragment */}
            {/* <label>Here You Can Search Your Recipe:</label> */} 
            {/* Change the width or margin-bottom w={355} mb={4} when using the <TexInput /> component in RecipeSearch.jsx! By using: changeFn, ...props */} 
            {/* Create a new UI input component <TextInput /> where the user can write text in an input field using the HTML <input> element. */}
            {/* <TextInputHealthLabel onChange={handleChange} /> */}  
            {/* Render <RecipeListPage /> in RecipeSearch. And pass the data array as recipe prop to Recipepage. */}
            {/* <RecipePage onClick={onClick} recipes={matchedHealthLabels} /> */} {/* Assign the results to a variable: */}
            {/* RecipeListPage clickFn={clickFn} drinks={data} /> */} {/* passing the clickFn prop & => data array as prop ( recipe={..} ) */}
            {/* <p>{searchField}</p> */} 
        </>
//     );
//    };