import NextLink from 'next/link'
import { Button, ThemeTypings } from '@chakra-ui/react'

interface Props {
  text: string
  href: string
  ml?: number
  mr?: number
  colorScheme?: ThemeTypings['colorSchemes']
}

const LinkButton: React.FC<Props> = ({ text, href, ml, mr, colorScheme }) => {
  return (
    <Button
      ml={ml}
      mr={mr}
      as={NextLink}
      colorScheme={colorScheme}
      href={href}
      variant={'link'}
    >
      {text}
    </Button>
  )
}
export { LinkButton }

LinkButton.defaultProps = {
  ml: 0,
  mr: 0,
  colorScheme: 'blue'
}
