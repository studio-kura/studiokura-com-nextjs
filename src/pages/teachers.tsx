import { Text } from '@chakra-ui/react'

import { Layout } from '@/components/Layout'
import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

const TeacherList = () => (
  <Layout title="講師の紹介｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
    <Navigation />
    <Container height="100vh">
      <Hero title="講師紹介" />
      <Main>
        <Text color="text">本文です。</Text>
      </Main>
      <Footer />
    </Container>
  </Layout>
)

export default TeacherList
