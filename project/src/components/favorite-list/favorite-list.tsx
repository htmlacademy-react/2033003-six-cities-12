import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/main-data/main-data.selectors';
import { Offer } from '../../types/offer';
import FavoritePlaces from './favorite-places';

function FavoriteList() :JSX.Element {
  const favoriteOffers: Offer[] = useAppSelector(getFavoriteOffers);
  const cities: string[] = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));

  return(
    <ul className="favorites__list">
      {cities.map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <FavoritePlaces city={city}/>
        </li>
      ))}
    </ul>
  );
}
export default FavoriteList;
