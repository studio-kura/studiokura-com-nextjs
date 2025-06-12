import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';

interface Props {
  text: string;
  href: string;
  ml?: number;
  mr?: number;
  colorScheme?: string;
}

const LinkButton = ({
  text,
  href,
  ml = 0,
  mr = 0,
  colorScheme = 'blue',
}: Props) => {
  return (
    <Button ml={ml} mr={mr} colorScheme={colorScheme} variant={'plain'} asChild>
      <NextLink href={href}>{text}</NextLink>
    </Button>
  );
};
export { LinkButton };
