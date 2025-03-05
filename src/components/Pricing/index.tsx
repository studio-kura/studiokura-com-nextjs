import { TrialButton } from '@/components/Buttons';
import { Card, CardBody, Heading, Stack } from '@chakra-ui/react';

const PricingBox = () => (
  <Stack
    direction={['column', 'column', 'row']}
    mt={'1em'}
    maxW={['100%', '80%', '80%']}
    my={16}
    gap={16}
  >
    <Card w={'300px'} px={8} py={'32px'}>
      <CardBody textAlign={'center'}>
        <Heading>￥6.600/月</Heading>
        <Heading size={'s'}>月2回コース</Heading>
        <TrialButton
          mt={12}
          color={'white'}
          bg={'blue.500'}
          hoverbg={'blue.400'}
          borderRadius={100}
          hasIcon={false}
        />
      </CardBody>
    </Card>
    <Card w={'300px'} px={8} py={'32px'}>
      <CardBody textAlign={'center'}>
        <Heading>￥13.200/月</Heading>
        <Heading size={'s'}>月4回コース</Heading>
        <TrialButton
          mt={12}
          color={'white'}
          bg={'blue.500'}
          hoverbg={'blue.400'}
          borderRadius={100}
          hasIcon={false}
        />
      </CardBody>
    </Card>
  </Stack>
);

export { PricingBox };
