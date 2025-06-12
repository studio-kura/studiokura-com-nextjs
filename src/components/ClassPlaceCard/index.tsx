import { useColorModeValue } from '@/components/ui/color-mode';
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Tag,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { type ReactNode } from 'react';
import { LuChevronRight } from 'react-icons/lu';

type ClassPlaceCardProps = {
  placeName: string;
  imageSrc: string;
  linkHref: string;
  adultsClass?: boolean;
  kidsClass?: boolean;
  programmingClass?: boolean;
  children?: ReactNode;
};

const ClassPlaceCard = (props: ClassPlaceCardProps) => {
  const {
    placeName,
    imageSrc,
    linkHref,
    adultsClass,
    kidsClass,
    programmingClass,
    children,
  } = props;
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';
  return (
    <Center py={6} px={4}>
      <Box
        minW="320px"
        maxW="320px"
        w="full"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="2xl"
        rounded="xl"
        p={0}
        pb={4}
      >
        <Image
          src={`https://${cdnDomain}/${cdnDirectory}${imageSrc}`}
          alt={`${placeName}の写真`}
          mb={4}
          minW="100%"
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Box px={4}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            <Button flex={1} variant="outline" asChild>
              <NextLink href={linkHref}>
                {placeName}
                &nbsp;&nbsp;
                <LuChevronRight />
              </NextLink>
            </Button>
          </Heading>
          <Box py={4}>
            {adultsClass && (
              <>
                <Tag.Root size="md" variant="solid" colorPalette="red">
                  <Tag.Label>大人の絵画</Tag.Label>
                </Tag.Root>{' '}
              </>
            )}
            {kidsClass && (
              <>
                <Tag.Root size="md" variant="solid" colorPalette="yellow">
                  <Tag.Label>子ども絵画</Tag.Label>
                </Tag.Root>{' '}
              </>
            )}
            {programmingClass && (
              <>
                <Tag.Root size="md" variant="solid" colorPalette="green">
                  <Tag.Label>電子工作</Tag.Label>
                </Tag.Root>{' '}
              </>
            )}
          </Box>
          <Text
            color={useColorModeValue('gray.700', 'gray.400')}
            textAlign={'left'}
          >
            <>{children}</>
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export { ClassPlaceCard };
