import NextLink from 'next/link'
import {
  Text,
  Center,
  Heading,
  Stack,
  AspectRatio,
  Tag,
  TagLabel,
  Box,
  Image,
  Button
} from '@chakra-ui/react'
import { EditIcon, PhoneIcon, CheckCircleIcon } from '@chakra-ui/icons'

import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? ''
const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? ''

const ClassPlaceLinkButton = (props: { name: string; href: string }) => (
  <Box px={['50px', '40px', '50px']} py={'20px'}>
    <Button
      as={NextLink}
      fontWeight={600}
      color={'white'}
      bg={'orange.500'}
      href={props.href}
      borderRadius={20}
      _hover={{
        bg: 'orange.400'
      }}
    >
      {props.name}
    </Button>
  </Box>
)

const ProgrammingClass = () => (
  <Layout title="Studio Kura 電子工作教室 | Studio Kura 絵画美術教室（福岡県 糸島市 二丈 西新 武雄 橋本 久留米）">
    <Navigation />
    <Container
      // TODO: Add p5.js script
      height={'300px'}
      bgImage={`https://${cdnDomain}/${cdnDirectory}adults-headercarousel-2.jpg`}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
    ></Container>
    <Center>
      {/* Top section */}
      <Container maxW={['95%', '80%', '70%']}>
        <Heading mt={'1em'} mb={'1em'} size={['2xl', '4xl', '4xl']}>
          電子工作教室
        </Heading>
        <Stack direction={['column', 'column', 'row']}>
          <Box minW={'40vw'}>
            <Tag
              size={'lg'}
              key={'lg'}
              borderRadius="full"
              variant="solid"
              colorScheme="yellow"
            >
              <CheckCircleIcon />
              &nbsp;<TagLabel>10年以上の実績 </TagLabel>
            </Tag>
            <Heading mt={'1em'} mb={'1em'}>
              プログラミングをはじめよう
            </Heading>
            <Text mt={'1em'} mb={'1em'}>
              キーボードがまだ打てない方からアプリやウェブサイトを既にリリースされている方まで
            </Text>
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
          </Box>
          <Box minW={'40vw'}>
            <AspectRatio ratio={16 / 9}>
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/Ph9gzC7ytsM"
              />
            </AspectRatio>
          </Box>
        </Stack>
        {/* Links to places doing programming classes */}
        <Box mt={'4em'}>
          近くの教室、もしくはオンラインで授業を受けましょう。
          <br />
          時間割、アクセスは各教室のリンク先をご確認ください。
        </Box>
        <Stack direction={['column', 'column', 'row']} mt={'1em'}>
          <ClassPlaceLinkButton name={'糸島校'} href={'/itoshima'} />
          <ClassPlaceLinkButton name={'橋本校'} href={'/hashimoto'} />
          <ClassPlaceLinkButton name={'久留米校'} href={'/kurume'} />
          <ClassPlaceLinkButton name={'オンライン校'} href={'/online'} />
        </Stack>
        {/* Languages section */}
        <Stack direction={['column', 'column', 'row']} mt={'4em'}>
          <Box w={['100%', '530px', '530px']}>
            <iframe
              src="https://scratch.mit.edu/projects/645939820/embed"
              width="485"
              height="402"
            ></iframe>
          </Box>
          <Box>
            <Heading>
              学べる言語や
              <br />
              フレームワーク
            </Heading>
            <Text>
              わかりやすさ、楽しさ、また役に立つことを考慮してカリキュラムを作成しています。楽しみながらプログラミング能力が身につきます。
            </Text>
            <Stack direction={'column'}>
              <Box mt={'1em'}>
                <Stack direction={'row'}>
                  <Image
                    src={`https://${cdnDomain}/${cdnDirectory}programming-logo-scratch.png`}
                    w={'64px'}
                    h={'64px'}
                  ></Image>
                  <Box>
                    <Heading size={'l'}>Scratch</Heading>
                    <Text>
                      MITで開発されて、世界中で使われている
                      ドラッグ&ドロッププログラミング環境
                    </Text>
                  </Box>
                </Stack>
              </Box>
              <Box mt={'1em'}>
                <Stack direction={'row'}>
                  <Image
                    src={`https://${cdnDomain}/${cdnDirectory}programming-logo-p5js.png`}
                    w={'64px'}
                    h={'64px'}
                  ></Image>
                  <Box>
                    <Heading size={'l'}>p5.js</Heading>
                    <Text>
                      ゲームからNFTアートまで作ることができる
                      JavaScriptで書くフレームワーク
                    </Text>
                  </Box>
                </Stack>
              </Box>
              <Box mt={'1em'}>
                <Stack direction={'row'}>
                  <Image
                    src={`https://${cdnDomain}/${cdnDirectory}programming-logo-arduino.jpg`}
                    w={'64px'}
                    h={'64px'}
                  ></Image>
                  <Box>
                    <Heading size={'l'}>Arduino</Heading>
                    <Text>
                      電子回路をコンピューターで制御できる
                      C言語を駆使したフレームワーク
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Stack
          direction={['column', 'column', 'row']}
          mt={'1em'}
          maxW={['100%', '80%', '80%']}
        >
          <Heading minW={'50%'} py={'40px'}>
            どの端末でも学べる
          </Heading>
          <Text
            minW={'50%'}
            borderLeft={'1px'}
            borderColor={'#ccc'}
            paddingLeft={'1em'}
            py={'40px'}
          >
            特に新しくないパソコン、タブレットなどでも、ブラウザーだけあれば使えるプログラミング環境を教えておりますので、練習・制作・オンライン授業はどこでもできます。
          </Text>
        </Stack>
      </Container>
    </Center>
    <Container>
      <Footer>
        <Text>© 2009-2023 Studio Kura 絵画教室 All rights reserved</Text>
      </Footer>
    </Container>
  </Layout>
)

export default ProgrammingClass
