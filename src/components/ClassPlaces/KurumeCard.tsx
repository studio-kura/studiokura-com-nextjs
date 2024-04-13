import { ClassPlaceCard } from '@/components/ClassPlaceCard'

const KurumeCard = () => (
  <ClassPlaceCard
    placeName="久留米校"
    imageSrc="placecard-kurume.jpg"
    linkHref="/kurume"
    adultsClass={true}
    kidsClass={true}
    programmingClass={true}
  >
    福岡県久留米市天神町31-6 朝日ビル502
  </ClassPlaceCard>
)

export { KurumeCard }
