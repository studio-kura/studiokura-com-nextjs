import { useColorModeValue } from '@/components/ui/color-mode';
import {
  Box,
  Button,
  Collapsible,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Popover,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { LuChevronDown, LuChevronRight, LuMenu, LuX } from 'react-icons/lu';

function Navigation() {
  const { open, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align="center"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            size="md"
            variant="ghost"
            aria-label="メニュー開閉"
          >
            {open ? <LuX /> : <LuMenu />}
          </IconButton>
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily="heading"
            color={useColorModeValue('gray.800', 'white')}
          >
            <Link asChild>
              <NextLink href="/">
                <Image
                  src="/images/studio-kura-logo.png"
                  height="2em"
                  alt="Studio Kura"
                />
              </NextLink>
            </Link>
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          gap={6}
        >
          <Button
            asChild
            size={{ base: 'xs', md: 'sm' }}
            fontSize="sm"
            fontWeight={400}
            variant="subtle"
          >
            <NextLink href="/reschedule">生徒様予約</NextLink>
          </Button>
          <Button
            asChild
            size={{ base: 'xs', md: 'sm' }}
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="green.500"
            _hover={{ bg: 'green.400' }}
          >
            <NextLink href="/trial">体験レッスン</NextLink>
          </Button>
        </Stack>
      </Flex>

      <Collapsible.Root open={open}>
        <Collapsible.Content>
          <MobileNav />
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack zIndex={100} position="relative" direction="row" gap={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover.Root placement="bottom-start">
            {navItem.children ? (
              <>
                <Popover.Trigger>
                  <Box
                    p={2}
                    fontSize="sm"
                    fontWeight={500}
                    color={linkColor}
                    _hover={{ textDecoration: 'none', color: linkHoverColor }}
                    cursor="pointer"
                  >
                    {navItem.label}
                  </Box>
                </Popover.Trigger>
                <Popover.Positioner>
                  <Popover.Content>
                    <Popover.Body
                      border={0}
                      boxShadow="xl"
                      bg={popoverContentBgColor}
                      p={4}
                      rounded="xl"
                      minW="sm"
                    >
                      <Stack>
                        {navItem.children.map((child) => (
                          <DesktopSubNav key={child.label} {...child} />
                        ))}
                      </Stack>
                    </Popover.Body>
                  </Popover.Content>
                </Popover.Positioner>
              </>
            ) : (
              <Link
                asChild
                fontSize="sm"
                fontWeight={500}
                color={linkColor}
                _hover={{ color: linkHoverColor }}
              >
                <NextLink href={navItem.href ?? '#'}>
                  <Box p={2}>{navItem.label}</Box>
                </NextLink>
              </Link>
            )}
          </Popover.Root>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link asChild _hover={{ textDecoration: 'none' }}>
      <NextLink href={href ?? '/'}>
        <Stack direction="row" align="center">
          <Box>
            <Text
              transition="all .3s ease"
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize="sm">{subLabel}</Text>
          </Box>
          <Flex
            transition="all .3s ease"
            transform="translateX(-10px)"
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify="flex-end"
            align="center"
            flex={1}
          >
            <Icon color="pink.400" w={5} h={5} as={LuChevronRight} />
          </Flex>
        </Stack>
      </NextLink>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      zIndex={100}
      position="relative"
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { open, onToggle } = useDisclosure();

  return (
    <Stack gap={4} onClick={children && onToggle}>
      <Flex
        py={2}
        asChild
        justify="space-between"
        align="center"
        _hover={{ textDecoration: 'none' }}
      >
        <NextLink href={href ?? '#'}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={LuChevronDown}
              transition="all .25s ease-in-out"
              transform={open ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </NextLink>
      </Flex>

      <Collapsible.Root open={open}>
        <Collapsible.Content>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle="solid"
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align="start"
          >
            {children &&
              children.map((child) => (
                <Link asChild key={child.label}>
                  <NextLink href={child.href ?? '/'}>
                    <Box py={2}>{child.label}</Box>
                  </NextLink>
                </Link>
              ))}
          </Stack>
        </Collapsible.Content>
      </Collapsible.Root>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'お知らせ',
    href: 'https://blog.studiokura.com/category/%E3%81%8A%E3%81%97%E3%82%89%E3%81%9B/',
  },
  {
    label: '美術教室',
    children: [
      { label: '大人のための絵画教室', href: '/adults' },
      { label: '子ども絵画造形教室', href: '/kids' },
      { label: '電子工作教室', href: '/programming' },
      { label: '講師紹介', href: '/teachers' },
    ],
  },
  { label: '幼稚園・保育園', href: '/kindergartens' },
  { label: '受講料', href: '/pricing' },
  { label: '教室一覧', href: '/classrooms' },
];

export { Navigation };
