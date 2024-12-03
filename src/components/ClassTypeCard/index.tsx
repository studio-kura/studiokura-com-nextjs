import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { type ReactNode } from 'react';

type ClassTypeCardProps = {
  title: string;
  imageSrc: string;
  linkText?: string;
  linkHref?: string;
  children?: ReactNode;
};

const ClassTypeCard = (props: ClassTypeCardProps) => {
  const { title, imageSrc, linkText, linkHref, children } = props;
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';
  return (
    <Center py={6} px={4}>
      <Box
        maxW={'420px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'xl'}
        p={0}
        pb={2}
        textAlign={'center'}
      >
        <Image
          src={`https://${cdnDomain}/${cdnDirectory}${imageSrc}`}
          alt={`${title}の写真`}
          mb={4}
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
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {title}
        </Heading>
        <Text
          color={useColorModeValue('gray.700', 'gray.400')}
          textAlign={'left'}
          px={4}
          py={4}
        >
          <>{children}</>
        </Text>
        {linkHref && (
          <Button
            href={linkHref}
            as={NextLink}
            flex={1}
            fontSize="sm"
            variant="outline"
          >
            {linkText ?? 'さらに詳しく観る'}
          </Button>
        )}
      </Box>
    </Center>
  );
};

export { ClassTypeCard };
