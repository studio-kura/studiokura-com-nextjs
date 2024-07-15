import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const HakozakiCard = () => (
  <ClassPlaceCard
    placeName="箱崎校"
    imageSrc="placecard-hakozaki.jpg"
    linkHref="/hakozaki"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    福岡市東区箱崎3丁目8-18 先崎哲進オフィス内
  </ClassPlaceCard>
);

export { HakozakiCard };
