import { Text, Center, Box, Heading, Button } from '@chakra-ui/react'

import { Layout } from '@/components/Layout'
import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import Iframe from 'react-iframe'

const Reschedule = () => (
  <Layout title="生徒様予約｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
    <Navigation />
    <Container height={'100vh'} width={'100vw'} px={'0'}>
      <Iframe
        url={
          'https://online.studiokura.com/cake/class_reservations/yoyaku/barebones/true'
        }
        width={'100%'}
        height={'100%'}
        display={'block'}
        position={'relative'}
      />
    </Container>
  </Layout>
)

export default Reschedule
