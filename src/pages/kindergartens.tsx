import { Box, Container, Heading, List, ListItem } from '@chakra-ui/react'

import { Layout } from '@/components/Layout'
import { Navigation } from '@/components/Navigation'
import {
  KindergartenSlide1,
  KindergartenSlide2
} from '@/components/KindergartenSlides'
import { Footer } from '@/components/Footer'

const Kindergartens = () => {
  return (
    <Layout title="Studio Kura絵画造形教室 幼稚園・保育園 課内・課外教室">
      <Navigation />
      <KindergartenSlide1
        title="Studio Kura 絵画造形教室"
        tagline="幼稚園・保育園向けの絵画造形出張レッスン"
        bgImageUrl="kindergartens-slide-1.jpg"
      />
      <KindergartenSlide2
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
      </KindergartenSlide2>
      <Container>
        <Footer />
      </Container>
    </Layout>
  )
}

export default Kindergartens
