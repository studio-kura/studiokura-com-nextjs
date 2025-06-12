import { PhoneButton } from '@/components/Buttons';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import {
  Card,
  Center,
  Checkbox,
  Field,
  Heading,
  Input,
  ListCollection,
  Portal,
  Select,
  Stack,
  Table,
  Text,
  createListCollection,
} from '@chakra-ui/react';
import { ChangeEventHandler, useState } from 'react';

const formWidth = ['90%', '80%', '60%', '40%'];
const cardWidth = ['90%', '80%', '60%', '40%'];
const rates = {
  per_classroom: 12000,
  per_student: 100,
  tax: 10,
  transportation: {
    itoshima: 1500,
    nishiku: 1500,
    sawaraku: 1800,
    fukuoka_other: 2000,
    kitakyushu: 4000,
    chikugo: 3000,
    chikuho: 3000,
    karatsu: 1800,
    imari: 2500,
    taku: 2500,
    saga: 3000,
    shimonoseki: 5000,
    other: 4000,
  },
};
const currencyFormatter = new Intl.NumberFormat('ja-JP');

const transportationCollection: ListCollection = createListCollection({
  items: Object.entries(rates.transportation).map(([key, value]) => ({
    label: key,
    value: value.toString(),
  })),
});

const EstimateCalculator = () => {
  const [classroom1Check, setClassroom1Check] = useState<boolean>();
  const [classroom2Check, setClassroom2Check] = useState<boolean>();
  const [classroom3Check, setClassroom3Check] = useState<boolean>();
  const [numberOfClassrooms, setNumberOfClassrooms] = useState(0);
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [transportationBaseExpenses, setTransportationBaseExpenses] =
    useState(0);
  const [transportationTotalExpenses, setTransportationTotalExpenses] =
    useState(0);

  const handleClassroomCheck = (index: number, checked: boolean) => {
    const updates = [classroom1Check, classroom2Check, classroom3Check];
    updates[index] = checked;
    setClassroom1Check(updates[0]);
    setClassroom2Check(updates[1]);
    setClassroom3Check(updates[2]);
    const classroomCount = updates.filter(Boolean).length;
    setNumberOfClassrooms(classroomCount);
    setTransportationTotalExpenses(transportationBaseExpenses * classroomCount);
  };

  const handleStudentsChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = Number(event.target.value);
    if (!Number.isNaN(value)) setNumberOfStudents(value);
  };

  const handleTransportationChange = (value: string) => {
    const amount = Number(value);
    if (!Number.isNaN(amount)) {
      setTransportationBaseExpenses(amount);
      setTransportationTotalExpenses(amount * numberOfClassrooms);
    }
  };

  return (
    <Layout title="お問い合わせ｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
      <Navigation />
      <Container height="200px" minW="100%">
        <Heading mt="2em" size={['2xl', '2xl', '2xl']}>
          園内レッスン 仮見積もりシミュレーション
        </Heading>
        <Text mt="2em">
          見積シミュレーターで絵画造形教室園内レッスンのご利用料金を試算することができます。
        </Text>
      </Container>

      <Center minW="100%">
        <Container minW="100%" px="0" mx="0">
          <Field.Root mt="2rem" w={formWidth}>
            <Field.Label>レッスンを受けられる学年</Field.Label>
            <Stack gap={[1, 5]} direction={['column', 'row']}>
              {['年少', '年中', '年長'].map((label, i) => (
                <Checkbox.Root key={label} onChange={handleClassroomCheck}>
                  <Checkbox.Control />
                  <Checkbox.Label>{label}</Checkbox.Label>
                </Checkbox.Root>
              ))}
            </Stack>
          </Field.Root>

          <Field.Root mt="2rem" w={formWidth}>
            <Field.Label>レッスンを受ける生徒の人数（合計）</Field.Label>
            <Input
              placeholder="英数字のみ"
              value={numberOfStudents}
              onChange={handleStudentsChange}
            />
          </Field.Root>

          <Field.Root mt="2rem" w={formWidth}>
            <Field.Label>園の所在地域</Field.Label>
            <Select.Root
              onValueChange={handleTransportationChange}
              collection={transportationCollection}
            >
              <Select.HiddenSelect />
              <Select.Label>園の所在地をお選びください</Select.Label>
              <Select.Control>
                <Select.Trigger>
                  {/* @ts-expect-error TODO: fix for Chakra UI v3 */}
                  <Select.ValueText placeholder="園の所在地をお選びください" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {/* @ts-expect-error TODO: fix for Chakra UI v3 */}
                    {transportationCollection.items.map((item) => (
                      // @ts-expect-error TODO: fix for Chakra UI v3
                      <Select.Item item={item} key={item.value}>
                        {item.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
          </Field.Root>

          <Card.Root mt="2em" w={cardWidth} maxW="600px">
            <Card.Header>
              <Heading size="lg">仮見積もり</Heading>
            </Card.Header>
            <Card.Body>
              <Table.Root>
                <Table.Body>
                  <Table.Row>
                    <Table.ColumnHeader>講師派遣料</Table.ColumnHeader>
                    <Table.Cell textAlign="right">
                      {currencyFormatter.format(
                        rates.per_classroom * numberOfClassrooms
                      )}
                      円
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.ColumnHeader>
                      画材料（1人あたり100円）
                    </Table.ColumnHeader>
                    <Table.Cell textAlign="right">
                      {currencyFormatter.format(
                        rates.per_student * numberOfStudents
                      )}
                      円
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.ColumnHeader>交通費</Table.ColumnHeader>
                    <Table.Cell textAlign="right">
                      {currencyFormatter.format(transportationTotalExpenses)}円
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.ColumnHeader>合計（税抜）</Table.ColumnHeader>
                    <Table.Cell textAlign="right">
                      {currencyFormatter.format(
                        rates.per_classroom * numberOfClassrooms +
                          rates.per_student * numberOfStudents +
                          transportationTotalExpenses
                      )}
                      円
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.ColumnHeader>合計（税込）</Table.ColumnHeader>
                    <Table.Cell textAlign="right" fontWeight="bold">
                      {currencyFormatter.format(
                        (rates.per_classroom * numberOfClassrooms +
                          rates.per_student * numberOfStudents +
                          transportationTotalExpenses) *
                          1.1
                      )}
                      円
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>

              <Text mt="2em">
                ※
                1回の生徒の人数が30名より多い場合はプラス300円×人数分頂きます。
              </Text>
              <Text my="1em">
                よろしければ下記のお申し込みフォームか、お電話を使って体験教室をお申し込みください！ご連絡をお待ちしております。
              </Text>
              <PhoneButton />
            </Card.Body>
          </Card.Root>
        </Container>
      </Center>

      <Container>
        <Footer />
      </Container>
    </Layout>
  );
};

export default EstimateCalculator;
