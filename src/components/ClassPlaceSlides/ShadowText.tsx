import { Text } from '@chakra-ui/react';
import { type ReactNode } from 'react';

type Props = {
  text: ReactNode;
  color?: string;
  hasShadow?: boolean;
  fontSize?: string[];
  my?: string;
};

export const ShadowText = ({
  text,
  color = 'white',
  hasShadow = true,
  fontSize = ['1.5em', '1.5em', '1.5em', '2em'],
  my = '1em',
}: Props) => (
  <Text
    fontSize={fontSize}
    my={my}
    color={color}
    {...(hasShadow && {
      textShadow: 'black 0.03em 0.03em 0.03em;',
    })}
  >
    <>{text}</>
  </Text>
);
