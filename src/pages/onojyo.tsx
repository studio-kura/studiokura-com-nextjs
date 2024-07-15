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

const OnojyoPlace = () => (
  <Layout title="Studio Kura 絵画教室 大野城校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 大野城校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-onojyo.jpg"
    >
      毎月第１・３火曜日17時〜レッスンを行っています。体験教室を受付中です。
      3歳以上の方から受け入れが可能です。
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 大野城校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-onojyo.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/onojyo"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 大野城校"
      tagline="子ども絵画造形教室"
      mapImageUrl="place-map-onojyo-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E3%80%92816-0935+%E7%A6%8F%E5%B2%A1%E7%9C%8C%E5%A4%A7%E9%87%8E%E5%9F%8E%E5%B8%82%E9%8C%A6%E7%94%BA%EF%BC%94%E4%B8%81%E7%9B%AE%EF%BC%91%E2%88%92%EF%BC%91"
      address="〒816-0935 福岡県大野城市錦町４丁目１−１ イオン大野城ショッピングセンター カルチャータウン イオン大野城校内"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default OnojyoPlace;
