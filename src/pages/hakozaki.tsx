import { Container, Text } from '@chakra-ui/react'
import { Navigation } from '@/components/Navigation'
import { ClassPlaceSlide1 } from '@/components/ClassPlaceSlides/ClassPlaceSlide1'
import { ClassPlaceSlide2 } from '@/components/ClassPlaceSlides/ClassPlaceSlide2'
import { ClassPlaceSlide3 } from '@/components/ClassPlaceSlides/ClassPlaceSlide3'
import { ClassPlaceSlideKodomo } from '@/components/ClassPlaceSlides/ClassPlaceSlideKodomo'
import { Footer } from '@/components/Footer'

const HakozakiPlace = () => (
  <>
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 箱崎校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-hakozaki.jpg"
    >
      現在定員の為、キャンセル待ちからのご案内です
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 箱崎校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-hakozaki.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/hakozaki"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 箱崎校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide3-hakozaki.jpg"
      mapImageUrl="place-map-hakozaki-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E7%A6%8F%E5%B2%A1%E5%B8%82%E6%9D%B1%E5%8C%BA%E7%AE%B1%E5%B4%8E1-45-25"
      address=" 812-0053 福岡市東区箱崎1-45-25（筥崎宮参道沿い） "
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer>
        <Text>© 2009-2023 Studio Kura 絵画教室 All rights reserved</Text>
      </Footer>
    </Container>
  </>
)

export default HakozakiPlace
