import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const HashimotoCard = () => (
  <ClassPlaceCard
    placeName="橋本校"
    imageSrc="placecard-hashimoto.jpg"
    linkHref="/hashimoto"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    福岡県福岡市西区橋本2-27-2 木の葉モール橋本 JEUGIAカルチャーセンター内
  </ClassPlaceCard>
);

export { HashimotoCard };
