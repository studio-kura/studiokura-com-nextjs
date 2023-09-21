import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title, color }: { title: string; color: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgClip="text"
  >
    <Heading fontSize="6vw" color={color}>
      {title}
    </Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'with-chakra-ui-typescript',
  color: 'text'
}
