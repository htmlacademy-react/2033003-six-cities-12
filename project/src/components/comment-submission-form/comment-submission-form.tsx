import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { ratings } from '../../const';
import { ReviewData } from '../../types/review-data';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postCommentAction } from '../../store/api-actions';
import {toast} from 'react-toastify';
import { getOffer } from '../../store/main-data/main-data.selectors';

function CommentSubmissionForm(): JSX.Element{
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedOffer = useAppSelector(getOffer);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const onSubmit = (reviewData: ReviewData) => {
    setIsSubmitting(true);
    dispatch(postCommentAction(reviewData)).then(() => {
      setRating(0);
      setComment('');
      setIsSubmitting(false);
    }).catch((ex: string | null) => {
      toast.warn(ex);
      setIsSubmitting(false);
    });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (rating !== null && comment.length >= 50) {
      onSubmit({
        hotelId: String(selectedOffer?.id),
        comment,
        rating: String(rating),
      });
    }
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const isSubmitButtonDisabled = rating === 0 || comment.length < 50 || isSubmitting;

  return(
    <form className="reviews__form form" action="" onSubmit={handleSubmit} method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings.map((ratingItem) => (
          <Fragment key={ratingItem.value}>
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
        ))}
      </div>
      <textarea minLength={50} maxLength={300} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleCommentChange} value={comment}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitButtonDisabled}>Submit</button>
      </div>
      {/* <ErrorMessage/> */}
    </form>
  );
}
export default CommentSubmissionForm;
