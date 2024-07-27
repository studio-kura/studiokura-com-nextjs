import { Container } from '@/components/Container';
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
      py={['2em', '3em', '5em', '8em']}
      px={['0px', '2em', '4em', '8em']}
    >
      <Center py={6} mx={'0px'} px={[0, 4]} minW={['100%']}>
        <Box w={'full'} rounded={'xl'} p={0} pb={2} textAlign={'center'}>
          <Box bgColor={'#fff'} pt={'2em'} pb={'1em'}>
            <Heading>時間割</Heading>
            <Box bgColor={'#fff'} height={'70vh'}>
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
          </Box>
        </Box>
      </Center>
    </Container>
  );
};

export { ClassPlaceSlide2 };
