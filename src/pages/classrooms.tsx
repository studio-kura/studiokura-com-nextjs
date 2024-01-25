import { Heading } from '@chakra-ui/react'
import { Layout, CardStack } from '@/components/Layout'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import {
  BefuCard,
  HakozakiCard,
  HashimotoCard,
  ItoshimaCard,
  KaratsuCard,
  KashiiCard,
  KasuyaCard,
  KurumeCard,
  MomochiCard,
  MotookaCard,
  NagazumiCard,
  NishijinCard,
  OnlineCard,
  OnojyoCard,
  SarayamaCard,
  TakeoCard
} from '@/components/ClassPlaces'

const Classrooms = () => (
  <Layout title="教室一覧｜Studio Kura 絵画美術教室（福岡県）">
    <Navigation />
    <Container height={'300px'} minW={'100%'}>
      <Heading mt={'1em'} size={['2xl', '4xl', '4xl']}>
        Studio Kura 教室一覧
      </Heading>
    </Container>
    <Container>
      <Heading size={'xl'}>糸島市</Heading>
      <CardStack>
        <ItoshimaCard />
      </CardStack>
      <Heading mt={16} size={'xl'}>
        福岡市東区
      </Heading>
      <CardStack>
        <KashiiCard />
        <HakozakiCard />
      </CardStack>
      <Heading mt={16} size={'xl'}>
        福岡市南区
      </Heading>
      <CardStack>
        <SarayamaCard />
        <NagazumiCard />
      </CardStack>
      <Heading mt={16} size={'xl'}>
        福岡市早良区
      </Heading>
      <CardStack>
        <NishijinCard />
        <MomochiCard />
      </CardStack>
      <Heading mt={16} size={'xl'}>
        福岡市西区
      </Heading>
      <CardStack>
        <MotookaCard />
        <HashimotoCard />
      </CardStack>
      <Heading mt={16} size={'xl'}>
        福岡市城南区
      </Heading>
      <CardStack>
        <BefuCard />
      </CardStack>
      <Heading mt={16} size={'xl'}>
        福岡県大野城市
      </Heading>
      <CardStack>
        <OnojyoCard />
      </CardStack>
      <Heading mt={16} size={'xl'}>
        福岡県糟屋郡粕屋町
      </Heading>
      <CardStack>
        <KasuyaCard />
      </CardStack>
      <Heading mt={16} size={'xl'}>
        福岡県久留米市
      </Heading>
      <CardStack>
        <KurumeCard />
      </CardStack>
      <Heading mt={16} size={'xl'}>
        佐賀県唐津市
      </Heading>
      <CardStack>
        <KaratsuCard />
      </CardStack>
      <Heading mt={16} size={'xl'}>
        佐賀県武雄市
      </Heading>
      <CardStack>
        <TakeoCard />
      </CardStack>
      <Heading mt={16} size={'xl'}>
        オンライン
      </Heading>
      <CardStack>
        <OnlineCard />
      </CardStack>
      <Footer />
    </Container>
  </Layout>
)

export default Classrooms
