import { PhoneIcon } from '@chakra-ui/icons';
import { Button, ResponsiveValue } from '@chakra-ui/react';

const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER ?? '';

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

const PhoneButton: React.FC<Props> = ({
  text,
  mr,
  mt,
  size,
  color,
  bg,
  hoverbg,
  borderRadius,
  hasIcon,
  variant,
}) => {
  return (
    <Button
      mr={mr}
      mt={mt}
      size={size}
      as={'a'}
      href={`tel:${phoneNumber}`}
      borderRadius={borderRadius}
      fontWeight={600}
      color={color}
      bg={variant === 'solid' ? bg : undefined}
      _hover={{
        bg: hoverbg,
      }}
      variant={variant}
    >
      {hasIcon && (
        <>
          <PhoneIcon />
          &nbsp;
        </>
      )}
      {text}
    </Button>
  );
};
export { PhoneButton };

PhoneButton.defaultProps = {
  text: phoneNumber,
  mr: 0,
  mt: 0,
  size: 'md',
  color: 'text',
  bg: 'gray.100',
  hoverbg: 'gray.200',
  borderRadius: 4,
  hasIcon: true,
  variant: 'solid',
};
