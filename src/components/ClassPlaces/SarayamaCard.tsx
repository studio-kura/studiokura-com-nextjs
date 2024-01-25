import { ClassPlaceCard } from '@/components/ClassPlaceCard'

const SarayamaCard = () => (
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
)

export default SarayamaCard
