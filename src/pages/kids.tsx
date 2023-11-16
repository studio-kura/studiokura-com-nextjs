import { useState, useEffect } from 'react'
import {
  Text,
  AspectRatio,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Center,
  Image,
  Stack,
  Box,
  Button,
  Link
} from '@chakra-ui/react'
import { EditIcon, PhoneIcon, EmailIcon } from '@chakra-ui/icons'

import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import React from 'react'

type classWeekday = {
  title: string
  slots: string[]
}
type classPlace = {
  name: string
  weekdays: classWeekday[]
}
type classTimesResponse = {
  status: string
  classTimes: classPlace[]
}

const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? ''
const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? ''
const totalCarouselImages = 4
const carouselPeriod = 5000

const KidsClass = () => {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [classTimes, setClassTimes] = useState<Array<classPlace> | null>()
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetch('/api/get-class-times?classtype=kids')
      .then((res) => res.json())
      .then((data) => {
        const responseData = data as classTimesResponse
        if (responseData.status != 'success') return
        setClassTimes(responseData.classTimes)
        setLoading(false)
      })
  }, [])
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
        <Container maxW={['95%', '80%', '70%']}>
          <Heading mt={'1em'} mb={'1em'} size={['2xl', '4xl', '4xl']}>
            子ども絵画造形教室
          </Heading>
          <Stack direction={['column', 'column', 'row']}>
            <Box>
              <Card mt={'1em'} mb={'1em'} minW={'100%'}>
                <CardHeader p={'0px'}>
                  <Image
                    src={`https://${cdnDomain}/${cdnDirectory}kids-body-1.jpg`}
                  />
                </CardHeader>
                <CardBody>
                  <Heading size="lg">創造する子どものために</Heading>
                </CardBody>
              </Card>
              <Card mt={'1em'} mb={'1em'} minW={'100%'}>
                <CardHeader p={'0px'}>
                  <Image
                    src={`https://${cdnDomain}/${cdnDirectory}kids-body-2.jpg`}
                  />
                </CardHeader>
                <CardBody>
                  <Heading size="lg">
                    スタジオ クラ子ども絵画造形教室の方針
                  </Heading>
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
              <Card mt={'1em'} mb={'1em'} minW={'100%'}>
                <CardHeader p={'0px'}>
                  <Image
                    src={`https://${cdnDomain}/${cdnDirectory}kids-body-3.jpg`}
                  />
                </CardHeader>
                <CardBody>
                  <Heading size="lg">
                    スタジオクラ子ども絵画造形教室の特色
                  </Heading>
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
              <Card mt={'1em'} mb={'1em'} minW={'100%'}>
                <CardHeader p={'0px'}>
                  <Image
                    src={`https://${cdnDomain}/${cdnDirectory}kids-body-4.jpg`}
                  />
                </CardHeader>
                <CardBody>
                  <Heading size="lg">
                    スタジオクラ子ども絵画造形教室の環境
                  </Heading>
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
              <Card mt={'1em'} mb={'1em'} minW={'100%'}>
                <CardBody>
                  <Heading size="lg" mb={'0.5em'}>
                    受講料
                  </Heading>
                  <Text>
                    月額 5,500円（月2回）
                    <br />
                    月額 11,000円（月4回）
                  </Text>
                </CardBody>
              </Card>
              <Card mt={'1em'} mb={'1em'} minW={'100%'}>
                <CardBody p={'0px'}>
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      width="640"
                      height="360"
                      src="https://www.youtube.com/embed/JJt_fkEJvKU"
                    />
                  </AspectRatio>
                </CardBody>
              </Card>
              <Card mt={'1em'} mb={'1em'} minW={'100%'}>
                <CardBody>
                  <Heading size="lg">よくあるご質問</Heading>
                  <Heading size="md" mt={'0.5em'} mb={'0.5em'}>
                    絵画造形教室ではどんな事をするのですか？
                  </Heading>
                  <Text mt={'0.5em'} mb={'0.5em'}>
                    Studio
                    Kura絵画造形教室では、想像力、造形力を高め、ポジティブでクリエイティブな子どもに育てることを目的としています。そのために絵を描くだけではなく、粘土や木片など様々な素材を組み合わせた造形活動を積極的に行なっています。
                  </Text>
                  <Heading size="md" mt={'0.5em'} mb={'0.5em'}>
                    電車で通わせたいのですが、送迎はありますか？
                  </Heading>
                  <Text mt={'0.5em'} mb={'0.5em'}>
                    はい、糸島校はJR一貴山駅からの送迎をしております。
                  </Text>
                </CardBody>
              </Card>
            </Box>
            <Box maxW={['100%', '100%', '40%']}>
              <Card mt={'1em'} mb={'1em'} minW={'100%'}>
                <CardBody>
                  <Heading size="lg" mb={'0.5em'}>
                    体験教室
                  </Heading>
                  <Button
                    as={Link}
                    size={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'blue.500'}
                    href={'/trial'}
                    _hover={{
                      bg: 'blue.400'
                    }}
                  >
                    <EditIcon />
                    &nbsp;体験レッスンのお申し込み
                  </Button>{' '}
                  <Text mt={'0.5em'} mb={'0.5em'}>
                    初心者・希望者の方には、ご希望のお日にちで体験レッスンを行っております。
                    ご一緒に参加していただきながらの体験レッスンですので
                    教室の雰囲気や講師の指導方法などを実際に感じていただけます。
                    お気軽にご参加くださいませ。
                  </Text>
                  <Button
                    as={Link}
                    size={'sm'}
                    variant="outline"
                    href={'/contact'}
                    fontWeight={600}
                    color={'text'}
                    _hover={{
                      bg: 'gray.100'
                    }}
                  >
                    <EmailIcon />
                    &nbsp;info@studiokura.com
                  </Button>{' '}
                  <Button
                    as={'a'}
                    size={'sm'}
                    variant="outline"
                    fontWeight={600}
                    href={'tel:092-325-1773'}
                    color={'text'}
                    _hover={{
                      bg: 'gray.100'
                    }}
                  >
                    <PhoneIcon />
                    &nbsp;092-325-1773
                  </Button>{' '}
                  <Text mt={'0.5em'} mb={'0.5em'}>
                    ◊ 前日・当日のお申し込みはお電話のみとさせていただきます。
                  </Text>
                </CardBody>
              </Card>
              <Card mt={'1em'} mb={'1em'} minW={'100%'}>
                <CardBody>
                  <Heading size="lg" mb={'0.5em'}>
                    子ども絵画造形教室 実施校の時間
                  </Heading>
                  {isLoading && (
                    <Text mt={'0.5em'} mb={'0.5em'}>
                      読み込み中・・・
                    </Text>
                  )}
                  {classTimes != null &&
                    classTimes.map((place) => (
                      <>
                        <Heading size={'md'} mt={'0.5em'}>
                          {place.name}
                        </Heading>
                        {place.weekdays.map((weekday) => (
                          <>
                            <Text mt={'1em'}>{weekday.title}</Text>
                            {weekday.slots.map((slot) => (
                              <Text>{slot}</Text>
                            ))}
                          </>
                        ))}
                      </>
                    ))}
                </CardBody>
              </Card>
            </Box>
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
}

export default KidsClass
