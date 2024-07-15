import { Container } from '@/components/Container';
import { Main } from '@/components/Main';
import { Box, Center, Heading, Text } from '@chakra-ui/react';
import Iframe from 'react-iframe';
import { TrialButton } from '../Buttons';

type ClassPlaceSlide2Props = {
  placeName: string;
  tagline: string;
  bgImageUrl?: string;
  calendarUrl: string;
  children?: string | Element;
};

const ClassPlaceSlide2 = (props: ClassPlaceSlide2Props) => {
  const { bgImageUrl, calendarUrl, children } = props;
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';
  return (
    <Container
      bgImage={
        bgImageUrl && `https://${cdnDomain}/${cdnDirectory}${bgImageUrl}`
      }
      backgroundSize={'cover'}
      backgroundPosition={'center'}
    >
      <Center py={6} px={4}>
        <Box
          w={'full'}
          rounded={'xl'}
          p={0}
          pb={2}
          textAlign={'center'}
          mt="30vw"
        >
          <Main bgColor={'#fff'} pt={'2em'} pb={'1em'}>
            <Heading>時間割</Heading>
            {`https://${cdnDomain}/${cdnDirectory}${bgImageUrl}`}
            <Box bgColor={'#fff'} width={'80vw'} height={'70vh'}>
              <Iframe
                url={calendarUrl}
                width={'100%'}
                height={'100%'}
                display={'block'}
                position={'relative'}
              />
            </Box>
            <Text color="white" fontSize={'2em'}>
              <>{children}</>
              <TrialButton />
            </Text>
          </Main>
        </Box>
      </Center>
    </Container>
  );
};

export { ClassPlaceSlide2 };
