import { Button, ConditionalValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LiaEdit } from 'react-icons/lia';

interface Props {
  text?: string;
  mr?: number;
  mt?: number;
  size?: ConditionalValue<
    'sm' | 'md' | 'lg' | 'xl' | '2xl' | '2xs' | 'xs' | undefined
  >;
  color?: string;
  bg?: string;
  hoverbg?: string;
  borderRadius?: number;
  hasIcon?: boolean;
}

const TrialButton = ({
  text = '体験レッスン',
  mr = 0,
  mt = 0,
  size = 'md',
  color = 'white',
  bg = 'blue.500',
  hoverbg = 'blue.400',
  borderRadius = 4,
  hasIcon = true,
}: Props) => {
  return (
    <Button
      mr={mr}
      mt={mt}
      size={size}
      borderRadius={borderRadius}
      fontWeight={600}
      color={color}
      bg={bg}
      _hover={{
        bg: hoverbg,
      }}
      asChild
    >
      <NextLink href={'/trial'}>
        {hasIcon && (
          <>
            <LiaEdit />
            &nbsp;
          </>
        )}
        {text}
      </NextLink>
    </Button>
  );
};
export { TrialButton };
