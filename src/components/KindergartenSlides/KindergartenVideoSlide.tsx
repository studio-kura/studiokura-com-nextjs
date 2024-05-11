import { Text, Center, Box } from '@chakra-ui/react'
import { Container } from '@/components/Container'
import Iframe from 'react-iframe'

type KindergartenVideoSlideProps = {
  title: string
  bgImageUrl: string
  iframeUrls: string[]
}

const KindergartenVideoSlide = (props: KindergartenVideoSlideProps) => {
  const { title, bgImageUrl } = props
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? ''
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? ''
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
            mt={'2em'}
            mb={'1em'}
            color="white"
            fontWeight={'bold'}
            fontSize={['1.5em', '2em']}
            textShadow={'black 0.03em 0.03em 0.03em;'}
          >
            {title}
          </Text>
          <Iframe
            url={props.iframeUrls[0]}
            width={'560px'}
            height={'315px'}
            display={'block'}
            position={'relative'}
          />
        </Box>
      </Center>
    </Container>
  )
}

export { KindergartenVideoSlide }
