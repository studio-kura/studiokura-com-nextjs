import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const ItoshimaCard = () => (
  <ClassPlaceCard
    placeName="糸島校"
    imageSrc="placecard-itoshima.jpg"
    linkHref="/itoshima"
    adultsClass={true}
    kidsClass={true}
    programmingClass={true}
  >
    〒819-1613 福岡県糸島市二丈松末586
  </ClassPlaceCard>
);

export { ItoshimaCard };
