import { FormEvent, Fragment, useRef, useState } from 'react';
import { ratings } from '../../const';
import { ReviewData } from '../../types/review-data';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postCommentAction } from '../../store/api-actions';

function CommentSubmissionForm(): JSX.Element{
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState(0);
  const selectedOffer = useAppSelector((state) => state.selectedOffer);
  //const [reviewText, setReviewText] = useState('');

  const commentRef = useRef<HTMLTextAreaElement | null>(null);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const onSubmit = (reviewData: ReviewData) => {
    dispatch(postCommentAction(reviewData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (rating !== null && commentRef.current !== null) {
      onSubmit({
        hotelId: String(selectedOffer?.id),
        comment: commentRef.current.value,
        rating: String(rating),
      });
    }
  };

  return(
    <form className="reviews__form form" action="" onSubmit={handleSubmit} method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings.map((rating) => (
          <Fragment key={rating.value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              id={`${rating.value}-stars`}
              type="radio"
              value={rating.value}
              onChange={() => handleRatingChange(rating.value)}
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
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" ref={commentRef}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}
export default CommentSubmissionForm;
