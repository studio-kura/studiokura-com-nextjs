import { Container, Text } from '@chakra-ui/react'

import { Layout } from '@/components/Layout'
import { Navigation } from '@/components/Navigation'
import {
  ClassPlaceSlide1,
  ClassPlaceSlide2,
  ClassPlaceSlide3,
  ClassPlaceSlideOtona,
  ClassPlaceSlideKodomo,
  ClassPlaceSlideDenshi
} from '@/components/ClassPlaceSlides/'
import { Footer } from '@/components/Footer'

const ItoshimaPlace = () => (
  <Layout title="Studio Kura 絵画教室 糸島校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 糸島校"
      tagline="大人の絵画教室・子ども絵画造形教室・電子工作教室"
      bgImageUrl="placeslide1-itoshima.jpg"
    >
      大人絵画　小・中学生は1.5時間です。
      子ども絵画造形　第2・4日のアドバンスドクラスは振替・体験レッスンの受付不可。
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 糸島校"
      tagline="大人の絵画教室・子ども絵画造形教室・電子工作教室"
      bgImageUrl="placeslide2-itoshima.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/itoshima"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 糸島校"
      tagline="大人の絵画教室・子ども絵画造形教室・電子工作教室"
      bgImageUrl="placeslide3-itoshima.jpg"
      mapImageUrl="place-map-itoshima-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%B3%B8%E5%B3%B6%E5%B8%82%E4%BA%8C%E4%B8%88%E6%9D%BE%E6%9C%AB586"
      address="〒819-1613 福岡県糸島市二丈松末586（一貴山駅からの送迎しております）"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideOtona />
    <ClassPlaceSlideKodomo />
    <ClassPlaceSlideDenshi />
    <Container>
      <Footer>
        <Text>© 2009-2023 Studio Kura 絵画教室 All rights reserved</Text>
      </Footer>
    </Container>
  </Layout>
)

export default ItoshimaPlace
