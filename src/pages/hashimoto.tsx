import { Container, Text } from '@chakra-ui/react'

import { Layout } from '@/components/Layout'
import { Navigation } from '@/components/Navigation'
import {
  ClassPlaceSlide1,
  ClassPlaceSlide2,
  ClassPlaceSlide3,
  // ClassPlaceSlideOtona,
  ClassPlaceSlideKodomo,
  ClassPlaceSlideDenshi
} from '@/components/ClassPlaceSlides/'
import { Footer } from '@/components/Footer'

const HashimotoPlace = () => (
  <Layout title="Studio Kura 絵画教室 橋本校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 橋本校"
      tagline="子ども絵画造形教室・電子工作教室"
      bgImageUrl="placeslide1-hashimoto.jpg"
    >
      2023年4月度より、人気の土曜日絵画造形クラスを増設しました。若干名ご案内可能です。
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 橋本校"
      tagline="子ども絵画造形教室・電子工作教室"
      bgImageUrl="placeslide2-hashimoto.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/hashimoto"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 橋本校"
      tagline="子ども絵画造形教室・電子工作教室"
      bgImageUrl="placeslide3-hashimoto.jpg"
      mapImageUrl="place-map-hashimoto-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E8%A5%BF%E5%8C%BA%E6%A9%8B%E6%9C%AC2-27-2"
      address="〒819-0031 福岡県福岡市西区橋本2-27-2 木の葉モール橋本 JEUGIAカルチャーセンター内"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <ClassPlaceSlideDenshi />
    <Container>
      <Footer />
    </Container>
  </Layout>
)

export default HashimotoPlace
