import { Text, Center, Box } from '@chakra-ui/react'
import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'

type KindergartenSlide1Props = {
  title: string
  tagline: string
  bgImageUrl: string
  children?: string | Element
}

const KindergartenSlide1 = (props: KindergartenSlide1Props) => {
  const { title, tagline, bgImageUrl, children } = props
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
          <Hero
            title={title}
            color={'white'}
            textShadow={'black 0.03em 0.03em 0.03em;'}
          />
          <Main>
            <Text
              color="white"
              fontSize={'2em'}
              textShadow={'black 0.03em 0.03em 0.03em;'}
            >
              {tagline}
            </Text>
            <Text
              color="white"
              fontSize={'2em'}
              textShadow={'black 0.03em 0.03em 0.03em;'}
            >
              <>{children}</>
            </Text>
          </Main>
        </Box>
      </Center>
    </Container>
  )
}

export { KindergartenSlide1 }
