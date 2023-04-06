import { useState } from 'react';
import Header from '../../components/header/header';
import LocationList from '../../components/location/location-list';
import Map from '../../components/map/map';
import Offers from '../../components/offers/offers';
import { useAppSelector } from '../../hooks';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { Offer } from '../../types/offer';
import { sortOffers } from '../../const';
import Loading from '../../components/loading-screen/loading-screen';

function MainScreen() : JSX.Element {
  const [activeOfferId, setActiveOffer] = useState<number>(-1);
  const selectedCityName = useAppSelector((state) => state.locationName);
  const selectedSortingMethod = useAppSelector((state) => state.sortingMethod);
  const offers: Offer[] = useAppSelector((state) => state.offers);
  const sortedOffers: Offer[] = sortOffers(offers,selectedSortingMethod).filter((offer) => offer.city.name === selectedCityName);

  const city = sortedOffers.find((offer) => offer.city.name === selectedCityName)?.city ?? null;
  return(
    
    <div className={`page page--gray page--main ${sortedOffers.length === 0 ? 'page--main-empty' : ''}`}>
      <Header offers={sortedOffers}/>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList selectedCityName={selectedCityName}/>
      </div>
      <div className="cities">
        <div className={`cities__places-container container ${sortedOffers.length > 0 ? 'cities__places-container--empty' : ''}`}>
          {sortedOffers.length > 0 ?
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in {selectedCityName}</b>
              <SortingOptions/>
              <div className="cities__places-list places__list tabs__content">
                <Offers offers={sortedOffers} setActiveOffer={setActiveOffer}/>
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
              <Map city={city} activeOfferId={activeOfferId} offers={sortedOffers} wrapperClassName={'cities__map'}/> :
              <section className='cities__map map'></section>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
