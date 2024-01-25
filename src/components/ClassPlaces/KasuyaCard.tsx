import { ClassPlaceCard } from '@/components/ClassPlaceCard'

const KasuyaCard = () => (
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
)

export default KasuyaCard
