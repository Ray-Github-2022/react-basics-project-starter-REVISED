import { Input } from '@chakra-ui/react';


  export const TextInputHealthLabel = ({ onChange, healthLabel }) => ( // = Rendering to HealthLabelSearch component

    <Input placeholder='Search Label..' // key="healthLabel" type="text" autoComplete="true" required={true}  
           display="flex" flexWrap="wrap" flexDir={['column', 'row']} justify="center" alignItems="center" w={['full', '36.6%']}
           variant='filled' opacity='70%' pl={2} color="white" borderRadius={"8"} onChange={onChange} key={healthLabel} ></Input>
);