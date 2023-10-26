import { useState, useEffect } from 'react'
import {
  Text,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Center,
  Image,
  Link
} from '@chakra-ui/react'

import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import React from 'react'

const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? ''
const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? ''
const totalCarouselImages = 4
const carouselPeriod = 5000

const KidsClass = () => {
  const [carouselIndex, setCarouselIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => setCarouselIndex((carouselIndex + 1) % totalCarouselImages),
      carouselPeriod
    )
    return () => clearTimeout(timer)
  }, [carouselIndex])
  return (
    <Layout title="子ども絵画造形教室｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
      <Navigation />
      <Container
        height={'300px'}
        bgImage={`https://${cdnDomain}/${cdnDirectory}kids-headercarousel-${
          carouselIndex + 1
        }.jpg`}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
      ></Container>
      <Center>
        <Container maxW="container.sm">
          <Heading mt={'1em'} mb={'1em'} size={['2xl', '4xl', '4xl']}>
            子ども絵画造形教室
          </Heading>
          <Card mt={'1em'} mb={'1em'}>
            <CardHeader p={'0px'}>
              <Image
                src={`https://${cdnDomain}/${cdnDirectory}kids-body-1.jpg`}
              />
            </CardHeader>
            <CardBody>
              <Heading size="md">創造する子どものために</Heading>
            </CardBody>
          </Card>
          <Card mt={'1em'} mb={'1em'}>
            <CardHeader p={'0px'}>
              <Image
                src={`https://${cdnDomain}/${cdnDirectory}kids-body-2.jpg`}
              />
            </CardHeader>
            <CardBody>
              <Heading size="md">スタジオ クラ子ども絵画造形教室の方針</Heading>
              <Text mt={'0.5em'} mb={'0.5em'}>
                <b>プロセス</b>
                完成作品を作ることに自体に重きをおくのではなく、様々な制作の過程で子どもの感性が輝き、揺さぶられ、豊かに育つことを目的としています。
              </Text>
              <Text mt={'0.5em'} mb={'0.5em'}>
                <b>手触り</b>
                表現と認識の強い関係性に注目し、フィンガーペインティング、土粘土、木片など感覚的認識を高める素材を使った活動を豊富にカリキュラムに取り入れています。
              </Text>
              <Text mt={'0.5em'} mb={'0.5em'}>
                <b>発見</b>
                子どもの表現活動を芸術的なものとして捉え、そこに美的なものの発芽と生の表出をすくいとり、育てます。そのために、講師である私たちは芸術に対する広い視野と曇の無い目を持つ努力をしていきます。
              </Text>
            </CardBody>
          </Card>
          <Card mt={'1em'} mb={'1em'}>
            <CardHeader p={'0px'}>
              <Image
                src={`https://${cdnDomain}/${cdnDirectory}kids-body-3.jpg`}
              />
            </CardHeader>
            <CardBody>
              <Heading size="md">スタジオクラ子ども絵画造形教室の特色</Heading>
              <Text mt={'0.5em'} mb={'0.5em'}>
                <b>創造力</b>{' '}
                様々な道具や素材を使った多彩な創作活動が子どもの想像力を高めます。
              </Text>
              <Text mt={'0.5em'} mb={'0.5em'}>
                <b>豊かな心</b>{' '}
                感情や情緒を育み、創造的で、個性的な心の働きを豊かにします。
              </Text>
              <Text mt={'0.5em'} mb={'0.5em'}>
                <b>コラボ力</b>{' '}
                グループで話し合い作っていく中で、現代社会で大事な単独では不可能なことを可能にし乗り越えていく（コラボレーション力）を養います。
              </Text>
              <Text mt={'0.5em'} mb={'0.5em'}>
                <b>国際交流</b> Studio
                Kuraが毎年約100名招聘している海外の作家がレッスンに参加することがあります。国際交流の貴重な機会になっています。
              </Text>
            </CardBody>
          </Card>
          <Card mt={'1em'} mb={'1em'}>
            <CardHeader p={'0px'}>
              <Image
                src={`https://${cdnDomain}/${cdnDirectory}kids-body-4.jpg`}
              />
            </CardHeader>
            <CardBody>
              <Heading size="md">スタジオクラ子ども絵画造形教室の環境</Heading>
              <Text mt={'0.5em'} mb={'0.5em'}>
                大人の絵画教室、電子工作室の多様性に富んだ製作環境、創造物に囲まれることが子どもたちの創作意欲を掻き立てます。
              </Text>
              <Text mt={'0.5em'} mb={'0.5em'}>
                Studio Kuraは毎月8名の海外アーティストを滞在製作させる
                <Link href="http://www.studiokura.info/residence/">
                  レジデンスプログラム
                </Link>
                を行っています（現在まで24カ国50名の作家が滞在）。海外の作家の様々な考え方、製作現場を身近に見るこができます。又海外作家によるワークショップを行っています。
              </Text>
              <Text mt={'0.5em'} mb={'0.5em'}>
                Studio Kura
                Galleryにて企画されている様々な作家の展示を見ることが出来ます。
              </Text>
              <Text mt={'0.5em'} mb={'0.5em'}>
                教室の前は雄大な田、後ろには山海があり、糸島の豊かな自然の中での造形活動が子どもの心をのびのびと開放させます。
              </Text>
            </CardBody>
          </Card>
        </Container>
      </Center>
      <Container>
        <Footer>
          <Text>© 2009-2023 Studio Kura 絵画教室 All rights reserved</Text>
        </Footer>
      </Container>
    </Layout>
  )
}

export default KidsClass
