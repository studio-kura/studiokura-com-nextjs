import { Container } from '@chakra-ui/react'

import { Layout } from '@/components/Layout'
import { Navigation } from '@/components/Navigation'
import { KindergartenSlide1 } from '@/components/KindergartenSlides'
import { Footer } from '@/components/Footer'

const Kindergartens = () => (
  <Layout title="Studio Kura絵画造形教室 幼稚園・保育園 課内・課外教室">
    <Navigation />
    <KindergartenSlide1
      title="Studio Kura 絵画造形教室"
      tagline="幼稚園・保育園向けの絵画造形出張レッスン"
      bgImageUrl="kindergartens-slide-1.jpg"
    />
    <Container>
      <Footer />
    </Container>
  </Layout>
)

export default Kindergartens
