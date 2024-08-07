import { ContactButton, PhoneButton } from '@/components/Buttons';
import { Container } from '@/components/Container';
import { Box, Center, Stack, Text } from '@chakra-ui/react';

type KindergartenBoxSlideProps = {
  title: string;
  bgImageUrl: string;
  addButtons?: boolean;
  children?: JSX.Element;
};

const KindergartenBoxSlide = (props: KindergartenBoxSlideProps) => {
  const { title, bgImageUrl, addButtons = true, children } = props;
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';
  return (
    <Container
      bgImage={`https://${cdnDomain}/${cdnDirectory}${bgImageUrl}`}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      py={['2em', '3em', '5em', '8em']}
    >
      <Center py={6} px={[0, 4]} my={'64px'}>
        <Box w={'full'} rounded={'xl'} p={0} pb={2} minW={['100%', '90%']}>
          <Text
            mt={'2em'}
            mb={'1em'}
            color="white"
            fontWeight={'bold'}
            fontSize={['1.5em', '2em']}
            textShadow={'black 0.03em 0.03em 0.03em;'}
          >
            {title}
          </Text>
          <Box bgColor={'#fffd'} maxW={'1000px'} p={['1em', '2em', '4em']}>
            <>{children}</>
          </Box>
          {addButtons && (
            <Stack direction={['column', 'row']} mt={'1em'}>
              <ContactButton href={'/kindergartens/contact'} mr={1} />
              <PhoneButton />
            </Stack>
          )}
        </Box>
      </Center>
    </Container>
  );
};

export { KindergartenBoxSlide };
