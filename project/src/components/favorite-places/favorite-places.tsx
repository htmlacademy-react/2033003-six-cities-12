import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/main-data/main-data.selectors';
import FavoriteItem from '../favorite-item/favorite-item';

type FavoritePlacesProps = {
  city: string;
}

function FavoritePlaces({city}: FavoritePlacesProps) :JSX.Element {
  const favoriteOffers: Offer[] = useAppSelector(getFavoriteOffers);

  return(
    <div className="favorites__places">
      {favoriteOffers
        .filter(({ city: { name } }) => name === city)
        .map((offer) => (<FavoriteItem key={`${city}-${offer.id}`} offer={offer}/>))}
    </div>
  );
}
export default FavoritePlaces;
