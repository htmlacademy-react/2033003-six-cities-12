import { FormEvent, useCallback, useMemo, useState } from 'react';
import { ReviewData } from '../../types/review-data';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {toast} from 'react-toastify';
import { getOffer } from '../../store/main-data/main-data.selectors';
import RatingStars from '../rating/rating-stars';
import Comment from './comment';
import { getUserAvatarUrl, getUserEmail } from '../../store/user-process/user-process.selectors';
import { postCommentAction } from '../../store/api-actions/coments-api-actions';

function CommentSubmissionForm(): JSX.Element{
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedOffer = useAppSelector(getOffer);
  const email = useAppSelector(getUserEmail);
  const avatarUrl = useAppSelector(getUserAvatarUrl);
  const userName = email.split('@')[0];

  const onSubmit = useCallback((reviewData: ReviewData) => {
    setIsSubmitting(true);
    dispatch(postCommentAction(reviewData)).then(() => {
      setRating(0);
      setComment('');
      setIsSubmitting(false);
    }).catch((ex: string | null) => {
      toast.warn(ex);
      setIsSubmitting(false);
    });
  }, [dispatch]);

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (rating !== null && comment.length >= 50) {
      onSubmit({
        hotelId: String(selectedOffer?.id),
        comment,
        rating: String(rating),
        avatarUrl,
        name: userName
      });
    }
  }, [rating, comment, onSubmit, selectedOffer, userName, avatarUrl]);

  const isSubmitButtonDisabled = useMemo(() => rating === 0 || comment.length < 50 || isSubmitting,
    [rating, comment.length, isSubmitting]);

  return(
    <form className="reviews__form form" action="" onSubmit={handleSubmit} method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingStars rating={rating} onRatingChange={setRating}/>
      <Comment comment={comment} onChange={setComment} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitButtonDisabled}>Submit</button>
      </div>
    </form>
  );
}
export default CommentSubmissionForm;
