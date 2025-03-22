import { Button, ResponsiveValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LiaEnvelopeSolid } from 'react-icons/lia';

interface Props {
  text?: string;
  mr?: number;
  mt?: number;
  size?: string;
  color?: string;
  bg?: string;
  hoverbg?: string;
  borderRadius?: number;
  hasIcon?: boolean;
  variant?:
    | ResponsiveValue<
        'link' | 'outline' | (string & {}) | 'ghost' | 'solid' | 'unstyled'
      >
    | undefined;
}

const MailButton = ({
  text = 'info@studiokura.com',
  mr = 0,
  mt = 0,
  size = 'md',
  color = 'text',
  bg = 'gray.100',
  hoverbg = 'gray.200',
  borderRadius = 4,
  hasIcon = true,
  variant = 'solid',
}: Props) => {
  return (
    <Button
      mr={mr}
      mt={mt}
      size={size}
      as={NextLink}
      href={'/contact'}
      borderRadius={borderRadius}
      fontWeight={600}
      color={color}
      bg={variant === 'solid' ? bg : undefined}
      _hover={{ bg: hoverbg }}
      variant={variant}
    >
      {hasIcon && (
        <>
          <LiaEnvelopeSolid />
          &nbsp;
        </>
      )}
      {text}
    </Button>
  );
};
export { MailButton };
