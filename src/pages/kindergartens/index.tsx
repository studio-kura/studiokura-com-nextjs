import { EstimateCalculatorButton } from '@/components/Buttons';
import { Footer } from '@/components/Footer';
import {
  KindergartenBoxSlide,
  KindergartenTitleSlide,
} from '@/components/KindergartenSlides';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { Box, Container, Heading, List, Table, Text } from '@chakra-ui/react';

const Kindergartens = () => {
  return (
    <Layout title="Studio Kura絵画造形教室 幼稚園・保育園 課内・課外教室">
      <Navigation />

      <KindergartenTitleSlide
        title="Studio Kura 絵画造形教室"
        tagline="幼稚園・保育園向けの絵画造形出張レッスン"
        bgImageUrl="kindergartens-slide-1.jpg"
      />

      <KindergartenBoxSlide
        title="カリキュラム導入のご案内"
        bgImageUrl="kindergartens-slide-2.jpg"
      >
        <Box>
          <Heading size="md" my="1em">
            正課 絵画造形教室
          </Heading>
          <Text>
            園の方針に従いカリキュラムを開発します。画材等の準備もスタジオ
            クラが行います。 現在５０以上の園でStudio
            Kuraのカリキュラムが導入されています。
          </Text>
          <List.Root listStyleType="default" pl="2em" py="1em">
            <List.Item>対象 3歳～5歳児</List.Item>
            <List.Item>レッスン時間 60分</List.Item>
          </List.Root>
          <EstimateCalculatorButton />
          <Heading size="md" my="1em">
            課外 絵画造形教室
          </Heading>
          <Text>
            月曜日～金曜日の決まった曜日に年間40回(もしくは24回)開講します。
          </Text>
          <List.Root listStyleType="default" pl="2em" py="1em">
            <List.Item>対象 幼児～卒業生</List.Item>
            <List.Item>レッスン時間 60分</List.Item>
            <List.Item>貴園の費用負担は一切ありません。</List.Item>
          </List.Root>
        </Box>
      </KindergartenBoxSlide>

      {/* Other slides remain unchanged */}

      <KindergartenBoxSlide
        title="レッスンが行われている幼稚園・保育園を一部ご紹介します"
        bgImageUrl="kindergartens-slide-7.jpg"
      >
        <Box overflowX="auto">
          <Table.Root variant="line" bgColor="#ccc8">
            <Table.Body>
              <Table.Row>
                <Table.Cell fontWeight="bold">福岡県</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell fontWeight="bold">福岡市</Table.Cell>
                <Table.Cell>あけぼの保育園（中央区）</Table.Cell>
                <Table.Cell>春陽保育園(中央区)</Table.Cell>
                <Table.Cell>堅粕保育園（博多区）</Table.Cell>
              </Table.Row>
              {/* More rows would go here, same structure */}
              <Table.Row>
                <Table.Cell fontWeight="bold">社名</Table.Cell>
                <Table.Cell colSpan={3}>株式会社 Studio Kura</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell fontWeight="bold">創業</Table.Cell>
                <Table.Cell colSpan={3}>2010年3月</Table.Cell>
              </Table.Row>
              {/* Additional company info rows */}
            </Table.Body>
          </Table.Root>
        </Box>
      </KindergartenBoxSlide>

      {/* Final CTA box */}

      <Container>
        <Footer />
      </Container>
    </Layout>
  );
};

export default Kindergartens;
