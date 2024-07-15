import { Stack, StackProps } from '@chakra-ui/react';

export const Main = (props: StackProps) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="container.xl"
    mt="-45vh"
    pt="8rem"
    px="1rem"
    {...props}
  />
);
