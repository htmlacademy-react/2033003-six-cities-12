import { ratings } from '../../const';
import RatingStar from './rating-star';

type RatingStarsProps = {
  rating: number;
  onRatingChange: (value: number) => void;
}

function RatingStars({rating, onRatingChange}: RatingStarsProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {ratings.map((ratingItem) => (
        <RatingStar key={ratingItem.value} ratingItem={ratingItem} rating={rating} onRatingChange={onRatingChange}/>
      ))}
    </div>
  );
}
export default RatingStars;
