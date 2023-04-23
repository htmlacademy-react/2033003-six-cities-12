import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { ReviewData } from '../../types/review-data';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOffer, getSubmittingStatus, getSubmittingSuccessStatus } from '../../store/main-data/main-data.selectors';
import RatingStars from '../rating/rating-stars';
import Comment from './comment';
import { postReviewAction } from '../../store/api-actions/coments-api-actions';
import { resetSubmittingSuccessStatus } from '../../store/main-data/main-data.slice';
import { DEFAULT_COMMENT, DEFAULT_RATING, MIN_LENGTH_COMMENT } from '../../const';

function CommentSubmissionForm(): JSX.Element{
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState<number>(DEFAULT_RATING);
  const [comment, setComment] = useState<string>(DEFAULT_COMMENT);

  const isSubmitting = useAppSelector(getSubmittingStatus);
  const isSubmittingSuccesStatus = useAppSelector(getSubmittingSuccessStatus);
  const selectedOffer = useAppSelector(getOffer);

  useEffect(() => {
    if (isSubmittingSuccesStatus) {
      setRating(DEFAULT_RATING);
      setComment(DEFAULT_COMMENT);
      dispatch(resetSubmittingSuccessStatus);
    }
  }, [isSubmitting, isSubmittingSuccesStatus, dispatch]);

  const onSubmit = useCallback((reviewData: ReviewData) => {
    dispatch(postReviewAction(reviewData));
  }, [dispatch]);

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (rating !== null && comment.length >= MIN_LENGTH_COMMENT) {
      const reviewData: ReviewData = {
        hotelId: String(selectedOffer?.id),
        comment: comment,
        rating: Number(rating)
      };
      onSubmit(reviewData);
    }
  }, [rating, comment, onSubmit, selectedOffer]);

  const isSubmitButtonDisabled = useMemo(() => rating === 0 || comment.length < MIN_LENGTH_COMMENT || isSubmitting,
    [rating, comment.length, isSubmitting]);

  return(
    <form className="reviews__form form" action="" onSubmit={handleSubmit} method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingStars rating={rating} onRatingChange={setRating}/>
      <Comment comment={comment} onChange={setComment} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_LENGTH_COMMENT} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitButtonDisabled}>Submit</button>
      </div>
    </form>
  );
}
export default CommentSubmissionForm;
