import { Link } from 'react-router-dom';
import Rating from '../rating/rating';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { FavoriteData } from '../../types/favorite-data';
import { toggleFavoriteAction } from '../../store/api-actions';
import Bookmark from '../bookmark/bookmark';

type FavoritesPlacesProps = {
  offer: Offer;
}

function FavoriteItem({offer}: FavoritesPlacesProps) :JSX.Element {
  const { id, isPremium, previewImage, price, isFavorite, rating, title, type } = offer;
  const [isFavoriteNumber, setIsFavorite] = useState<number>(isFavorite ? 1 : 0);
  const dispatch = useAppDispatch();

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
    <article className="favorites__card place-card">
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt={`${title}`}/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
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
          <Link to="#">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
export default FavoriteItem;
