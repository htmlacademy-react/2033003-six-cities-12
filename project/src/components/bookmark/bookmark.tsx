type FavoritesPlacesProps = {
  isFavoriteNumber: number;
  onBookmarkClick: () => void;
}

function Bookmark({isFavoriteNumber, onBookmarkClick}: FavoritesPlacesProps) :JSX.Element {
  return(
    <button className={`place-card__bookmark-button button ${isFavoriteNumber === 1 ? 'place-card__bookmark-button--active' : ''}`}
      type="button"
      onClick={onBookmarkClick}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavoriteNumber === 1 ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
export default Bookmark;
