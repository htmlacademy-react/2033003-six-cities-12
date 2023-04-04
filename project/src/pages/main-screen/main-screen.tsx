import { useState } from 'react';
import Header from '../../components/header/header';
import LocationList from '../../components/location/location-list';
import Map from '../../components/map/map';
import Offers from '../../components/offers/offers';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';

type MainScreenProps = {
  offers: Offer[];
}

function MainScreen({offers} : MainScreenProps) : JSX.Element {
  const [activeOfferId, setActiveOffer] = useState<number>(-1);
  const selectedCityName = useAppSelector((state) => state.locationName);
  const cityOffers = offers.filter((offer) => offer.city.name === selectedCityName);

  const city = cityOffers.length > 0 ? cityOffers[0].city : null;
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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
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
            {city ? <Map city={city} activeOfferId={activeOfferId} offers={cityOffers} wrapperClassName={'cities__map'}/> : 
            <section className={`cities__map map`}></section>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
