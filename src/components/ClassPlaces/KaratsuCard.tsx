import { ClassPlaceCard } from '@/components/ClassPlaceCard'

const KaratsuCard = () => (
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
)

export default KaratsuCard
