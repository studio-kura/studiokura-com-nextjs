import { Stack } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactElement | ReactNode;
}

const CardStack: React.FC<Props> = ({ children }) => {
  return (
    <Stack
      align={'center'}
      justify={'center'}
      direction={['column', 'column', 'column', 'row']}
      mt={6}
      display={'flex'}
      alignItems={'flex-start'}
    >
      {children}
    </Stack>
  );
};

export { CardStack };
