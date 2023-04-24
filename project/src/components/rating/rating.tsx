import { memo } from 'react';
import { MAX_RATING } from '../../const';

type RatingProps = {
  rating: number;
}

function Rating({rating}: RatingProps) : JSX.Element {
  const roundedRating = Math.floor(rating);
  const ratingPercentage = (roundedRating / MAX_RATING) * 100;
  return (
    <div className="place-card__stars rating__stars">
      <span style={{ width: `${ratingPercentage}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}

export default memo(Rating);
