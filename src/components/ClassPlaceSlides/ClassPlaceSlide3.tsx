import { Container } from '@/components/Container';
import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { MailButton, PhoneButton, TrialButton } from '../Buttons';

type ClassPlaceSlide3Props = {
  placeName: string;
  tagline: string;
  bgImageUrl?: string;
  mapImageUrl?: string;
  mapUrl?: string;
  address?: string;
  children?: string | Element;
};

const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';

const ClassPlaceSlide3 = (props: ClassPlaceSlide3Props) => {
  const { placeName, bgImageUrl, mapImageUrl, mapUrl, address, children } =
    props;
  return (
    <Container
      bgImage={
        bgImageUrl && `https://${cdnDomain}/${cdnDirectory}${bgImageUrl}`
      }
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      py={['2em', '3em', '5em', '8em']}
    >
      <Center py={6} px={4}>
        <Box w={'full'} rounded={'xl'} p={0} pb={2} textAlign={'center'}>
          <Box bgColor={'#fff'} pt={'2em'} pb={'1em'} px={'1rem'}>
            <Heading>{placeName}</Heading>
            {(address || mapImageUrl) && (
              <Box bgColor={'#fff'}>
                {mapImageUrl && mapUrl && (
                  <NextLink href={mapUrl}>
                    <Image
                      src={`https://${cdnDomain}/${cdnDirectory}${mapImageUrl}`}
                      alt={placeName + 'の地図'}
                    />
                  </NextLink>
                )}
                {address || ''}
              </Box>
            )}
            <Text color="white" fontSize={'2em'}>
              <>{children}</>
              <Stack direction={['column', 'row']}>
                <TrialButton mr={1} />
                <PhoneButton mr={1} />
                <Button
                  as={NextLink}
                  href={'/pricing'}
                  fontWeight={600}
                  color={'text'}
                  mr={1}
                  _hover={{
                    bg: 'green.100',
                  }}
                >
                  <CheckIcon />
                  &nbsp;受講料
                </Button>
                <MailButton />
              </Stack>
            </Text>
          </Box>
        </Box>
      </Center>
    </Container>
  );
};

export { ClassPlaceSlide3 };
