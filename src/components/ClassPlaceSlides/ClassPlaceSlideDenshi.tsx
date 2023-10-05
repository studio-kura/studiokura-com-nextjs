import {
  Text,
  Center,
  Box,
  Heading,
  Button,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'

type ClassPlaceSlideDenshiProps = {
  children?: string | Element
}

const ClassPlaceSlideDenshi = (props: ClassPlaceSlideDenshiProps) => {
  const { children } = props
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? ''
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? ''
  return (
    <Container
      bgImage={`https://${cdnDomain}/${cdnDirectory}placeslide-denshi.jpg`}
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
            <Heading>電子工作教室</Heading>
            <Box textAlign={'left'} pl={16} pr={16}>
              <Text mb={4}>
                面白いものを作りながら、ためになるスキルを身につけましょう！
                子供から大人まで楽しんでいただけます。
              </Text>
              <UnorderedList mb={4} ml={8}>
                <ListItem>初めてのプログラミング（Processing）</ListItem>
                <ListItem>小学校低学年向けプログラミング（Scratch）</ListItem>
                <ListItem>電子回路で工作（Arduino）</ListItem>
              </UnorderedList>
              <Text mb={4}>お仕事につかえる技術もプロから習えます！</Text>
              <Text mb={4}>是非おすすめしたい人：</Text>
              <UnorderedList mb={4} ml={8}>
                <ListItem>学校やお仕事でパソコンを使う予定がある人</ListItem>
                <ListItem>ゲームが好きな人</ListItem>
                <ListItem>ものを分解するのが好きな人</ListItem>
              </UnorderedList>
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

export { ClassPlaceSlideDenshi }
