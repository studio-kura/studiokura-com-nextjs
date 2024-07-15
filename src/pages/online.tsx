import { Container } from '@chakra-ui/react';

import {
  ClassPlaceSlide1,
  ClassPlaceSlide2,
  ClassPlaceSlide3,
  // ClassPlaceSlideOtona,
  // ClassPlaceSlideKodomo,
  ClassPlaceSlideDenshi,
} from '@/components/ClassPlaceSlides/';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';

const OnlinePlace = () => (
  <Layout title="Studio Kura 絵画教室 オンライン校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura オンライン校"
      tagline="電子工作教室"
      bgImageUrl="placeslide1-online.jpg"
    ></ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura オンライン校"
      tagline="電子工作教室"
      bgImageUrl="placeslide2-online.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/online"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura オンライン校"
      tagline="電子工作教室"
      bgImageUrl="placeslide3-online.jpg"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideDenshi />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default OnlinePlace;
