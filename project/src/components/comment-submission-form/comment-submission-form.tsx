import { ChangeEvent, Fragment, useState } from 'react';
import { ratings } from '../../const';

function CommentSubmissionForm(): JSX.Element{
  const [_rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  const handleReviewTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(event.target.value);
  };

  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings.map((rating) => (
          <Fragment key={rating.value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={rating.value}
              id={`${rating.value}-stars`}
              type="radio"
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${rating.value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={rating.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={reviewText} onChange={handleReviewTextChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
export default CommentSubmissionForm;
