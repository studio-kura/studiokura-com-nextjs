import { ClassPlaceCard } from '@/components/ClassPlaceCard'

const OnlineCard = () => (
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
)

export { OnlineCard }
