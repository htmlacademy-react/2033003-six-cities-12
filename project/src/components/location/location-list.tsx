import Location from './location';

const LOCATIONS = ['Paris','Cologne','Brussels','Amsterdam','Hamburg','Dusseldorf'];

type LocationListProps = {
  selectedCityName: string;
}
function LocationList({selectedCityName}: LocationListProps):JSX.Element{
  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {LOCATIONS.map((locationName) => (
          <Location key={locationName} locationName={locationName} selectedCityName={selectedCityName}/>))}
      </ul>
    </section>
  );
}
export default LocationList;
