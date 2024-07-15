import { Container } from '@/components/Container';
import { Box, Center, Heading, Text } from '@chakra-ui/react';

type KindergartenTitleSlideProps = {
  title: string;
  tagline: string;
  bgImageUrl: string;
  children?: JSX.Element;
};

const KindergartenTitleSlide = (props: KindergartenTitleSlideProps) => {
  const { title, tagline, bgImageUrl, children } = props;
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';
  return (
    <Container
      bgImage={`https://${cdnDomain}/${cdnDirectory}${bgImageUrl}`}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      h={'90vh'}
    >
      <Center py={6} px={4}>
        <Box w={'full'} rounded={'xl'} p={0} pb={2} textAlign={'center'}>
          <Heading
            fontSize={['2.5em', '3em', '6vw']}
            pt={'30vh'}
            pb={'0.5em'}
            color={'white'}
            textShadow={'black 0.03em 0.03em 0.03em;'}
          >
            {title}
          </Heading>
          <Text
            color="white"
            fontSize={['1.5em', '2em']}
            textShadow={'black 0.03em 0.03em 0.03em;'}
          >
            {tagline}
          </Text>
          <Text
            color="white"
            fontSize={'2em'}
            textShadow={'black 0.03em 0.03em 0.03em;'}
          >
            <>{children}</>
          </Text>
        </Box>
      </Center>
    </Container>
  );
};

export { KindergartenTitleSlide };
