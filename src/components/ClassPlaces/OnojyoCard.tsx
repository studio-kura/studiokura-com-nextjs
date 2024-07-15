import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const OnojyoCard = () => (
  <ClassPlaceCard
    placeName="大野城校"
    imageSrc="placecard-onojyo.jpg"
    linkHref="/onojyo"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    〒816-0935 福岡県大野城市錦町４丁目１−１カルチャータウン大野城内
  </ClassPlaceCard>
);

export { OnojyoCard };
