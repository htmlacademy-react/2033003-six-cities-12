import { Review as ReviewType} from '../../types/review';
import Rating from '../rating/rating';
type ReviewProps = {
  review: ReviewType;
}
function Review({review}: ReviewProps): JSX.Element {
  const {id, avatar, author, rating, text, date} = review;
  return (
    <li key={id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {author.split(' ')[0]}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <Rating rating={rating}/>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date.toISOString().split('T')[0]}>
          {date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </time>
      </div>
    </li>
  );
}
export default Review;
