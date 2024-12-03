import { Text } from '@chakra-ui/react';
import { type ReactNode } from 'react';

export const ShadowText = ({
  text,
  color,
  hasShadow,
  fontSize,
  my,
}: {
  text: ReactNode;
  color?: string;
  hasShadow?: boolean;
  fontSize?: string[];
  my?: string;
}) => (
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

ShadowText.defaultProps = {
  color: 'white',
  hasShadow: true,
  fontSize: ['1.5em', '1.5em', '1.5em', '2em'],
  my: '1em',
};
