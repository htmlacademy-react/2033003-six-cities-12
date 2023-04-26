import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/main-process/main-process.slice';
import { AppRoute } from '../../const';

type LocationProps = {
  locationName: string | null;
  selectedCityName: string;
};

function Location({locationName, selectedCityName}: LocationProps):JSX.Element{
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCityClick = (city: string| null) => {
    if(city){
      navigate(AppRoute.Main);
      dispatch(changeCity(city));
    }
  };
  return(
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${locationName === selectedCityName ? 'tabs__item--active' : ''}`} to="#" onClick={()=>handleCityClick(locationName)}>
        <span>{locationName}</span>
      </Link>
    </li>
  );
}
export default Location;
