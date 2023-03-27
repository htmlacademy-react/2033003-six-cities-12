import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import Rating from '../rating/rating';

type OfferCardProps = {
  offer: Offer;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isNearby?: boolean;
}

function OfferCard({offer, onMouseEnter, onMouseLeave, isNearby}: OfferCardProps) : JSX.Element{
  const{id, previewImage, title, price, rating, type, isPremium, isFavorite} = offer;
  
  return(
    <article className={`place-card ${isNearby ? 'near-places__card' : 'cities__card'}`}
      onMouseEnter = {onMouseEnter}
      onMouseLeave = {onMouseLeave}
    >
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={`${title}`}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <Rating rating={rating}/>
        </div>

        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
export default OfferCard;
