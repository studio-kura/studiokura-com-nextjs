import { Text, Center, Box, Heading } from '@chakra-ui/react'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'
import { TrialButton } from '../Buttons'

type ClassPlaceSlideOtonaProps = {
  children?: string | Element
}

const ClassPlaceSlideOtona = (props: ClassPlaceSlideOtonaProps) => {
  const { children } = props
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? ''
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? ''
  return (
    <Container
      bgImage={`https://${cdnDomain}/${cdnDirectory}placeslide-otona.jpg`}
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
          <Main bgColor={'#fffd'} pt={'2em'} pb={'1em'} maxWidth={'800px'}>
            <Heading>大人の絵画教室</Heading>
            <Box textAlign={'left'} pl={16} pr={16}>
              <Text mb={4}>
                Studio
                Kuraの絵画・美術教室は全く初めての方も気軽にいらしていただけるアトリエです。
              </Text>
              <Text mb={4}>
                当アトリエでは様々な素材を使った絵画表現を習得し、楽しく美術に親しんでいただくことを目的としています。
              </Text>
              <Text mb={4}>
                またStudio
                Kuraのレジデンスプログラムを訪れる海外のアーティストが行うワークショプや、様々な交流を通して美術の面白さを体験できます。
              </Text>
            </Box>
            <Text color="white" fontSize={'2em'}>
              <>{children}</>
              <TrialButton />
            </Text>
          </Main>
        </Box>
      </Center>
    </Container>
  )
}

export { ClassPlaceSlideOtona }
