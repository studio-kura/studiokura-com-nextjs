import { Text, Heading } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import React from 'react'

const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? ''
const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? ''
const totalCarouselImages = 4
const carouselPeriod = 5000

const KidsClass = () => {
  const [carouselIndex, setCarouselIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => setCarouselIndex((carouselIndex + 1) % totalCarouselImages),
      carouselPeriod
    )
    return () => clearTimeout(timer)
  }, [carouselIndex])
  return (
    <Layout title="子ども絵画造形教室｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
      <Navigation />
      <Container
        height={'300px'}
        bgImage={`https://${cdnDomain}/${cdnDirectory}kids-headercarousel-${
          carouselIndex + 1
        }.jpg`}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
      ></Container>
      <Container>
        <Heading mt={'1em'} mb={'1em'} size={['2xl', '4xl', '4xl']}>
          子ども絵画造形教室
        </Heading>
        <Text color="text">本文です。</Text>
      </Container>
      <Container>
        <Footer>
          <Text>© 2009-2023 Studio Kura 絵画教室 All rights reserved</Text>
        </Footer>
      </Container>
    </Layout>
  )
}

export default KidsClass
