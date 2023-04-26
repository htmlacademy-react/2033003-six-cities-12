import { useAppSelector } from '../../hooks';
import { getLocationName } from '../../store/main-process/main-process.selectors';

function OffersEmptyList() : JSX.Element {
  const selectedCityName = useAppSelector(getLocationName);

  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment in {selectedCityName}</p>
      </div>
    </section>
  );
}

export default OffersEmptyList;
