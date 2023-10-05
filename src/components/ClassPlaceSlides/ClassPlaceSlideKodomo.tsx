import { Text, Center, Box, Heading, Button } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'

type ClassPlaceSlideKodomoProps = {
  children?: string | Element
}

const ClassPlaceSlideKodomo = (props: ClassPlaceSlideKodomoProps) => {
  const { children } = props
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? ''
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? ''
  return (
    <Container
      bgImage={`https://${cdnDomain}/${cdnDirectory}placeslide-kodomo.jpg`}
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
            <Heading>子ども絵画造形教室</Heading>
            <Box textAlign={'left'} pl={16} pr={16}>
              <Text mb={4}>
                スタジオ
                クラ絵画造形教室は、現代の子どもを取り巻く環境の中で、どんどん減ってきている創造的に遊ぶ場、創作活動する場を子どもたちに提供して
                います。
              </Text>
              <Text mb={4}>
                こどもたちの発展段階に応じたカリキュラムを通じて、こどもの心をのびのびと育て、創造性をぐんぐん伸ばします。
              </Text>
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
              </Button>
            </Text>
          </Main>
        </Box>
      </Center>
    </Container>
  )
}

export { ClassPlaceSlideKodomo }
