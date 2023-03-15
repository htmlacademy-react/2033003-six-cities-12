import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import Rating from '../rating/rating';

type OfferCardProps = {
  offer: Offer;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function OfferCard({offer, onMouseEnter, onMouseLeave}: OfferCardProps) : JSX.Element{
  return(
    <article 
      className='cities__card place-card' 
      onMouseEnter={(evt: MouseEvent<HTMLElement>) => {
      evt.preventDefault();
      onMouseEnter();
      }} 
      onMouseLeave={onMouseLeave}>
      {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${offer.id}`}>
          {/* //TODO: alt для фото выдумываем или откуда он берется*/}
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={`${offer.title}`}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <Rating rating={offer.rating}/>
        </div>
        
        <h2 className="place-card__name">
          {/* //TODO: где должен быть title а где description */}
          <Link to="#">{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
export default OfferCard;
