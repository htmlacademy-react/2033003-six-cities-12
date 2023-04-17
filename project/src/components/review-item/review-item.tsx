import { Review } from '../../types/review';
import Rating from '../rating/rating';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem({review}: ReviewItemProps): JSX.Element {
  const {id, user, rating, comment, date} = review;
  return (
    <li key={id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="User avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name.split(' ')[0]}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <Rating rating={rating}/>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {date.split('T')[0]}
        </time>
      </div>
    </li>
  );
}
export default ReviewItem;
