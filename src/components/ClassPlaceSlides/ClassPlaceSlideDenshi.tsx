import { Container } from '@/components/Container';
import {
  Box,
  Center,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { type ReactNode } from 'react';
import { TrialButton } from '../Buttons';

type ClassPlaceSlideDenshiProps = {
  children?: ReactNode;
};

const ClassPlaceSlideDenshi = (props: ClassPlaceSlideDenshiProps) => {
  const { children } = props;
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';
  return (
    <Container
      bgImage={`https://${cdnDomain}/${cdnDirectory}placeslide-denshi.jpg`}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      py={['2em', '3em', '5em', '8em']}
    >
      <Center py={6} px={[0, 4]}>
        <Box w={'full'} rounded={'xl'} p={0} pb={2} textAlign={'center'}>
          <Box
            bgColor={'#fff'}
            pt={'2em'}
            pb={'1em'}
            px={'1rem'}
            maxWidth={'800px'}
          >
            <Heading>電子工作教室</Heading>
            <Box textAlign={'left'} px={[2, 8, 16]}>
              <Text mb={4}>
                面白いものを作りながら、ためになるスキルを身につけましょう！
                子供から大人まで楽しんでいただけます。
              </Text>
              <UnorderedList mb={4} ml={8}>
                <ListItem>初めてのプログラミング（Processing）</ListItem>
                <ListItem>小学校低学年向けプログラミング（Scratch）</ListItem>
                <ListItem>電子回路で工作（Arduino）</ListItem>
              </UnorderedList>
              <Text mb={4}>お仕事につかえる技術もプロから習えます！</Text>
              <Text mb={4}>是非おすすめしたい人：</Text>
              <UnorderedList mb={4} ml={8}>
                <ListItem>学校やお仕事でパソコンを使う予定がある人</ListItem>
                <ListItem>ゲームが好きな人</ListItem>
                <ListItem>ものを分解するのが好きな人</ListItem>
              </UnorderedList>
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

export { ClassPlaceSlideDenshi };
