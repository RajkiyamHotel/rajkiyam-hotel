'use client'
// import Image from "next/image";

// import HotelImage from '../../public/images/rec.jpg'
import ImageCarousel from "@/components/body/ImageCarousel";
import HotelDetails from "@/components/body/HotelDetails";
// import {image} from "@/components/utils/image";
import { image1 } from "@/components/utils/image";
import ReviewPage from "@/components/reviews/ReviewPage";
const Home: React.FC = () => {

  return (
    <div>
      {/* <Image alt="hotel" src={HotelImage}/> */}
      <ImageCarousel images={image1} />
      <HotelDetails />
      <ReviewPage />
    </div>
  );
};

export default Home;