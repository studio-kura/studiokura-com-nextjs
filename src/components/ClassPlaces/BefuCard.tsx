import { ClassPlaceCard } from '@/components/ClassPlaceCard'

const BefuCard = () => (
  <ClassPlaceCard
    placeName="別府校"
    imageSrc="placecard-befu.jpg"
    linkHref="/befu"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    福岡県福岡市城南区別府３丁目９−３６ アイコリーネ城南2F コミュニティルーム
    パナシェ内
  </ClassPlaceCard>
)

export default BefuCard
