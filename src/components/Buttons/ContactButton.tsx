import { EditIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';

interface Props {
  text?: string;
  href?: string;
  mr?: number;
  mt?: number;
  size?: string;
  color?: string;
  bg?: string;
  hoverbg?: string;
  borderRadius?: number;
  hasIcon?: boolean;
}

const ContactButton: React.FC<Props> = ({
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
}) => {
  return (
    <Button
      mr={mr}
      mt={mt}
      size={size}
      as={NextLink}
      href={href}
      borderRadius={borderRadius}
      fontWeight={600}
      color={color}
      bg={bg}
      _hover={{
        bg: hoverbg,
      }}
    >
      {hasIcon && (
        <>
          <EditIcon />
          &nbsp;
        </>
      )}
      {text}
    </Button>
  );
};
export { ContactButton };
