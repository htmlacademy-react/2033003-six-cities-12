import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../hooks/use-favorites/use-favorites';

const BOOKMARK_CLASSNAME = {
  placeCard: {
    default: 'place-card__bookmark-button',
    active: 'place-card__bookmark-button--active',
    icon: 'place-card__bookmark-icon',
    width: 18,
    height: 19,
  },
  property: {
    default: 'property__bookmark-button',
    active: 'property__bookmark-button--active',
    icon: 'property__bookmark-icon',
    width: 31,
    height: 33,
  },
};

type FavoritesPlacesProps = {
  offerId: number;
  isFavorite: boolean;
  isProperty?: boolean;
}

function Bookmark({offerId, isFavorite, isProperty}: FavoritesPlacesProps) :JSX.Element {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;
  const { isFavorite: isOfferFavorite, toggleFavorite } = useFavorites(offerId, isFavorite);

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
