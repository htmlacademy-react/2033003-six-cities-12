import { Offer } from '../../types/offer';

type RatingProps = {
  rating: number;
}
function Rating({rating}: RatingProps) : JSX.Element {
  const maxRating = 5;
  const ratingPercentage = (rating / maxRating) * 100;
  return (
    <div className="place-card__stars rating__stars">
      <span style={{ width: `${ratingPercentage}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}

export default Rating;