import {
  Text,
  Center,
  Box,
  Heading,
  Button,
  Image,
  Link as NextLink
} from '@chakra-ui/react'
import { EditIcon, PhoneIcon, CheckIcon, EmailIcon } from '@chakra-ui/icons'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'

type ClassPlaceSlide3Props = {
  placeName: string
  tagline: string
  bgImageUrl?: string
  mapImageUrl: string
  mapUrl: string
  address: string
  children?: string | Element
}

const ClassPlaceSlide3 = (props: ClassPlaceSlide3Props) => {
  const {
    placeName,
    tagline,
    bgImageUrl,
    mapImageUrl,
    mapUrl,
    address,
    children
  } = props
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? ''
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? ''
  return (
    <Container
      bgImage={
        bgImageUrl && `https://${cdnDomain}/${cdnDirectory}${bgImageUrl}`
      }
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
          mt="30vw"
        >
          <Main bgColor={'#fff'} pt={'2em'} pb={'1em'}>
            <Heading>{placeName}</Heading>
            <Box bgColor={'#fff'}>
              <NextLink href={mapUrl}>
                <Image
                  src={`https://${cdnDomain}/${cdnDirectory}${mapImageUrl}`}
                  alt={placeName + 'の地図'}
                />
              </NextLink>
              {address}
            </Box>
            <Text color="white" fontSize={'2em'}>
              <>{children}</>
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
                color={'text'}
                _hover={{
                  bg: 'green.100'
                }}
              >
                <PhoneIcon />
                &nbsp;092-325-1773
              </Button>{' '}
              <Button
                as={NextLink}
                href={'/pricing'}
                fontWeight={600}
                color={'text'}
                _hover={{
                  bg: 'green.100'
                }}
              >
                <CheckIcon />
                &nbsp;受講料
              </Button>{' '}
              <Button
                as={NextLink}
                href={'/contact'}
                fontWeight={600}
                color={'text'}
                _hover={{
                  bg: 'green.100'
                }}
              >
                <EmailIcon />
                &nbsp;info@studiokura.com
              </Button>
            </Text>
          </Main>
        </Box>
      </Center>
    </Container>
  )
}

export { ClassPlaceSlide3 }
