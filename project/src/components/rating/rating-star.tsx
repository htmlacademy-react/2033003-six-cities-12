import { Fragment, useCallback } from 'react';
import { Rating } from '../../types/rating';

type RatingStarProps = {
  ratingItem: Rating;
  rating: number;
  onRatingChange: (value: number) => void;
}

function RatingStar({ratingItem, rating, onRatingChange}: RatingStarProps): JSX.Element {
  const handleRatingChange = useCallback((value: number) => {
    onRatingChange(value);
  }, [onRatingChange]);

  return (
    <Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        id={`${ratingItem.value}-stars`}
        type="radio"
        value={ratingItem.value}
        checked={rating === ratingItem.value}
        onChange={() => handleRatingChange(ratingItem.value)}
      />
      <label
        htmlFor={`${ratingItem.value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={ratingItem.title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}
export default RatingStar;
