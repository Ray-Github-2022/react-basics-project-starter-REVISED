{/* Onduidelijk hoe ik kan filteren op {totalNutrients {Energy in kcal, protein, fat, carbs, cholesterol, sodium}}? = {object} ipv. [array] */}

// NOTE: As the API does not provide ID’s for the recipes, you can use names/labels as keys in the list items.
// The items in the list (<RecipeOverview />) should be clickable and, once selected show a more detailed <RecipeItem /> component. 

import { TimeIcon, WarningTwoIcon } from '@chakra-ui/icons'
import { Card, CardBody, Image, Heading, Stack, Text, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';

export const RecipeItem = ({ recipe, clickFn }) => { // recipe prop
  const { isOpen, onOpen, onClose } = useDisclosure();
    
/* const totalNutrients =()=> {
  const Energy = Math.round(recipe.recipe.ingredients.totalNutrients.ENERC_KCAL.quantity);
  const Protein = Math.round(recipe.recipe.ingredients.totalNutrients.PROCNT.quantity);
  const Fat = Math.round(recipe.recipe.ingredients.totalNutrients.FAT.quantity);
  const Carbs = Math.round(recipe.recipe.ingredients.totalNutrients.CHOCDF.quantity);
  const Cholesterol = Math.round(recipe.recipe.ingredients.totalNutrients.CHOLE.quantity);
  const Sodium = Math.round(recipe.recipe.ingredients.totalNutrients.NA.quantity); */

/* const totalNutrients =()=> {
  const Calories = recipe.recipe.ingredients.totalNutrients.ENERC_KCAL;
  const Protein = recipe.recipe.ingredients.totalNutrients.PROCNT;
  const Fat = recipe.recipe.ingredients.totalNutrients.FAT;
  const Carbs = recipe.recipe.ingredients.totalNutrients.CHOCDF;
  const Cholesterol = recipe.recipe.ingredients.totalNutrients.CHOLE;
  const Sodium = recipe.recipe.ingredients.totalNutrients.NA; */

  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);
  return (

       <Card bgColor="gray.300" opacity="90%" w="50%" // onClick={() => clickFn()} no CLICK on IMAGES to go back
             borderRadius="xl" boxShadow='2xl' cursor="pointer" _hover={{ transform: 'scale(1.01)' }}>
            
           <Image borderRadius="xl" borderBottomLeftRadius="0" borderBottomRightRadius="0"
                  src={recipe.recipe.image} objectFit='cover' h="40vh" w={['full', '100%']} boxShadow='xl'/>

            <CardBody flexDir="column" align="center" >
              <Heading size={"md"} color={"orange.400"}>{recipe.recipe.label}</Heading>
                <Text fontSize='2xl' mt={"3"}>{recipe.recipe.mealType}</Text>
                <Text mt={"3"}><b>Cuisine-Type: </b>{recipe.recipe.cuisineType}</Text>
                <Text><b>Dish-Type: </b>{recipe.recipe.dishType}</Text>
                <Text><b><TimeIcon w={4} h={4}/> Cooking-Time: </b>{recipe.recipe.totalTime} minutes</Text>
            

                <Stack mt="4" spacing="1"> 

                
                <Text color="green.400">
                {recipe.recipe.healthLabels.some(label => label.includes('Veg')) && (<b>Health-Label: </b>)}{recipe.recipe.healthLabels.filter(label => label.includes('Veg')).join(" & ")}</Text>

                <Text color="blue.400">
                {recipe.recipe.healthLabels.includes('Pescatarian') && (<b>Health-Label: </b>)}{recipe.recipe.healthLabels.filter(label => label.includes('Pescatarian'))}</Text>

                <Text color="yellow.600">{recipe.recipe.healthLabels.length > 0 && (<b>All Health-Labels: </b>)}{recipe.recipe.healthLabels.join(", ")}</Text>

                <Text color="pink.700" >{recipe.recipe.dietLabels.length > 0 && (<b>Diet-Label: </b>)}{recipe.recipe.dietLabels.join(", ")}</Text>
                
                <Text color="purple.500"><b>Ingredients: </b>{recipe.recipe.ingredientLines.join(", ")}</Text>

                {/* <Text color="gray.500">{recipe.recipe.ingredients.totalNutrients.filter(recipe => recipe.includes('ENERC_KCAL')).map(recipe => (recipe))}</Text> */}
                {/* <Text color="gray.500"><b>Total-Nutrients: {recipe.recipe.ingredients.totalNutrients.join(", ")}</b></Text> */}
                {/* Onduidelijk hoe ik kan filteren op {totalNutrients {Energy in kcal, protein, fat, carbs, cholesterol, sodium}}? = {object} ipv. [array] */}

                {/* <Text color="gray.500">
                <b>totalNutrients: </b>{recipe.recipe.ingredients.totalNutrients && (
                <>
                {recipe.recipe.ingredients.totalNutrients["ENERC_KCAL"] && (
                <>Energy: {recipe.recipe.ingredients.totalNutrients["ENERC_KCAL"].quantity} {recipe.recipe.ingredients.totalNutrients["ENERC_KCAL"].unit}, </>
                )}
                {recipe.recipe.ingredients.totalNutrients["PROCNT"] && (
                <>Protein: {recipe.recipe.ingredients.totalNutrients["PROCNT"].quantity} {recipe.recipe.ingredients.totalNutrients["PROCNT"].unit}, </>
                )}
                {recipe.recipe.ingredients.totalNutrients["FAT"] && (
                <>Fat: {recipe.recipe.ingredients.totalNutrients["FAT"].quantity} {recipe.recipe.ingredients.totalNutrients["FAT"].unit}, </>
                )}
                {recipe.recipe.ingredients.totalNutrients["CHOCDF"] && (
                <>Carbs: {recipe.recipe.ingredients.totalNutrients["CHOCDF"].quantity} {recipe.recipe.ingredients.totalNutrients["CHOCDF"].unit}, </>
                )}
                {recipe.recipe.ingredients.totalNutrients["CHOLE"] && (
                <>Cholesterol: {recipe.recipe.ingredients.totalNutrients["CHOLE"].quantity} {recipe.recipe.ingredients.totalNutrients["CHOLE"].unit}, </>
                )}
                {recipe.recipe.ingredients.totalNutrients["NA"] && (
                <>Sodium: {recipe.recipe.ingredients.totalNutrients["NA"].quantity} {recipe.recipe.ingredients.totalNutrients["NA"].unit}</>
                )}
                </>
                )}
              </Text> */}
                
                {/* In dit voorbeeld wordt gecontroleerd of totalNutrients en elke specifieke categorie bestaan in het recipe object 
                    voordat ze worden weergegeven. Als een categorie bestaat, wordt de relevante informatie (hoeveelheid en eenheid) 
                    uit totalNutrients weergegeven. Hierdoor worden alleen de categorieën weergegeven 
                    die daadwerkelijk aanwezig zijn in de gegevens in data.js. */}
               
                <Text color="gray.500"><b>Total-Nutrients: </b>{recipe.recipe.ingredients.totalNutrients && (
                  <>
                  Energy: {recipe.recipe.ingredients.totalNutrients["ENERC_KCAL"]} kcal,{' '}
                  Protein: {recipe.ingredients.totalNutrients["PROCNT"]}g,{' '}
                  Fat: {recipe.recipe.ingredients.totalNutrients["FAT"]}g,{' '}
                  Carbs: {recipe.recipe.ingredients.totalNutrients["CHOCDF"]}g,{' '}
                  Cholesterol: {recipe.recipe.ingredients.totalNutrients["CHOLE"]}mg,{' '}
                  Sodium: {recipe.recipe.ingredients.totalNutrients["NA"]}mg
                  </>
                )}
               </Text>

                {/* <Text key={calories.label}>{calories.label}: {calories.quantity.} {calories.unit}</Text> */}
                {/* <Text color="green.400" flexDir="column" align="center"><b>{recipe.recipe.totalNutrients.filter((totalNutrients => totalNutrients === "FAT")).join(" & ")}</b></Text> */}
                {/* <Text color="green.400" flexDir="column" align="center"><b>{recipe.ingredients.totalNutrients.filter(totalNutrients => totalNutrients.includes('FAT')).join(" & ")}</b></Text> */}
                
                <Text color="red.500">
                {recipe.recipe.cautions.length > 0 && (<b><WarningTwoIcon w={4} h={8} /> Caution this recipe contains: </b>)}{recipe.recipe.cautions.join(", ")}</Text> 
               
                </Stack>
            </CardBody>

              <Flex justify="center" mb={4} gap={4} >
                <Button bgColor="blue.300" color="white" boxShadow='2xl' w={['full', '30%']} onClick={onOpen}>Order</Button>
                <Button bgColor="orange.300" color="white" boxShadow='2xl' w={['full', '30%']} onClick={() => clickFn()} variant="ghost">Back</Button>
              </Flex>

            <Modal size={["full", "md"]} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
                <ModalContent>
                   <ModalHeader>Confirm your Order, please check..</ModalHeader>
                     <ModalCloseButton />
                      <ModalBody height={["full", "fit-content" ]} display="flex" justify-content="center" alignItems={["center", "flex-start" ]} flexDir="column" >
                          <Text>1x {recipe.recipe.label}</Text>
                       </ModalBody>

                      <ModalFooter gap={14}>
                          <Button bgColor="green.300" color="white">Confirm & Order</Button>
                          <Button variant="ghost" onClick={onClose}>Cancel & Back To Item</Button>
                       </ModalFooter>
                 </ModalContent>
            </Modal>
        </Card>
  );
};