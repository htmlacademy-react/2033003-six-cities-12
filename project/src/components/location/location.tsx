import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCity, filterAndSortOffers, resetState} from '../../store/action';

type LocationProps = {
  locationName: string;
  selectedCityName: string;
};

function Location({locationName, selectedCityName}: LocationProps):JSX.Element{
  const dispatch = useAppDispatch();

  const handleLocationClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    dispatch(changeCity(locationName));
    dispatch(resetState());
    dispatch(filterAndSortOffers());
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
