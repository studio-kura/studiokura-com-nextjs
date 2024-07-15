import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const MomochiCard = () => (
  <ClassPlaceCard
    placeName="百道校"
    imageSrc="placecard-momochi.jpg"
    linkHref="/momochi"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    福岡県福岡市早良区百道浜1-3-70ザ・レジデンシャルスイート福岡
    ブリジストンアリーナ内
  </ClassPlaceCard>
);

export { MomochiCard };
