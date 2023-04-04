import { useState } from 'react';
import Header from '../../components/header/header';
import LocationList from '../../components/location/location-list';
import Map from '../../components/map/map';
import Offers from '../../components/offers/offers';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { RootState } from '../../types/state';

type MainScreenProps = {
  offers: Offer[];
}

function MainScreen({offers} : MainScreenProps) : JSX.Element {
  const [activeOfferId, setActiveOffer] = useState<number>(-1);
  const selectedCityName = useAppSelector((state) => state.locationName);
  const selectedSortingMethod = useAppSelector((state: RootState) => state.sortingMethod);
  const cityOffers = offers.filter((offer) => offer.city.name === selectedCityName);

  const city = offers.find((offer) => offer.city.name === selectedCityName)?.city || null;
  return(
    <div className={`page page--gray page--main ${cityOffers.length === 0 ? 'page--main-empty' : ''}`}>
      <Header offers={cityOffers}/>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList selectedCityName={selectedCityName}/>
      </div>
      <div className="cities">
        <div className={`cities__places-container container ${cityOffers.length > 0 ? 'cities__places-container--empty' : ''}`}>
          {cityOffers.length > 0 ?
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {selectedCityName}</b>
              <SortingOptions/>
              <div className="cities__places-list places__list tabs__content">
                <Offers offers={cityOffers} setActiveOffer={setActiveOffer}/>
              </div>
            </section> :
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {selectedCityName}</p>
              </div>
            </section>}
          <div className="cities__right-section">
            {city ?
              <Map city={city} activeOfferId={activeOfferId} offers={cityOffers} wrapperClassName={'cities__map'}/> :
              <section className='cities__map map'></section>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
