'use client'
// import HotelImage from '../../public/images/rec.jpg'
import ImageCarousel from "@/components/body/ImageCarousel";
import HotelDetails from "@/components/body/HotelDetails";
// import {image} from "@/components/utils/image";
// import { image1 } from "@/components/utils/image";
import { allImageMainPage } from "@/components/utils/imageList";
import ReviewPage from "@/components/reviews/ReviewPage";
import RoomTypeMain from "@/components/body/room-type/RoomTypeMain";
const Home: React.FC = () => {

  return (
    <div>
      {/* <Image alt="hotel" src={HotelImage}/> */}
      <ImageCarousel images={allImageMainPage} />
      <HotelDetails />
      <RoomTypeMain />
      <ReviewPage />
    </div>
  );
};

export default Home;