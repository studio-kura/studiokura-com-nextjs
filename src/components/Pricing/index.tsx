import { TrialButton } from '@/components/Buttons';
import { pricing } from '@/data/pricing';
import { Card, Heading, Stack } from '@chakra-ui/react';

const PricingBox = () => (
  <Stack
    direction={['column', 'column', 'row']}
    mt="1em"
    maxW={['100%', '80%', '80%']}
    my={16}
    gap={16}
  >
    <Card.Root>
      <Card.Body textAlign="center" w="300px" px={8} py="32px">
        <Heading>￥{pricing.twopermonth.toLocaleString()}/月</Heading>
        <Heading size="sm">月2回コース</Heading>
        <TrialButton
          mt={12}
          color="white"
          bg="blue.500"
          hoverbg="blue.400"
          borderRadius={100}
          hasIcon={false}
        />
      </Card.Body>
    </Card.Root>

    <Card.Root>
      <Card.Body textAlign="center" w="300px" px={8} py="32px">
        <Heading>￥{pricing.fourpermonth.toLocaleString()}/月</Heading>
        <Heading size="sm">月4回コース</Heading>
        <TrialButton
          mt={12}
          color="white"
          bg="blue.500"
          hoverbg="blue.400"
          borderRadius={100}
          hasIcon={false}
        />
      </Card.Body>
    </Card.Root>
  </Stack>
);

export { PricingBox };
