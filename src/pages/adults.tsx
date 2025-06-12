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
const totalCarouselImages = 3;
const carouselPeriod = 5000;

const AdultsClass = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [classTimes, setClassTimes] = useState<Array<classPlace> | null>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/get-class-times?classtype=adults')
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
    <Layout title="大人のための絵画教室｜Studio Kura 絵画教室（福岡県　糸島市　二丈）">
      <Navigation />

      <Container
        height="300px"
        bgImage={`https://${cdnDomain}/${cdnDirectory}adults-headercarousel-${
          carouselIndex + 1
        }.jpg`}
        backgroundSize="cover"
        backgroundPosition="center"
      />

      <Center>
        <Container maxW={['100%', '80%', '70%']}>
          <Heading mt="1em" mb="1em" size={['2xl', '4xl', '4xl']}>
            大人のための絵画教室
          </Heading>

          <Stack direction={['column', 'column', 'row']}>
            <Box>
              {/* Intro Card */}
              <Card.Root mt="1em" mb="1em" minW="100%">
                <Card.Header p={0}>
                  <Image
                    src={`https://${cdnDomain}/${cdnDirectory}adults-body-1.jpg`}
                    alt=""
                  />
                </Card.Header>
                <Card.Body>
                  <Text my="0.5em">
                    Studio
                    Kuraの絵画・美術教室は全く初めての方も気軽にいらしていただけるアトリエです。当アトリエでは様々な素材を使った絵画表現を習得し、楽しく美術に親しんでいただくことを目的としています。またStudio
                    Kuraのレジデンスプログラムを訪れる海外のアーティストが行うワークショプや、様々な交流を通して美術の面白さを体験できます。
                  </Text>
                </Card.Body>
              </Card.Root>

              {/* Features Card */}
              <Card.Root mt="1em" mb="1em" minW="100%">
                <Card.Header p={0}>
                  <Image
                    src={`https://${cdnDomain}/${cdnDirectory}adults-body-2.jpg`}
                    alt=""
                  />
                </Card.Header>
                <Card.Body>
                  <Heading size="lg">大人のための絵画教室の特色</Heading>
                  <Text my="0.5em">
                    <b>個性を重視</b>{' '}
                    デッサンの基礎から本格的な作品制作まで、それぞれの目的にあったカリキュラムで制作します。
                  </Text>
                  <Text my="0.5em">
                    <b>豊かな環境</b>{' '}
                    糸島の豊かな自然の中での制作活動が心をのびのびと開放させます。
                  </Text>
                  <Text my="0.5em">
                    <b>身近なアート</b> Studio Kuraの{' '}
                    <Link asChild>
                      <NextLink href="http://www.studiokura.info/residence/">
                        レジデンスプログラム
                      </NextLink>
                    </Link>{' '}
                    に滞在する海外アーティスト（毎月8~10名）のワークショップや展覧会、コンサートなどおもしろ企画が盛りだくさんです。
                  </Text>
                  <Text my="0.5em">
                    <b>豊富な資料</b>{' '}
                    教室内に沢山のアート系の本があり、貸し出しもしています。
                  </Text>
                </Card.Body>
              </Card.Root>

              {/* Pricing Card */}
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

              {/* YouTube Card */}
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
            </Box>

            {/* Sidebar */}
            <Box maxW={['100%', '100%', '40%']}>
              {/* Trial Signup */}
              <Card.Root mt="1em" mb="1em" minW="100%">
                <Card.Body>
                  <Heading size="lg" mb="0.5em">
                    体験教室
                  </Heading>
                  <TrialButton text="体験レッスンのお申し込み" size="sm" />
                  <Text my="0.5em">
                    初心者・希望者の方には、ご希望のお日にちで体験レッスン(2750円)を行っております。ご一緒に参加していただきながらの体験レッスンですので、教室の雰囲気や講師の指導方法などを実際に感じていただけます。お気軽にご参加くださいませ。
                  </Text>
                  <MailButton variant="outline" size="sm" mr={1} mt={1} />
                  <PhoneButton variant="outline" size="sm" mr={1} mt={1} />
                  <Text my="0.5em">
                    前日・当日のお申し込みはお電話のみとさせていただきます。
                  </Text>
                </Card.Body>
              </Card.Root>

              {/* Class Times */}
              <Card.Root mt="1em" mb="1em" minW="100%">
                <Card.Body>
                  <Heading size="lg" mb="0.5em">
                    大人のための絵画教室 実施校の時間
                  </Heading>
                  {isLoading && <Text my="0.5em">読み込み中・・・</Text>}
                  {classTimes?.map((place) => (
                    <Box key={place.name}>
                      <Heading size="md" mt="0.5em">
                        {place.name}
                      </Heading>
                      {place.weekdays.map((weekday, i) => (
                        <Box key={i}>
                          <Text mt="1em">{weekday.title}</Text>
                          {weekday.slots.map((slot, j) => (
                            <Text key={j}>{slot}</Text>
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

export default AdultsClass;
