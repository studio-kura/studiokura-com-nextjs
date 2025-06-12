import { Button, ConditionalValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LiaEnvelopeSolid } from 'react-icons/lia';

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
  variant?: ConditionalValue<
    'outline' | 'ghost' | 'solid' | 'subtle' | 'surface' | 'plain' | undefined
  >;
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
      borderRadius={borderRadius}
      fontWeight={600}
      color={color}
      bg={variant === 'solid' ? bg : undefined}
      _hover={{ bg: hoverbg }}
      variant={variant}
      asChild
    >
      <NextLink href={'/contact'}>
        {hasIcon && (
          <>
            <LiaEnvelopeSolid />
            &nbsp;
          </>
        )}
        {text}
      </NextLink>
    </Button>
  );
};
export { MailButton };
