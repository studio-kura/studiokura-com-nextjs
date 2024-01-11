import { Text } from '@chakra-ui/react'

import { Layout } from '@/components/Layout'
import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

const Kindergartens = () => (
  <Layout title="Studio Kura絵画造形教室 課内・課外教室">
    <Navigation />
    <Container height="100vh">
      <Hero title="幼稚園・保育園" />
      <Main>
        <Text color="text">本文です。</Text>
      </Main>
      <Footer />
    </Container>
  </Layout>
)

export default Kindergartens
