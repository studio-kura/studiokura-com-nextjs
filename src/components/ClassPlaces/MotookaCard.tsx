import { ClassPlaceCard } from '@/components/ClassPlaceCard'

const MotookaCard = () => (
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
)

export default MotookaCard
