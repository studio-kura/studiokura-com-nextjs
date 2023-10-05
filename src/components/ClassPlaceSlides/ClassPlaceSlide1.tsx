import { Text, Center, Box, Button } from '@chakra-ui/react'
import { PhoneIcon, EditIcon } from '@chakra-ui/icons'
import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'

type ClassPlaceSlide1Props = {
  placeName: string
  tagline: string
  bgImageUrl: string
  children?: string | Element
}

const ClassPlaceSlide1 = (props: ClassPlaceSlide1Props) => {
  const { placeName, tagline, bgImageUrl, children } = props
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? ''
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? ''
  return (
    <Container
      bgImage={`https://${cdnDomain}/${cdnDirectory}${bgImageUrl}`}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
    >
      <Center py={6} px={4}>
        <Box
          w={'full'}
          rounded={'xl'}
          p={0}
          pb={2}
          textAlign={'center'}
          mt="-10vw"
        >
          <Hero title={placeName} color={'white'} />
          <Main>
            <Text color="white" fontSize={'2em'}>
              {tagline}
            </Text>
            <Text color="white" fontSize={'2em'}>
              <>{children}</>
            </Text>
            <Box>
              <Button
                as={'a'}
                fontWeight={600}
                color={'white'}
                bg={'blue.500'}
                href={'/trial'}
                _hover={{
                  bg: 'blue.400'
                }}
              >
                <EditIcon />
                &nbsp;体験レッスン
              </Button>{' '}
              <Button
                as={'a'}
                fontWeight={600}
                href={'tel:092-325-1773'}
                _hover={{
                  bg: 'green.100'
                }}
              >
                <PhoneIcon />
                &nbsp;092-325-1773
              </Button>
            </Box>
          </Main>
        </Box>
      </Center>
    </Container>
  )
}

export { ClassPlaceSlide1 }
