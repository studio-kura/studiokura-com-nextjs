import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const NishijinCard = () => (
  <ClassPlaceCard
    placeName="西新校"
    imageSrc="placecard-nishijin.jpg"
    linkHref="/nishijin"
    adultsClass={true}
    kidsClass={true}
    programmingClass={true}
  >
    福岡県福岡市西新一丁目11-27 ロフティ西新903号室
  </ClassPlaceCard>
);

export { NishijinCard };
