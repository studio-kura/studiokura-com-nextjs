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
const totalCarouselImages = 3
const carouselPeriod = 5000

const AdultsClass = () => {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [classTimes, setClassTimes] = useState<Array<classPlace> | null>()
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetch('/api/get-class-times?classtype=adults')
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
    <Layout title="大人のための絵画教室｜Studio Kura 絵画教室（福岡県　糸島市　二丈）">
      <Navigation />
      <Container
        height={'300px'}
        bgImage={`https://${cdnDomain}/${cdnDirectory}adults-headercarousel-${
          carouselIndex + 1
        }.jpg`}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
      ></Container>
      <Center>
        <Container maxW={['95%', '80%', '70%']}>
          <Heading mt={'1em'} mb={'1em'} size={['2xl', '4xl', '4xl']}>
            大人のための絵画教室
          </Heading>
          <Stack direction={['column', 'column', 'row']}>
            <Box>
              <Card mt={'1em'} mb={'1em'} minW={'100%'}>
                <CardHeader p={'0px'}>
                  <Image
                    src={`https://${cdnDomain}/${cdnDirectory}adults-body-1.jpg`}
                  />
                </CardHeader>
                <CardBody>
                  <Text mt={'0.5em'} mb={'0.5em'}>
                    Studio
                    Kuraの絵画・美術教室は全く初めての方も気軽にいらしていただけるアトリエです。当アトリエでは様々な素材を使った絵画表現を習得し、楽しく美術に親しんでいただくこ
                    とを目的としています。またStudio
                    Kuraのレジデンスプログラムを訪れる海外のアーティストが行うワークショプや、様々な交流を通して美術の面白さを体験できます。
                  </Text>
                </CardBody>
              </Card>
              <Card mt={'1em'} mb={'1em'} minW={'100%'}>
                <CardHeader p={'0px'}>
                  <Image
                    src={`https://${cdnDomain}/${cdnDirectory}adults-body-2.jpg`}
                  />
                </CardHeader>
                <CardBody>
                  <Heading size="lg">大人のための絵画教室の特色</Heading>
                  <Text mt={'0.5em'} mb={'0.5em'}>
                    <b>個性を重視</b>{' '}
                    デッサンの基礎から本格的な作品制作まで、それぞれの目的にあったカリキュラムで制作します。
                  </Text>
                  <Text mt={'0.5em'} mb={'0.5em'}>
                    <b>豊かな環境</b>{' '}
                    糸島の豊かな自然の中での制作活動が心をのびのびと開放させます。
                  </Text>
                  <Text mt={'0.5em'} mb={'0.5em'}>
                    <b>身近なアート</b> Studio Kuraの
                    <Link href="http://www.studiokura.info/residence/">
                      レジデンスプログラム
                    </Link>
                    に滞在する海外アーティスト（毎月8~10名）のワークショップや展覧会、コンサートなどおもしろ企画が盛りだくさんです。
                  </Text>
                  <Text mt={'0.5em'} mb={'0.5em'}>
                    <b>豊富な資料</b>{' '}
                    教室内に沢山のアート系の本があり、貸し出しもしています。
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
                    初心者・希望者の方には、ご希望のお日にちで体験レッスン(2750円)を行っております。
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
                    前日・当日のお申し込みはお電話のみとさせていただきます。
                  </Text>
                </CardBody>
              </Card>
              <Card mt={'1em'} mb={'1em'} minW={'100%'}>
                <CardBody>
                  <Heading size="lg" mb={'0.5em'}>
                    大人のための絵画教室 実施校の時間
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
        <Footer />
      </Container>
    </Layout>
  )
}

export default AdultsClass
