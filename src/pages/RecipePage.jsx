import { RecipeOverview } from '/src/pages/RecipeOverview';
import { Flex } from '@chakra-ui/react';

export const RecipePage = ({ recipes, onClick }) => { // MEEGEVEN VAN DE CORRECTE PROP = recipes om DATA aan te kunnen roepen via RecipeSearch 
  return ( 
    <Flex p={2} gap={8} align="center" flexWrap="wrap" flexDir={['column', 'row' ]} justify="center" alignItems="center">
      {recipes.map((recipe) => ( 
           <RecipeOverview clickFn={onClick} recipe={recipe} key={recipe.recipe.label} /> // And for each item, render a RecipeCard. & CHANGE the key prop to recipe.recipe.label to give it a UNIQUE prop!
      ))}  {/* WARNING IN DEVELOPER CONSOLE: react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop. SOLVED!!*/}
     </Flex>
  );
};