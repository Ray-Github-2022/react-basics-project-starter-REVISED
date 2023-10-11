import { Input } from '@chakra-ui/react';
// import { SearchIcon } from '@chakra-ui/icons'
 
  export const TextInputRecipe = ({ onChange, label }) => ( // = Rendering to RecipeSearch component
  
    <Input placeholder='Search Recipe..' // key="label" type="text" autoComplete="true" required={true}
           display="flex" flexWrap="wrap" flexDir={['column', 'row']} justify="center" alignItems="center" w={['full', '36.6%']} // IPV vb. w={375} = VAST!
           variant='filled' opacity='70%' pl={2} color="white" borderRadius={"8"} onChange={onChange} key={label} ></Input> // INPUT ALIGNMENT CENTER ?? 
);