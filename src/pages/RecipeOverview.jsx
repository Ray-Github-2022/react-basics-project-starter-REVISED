import { Badge, Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react';

export const RecipeOverview = ({ recipe, clickFn }) => { // recipe prop
    return (
      
      <Card bgColor="gray.300" opacity="90%" w="" h="34rem" onClick={() => clickFn(recipe)} 
            borderRadius="xl" boxShadow='2xl' cursor="pointer" _hover={{ transform: 'scale(1.01)' }}>
         
         <Image borderRadius="xl" borderBottomLeftRadius="0" borderBottomRightRadius="0" 
                h={56} w="100%" src={recipe.recipe.image} objectFit='cover' boxShadow='xl' />
        
           <CardBody >
               <Heading size="sm" color={"orange.400"}>{recipe.recipe.label}</Heading>
               <Text fontSize='xl' mt={"3"}>{recipe.recipe.mealType}</Text>
               <Text mt={"2"}><b>Cuisine: </b>{recipe.recipe.cuisineType}</Text>
               <Text pb="2"><b>Dish: </b>{recipe.recipe.dishType}</Text>
                
                <Stack mt="2" spacing="1">
                {recipe.recipe.healthLabels.includes('Vegan') ? ( <Badge borderRadius="xl" px={1} py={1} color="white" bg={"green.300"}>Vegan</Badge> ) : (<></>)}
                {recipe.recipe.healthLabels.includes('Vegetarian') ? ( <Badge borderRadius="xl" px={1} py={1} color="white" bg={"orange.300"}>Vegetarian</Badge> ) : (<></>)}
                {recipe.recipe.healthLabels.includes('Pescatarian') ? ( <Badge borderRadius="xl" px={1} py={1} color="white" bg={"blue.300"}>Pescatarian</Badge> ) : (<></>)}
                {recipe.recipe.dietLabels.length > 0 && (<Badge borderRadius="xl" px={1} py={1} color="white" bg={"purple.300"}>{recipe.recipe.dietLabels.join(", ")}</Badge>)}
                {recipe.recipe.cautions.length > 0 && (<Badge borderRadius="xl" px={1} py={1} color="white" bg={"red.300"}>{recipe.recipe.cautions.join(", ")}</Badge>)}

              </Stack>
           </CardBody>
      </Card>
  );
};