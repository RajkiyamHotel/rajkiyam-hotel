import { useState } from 'react';
import { TOTAL_STAR } from '@/constants/names';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { custReviews } from '../utils/image';

const ReviewCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? custReviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === custReviews.length - 1 ? 0 : prevIndex + 1));
  };

  const currentReview = custReviews[currentIndex];
  return (
    <div className="max-w-lg mx-auto bg-white p-6 md:max-w-2xl lg:max-w-4xl">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800">{currentReview.customerName}</h3>
        <p className="text-xl text-gray-500">
          {Array(TOTAL_STAR)
            .fill(' ')
            .map((_, i) => (
              <span
                key={i}
                className={i < Math.floor(currentReview.rating) ? "text-yellow-500 text-xl" : "text-gray-400 text-xl"}
              >
                ★
              </span>
            ))}
          {currentReview.rating % 1 !== 0 && <span className="text-yellow-500 text-xl">★</span>}
        </p>
        <p className="text-gray-700 text-base">{currentReview.message}</p>
      </div>

      <div className="flex justify-around items-center">
        <FaArrowLeft
          className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800"
          onClick={handlePrev}
        />
        <FaArrowRight
          className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default ReviewCard;
