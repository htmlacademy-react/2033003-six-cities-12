import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/main-data/main-data.selectors';
import { Offer } from '../../types/offer';
import FavoritePlaces from './favorite-places';
import { AppRoute } from '../../const';
import { MouseEvent } from 'react';
import { changeCity } from '../../store/main-process/main-process.slice';

function FavoriteList() :JSX.Element {
  const favoriteOffers: Offer[] = useAppSelector(getFavoriteOffers);
  const cities: string[] = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCityClick = (evt: MouseEvent<HTMLAnchorElement>, city: string| null) => {
    evt.preventDefault();
    if(city){
      navigate(AppRoute.Main);
      dispatch(changeCity(city));
    }
  };

  return(
    <ul className="favorites__list" data-testid="favorites-list">
      {cities.map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#" onClick={(evt)=>handleCityClick(evt, city)}>
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
