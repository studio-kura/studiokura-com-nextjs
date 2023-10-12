import { Container, Text } from '@chakra-ui/react'
import { Navigation } from '@/components/Navigation'
import { ClassPlaceSlide1 } from '@/components/ClassPlaceSlides/ClassPlaceSlide1'
import { ClassPlaceSlide2 } from '@/components/ClassPlaceSlides/ClassPlaceSlide2'
import { ClassPlaceSlide3 } from '@/components/ClassPlaceSlides/ClassPlaceSlide3'
import { ClassPlaceSlideOtona } from '@/components/ClassPlaceSlides/ClassPlaceSlideOtona'
import { ClassPlaceSlideKodomo } from '@/components/ClassPlaceSlides/ClassPlaceSlideKodomo'
import { Footer } from '@/components/Footer'

const NishijinPlace = () => (
  <>
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 西新校"
      tagline="大人の絵画教室・子ども絵画造形教室"
      bgImageUrl="placeslide1-nishijin.jpg"
    >
      大人絵画　小・中学生は1.5時間です。
      子ども絵画造形　第2・4日のアドバンスドクラスは振替・体験レッスンの受付不可。
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 西新校"
      tagline="大人の絵画教室・子ども絵画造形教室"
      bgImageUrl="placeslide2-nishijin.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/nishijin"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 西新校"
      tagline="大人の絵画教室・子ども絵画造形教室"
      bgImageUrl="placeslide3-nishijin.jpg"
      mapImageUrl="place-map-nishijin-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E8%A5%BF%E6%96%B01%E4%B8%81%E7%9B%AE11-27+"
      address="福岡県福岡市西新1丁目11-27　ロフティ西新903号室"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideOtona />
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer>
        <Text>© 2009-2023 Studio Kura 絵画教室 All rights reserved</Text>
      </Footer>
    </Container>
  </>
)

export default NishijinPlace
