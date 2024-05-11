import { useState } from 'react'
import { Text, Center, Box, Button, HStack } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Container } from '@/components/Container'
import Iframe from 'react-iframe'

type KindergartenVideoSlideProps = {
  title: string
  bgImageUrl: string
  iframeUrls: string[]
}

const KindergartenVideoSlide = (props: KindergartenVideoSlideProps) => {
  const { title, bgImageUrl, iframeUrls } = props
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? ''
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? ''

  const [videoIndex, setVideoIndex] = useState(0)
  const switchRight = () => setVideoIndex((videoIndex + 1) % iframeUrls.length)
  const switchLeft = () =>
    setVideoIndex((videoIndex + iframeUrls.length - 1) % iframeUrls.length)

  return (
    <Container
      bgImage={`https://${cdnDomain}/${cdnDirectory}${bgImageUrl}`}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      h={'90vh'}
    >
      <Center py={6} px={4}>
        <Box w={'full'} rounded={'xl'} p={0} pb={2}>
          <Text
            ml={'2em'}
            mt={'2em'}
            mb={'1em'}
            color="white"
            fontWeight={'bold'}
            fontSize={['1.5em', '2em']}
            textShadow={'black 0.03em 0.03em 0.03em;'}
          >
            {title} {videoIndex + 1}
          </Text>
          <HStack>
            <Button variant={'solid'} bgColor={'#fff8'} onClick={switchLeft}>
              <ArrowLeftIcon />
            </Button>
            <Iframe
              url={iframeUrls[videoIndex]}
              width={'560px'}
              height={'315px'}
              display={'block'}
              position={'relative'}
            />
            <Button variant={'solid'} bgColor={'#fff8'} onClick={switchRight}>
              <ArrowRightIcon />
            </Button>
          </HStack>
        </Box>
      </Center>
    </Container>
  )
}

export { KindergartenVideoSlide }
