
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { Review as ReviewType} from '../../types/review';
import { RootState } from '../../types/state';
import CommentSubmissionForm from '../comment-submission-form/comment-submission-form';
import Review from '../review/review';

type ReviewListProps = {
  reviews: ReviewType[];
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  const isLoggedIn = useAppSelector((state: RootState) => state.authorizationStatus) === AuthorizationStatus.Auth;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review key={review.id} review={review}/>))}
      </ul>
      {isLoggedIn && <CommentSubmissionForm/>}
    </section>
  );
}
export default ReviewList;
