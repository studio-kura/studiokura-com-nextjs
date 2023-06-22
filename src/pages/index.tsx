import { Text, Stack, Heading } from '@chakra-ui/react'

import { Container } from '@/components/Container'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { ClassTypeCard } from '@/components/ClassTypeCard'
import { ClassPlaceCard } from '@/components/ClassPlaceCard'

const Index = () => (
  <>
    <Navigation />
    <Container height="100vh" pt="12em">
      <Main>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <ClassTypeCard
            title="こども絵画造形教室"
            imageSrc="card-kodomo.jpg"
            linkHref="/kids"
          >
            スタジオ
            クラ絵画造形教室は、現代の子どもを取り巻く環境の中で、どんどん減ってきている創造的に遊ぶ場、創作活動する場を子どもたちに提供しています。
            発展段階に応じたカリキュラムを通じて、こどもの心をのびのびと育て、創造性をぐんぐん伸ばします。
          </ClassTypeCard>
          <ClassTypeCard
            title="大人の絵画教室"
            imageSrc="card-otona.jpg"
            linkHref="/adults"
          >
            Studio
            Kuraの絵画教室は全く初めての方も気軽にいらしていただけるアトリエです。
            当教室では様々な素材(アクリル，水彩，油絵，鉛筆，木炭など）を使った絵画表現を習得し、楽しく美術に親しんでいただくことを目的としています。
          </ClassTypeCard>
          <ClassTypeCard
            title="電子工作教室"
            imageSrc="card-denshi.jpg"
            linkHref="/programming"
          >
            Studio
            Kuraの電子工作室ではProcessingやArduino、Scratchなどのプログラミング言語を使って制作します。プログラミングの基礎を楽しく学びながら、ゲームやアプリ、アート作品を作ります。
            大人の方もお子様も受講できます。
          </ClassTypeCard>
        </Stack>
        <Heading>教室一覧</Heading>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <ClassPlaceCard
            placeName="糸島校"
            imageSrc="placecard-itoshima.jpg"
            linkHref="/itoshima"
            adultsClass={true}
            kidsClass={true}
            programmingClass={true}
          >
            〒819-1613 福岡県糸島市二丈松末586
          </ClassPlaceCard>
          <ClassPlaceCard
            placeName="西新校"
            imageSrc="placecard-nishijin.jpg"
            linkHref="/nishijin"
            adultsClass={true}
            kidsClass={true}
            programmingClass={false}
          >
            福岡県福岡市西新一丁目11-27 ロフティ西新903号室
          </ClassPlaceCard>
          <ClassPlaceCard
            placeName="武雄校"
            imageSrc="placecard-takeo.jpg"
            linkHref="/takeo"
            adultsClass={false}
            kidsClass={true}
            programmingClass={false}
          >
            〒843-0022 佐賀県武雄市武雄町大字武雄7271 ARTS ITOYA
          </ClassPlaceCard>
        </Stack>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <ClassPlaceCard
            placeName="唐津校"
            imageSrc="placecard-karatsu.jpg"
            linkHref="/karatsu"
            adultsClass={false}
            kidsClass={true}
            programmingClass={false}
          >
            佐賀県唐津市中町1868番地 中町Casa内
          </ClassPlaceCard>
          <ClassPlaceCard
            placeName="箱崎校"
            imageSrc="placecard-hakozaki.jpg"
            linkHref="/hakozaki"
            adultsClass={false}
            kidsClass={true}
            programmingClass={false}
          >
            福岡市東区箱崎3丁目8-18 先崎哲進オフィス内
          </ClassPlaceCard>
          <ClassPlaceCard
            placeName="橋本校"
            imageSrc="placecard-hashimoto.jpg"
            linkHref="/hashimoto"
            adultsClass={false}
            kidsClass={true}
            programmingClass={true}
          >
            福岡県福岡市西区橋本2-27-2 木の葉モール橋本
            JEUGIAカルチャーセンター内
          </ClassPlaceCard>
        </Stack>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <ClassPlaceCard
            placeName="皿山校"
            imageSrc="placecard-sarayama.jpg"
            linkHref="/sarayama"
            adultsClass={false}
            kidsClass={true}
            programmingClass={false}
          >
            〒811-1365 福岡市南区皿山2-1-57
          </ClassPlaceCard>
          <ClassPlaceCard
            placeName="百道校"
            imageSrc="placecard-momochi.jpg"
            linkHref="/momochi"
            adultsClass={false}
            kidsClass={true}
            programmingClass={false}
          >
            福岡県福岡市早良区百道浜1-3-70ザ・レジデンシャルスイート福岡
            ブリジストンアリーナ内
          </ClassPlaceCard>
        </Stack>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <ClassPlaceCard
            placeName="香椎校"
            imageSrc="placecard-kashii.jpg"
            linkHref="/kashii"
            adultsClass={false}
            kidsClass={true}
            programmingClass={false}
          >
            〒813-0016 福岡県福岡市東区香椎浜３丁目１２−１ イオン香椎浜店
            JEUGIAカルチャーセンター内
          </ClassPlaceCard>
          <ClassPlaceCard
            placeName="元岡校"
            imageSrc="placecard-motooka.jpg"
            linkHref="/motooka"
            adultsClass={false}
            kidsClass={true}
            programmingClass={false}
          >
            福岡県福岡市西区元岡１５９７ がやがや門 内
          </ClassPlaceCard>
          <ClassPlaceCard
            placeName="別府校"
            imageSrc="placecard-befu.jpg"
            linkHref="/befu"
            adultsClass={false}
            kidsClass={true}
            programmingClass={false}
          >
            福岡県福岡市城南区別府３丁目９−３６ アイコリーネ城南2F
            コミュニティルーム パナシェ内
          </ClassPlaceCard>
        </Stack>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <ClassPlaceCard
            placeName="久留米校"
            imageSrc="placecard-kurume.jpg"
            linkHref="/kurume"
            adultsClass={true}
            kidsClass={true}
            programmingClass={false}
          >
            福岡県久留米市天神町31-6 朝日ビル502
          </ClassPlaceCard>
          <ClassPlaceCard
            placeName="粕屋校"
            imageSrc="placecard-kasuya.jpg"
            linkHref="/kasuya"
            adultsClass={true}
            kidsClass={true}
            programmingClass={false}
          >
            〒811-2303 福岡県糟屋郡粕屋町酒殿字老ノ木192-1 イオンモール福岡
            JEUGIAカルチャーセンター内
          </ClassPlaceCard>
        </Stack>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          {' '}
          <ClassPlaceCard
            placeName="大野城校"
            imageSrc="placecard-onojyo.jpg"
            linkHref="/onojyo"
            adultsClass={false}
            kidsClass={true}
            programmingClass={false}
          >
            〒816-0935 福岡県大野城市錦町４丁目１−１カルチャータウン大野城内
          </ClassPlaceCard>
          <ClassPlaceCard
            placeName="長住校"
            imageSrc="placecard-nagazumi.jpg"
            linkHref="/nagazumi"
            adultsClass={false}
            kidsClass={true}
            programmingClass={false}
          >
            〒815-0075
            福岡県福岡市南区長丘１丁目１３−１ブリヂストンスイミングスクール長住
            内
          </ClassPlaceCard>
          <ClassPlaceCard
            placeName="オンライン校"
            imageSrc="placecard-online.jpg"
            linkHref="/online"
            adultsClass={false}
            kidsClass={false}
            programmingClass={true}
          >
            ※ skypeを使った1~4人の少人数制レッスンです。
          </ClassPlaceCard>
        </Stack>
      </Main>
      <Footer>
        <Text>© 2009-2023 Studio Kura 絵画教室 All rights reserved</Text>
      </Footer>
    </Container>
  </>
)

export default Index
