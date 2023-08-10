import { Text, Center, Box, Heading, Button } from '@chakra-ui/react'
import { PhoneIcon, EditIcon } from '@chakra-ui/icons'
import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'
import Iframe from 'react-iframe'

type ClassPlaceSlide2Props = {
  placeName: string
  tagline: string
  bgImageUrl: string
  children?: string | Element
}

const ClassPlaceSlide2 = (props: ClassPlaceSlide2Props) => {
  const { placeName, tagline, bgImageUrl, children } = props
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? ''
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? ''
  return (
    <Container bgImage={`https://${cdnDomain}/${cdnDirectory}${bgImageUrl}`}>
      <Center py={6} px={4}>
        <Box
          w={'full'}
          rounded={'xl'}
          p={0}
          pb={2}
          textAlign={'center'}
          mt="30vw"
        >
          <Main>
            <Heading>時間割</Heading>
            {`https://${cdnDomain}/${cdnDirectory}${bgImageUrl}`}
            <Box bgColor={'#fff'} width={'90vw'} height={'80vh'}>
              <Iframe
                url={
                  'https://online.studiokura.com/cake/class_places/calendarwidget/itoshima'
                }
                width={'100%'}
                height={'100%'}
                display={'block'}
                position={'relative'}
              />
            </Box>
            <Text color="white" fontSize={'2em'}>
              <>{children}</>
            </Text>
          </Main>
        </Box>
      </Center>
    </Container>
  )
}

export { ClassPlaceSlide2 }
