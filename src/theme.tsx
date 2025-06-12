import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        black: { value: '#16161D' },
        white: { value: '#ffffff' },
      },
      fonts: {
        mono: { value: `'Menlo', monospace` },
      },
      breakpoints: {
        sm: { value: '40em' },
        md: { value: '52em' },
        lg: { value: '64em' },
        xl: { value: '80em' },
      },
      radii: {
        button: { value: '12px' },
      },
    },
    semanticTokens: {
      colors: {
        text: {
          default: { value: '#16161D' },
          _dark: { value: '#ade3b8' },
        },
      },
    },
  },
});
