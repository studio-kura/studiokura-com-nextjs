import {
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Center,
  Textarea,
  Button
} from '@chakra-ui/react'
import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

const formWidth = ['90%', '90%', '80%', '60%']

const Contact = () => {
  return (
    <Layout title="お問い合わせ｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
      <Navigation />
      <Container height={'200px'} minW={'100%'}>
        <Heading mt={'1em'} size={['2xl', '2xl', '2xl']}>
          お問い合わせ
        </Heading>
      </Container>
      <Center w={'100%'}>
        <Container w={'100%'}>
          <FormControl mt={'2rem'} as={'fieldset'} w={formWidth} isRequired>
            <FormLabel as={'legend'}>お名前</FormLabel>
            <Input type={'text'} name={'name'} id={'name'} />
            <FormHelperText>個人情報は誰とも共有しません。</FormHelperText>
          </FormControl>
          <FormControl mt={'2rem'} as={'fieldset'} w={formWidth} isRequired>
            <FormLabel as={'legend'}>メールアドレス</FormLabel>
            <Input type={'email'} name={'email'} id={'email'} />
            <FormHelperText>
              メールアドレスは誰とも共有しません。
            </FormHelperText>
          </FormControl>
          <FormControl mt={'2rem'} as={'fieldset'} w={formWidth} isRequired>
            <FormLabel as={'legend'}>お問い合わせ内容</FormLabel>
            <Textarea name={'message'} id={'message'} rows={5} isRequired />
          </FormControl>
          <FormControl mt={'2rem'} w={formWidth}>
            <Button
              color={'white'}
              bg={'blue.500'}
              _hover={{
                bg: 'blue.400'
              }}
            >
              送信
            </Button>
          </FormControl>
        </Container>
      </Center>
      <Container>
        <Footer />
      </Container>
    </Layout>
  )
}

export default Contact
