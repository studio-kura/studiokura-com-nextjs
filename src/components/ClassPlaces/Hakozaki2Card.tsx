import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const Hakozaki2Card = () => (
  <ClassPlaceCard
    placeName="箱崎第二校"
    imageSrc="placecard-hakozaki2.jpg"
    linkHref="/hakozaki2"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    福岡県福岡市東区箱崎２丁目１０−３５
  </ClassPlaceCard>
);

export { Hakozaki2Card };
