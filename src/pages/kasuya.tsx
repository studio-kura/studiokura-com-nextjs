import { Container, Text } from '@chakra-ui/react'

import { Layout } from '@/components/Layout'
import { Navigation } from '@/components/Navigation'
import {
  ClassPlaceSlide1,
  ClassPlaceSlide2,
  ClassPlaceSlide3,
  ClassPlaceSlideOtona,
  ClassPlaceSlideKodomo
  // ClassPlaceSlideDenshi
} from '@/components/ClassPlaceSlides/'
import { Footer } from '@/components/Footer'

const KasuyaPlace = () => (
  <Layout title="Studio Kura 絵画教室 粕屋校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 絵画教室 粕屋校"
      tagline="大人の絵画教室・子ども絵画造形教室"
      bgImageUrl="placeslide1-kasuya.jpg"
    >
      若干名の受付再開中です。
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 絵画教室 粕屋校"
      tagline="大人の絵画教室・子ども絵画造形教室"
      bgImageUrl="placeslide2-kasuya.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/kasuya"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 絵画教室 粕屋校"
      tagline="大人の絵画教室・子ども絵画造形教室"
      bgImageUrl="placeslide3-kasuya.jpg"
      mapImageUrl="place-map-kasuya-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E3%80%92811-2303+%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%B3%9F%E5%B1%8B%E9%83%A1%E7%B2%95%E5%B1%8B%E7%94%BA%E5%A4%A7%E5%AD%97%E9%85%92%E6%AE%BF%E5%AD%97%E8%80%81%E3%83%8E%E6%9C%A8192%E2%88%92%EF%BC%91"
      address="〒811-2303 福岡県糟屋郡粕屋町酒殿字老ノ木192-1 イオンモール福岡 JEUGIAカルチャーセンター内 JR香椎線 酒殿駅から徒歩14分"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideOtona />
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer>
        <Text>© 2009-2023 Studio Kura 絵画教室 All rights reserved</Text>
      </Footer>
    </Container>
  </Layout>
)

export default KasuyaPlace
