import { PhoneButton } from '@/components/Buttons';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Tr,
} from '@chakra-ui/react';
import { ChangeEventHandler, useState } from 'react';

const formWidth = ['90%', '80%', '60%', '40%'];
const cardWidth = ['90%', '80%', '60%', '40%'];
const rates = {
  per_classroom: 12000,
  per_student: 100,
  tax: 10, //消費税 10%
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
const currencyFormatter = new Intl.NumberFormat('ja-JA');

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

  const handleClassroom1Check: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setClassroom1Check(event.target.checked);
    const classrooms =
      (event.target.checked ? 1 : 0) +
      (classroom2Check ? 1 : 0) +
      (classroom3Check ? 1 : 0);
    setNumberOfClassrooms(classrooms);
    setTransportationTotalExpenses(transportationBaseExpenses * classrooms);
  };
  const handleClassroom2Check: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setClassroom2Check(event.target.checked);
    const classrooms =
      (classroom1Check ? 1 : 0) +
      (event.target.checked ? 1 : 0) +
      (classroom3Check ? 1 : 0);
    setNumberOfClassrooms(classrooms);
    setTransportationTotalExpenses(transportationBaseExpenses * classrooms);
  };
  const handleClassroom3Check: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setClassroom3Check(event.target.checked);
    const classrooms =
      (classroom1Check ? 1 : 0) +
      (classroom2Check ? 1 : 0) +
      (event.target.checked ? 1 : 0);
    setNumberOfClassrooms(classrooms);
    setTransportationTotalExpenses(transportationBaseExpenses * classrooms);
  };

  const handleStudentsChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const studentsNewValue: number = Number(event.target.value);
    if (!Number.isNaN(studentsNewValue)) {
      setNumberOfStudents(studentsNewValue);
    }
  };

  const handleTransportationChange: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const expenses: number = Number(event.target.value);
    if (!Number.isNaN(expenses)) {
      setTransportationBaseExpenses(expenses);
      setTransportationTotalExpenses(expenses * numberOfClassrooms);
    }
  };

  const getTeacherRate = () => rates.per_classroom * numberOfClassrooms;
  const getStudentRate = () => rates.per_student * numberOfStudents;
  const getTotalBeforeTax = () =>
    getTeacherRate() + getStudentRate() + transportationTotalExpenses;
  const getTotalWithTax = () => (getTotalBeforeTax() * (100 + rates.tax)) / 100;

  return (
    <Layout title="お問い合わせ｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
      <Navigation />
      <Container height={'200px'} minW={'100%'}>
        <Heading mt={'2em'} size={['2xl', '2xl', '2xl']}>
          園内レッスン 仮見積もりシミュレーション
        </Heading>
        <Text mt={'2em'}>
          見積シミュレーターで絵画造形教室園内レッスンのご利用料金を試算することができます。
        </Text>
      </Container>
      <Center minW={'100%'}>
        <Container minW={'100%'} paddingX={'0px'} marginX={'0px'}>
          <FormControl mt={'2rem'} as={'fieldset'} w={formWidth}>
            <FormLabel as={'legend'}>レッスンを受けられる学年</FormLabel>
            <CheckboxGroup>
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Checkbox onChange={handleClassroom1Check}>年少</Checkbox>
                <Checkbox onChange={handleClassroom2Check}>年中</Checkbox>
                <Checkbox onChange={handleClassroom3Check}>年長</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
          <FormControl mt={'2rem'} as={'fieldset'} w={formWidth}>
            <FormLabel as={'legend'}>
              レッスンを受ける生徒の人数（合計）
            </FormLabel>
            <Input
              placeholder={'英数字のみ'}
              value={numberOfStudents}
              onChange={handleStudentsChange}
            />
          </FormControl>
          <FormControl mt={'2rem'} as={'fieldset'} w={formWidth}>
            <FormLabel as={'legend'}>園の所在地域</FormLabel>
            <Select
              placeholder="園の所在地をお選びください"
              onChange={handleTransportationChange}
            >
              <option value={rates.transportation.itoshima}>糸島市 </option>
              <option value={rates.transportation.nishiku}>福岡市西区 </option>
              <option value={rates.transportation.sawaraku}>
                福岡市早良区{' '}
              </option>
              <option value={rates.transportation.fukuoka_other}>
                福岡地区{' '}
              </option>
              <option value={rates.transportation.kitakyushu}>
                北九州地区{' '}
              </option>
              <option value={rates.transportation.chikugo}>筑後地区 </option>
              <option value={rates.transportation.chikuho}>筑豊地区 </option>
              <option value={rates.transportation.karatsu}>唐津市 </option>
              <option value={rates.transportation.imari}>伊万里市 </option>
              <option value={rates.transportation.taku}>多久市 </option>
              <option value={rates.transportation.saga}>佐賀市 </option>
              <option value={rates.transportation.shimonoseki}>下関市 </option>
              <option value={rates.transportation.other}>その他の地区 </option>
            </Select>
          </FormControl>
          <Card mt={'2em'} w={cardWidth} maxW={'600px'}>
            <CardHeader>
              <Heading size={'lg'}>仮見積もり</Heading>
            </CardHeader>
            <CardBody>
              <Table>
                <Tbody>
                  <Tr>
                    <Th>講師派遣料</Th>
                    <Td textAlign={'right'}>
                      {currencyFormatter.format(getTeacherRate())}円
                    </Td>
                  </Tr>
                  <Tr>
                    <Th>画材料（1人あたり100円）</Th>
                    <Td textAlign={'right'}>
                      {currencyFormatter.format(getStudentRate())}円
                    </Td>
                  </Tr>
                  <Tr>
                    <Th>交通費</Th>
                    <Td textAlign={'right'}>
                      {currencyFormatter.format(transportationTotalExpenses)}円
                    </Td>
                  </Tr>
                  <Tr>
                    <Th>合計（税抜）</Th>
                    <Td textAlign={'right'}>
                      {currencyFormatter.format(getTotalBeforeTax())}円
                    </Td>
                  </Tr>
                  <Tr>
                    <Th>合計（税込）</Th>
                    <Td textAlign={'right'} fontWeight={'bold'}>
                      {currencyFormatter.format(getTotalWithTax())}円
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
              <Text mt={'2em'}>
                ※
                1回の生徒の人数が30名より多い場合はプラス300円×人数分頂きます。
              </Text>
              <Text my={'1em'}>
                よろしければ下記のお申し込みフォームか、お電話を使って体験教室をお申し込みください！ご連絡をお待ちしております。
              </Text>
              <PhoneButton />
            </CardBody>
          </Card>
        </Container>
      </Center>
      <Container>
        <Footer />
      </Container>
    </Layout>
  );
};

export default EstimateCalculator;
