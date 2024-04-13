import { ClassPlaceCard } from '@/components/ClassPlaceCard'

const KashiiCard = () => (
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
)

export { KashiiCard }
