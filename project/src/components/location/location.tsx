import { Link } from 'react-router-dom';

type LocationProps = {
  location: string;
};

function Location({location}: LocationProps):JSX.Element{
  return(
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to="#">
        <span>{location}</span>
      </Link>
    </li>
  );
}
export default Location;
