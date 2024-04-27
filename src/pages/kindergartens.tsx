import { Box, Container, Heading, List, ListItem } from '@chakra-ui/react'

import { Layout } from '@/components/Layout'
import { Navigation } from '@/components/Navigation'
import {
  KindergartenTitleSlide,
  KindergartenBoxSlide
} from '@/components/KindergartenSlides'
import { Footer } from '@/components/Footer'

const Kindergartens = () => {
  return (
    <Layout title="Studio Kura絵画造形教室 幼稚園・保育園 課内・課外教室">
      <Navigation />

      <KindergartenTitleSlide
        title="Studio Kura 絵画造形教室"
        tagline="幼稚園・保育園向けの絵画造形出張レッスン"
        bgImageUrl="kindergartens-slide-1.jpg"
      />

      <KindergartenBoxSlide
        title="カリキュラム導入のご案内"
        bgImageUrl="kindergartens-slide-2.jpg"
      >
        <Box>
          <Heading size={'md'} my={'1em'}>
            正課 絵画造形教室
          </Heading>
          <p>
            園の方針に従いカリキュラムを開発します。画材等の準備もスタジオ
            クラが行います。 現在５０以上の園でStudio
            Kuraのカリキュラムが導入されています。
          </p>
          <List listStyleType={'default'} pl={'2em'} py={'1em'}>
            <ListItem>対象 3歳～5歳児</ListItem>
            <ListItem>レッスン時間 60分</ListItem>
          </List>
          <Heading size={'md'} my={'1em'}>
            課外 絵画造形教室
          </Heading>
          <p>
            月曜日～金曜日の決まった曜日に年間40回(もしくは24回)開講します。
          </p>
          <List listStyleType={'default'} pl={'2em'} py={'1em'}>
            <ListItem>対象 幼児～卒業生</ListItem>
            <ListItem>レッスン時間 60分</ListItem>
            <ListItem>貴園の費用負担は一切ありません。</ListItem>
          </List>
        </Box>
      </KindergartenBoxSlide>

      <KindergartenBoxSlide
        title="Studio Kura絵画造形教室の方針"
        bgImageUrl="kindergartens-slide-3.jpg"
      >
        <Box>
          <dl>
            <dt style={{ marginTop: '0.5em' }}>自主性：</dt>
            <dd>
              こどもらしい伸び伸びした感性を大切にします。子どもたちの自主を尊重し、自ら選び取り発展させていく力を育てることを目的に、絵画指導を行います。
            </dd>
            <dt style={{ marginTop: '0.5em' }}>プロセス：</dt>
            <dd>
              完成作品を作ることに自体に重きをおくのではなく、様々な制作の過程で子どもの感性が輝き、揺さぶられ、豊かに育つことを目的としています。
            </dd>
            <dt style={{ marginTop: '0.5em' }}>手触り：</dt>
            <dd>
              表現と認識の強い関係性に注目し、フィンガーペインティング、土粘土、木片など感覚的認識を高める素材を使った活動を豊富にカリキュラムに取り入れています。
            </dd>
            <dt style={{ marginTop: '0.5em' }}>発見：</dt>
            <dd>
              子どもの表現活動を芸術的なものとして捉え、そこに美的なものの発芽と生の表出をすくいとり、育てます。そのために、講師である私たちは芸術に対する広い視野と曇の無い目を持つ努力をしていきます。
            </dd>
          </dl>
        </Box>
      </KindergartenBoxSlide>

      <KindergartenBoxSlide
        title="Studio Kura絵画教室の特色"
        bgImageUrl="kindergartens-slide-4.jpg"
      >
        <Box>
          <dl>
            <dt style={{ marginTop: '0.5em' }}>創造力：</dt>
            <dd>
              様々な道具や素材を使った多彩な創作活動が子どもの想像力を高めます。
            </dd>
            <dt style={{ marginTop: '0.5em' }}>豊かな心：</dt>
            <dd>
              感情や情緒を育み、創造的で、個性的な心の働きを豊かにします。
            </dd>
            <dt style={{ marginTop: '0.5em' }}>コラボ力：</dt>
            <dd>
              グループで話し合い作っていく中で、現代社会で大事な単独では不可能なことを可能にし乗り越えていく（力ラボレーション力）を養います。
            </dd>
            <dt style={{ marginTop: '0.5em' }}>国際交流：</dt>
            <dd>
              Studio
              Kuraが招聘している海外の作家が授業に参加することがあります。国際交流の貴重な機会になっています。
            </dd>
          </dl>
        </Box>
      </KindergartenBoxSlide>

      <Container>
        <Footer />
      </Container>
    </Layout>
  )
}

export default Kindergartens
