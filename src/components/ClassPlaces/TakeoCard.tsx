import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const TakeoCard = () => (
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
);

export { TakeoCard };
