import { MouseEventHandler, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Offer } from '../../types/offer';
import Rating from '../rating/rating';
import { toggleFavoriteAction } from '../../store/api-actions';
import { FavoriteData } from '../../types/favorite-data';
import { useAppDispatch } from '../../hooks';
import Bookmark from '../bookmark/bookmark';

type OfferCardProps = {
  offer: Offer;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isNearby?: boolean;
}

function OfferCard({offer, onMouseEnter, onMouseLeave, isNearby}: OfferCardProps) : JSX.Element{
  const{id, previewImage, title, price, rating, type, isPremium, isFavorite} = offer;
  const [isFavoriteNumber, setIsFavorite] = useState<number>(isFavorite ? 1 : 0);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNavigateClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    navigate(`/offer/${id}`, { state: { from: 'OfferCard' } });
  };

  const onSubmit = (favoriteData: FavoriteData) => {
    dispatch(toggleFavoriteAction(favoriteData));
  };

  const handleBookmarkClick = () => {
    const newStatus = !isFavoriteNumber;
    onSubmit({
      offerId: id,
      status: newStatus ? 1 : 0,
    });
    setIsFavorite(newStatus ? 1 : 0);
  };

  return(
    <article className={`place-card ${isNearby ? 'near-places__card' : 'cities__card'}`}
      onMouseEnter = {onMouseEnter}
      onMouseLeave = {onMouseLeave}
    >
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="#" onClick={handleNavigateClick}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={`${title}`}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark isFavoriteNumber={isFavoriteNumber} onBookmarkClick={handleBookmarkClick}/>
        </div>
        <div className="place-card__rating rating">
          <Rating rating={rating}/>
        </div>

        <h2 className="place-card__name">
          <Link to="#" onClick={handleNavigateClick}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
export default OfferCard;
