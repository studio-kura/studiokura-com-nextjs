import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { Center, Heading, Text } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Layout title="お問い合わせ｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
      <Navigation />
      <Container height={'200px'} minW={'100%'}>
        <Heading mt={'1em'} size={['2xl', '2xl', '2xl']}>
          園内レッスン お問い合わせ
        </Heading>
      </Container>
      <Center minW={'100%'}>
        <Container minW={'100%'} paddingX={'0px'} marginX={'0px'}>
          <Text>
            下記のメールアドレスにてお問い合わせ内容をご記入のうえ、送信してください。
          </Text>
          <Text mt="1em">
            <a href="mailto:info@studiokura.com">info@studiokura.com</a>
          </Text>
        </Container>
      </Center>
      <Container>
        <Footer />
      </Container>
    </Layout>
  );
};

export default Contact;

// TODO: Restore when the following issue is solved:
// import { Container } from '@/components/Container';
// import { Footer } from '@/components/Footer';
// import { KindergartenForm } from '@/components/KindergartenForm';
// import { Layout } from '@/components/Layout';
// import { Navigation } from '@/components/Navigation';
// import { Center, Heading } from '@chakra-ui/react';

// const Contact = () => {
//   return (
//     <Layout title="園内レッスン お問い合わせ｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
//       <Navigation />
//       <Container height={'200px'} minW={'100%'}>
//         <Heading mt={'1em'} size={['2xl', '2xl', '2xl']}>
//           園内レッスン お問い合わせ
//         </Heading>
//       </Container>
//       <Center minW={'100%'}>
//         <Container minW={'100%'} paddingX={'0px'} marginX={'0px'}>
//           <KindergartenForm variant="contact" />
//         </Container>
//       </Center>
//       <Container>
//         <Footer />
//       </Container>
//     </Layout>
//   );
// };

// export default Contact;
