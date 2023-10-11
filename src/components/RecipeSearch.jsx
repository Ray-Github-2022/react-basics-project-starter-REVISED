// Built a search function that filters based on the name and/or health labels (vegan/vegetarian/pescetarian/gluten-free/sesame-free/etc.).
// Extra Challenge: Users can filter on: vegan/vegetarian/pescetarian
// Without filter: All recipes are displayed
{/* Onduidelijk hoe ik dmv. onClick op de "Button" kan filteren/renderen op vegan/vegetarian/pescetarian = {array}*/}

import { useState } from 'react';
import { data } from '/src/utils/data'; // OR: ‘../utils/data’
import { TextInputRecipe } from '/src/components/TextInputRecipe';
import { TextInputHealthLabel } from '/src/components/TextInputHealthLabel';
import { RecipePage } from '/src/pages/RecipePage';
import { Button } from '@chakra-ui/react';

export const RecipeSearch = ({ recipe, clickFn, onClick }) => {
 /* function pescatarianLabels() { */
// const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchField, setSearchField] = useState(/* data.hits[3].recipe.label */"");
     /* const [showPescatarian, setShowPescatarian] = useState(false); // Stel een state-variabele in om bij te houden of de Pescatarian-elementen moeten worden weergegeven
        const pescatarianLabels = recipe.recipe.healthLabels.filter(label => label.includes('Pescatarian')); */ // Verwijzing naar je 'recipe' object hier, aangenomen dat het beschikbaar is in je component */

// Je kunt een knop toevoegen en een state-variabele gebruiken om te beheren of de Pescatarian-elementen moeten worden weergegeven of verborgen. 
// In dit voorbeeld wordt een showPescatarian state-variabele geïntroduceerd en ingesteld op false als de standaardwaarde.
// Wanneer je op de knop klikt, wordt de showPescatarian-waarde omgeschakeld met behulp van setShowPescatarian(!showPescatarian). 
// Dit zal ervoor zorgen dat de Pescatarian-elementen worden weergegeven of verborgen, afhankelijk van de huidige waarde.
// De pescatarianLabels-array bevat de labels die 'Pescatarian' bevatten, en deze wordt alleen weergegeven als showPescatarian waar is. 
// Op deze manier kun je de Pescatarian-elementen in de browser tonen of verbergen door op de knop te klikken.


    const matchedRecipes = data.hits.filter((recipe) => {
        return recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase()); 
      }); 

    const matchedHealthLabels = data.hits.filter((recipe) => { 
          return recipe.recipe.healthLabels.filter(healthLabel => healthLabel.includes(searchField.toLowerCase('vegan', 'vegetarian', 'pescatarian')))
     }); 

      const handleChange = (event) => { 
        setSearchField(event.target.value); 
      };
  
      return (
        <>  {/* Extra Challenge: Users can filter on: vegan/vegetarian/pescetarian */}
            {/* Onduidelijk hoe ik dmv. onClick op de "Button" kan filteren/renderen op vegan/vegetarian/pescetarian = {array}*/}

            <Button bgColor="green.300" display="flex" flexDir={['column', 'row']} flexWrap="wrap" justify="center" alignItems="center"
                    boxShadow='xl'  w={['full', '24%']} opacity="100%" color="white" onClick={() => clickFn()}>Vegan..</Button>

            <Button bgColor="orange.300" display="flex" flexDir={['column', 'row' ]} flexWrap="wrap" justify="center" alignItems="center"
                    boxShadow='xl'  w={['full', '24%']} opacity="100%" color="white" onClick={() => clickFn()}>Vegetarian..</Button> 

            <Button bgColor="blue.300" display="flex" flexDir={['column', 'row' ]} flexWrap="wrap" justify="center" alignItems="center"
                    boxShadow='xl'  w={['full', '24%']} opacity="100%" color="white" onClick={() => clickFn(recipe.recipe.healthLabels.filter(label => label.includes('Pescatarian')))}>Pescatarian..</Button>

            {/* <Button onClick={() => setShowPescatarian(!showPescatarian)}>Toggle Pescatarian</Button>{showPescatarian && (
                <Text color="blue.400"><b>Health-Label: </b>{pescatarianLabels.join(", ")}</Text>
                )} */}
    
            {/* <Button onClick={() => setShowPescatarian(!showPescatarian)}>Toggle Pescatarian</Button>{showPescatarian && (
                <Text color="blue.400"><b>Health-Label: </b>{recipe.recipe.healthLabels.filter(label => label.includes('Pescatarian')).join(' & ')}</Text>
                )} */}

            <TextInputRecipe onChange={handleChange} /> 
            <TextInputHealthLabel onChange={handleChange} /> 
            <RecipePage onClick={onClick} recipes={matchedRecipes} healthLabels={matchedHealthLabels} />
        </>
      );
    };