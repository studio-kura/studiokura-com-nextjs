import { Button, ConditionalValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LiaEdit } from 'react-icons/lia';

interface Props {
  text?: string;
  href?: string;
  mr?: number;
  mt?: number;
  size?: ConditionalValue<
    'md' | 'sm' | 'lg' | 'xl' | '2xl' | '2xs' | 'xs' | undefined
  >;
  color?: string;
  bg?: string;
  hoverbg?: string;
  borderRadius?: number;
  hasIcon?: boolean;
}

const ContactButton = ({
  text = 'お問い合わせ',
  href = '/contact',
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
      <NextLink href={href}>
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
export { ContactButton };
