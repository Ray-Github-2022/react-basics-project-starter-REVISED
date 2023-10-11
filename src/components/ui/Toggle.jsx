import { useState } from 'react';
import { Button, List, ListItem } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export const Toggle = () => {
 
  const [toggleOn, setToggleOn] = useState(false) 
    const handleClick = () => {
        setToggleOn(!toggleOn);
    };
    return (
        <> 
           <Button display="flex" flexWrap="wrap" flexDir={['column', 'row']} justify="center" alignItems="center" w={['full', '9.2%']}
                   boxShadow='xl' bg={"pink.300"} color={"white"} opacity="100%" onClick={handleClick}>{toggleOn ? 'Goodbye..' : 'Thanks..' }</Button>
        {toggleOn && ( 

            <List>
              <ListItem color="green">Thanks for checking out our WINC Recipe App <StarIcon color='yellow.300'/></ListItem>
            </List>
            )}
        </>
  );
};