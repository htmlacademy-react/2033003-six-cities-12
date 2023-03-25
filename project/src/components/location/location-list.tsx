import Location from './location';

const LOCATIONS = ['Paris','Cologne','Brussels','Amsterdam','Hamburg','Dusseldorf'];

function LocationList():JSX.Element{
  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {LOCATIONS.map((location) => (
          <Location key={location} location={location}/>))}
      </ul>
    </section>
  );
}
export default LocationList;
