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

const EstimateCalculatorButton = ({
  text = '見積もりシミュレーション',
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
      as={NextLink}
      href={'/kindergartens/estimate-calculator'}
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
export { EstimateCalculatorButton };
