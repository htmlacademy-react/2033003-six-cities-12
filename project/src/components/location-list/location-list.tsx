import { memo } from 'react';
import { LOCATIONS } from '../../const';
import { useAppSelector } from '../../hooks';
import { getLocationName } from '../../store/main-process/main-process.selectors';
import Location from './location';

function LocationList():JSX.Element{
  const selectedCityName = useAppSelector(getLocationName);
  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {LOCATIONS.map((locationName) => (
          <Location key={locationName} locationName={locationName} selectedCityName={selectedCityName}/>))}
      </ul>
    </section>
  );
}
export default memo(LocationList);
