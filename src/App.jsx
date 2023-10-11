import { useState } from 'react';
import { RecipeItem } from '/src/pages/RecipeItem';
import { Center, Heading } from '@chakra-ui/react';
import { RecipeSearch } from '/src/components/RecipeSearch';

export const App = () => {
  
  const [selectedRecipe, setSelectedRecipe] = useState();
    const greeting = 'Welcome @ WINC Recipe App!';

  return (
    <Center p={10} gap={6} align="center" bgImage='/src/components/ui/restaurant1.jpeg' // h="100vh"
            display="flex" flexWrap="wrap" flexDir= {['column', 'row']} w={['full', '100%']} justify="center" alignItems="center"  
            background-position="center" background-repeat="no-repeat" background-size="cover" >

      {selectedRecipe ? (
        <RecipeItem recipe={selectedRecipe} clickFn={setSelectedRecipe}/> 
      ) : ( 
        <>
          <Heading size={"2xl"} mt={"2"} color={"blue.400"} flexDir={['column', 'row']} align="center"
                   w={['full', '100%']} flexWrap="wrap" justify="center">{greeting}</Heading>
          
          <RecipeSearch onClick={setSelectedRecipe} />
        </>
      )}                       
    </Center>
  );
};

/* Onderstaande FEEDBACK ivm. open punten / benodigde aanpassingen..

1. Responsive Achtergrondafbeelding in App.jsx: Esmee checkt!
Hoe krijg ik de bgImage beter responsive en gevuld over gehele scherm wanneer ik verklein naar mobiel formaat?
= Om ervoor te zorgen dat je achtergrondafbeelding zich aanpast en het hele scherm vult, kun je de volgende CSS-stijlen gebruiken:
background-image: url('jouwAfbeeldingsURL'); background-position: center; background-repeat: no-repeat; background-size: cover; 
background-size: cover; zorgt ervoor dat de afbeelding zo wordt geschaald dat hij de container volledig bedekt, 
maar de aspectverhouding van de afbeelding behouden blijft.

2. onClick vs. clickFn: NIET VAN BELANG WELKE METHODE JE GEBRUIKT = HET WERKT!! 
Wat is het verschil tusssen onClick & clickFn, wanneer ik deze verander en klik op de card verschijnt de RecipeCard (volgende pagina) niet?
= onClick is een ingebouwde React-prop voor het afhandelen van klikgebeurtenissen. clickFn is gewoon een benaming die je mogelijk hebt gebruikt 
om een functie door te geven als een prop van de ene component naar de andere. Als het veranderen van clickFn naar onClick ervoor zorgt 
dat de kaart niet werkt, controleer dan of je daadwerkelijk de functie doorgeeft met de juiste prop-naam. 
Ze moeten overeenkomen met hoe je ze in je component gebruikt.

3. Filterknoppen voor healthLabels: Esmee checkt!
Graag zou ik de buttons waarop ik filter op de healthLabels (bovenin scherm) ook werkend krijgen.. dit samen met de 2e searchBar op healthLabels..
= Voor de filterknoppen kun je een useState-hook gebruiken om bij te houden welke filters zijn geselecteerd. Voor elke klik op een filterknop, 
update je de staat met de geselecteerde filter. Wanneer je je recepten gaat weergeven, filter je op basis van de geselecteerde labels.

4. Filteren van totalNutrients: Esmee checkt!
Het filteren van de totalNutrients had ik voor elkaar maar door de veranderingen is de syntax niet meer correct / onduidelijk..
= Zonder de daadwerkelijke code en de specifieke fouten die je tegenkomt te zien, kan het moeilijk zijn om dit direct op te lossen. 
Over het algemeen, als je een lijst met items filtert, wil je de .filter() methode van een array gebruiken 
en een functie doorgeven die bepaalt welke items worden behouden en welke worden weggelaten.

Extra Tips:
Zorg ervoor dat je consistent bent met je naamgeving. Als je bijvoorbeeld een event handler prop doorgeeft, 
is het handig om een conventionele naam zoals onEventName te gebruiken, zoals onButtonClick of onInputChange.
Voor filtering en dergelijke operaties is het vaak nuttig om een "debounce" techniek te gebruiken, 
zodat je niet bij elke kleine verandering (zoals elke toetsaanslag in een zoekveld) een dure bewerking uitvoert. */