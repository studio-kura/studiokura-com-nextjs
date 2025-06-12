'use client';

import { MailButton, PhoneButton, TrialButton } from '@/components/Buttons';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { pricing } from '@/data/pricing';
import {
  AspectRatio,
  Box,
  Card,
  Center,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import Iframe from 'react-iframe';

type classWeekday = {
  title: string;
  slots: string[];
};
type classPlace = {
  name: string;
  weekdays: classWeekday[];
};
type classTimesResponse = {
  status: string;
  classTimes: classPlace[];
};

const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';
const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER ?? '';
const totalCarouselImages = 4;
const carouselPeriod = 5000;

const KidsClass = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [classTimes, setClassTimes] = useState<Array<classPlace> | null>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/get-class-times?classtype=kids')
      .then((res) => res.json())
      .then((data) => {
        const responseData = data as classTimesResponse;
        if (responseData.status !== 'success') return;
        setClassTimes(responseData.classTimes);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(
      () => setCarouselIndex((carouselIndex + 1) % totalCarouselImages),
      carouselPeriod
    );
    return () => clearTimeout(timer);
  }, [carouselIndex]);

  return (
    <Layout title="子ども絵画造形教室｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
      <Navigation />
      <Container
        height="300px"
        bgImage={`https://${cdnDomain}/${cdnDirectory}kids-headercarousel-${
          carouselIndex + 1
        }.jpg`}
        backgroundSize="cover"
        backgroundPosition="center"
      />
      <Center>
        <Container maxW={['100%', '80%', '70%']}>
          <Heading mt="1em" mb="1em" size={['2xl', '4xl', '4xl']}>
            子ども絵画造形教室
          </Heading>
          <Stack direction={['column', 'column', 'row']}>
            <Box>
              {['1', '2', '3', '4'].map((num, i) => (
                <Card.Root key={i} mt="1em" mb="1em" minW="100%">
                  <Card.Header p={0}>
                    <Image
                      src={`https://${cdnDomain}/${cdnDirectory}kids-body-${num}.jpg`}
                      alt={`kids-body-${num}`}
                    />
                  </Card.Header>
                  <Card.Body>
                    {i === 0 && (
                      <Heading size="lg">創造する子どものために</Heading>
                    )}
                    {i === 1 && (
                      <>
                        <Heading size="lg">
                          スタジオ クラ子ども絵画造形教室の方針
                        </Heading>
                        <Text my="0.5em">
                          <b>プロセス</b>{' '}
                          完成作品を作ることに自体に重きをおくのではなく、様々な制作の過程で子どもの感性が輝き、揺さぶられ、豊かに育つことを目的としています。
                        </Text>
                        <Text my="0.5em">
                          <b>手触り</b>{' '}
                          フィンガーペインティング、土粘土、木片など感覚的認識を高める素材を使った活動を豊富にカリキュラムに取り入れています。
                        </Text>
                        <Text my="0.5em">
                          <b>発見</b>{' '}
                          子どもの表現活動を芸術的なものとして捉え、美的なものの発芽と生の表出を育てます。
                        </Text>
                      </>
                    )}
                    {i === 2 && (
                      <>
                        <Heading size="lg">
                          スタジオクラ子ども絵画造形教室の特色
                        </Heading>
                        <Text my="0.5em">
                          <b>創造力</b>{' '}
                          多彩な創作活動が子どもの想像力を高めます。
                        </Text>
                        <Text my="0.5em">
                          <b>豊かな心</b>{' '}
                          感情や情緒を育み、個性的な心を豊かにします。
                        </Text>
                        <Text my="0.5em">
                          <b>コラボ力</b>{' '}
                          グループでの制作活動でコラボレーション力を育てます。
                        </Text>
                        <Text my="0.5em">
                          <b>国際交流</b> Studio
                          Kuraに滞在する海外の作家と交流する機会があります。
                        </Text>
                      </>
                    )}
                    {i === 3 && (
                      <>
                        <Heading size="lg">
                          スタジオクラ子ども絵画造形教室の環境
                        </Heading>
                        <Text my="0.5em">
                          多様性に富んだ製作環境が子どもたちの創作意欲を掻き立てます。
                        </Text>
                        <Text my="0.5em">
                          Studio Kuraは
                          <Link
                            as={NextLink}
                            href="http://www.studiokura.info/residence/"
                          >
                            レジデンスプログラム
                          </Link>
                          を実施し、多国籍作家と交流する機会もあります。
                        </Text>
                        <Text my="0.5em">
                          教室の前は雄大な田、後ろには山海。自然の中で心がのびのびと育ちます。
                        </Text>
                      </>
                    )}
                  </Card.Body>
                </Card.Root>
              ))}

              <Card.Root mt="1em" mb="1em" minW="100%">
                <Card.Body>
                  <Heading size="lg" mb="0.5em">
                    受講料
                  </Heading>
                  <Text>
                    月額 {pricing.twopermonth.toLocaleString()}円（月2回）
                    <br />
                    月額 {pricing.fourpermonth.toLocaleString()}円（月4回）
                  </Text>
                </Card.Body>
              </Card.Root>

              <Card.Root mt="1em" mb="1em" minW="100%">
                <Card.Body p={0}>
                  <AspectRatio ratio={16 / 9}>
                    <Iframe
                      width="640"
                      height="360"
                      url="https://www.youtube.com/embed/JJt_fkEJvKU"
                    />
                  </AspectRatio>
                </Card.Body>
              </Card.Root>

              <Card.Root mt="1em" mb="1em" minW="100%">
                <Card.Body>
                  <Heading size="lg">よくあるご質問</Heading>
                  <Heading size="md" my="0.5em">
                    絵画造形教室ではどんな事をするのですか？
                  </Heading>
                  <Text my="0.5em">
                    想像力、造形力を高め、ポジティブでクリエイティブな子どもを育てることを目的とし、絵だけでなく様々な素材を使った造形活動を行なっています。
                  </Text>
                </Card.Body>
              </Card.Root>
            </Box>

            <Box maxW={['100%', '100%', '40%']}>
              <Card.Root mt="1em" mb="1em" minW="100%">
                <Card.Body>
                  <Heading size="lg" mb="0.5em">
                    体験教室
                  </Heading>
                  <TrialButton text="体験レッスンのお申し込み" size="sm" />
                  <Text my="0.5em">
                    ご希望の日に体験レッスンを行っております。教室の雰囲気や指導方法を実際に体験してください。
                  </Text>
                  <MailButton variant="outline" size="sm" mr={1} mt={1} />
                  <PhoneButton variant="outline" size="sm" mr={1} mt={1} />
                  <Text my="0.5em">
                    ◊ 前日・当日のお申し込みはお電話のみとさせていただきます。
                  </Text>
                </Card.Body>
              </Card.Root>

              <Card.Root mt="1em" mb="1em" minW="100%">
                <Card.Body>
                  <Heading size="lg" mb="0.5em">
                    子ども絵画造形教室 実施校の時間
                  </Heading>
                  {isLoading && <Text my="0.5em">読み込み中・・・</Text>}
                  {classTimes?.map((place) => (
                    <Box key={place.name}>
                      <Heading size="md" mt="0.5em">
                        {place.name}
                      </Heading>
                      {place.weekdays.map((weekday, idx) => (
                        <Box key={idx}>
                          <Text mt="1em">{weekday.title}</Text>
                          {weekday.slots.map((slot, i) => (
                            <Text key={i}>{slot}</Text>
                          ))}
                        </Box>
                      ))}
                    </Box>
                  ))}
                </Card.Body>
              </Card.Root>
            </Box>
          </Stack>
        </Container>
      </Center>
      <Container>
        <Footer />
      </Container>
    </Layout>
  );
};

export default KidsClass;
