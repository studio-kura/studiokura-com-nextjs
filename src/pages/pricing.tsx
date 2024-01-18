import { Heading, Text, List, ListItem, ListIcon, Box } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { PricingBox } from '@/components/Pricing'
import { MailButton, PhoneButton, TrialButton } from '@/components/Buttons'

const Pricing = () => (
  <Layout title="受講料｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
    <Navigation />
    <Container height={'300px'} minW={'100%'}>
      <Heading mt={'1em'} size={['2xl', '4xl', '4xl']}>
        Studio Kura絵画教室 料金表
      </Heading>
    </Container>
    <Container>
      <Text>絵画教室から電子工作室までどの教室も同一料金です。</Text>
      <PricingBox />
      <Text>入会金はお一人4400円です。 画材代は受講料に含まれます。</Text>
      <Heading size={'md'} my={'1em'}>
        お支払い方法
      </Heading>
      <List>
        <ListItem mb={4}>
          <ListIcon>
            <ChevronRightIcon />
          </ListIcon>
          受講料は月謝にて現金または口座振替にて一括払いの前納制となっております。受講月の初回受講時にお支払ください。
        </ListItem>
        <ListItem mb={4}>
          <ListIcon>
            <ChevronRightIcon />
          </ListIcon>
          展覧会への出展、スケッチや交通費などは自己負担でお願い致します。
        </ListItem>
      </List>
      <Heading size={'md'} my={'1em'}>
        受講振替
      </Heading>
      <Text>
        急な都合で受講が出来なくなった場合は受講時間3時間前までにご連絡いただければ受講の振替が出来ます。
      </Text>
      <TrialButton text={'体験レッスンのお申し込み'} mt={4} />
      <Text mt={4}>
        <MailButton size={'sm'} /> <PhoneButton size={'sm'} />
      </Text>
      <Text mt={4}>
        ※ 前日・当日のお申し込みはお電話のみとさせていただきます。
      </Text>
      <Footer />
    </Container>
  </Layout>
)

export default Pricing
