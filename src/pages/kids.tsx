import { Text } from '@chakra-ui/react'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Navigation } from '../components/Navigation'

const KidsClass = () => (
  <>
    <Navigation />
    <Container height="100vh">
      <Hero title="子ども絵画造形教室" />
      <Main>
        <Text color="text">本文です。</Text>
      </Main>
      <Footer>
        <Text>© 2009-2023 Studio Kura 絵画教室 All rights reserved</Text>
      </Footer>
    </Container>
  </>
)

export default KidsClass
