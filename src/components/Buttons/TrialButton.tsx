import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LiaEdit } from 'react-icons/lia';

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
}

const TrialButton: React.FC<Props> = ({
  text,
  mr,
  mt,
  size,
  color,
  bg,
  hoverbg,
  borderRadius,
  hasIcon,
}) => {
  return (
    <Button
      mr={mr}
      mt={mt}
      size={size}
      as={NextLink}
      href={'/trial'}
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
          <LiaEdit />
          &nbsp;
        </>
      )}
      {text}
    </Button>
  );
};
export { TrialButton };

TrialButton.defaultProps = {
  text: '体験レッスン',
  mr: 0,
  mt: 0,
  size: 'md',
  color: 'white',
  bg: 'blue.500',
  hoverbg: 'blue.400',
  borderRadius: 4,
  hasIcon: true,
};
