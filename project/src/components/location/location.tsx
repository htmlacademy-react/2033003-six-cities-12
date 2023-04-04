import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity, filterAndSortOffers, resetStateOffers } from '../../store/action';
import { offers } from '../../mocks/offers';

type LocationProps = {
  locationName: string;
  selectedCityName: string;
};

function Location({locationName, selectedCityName}: LocationProps):JSX.Element{
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);

  const handleLocationClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    dispatch(changeCity(locationName));
    dispatch(resetStateOffers());
    dispatch(filterAndSortOffers(offers));

  };
  return(
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${locationName === selectedCityName ? 'tabs__item--active' : ''}`} to="#" onClick={handleLocationClick}>
        <span>{locationName}</span>
      </Link>
    </li>
  );
}
export default Location;
