import { Container } from '@/components/Container';
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
import { type ReactNode } from 'react';
import { LiaCheckSolid } from 'react-icons/lia';
import { MailButton, PhoneButton, TrialButton } from '../Buttons';

type ClassPlaceSlide3Props = {
  placeName: string;
  tagline: string;
  bgImageUrl?: string;
  mapImageUrl?: string;
  mapUrl?: string;
  address?: string;
  children?: ReactNode;
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
      backgroundSize="cover"
      backgroundPosition="center"
      py={['2em', '3em', '5em', '8em']}
    >
      <Center py={6} px={[0, 4]}>
        <Box w="full" rounded="xl" p={0} pb={2} textAlign="center">
          <Box
            bgColor="#fff"
            pt="2em"
            pb="1em"
            px={['1em', '2em']}
            minW={['100%', '90%']}
          >
            <Heading>{placeName}</Heading>

            {(address || mapImageUrl) && (
              <Box bgColor="#fff" my="1rem">
                {mapImageUrl && mapUrl && (
                  <NextLink href={mapUrl}>
                    <Image
                      src={`https://${cdnDomain}/${cdnDirectory}${mapImageUrl}`}
                      alt={`${placeName}の地図`}
                      my="1rem"
                    />
                  </NextLink>
                )}
                {address || ''}
              </Box>
            )}

            <Text color="white" fontSize="2em">
              {children}
            </Text>

            <Stack direction={['column', 'row']}>
              <TrialButton mr={1} />
              <PhoneButton mr={1} />

              <Button
                asChild
                fontWeight={600}
                color="text"
                mr={1}
                _hover={{ bg: 'green.100' }}
              >
                <NextLink href="/pricing">
                  <LiaCheckSolid />
                  &nbsp;受講料
                </NextLink>
              </Button>

              <MailButton />
            </Stack>
          </Box>
        </Box>
      </Center>
    </Container>
  );
};

export { ClassPlaceSlide3 };
