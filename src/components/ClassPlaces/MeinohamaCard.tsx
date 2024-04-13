import { ClassPlaceCard } from '@/components/ClassPlaceCard'

const MeinohamaCard = () => (
  <ClassPlaceCard
    placeName="姪浜校"
    imageSrc="placecard-meinohama.jpg"
    linkHref="/meinohama"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    〒819-0002 福岡県福岡市西区姪の浜３丁目３−３５ ハイツ千峰
  </ClassPlaceCard>
)

export { MeinohamaCard }
