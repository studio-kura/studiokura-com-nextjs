import { Container } from '@chakra-ui/react';

import {
  ClassPlaceSlide1,
  ClassPlaceSlide2,
  ClassPlaceSlide3,
  ClassPlaceSlideDenshi,
  ClassPlaceSlideKodomo,
  ClassPlaceSlideOtona,
} from '@/components/ClassPlaceSlides/';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';

const KurumePlace = () => (
  <Layout title="Studio Kura 絵画教室 久留米校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 久留米校"
      tagline="大人の絵画教室・子ども絵画造形教室・電子工作教室"
      bgImageUrl="placeslide1-kurume.jpg"
    >
      第1.3土曜日午前の子ども絵画造形と、日曜日の大人絵画は定員の為キャンセル待ちからのご案内です。
      土曜日15時クラスはアドバンスドクラス（小学校高学年・中学生）と大人絵画の混合レッスンです
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 久留米校"
      tagline="大人の絵画教室・子ども絵画造形教室・電子工作教室"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/kurume"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 久留米校"
      tagline="大人の絵画教室・子ども絵画造形教室・電子工作教室"
      bgImageUrl="placeslide3-kurume.jpg"
      mapImageUrl="place-map-kurume-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E7%A6%8F%E5%B2%A1%E7%9C%8C%E4%B9%85%E7%95%99%E7%B1%B3%E5%B8%82%E5%A4%A9%E7%A5%9E%E7%94%BA31-6"
      address="福岡県久留米市天神町31-6　朝日ビル502"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideOtona />
    <ClassPlaceSlideKodomo />
    <ClassPlaceSlideDenshi />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default KurumePlace;
