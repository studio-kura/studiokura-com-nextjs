import { Text } from '@chakra-ui/react'

import { Layout } from '@/components/Layout'
import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

const Pricing = () => (
  <Layout title="受講料｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
    <Navigation />
    <Container height="100vh">
      <Hero title="受講料" />
      <Main>
        <Text color="text">本文です。</Text>
      </Main>
      <Footer />
    </Container>
  </Layout>
)

export default Pricing
