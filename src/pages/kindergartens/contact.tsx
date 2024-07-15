import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { KindergartenForm } from '@/components/KindergartenForm';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { Center, Heading } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Layout title="園内レッスン お問い合わせ｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
      <Navigation />
      <Container height={'200px'} minW={'100%'}>
        <Heading mt={'1em'} size={['2xl', '2xl', '2xl']}>
          園内レッスン お問い合わせ
        </Heading>
      </Container>
      <Center w={'100%'}>
        <Container w={'100%'}>
          <KindergartenForm variant="contact" />
        </Container>
      </Center>
      <Container>
        <Footer />
      </Container>
    </Layout>
  );
};

export default Contact;
