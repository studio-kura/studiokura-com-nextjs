import { Text, Center, Box } from '@chakra-ui/react'
import { Container } from '@/components/Container'
import { PhoneButton } from '@/components/Buttons'

type KindergartenBoxSlideProps = {
  title: string
  bgImageUrl: string
  addButtons?: boolean
  children?: JSX.Element
}

const KindergartenBoxSlide = (props: KindergartenBoxSlideProps) => {
  const { title, bgImageUrl, addButtons = true, children } = props
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? ''
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? ''
  return (
    <Container
      bgImage={`https://${cdnDomain}/${cdnDirectory}${bgImageUrl}`}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      minH={'90vh'}
    >
      <Center py={6} px={4} my={'64px'}>
        <Box w={'full'} rounded={'xl'} p={0} pb={2}>
          <Text
            mt={'2em'}
            mb={'1em'}
            color="white"
            fontWeight={'bold'}
            fontSize={['1.5em', '2em']}
            textShadow={'black 0.03em 0.03em 0.03em;'}
          >
            {title}
          </Text>
          <Box
            bgColor={'#fffd'}
            minH={'30vh'}
            maxW={'1000px'}
            p={['1em', '2em', '4em']}
          >
            <>{children}</>
          </Box>
          {addButtons && (
            <Box mt={'1em'}>
              <PhoneButton />
            </Box>
          )}
        </Box>
      </Center>
    </Container>
  )
}

export { KindergartenBoxSlide }
