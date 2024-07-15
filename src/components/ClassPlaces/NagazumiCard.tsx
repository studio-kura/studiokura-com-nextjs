import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const NagazumiCard = () => (
  <ClassPlaceCard
    placeName="長住校"
    imageSrc="placecard-nagazumi.jpg"
    linkHref="/nagazumi"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    〒815-0075
    福岡県福岡市南区長丘１丁目１３−１ブリヂストンスイミングスクール長住 内
  </ClassPlaceCard>
);

export { NagazumiCard };
