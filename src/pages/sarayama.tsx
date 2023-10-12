import { Container, Text } from '@chakra-ui/react'
import { Navigation } from '@/components/Navigation'
import {
  ClassPlaceSlide1,
  ClassPlaceSlide2,
  ClassPlaceSlide3,
  // ClassPlaceSlideOtona,
  ClassPlaceSlideKodomo
  // ClassPlaceSlideDenshi
} from '@/components/ClassPlaceSlides/'
import { Footer } from '@/components/Footer'

const SarayamaPlace = () => (
  <>
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 皿山校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-sarayama.jpg"
    >
      現在定員の為、キャンセル待ちからのご案内です
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 皿山校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-sarayama.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/sarayama"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 皿山校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide3-sarayama.jpg"
      mapImageUrl="place-map-sarayama-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E5%8D%97%E5%8C%BA%E7%9A%BF%E5%B1%B1%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%91%E2%88%92%EF%BC%95%EF%BC%97+"
      address="福岡県福岡市南区皿山２丁目１−５７ ＹＯＧＩＮＩ"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer>
        <Text>© 2009-2023 Studio Kura 絵画教室 All rights reserved</Text>
      </Footer>
    </Container>
  </>
)

export default SarayamaPlace
