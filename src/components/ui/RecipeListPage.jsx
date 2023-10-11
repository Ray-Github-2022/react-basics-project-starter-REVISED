// In RecipePage.jsx, DISPLAY REQUESTED INFO from the item prop.

import { Tag as CTag } from '@chakra-ui/react';

export const Tag = ({ children, ...props }) => {
  return (
    <CTag
      p={1}
      size="md"
      variant="solid"
      bgColor="blue.300"
      color="white"
      {...props}
    >
      {children}
    </CTag>
  );
};
