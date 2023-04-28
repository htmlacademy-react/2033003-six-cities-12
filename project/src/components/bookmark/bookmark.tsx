import { memo } from 'react';
import { AppRoute, AuthorizationStatus, BOOKMARK_CLASSNAME } from '../../const';
import { useNavigate } from 'react-router-dom';
import useFavorites from '../../hooks/use-favorites/use-favorites';
import { useIsLoggedIn } from '../../hooks/use-is-logged-in/use-is-logged-in';

type FavoritesPlacesProps = {
  offerId: number;
  isFavorite: boolean;
  isProperty?: boolean;
}

function Bookmark({offerId, isFavorite, isProperty}: FavoritesPlacesProps) :JSX.Element {
  const navigate = useNavigate();
  const isLoggedIn = useIsLoggedIn(AuthorizationStatus.Auth);
  const { isOfferFavorite, toggleFavorite } = useFavorites(offerId, isFavorite);

  const placeCardDefaultClass = isProperty
    ? BOOKMARK_CLASSNAME.property.default
    : BOOKMARK_CLASSNAME.placeCard.default;

  const placeCardActiveClass = isProperty
    ? BOOKMARK_CLASSNAME.property.active
    : BOOKMARK_CLASSNAME.placeCard.active;

  const className = `${'button'} ${placeCardDefaultClass} ${isOfferFavorite ? placeCardActiveClass : ''}`;

  const handleBookmarkClick = () => {
    if (isLoggedIn) {
      toggleFavorite();
    } else {
      navigate(AppRoute.Login);
    }
  };

  return(
    <button className={className}
      type="button"
      onClick={handleBookmarkClick}
    >
      <svg
        className={isProperty ? BOOKMARK_CLASSNAME.property.icon : BOOKMARK_CLASSNAME.placeCard.icon}
        width={isProperty ? BOOKMARK_CLASSNAME.property.width : BOOKMARK_CLASSNAME.placeCard.width}
        height={isProperty ? BOOKMARK_CLASSNAME.property.height : BOOKMARK_CLASSNAME.placeCard.height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
export default memo(Bookmark);
