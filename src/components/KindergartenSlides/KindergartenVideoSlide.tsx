import { Container } from '@/components/Container';
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { LuChevronsLeft, LuChevronsRight } from 'react-icons/lu';
import Iframe from 'react-iframe';

type KindergartenVideoSlideProps = {
  title: string;
  bgImageUrl: string;
  iframeUrls: string[];
};

const KindergartenVideoSlide = (props: KindergartenVideoSlideProps) => {
  const { title, bgImageUrl, iframeUrls } = props;
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';

  const [videoIndex, setVideoIndex] = useState(0);
  const switchRight = () => setVideoIndex((videoIndex + 1) % iframeUrls.length);
  const switchLeft = () =>
    setVideoIndex((videoIndex + iframeUrls.length - 1) % iframeUrls.length);

  return (
    <Container
      bgImage={`https://${cdnDomain}/${cdnDirectory}${bgImageUrl}`}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      px={[0, '32px']}
    >
      <Center py={6} px={[0, 4]} width={['100%', '95%', '80%']}>
        <Box minW={'100%'} rounded={'xl'} p={0} pb={2}>
          <Text
            ml={'2em'}
            mt={'2em'}
            mb={'1em'}
            color="white"
            fontWeight={'bold'}
            fontSize={['1.5em', '2em']}
            textShadow={'black 0.03em 0.03em 0.03em;'}
          >
            {title} {videoIndex + 1}
          </Text>
          <Stack direction={['column', 'row']}>
            <Button
              variant={'solid'}
              size="md"
              bgColor={'#fff8'}
              onClick={switchLeft}
            >
              <LuChevronsLeft />
            </Button>
            <AspectRatio w={'100%'} maxW="1200px" ratio={560 / 315}>
              <Iframe url={iframeUrls[videoIndex]} />
            </AspectRatio>
            <Button
              variant={'solid'}
              size="md"
              bgColor={'#fff8'}
              onClick={switchRight}
            >
              <LuChevronsRight />
            </Button>
          </Stack>
        </Box>
      </Center>
    </Container>
  );
};

export { KindergartenVideoSlide };
