import { Container } from '@chakra-ui/react';

import {
  ClassPlaceSlide1,
  ClassPlaceSlide2,
  ClassPlaceSlide3,
  // ClassPlaceSlideOtona,
  ClassPlaceSlideKodomo,
  // ClassPlaceSlideDenshi
} from '@/components/ClassPlaceSlides/';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';

const TakeoPlace = () => (
  <Layout title="Studio Kura 絵画教室 武雄校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 武雄校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-takeo.jpg"
    >
      ＊無料駐車場あり。詳しくはお問い合わせ下さい。
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 武雄校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-takeo.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/takeo"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 武雄校"
      tagline="子ども絵画造形教室"
      mapImageUrl="place-map-takeo-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E3%80%92843-0022+%E4%BD%90%E8%B3%80%E7%9C%8C%E6%AD%A6%E9%9B%84%E5%B8%82%E6%AD%A6%E9%9B%84%E7%94%BA%E5%A4%A7%E5%AD%97%E6%AD%A6%E9%9B%84%EF%BC%97%EF%BC%92%EF%BC%97%EF%BC%91"
      address="〒843-0022 佐賀県武雄市武雄町大字武雄７２７１"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default TakeoPlace;
