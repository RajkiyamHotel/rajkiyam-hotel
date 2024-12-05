import { REVIEW_SUBHEADING } from "@/constants/names";
import ReviewCard from "./ReviewCard";
const ReviewPage: React.FC = () => {

  return (
    <div className="bg-white text-center items-center justify-center py-4">
        <span className="text-black text-2xl mb-4 font-medium">{REVIEW_SUBHEADING}</span>
        <ReviewCard />
    </div>
  );
};

export default ReviewPage;